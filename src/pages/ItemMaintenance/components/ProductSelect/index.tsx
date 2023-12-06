import { Select, Spin } from 'antd';
import { useEffect, useMemo, useRef, useState } from 'react';
import { t } from 'i18next';
import { debounce } from 'lodash-es';
import type { SelectProps } from 'antd';
import styles from './index.less';
import { bakeryAPI } from '@/services';
import { articlesParam } from '@/services/bakery/mods/statisticalCommon/articles';

interface IProps {
  value: string[];
  onChange: (value: string[]) => void;
  department?: string | null;
}
const ProductSelect = ({ onChange, value, department }: IProps) => {
  const [options, setOptions] = useState<SelectProps['options']>([]);
  const [fetching, setFetching] = useState(false);
  const fetchRef = useRef(0);
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      const params: articlesParam = {
        page: 1,
        size: 500,
        keyword: value,
      };
      if (department) {
        params.department = department;
      }
      bakeryAPI.statisticalCommon.articles.request(params).then((response) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }
        if (response.data && response.data.records) {
          setOptions(
            response.data.records.map((item) => {
              return {
                label: `${item.articleNumber} - ${item.description}`,
                value: item.articleNumber,
              };
            }),
          );
        }
        setFetching(false);
      });
    };

    return debounce(loadOptions, 1000);
  }, [department]);

  useEffect(() => {
    const params: articlesParam = {
      page: 1,
      size: 1000,
    };
    if (department) {
      params.department = department;
    }
    bakeryAPI.statisticalCommon.articles.request(params).then((response) => {
      if (response.data && response.data.records) {
        setOptions(
          response.data.records.map((item) => {
            return {
              label: `${item.articleNumber} - ${item.description}`,
              value: item.articleNumber,
            };
          }),
        );
      }
    });
  }, [department]);
  return (
    <div className={styles.root}>
      <div className={styles.label}>{t<string>('pages.report.Product')}</div>
      <Select
        mode="multiple"
        allowClear
        filterOption={false}
        onSearch={debounceFetcher}
        value={value}
        notFoundContent={fetching ? <Spin size="small" /> : null}
        style={{ width: '268px' }}
        placeholder={t<string>('pages.report.PleaseChoose')}
        options={options}
        onChange={(value: string[]) => {
          onChange(value);
        }}
        dropdownMatchSelectWidth={400}
      />
    </div>
  );
};

export default ProductSelect;
