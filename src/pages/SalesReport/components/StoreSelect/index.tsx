import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { unionBy } from 'lodash-es';
import { t } from 'i18next';
import type { SelectProps } from 'antd';
import styles from './index.less';
import { bakeryAPI } from '@/services';

interface IProps {
  value: string[];
  onChange: (value: string[]) => void;
}
const StoreSelect = ({ onChange, value }: IProps) => {
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
      <div className={styles.label}>{t<string>('pages.report.Store')}</div>
      <Select
        mode="multiple"
        allowClear
        style={{ width: '268px' }}
        placeholder={t<string>('pages.report.PleaseChoose')}
        value={value}
        onChange={(value: string[]) => {
          onChange(value);
        }}
        options={options}
      />
    </div>
  );
};

export default StoreSelect;
