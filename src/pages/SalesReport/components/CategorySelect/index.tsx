import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { unionBy } from 'lodash-es';
import { t } from 'i18next';
import type { SelectProps } from 'antd';
import styles from './index.less';
import { bakeryAPI } from '@/services';
import { categoriesParam } from '@/services/bakery/mods/statisticalCommon/categories';

interface IProps {
  value: string[];
  onChange: (value: string[]) => void;
  department?: string | null;
}
const CategorySelect = ({ onChange, value, department }: IProps) => {
  const [options, setOptions] = useState<SelectProps['options']>([]);
  useEffect(() => {
    const loadAllCategorys = async () => {
      const params: categoriesParam = {
        keyword: '',
      };
      if (department) {
        params.department = department;
      }
      const response = await bakeryAPI.statisticalCommon.categories.request(
        params,
      );
      const newOptions = unionBy(response.data, 'id').map((item) => {
        return {
          value: item.id,
          label: `${item.description}`,
        };
      });
      setOptions(newOptions);
    };
    loadAllCategorys();
  }, [department]);
  return (
    <div className={styles.root}>
      <div className={styles.label}>{t<string>('pages.report.Category')}</div>
      <Select
        mode="multiple"
        allowClear
        style={{ width: '268px' }}
        value={value}
        placeholder={t<string>('pages.report.PleaseChoose')}
        onChange={(value: string[]) => {
          onChange(value);
        }}
        options={options}
      />
    </div>
  );
};

export default CategorySelect;
