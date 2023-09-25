import { Checkbox, SelectProps } from 'antd';
import MarioSelect from '@tawa/mario-select';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useEffect, useState } from 'react';
import { t } from 'i18next';

interface SelectAllNotProps
  extends Omit<SelectProps, 'onChange' | 'dropdownRender'> {
  onChange: (value: any[], option?: any[]) => void;
  value: any[];
  labelKey: string;
  valueKey: string;
}

const SelectAllNot = (props: SelectAllNotProps) => {
  const { onChange, options = [], ...Others } = props;
  const { value, valueKey = 'value' } = Others;

  const [keys, setKeys] = useState<any[]>([]);

  useEffect(() => {
    const newKeys = options?.map((v) => v[valueKey]) || [];
    setKeys(newKeys);
  }, [options, valueKey]);

  const handleChange = (keys: any[]) => {
    onChange(keys);
  };

  const handleCheckbox = (event: CheckboxChangeEvent) => {
    if (event.target.checked) {
      onChange(keys);
    } else {
      const newV: any[] = [];
      keys.forEach((v) => {
        if (Array.isArray(value) && !value.includes(v)) {
          newV.push(v);
        }
      });
      onChange(newV);
    }
  };

  const dropdownRender = (menu: any) => {
    return (
      <>
        <Checkbox onChange={handleCheckbox} style={{ padding: '5px 12px' }}>
          {t<string>(`components.selectAllOrNot`)}
        </Checkbox>
        {menu}
      </>
    );
  };

  return (
    <MarioSelect
      mode="multiple"
      onChange={handleChange}
      dropdownRender={dropdownRender}
      options={options}
      {...Others}
    />
  );
};
export default SelectAllNot;
