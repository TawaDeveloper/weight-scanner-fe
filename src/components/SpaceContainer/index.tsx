import { Space, SpaceProps } from 'antd';
import React from 'react';

interface Control {
  value?: any;
  onChange?: (value: any) => void;
}

interface IProps extends Omit<SpaceProps, 'onChange'>, Control {
  controlItem: React.FunctionComponent<Control> | React.ComponentClass<Control>;
  items?: React.ReactNode[];
  controlIndex?: number;
}

const SpaceContainer = (props: IProps) => {
  const {
    controlItem,
    items = [],
    value,
    onChange,
    controlIndex = 0,
    ...otherProps
  } = props;

  const newControl = React.createElement(controlItem, {
    key: 'controlItem',
    value,
    onChange,
  });
  const newItems = [...items];
  newItems.splice(controlIndex, 0, newControl);
  return <Space {...otherProps}>{newItems}</Space>;
};
export default SpaceContainer;
