import { Select, Spin } from 'antd';
import { useMemo, useRef, useState } from 'react';
import { t } from 'i18next';
import { debounce } from 'lodash-es';
import type { SelectProps } from 'antd';
import styles from './index.less';
import { bakeryAPI } from '@/services';

interface IProps {
  value: string[];
  onChange: (value: string[]) => void;
}
const ProductSelect = ({ onChange, value }: IProps) => {
  const [options, setOptions] = useState<SelectProps['options']>([]);
  const [fetching, setFetching] = useState(false);
  const fetchRef = useRef(0);
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      bakeryAPI.statisticalCommon.articles
        .request({
          page: 1,
          size: 200,
          keyword: value,
        })
        .then((response) => {
          if (fetchId !== fetchRef.current) {
            // for fetch callback order
            return;
          }
          if (response.data && response.data.records) {
            setOptions(
              response.data.records.map((item) => {
                return {
                  label: item.description,
                  value: item.articleNumber,
                };
              }),
            );
          }
          setFetching(false);
        });
    };

    return debounce(loadOptions, 1000);
  }, []);
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
      />
    </div>
  );
};

export default ProductSelect;
