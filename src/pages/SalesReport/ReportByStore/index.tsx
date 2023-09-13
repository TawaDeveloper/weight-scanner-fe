import { useRef, useState } from 'react';
import { Button, Checkbox, Radio, Table } from 'antd';
import { Line } from '@ant-design/plots';
import ContentPanel from '@/components/ContentPanel';
import DateSelect from '../components/DateSelect';
import DepartmentSelect from '../components/DepartmentSelect';
import styles from './index.less';
import ProductSelect from '../components/ProductSelect';
import StoreSelect from '../components/StoreSelect';
import { bakeryAPI } from '@/services';

const ReportByStore = () => {
  const selectedDate = useRef<number[] | null>(null);
  const selectedStoreIds = useRef<string[] | null>(null);
  const selectedDepartment = useRef<string | null>(null);
  const selectedProducts = useRef<string[] | null>(null);
  const selectedViewBy = useRef<string>('day');
  const [reportData, setReportData] = useState<any>([]);
  const [chartData, setChartData] = useState<any>([]);
  const onSearch = async () => {
    if (selectedDepartment.current) {
      const response = await bakeryAPI.statisticalSalesStore.report.request({
        department: selectedDepartment.current,
      });
      setReportData(response.data?.contents);
    }
    if (
      selectedDepartment.current &&
      selectedDate.current &&
      selectedViewBy.current
    ) {
      const response = await bakeryAPI.statisticalCommon.chart.request({
        module: 'STORE',
        department: selectedDepartment.current,
        startDate: selectedDate.current[0],
        endDate: selectedDate.current[1],
        viewBy: selectedViewBy.current,
      });
      if (response.data) {
        setChartData(response.data);
      }
    }
  };

  //   {
  //     "department": "HOT_DELI",
  //     "storeId": "0000001003",
  //     "storeName": "Tawa Supermarket, Inc. - #1003",
  //     "storeGroup": "SCA2",
  //     "averageVolumeForLastWeek": 0.29,
  //     "averageAmountForLastWeek": 0.23,
  //     "averageVolumeFor4Week": 0.62,
  //     "averageAmountFor4Week": 1.74,
  //     "averageVolumeFor12Week": 0.53,
  //     "averageAmountFor12Week": 2.13
  // }
  const columns = [
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
    seriesField: 'storeId',
    xAxis: {
      type: 'time',
    },
  };
  const amountConfig = {
    data: chartData,
    xField: 'salesDate',
    yField: 'amount',
    seriesField: 'storeId',
    xAxis: {
      type: 'time',
    },
  };
  return (
    <>
      <ContentPanel>
        <div className={styles.selectGroup1}>
          <DateSelect
            onChange={(values) => {
              selectedDate.current = values;
            }}
          />
          <DepartmentSelect
            onChange={(value) => {
              selectedDepartment.current = value;
            }}
          />
        </div>
      </ContentPanel>
      <ContentPanel>
        <div className={styles.selectGroup2}>
          <div className={styles.productSelect}>
            <ProductSelect
              onChange={(value: any) => {
                selectedProducts.current = value;
              }}
            />
          </div>
          <div className={styles.storeSelect}>
            <StoreSelect
              onChange={(value) => {
                selectedStoreIds.current = value;
              }}
            />
          </div>
          <Button
            type="primary"
            style={{ marginRight: '20px' }}
            onClick={() => {
              onSearch();
            }}
          >
            查询
          </Button>
          <Button>重置</Button>
        </div>
        <div className={styles.selectGroup3}>
          <div className={styles.selectGroup4}>
            <Radio.Group
              style={{ marginRight: '15px' }}
              onChange={(event) => {
                selectedViewBy.current = event.target.value;
              }}
              defaultValue="day"
            >
              <Radio.Button value="year">年</Radio.Button>
              <Radio.Button value="month">月</Radio.Button>
              <Radio.Button value="day">日</Radio.Button>
            </Radio.Group>
            <Checkbox style={{ marginRight: '15px' }}>对比去年周期</Checkbox>
            <Checkbox>记住我的选择</Checkbox>
          </div>

          <Button>导出</Button>
        </div>
      </ContentPanel>
      <ContentPanel>
        <div className={styles.tableHeader}>销量趋势图</div>
        <Line {...volumeConfig} />
      </ContentPanel>
      <ContentPanel>
        <div className={styles.tableHeader}>销售额趋势图</div>
        <Line {...amountConfig} />
      </ContentPanel>
      <ContentPanel>
        <div className={styles.tableHeader}>销量&销售额数据表</div>
        <div className={styles.table}>
          <Table
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
