import { useRef, useState } from 'react';
import { Button, Checkbox, Empty, Radio, Spin, Table, message } from 'antd';
import { Line } from '@ant-design/plots';
import { t } from 'i18next';
import ContentPanel from '@/components/ContentPanel';
import DateSelect from '../components/DateSelect';
import DepartmentSelect from '../components/DepartmentSelect';
import styles from './index.less';
import ProductSelect from '../components/ProductSelect';
import StoreSelect from '../components/StoreSelect';
import { bakeryAPI } from '@/services';
import { download } from '@/utils';

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
      bakeryAPI.statisticalCommon.chart
        .request({
          module: 'PRODUCT',
          department: userParams.department,
          startDate: userParams.startDate,
          endDate: userParams.endDate,
          viewBy: userParams.viewBy,
          articleNumbers: userParams.articleNumbers,
          categories: userParams.categories,
          compareSamePeriod: userParams.compareSamePeriod,
          storeIds: userParams.storeIds,
        })
        .then((response) => {
          setChartLoading(false);
          if (response.data) {
            setChartData(response.data);
          }
        });
    }
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
      title: '产品名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Article Number',
      dataIndex: 'articleNumber',
      key: 'articleNumber',
    },
    {
      title: '产品类别',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: '产品描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '门店',
      dataIndex: 'storeName',
      key: 'storeName',
    },
    {
      title: '所属区域',
      dataIndex: 'storeGroup',
      key: 'storeGroup',
    },
    {
      title: '部门',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: '12周平均销量',
      dataIndex: 'averageVolumeFor12Week',
      key: 'averageVolumeFor12Week',
    },
    {
      title: '12周平均销售额',
      dataIndex: 'averageAmountFor12Week',
      key: 'averageAmountFor12Week',
    },
    {
      title: '4周平均销量',
      dataIndex: 'averageVolumeFor4Week',
      key: 'averageVolumeFor4Week',
    },
    {
      title: '4周平均销售额',
      dataIndex: 'averageAmountFor12Week',
      key: 'averageAmountFor12Week',
    },
    {
      title: '上周平均销量',
      dataIndex: 'averageVolumeForLastWeek',
      key: 'averageVolumeForLastWeek',
    },
    {
      title: '上周周平均销售额',
      dataIndex: 'averageAmountForLastWeek',
      key: 'averageAmountForLastWeek',
    },
  ];
  const volumeConfig = {
    data: chartData,
    xField: 'salesDate',
    yField: 'volume',
    seriesField: 'articleName',
    xAxis: {
      type: 'time',
    },
  };
  const amountConfig = {
    data: chartData,
    xField: 'salesDate',
    yField: 'amount',
    seriesField: 'articleName',
    xAxis: {
      type: 'time',
    },
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
            查询
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
            重置
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
              <Radio.Button value="month">月</Radio.Button>
              <Radio.Button value="week">周</Radio.Button>
              <Radio.Button value="day">日</Radio.Button>
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
              对比去年周期
            </Checkbox>
            <Checkbox>记住我的选择</Checkbox>
          </div>
        </div>
      </ContentPanel>
      <ContentPanel>
        <div className={styles.tableHeader}>
          <div>销量趋势图</div>
          <Button
            disabled={chartData.length === 0}
            onClick={() => {
              volumnChart.current.downloadImage();
            }}
          >
            导出
          </Button>
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
          <div>销售额趋势图</div>
          <Button
            disabled={chartData.length === 0}
            onClick={() => {
              amountChart.current.downloadImage();
            }}
          >
            导出
          </Button>
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
          <div>销量&销售额数据表 </div>
          <Button
            disabled={!currentReportId.current}
            onClick={() => {
              exportReport();
            }}
          >
            导出
          </Button>
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
