import { Card } from 'antd';
import { useEffect } from 'react';
import { bakeryAPI } from '@/services';

const ReportByProduct = () => {
  useEffect(() => {
    const loadAllStores = async () => {
      const response = await bakeryAPI.statisticsCommon.stores.request({
        keyword: '',
      });
      console.log(response.data);
    };
    loadAllStores();
  }, []);
  return <Card>XX</Card>;
};

export default ReportByProduct;
