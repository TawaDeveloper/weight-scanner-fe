import { Modal, Spin, Tree, message } from 'antd';
import { DataNode, TreeProps } from 'antd/lib/tree';
import { t } from 'i18next';
import { useEffect, useRef, useState } from 'react';
import { bakeryAPI } from '@/services';

const OptPermissionDialog = ({
  role,
  onCancel,
}: {
  role: defs.tawa.PageRoleResponse;
  onCancel: () => void;
}) => {
  const [treeData, setTreeData] = useState<DataNode[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const currentCheckedKeys = useRef<number[]>([]);

  const generateTreeData = (datas: defs.bakery.PermissionVo[]) => {
    const treeNodes: DataNode[] = [];
    for (let i = 0, l = datas.length; i < l; i++) {
      const data = datas[i];
      const node: DataNode = {
        title: data.name,
        key: Number(data.id),
      };
      if (data.children && data.children?.length > 0) {
        node.children = generateTreeData(data.children);
      }
      if (!data.children || data.children.length === 0) {
        node.isLeaf = true;
      }
      treeNodes.push(node);
    }
    return treeNodes;
  };
  const initTreeData = async () => {
    setLoading(true);
    const response = await bakeryAPI.permission.optPermissionOption.request();
    if (response.data) {
      setTreeData(generateTreeData(response.data));
    }

    const response2 =
      await bakeryAPI.permission.listOperationPermissions.request({
        roleId: Number(role.id),
      });
    console.log(response, response2);
    setLoading(false);
  };

  useEffect(() => {
    initTreeData();
  }, []);

  const save = async () => {
    setLoading(true);
    await bakeryAPI.permission.saveOperationPermissions.request({
      roleId: Number(role.id),
      referIds: currentCheckedKeys.current,
    });
    setLoading(false);
    message.success(t<string>('pages.common.operationSuccess'));
    onCancel();
  };

  const onCheck: TreeProps['onCheck'] = (checkedKeys) => {
    currentCheckedKeys.current = checkedKeys as any;
  };

  return (
    <Modal
      title={t<string>('pages.rolePermissionSetting.optPermissionSetting')}
      open
      onCancel={onCancel}
      onOk={save}
    >
      <Spin spinning={loading}>
        <div>
          {t<string>('pages.rolePermissionSetting.roleName')}: {role.name}
        </div>
        <Tree treeData={treeData} checkable onCheck={onCheck} />
      </Spin>
    </Modal>
  );
};

export default OptPermissionDialog;
