import { useState, useEffect, ReactNode } from 'react';
import { Space, InputNumber } from 'antd';
import { t } from 'i18next';

type ValueType = string | number | null;

type IProps = {
  onChange?: (value?: any) => void;
  separator?: ReactNode;
  rangePlaceholder: string[];
  value: { min?: number; max?: number };
};

const RangeInput = (props: IProps) => {
  const {
    onChange,
    separator = '-',
    rangePlaceholder = [],
    value = {},
    ...restprops
  } = props;
  const [min, setMin] = useState<ValueType>(null);
  const [max, setMax] = useState<ValueType>(null);

  const { min: minValue, max: maxValue } = value;

  const [
    prePlaceholder = t<string>('pages.common.min'),
    lastPlaceholder = t<string>('pages.common.max'),
  ] = rangePlaceholder;

  const handleMin = (value: ValueType) => {
    setMin(value);
  };

  const handleMax = (value: ValueType) => {
    setMax(value);
  };

  const preInputProps = {
    ...restprops,
    placeholder: prePlaceholder,
    onChange: handleMin,
    style: { width: '100%' },
    value: minValue,
  };

  const lastInputProps = {
    ...restprops,
    placeholder: lastPlaceholder,
    onChange: handleMax,
    style: { width: '100%' },
    value: maxValue,
  };

  useEffect(() => {
    if (onChange) {
      const range = { min, max };
      if (min === null && max === null) {
        onChange();
      }
      onChange(range);
    }
  }, [min, max]);

  return (
    <Space style={{ width: '100%' }}>
      <InputNumber {...preInputProps} />

      <div style={{ padding: '0 10px' }}>{separator}</div>

      <InputNumber {...lastInputProps} />
    </Space>
  );
};

export default RangeInput;
