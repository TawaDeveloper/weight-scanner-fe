import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { unionBy } from 'lodash-es';
import type { SelectProps } from 'antd';
import styles from './index.less';
import { bakeryAPI } from '@/services';

interface IProps {
  onChange: (value: string[]) => void;
}
const StoreSelect = ({ onChange }: IProps) => {
  const [options, setOptions] = useState<SelectProps['options']>([]);
  useEffect(() => {
    const loadAllStores = async () => {
      const response = await bakeryAPI.statisticalCommon.stores.request({
        keyword: '',
      });
      const newOptions = unionBy(response.data, 'storeId').map((item) => {
        return {
          value: item.storeId,
          label: `${item.storeName}`,
        };
      });
      setOptions(newOptions);
    };
    loadAllStores();
  }, []);
  return (
    <div className={styles.root}>
      <div className={styles.label}>门店</div>
      <Select
        mode="multiple"
        allowClear
        style={{ width: '268px' }}
        placeholder="请选择"
        onChange={(value: string[]) => {
          onChange(value);
        }}
        options={options}
      />
    </div>
  );
};

export default StoreSelect;
