import { Input, InputProps, Checkbox, CheckboxProps, Row, Col } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import React, { useEffect, useState } from 'react';

interface PointLinkValue {
  input?: string;
  checked?: boolean;
}

interface PriceInputProps extends Omit<InputProps, 'value' | 'onChange'> {
  value?: PointLinkValue;
  onChange?: (value?: PointLinkValue) => void;
  checkboxProps: CheckboxProps;
}

const PointLink: React.FC<PriceInputProps> = (props: PriceInputProps) => {
  const { value, onChange, checkboxProps, ...inputProps } = props;
  const [checked, setChecked] = useState<boolean>(value?.checked || false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (input) {
      onChange?.({ ...value, checked, input });
    } else {
      onChange?.(undefined);
    }
  };

  const onCheckChange = (event: CheckboxChangeEvent) => {
    const { checked } = event.target;
    setChecked(checked);
  };

  useEffect(() => {
    if (value?.input) {
      onChange?.({ ...value, checked });
    }
  }, [checked]);

  return (
    <Row>
      <Col span={14}>
        <Input
          {...inputProps}
          value={value?.input}
          onChange={onInputChange}
          style={{ width: '100%' }}
        />
      </Col>
      <Col span={8} push={1}>
        <Checkbox
          {...checkboxProps}
          checked={checked}
          onChange={onCheckChange}
        />
      </Col>
    </Row>
  );
};

export default PointLink;
