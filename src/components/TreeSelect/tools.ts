/* eslint-disable class-methods-use-this */
import { FieldNames, TreeSelectNode } from '.';

export type MapValueType = {
  nodeId: string;
  label: React.ReactNode;
  all: Set<string>;
  semi: Set<string>;
  indeterminate: boolean;
  checked: boolean;
  children?: MapValueType[];
  leaf?: boolean;
  parentId?: string;
};

const CheckType = {
  Unchecked: Symbol('Unchecked'),
  Indeterminate: Symbol('Indeterminate'),
  Checked: Symbol('Checked'),
};

class DataToolsClass {
  dataMap: Map<string, MapValueType>;

  cacheSet: Set<string>;

  treeMap: Map<any, any>;

  private rootId: string;

  constructor(rootId = 'root') {
    this.cacheSet = new Set();
    this.dataMap = new Map();
    this.treeMap = new Map();
    this.rootId = rootId;
    this.setNodeToMap({ nodeId: rootId, label: '' });
  }

  getMapData(nodeId?: string) {
    if (nodeId !== undefined) {
      return this.dataMap.get(nodeId);
    }
    return undefined;
  }

  initMap(nodes: any[], fieldNames: FieldNames) {
    if (!nodes.length) {
      return;
    }
    const {
      value = 'nodeId',
      label = 'label',
      parentId = 'parentId',
      leaf = 'leaf',
    } = fieldNames;
    nodes.forEach((i) => {
      this.setDataToTreeMap(i, value);
      this.setNodeToMap({
        nodeId: i[value],
        label: i[label],
        parentId: i[parentId] !== undefined ? i[parentId] : this.rootId,
        leaf: i[leaf],
      });
    });
    this.updateNodeChildren();
  }

  initCounts() {
    this.dataMap.forEach((i) => this.initCountOfNow(i));
  }

  initCountOfNow(old: MapValueType) {
    const { semi, all } = old;
    semi.clear();
    all.clear();
    Object.assign(old, {
      indeterminate: false,
      checked: false,
    });
  }

  insertCountCache(nodeId: string) {
    this.cacheSet.add(nodeId);
  }

  clearCountCache() {
    this.cacheSet.clear();
  }

  cacheHas(nodeId: string) {
    return this.cacheSet.has(nodeId);
  }

  countToNodeById(nodeId: string) {
    const c = this.getMapData(nodeId);
    if (c) {
      const { nodeId, label, leaf, checked, indeterminate } = c;
      return { nodeId, label, leaf, checked, indeterminate };
    }
    return undefined;
  }

  setDataToTreeMap(data = {}, key = 'id') {
    this.treeMap.set(`${data[key]}`, data);
  }

  setNodeToMap(node: TreeSelectNode, checked = false) {
    const { nodeId, label, leaf, parentId } = node;
    const nodeId1 = nodeId.toString();
    const parentId1 = parentId?.toString();
    const c = {
      nodeId: nodeId1,
      label,
      semi: new Set<string>(),
      all: new Set<string>(checked ? [nodeId] : undefined),
      indeterminate: false,
      checked,
      leaf,
      parentId: parentId1,
    };
    this.dataMap.set(nodeId1, c);
    return c;
  }

  updateCounts() {
    this.dataMap.forEach((i) => {
      const { semi, all, children } = i;
      if (children?.length) {
        i.checked = all.size === children.length;
        i.indeterminate =
          all.size === children.length ? false : !!(all.size + semi.size);
      } else {
        i.checked = all.size === 1;
        i.indeterminate = false;
      }
    });
  }

  handleParentCount(
    nodeId: string,
    childId: string,
    checkType = CheckType.Unchecked,
  ) {
    const c = this.getMapData(nodeId);
    if (c) {
      this.insertCountCache(nodeId);
      const { semi, all } = c;
      switch (checkType) {
        case CheckType.Indeterminate:
          semi.add(childId);
          all.delete(childId);
          break;
        case CheckType.Checked:
          semi.delete(childId);
          all.add(childId);
          break;
        default:
          semi.delete(childId);
          all.delete(childId);
          break;
      }
    }
  }

