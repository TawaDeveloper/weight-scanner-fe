import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { uniq } from 'lodash-es';
import type { SelectProps } from 'antd';
import Icon from 'src/assets/report-department.png';
import styles from './index.less';
import { bakeryAPI } from '@/services';

interface IProps {
  onChange: (value: string) => void;
  value: string | null;
}
const DepartmentSelect = ({ onChange, value }: IProps) => {
  const [options, setOptions] = useState<SelectProps['options']>([]);
  useEffect(() => {
    const loadAllStores = async () => {
      const response = await bakeryAPI.statisticalCommon.departments.request();
      const newOptions: any = uniq(response.data as any).map((item) => {
        return {
          value: item,
          label: item,
        };
      });
      setOptions(newOptions);
    };
    loadAllStores();
  }, []);
  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <img src={Icon} alt="" />
      </div>
      <div className={styles.label}>已选部门</div>
      <Select
        allowClear
        style={{ width: '272px' }}
        placeholder="Please select"
        options={options}
        value={value}
        onChange={(value: string) => {
          onChange(value);
        }}
      />
    </div>
  );
};

export default DepartmentSelect;
