import { useState, useEffect } from 'react';
import SelectTable from './SelectTable';
import SelectContent from './SelectContent';
import styles from '../index.less';

type IProps = {
  onChang?: (values: defs.store.StoreDetail[]) => void;
  data?: defs.store.StoreDetail[];
  disabled?: boolean;
};
const SelectCard = (props: IProps) => {
  const { onChang, data = [], disabled } = props;
  const [keys, setKeys] = useState<any[]>(data.map((i) => i.storeNumber));
  const [selected, setSelected] = useState<defs.store.StoreDetail[]>(data);

  const handleSelect = (newValue: defs.store.StoreDetail[]) => {
    setKeys(newValue.map((i) => i.storeNumber));
    setSelected(newValue);
  };

  const handleTableRemove = (newValue: defs.store.StoreDetail) => {
    const list = selected.filter((i) => i.storeNumber !== newValue.storeNumber);
    setKeys(list.map((i) => i.storeNumber));
    setSelected(list);
  };

  useEffect(() => {
    if (onChang) {
      onChang(selected);
    }
  }, [selected]);

  return (
    <div className={styles.selectCard}>
      <div className={styles.selectCardItem}>
        <SelectContent onChang={handleSelect} data={keys} disabled={disabled} />
      </div>
      <div className={styles.selectCardItem}>
        <SelectTable
          handleRemove={handleTableRemove}
          data={selected}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
export default SelectCard;
