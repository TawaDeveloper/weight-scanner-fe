import { Modal, Spin, Tree, message } from 'antd';
import { DataNode, TreeProps } from 'antd/lib/tree';
import { t } from 'i18next';
import Title from 'antd/lib/typography/Title';
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
  const [loading, setLoading] = useState<boolean>(false);
  const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
  const generateTreeData = (datas: defs.bakery.OptionVO[], level: number) => {
    const treeNodes: DataNode[] = [];
    for (let i = 0, l = datas.length; i < l; i++) {
      const data = datas[i];
      const node: DataNode = {
        title: data.label,
        key: `${data.value}`,
      };
      if (level === 1) {
        node.checkable = false;
      }
      if (data.children && data.children?.length > 0) {
        node.children = generateTreeData(data.children, level + 1);
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
    const dataPermissionOptionResponse =
      await bakeryAPI.permission.dataPermissionOption.request();
    if (dataPermissionOptionResponse.data) {
      setTreeData(generateTreeData(dataPermissionOptionResponse.data, 1));
    }

    const listStorePermissionsResponse =
      await bakeryAPI.permission.listStorePermissions.request({
        roleId: Number(role.id),
      });
    if (listStorePermissionsResponse.data) {
      setCheckedKeys(listStorePermissionsResponse.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    initTreeData();
  }, []);

  const save = async () => {
    setLoading(true);
    await bakeryAPI.permission.saveStorePermissions.request({
      roleId: Number(role.id),
      referIds: checkedKeys,
    });
    setLoading(false);
    message.success(t<string>('pages.common.operationSuccess'));
    onCancel();
  };

  const onCheck: TreeProps['onCheck'] = (checkedKeys) => {
    setCheckedKeys(checkedKeys as any);
    // currentCheckedKeys.current = checkedKeys as any;
  };

  return (
    <Modal
      title={t<string>('pages.rolePermissionSetting.dataPermissionSetting')}
      open
      onCancel={onCancel}
      onOk={save}
    >
      <Spin spinning={loading}>
        <Title level={5}>
          {t<string>('pages.rolePermissionSetting.roleName')}: {role.name}
        </Title>
        <Tree
          treeData={treeData}
          checkable
          onCheck={onCheck}
          checkedKeys={checkedKeys}
        />
      </Spin>
    </Modal>
  );
};

export default DataPermissionDialog;
