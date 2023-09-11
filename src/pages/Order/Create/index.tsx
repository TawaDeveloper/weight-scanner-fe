import { Button, Card, InputNumber, message } from 'antd';
import { useRequest } from 'ahooks';
import { useEffect, useMemo, useRef, useState } from 'react';
import MarioListContent from '@tawa/mario-list-content';
import { TableQueryActions } from '@tawa/mario-hooks/lib/useTableQuery';
import { tableFields, formFields } from './fields';
import { bakeryAPI } from '@/services';
import AddModal from './AddModal';
import { CommonButton } from '@/components/CommonButton';
import TimeIcon from '@/assets/time.svg';

import './index.less';
import { GoodsSelect } from '@/components';
import { WEEK_TYPE } from '@/constants/enums';
import { t } from 'i18next';
// import { useNavigate } from 'react-router-dom';

const CreateOrder = () => {
  const actionRef = useRef<TableQueryActions>(null);
  const [show, setShow] = useState<{ type: string; data?: any }>();
  const [searchParams, setSearchParams] = useState({
    storeId: '',
    depId: '',
  });
  const [estDeliveredDate, setEstDeliveredDate] =
    useState<defs.bakery.EstDeliveredDateVO>();
  const [submitData, setSubmitData] = useState<Array<any>>([]);
  useState<defs.bakery.EstDeliveredDateVO>();
  const { data: optionsData, loading: optionLoading } = useRequest(
    bakeryAPI.order.getNewOptions.request,
  );
  // const navigate = useNavigate();

  const handleClose = () => {
    actionRef.current?.onQuery();
    setShow(undefined);
  };

  const getList = (params: any) => {
    bakeryAPI.order.getNewEstDeliveredDate
      .request({ storeId: params.storeId })
      .then((res) => {
        if (res.success && res.data) {
          setEstDeliveredDate(res.data);
        }
      });
    return bakeryAPI.order.getNewRefArticles.request({
      ...params,
    });
  };

  const { loading, data, run } = useRequest(getList, {
    manual: true,
  });

  useEffect(() => {
    if (data && data.data) {
      const _store = optionsData?.data?.stores?.find(
        (el) => el.label === searchParams.storeId,
      );
      const _dep = optionsData?.data?.deps?.find(
        (el) => el.label === searchParams.depId,
      );
      setSubmitData(
        data.data.map((el) => {
          return {
            ...el,
            storeId: _store?.value || '',
            storeName: _store?.label || '',
            depName: _dep?.label || '',
          };
        }),
      );
    }
  }, [data]);
  const tableProps = {
    loading,
    fields: tableFields.map((el) => {
      if (el.key === 'quantity') {
        return {
          ...el,
          render: (value: string, record: defs.bakery.OrderNewRefArticle) => {
            return (
              <InputNumber
                value={record.actualOrderQuantity}
                onChange={(value: number | null) => {
                  setSubmitData((_submitData) =>
                    _submitData.map((el) => {
                      if (el.articleNumber === record.articleNumber) {
                        return { ...el, actualOrderQuantity: value || 0 };
                      } else {
                        return el;
                      }
                    }),
                  );
                }}
              ></InputNumber>
            );
          },
        };
      }
      return el;
    }),
    data: submitData,
    total: data?.data ? data?.data.length : 0,
    rowKey: 'articleNumber',
    nextFields: [
      {
        key: 'action',
        name: t<string>(`pages.orderList.title0050`),
        width: 120,
        type: 'action',
        props: (_: any, record: defs.bakery.OrderNewRefArticle) => ({
          options: [
            {
              name: t<string>(`pages.common.remove`),
              onClick: () => {
                setSubmitData((_submitData) =>
                  _submitData.filter(
                    (el) => el.articleNumber !== record.articleNumber,
                  ),
                );
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
            disabled={!searchParams.depId || !searchParams.storeId}
            depId={searchParams.depId}
            storeId={searchParams.storeId}
            onChange={(values) => {
              if (values && values.products && values.products.length > 0) {
                bakeryAPI.order.getNewRefArticle
                  .request({
                    ...searchParams,
                    articleNumbers:
                      values && values.products
                        ? values?.products.map((el) =>
                            el.articleNumber
                              ? el.articleNumber?.toString()
                              : '',
                          )
                        : [],
                  })
                  .then((res) => {
                    if (res.data && res.success) {
                      actionRef.current?.onQuery();
                    }
                  });
              }
            }}
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
          <span>
            {estDeliveredDate?.date}{' '}
            {estDeliveredDate?.dayOfWeek &&
              WEEK_TYPE[estDeliveredDate?.dayOfWeek]}
          </span>
        </div>
        <CommonButton
          onClick={() => {
            setSubmitData((_submitData) =>
              _submitData.map((el) => {
                return { ...el, actualOrderQuantity: el.dayRefQuantity };
              }),
            );
          }}
        >
          一键填入实际进货量
        </CommonButton>
      </div>
      {!optionLoading && (
        <MarioListContent
          ref={actionRef}
          formProps={formProps}
          tableProps={tableProps}
          fetchData={(values: any) => {
            if (values.storeId && values.depId) {
              setSearchParams(values);
              run(values);
            } else {
              message.error(values.storeId ? '请选择部门' : '请选中门店');
            }
          }}
          toolbar={<></>}
        />
      )}
      <div className="submit-button-box">
        <Button
          disabled={!searchParams.depId || !searchParams.storeId}
          className="submit-button"
          onClick={() => {
            bakeryAPI.order.createOrder
              .request({
                dep: searchParams.depId,
                storeId: searchParams.storeId,
                items: submitData.map((el) => {
                  return {
                    articleNumber: el.articleNumber,
                    dayActualQuantity: el.actualOrderQuantity,
                    dayRefQuantity: el.dayRefQuantity,
                    weekSalesGoal: el.weekSalesGoal,
                  };
                }),
              })
              .then((res) => {
                if (res.data && res.success) {
                  actionRef.current?.onQuery();
                }
              });
          }}
        >
          提交订单
        </Button>
      </div>
      {show?.type === 'add' && <AddModal onClose={handleClose} />}
    </Card>
  );
};

export default CreateOrder;
