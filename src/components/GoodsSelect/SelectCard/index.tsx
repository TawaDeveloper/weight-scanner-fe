import { useState } from 'react';
import { Tabs } from 'antd';
import { t } from 'i18next';
import styles from './index.less';
import SelectedTable from './SelectedTable';
import TableSelect from './TableSelect';

type IProps = {
  storeId?: string
  depId?: string
  onChang?: (
    products: defs.bakery.NewArticleItem[],
    fileIds?: number[],
  ) => void;
  onFileIdsChange?: (fileIds: number[]) => void;
  data?: defs.bakery.NewArticleItem[];
  disabled?: boolean;
};

const SelectCard = (props: IProps) => {
  const { onChang, data, disabled = false, storeId, depId } = props;
  const [tableV, setTableV] = useState<defs.bakery.NewArticleItem[]>(
    data || [],
  );
  const handleSelect = (values: defs.bakery.NewArticleItem[]) => {
    setTableV(values);
    if (onChang) {
      onChang(values);
    }
  };
  const handleTableRemove = (newValue: defs.bakery.NewArticleItem) => {
    const values = tableV.filter((i) => i.articleNumber !== newValue.articleNumber);
    setTableV(values);
    if (onChang) {
      onChang(values);
    }
  };

  const tabs = [
    {
      label: t<string>(`components.goodsSelect.title0002`),
      children: (
        <TableSelect onChang={handleSelect} data={tableV} storeId={storeId} depId={depId} disabled={disabled} />
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
