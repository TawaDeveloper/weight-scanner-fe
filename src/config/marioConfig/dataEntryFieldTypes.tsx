// Data Entry FieldTypes

import { Radio, DatePicker, Checkbox, Input, Select, InputNumber } from 'antd';
import type { RangePickerProps } from 'antd/lib/date-picker';

import SpaceContainer from '@/components/SpaceContainer';
import SelectAllOrNot from '@/components/SelectAllOrNot';
import RichText from '@/components/RichText';
import PointLink from '@/components/PointLink';
import RangeInput from '@/components/RangeInput';
import StoreSelect from '@/components/StoreSelect';
import ImageUpload from '@/components/ImageUpload';
import ClassifySelect from '@/components/ClassifySelect';

const { RangePicker } = DatePicker;

const renderRangePicker = (props: RangePickerProps) => {
  return <RangePicker style={{ width: '100%' }} allowClear {...props} />;
};

function renderText({ value = '' }: { value: string }): React.ReactNode {
  return <span>{value}</span>;
}

export default {
  text: renderText,
  'radio-group': Radio.Group,
  'date-range-picker': renderRangePicker,
  'date-picker': DatePicker,
  'space-container': SpaceContainer,
  'checkbox-group': Checkbox.Group,
  'select-all-not': SelectAllOrNot,
  'antd-select': Select,
  'rich-text': RichText,
  'point-link': PointLink,
  'text-area': Input.TextArea,
  'range-input': RangeInput,
  'number-input': InputNumber,
  'store-select': StoreSelect,
  'image-upload': ImageUpload,
  'classify-select': ClassifySelect,
};
