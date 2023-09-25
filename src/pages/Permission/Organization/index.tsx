import React, { useState, useEffect, useRef } from 'react';
import {
  Tree,
  Table,
  Input,
  Form,
  Button,
  Tooltip,
  Spin,
  Modal,
  Divider,
  message,
} from 'antd';
import {
  PlusCircleOutlined,
  DeleteOutlined,
  RedoOutlined,
  SearchOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

import { t } from 'i18next';
import { TablePaginationConfig, TableProps } from 'antd/es/table';
import { get } from 'lodash-es';
import { AuthButton } from '@/components';
import { backofficeAPI } from '@/services';

import styles from './index.less';
import { AuthCode } from '@/constants/authCode';
import { getDatePstString } from '@/utils';

const INITIAL_PAGINATION = {
  current: 1,
  pageSize: 10,
};

const { TreeNode } = Tree;

const MENU_CODE = 'organization';

const Organization: React.FC = () => {
  const [form] = Form.useForm();
  const [departmentForm] = Form.useForm();
  const [data, setData] = useState<defs.backoffice.Department[]>();
  const [departmentTreeData, setDepartmentTreeData] = useState<
    defs.backoffice.DepartmentTreeItem[]
  >([]);
  const [, forceUpdate] = useState({});
  const [loading, setLoading] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [pagination, setPagination] =
    useState<TablePaginationConfig>(INITIAL_PAGINATION);

  const rootTreeNodeId = get(departmentTreeData, ['0', 'id']) ?? '1';
  const parentIdRef = useRef(rootTreeNodeId);
  const [selectedKeys, setSelectedKeys] = useState([rootTreeNodeId]);

  const record = useRef({});
  const isEditing = !!Object.keys(record.current).length;

  const [visible, setVisible] = useState<boolean>(false);

  const fetchData = async (params: any) => {
    const {
      name,
      pagination: { current, pageSize },
    } = params;
    setLoading(true);
    const { data: results } =
      (await backofficeAPI.webDepartment.getDepartmentList.request({
        pageNum: current,
        pageSize,
        parentId: parentIdRef.current,
        name,
      })) ?? {};

    // @ts-ignore
    const { list, total } = results;
    setData(list);
    setLoading(false);
    setPagination({
      ...params.pagination,
      total,
    });
  };

  const onChange: TableProps<any>['onChange'] = (paginationProps) => {
    const { current, pageSize } = paginationProps;
    setPagination({ current, pageSize });

    fetchData({
      pagination: { current, pageSize },
      name: form.getFieldValue('name'),
    });
  };

  const onFinish = ({ name }: { name: string }) => {
    fetchData({ pagination: INITIAL_PAGINATION, name });
  };

  const onReset = () => {
    form.resetFields();
    fetchData({ pagination });
  };

  const handleDelete = async (id: any) => {
    Modal.confirm({
      title: t<string>('pages.organization.deleteTip'),
      icon: <ExclamationCircleOutlined />,
      async onOk() {
        await backofficeAPI.webDepartment.checkDelete.request({
          id,
        });
        await backofficeAPI.webDepartment.deleteDepartment.request({
          id,
        });
        message.success(t<string>('pages.common.operationSuccess'));
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        fetchDepartmentTree();
        fetchData({ pagination });
      },
    });
  };

  // eslint-disable-next-line no-shadow
  const getTreeNode = (data: defs.backoffice.DepartmentTreeItem[]) => {
    if (data.length > 0) {
      return data.map((item: any) => {
        if (item.children) {
          return (
            <TreeNode
              key={item.id}
              title={() => (
                <div className={styles.treeNode}>
                  {item.name}
                  <div className={styles.actionContainer}>
                    <Tooltip
                      title={t<string>('pages.organization.newDepartment')}
                    >
                      <PlusCircleOutlined onClick={() => setVisible(true)} />
                    </Tooltip>
                  </div>
                </div>
              )}
            >
              {getTreeNode(item.children)}
            </TreeNode>
          );
        }

        return (
          <TreeNode
            key={item.id}
            title={() => (
              <div className={styles.treeNode}>
                {item.name}
                <div className={styles.actionContainer}>
                  <AuthButton
                    code={AuthCode.CREATE}
                    menuCode={MENU_CODE}
                    tag="plain"
                  >
                    <Tooltip
                      title={t<string>('pages.organization.newDepartment')}
                    >
                      <PlusCircleOutlined onClick={() => setVisible(true)} />
                    </Tooltip>
                  </AuthButton>

                  <AuthButton
                    code={AuthCode.DELETE}
                    menuCode={MENU_CODE}
                    tag="plain"
                  >
                    <Tooltip
                      title={t<string>('pages.organization.deleteDepartment')}
                    >
                      <DeleteOutlined
                        onClick={() => handleDelete(selectedKeys?.[0])}
                      />
                    </Tooltip>
                  </AuthButton>
                </div>
              </div>
            )}
          />
        );
      });
    }

    return [];
  };

  // @ts-ignore
  const onSelect = (keys: any, { selected }) => {
    if (!selected) return;
    const [id] = keys;
    parentIdRef.current = id;
    setSelectedKeys(keys);
    fetchData({ pagination });
  };

  const fetchDepartmentTree = async () => {
    try {
      setSpinning(true);
      const { data: departmentTree = [] } =
        (await backofficeAPI.webDepartment.getDepartmentTree.request({})) ?? [];
      setDepartmentTreeData(departmentTree);
      setSpinning(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleOk = async () => {
    const fields = await departmentForm.validateFields();
    if (isEditing) {
      await backofficeAPI.webDepartment.updateDepartment.request({
        ...fields,
        // @ts-ignore
        id: record.current.id,
      });
    } else {
      await backofficeAPI.webDepartment.saveDepartment.request({
        ...fields,
        parentId: parentIdRef.current,
      });
    }

    message.success(t<string>('pages.common.operationSuccess'));
    record.current = {};
    setVisible(false);
    fetchDepartmentTree();
    fetchData({ pagination });
  };

  const handleCancel = () => {
    record.current = {};
    setVisible(false);
  };

  const getColumns = () => [
    {
      title: t<string>('pages.common.id'),
      dataIndex: 'id',
      align: 'center',
      width: 80,
      fixed: 'left',
    },
    {
      title: t<string>('pages.organization.departmentName'),
      dataIndex: 'name',
      align: 'center',
      width: 180,
      fixed: 'left',
    },
    {
      title: t<string>('pages.organization.higherDepartment'),
      dataIndex: 'parentName',
      align: 'center',
    },
    {
      title: t<string>('pages.organization.users'),
      dataIndex: 'userNum',
      align: 'center',
    },
    {
      title: t<string>('pages.organization.subordinateDepartment'),
      dataIndex: 'childNum',
      align: 'center',
    },
    {
      title: t<string>('pages.organization.updater'),
      dataIndex: 'updatedBy',
      align: 'center',
    },
    {
      title: t<string>('pages.organization.updateTime'),
      align: 'center',
      render: (row: any) => getDatePstString(row?.updatedTime),
    },
    {
      title: t<string>('pages.common.operation'),
      align: 'center',
      width: 120,
      fixed: 'right',
      render: (row: any) => {
        const handleClick = () => {
          setVisible(true);
          record.current = row;
          departmentForm.setFieldsValue(row);
        };

        return (
          <>
            <AuthButton
              code={AuthCode.EDIT}
              menuCode={MENU_CODE}
              tag="a"
              onClick={handleClick}
            >
              {t<string>('pages.common.edit')}
            </AuthButton>

            <Divider type="vertical" />

            <AuthButton
              code={AuthCode.DELETE}
              menuCode={MENU_CODE}
              tag="a"
              onClick={() => handleDelete(row.id)}
            >
              {t<string>('pages.common.delete')}
            </AuthButton>
          </>
        );
      },
    },
  ];

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
    fetchDepartmentTree();
    fetchData({ pagination });
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.departmentTree}>
        <Spin spinning={spinning} wrapperClassName={styles.spinning}>
          <Tree
            blockNode
            showLine
            showIcon={false}
            defaultSelectedKeys={[`${rootTreeNodeId}`]}
            onSelect={onSelect}
            selectedKeys={selectedKeys}
          >
            {getTreeNode(departmentTreeData)}
          </Tree>
        </Spin>
      </div>

      <div className={styles.departmentPage}>
        <Form
          form={form}
          name="horizontal_login"
          layout="inline"
          onFinish={onFinish}
          style={{ marginBottom: '24px' }}
        >
          <Form.Item
            name="name"
            label={t<string>('pages.organization.departmentName')}
          >
            <Input
              style={{ width: '240px' }}
              placeholder={t<string>('pages.organization.placeholder')}
            />
          </Form.Item>
          <Form.Item shouldUpdate>
            <Button type="primary" htmlType="submit">
              <SearchOutlined />
              {t<string>('button.common.search')}
            </Button>
          </Form.Item>

          <Button htmlType="button" onClick={onReset}>
            <RedoOutlined />
            {t<string>('button.common.reset')}
          </Button>
        </Form>

        <Table
          columns={getColumns() as any}
          dataSource={data}
          onChange={onChange}
          loading={loading}
          pagination={{
            ...pagination,
            showQuickJumper: true,
            showSizeChanger: true,
          }}
          rowKey={(row) => row.id}
          scroll={{ x: 1300 }}
        />
      </div>

      <Modal
        width="600px"
        title={t<string>(
          `pages.organization.${
            isEditing ? 'updateDepartment' : 'newDepartment'
          }`,
        )}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        forceRender
      >
        <Form
          form={departmentForm}
          name="department"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          {get(record.current, ['parentName']) ? (
            <Form.Item
              name="parentName"
              label={t<string>('pages.organization.higherDepartment')}
            >
              {get(record.current, ['parentName'])}
            </Form.Item>
          ) : null}

          <Form.Item
            name="nameEnUs"
            label={t<string>('pages.organization.enDepartmentName')}
            rules={[
              {
                required: true,
                message: t<string>('pages.organization.placeholder'),
              },
            ]}
          >
            <Input placeholder={t<string>('pages.organization.placeholder')} />
          </Form.Item>
          <Form.Item
            name="nameZhCn"
            label={t<string>('pages.organization.zhDepartmentName')}
          >
            <Input placeholder={t<string>('pages.organization.placeholder')} />
          </Form.Item>
          <Form.Item
            name="nameZhTw"
            label={t<string>('pages.organization.twDepartmentName')}
          >
            <Input placeholder={t<string>('pages.organization.placeholder')} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Organization;
