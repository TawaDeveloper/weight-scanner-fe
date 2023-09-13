import { DatePicker } from 'antd';
import Icon from 'src/assets/report-calendar.png';
import styles from './index.less';
import { datePickerToTimestamp } from '@/utils';

const { RangePicker } = DatePicker;
interface IProps {
  onChange: (values: number[]) => void;
}
const DateSelect = ({ onChange }: IProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <img src={Icon} alt="" />
      </div>
      <div className={styles.label}>已选日期</div>
      <RangePicker
        onChange={(dates: any) => {
          onChange(dates.map((item: any) => datePickerToTimestamp(item)));
        }}
      />
    </div>
  );
};

export default DateSelect;
