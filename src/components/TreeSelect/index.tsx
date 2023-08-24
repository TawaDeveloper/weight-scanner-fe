import { Spin, Empty } from 'antd';
import { useState, useEffect } from 'react';
import styles from './index.less';
import { DataTools } from './tools';
import TreeSelectItem, { SelectItemData } from './TreeSelectItem';

export type TreeSelectNode = SelectItemData & {
  parentId?: string;
  leaf?: boolean;
};

/** *
 * @default {
 *    id: 'nodeId',
 *    label: 'label',
 *    parentId: 'parentId',
 *    children: 'children',
 *  }
 */
export type FieldNames = {
  value?: string;
  label?: string;
  parentId?: string;
  leaf?: string;
};

export type TreeSelectProps<ValueType> = {
  onChang?: (values: string[], selectNodes: any[]) => void;
  data?: string[];
  disabled?: boolean;
  loading?: boolean;
  treeData?: ValueType[];
  fieldNames?: FieldNames;
  defaultOpen?: boolean;
  loadData?: (id: string) => Promise<any>;
};

type ActiveType = { parentId: string; list: TreeSelectNode[] };

const TreeSelect = (props: TreeSelectProps<any>) => {
  const {
    onChang,
    data,
    loadData,
    treeData = [],
    fieldNames = {
      value: 'nodeId',
      label: 'label',
      parentId: 'parentId',
      leaf: 'leaf',
    },
    disabled = false,
    loading = false,
    defaultOpen = false,
  } = props;
  const [actives, setActives] = useState<ActiveType[]>([]);
  const [showIds, setShowIds] = useState<string[]>([]);
  const [pathIds, setPathIds] = useState<string[]>([]);

  const submitChange = () => {
    if (onChang) {
      const [keys, values] = DataTools.getCheckedInMap();
      onChang(keys, values);
    }
  };

  const updateActives = (nodeId?: string) => {
    const a: ActiveType[] = [];
    let keys = showIds;
    if (nodeId !== undefined) {
      keys = DataTools.getParentIdsByNodeId(nodeId);
      setShowIds(keys);
    }
    keys.forEach((key) => {
      const list = DataTools.getChildrenNodesByParentId(key);
      a.push({ parentId: key, list: list || [] });
    });
    setActives(a);
  };

  const updatePath = (nodeId: string) => {
    const paths = DataTools.getParentIdsByNodeId(nodeId);
    if (!paths.includes(nodeId)) {
      paths.push(nodeId);
    }
    setPathIds(paths);
  };

  const updateMapWithData = (nodes: string[]) => {
    nodes.forEach((nodeId) => {
      if (!DataTools.checkHasId(nodeId) && loadData) {
        loadData(nodeId);
      }
    });
  };

  const handleCheckChange = (nodeId: string, checked = false) => {
    DataTools.clearCountCache();
    DataTools.updateCountById(nodeId, checked);
    DataTools.clearCountCache();
    DataTools.updateCounts();
    submitChange();
  };

  const updateShow = async (nodeId: string) => {
    if (!DataTools.checkHasChildren(nodeId) && loadData) {
      loadData(nodeId);
    }
    updateActives(nodeId);
  };

  const handleLabelClick = (newValue: TreeSelectNode) => {
    const { nodeId, leaf, checked } = newValue;
    updatePath(nodeId);
    if (disabled) return;
    if (leaf) {
      handleCheckChange(nodeId, !checked);
      return;
    }
    updateShow(nodeId);
  };

  const handleCheckboxChange = (newValue: TreeSelectNode) => {
    const { nodeId, checked } = newValue;
    updatePath(nodeId);
    handleCheckChange(nodeId, !checked);
  };

  useEffect(() => {
    if (!treeData.length) return;
    DataTools.initMap(treeData, fieldNames);
    let id = DataTools.getRootId();
    if (defaultOpen) {
      const c = DataTools.getChildrenNodesByParentId(id);
      if (c && c[0]) {
        id = c[0].nodeId;
      }
    }
    updateActives(id);
  }, [treeData]);

  useEffect(() => {
    if (data) {
      DataTools.initCounts();
      updateMapWithData(data);
      DataTools.clearCountCache();
      data.forEach((nodeId) => {
        DataTools.updateCountById(nodeId?.toString(), true);
      });
      DataTools.clearCountCache();
      DataTools.updateCounts();
    }
    updateActives();
  }, [data]);

  return (
    <div className={styles.selectContentCard}>
      {!treeData.length && !loading && (
        <div className={styles.selectNoData}>
          <Empty />
        </div>
      )}
      {loading && (
        <div className={styles.selectSpin}>
          <Spin />
        </div>
      )}
      {!!treeData.length &&
        !loading &&
        actives.map(({ parentId, list }, index) => {
          return (
            <div
              className={`${styles.checkboxesDiv} ${
                index !== 0 && styles.checkboxDivider
              }`}
              key={`${parentId}checkboxesDiv`}
            >
              <div className={styles.checkboxesItems}>
                {list.map((item) => (
                  <TreeSelectItem
                    key={item.nodeId}
                    data={item}
                    disabled={disabled}
                    picked={pathIds.includes(item.nodeId)}
                    onLabelClick={() => handleLabelClick(item)}
                    onChang={() => handleCheckboxChange(item)}
                  />
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default TreeSelect;
