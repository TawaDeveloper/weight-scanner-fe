import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { t } from 'i18next';
import styles from '../index.less';

type IProps = {
  data?: defs.store.StoreDetail[];
  handleRemove: (item: defs.store.StoreDetail) => void;
  disabled?: boolean;
};
const SelectTable = (props: IProps) => {
  const { data = [], handleRemove, disabled } = props;
  const columns: ColumnsType<defs.store.StoreDetail> = [
    {
      title: t<string>(`components.storeSelect.title0005`),
      dataIndex: 'storeName',
      key: 'storeName',
      align: 'center',
    },
    {
      title: t<string>(`components.storeSelect.title0006`),
      dataIndex: 'storeNumber',
      key: 'storeNumber',
      align: 'center',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) =>
        !disabled && (
          <Button type="link" onClick={() => handleRemove(record)}>
            {t<string>(`components.storeSelect.title0008`)}
          </Button>
        ),
      align: 'center',
    },
  ];

  return (
    <div className={styles.selectTableCard}>
      <h3>{t<string>(`components.storeSelect.title0004`)}</h3>
      <Table
        rowKey="storeNumber"
        columns={columns}
        dataSource={data}
        scroll={{ y: '290px' }}
        size="small"
        pagination={{
          showSizeChanger: true,
          total: data.length,
          pageSizeOptions: [10, 20, 30, 50],
          showTotal: (total) => `Total ${total} items`,
        }}
      />
    </div>
  );
};

export default SelectTable;
