import { useRef, useState } from 'react';
import { Button, Checkbox, Empty, Radio, Spin, Table, message } from 'antd';
import { Line } from '@ant-design/plots';
import { t } from 'i18next';
import moment from 'moment';
import ContentPanel from '@/components/ContentPanel';
import DateSelect from '../components/DateSelect';
import DepartmentSelect from '../components/DepartmentSelect';
import styles from './index.less';
import ProductSelect from '../components/ProductSelect';
import StoreSelect from '../components/StoreSelect';
import { bakeryAPI } from '@/services';
import { download } from '@/utils';
import PermissionComponent from '@/components/PermissionComponent';

interface UserParams {
  storeIds: string[];
  viewBy: string;
  articleNumbers: string[];
  department: string | null;
  compareSamePeriod: boolean;
  categories: string[];
  startDate: number | null;
  endDate: number | null;
}
const DEFAULT_USER_PARAMS = {
  storeIds: [],
  viewBy: 'month',
  articleNumbers: [],
  department: null,
  compareSamePeriod: false,
  categories: [],
  startDate: null,
  endDate: null,
};
const ReportByProduct = () => {
  const [userParams, setUserParams] = useState<UserParams>(DEFAULT_USER_PARAMS);
  const [chartLoading, setChartLoading] = useState(false);
  const [reportLoading, setReportLoading] = useState(false);
  const [reportData, setReportData] = useState<any>([]);
  const [chartData, setChartData] = useState<any>([]);
  const currentReportId = useRef<string | undefined>(undefined);
  const amountChart = useRef<any>();
  const volumnChart = useRef<any>();
  // const onSearch = async () => {
  //   if (selectedDepartment.current) {
  //     const response = await bakeryAPI.statisticalSalesProduct.report.request({
  //       department: selectedDepartment.current,
  //     });
  //     setReportData(response.data?.contents);
  //   }
  //   if (
  //     selectedDepartment.current &&
  //     selectedDate.current &&
  //     selectedViewBy.current
  //   ) {
  //     const response = await bakeryAPI.statisticalCommon.chart.request({
  //       module: 'PRODUCT',
  //       department: selectedDepartment.current,
  //       startDate: selectedDate.current[0],
  //       endDate: selectedDate.current[1],
  //       viewBy: selectedViewBy.current,
  //     });
  //     if (response.data) {
  //       setChartData(response.data);
  //     }
  //   }
  // };
  const onSearch = async () => {
    if (userParams.department) {
      setReportLoading(true);
      bakeryAPI.statisticalSalesProduct.report
        .request({
          department: userParams.department,
          articleNumbers: userParams.articleNumbers,
          storeIds: userParams.storeIds,
        })
        .then((response) => {
          setReportLoading(false);
          setReportData(response.data?.contents);
          currentReportId.current = response.data?.reportId;
        });
    }
    if (userParams.department && userParams.startDate && userParams.endDate) {
      setChartLoading(true);
      const chartRequest: any = [];
      chartRequest.push(
        bakeryAPI.statisticalCommon.chart.request({
          module: 'PRODUCT',
          department: userParams.department,
          startDate: userParams.startDate,
          endDate: userParams.endDate,
          viewBy: userParams.viewBy,
          articleNumbers: userParams.articleNumbers,
          categories: userParams.categories,
          // compareSamePeriod: userParams.compareSamePeriod,
          storeIds: userParams.storeIds,
        }),
      );
      if (userParams.compareSamePeriod === true) {
        chartRequest.push(
          bakeryAPI.statisticalCommon.chart.request({
            module: 'PRODUCT',
            department: userParams.department,
            startDate: moment(userParams.startDate)
              .subtract(1, 'year')
              .toDate()
              .getTime(),
            endDate: moment(userParams.endDate)
              .subtract(1, 'year')
              .toDate()
              .getTime(),
            viewBy: userParams.viewBy,
            articleNumbers: userParams.articleNumbers,
            categories: userParams.categories,
            // compareSamePeriod: userParams.compareSamePeriod,
            storeIds: userParams.storeIds,
          }),
        );
      }
      Promise.all(chartRequest).then((responseList) => {
        let response1: any = {
          data: [],
        };
        let response2: any = {
          data: [],
        };
        if (responseList[0]) {
          // eslint-disable-next-line prefer-destructuring
          response1 = responseList[0];
        }
        if (responseList[1]) {
          // eslint-disable-next-line prefer-destructuring
          response2 = responseList[1];
        }
        setChartLoading(false);
        let dataFormat = 'YYYY-MM';
        switch (userParams.viewBy) {
          case 'month': {
            dataFormat = 'YYYY-MM';
            break;
          }
          case 'day': {
            dataFormat = 'YYYY-MM-DD';
            break;
          }
          case 'week': {
            dataFormat = 'YYYY-WW';
            break;
          }
          default: {
            dataFormat = 'YYYY-MM';
            break;
          }
        }
        setChartData(
          response1.data
            .map((item: any) => {
              const newItem: any = { ...item };
              newItem.formatDate = moment(item.salesDate).format(dataFormat);
              newItem.formatProductName = `${newItem.articleNumber} - ${newItem.articleName}`;
              return newItem;
            })
            .concat(
              response2.data.map((item: any) => {
                const newItem: any = { ...item };
                //     newItem.articleName = `${item.articleName} - Last year`;
                newItem.formatProductName = `${newItem.articleNumber} - ${newItem.articleName} - Last year`;
                newItem.formatDate = moment(item.salesDate)
                  .add(1, 'year')
                  .format(dataFormat);
                return newItem;
              }),
            ),
        );
      });
    }
    // if (userParams.department && userParams.startDate && userParams.endDate) {
    //   setChartLoading(true);
    //   bakeryAPI.statisticalCommon.chart
    //     .request({
    //       module: 'PRODUCT',
    //       department: userParams.department,
    //       startDate: userParams.startDate,
    //       endDate: userParams.endDate,
    //       viewBy: userParams.viewBy,
    //       articleNumbers: userParams.articleNumbers,
    //       categories: userParams.categories,
    //       compareSamePeriod: userParams.compareSamePeriod,
    //       storeIds: userParams.storeIds,
    //     })
    //     .then((response) => {
    //       setChartLoading(false);
    //       if (response.data) {
    //         setChartData(response.data);
    //       }
    //     });
    // }
  };

  //   {
  //     "name": "WHITE BEAN CURD THREAD",
  //     "articleNumber": "8085150",
  //     "category": "60100207",
  //     "description": "WHITE BEAN CURD THREAD",
  //     "packSize": "",
  //     "storeId": "1005",
  //     "storeName": "Tawa Supermarket, Inc. - #1005",
  //     "storeGroup": "SCA5",
  //     "averageVolumeForLastWeek": 0,
  //     "averageAmountForLastWeek": 0,
  //     "averageVolumeFor4Week": 0,
  //     "averageAmountFor4Week": 0,
  //     "averageVolumeFor12Week": 0.05,
  //     "averageAmountFor12Week": 0.49
  // }
  const columns = [
    {
      title: t<string>('pages.report.Product'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t<string>('pages.report.ArticleNumber'),
      dataIndex: 'articleNumber',
      key: 'articleNumber',
    },
    {
      title: t<string>('pages.report.Category'),
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: t<string>('pages.report.Description'),
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: t<string>('pages.report.Store'),
      dataIndex: 'storeName',
      key: 'storeName',
    },
    {
      title: t<string>('pages.report.Region'),
      dataIndex: 'storeGroup',
      key: 'storeGroup',
    },
    {
      title: t<string>('pages.report.Department'),
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: t<string>('pages.report.WeekAverageSalesVolume12'),
      dataIndex: 'averageVolumeFor12Week',
      key: 'averageVolumeFor12Week',
    },
    {
      title: t<string>('pages.report.WeekAverageRevenue12'),
      dataIndex: 'averageAmountFor12Week',
      key: 'averageAmountFor12Week',
    },
    {
      title: t<string>('pages.report.WeekAverageSalesVolume4'),
      dataIndex: 'averageVolumeFor4Week',
      key: 'averageVolumeFor4Week',
    },
    {
      title: t<string>('pages.report.WeekAverageRevenue4'),
      dataIndex: 'averageAmountFor12Week',
      key: 'averageAmountFor12Week',
    },
    {
      title: t<string>('pages.report.LastWeekSalesVolume'),
      dataIndex: 'averageVolumeForLastWeek',
      key: 'averageVolumeForLastWeek',
    },
    {
      title: t<string>('pages.report.LastWeekRevenue'),
      dataIndex: 'averageAmountForLastWeek',
      key: 'averageAmountForLastWeek',
    },
  ];
  const volumeConfig = {
    data: chartData,
    xField: 'formatDate',
    yField: 'volume',
    seriesField: 'formatProductName',
  };
  const amountConfig = {
    data: chartData,
    xField: 'formatDate',
    yField: 'amount',
    seriesField: 'formatProductName',
  };
  const exportReport = async () => {
    if (currentReportId.current) {
      const content = await bakeryAPI.statisticalCommon.exporting.request(
        { module: 'PRODUCT', reportId: currentReportId.current },
        {
          responseType: 'blob',
        },
      );

      download({ content, filename: 'product_report.xlsx' });

      message.success(t<string>('pages.common.operationSuccess'));
    }
  };
  return (
    <>
      <ContentPanel>
        <div className={styles.selectGroup1}>
          <DateSelect
            onChange={(values) => {
              setUserParams((item) => {
                const newParams = { ...item };
                newParams.startDate = values[0] as any;
                newParams.endDate = values[1] as any;
                return newParams;
              });
            }}
          />
          <DepartmentSelect
            value={userParams.department}
            onChange={(value) => {
              setUserParams((item) => {
                const newParams = { ...item };
                newParams.department = value;
                return newParams;
              });
            }}
          />
        </div>
      </ContentPanel>
      <ContentPanel>
        <div className={styles.selectGroup2}>
          <div className={styles.productSelect}>
            <ProductSelect
              value={userParams.articleNumbers}
              department={userParams.department}
              onChange={(value: any) => {
                setUserParams((item) => {
                  const newParams = { ...item };
                  newParams.articleNumbers = value;
                  return newParams;
                });
              }}
            />
          </div>
          <div className={styles.storeSelect}>
            <StoreSelect
              value={userParams.storeIds}
              onChange={(value) => {
                setUserParams((item) => {
                  const newParams = { ...item };
                  newParams.storeIds = value;
                  return newParams;
                });
              }}
            />
          </div>
          <Button
            type="primary"
            style={{ marginRight: '20px' }}
            loading={chartLoading || reportLoading}
            onClick={() => {
              onSearch();
            }}
          >
            {t<string>('pages.report.Query')}
          </Button>
          <Button
            onClick={() => {
              setUserParams((item) => {
                const newItem: any = DEFAULT_USER_PARAMS;
                newItem.startDate = item.startDate;
                newItem.endDate = item.endDate;
                return newItem;
              });
              setChartData([]);
              setReportData([]);
              setReportLoading(false);
              setChartLoading(false);
            }}
          >
            {t<string>('pages.report.Reset')}
          </Button>
        </div>
        <div className={styles.selectGroup3}>
          <div className={styles.selectGroup4}>
            <Radio.Group
              style={{ marginRight: '15px' }}
              value={userParams.viewBy}
              onChange={(event) => {
                setUserParams((item) => {
                  const newItem = { ...item };
                  newItem.viewBy = event.target.value;
                  return newItem;
                });
              }}
            >
              <Radio.Button value="month">
                {t<string>(`pages.report.Month`)}
              </Radio.Button>
              <Radio.Button value="week">
                {t<string>(`pages.report.Week`)}
              </Radio.Button>
              <Radio.Button value="day">
                {t<string>(`pages.report.Day`)}
              </Radio.Button>
            </Radio.Group>
            <Checkbox
              style={{ marginRight: '15px' }}
              value={userParams.compareSamePeriod}
              onChange={(event) => {
                setUserParams((item) => {
                  const newItem = { ...item };
                  newItem.compareSamePeriod = event.target.checked;
                  return newItem;
                });
              }}
            >
              {t<string>(`pages.report.SamePeriodLastYear`)}
            </Checkbox>
            <Checkbox>{t<string>(`pages.report.RememberMySelection`)}</Checkbox>
          </div>
        </div>
      </ContentPanel>
      <ContentPanel>
        <div className={styles.tableHeader}>
          <div>{t<string>(`pages.report.SalesVolumeTrend`)}</div>
          <PermissionComponent code="component:Product:Sales Volume Trend Export">
            <Button
              disabled={chartData.length === 0}
              onClick={() => {
                volumnChart.current.downloadImage();
              }}
            >
              {t<string>(`pages.report.Export`)}
            </Button>
          </PermissionComponent>
        </div>
        <Spin spinning={chartLoading}>
          {chartData.length === 0 && <Empty />}
          {chartData.length !== 0 && (
            <Line
              {...volumeConfig}
              onReady={(plot) => {
                volumnChart.current = plot;
              }}
            />
          )}
        </Spin>
      </ContentPanel>
      <ContentPanel>
        <div className={styles.tableHeader}>
          <div>{t<string>(`pages.report.RevenueTrend`)}</div>
          <PermissionComponent code="component:Product:Revenue Trend Export">
            <Button
              disabled={chartData.length === 0}
              onClick={() => {
                amountChart.current.downloadImage();
              }}
            >
              {t<string>(`pages.report.Export`)}
            </Button>
          </PermissionComponent>
        </div>
        <Spin spinning={chartLoading}>
          {chartData.length === 0 && <Empty />}
          {chartData.length !== 0 && (
            <Line
              {...amountConfig}
              onReady={(plot) => {
                amountChart.current = plot;
              }}
            />
          )}
        </Spin>
      </ContentPanel>
      <ContentPanel>
        <div className={styles.tableHeader}>
          <div>{t<string>(`pages.report.SalesVolumeRevenueReport`)}</div>
          <PermissionComponent code="component:Product:Sales Volume&Revenue Export">
            <Button
              disabled={!currentReportId.current}
              onClick={() => {
                exportReport();
              }}
            >
              {t<string>(`pages.report.Export`)}
            </Button>
          </PermissionComponent>
        </div>
        <div className={styles.table}>
          <Table
            loading={reportLoading}
            dataSource={reportData}
            rowKey="articleNumber"
            columns={columns}
            bordered
          />
        </div>
      </ContentPanel>
    </>
  );
};

export default ReportByProduct;
