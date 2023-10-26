import { Card } from 'antd';
import { useRequest } from 'ahooks';
import { useMemo, useRef, useState } from 'react';
import MarioListContent from '@tawa/mario-list-content';
import { TableQueryActions } from '@tawa/mario-hooks/lib/useTableQuery';
import { tableFields, formFields } from './fields';
import { bakeryAPI } from '@/services';
import AddModal from './AddModal';
import AuditModal from './AuditModal';
import { datePickerToTimestamp, download } from '@/utils';
import {
  DEFAULT_LANG,
  INITIAL_PAGE_PARAMS,
  YYYY_MM_DD_MAX,
  YYYY_MM_DD_MIN,
} from '@/constants';
import { CommonButton } from '@/components/CommonButton';
import './index.less';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const OrderList = () => {
  const lang = localStorage.getItem('lang') ?? DEFAULT_LANG;
  const auditModalRef = useRef<any>();
  const navigate = useNavigate();
  const actionRef = useRef<TableQueryActions>(null);
  const [show, setShow] = useState<{ type: string; data?: any }>();
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const { data: optionsData, loading: optionLoading } = useRequest(
    bakeryAPI.order.getListOptions.request,
  );

  const handleClose = () => {
    actionRef.current?.onQuery();
    setShow(undefined);
  };

  const getList = (params: any) => {
    const { createTime } = params || {};

    return bakeryAPI.order.getOrderListForPage.request({
      ...INITIAL_PAGE_PARAMS,
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
    data: data?.data?.records?.map((el, index) => {
      return {
        id: `${el.orderId }-${el.pr}-${el.po}`,
        ...el,
      }
    }),
    total: data?.data?.total,
    rowKey: 'id',
    rowSelection,
    nextFields: [],
    scroll: { x: 1260 },
    pagination: {
      defaultPageSize: 20,
      pageSize: 20,
      pageSizeOptions: [10, 20, 50, 100],
    },
  };
  console.log(data?.data?.records)
  const formProps = useMemo(() => {
    return {
      fields: formFields.map((el) => {
        if (el.key === 'storeId' || el.key === 'dep') {
          return {
            ...el,
            props: () => ({
              ...el.props,
              filterOption: (
                inputValue: string,
                option: defs.bakery.OptionVO,
              ) => {
                return option.label?.includes(inputValue);
              },
              options:
                el.key === 'storeId'
                  ? optionsData &&
                    optionsData?.data &&
                    optionsData?.data?.stores
                    ? optionsData?.data?.stores
                    : []
                  : optionsData && optionsData?.data && optionsData?.data?.deps
                  ? optionsData?.data?.deps
                  : [],
            }),
          };
        } else {
          return { ...el };
        }
      }),
    };
  }, [optionsData]);

  const handleBatch = async (params: { [x in string]: any }) => {
    const { createTime } = params || {};
    const selectTable = data?.data?.records?.filter(el => selectedRowKeys.includes(el.orderId || ''))
    const content = await bakeryAPI.order.exportOrderList.request(
      {
        exportItems: selectTable ? selectTable.map((el) => {
          return { orderId: el.orderId || '', po: el.po };
        }) : [],
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
        <div className="page-title"></div>
        <div className="button-group">
          <CommonButton
            onClick={() => actionRef.current?.onQuery({ type: 'export' })}
          >
            {t<string>(`pages.orderList.title0015`)}
          </CommonButton>
          <CommonButton onClick={() => navigate('/order/create')}>
            {t<string>(`menus.top.createOrder`)}
          </CommonButton>
        </div>
      </div>
      {!optionLoading && (
        <MarioListContent
          lang={lang.replace('_', '')}
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
      )}
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
