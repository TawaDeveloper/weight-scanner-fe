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
const ReportByStore = () => {
  const [userParams, setUserParams] = useState<UserParams>(DEFAULT_USER_PARAMS);
  const [chartLoading, setChartLoading] = useState(false);
  const [reportLoading, setReportLoading] = useState(false);
  const [reportData, setReportData] = useState<any>([]);
  const [chartData, setChartData] = useState<any>([]);
  const currentReportId = useRef<string | undefined>(undefined);
  const amountChart = useRef<any>();
  const volumnChart = useRef<any>();
  let diabledCompareSamePeriod = false;
  if (userParams.startDate && userParams.endDate) {
    if (
      moment(userParams.startDate).isBefore(
        moment(userParams.endDate).subtract(1, 'year'),
      )
    ) {
      diabledCompareSamePeriod = true;
    }
  }
  const onSearch = async () => {
    if (userParams.department) {
      setReportLoading(true);
      bakeryAPI.statisticalSalesStore.report
        .request({
          department: userParams.department,
          articleNumbers: userParams.articleNumbers,
          storeIds: userParams.storeIds,
        })
        .then((response) => {
          setReportLoading(false);
          setReportData(response.data ? response.data.contents : []);
          currentReportId.current = response.data?.reportId;
        });
    }
    if (userParams.department && userParams.startDate && userParams.endDate) {
      setChartLoading(true);
      const chartRequest: any = [];
      chartRequest.push(
        bakeryAPI.statisticalCommon.chart.request({
          module: 'STORE',
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
            module: 'STORE',
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
              return newItem;
            })
            .concat(
              response2.data.map((item: any) => {
                const newItem: any = { ...item };
                newItem.storeName = `${item.storeName} - Last year`;
                newItem.formatDate = moment(item.salesDate)
                  .add(1, 'year')
                  .format(dataFormat);
                return newItem;
              }),
            ),
        );
      });
    }
  };

  const columns = [
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
    seriesField: 'storeName',
    // xAxis: {
    //   // type: 'time',
    // },
  };
  const amountConfig = {
    data: chartData,
    xField: 'formatDate',
    yField: 'amount',
    seriesField: 'storeName',
    // xAxis: {
    //   type: 'time',
    // },
  };
  const exportReport = async () => {
    if (currentReportId.current) {
      const content = await bakeryAPI.statisticalCommon.exporting.request(
        { module: 'STORE', reportId: currentReportId.current },
        {
          responseType: 'blob',
        },
      );

      download({ content, filename: 'store_report.xlsx' });

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
            disabled={!userParams || !userParams.department}
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
              disabled={diabledCompareSamePeriod}
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
          <PermissionComponent code="component:Store:Sales Volume Trend Export">
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
          <PermissionComponent code="component:Store:Revenue Trend Export">
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
          <PermissionComponent code="component:Store:Sales Volume&Revenue Export">
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
            rowKey="storeId"
            columns={columns}
            bordered
          />
        </div>
      </ContentPanel>
    </>
  );
};

export default ReportByStore;
