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
        <div className="page-title">PO单号 {po}</div>
        <div className="page-title">状态 {orderDetail?.statusDesc}</div>
        </div>
        <div className="table">
          <div className="item">
            <div className="flex">
              <div className="label">订单编号</div>
              <div className="value">{id}</div>
            </div>
            <div className="flex">
              <div className="label">PR编号</div>
              <div className="value">{orderDetail?.pr}</div>
            </div>
          </div>
          <div className="item">
            <div className="flex">
              <div className="label">下单时间</div>
              <div className="value">{timestampToLocal(orderDetail?.createTime || '')}</div>
            </div>
            <div className="flex">
              <div className="label">预计送达时间</div>
              <div className="value">{timestampToZone(orderDetail?.estDeliveredTime || '', orderDetail?.timezone || '')}</div>
            </div>
            <div className="flex">
              <div className="label">下单人</div>
              <div className="value">{orderDetail?.storeName}</div>
            </div>
          </div>
          <div className="item">
            <div className="flex">
              <div className="label">部门</div>
              <div className="value">{orderDetail?.depName}</div>
            </div>
            <div className="flex">
              <div className="label">门店</div>
              <div className="value">{orderDetail?.storeName}</div>
            </div>
          </div>
          <div className="item">
            <div className="flex">
              <div className="label">产品个数</div>
              <div className="value">{orderDetail?.skuNum}</div>
            </div>
            <div className="flex">
              <div className="label">产品数量</div>
              <div className="value">{orderDetail?.skuQuantity}</div>
            </div>
            <div className="flex">
              <div className="label">PO单总金额</div>
              <div className="value">{orderDetail?.amount}</div>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex">
          <div className="page-title">产品明细</div>
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