  handleChildrenCount(
    nodeId: string,
    childId: string,
    checkType = CheckType.Unchecked,
  ) {
    const c = this.getMapData(nodeId);
    if (c) {
      this.insertCountCache(nodeId);
      const { semi, all } = c;
      switch (checkType) {
        case CheckType.Checked:
          semi.delete(childId);
          all.add(childId);
          break;
        default:
          semi.clear();
          all.clear();
          break;
      }
    }
  }

  updateNodeChildren = () => {
    this.dataMap.forEach((i) => {
      const { parentId, nodeId } = i;
      const p_c = this.getMapData(parentId);
      const c = this.getMapData(nodeId);
      if (p_c && c) {
        if (p_c.children) {
          if (!p_c.children.find((p) => p.nodeId === nodeId)) {
            p_c.children.push(c);
          }
        } else {
          p_c.children = [c];
        }
      }
    });
  };

  updateParentCounts(nodeId?: string, checkType = CheckType.Unchecked) {
    if (nodeId !== undefined) {
      const c = this.getMapData(nodeId);
      if (c && c.parentId !== undefined) {
        this.handleParentCount(c.parentId, nodeId, checkType);
        const type = this.getCountCheckType(c.parentId);
        this.updateParentCounts(c.parentId, type);
      }
    }
  }

  updateChildrenCounts(nodeId: string, checkType = CheckType.Unchecked) {
    const c = this.getMapData(nodeId);
    if (c) {
      if (c.children?.length) {
        c.children?.forEach((i) => {
          this.updateChildrenCounts(i.nodeId, checkType);
          this.handleChildrenCount(nodeId, i.nodeId, checkType);
        });
      } else {
        this.handleChildrenCount(nodeId, nodeId, checkType);
      }
    }
  }

  updateCountById(nodeId: string, checked = false) {
    const c = this.getMapData(nodeId);
    const checkType = checked ? CheckType.Checked : CheckType.Unchecked;
    if (!this.cacheHas(nodeId) && c) {
      this.updateChildrenCounts(nodeId, checkType);
      this.updateParentCounts(nodeId, checkType);
    }
  }

  checkHasParent(nodeId: string) {
    const c = this.getMapData(nodeId);
    if (c) {
      const c2 = this.getMapData(c.parentId);
      return !!c2;
    }
    return false;
  }

  checkHasId(nodeId: string) {
    return !!this.getMapData(nodeId);
  }

  checkHasChildren(nodeId: string) {
    const c = this.getMapData(nodeId);
    if (c && !c.leaf) {
      return !!c.children?.length;
    }
    return false;
  }

  getCountCheckType(nodeId: string) {
    const c = this.getMapData(nodeId);
    if (c && c.children?.length) {
      const { semi, all, children } = c;
      const len = children.length;
      if (all.size === len) {
        return CheckType.Checked;
      }
      if (all.size || semi.size) {
        return CheckType.Indeterminate;
      }
    }
    return CheckType.Unchecked;
  }

  getChildrenNodesByParentId(parentId: string) {
    const c = this.getMapData(parentId);
    if (c) {
      const { children } = c;
      const list: TreeSelectNode[] = [];
      children?.forEach((i) => {
        const n = this.countToNodeById(i.nodeId);
        if (n) {
          list.push(n);
        }
      });
      return list;
    }
    return false;
  }

  getDataMap() {
    return this.dataMap;
  }

  getParentIdsByNodeId(nodeId?: string): string[] {
    const c = this.getMapData(nodeId);
    if (nodeId !== undefined && c) {
      const { parentId, leaf } = c;
      const result = this.getParentIdsByNodeId(parentId);
      return leaf ? result : [...result, nodeId];
    }
    return [];
  }

  getCheckedInMap(): [string[], any[]] {
    const list: any[] = [];
    const keys: string[] = [];
    this.dataMap.forEach(({ checked, nodeId }) => {
      if (nodeId !== this.rootId && checked) {
        const node = this.treeMap.get(nodeId);
        if (node) {
          keys.push(nodeId);
          list.push(node);
        }
      }
    });
    return [keys, list];
  }

  getRootId() {
    return this.rootId;
  }
}

export const DataTools = new DataToolsClass();
