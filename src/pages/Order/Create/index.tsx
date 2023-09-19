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
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const CreateOrder = () => {
  const actionRef = useRef<TableQueryActions>(null);
  const [show, setShow] = useState<{ type: string; data?: any }>();
  const [order, setOrder] = useState<defs.bakery.CreateOrderVO>();
  const navigate = useNavigate();
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

  const handleClose = (type?: string) => {
    setShow(undefined);
    if (type === 'go') {
      navigate(`/order/detail?id=${order?.orderId}`)
    } else {
      actionRef.current?.onReset()
      setSubmitData([])
      setSearchParams({
        storeId: '',
        depId: '',
      })
      // actionRef.current?.onQuery();
    }
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
      pageSize: undefined,
      pageNum: undefined,
    });
  };

  const { loading, data, run } = useRequest(getList, {
    manual: true,
  });

  useEffect(() => {
    if (data && data.data) {
      const _store = optionsData?.data?.stores?.find(
        (el) => el.value?.toString() === searchParams.storeId,
      );
      const _dep = optionsData?.data?.deps?.find(
        (el) => el.value?.toString() === searchParams.depId,
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
                min={0}
                precision={0}
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
              name: t<string>(`button.common.remove`),
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
              ...el.props,
              filterOption: (inputValue: string, option: defs.bakery.OptionVO) => {
                return option.label?.includes(inputValue)
              },
              onChange: (value: string) => {
                setSearchParams(_searchParams => {
                  return {
                    ..._searchParams,
                    [el.key]: value
                  }
                })
                actionRef.current?.onQuery()
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
                    depId: searchParams.depId,
                    storeId: searchParams.storeId,
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
                      const _store = optionsData?.data?.stores?.find(
                        (el) => el.value?.toString() === searchParams.storeId,
                      );
                      const _dep = optionsData?.data?.deps?.find(
                        (el) => el.value?.toString() === searchParams.depId,
                      );
                      const _articles = res.data;
                      if (_articles) {
                        setSubmitData((_submitData) => {
                          return [
                            ..._submitData,
                            ..._articles.map((el) => {
                              return {
                                ...el,
                                storeId: _store?.value || '',
                                storeName: _store?.label || '',
                                depName: _dep?.label || '',
                              };
                            }),
                          ];
                        });
                      }
                    }
                  });
              }
            }}
            type="button"
            buttonType="primary"
            buttonTitle={t<string>(`pages.orderList.title0119`)}
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
          <span>{t<string>(`pages.orderList.title0117`)}</span>
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
          {t<string>(`pages.orderList.title0118`)}
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
                  setOrder(res.data);
                  setShow({
                    type: 'add',
                  });
                }
              });
          }}
        >
          {t<string>(`pages.orderList.title0120`)}
        </Button>
      </div>
      {show?.type === 'add' && <AddModal onClose={handleClose} />}
    </Card>
  );
};

export default CreateOrder;
