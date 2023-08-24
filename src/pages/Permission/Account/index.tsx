import React, { useState, useEffect, useRef } from 'react';
import {
  Tree,
  Table,
  Input,
  Form,
  Space,
  Button,
  Spin,
  Modal,
  Badge,
  TreeSelect,
  Select,
  Upload,
  message,
} from 'antd';
import { get } from 'lodash-es';
import { t } from 'i18next';
import {
  PlusOutlined,
  ImportOutlined,
  InboxOutlined,
  RedoOutlined,
  SearchOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { TablePaginationConfig, TableProps } from 'antd/es/table';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

import { backofficeAPI } from '@/services';
import { AuthButton } from '@/components';
import { STATUS, YYYY_MM_DD } from '@/constants';
import { download, getDatePstString } from '@/utils';

import RoleListModal from './RoleListModal';

import styles from './index.less';
import { AuthCode } from '@/constants/authCode';
import { EMPTY_FIELD_PLACEHOLDER } from '@/constants/global';

const INITIAL_PAGINATION = {
  current: 1,
  pageSize: 10,
};

const MENU_CODE = 'account';

const { TreeNode } = Tree;
const { Dragger } = Upload;

// eslint-disable-next-line no-import-assign
const Account: React.FC = () => {
  const [form] = Form.useForm();
  const [resetPasswordForm] = Form.useForm();
  const [departmentForm] = Form.useForm();
  const [data, setData] = useState<defs.backoffice.User[]>();
  const [departmentTreeData, setDepartmentTreeData] = useState<
    defs.backoffice.DepartmentTreeItem[]
  >([]);
  const [, forceUpdate] = useState({});
  const [loading, setLoading] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [pagination, setPagination] =
    useState<TablePaginationConfig>(INITIAL_PAGINATION);
  const [roleOptions, setRoleOptions] = useState<any[]>([]);

  const rootTreeNodeId = get(departmentTreeData, ['0', 'id']) ?? '1';
  const parentIdRef = useRef(rootTreeNodeId);
  const roleListModal = useRef();
  const [selectedKeys, setSelectedKeys] = useState([rootTreeNodeId]);
  const currentRowRef = useRef({});
  const record = useRef({});
  const isEditing = !!Object.keys(record.current).length;

  const [visible, setVisible] = useState<boolean>(false);
  const [importDataVisible, setImportDataVisible] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const fetchData = async (params: any) => {
    const {
      accountOrName,
      pagination: { current, pageSize },
    } = params;
    setLoading(true);
    const { data: results } =
      (await backofficeAPI.webUser.getUserListPage.request({
        pageNum: current,
        pageSize,
        accountOrName,
        departmentId: parentIdRef.current,
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
      accountOrName: form.getFieldValue('accountOrName'),
    });
  };

  const onFinish = ({ accountOrName }: { accountOrName: string }) => {
    fetchData({ pagination: INITIAL_PAGINATION, accountOrName });
  };

  const onReset = () => {
    form.resetFields();
    fetchData({ pagination });
  };

  const handleToggle = async (row: { id: number; status: number }) => {
    const isEnabled = row?.status === STATUS.ENABLED;
    if (!isEnabled) {
      await backofficeAPI.webUser.updateUserStatus.request({
        id: row?.id,
        status: row?.status === STATUS.ENABLED ? 0 : 1,
      });
      message.success(t<string>('pages.common.operationSuccess'));
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      await fetchDepartmentTree();
      await fetchData({ pagination });

      return;
    }

    Modal.confirm({
      title: t<string>('pages.account.disableAccountTip'),
      icon: <ExclamationCircleOutlined />,
      async onOk() {
        await backofficeAPI.webUser.updateUserStatus.request({
          id: row?.id,
          status: row?.status === STATUS.ENABLED ? 0 : 1,
        });
        message.success(t<string>('pages.common.operationSuccess'));
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        await fetchDepartmentTree();
        await fetchData({ pagination });
      },
    });
  };

  // eslint-disable-next-line no-shadow
  const getTreeNode = (data: defs.backoffice.DepartmentTreeItem[]) => {
    if (data.length > 0) {
      return data.map((item: any) => {
        if (item.children) {
          return (
            <TreeNode key={item.id} title={item.name}>
              {getTreeNode(item.children)}
            </TreeNode>
          );
        }

        return <TreeNode key={item.id} title={item.name} />;
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
      await backofficeAPI.webUser.updateUser.request({
        ...record.current,
        ...fields,
      });
    } else {
      await backofficeAPI.webUser.saveUser.request({
        ...fields,
        parentId: parentIdRef.current,
      });
    }

    message.success(t<string>('pages.common.operationSuccess'));

    record.current = {};
    departmentForm.resetFields();
    setVisible(false);
    fetchDepartmentTree();
    fetchData({ pagination });
  };

  const handleCancel = () => {
    record.current = {};
    departmentForm.resetFields();
    setVisible(false);
  };

  const handleCreate = () => {
    departmentForm.resetFields();
    setVisible(true);
  };

  const handleResetPassword = async () => {
    const fields = await resetPasswordForm.validateFields();
    await backofficeAPI.webUser.resetPwd.request({
      // @ts-ignore
      id: currentRowRef.current.id,
      ...fields,
    });
    message.success(t<string>('pages.common.operationSuccess'));
    setPasswordModalVisible(false);
  };

  const fetchRoles = async () => {
    const { data: options } =
      await backofficeAPI.webUser.getRoleOptions.request({});
    // @ts-ignore
    setRoleOptions(options);
  };
  const getColumns = () => [
    {
      title: t<string>('pages.account.account'),
      dataIndex: 'account',
      width: 180,
      fixed: 'left',
      align: 'center',
    },
    {
      title: t<string>('pages.account.username'),
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: t<string>('pages.account.department'),
      dataIndex: 'departmentName',
      align: 'center',
    },
    {
      title: t<string>('pages.account.phoneNumber'),
      dataIndex: 'phone',
      align: 'center',
    },
    {
      title: t<string>('pages.account.email'),
      dataIndex: 'email',
      align: 'center',
    },
    {
      title: t<string>('pages.account.assignRoles'),
      align: 'center',
      render: (row: any) => {
        return (
          <>
            {roleOptions && row.roleIds && row.roleIds.length > 0
              ? roleOptions
                  .filter((el) => el && row.roleIds.includes(el.value))
                  .map((el) => el.label)
                  .join(',')
              : EMPTY_FIELD_PLACEHOLDER}
          </>
        );
      },
    },
    {
      title: t<string>('pages.account.passwordValidityPeriod'),
      align: 'center',
      render: (row: any) => (
        <>
          {row?.updatePwdPeriod
            ? `${row?.updatePwdPeriod} ${t<string>('pages.common.day')}`
            : t<string>('pages.role.longTermEffective')}
        </>
      ),
    },
    {
      title: t<string>('pages.account.status'),
      width: 100,
      align: 'center',
      render: (row: any) => {
        const isEnabled = row?.status === STATUS.ENABLED;
        return (
          <Badge
            color={isEnabled ? 'blue' : '#BFBFBF'}
            text={
              isEnabled
                ? t<string>('pages.common.enabled')
                : t<string>('pages.common.disabled')
            }
          />
        );
      },
    },
    {
      title: t<string>('pages.account.createdTime'),
      align: 'center',
      render: (row: any) => getDatePstString(row.createdTime, YYYY_MM_DD),
    },
    {
      title: t<string>('pages.common.operation'),
      width: 210,
      align: 'center',
      fixed: 'right',
      render: (row: any) => {
        const handleClick = async () => {
          fetchRoles();
          const { data: userData = row } =
            await backofficeAPI.webUser.getUser.request({
              id: row?.id,
            });
          setVisible(true);
          record.current = userData;
          departmentForm.setFieldsValue(userData);
        };

        const handleCopy = async () => {
          await backofficeAPI.webUser.copyUser.request({
            id: row?.id,
          });
          message.success(t<string>('pages.common.operationSuccess'));

          fetchData({ pagination });
        };

        return (
          <Space>
            <AuthButton
              code={AuthCode.EDIT}
              menuCode={MENU_CODE}
              tag="a"
              onClick={handleClick}
            >
              {t<string>('pages.common.edit')}
            </AuthButton>

            <AuthButton
              code={AuthCode.TOGGLE}
              menuCode={MENU_CODE}
              tag="a"
              onClick={() => handleToggle(row)}
            >
              {row?.status === STATUS.ENABLED
                ? t<string>('pages.role.disable')
                : t<string>('pages.role.enable')}
            </AuthButton>

            <AuthButton
              code={AuthCode.COPY}
              menuCode={MENU_CODE}
              tag="a"
              onClick={handleCopy}
            >
              {t<string>('pages.common.copy')}
            </AuthButton>
            <AuthButton
              code={AuthCode.RESET}
              menuCode={MENU_CODE}
              tag="a"
              onClick={() => {
                currentRowRef.current = row;
                resetPasswordForm.resetFields();
                setPasswordModalVisible(true);
              }}
            >
              {t<string>('pages.account.resetPassword')}
            </AuthButton>
          </Space>
        );
      },
    },
  ];

  const handleUpload = async () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('file', file as RcFile);
    });
    setUploading(true);

    try {
      await backofficeAPI.webUser.importTemplate.request(formData, {
        headers: {},
      });
      message.success('upload successfully.');
      setFileList([]);
    } catch (e) {
      message.error('upload failed.');
    }

    setUploading(false);
  };
  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([file]);

      return false;
    },
    fileList,
    multiple: false,
    accept: '.xlsx, .xls',
    maxCount: 1,
  };

  const handleDownload = async () => {
    const content = await backofficeAPI.webUser.downloadTemplate.request({
      responseType: 'blob',
    });
    download({
      content,
      filename: `${t<string>('pages.account.templateName')}.xlsx`,
    });

    message.success(t<string>('pages.common.operationSuccess'));
  };

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
    fetchRoles();
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
          layout="inline"
          onFinish={onFinish}
          style={{ marginBottom: '24px' }}
        >
          <Form.Item name="accountOrName" style={{ marginBottom: '12px' }}>
            <Input
              style={{ width: 240 }}
              placeholder={t<string>('pages.account.inputPlaceholder')}
            />
          </Form.Item>

          {/* <Form.Item name="name"> */}
          {/* <Select */}
          {/*   placeholder={t("pages.account.selectPlaceholder")} */}
          {/*   options={ */}
          {/*     [ */}
          {/*       { */}
          {/*         value: STATUS.ENABLED, */}
          {/*         label: t("options.common.enable"), */}
          {/*       }, */}
          {/*       { */}
          {/*         value: "lucy", */}
          {/*         label: t("options.common.disable"), */}
          {/*       }, */}
          {/*     ] */}
          {/*   } */}
          {/*   allowClear */}
          {/* /> */}
          {/* </Form.Item> */}

          <Form.Item shouldUpdate style={{ marginBottom: '12px' }}>
            <Space size="small">
              <Button type="primary" htmlType="submit">
                <SearchOutlined />
                {t<string>('button.common.search')}
              </Button>
            </Space>
          </Form.Item>

          <Button
            htmlType="button"
            onClick={onReset}
            style={{ marginRight: '8px' }}
          >
            <RedoOutlined />
            {t<string>('button.common.reset')}
          </Button>

          <AuthButton
            code={AuthCode.IMPORT}
            menuCode={MENU_CODE}
            type="primary"
            htmlType="button"
            onClick={() => setImportDataVisible(true)}
            style={{ marginRight: '8px' }}
          >
            <ImportOutlined />
            {t<string>('button.common.import')}
          </AuthButton>

          <AuthButton
            code={AuthCode.CREATE}
            menuCode={MENU_CODE}
            type="primary"
            htmlType="button"
            onClick={handleCreate}
            style={{ marginRight: '8px' }}
          >
            <PlusOutlined />
            {t<string>('pages.account.newAccount')}
          </AuthButton>
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
          `pages.account.${isEditing ? 'updateAccount' : 'newAccount'}`,
        )}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        forceRender
        destroyOnClose
      >
        <Form
          form={departmentForm}
          name="department"
          initialValues={{ updatePwdPeriod: 0 }}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            name="account"
            label={t<string>('pages.account.account')}
            rules={[
              {
                required: true,
                message: t<string>('pages.account.accountPlaceholder'),
              },
            ]}
          >
            <Input
              placeholder={t<string>('pages.account.accountPlaceholder')}
            />
          </Form.Item>
          <Form.Item
            name="name"
            label={t<string>('pages.account.username')}
            rules={[
              {
                required: true,
                message: t<string>('pages.account.usernamePlaceholder'),
              },
            ]}
          >
            <Input
              placeholder={t<string>('pages.account.usernamePlaceholder')}
            />
          </Form.Item>
          <Form.Item
            name="departmentId"
            label={t<string>('pages.account.department')}
          >
            <TreeSelect
              treeLine
              fieldNames={{ label: 'name', value: 'id', children: 'children' }}
              treeData={departmentTreeData}
              loadData={fetchDepartmentTree}
              placeholder={t<string>('pages.account.departmentPlaceholder')}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label={t<string>('pages.account.password')}
            rules={[
              {
                validator: (rule, value) => {
                  const reg =
                    /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
                  if (!reg.test(value) && value) {
                    return Promise.reject(
                      new Error(t<string>('pages.account.passwordPlaceholder')),
                    );
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              placeholder={t<string>('pages.account.passwordPlaceholder')}
            />
          </Form.Item>
          <Form.Item
            name="roleIds"
            label={t<string>('pages.account.assignRoles')}
          >
            <Select
              showArrow
              mode="multiple"
              onDropdownVisibleChange={fetchRoles}
              options={roleOptions}
              showSearch
              filterOption={(input, option) =>
                // @ts-ignore
                (option?.label ?? '')
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              placeholder={t<string>('pages.account.assignRolesPlaceholder')}
            />
          </Form.Item>
          <Form.Item
            name="phone"
            label={t<string>('pages.account.phoneNumber')}
          >
            <Input
              placeholder={t<string>('pages.account.phoneNumberPlaceholder')}
            />
          </Form.Item>
          <Form.Item
            name="email"
            label={t<string>('pages.account.email')}
            rules={[{ type: 'email' }]}
          >
            <Input placeholder={t<string>('pages.account.emailPlaceholder')} />
          </Form.Item>
          <Form.Item
            name="updatePwdPeriod"
            label={t<string>('pages.account.passwordValidityPeriod')}
            rules={[
              {
                required: true,
                message: t<string>(
                  'pages.account.passwordValidityPeriodPlaceholder',
                ),
              },
            ]}
          >
            <Input
              placeholder={t<string>(
                'pages.account.passwordValidityPeriodPlaceholder',
              )}
              suffix={t<string>('pages.common.day')}
            />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        width="480px"
        title={t<string>('pages.account.resetPassword')}
        visible={passwordModalVisible}
        onOk={handleResetPassword}
        onCancel={() => setPasswordModalVisible(false)}
        forceRender
        destroyOnClose
      >
        <Form
          form={resetPasswordForm}
          name="resetPasswordForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            name="password"
            label={t<string>('pages.account.password')}
            rules={[
              {
                validator: (rule, value) => {
                  const reg =
                    /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
                  if (!reg.test(value) || !value) {
                    return Promise.reject(
                      new Error(t<string>('pages.account.passwordPlaceholder')),
                    );
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              placeholder={t<string>('pages.account.passwordPlaceholder')}
            />
          </Form.Item>
        </Form>
      </Modal>

      {/* 导入用户数据 */}
      <Modal
        width="480px"
        title={t<string>('pages.account.importData')}
        visible={importDataVisible}
        onCancel={() => setImportDataVisible(false)}
        footer={null}
        destroyOnClose
      >
        <a
          style={{ display: 'block', marginBottom: '6px' }}
          onClick={handleDownload}
        >
          {t<string>('pages.account.downloadFileTemplate')}
        </a>

        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support uploading xls/xlsx format files
          </p>
        </Dragger>

        <Button
          type="primary"
          onClick={handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
      </Modal>

      <RoleListModal ref={roleListModal} />
    </div>
  );
};

export default Account;
