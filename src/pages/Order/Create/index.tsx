import { Card } from 'antd';
import { useRequest } from 'ahooks';
import { useMemo, useRef, useState } from 'react';
import MarioListContent from '@tawa/mario-list-content';
import { TableQueryActions } from '@tawa/mario-hooks/lib/useTableQuery';
import { tableFields, formFields } from './fields';
import { bakeryAPI } from '@/services';
import AddModal from './AddModal';
import { CommonButton } from '@/components/CommonButton';
import TimeIcon from '@/assets/time.svg';

import './index.less';
import { GoodsSelect } from '@/components';
// import { useNavigate } from 'react-router-dom';

const CreateOrder = () => {
  const actionRef = useRef<TableQueryActions>(null);
  const [show, setShow] = useState<{ type: string; data?: any }>();
  const { data: optionsData, loading: optionLoading } = useRequest(
    bakeryAPI.order.getNewOptions.request,
  );
  // const navigate = useNavigate();

  const handleClose = () => {
    actionRef.current?.onQuery();
    setShow(undefined);
  };

  const getList = (params: any) => {
    return bakeryAPI.order.getNewArticles.request({
      ...params,
    });
  };

  const { loading, data, run } = useRequest(getList);

  const tableProps = {
    loading,
    fields: tableFields,
    data: data?.data?.records,
    total: data?.data?.total,
    rowKey: 'orderId',
    nextFields: [],
    scroll: { x: 1260 },
    pagination: {
      defaultPageSize: 20,
      pageSize: 20,
      pageSizeOptions: [10, 20, 50, 100],
    },
  };

  const formProps = useMemo(() => {
    return {
      fields: formFields.map((el) => {
        if (el.key === 'storeId' || el.key === 'depId') {
          return {
            ...el,
            props: () => ({
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

  return (
    <Card>
      <div className="flex">
        <div className="page-title">销量&销售额数据表</div>
        <div className="button-group">
          <GoodsSelect
            type="button"
            buttonType="primary"
            buttonTitle="添加产品"
          />
          {/* <CommonButton onClick={() => setShow({ type: 'add' })}>
            添加产品
          </CommonButton> */}
        </div>
      </div>
      <div className="time-content">
        <div className="left">
          <div className="img-box">
            <img src={TimeIcon} alt=""></img>
          </div>
          <span>预计送货时间</span>
          <span>2023-08-11 周四</span>
        </div>
        <CommonButton>一键填入实际进货量</CommonButton>
      </div>
      {!optionLoading && (
        <MarioListContent
          ref={actionRef}
          formProps={formProps}
          tableProps={tableProps}
          fetchData={run}
          toolbar={<></>}
        />
      )}
      {show?.type === 'add' && <AddModal onClose={handleClose} />}
    </Card>
  );
};

export default CreateOrder;
