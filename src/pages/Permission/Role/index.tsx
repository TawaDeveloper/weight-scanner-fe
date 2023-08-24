import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Form,
  Input,
  Table,
  Space,
  Select,
  Badge,
  Modal,
  Radio,
  DatePicker,
  TreeSelect,
  Checkbox,
  Row,
  Col,
  Upload,
  message,
} from 'antd';
import {
  ExclamationCircleOutlined,
  PlusOutlined,
  SettingOutlined,
  RedoOutlined,
  SearchOutlined,
  ImportOutlined,
  ExportOutlined,
} from '@ant-design/icons';

import { t } from 'i18next';
import moment from 'moment';
import { get, omitBy, isNil } from 'lodash-es';

import type { TableProps, TablePaginationConfig } from 'antd/es/table';
import { backofficeAPI } from '@/services';
import { AuthButton } from '@/components';
import { download, getDatePstString } from '@/utils';

import {
  EMPTY_FIELD_PLACEHOLDER,
  PEROID_TERM,
  STATUS,
  YYYY_MM_DD,
} from '@/constants/global';
import styles from './index.less';
import { AuthCode } from '@/constants/authCode';

const { SHOW_PARENT } = TreeSelect;

const TYPES = ['store', 'warehouse', 'bizModule'];

const VALID_TIME_TYPES = {
  LANG_TIME_TERM: 1,
  SHORT_TIME_TERM: 2,
};

const getRoleStatusOptions = () => [
  { value: 0, label: t<string>('pages.common.disabled') },
  { value: 1, label: t<string>('pages.common.enabled') },
];

const INITIAL_PAGINATION = {
  current: 1,
  pageSize: 10,
};

const MENU_CODE = 'role';

