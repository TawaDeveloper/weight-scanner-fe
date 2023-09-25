import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import styles from './index.less';

export type SelectItemData = {
  label: React.ReactNode;
  nodeId: string;
  indeterminate?: boolean;
  checked?: boolean;
};

export type TreeSelectItemProps = {
  data: SelectItemData;
  disabled?: boolean;
  picked?: boolean;
  onChang?: (e: CheckboxChangeEvent, data?: any) => void;
  onLabelClick?: (data?: any) => void;
};
const TreeSelectItem = (props: TreeSelectItemProps) => {
  const { data, disabled, picked = false, onChang, onLabelClick } = props;
  const { label, ...others } = data;
  const bgColor =
    picked || others.checked || others.indeterminate ? '#bae0ff' : '';
  return (
    <div
      className={styles.checkboxItem}
      style={{
        backgroundColor: bgColor,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      <Checkbox
        onChange={onChang}
        {...others}
        disabled={disabled}
        key={`${data.nodeId}checkbox`}
      />
      <div
        className={styles.checkboxItemLabel}
        onClick={onLabelClick}
        key={`${data.nodeId}label`}
      >
        <div className={styles.checkboxItemLabelSpan}>{data.label}</div>
      </div>
    </div>
  );
};

export default TreeSelectItem;
