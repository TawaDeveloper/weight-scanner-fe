import { Button, Table, Image } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { t } from 'i18next';
import styles from './index.less';

type IProps = {
  data?: defs.product.BackendProduct[];
  handleRemove: (item: defs.product.BackendProduct) => void;
  disabled?: boolean;
};
const SelectedTable = (props: IProps) => {
  const { data = [], handleRemove, disabled } = props;

  const columns: ColumnsType<defs.product.BackendProduct> = [
    {
      title: t<string>(`components.goodsSelect.title0005`),
      dataIndex: 'productNameEN',
      key: 'productNameEN',
      align: 'center',
      fixed: 'left',
    },
    {
      title: t<string>(`components.goodsSelect.title0006`),
      dataIndex: 'productId',
      key: 'productId',
      align: 'center',
    },
    {
      title: t<string>(`components.goodsSelect.title0007`),
      dataIndex: 'upc',
      key: 'upc',
      align: 'center',
    },
    {
      title: t<string>(`components.goodsSelect.title0009`),
      dataIndex: 'image',
      key: 'image',
      render: (url) => <Image width="50px" src={url} />,
      align: 'center',
    },
    {
      title: t<string>(`components.goodsSelect.title0008`),
      dataIndex: 'category',
      key: 'category',
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
        rowKey="productId"
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