const QueryTerm: React.FC = () => {
  const [form] = Form.useForm();
  const [newRoleForm] = Form.useForm();
  const [assignForm] = Form.useForm();
  const [operationForm] = Form.useForm();
  const [listPageForm] = Form.useForm();
  const [data, setData] = useState<defs.backoffice.Role[]>();
  const [, forceUpdate] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>();
  const [pagination, setPagination] =
    useState<TablePaginationConfig>(INITIAL_PAGINATION);

  const [listPagePagination, setListPagePagination] =
    useState<TablePaginationConfig>(INITIAL_PAGINATION);

  const [roleModalVisible, setRoleModalVisible] = useState(false);
  const [assignModalVisible, setAssignModalVisible] = useState(false);
  const [opModalVisible, setOpModalVisible] = useState(false);
  const [listModalVisible, setListModalVisible] = useState(false);
  const [dataModalVisible, setDataModalVisible] = useState(false);
  const [dataPermissionModalVisible, setDataPermissionModalVisible] =
    useState(false);
  const [orgTreeData, setOrgTreeData] =
    useState<defs.backoffice.DepartmentTreeItem[]>();
  const [menuTreeData, setMenuTreeData] =
    useState<defs.backoffice.PermissionTreeItem[]>();
  const [warehouseData, setWarehouseData] =
    useState<defs.backoffice.Option[]>();
  const [platform, setPlatform] = useState('store');
  const [stores, setStores] = useState<defs.backoffice.Option[]>();
  const [bizModules, setBizModules] =
    useState<defs.backoffice.ModuleOption[]>();
  const [typeOptions, setTypeOptions] = useState<defs.backoffice.Option[]>();
  const [warehouseIds, setWarehouseIds] = useState<number[]>();
  const [storeIds, setStoreIds] = useState<number[]>();
  const [bizModuleIds, setBizModuleIds] = useState<number[]>([]);
  const [bizModuleAndFieldIds, setBizModuleAndFieldIds] =
    useState<defs.backoffice.ModuleAndField[]>();

  const [fields, setFields] = useState([]);
  const [fieldIds, setFieldIds] = useState<number[]>();
  const currentModuleIdRef = useRef<number>();

  const [apps, setApps] = useState<defs.backoffice.Option[]>();

  const [listPageData, setListPageData] =
    useState<defs.backoffice.RoleUser[]>();
  const [listPageLoading, setListPageLoading] = useState(false);

  const curAppIdRef = useRef<number | undefined | string>(
    apps && apps[0]?.value,
  );
  const currentRoleRef = useRef({});

  const [isHidden, setDateRangeHidden] = useState(false);

  const fetchListData = async (params: any) => {
    const {
      account,
      listPagePagination: { current, pageSize },
    } = params;
    setListPageLoading(true);
    const { data: results } =
      (await backofficeAPI.webRole.getUserListPage.request({
        pageNum: current,
        pageSize,
        account,
        roleId: get(currentRoleRef.current, ['id']),
      })) ?? {};

    const { list, total } = results || {};
    setListPageData(list);
    setListPageLoading(false);
    setListPagePagination({
      ...params.listPagePagination,
      total,
    });
  };
  const fetchData = async (params: any) => {
    const {
      name,
      status,
      pagination: { current, pageSize } = INITIAL_PAGINATION,
    } = params;
    setLoading(true);
    const { data: results } =
      (await backofficeAPI.webRole.getRoleListPage.request({
        pageNum: current,
        pageSize,
        name,
        status,
      })) ?? {};
    const { list, total } = results || {};
    setData(list);
    setLoading(false);
    setPagination({
      ...params.pagination,
      total,
    });
  };

  const handleCopy = async (roleId: number) => {
    await backofficeAPI.webRole.copy.request({ roleId });
    message.success(t<string>('pages.common.operationSuccess'));

    fetchData({ pagination });
  };

  const fetchOrgTreeData = async () => {
    try {
      const { data: treeData = [] } =
        (await backofficeAPI.webRole.getDepartmentOptions.request({})) ?? [];
      setOrgTreeData(treeData);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchRelatedDepartments = async (roleId: number) => {
    const { data } = await backofficeAPI.webRole.departments.request({
      roleId,
    });

    fetchOrgTreeData();
    assignForm.setFieldsValue(omitBy(data, isNil));
  };

  const getColumns = () =>
    [
      {
        title: t<string>('pages.common.id'),
        dataIndex: 'id',
        width: 80,
        fixed: 'left',
        align: 'center',
      },
      {
        title: t<string>('pages.role.roleName'),
        dataIndex: 'name',
        fixed: 'left',
        align: 'center',
        width: 180,
      },
      {
        title: t<string>('pages.role.associatedUsers'),
        width: 80,
        align: 'center',
        render: (record: any) => {
          const handleClick = async () => {
            currentRoleRef.current = record;
            fetchListData({ listPagePagination });
            setListModalVisible(true);
          };
          return (
            <AuthButton
              code={AuthCode.DETAIL}
              menuCode={MENU_CODE}
              tag="a"
              onClick={handleClick}
              notMatch={record.userNum}
            >
              {record.userNum}
            </AuthButton>
          );
        },
      },
      {
        title: t<string>('pages.role.validityPeriod'),
        width: 200,
        align: 'center',
        render: (_: any, record: any) => {
          const { validTimeType } = record;

          const TimeRange = () => (
            <>
              {getDatePstString(record?.validStartTime, YYYY_MM_DD)}
              &nbsp;-&nbsp;
              {getDatePstString(record?.validEndTime, YYYY_MM_DD)}
            </>
          );

          return (
            <>
              {validTimeType === VALID_TIME_TYPES.LANG_TIME_TERM ? (
                t<string>('pages.role.longTermEffective')
              ) : (
                <TimeRange />
              )}
            </>
          );
        },
      },
      // {
      //   title: t("pages.role.organizationPermissions"),
      //   width: 120,
      //   align: "center",
      //   render: () => (
      //     <a onClick={() => setOrgModalVisible(true)}>{t("pages.role.configure")}</a>
      //   )
      // },
      {
        title: t<string>('pages.role.operationPermissions'),
        width: 90,
        align: 'center',
        render: (record: any) => {
          const fetchApps = async () => {
            const { data: appOptions } =
              await backofficeAPI.webRole.getAppOptions.request({
                useCache: true,
              });
            setApps(appOptions);
            return appOptions;
          };
          operationForm.setFieldValue('appId', get(apps, ['0', 'value']));
          return (
            <AuthButton
              code={AuthCode.SET_OPERATION_ACCESS}
              menuCode={MENU_CODE}
              tag="a"
              notMatch={EMPTY_FIELD_PLACEHOLDER}
              onClick={async () => {
                const appOptions = (await fetchApps()) ?? [];
                const [{ data: treeData = [] }, { data: permissionIds }] =
                  await Promise.all([
                    backofficeAPI.webRole.getOperationPermissionOptions.request(
                      {
                        appId: Number(get(appOptions, [0, 'value'])) || 0,
                      },
                      { useCache: true },
                    ),
                    backofficeAPI.webRole.getOperationPermission.request({
                      appId: Number(get(appOptions, [0, 'value'])) || 0,
                      roleId: record.id,
                    }),
                  ]);
                setMenuTreeData(treeData);
                setOpModalVisible(true);
                currentRoleRef.current = record;
                operationForm.setFieldsValue({ permissionIds });
              }}
            >
              {t<string>('pages.role.configure')}
            </AuthButton>
          );
        },
      },
      {
        title: t<string>('pages.role.dataPermissions'),
        width: 90,
        align: 'center',
        render: (record: any) => {
          const handleClick = async () => {
            currentRoleRef.current = record;
            setDataModalVisible(true);
            const [{ data: types }, { data: ids }, { data: options }] =
              await Promise.all([
                backofficeAPI.webRole.getDataPermissionTypeOptions.request({
                  useCache: true,
                }),
                backofficeAPI.webRole.getStoreIds.request({
                  roleId: get(currentRoleRef.current, ['id']),
                }),
                backofficeAPI.webRole.getStoreOptions.request({
                  useCache: true,
                }),
              ]);
            setTypeOptions(types);
            setStoreIds(ids);
            setStores(options);
          };
          return (
            <AuthButton
              code={AuthCode.SET_DATA_ACCESS}
              menuCode={MENU_CODE}
              tag="a"
              notMatch={EMPTY_FIELD_PLACEHOLDER}
              onClick={handleClick}
            >
              {t<string>('pages.role.configure')}
            </AuthButton>
          );
        },
      },
      {
        title: t<string>('pages.role.updater'),
        dataIndex: 'updatedBy',
        align: 'center',
        width: 120,
      },
      {
        title: t<string>('pages.role.updatedTime'),
        align: 'center',
        width: 180,
        render: (_: any, record: any) => getDatePstString(record?.updatedTime),
      },
      {
        title: t<string>('pages.common.status'),
        align: 'center',
        width: 120,
        render: (_: any, record: any) => {
          const { status } = record;
          const option = getRoleStatusOptions().filter(
            ({ value }) => value === status,
          );

          return (
            <Badge
              color={status === STATUS.ENABLED ? 'blue' : '#BFBFBF'}
              text={get(option, [0, 'label'])}
            />
          );
        },
      },
      {
        title: t<string>('pages.common.operation'),
        width: 200,
        fixed: 'right',
        align: 'center',
        render: (record: any) => {
          const isEnabled = record?.status === STATUS.ENABLED;

          const toggleStatus = async () => {
            if (!isEnabled) {
              await backofficeAPI.webRole.updateRoleStatus.request({
                id: record.id,
                status: isEnabled ? STATUS.DISABLED : STATUS.ENABLED,
              });
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              await fetchData({ pagination });

              return;
            }

            Modal.confirm({
              title: t<string>('pages.role.disableRoleTip'),
              icon: <ExclamationCircleOutlined />,
              async onOk() {
                await backofficeAPI.webRole.updateRoleStatus.request({
                  id: record.id,
                  status: isEnabled ? STATUS.DISABLED : STATUS.ENABLED,
                });
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                await fetchData({ pagination });
              },
            });
          };
          return (
            <Space>
              <AuthButton
                code={AuthCode.ASSIGN}
                menuCode={MENU_CODE}
                tag="a"
                onClick={() => {
                  setAssignModalVisible(true);
                  fetchRelatedDepartments(record.id);
                  currentRoleRef.current = record;
                }}
              >
                {t<string>('pages.role.assign')}
              </AuthButton>
              <AuthButton
                code={AuthCode.EDIT}
                menuCode={MENU_CODE}
                tag="a"
                onClick={() => {
                  setRoleModalVisible(true);
                  if (record?.validTimeType === VALID_TIME_TYPES.LANG_TIME_TERM)
                    setDateRangeHidden(true);
                  newRoleForm.setFieldsValue({
                    ...record,
                    dateRange: [
                      moment(record?.validStartTime),
                      moment(record?.validEndTime),
                    ],
                  });
                  currentRoleRef.current = record;
                }}
              >
                {t<string>('pages.common.edit')}
              </AuthButton>
              <AuthButton
                code={AuthCode.TOGGLE}
                menuCode={MENU_CODE}
                tag="a"
                onClick={toggleStatus}
              >
                {isEnabled
                  ? t<string>('pages.role.disable')
                  : t<string>('pages.role.enable')}
              </AuthButton>
              <AuthButton
                code={AuthCode.COPY}
                menuCode={MENU_CODE}
                tag="a"
                onClick={() => handleCopy(record.id)}
              >
                {t<string>('pages.common.copy')}
              </AuthButton>
            </Space>
          );
        },
      },
    ] as any[];

  const getListColumns = () => [
    {
      title: t<string>('pages.account.account'),
      dataIndex: 'account',
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
      title: t<string>('pages.role.lastLoginTime'),
      align: 'center',
      render: (record: any) => getDatePstString(record.lastLoginTime),
    },
    {
      title: t<string>('pages.common.operation'),
      align: 'center',
      render: (record: any) => {
        const handleRemove = () => {
          Modal.confirm({
            title: t<string>('pages.organization.deleteTip'),
            icon: <ExclamationCircleOutlined />,
            async onOk() {
              await backofficeAPI.webRole.removeUser.request({
                roleId: get(currentRoleRef.current, ['id']),
                userId: record.userId,
              });
              message.success(t<string>('pages.common.operationSuccess'));
              fetchListData({ listPagePagination });
            },
          });
        };

        return (
          <AuthButton
            code={AuthCode.REMOVE}
            menuCode={MENU_CODE}
            tag="a"
            onClick={handleRemove}
          >
            {t<string>('pages.role.remove')}
          </AuthButton>
        );
      },
    },
  ];

  const onChange: TableProps<defs.backoffice.RoleUser>['onChange'] = (
    paginationProps,
  ) => {
    const { current, pageSize } = paginationProps;
    setPagination({ current, pageSize });

    fetchData({
      pagination: { current, pageSize },
      ...form.getFieldsValue(),
    });
  };

  const onLisPageChange: TableProps<defs.backoffice.RoleUser>['onChange'] = (
    paginationProps,
  ) => {
    const { current, pageSize } = paginationProps;
    setListPagePagination({ current, pageSize });

    fetchListData({
      listPagePagination: { current, pageSize },
      account: form.getFieldValue('account'),
    });
  };

  const onFinish = ({ name, status }: { name: string; status: number }) => {
    fetchData({ pagination: INITIAL_PAGINATION, name, status });
  };

  const onListPageFinish = ({ account }: { account: string }) => {
    fetchListData({ listPagePagination: INITIAL_PAGINATION, account });
  };

  const onReset = () => {
    form.resetFields();
    fetchData({ pagination });
  };

  const onListPageReset = () => {
    listPageForm.resetFields();
    fetchListData({ listPagePagination: INITIAL_PAGINATION });
  };

  const handleRolePermissionOk = async () => {
    // eslint-disable-next-line no-shadow
    const fields = await newRoleForm.validateFields();
    const { name, validTimeType, dateRange = [] } = fields;
    const [validStartTime, validEndTime] = dateRange;
    if (Object.keys(currentRoleRef.current).length) {
      await backofficeAPI.webRole.updateRole.request({
        id: get(currentRoleRef.current, 'id'),
        name,
        validTimeType,
        validStartTime: moment(validStartTime).format(YYYY_MM_DD),
        validEndTime: moment(validEndTime).format(YYYY_MM_DD),
      });
    } else {
      await backofficeAPI.webRole.saveRole.request({
        name,
        validTimeType,
        validStartTime: moment(validStartTime).format(YYYY_MM_DD),
        validEndTime: moment(validEndTime).format(YYYY_MM_DD),
      });
    }
    message.success(t<string>('pages.common.operationSuccess'));

    fetchData({ pagination });
    setRoleModalVisible(false);
    setDateRangeHidden(false);
    newRoleForm.resetFields();
  };

  const handleRolePermissionCancel = () => {
    setRoleModalVisible(false);
    newRoleForm.resetFields();
    setDateRangeHidden(false);
    currentRoleRef.current = {};
  };

  const handleOpPermissionOk = async () => {
    const fields = await operationForm.validateFields();

    await backofficeAPI.webRole.saveOperationPermission.request({
      ...fields,
      roleId: get(currentRoleRef.current, ['id']),
    });
    message.success(t<string>('pages.common.operationSuccess'));
    setOpModalVisible(false);
  };

  const handleOpPermissionCancel = () => {
    setOpModalVisible(false);
    operationForm.resetFields();
  };

  const handleDataPermissionCancel = () => {
    setDataModalVisible(false);
    setPlatform(TYPES[0]);
  };

  const handleListModalCancel = () => {
    setListModalVisible(false);
    fetchData({ pagination });
  };

  const handleAssignPermissionOk = async () => {
    const fields = await assignForm.validateFields();
    await backofficeAPI.webRole.disRoleByDep.request({
      ...fields,
      roleId: get(currentRoleRef.current, ['id']),
    });
    message.success(t<string>('pages.common.operationSuccess'));

    fetchData({ pagination });
    setAssignModalVisible(false);
  };

  const handleAssignPermissionCancel = () => {
    setAssignModalVisible(false);
  };

  const handleRadioChange = (event: any) => {
    if (event.target.value === PEROID_TERM.LONG) {
      setDateRangeHidden(true);
      return;
    }

    setDateRangeHidden(false);
  };

  const handleRadioGroupChange = (event: any) => {
    curAppIdRef.current = event.target.value;
  };
  const getPlatformData = async (value: string) => {
    if (value === 'store') {
      const { data: ids } = await backofficeAPI.webRole.getStoreIds.request({
        roleId: get(currentRoleRef.current, ['id']),
      });
      const { data: options } =
        await backofficeAPI.webRole.getStoreOptions.request();
      setStoreIds(ids);
      setStores(options);
    }

    if (value === 'warehouse') {
      const { data: ids } = await backofficeAPI.webRole.getWarehouseIds.request(
        {
          roleId: get(currentRoleRef.current, ['id']),
        },
      );
      const { data: options } =
        await backofficeAPI.webRole.getWarehouseOptions.request();
      setWarehouseIds(ids);
      setWarehouseData(options);
    }

    if (value === 'bizModule') {
      const { data: ids } =
        await backofficeAPI.webRole.getBizModuleList.request({
          roleId: get(currentRoleRef.current, ['id']),
        });
      const { data: options } =
        await backofficeAPI.webRole.getBizModuleOptions.request({});
      const moduleIds: number[] = [];
      ids?.forEach((i) => i.moduleId && moduleIds.push(i.moduleId));
      setBizModuleIds(moduleIds);
      setBizModuleAndFieldIds(ids);
      setBizModules(options);
    }
  };

  const handlePlatformChange = (event: any) => {
    const { value } = event.target;
    setPlatform(value);
    getPlatformData(value);
  };

  const handleWarehouseChange = (value: any) => {
    setWarehouseIds(value);
  };

  const handleSaveWarehouse = async () => {
    await backofficeAPI.webRole.saveRoleWarehouse.request({
      roleId: get(currentRoleRef.current, ['id']),
      warehouseIds,
    });
    message.success(t<string>('pages.common.operationSuccess'));
    setDataModalVisible(false);
  };

  const handleStoresChange = (value: any) => {
    setStoreIds(value);
  };

  const handleFieldIdsChange = (value: any) => {
    setFieldIds(value);
  };

  const handleSaveStores = async () => {
    await backofficeAPI.webRole.saveRoleStore.request({
      roleId: get(currentRoleRef.current, ['id']),
      storeIds,
    });
    message.success(t<string>('pages.common.operationSuccess'));
    setDataModalVisible(false);
  };

  const handleClickSetting = async (value: number, fields: any) => {
    currentModuleIdRef.current = value;
    setFields(fields);

    setFieldIds(
      bizModuleAndFieldIds?.find(
        (field) => field.moduleId === currentModuleIdRef.current,
      )?.fieldIds,
    );
    setDataPermissionModalVisible(true);
  };
  const handleDataPermissionModalCancel = async () => {
    setDataPermissionModalVisible(false);
  };
  const handleDataPermissionModalOk = async () => {
    await backofficeAPI.webRole.saveRoleBizModule.request({
      fieldIds,
      moduleId: currentModuleIdRef.current,
      roleId: get(currentRoleRef.current, ['id']),
    });
    message.success(t<string>('pages.common.operationSuccess'));
    await getPlatformData(platform);
    handleDataPermissionModalCancel();
  };

  const onSelectChange = (newSelectedRowKeys: any[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    preserveSelectedRowKeys: true,
  };

  const handleBatchExport = async () => {
    const content = await backofficeAPI.webRole.exportSelectRoles.request(
      {
        roleIdList: selectedRowKeys,
      },
      { responseType: 'blob' },
    );

    download({ content, filename: `${t<string>('pages.role.roleList')}.txt` });
  };

  const handleImportData = async (file: FormData) => {
    await backofficeAPI.webRole.importRole.request(file, {
      headers: {},
    });

    fetchData({ pagination });
    message.success(t<string>('pages.common.operationSuccess'));
  };

  const uploadProps = {
    accept: '.txt',
    customRequest: (params: { file: string | Blob }) => {
      const formData = new FormData();
      formData.append('file', params.file);
      handleImportData(formData);
    },
    showUploadList: false,
  };

  const disabledDate = (current: any) => {
    // Can not select days before today and today
    return current && current < moment().startOf('day');
  };

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
    fetchData({ pagination });
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Form
        form={form}
        layout="inline"
        onFinish={onFinish}
        style={{ marginBottom: '24px' }}
      >
        <Form.Item
          name="name"
          label={t<string>('pages.role.roleName')}
          style={{ marginBottom: '12px' }}
        >
          <Input placeholder={t<string>('pages.role.roleName')} />
        </Form.Item>
        <Form.Item
          name="status"
          label={t<string>('pages.role.roleStatus')}
          style={{ marginBottom: '12px' }}
        >
          <Select
            options={getRoleStatusOptions()}
            placeholder={t<string>('pages.role.roleStatus')}
          />
        </Form.Item>
        <Form.Item shouldUpdate style={{ marginBottom: '12px' }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: '8px' }}
          >
            <SearchOutlined />
            {t<string>('button.common.search')}
          </Button>

          <Button
            htmlType="button"
            onClick={onReset}
            style={{ marginRight: '8px' }}
          >
            <RedoOutlined />
            {t<string>('button.common.reset')}
          </Button>
        </Form.Item>
        <AuthButton
          code={AuthCode.CREATE}
          menuCode={MENU_CODE}
          type="primary"
          htmlType="button"
          onClick={() => setRoleModalVisible(true)}
          style={{ marginRight: '8px' }}
        >
          <PlusOutlined />
          {t<string>('pages.role.newRole')}
        </AuthButton>
        <AuthButton
          code={AuthCode.EXPORT}
          menuCode={MENU_CODE}
          htmlType="button"
          disabled={!selectedRowKeys?.length}
          onClick={handleBatchExport}
          style={{ marginRight: '8px' }}
        >
          <ExportOutlined />
          {t<string>('pages.role.batchExport')}
        </AuthButton>

        <Upload {...uploadProps}>
          <AuthButton
            code={AuthCode.IMPORT}
            menuCode={MENU_CODE}
            htmlType="button"
            style={{ marginRight: '8px' }}
          >
            <ImportOutlined />
            {t<string>('pages.role.import')}
          </AuthButton>
        </Upload>
      </Form>

      <Table
        columns={getColumns()}
        dataSource={data}
        onChange={onChange}
        loading={loading}
        pagination={{
          ...pagination,
          showQuickJumper: true,
          showSizeChanger: true,
        }}
        rowSelection={rowSelection}
        scroll={{ x: 1800 }}
        rowKey="userId"
      />

      {/* 新建、编辑角色权限 */}
      <Modal
        title={
          Object.keys(currentRoleRef.current).length
            ? t<string>('pages.role.editRole')
            : t<string>('pages.role.newRole')
        }
        open={roleModalVisible}
        onOk={handleRolePermissionOk}
        onCancel={handleRolePermissionCancel}
        destroyOnClose
      >
        <Form
          form={newRoleForm}
          name="roleForm"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <Form.Item
            name="name"
            label={t<string>('pages.role.roleName')}
            rules={[{ required: true }]}
          >
            <Input placeholder={t<string>('pages.role.roleName')} />
          </Form.Item>
          <Form.Item
            name="validTimeType"
            label={t<string>('pages.role.validityPeriod')}
            rules={[{ required: true }]}
          >
            <Radio.Group onChange={handleRadioChange}>
              <Radio value={PEROID_TERM.LONG}>
                {t<string>('pages.role.longTerm')}
              </Radio>
              <Radio value={PEROID_TERM.SHORT}>
                {t<string>('pages.role.shortTerm')}
              </Radio>
            </Radio.Group>
          </Form.Item>
          {!isHidden && (
            <Form.Item
              name="dateRange"
              label={t<string>('pages.role.range')}
              rules={[{ required: true }]}
            >
              <DatePicker.RangePicker
                disabledDate={disabledDate}
                style={{ width: '100%' }}
              />
            </Form.Item>
          )}
        </Form>
      </Modal>

      {/* 操作权限设置 */}
      <Modal
        title={t<string>('pages.role.operationPermissionSettings')}
        open={opModalVisible}
        width="60%"
        onOk={handleOpPermissionOk}
        onCancel={handleOpPermissionCancel}
      >
        <Form
          form={operationForm}
          name="assignForm"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <Form.Item name="appId" label={t<string>('pages.role.platform')}>
            <Radio.Group onChange={handleRadioGroupChange}>
              {apps?.map(({ label, value }) => (
                <Radio.Button key={value} value={value}>
                  {label}
                </Radio.Button>
              ))}
            </Radio.Group>
          </Form.Item>
          <Form.Item label={t<string>('pages.role.roleName')}>
            {get(currentRoleRef.current, ['name'])}
          </Form.Item>
          <Form.Item
            name="permissionIds"
            label={t<string>('pages.role.menu')}
            rules={[{ required: true }]}
          >
            <TreeSelect
              showArrow
              treeData={menuTreeData}
              treeCheckable
              fieldNames={{ label: 'name', value: 'id', children: 'children' }}
              showCheckedStrategy={SHOW_PARENT}
              placeholder="Please select"
            />
          </Form.Item>
        </Form>
      </Modal>

      {/* 数据权限设置 */}
      <Modal
        width="60%"
        title={t<string>('pages.role.dataPermissionSettings')}
        open={dataModalVisible}
        onCancel={handleDataPermissionCancel}
        forceRender
        destroyOnClose
        footer={null}
      >
        <Space direction="vertical" size="small">
          <div>
            {t<string>('pages.role.roleName')}：
            {get(currentRoleRef.current, ['name'])}
          </div>
          <Radio.Group
            defaultValue={TYPES[0]}
            value={platform}
            onChange={handlePlatformChange}
          >
            {typeOptions?.map(({ label, value }, index) => (
              <Radio.Button
                style={{ width: '144px', textAlign: 'center' }}
                value={TYPES[index]}
                key={value}
              >
                {label}
              </Radio.Button>
            ))}
          </Radio.Group>
          {platform === 'warehouse' && !!warehouseData?.length && (
            <>
              <Checkbox.Group
                value={warehouseIds}
                onChange={handleWarehouseChange}
              >
                <Row>
                  {warehouseData.map(({ label, value }) => (
                    <Col span={24} key={value}>
                      <Checkbox value={value}>{label}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
              <Button type="primary" onClick={handleSaveWarehouse}>
                {t<string>('pages.role.save')}
              </Button>
            </>
          )}
          {platform === 'store' && !!stores?.length && (
            <>
              <Checkbox.Group value={storeIds} onChange={handleStoresChange}>
                <Row>
                  {stores.map(({ label, value }) => (
                    <Col span={24} key={value}>
                      <Checkbox value={value}>{label}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
              <Button type="primary" onClick={handleSaveStores}>
                {t<string>('pages.role.save')}
              </Button>
            </>
          )}
          {platform === 'bizModule' && (
            <Checkbox.Group value={bizModuleIds}>
              {bizModules?.map(({ label, value, fields }) => (
                <div
                  key={value}
                  style={{
                    display: 'flex',
                    width: '400px',
                    justifyContent: 'space-between',
                  }}
                >
                  <Checkbox value={value} disabled>
                    {label}
                  </Checkbox>
                  <SettingOutlined
                    onClick={() =>
                      value !== undefined && handleClickSetting(value, fields)
                    }
                  />
                </div>
              ))}
            </Checkbox.Group>
          )}
        </Space>
      </Modal>

      <Modal
        width="480px"
        title={t<string>('pages.role.dataPermissionSettings')}
        open={dataPermissionModalVisible}
        onOk={handleDataPermissionModalOk}
        onCancel={handleDataPermissionModalCancel}
      >
        <Checkbox.Group onChange={handleFieldIdsChange} value={fieldIds}>
          {fields.map(({ label, value }) => (
            <Checkbox value={value} key={value}>
              {label}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Modal>

      {/* 按组织分配 */}
      <Modal
        title={t<string>('pages.role.assign')}
        open={assignModalVisible}
        onOk={handleAssignPermissionOk}
        onCancel={handleAssignPermissionCancel}
        destroyOnClose
        width="680px"
      >
        <Form
          form={assignForm}
          name="assignForm"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <Form.Item label={t<string>('pages.role.roleName')}>
            {get(currentRoleRef.current, ['name'])}
          </Form.Item>
          <Form.Item
            name="departmentIds"
            label={t<string>('pages.role.organization')}
            rules={[{ required: true }]}
          >
            <TreeSelect
              showArrow
              treeData={orgTreeData}
              // onDropdownVisibleChange={fetchOrgTreeData}
              treeCheckable
              fieldNames={{ label: 'name', value: 'id', children: 'children' }}
              showCheckedStrategy={SHOW_PARENT}
              placeholder="Please select"
            />
          </Form.Item>
          <Form.Item
            name="inherit"
            label={t<string>('pages.role.extendPermissions')}
            rules={[{ required: true }]}
          >
            <Radio.Group>
              <Radio value>{t<string>('pages.common.yes')}</Radio>
              <Radio value={false}>{t<string>('pages.common.no')}</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>

      {/* 查看关联人员明细 */}
      <Modal
        width="60%"
        title={t<string>('pages.role.relatedPersonnelDetails')}
        open={listModalVisible}
        onCancel={handleListModalCancel}
        footer={null}
        forceRender
      >
        <Form
          form={listPageForm}
          layout="inline"
          onFinish={onListPageFinish}
          style={{ marginBottom: '24px' }}
        >
          <Form.Item name="account" label={t<string>('pages.account.account')}>
            <Input placeholder={t<string>('pages.account.account')} />
          </Form.Item>
          <Form.Item shouldUpdate>
            <Space size="small">
              <Button type="primary" htmlType="submit">
                {t<string>('button.common.search')}
              </Button>

              <Button htmlType="button" onClick={onListPageReset}>
                {t<string>('button.common.reset')}
              </Button>
            </Space>
          </Form.Item>
        </Form>
        <Table
          columns={getListColumns() as any[]}
          dataSource={listPageData}
          onChange={onLisPageChange}
          loading={listPageLoading}
          pagination={{
            ...listPagePagination,
            showQuickJumper: true,
            showSizeChanger: true,
          }}
          rowKey={(row) => row.userId || 'key'}
        />
      </Modal>
    </div>
  );
};

export default QueryTerm;
