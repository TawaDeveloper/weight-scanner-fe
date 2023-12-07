import {
  Form,
  Input,
  Card,
  notification,
  Select,
  Button,
  Table,
  TableProps,
} from 'antd';
import './index.less';
import { useRef, useState } from 'react';
import { backofficeAPI } from '@/services';
import { TablePaginationConfig } from 'antd/es/table';
import { CSVLink } from 'react-csv';

const INITIAL_PAGINATION = {
  current: 1,
  pageSize: 10,
};

const Maintainence = () => {
  const [api, contextHolder] = notification.useNotification();
  console.log('api: ', api);
  const [data, setData] = useState<defs.backoffice.UserRole[]>([{ id: 1 }]);
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);
  const userIdRef = useRef(0);
  const [pagination, setPagination] =
    useState<TablePaginationConfig>(INITIAL_PAGINATION);
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

  const onChange: TableProps<any>['onChange'] = (paginationProps) => {
    const { current, pageSize } = paginationProps;
    setPagination({ current, pageSize });

    fetchData({
      pagination: { current, pageSize },
    });
  };

  const getColumns = () => [
    {
      title: 'ID',
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      align: 'center',
    },
    {
      title: 'User Role',
      dataIndex: 'role',
      align: 'center',
    },
    {
      title: 'Created Date',
      dataIndex: 'create',
      align: 'center',
    },
    {
      title: 'Last Update',
      dataIndex: 'update',
      align: 'center',
    },
    {
      title: 'Update By',
      dataIndex: 'update_by',
      align: 'center',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'center',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      align: 'center',
    },
  ];
  const headers = getColumns().map((item) => ({
    label: item.title,
    key: item.dataIndex,
  }));
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      setSelectedRowKeys(selectedRowKeys);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <Card>
      {contextHolder}
      <Form>
        <div className="flex">
          <Form.Item label="Username">
            <Input placeholder="input placeholder" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="User Role">
            <Select placeholder="input placeholder" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="Status">
            <Select placeholder="input placeholder" style={{ width: 200 }} />
          </Form.Item>
          <div className="submit-btns">
            <Button type="primary">Search</Button>
            <Button disabled={!selectedRowKeys.length}>
              <CSVLink type="primary" data={data} headers={headers}>
                Export
              </CSVLink>
            </Button>
          </div>
        </div>
      </Form>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={getColumns() as any}
        dataSource={data}
        onChange={onChange}
        loading={loading}
        pagination={{
          ...pagination,
          showQuickJumper: true,
          showSizeChanger: true,
        }}
        rowKey={(row): any => row.id}
      />
    </Card>
  );
};

export default Maintainence;
