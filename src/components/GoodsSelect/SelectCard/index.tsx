import { useState } from 'react';
import { Tabs } from 'antd';
import { t } from 'i18next';
import styles from './index.less';
import SelectedTable from './SelectedTable';
import TableSelect from './TableSelect';

type IProps = {
  onChang?: (
    products: defs.product.BackendProduct[],
    fileIds?: number[],
  ) => void;
  onFileIdsChange?: (fileIds: number[]) => void;
  data?: defs.product.BackendProduct[];
  disabled?: boolean;
};

const SelectCard = (props: IProps) => {
  const { onChang, data, disabled = false } = props;
  const [tableV, setTableV] = useState<defs.product.BackendProduct[]>(
    data || [],
  );
  const handleSelect = (values: defs.product.BackendProduct[]) => {
    setTableV(values);
    if (onChang) {
      onChang(values);
    }
  };
  const handleTableRemove = (newValue: defs.product.BackendProduct) => {
    const values = tableV.filter((i) => i.productId !== newValue.productId);
    setTableV(values);
    if (onChang) {
      onChang(values);
    }
  };

  const tabs = [
    {
      label: t<string>(`components.goodsSelect.title0002`),
      children: (
        <TableSelect onChang={handleSelect} data={tableV} disabled={disabled} />
      ),
      key: 'TableSelect',
    },
  ];
  return (
    <div className={styles.selectCard}>
      <div className={styles.selectCardItem}>
        <Tabs defaultActiveKey="TableSelect" items={tabs} />
      </div>
      <div className={styles.selectCardItem}>
        <SelectedTable
          handleRemove={handleTableRemove}
          data={tableV}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
export default SelectCard;
