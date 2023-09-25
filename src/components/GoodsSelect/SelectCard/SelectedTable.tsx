import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { t } from 'i18next';
import styles from './index.less';

type IProps = {
  data?: defs.bakery.NewArticleItem[];
  handleRemove: (item: defs.bakery.NewArticleItem) => void;
  disabled?: boolean;
};
const SelectedTable = (props: IProps) => {
  const { data = [], handleRemove, disabled } = props;

  const columns: ColumnsType<defs.bakery.NewArticleItem> = [
    {
      title: t<string>(`components.goodsSelect.title0005`),
      dataIndex: 'descriptionEn',
      key: 'descriptionEn',
      align: 'center',
      fixed: 'left',
    },
    {
      title: t<string>(`pages.orderList.title0095`),
      dataIndex: 'articleNumber',
      key: 'articleNumber',
      align: 'center',
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      render: (_, record) =>
        disabled ? (
          ''
        ) : (
          <Button type="link" onClick={() => handleRemove(record)}>
            {t<string>(`components.goodsSelect.title0012`)}
          </Button>
        ),
      align: 'center',
    },
  ];

  return (
    <div className={styles.selectedTableCard}>
      <h3>{t<string>(`components.goodsSelect.title0010`)}</h3>
      <Table
        rowKey="articleNumber"
        columns={columns}
        dataSource={data}
        scroll={{ y: '335px', x: '600px' }}
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

export default SelectedTable;
