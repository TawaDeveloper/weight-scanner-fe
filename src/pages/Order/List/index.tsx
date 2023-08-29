import { Card } from 'antd';
import { useRequest } from 'ahooks';
import { useRef, useState } from 'react';
import MarioListContent from '@tawa/mario-list-content';
import { TableQueryActions } from '@tawa/mario-hooks/lib/useTableQuery';
import { t } from 'i18next';
import { tableFields, formFields } from './fields';
import { bakeryAPI } from '@/services';
import AddModal from './AddModal';
import AuditModal from './AuditModal';
import { datePickerToTimestamp, download } from '@/utils';
import { YYYY_MM_DD_MAX, YYYY_MM_DD_MIN } from '@/constants';
import { CommonButton } from '@/components/CommonButton';
import './index.less';

const OrderList = () => {
  const auditModalRef = useRef<any>();
  const actionRef = useRef<TableQueryActions>(null);
  const [show, setShow] = useState<{ type: string; data?: any }>();
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  const handleClose = () => {
    actionRef.current?.onQuery();
    setShow(undefined);
  };

  const getList = (params: any) => {
    const { createTime } = params || {};
    return bakeryAPI.order.getOrderListForPage.request({
      ...params,
      maxCreateTime: createTime
        ? datePickerToTimestamp(createTime[1], YYYY_MM_DD_MAX).toString()
        : undefined,
      minCreateTime: createTime
        ? datePickerToTimestamp(createTime[0], YYYY_MM_DD_MIN).toString()
        : undefined,
    });
  };

  const { loading, data, run } = useRequest(getList);

  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  const tableProps = {
    loading,
    fields: tableFields,
    data: data?.data?.records,
    total: data?.data?.total,
    rowKey: 'id',
    rowSelection,
    nextFields: [
      {
        key: 'action',
        name: t<string>(`pages.commentModerationManagement.operations`),
        width: 120,
        type: 'action',
        fixed: 'right',
        props: (_: any, record: any) => ({
          options: [
            {
              name: t<string>(`pages.common.view`),
              onClick: () => {
                console.log('11', record);
              },
            },
            record.status === 1 && {
              name: t<string>(`pages.common.cancel`),
              onClick: () => {
                // bakeryAPI.order.
                console.log('121');
              },
            },
          ],
        }),
      },
    ],
    scroll: { x: 1260 },
    pagination: {
      defaultPageSize: 20,
      pageSize: 20,
      pageSizeOptions: [10, 20, 50, 100],
    },
  };

  const formProps = {
    fields: formFields,
  };

  const handleBatch = async (params: { [x in string]: any }) => {
    const { createTime } = params || {};

    const content = await bakeryAPI.order.exportOrderList.request(
      {
        ids: selectedRowKeys,
        ...params,
        maxCreateTime: createTime
          ? datePickerToTimestamp(createTime[1], YYYY_MM_DD_MAX).toString()
          : undefined,
        minCreateTime: createTime
          ? datePickerToTimestamp(createTime[0], YYYY_MM_DD_MIN).toString()
          : undefined,
      },
      {
        responseType: 'blob',
        'response-type': 'blob',
      },
    );
    download({ content, filename: 'Order_List.xlsx' });
  };
  return (
    <Card>
      <div className="flex">
        <div className="page-title">销量&销售额数据表</div>
        <div className="button-group">
          <CommonButton
            onClick={() => actionRef.current?.onQuery({ type: 'export' })}
          >
            批量导出
          </CommonButton>
          <CommonButton>新建订单</CommonButton>
        </div>
      </div>

      <MarioListContent
        ref={actionRef}
        formProps={formProps}
        tableProps={tableProps}
        fetchData={(values: any) => {
          if (values.type === 'export') {
            handleBatch(values);
          } else {
            run(values);
          }
        }}
        toolbar={<></>}
      />
      {show?.type === 'add' && <AddModal onClose={handleClose} />}
      <AuditModal
        onPageQuery={() => {
          actionRef.current!.onQuery();
          // setSelectedRowKeys([]);
        }}
        ref={auditModalRef}
      />
    </Card>
  );
};

export default OrderList;
