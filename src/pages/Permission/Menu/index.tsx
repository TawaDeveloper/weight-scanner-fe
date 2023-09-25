import { Tree, Spin, Tooltip, message, Popconfirm, Radio } from 'antd';
import { useState, useRef } from 'react';
import { useRequest, useMount, useDeepCompareEffect } from 'ahooks';
import { t } from 'i18next';

import { get } from 'lodash-es';
import {
  DeleteOutlined,
  PlusCircleOutlined,
  EditOutlined,
} from '@ant-design/icons';

import { backofficeAPI } from '@/services';
import { AuthButton } from '@/components';

import TreeNodeModal from './TreeNodeModal';

import styles from './index.less';
import { AuthCode } from '@/constants/authCode';

const MAX_CATEGORY_LEVEL = 4;
const MENU_CODE = 'menu';

// @ts-ignore
function treeToArray(tree: any[] = []) {
  return tree.reduce((res, item) => {
    const { children, ...i } = item;
    return res.concat(
      i,
      children && children.length ? treeToArray(children) : [],
    );
  }, []);
}
const PermissionMenu = () => {
  const [expandedKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState<number[]>([]);
  const treeNodeModalRef = useRef<any>();
  const [apps, setApps] = useState([]);
  const [appId, setAppId] = useState<any>();
  const curAppIdRef = useRef<any>();

  const fetchApps = async () => {
    const { data: appOptions } =
      await backofficeAPI.webRole.getAppOptions.request({
        useCache: true,
      });

    setApps(appOptions as any);
    curAppIdRef.current = get(appOptions, [0, 'value']);
    setAppId(get(appOptions, [0, 'value']));
  };

  const fetchMenus = () =>
    backofficeAPI.webMenu.tree.request({ appId: curAppIdRef.current });

  const {
    loading,
    data,
    run: getMenus,
  } = useRequest(fetchMenus, { manual: true });

  const treeData = [
    {
      id: 0,
      level: 0,
      currentName: `${t<string>('pages.menuManagement.application')} (${
        // @ts-ignore
        apps.find((app: any) => app.value === curAppIdRef.current)?.label
      })`,
      children: data?.data,
    },
  ];

  const flattedTreeData = treeToArray(treeData);
  const handleTreeNodeSelect = (selectedKeys: any, event: any) => {
    if (!event.selected) return;

    setSelectedKeys(selectedKeys);
  };

  const handleNewCategory = (params: any) => {
    treeNodeModalRef!.current.toShow({
      ...params,
      parentName: params.currentName,
      appId: curAppIdRef.current,
    });
  };

  const handleEditCategory = (params: any) => {
    const parentName =
      flattedTreeData.find((node: any) => params.parentId === node.id)
        ?.currentName ?? '-';

    treeNodeModalRef!.current.toShow({
      isEdit: true,
      parentName,
      ...params,
      appId: curAppIdRef.current,
    });
  };

  const handleDelete = async (id: number) => {
    await backofficeAPI.webMenu.del.request({ id });

    message.success(t<string>('pages.common.operationSuccess'));
    getMenus();
  };

  const handleRadioGroupChange = (event: any) => {
    curAppIdRef.current = event.target.value;
    setAppId(event.target.value);
    getMenus();
  };

  const TreeItemTitle = ({
    id,
    currentName,
    level,
    ...restParams
  }: Record<string, any>) => {
    return (
      <div className={styles.treeNode}>
        <Tooltip title={currentName}>
          <div className={styles.treeNodeTitle}>
            {currentName}
            {restParams.type === 12 && (
              <>&nbsp;({t<string>('pages.menuManagement.button')})</>
            )}
          </div>
        </Tooltip>
        <div className={styles.actionContainer}>
          {level !== 0 && (
            <AuthButton code={AuthCode.EDIT} menuCode={MENU_CODE} tag="plain">
              <Tooltip title={t<string>('pages.menuManagement.edit')}>
                <EditOutlined
                  onClick={() =>
                    handleEditCategory({
                      id,
                      level,
                      currentName,
                      ...restParams,
                    })
                  }
                />
              </Tooltip>
            </AuthButton>
          )}

          {level !== 0 && (
            <AuthButton code={AuthCode.DELETE} menuCode={MENU_CODE} tag="plain">
              <Tooltip title={t<string>(`pages.menuManagement.delete`)}>
                <Popconfirm
                  placement="topRight"
                  title={t<string>('pages.menuManagement.deleteTip')}
                  onConfirm={() => handleDelete(id)}
                  okText={t<string>('pages.common.confirm')}
                  cancelText={t<string>('pages.common.cancel')}
                >
                  <DeleteOutlined />
                </Popconfirm>
              </Tooltip>
            </AuthButton>
          )}
          {level <= MAX_CATEGORY_LEVEL && restParams.type !== 12 && (
            <AuthButton code={AuthCode.CREATE} menuCode={MENU_CODE} tag="plain">
              <Tooltip title={t<string>('pages.menuManagement.new')}>
                <PlusCircleOutlined
                  onClick={() =>
                    handleNewCategory({ parentId: id, level, currentName })
                  }
                />
              </Tooltip>
            </AuthButton>
          )}
        </div>
      </div>
    );
  };

  useDeepCompareEffect(() => {
    const rootTreeNodeId = get(treeData, ['0', 'id']);

    setSelectedKeys([rootTreeNodeId]);
  }, [treeData]);

  useMount(() => {
    fetchApps().then(() => getMenus());
  });

  return (
    <div className={styles.pageContainer}>
      <Radio.Group
        onChange={handleRadioGroupChange}
        value={appId}
        style={{ marginLeft: '20px' }}
      >
        {apps.map(({ label, value }) => (
          <Radio.Button key={value} value={value}>
            {label}
          </Radio.Button>
        ))}
      </Radio.Group>
      <div className={styles.treeContainer}>
        <Spin spinning={loading} wrapperClassName={styles.spinning}>
          <Tree
            blockNode
            showLine
            defaultExpandedKeys={expandedKeys}
            fieldNames={{ title: 'currentName', key: 'id' }}
            treeData={treeData as any}
            onSelect={handleTreeNodeSelect}
            titleRender={TreeItemTitle}
            selectedKeys={selectedKeys}
          />
        </Spin>
      </div>

      <TreeNodeModal onTreeQuery={getMenus} ref={treeNodeModalRef} />
    </div>
  );
};
export default PermissionMenu;
