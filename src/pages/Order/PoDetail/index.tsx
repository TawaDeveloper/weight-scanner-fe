import { Card } from 'antd';
import { useRequest } from 'ahooks';
import { useEffect, useRef, useState } from 'react';
import MarioListContent from '@tawa/mario-list-content';
import { TableQueryActions } from '@tawa/mario-hooks/lib/useTableQuery';
import { tableFields } from './fields';
import { bakeryAPI } from '@/services';
import './index.less';
import { useSearchParams } from 'react-router-dom';
import { timestampToLocal, timestampToZone } from '@/utils';
import { INITIAL_PAGE_PARAMS } from '@/constants';
import { t } from 'i18next';

const OrderPoDetail = () => {
  const actionRef = useRef<TableQueryActions>(null);
  const [search] = useSearchParams();
  const id = search.get('id');
  const po = search.get('po');
  const [orderDetail, setOrderDetail] = useState<defs.bakery.PoDetailBaseVO>();
  useEffect(() => {
    if (id && po) {
      bakeryAPI.order.getPoBaseInfo
        .request({
          orderId: id,
          po,
        })
        .then((res) => {
          if (res.success && res.data) {
            setOrderDetail(res.data);
          }
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
    }
  }, [id, po]);
  const getList = (params: any) => {
    return bakeryAPI.order.getPoDetailItemsForPage.request({
      ...INITIAL_PAGE_PARAMS,
      ...params,
      po,
      orderId: id,
    });
  };

  const { loading, data, run } = useRequest(getList);


  const tableProps = {
    loading,
    fields: tableFields,
    data: data?.data?.records,
    total: data?.data?.total,
    rowKey: 'id',
    nextFields: []
  };

  return (
    <div>
      <Card className="order-placed">
        <div className='flex'>
        <div className="page-title">{t<string>(`pages.orderList.title0122`)} {po}</div>
        <div className="page-title">{t<string>(`pages.common.status`)} {orderDetail?.statusDesc}</div>
        </div>
        <div className="table">
          <div className="item">
            <div className="flex">
              <div className="label">{t<string>(`pages.orderList.title0001`)}</div>
              <div className="value">{id}</div>
            </div>
            <div className="flex">
              <div className="label">{t<string>(`pages.orderList.title0091`)}</div>
              <div className="value">{orderDetail?.pr}</div>
            </div>
          </div>
          <div className="item">
            <div className="flex">
              <div className="label">{t<string>(`pages.orderList.title0012`)}</div>
              <div className="value">{timestampToLocal(orderDetail?.createTime || '')}</div>
            </div>
            <div className="flex">
              <div className="label">{t<string>(`pages.orderList.title0040`)}</div>
              <div className="value">{timestampToZone(orderDetail?.estDeliveredTime || '', orderDetail?.timezone || '')}</div>
            </div>
            <div className="flex">
              <div className="label">{t<string>(`pages.orderList.title0088`)}</div>
              <div className="value">{orderDetail?.storeName}</div>
            </div>
          </div>
          <div className="item">
            <div className="flex">
              <div className="label">{t<string>(`pages.orderList.title0090`)}</div>
              <div className="value">{orderDetail?.depName}</div>
            </div>
            <div className="flex">
              <div className="label">{t<string>(`pages.orderList.title0089`)}</div>
              <div className="value">{orderDetail?.storeName}</div>
            </div>
          </div>
          <div className="item">
            <div className="flex">
              <div className="label">{t<string>(`pages.orderList.title0093`)}</div>
              <div className="value">{orderDetail?.skuNum}</div>
            </div>
            <div className="flex">
              <div className="label">{t<string>(`pages.orderList.title0116`)}</div>
              <div className="value">{orderDetail?.skuQuantity}</div>
            </div>
            <div className="flex">
              <div className="label">{t<string>(`pages.orderList.title0123`)}</div>
              <div className="value">{orderDetail?.amount}</div>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex">
          <div className="page-title">{t<string>(`pages.orderList.title0126`)}</div>
        </div>

        <MarioListContent
          ref={actionRef}
          action={<></>}
          tableProps={tableProps}
          fetchData={run}
          toolbar={<></>}
        />
      </Card>
    </div>
  );
};

export default OrderPoDetail;
