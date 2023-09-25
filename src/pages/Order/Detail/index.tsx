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
import { DEFAULT_LANG, INITIAL_PAGE_PARAMS } from '@/constants';
import { t } from 'i18next';

const OrderDetail = () => {
  const lang = localStorage.getItem('lang') ?? DEFAULT_LANG;
  const actionRef = useRef<TableQueryActions>(null);
  const [search] = useSearchParams();
  const id = search.get('id');
  const [orderDetail, setOrderDetail] =
    useState<defs.bakery.OrderDetailBaseVO>();
  useEffect(() => {
    if (id) {
      bakeryAPI.order.getOrderBaseInfo
        .request({
          orderId: id,
        })
        .then((res) => {
          if (res.success && res.data) {
            setOrderDetail(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);
  const getList = (params: any) => {
    return bakeryAPI.order.getOrderDetailItemsForPage.request({
      ...INITIAL_PAGE_PARAMS,
      ...params,
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
    nextFields: [],
  };

  return (
    <div>
      <Card className="order-placed">
        <div className="page-title">
          {t<string>(`pages.orderList.title0024`)} {orderDetail?.orderId}
        </div>
        <div className="table">
          <div className="item">
            <div className="flex">
              <div className="label">
                {t<string>(`pages.orderList.title0012`)}
              </div>
              <div className="value">
                {timestampToLocal(orderDetail?.createTime || '')}
              </div>
            </div>
            <div className="flex">
              <div className="label">
                {t<string>(`pages.orderList.title0040`)}
              </div>
              <div className="value">
                {timestampToZone(
                  orderDetail?.estDeliveredTime || '',
                  orderDetail?.timezone || '',
                )}
              </div>
            </div>
            <div className="flex">
              <div className="label">
                {t<string>(`pages.orderList.title0088`)}
              </div>
              <div className="value">{orderDetail?.createUserName}</div>
            </div>
          </div>
          <div className="item">
            <div className="flex">
              <div className="label">
                {t<string>(`pages.orderList.title0090`)}
              </div>
              <div className="value">{orderDetail?.depName}</div>
            </div>
            <div className="flex">
              <div className="label">
                {t<string>(`pages.orderList.title0089`)}
              </div>
              <div className="value">{orderDetail?.storeName}</div>
            </div>
          </div>
          <div className="item">
            <div className="flex">
              <div className="label">
                {t<string>(`pages.orderList.title0093`)}
              </div>
              <div className="value">{orderDetail?.skuNum}</div>
            </div>
            <div className="flex">
              <div className="label">
                {t<string>(`pages.orderList.title0116`)}
              </div>
              <div className="value">{orderDetail?.skuQuantity}</div>
            </div>
            <div className="flex">
              <div className="label">
                {t<string>(`pages.orderList.title0121`)}
              </div>
              <div className="value">{orderDetail?.amount}</div>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex">
          <div className="page-title">
            {t<string>(`pages.orderList.title0125`)}
          </div>
        </div>

        <MarioListContent
          lang={lang.replace('_', '')}
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

export default OrderDetail;
