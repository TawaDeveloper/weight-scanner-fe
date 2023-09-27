import { Modal, Tree } from 'antd';
import { DataNode } from 'antd/lib/tree';
import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { bakeryAPI } from '@/services';

const DataPermissionDialog = ({
  role,
  onCancel,
}: {
  role: defs.tawa.PageRoleResponse;
  onCancel: () => void;
}) => {
  const [treeData, setTreeData] = useState<DataNode[]>([]);

  const generateTreeData = (datas: defs.bakery.OptionVO[]) => {
    const treeNodes: DataNode[] = [];
    for (let i = 0, l = datas.length; i < l; i++) {
      const data = datas[i];
      const node: DataNode = {
        title: data.label,
        key: `${data.value}`,
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
    const response = await bakeryAPI.permission.dataPermissionOption.request();
    if (response.data) {
      setTreeData(generateTreeData(response.data));
    }

    const response2 =
      await bakeryAPI.permission.listOperationPermissions.request({
        roleId: Number(role.id),
      });
    console.log(response, response2);
  };

  useEffect(() => {
    initTreeData();
  }, []);

  return (
    <Modal
      title={t<string>('pages.rolePermissionSetting.dataPermissionSetting')}
      open
      onCancel={onCancel}
    >
      <div>
        {t<string>('pages.rolePermissionSetting.roleName')}: {role.name}
      </div>
      <Tree treeData={treeData} checkable />
    </Modal>
  );
};

export default DataPermissionDialog;
