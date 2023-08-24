import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Modal, Table, Space, Form, DatePicker, message } from 'antd';
import moment from 'moment';
import { t } from 'i18next';

import type { TablePaginationConfig, TableProps } from 'antd/es/table';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { backofficeAPI } from '@/services';
import { YYYY_MM_DD } from '@/constants';
import { getDatePstString } from '@/utils';

const INITIAL_PAGINATION = {
  current: 1,
  pageSize: 10,
};

const RoleListModal = (_: any, ref: React.Ref<unknown> | undefined) => {
  const [expirationDateForm] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [expirationDateVisible, setExpirationDateVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<defs.backoffice.UserRole[]>();
  const [pagination, setPagination] =
    useState<TablePaginationConfig>(INITIAL_PAGINATION);

  const userIdRef = useRef(0);
  const roleIdRef = useRef(0);

  const fetchData = async (params: any) => {
    const {
      pagination: { current, pageSize },
    } = params;
    setLoading(true);
    const { data: results } =
      (await backofficeAPI.webUser.getRoleListPage.request({
        pageNum: current,
        pageSize,
        userId: userIdRef.current,
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

  useImperativeHandle(ref, () => ({
    toShow(userId: number) {
      userIdRef.current = userId;
      fetchData({ userId, pagination });
      setVisible(true);
    },
  }));

  const onChange: TableProps<any>['onChange'] = (paginationProps) => {
    const { current, pageSize } = paginationProps;
    setPagination({ current, pageSize });

    fetchData({
      pagination: { current, pageSize },
    });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = async (id: number) => {
    Modal.confirm({
      title: t<string>('pages.organization.deleteTip'),
      icon: <ExclamationCircleOutlined />,
      async onOk() {
        await backofficeAPI.webUser.removeUserRole.request({
          id,
        });
        fetchData({
          pagination,
        });

        message.success(t<string>('pages.common.operationSuccess'));
      },
    });
  };

  const handleExpirationDateOk = async () => {
    const { validTime } = await expirationDateForm.validateFields();
    const [validStartTime, validEndTime] = validTime;
    await backofficeAPI.webUser.updateUserRoleValidTime.request({
      id: roleIdRef.current,
      validEndTime: `${moment(validEndTime).format(YYYY_MM_DD)} 12:00:00`,
      validStartTime: `${moment(validStartTime).format(YYYY_MM_DD)} 00:00:00`,
      validTimeType: 1,
    });
    fetchData({ userId: userIdRef.current, pagination });
    setExpirationDateVisible(false);
  };

  const handleExpirationDateCancel = () => {
    setExpirationDateVisible(false);
  };

  const getColumns = () => [
    {
      title: t<string>('pages.role.roleName'),
      dataIndex: 'roleName',
      align: 'center',
    },
    {
      title: t<string>('pages.account.assignedTime'),
      align: 'center',
      render: (row: any) => getDatePstString(row.createdTime),
    },
    {
      title: t<string>('pages.role.validityPeriod'),
      align: 'center',
      render: (row: any) => (
        <>
          {getDatePstString(row.validStartTime, YYYY_MM_DD)} -{' '}
          {getDatePstString(row.validEndTime, YYYY_MM_DD)}
        </>
      ),
    },
    {
      title: t<string>('pages.common.operation'),
      align: 'center',
      render: (row: any) => {
        const handleClick = (id: number) => {
          roleIdRef.current = id;
          setExpirationDateVisible(true);
        };

        return (
          <Space>
            <a onClick={() => handleClick(row?.id)}>
              {t<string>('pages.account.setExpirationDate')}
            </a>

            <a onClick={() => handleDelete(row?.id)}>
              {t<string>('pages.common.delete')}
            </a>
          </Space>
        );
      },
    },
  ];

  const modalProps = {
    visible,
    title: t<string>('pages.account.roleList'),
    width: '80%',
    onCancel: handleCancel,
    footer: null,
  };

  return (
    <>
      <Modal {...modalProps}>
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
        />
      </Modal>
      <Modal
        visible={expirationDateVisible}
        title={t<string>('pages.account.setExpirationDate')}
        width="480px"
        onOk={handleExpirationDateOk}
        onCancel={handleExpirationDateCancel}
      >
        <Form
          form={expirationDateForm}
          name="resetPasswordForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            name="validTime"
            label={t<string>('pages.account.setExpirationDate')}
            rules={[{ required: true }]}
          >
            <DatePicker.RangePicker
              disabledDate={(current) =>
                current && current < moment().subtract(1, 'days').endOf('day')
              }
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default forwardRef(RoleListModal);
