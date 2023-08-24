import { Table, Row, Col, Input, Button, Image } from 'antd';
import React, { useState, useEffect } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { useRequest } from 'ahooks';
import { t } from 'i18next';
import styles from './index.less';
import { productAPI } from '@/services';

const columns: ColumnsType<defs.product.BackendProduct> = [
  {
    title: t<string>(`components.goodsSelect.title0005`),
    dataIndex: 'productNameEN',
    key: 'productNameEN',
    align: 'center',
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
];

type IProps = {
  onChang?: (values: defs.product.BackendProduct[]) => void;
  data?: defs.product.BackendProduct[];
  disabled?: boolean;
};
const TableSelect = (props: IProps) => {
  const { data, onChang, disabled = false } = props;
  const [search, setSearch] = useState({
    keywords: '',
    pageNum: 1,
    pageSize: 10,
  });
  const {
    loading,
    data: tableRes,
    run,
  } = useRequest(productAPI.boProduct.pageProduct.request, { manual: true });
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [rows, setRows] = useState<defs.product.BackendProduct[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, keywords: e.target.value });
  };

  const handlePagination = (pageNum = 1, pageSize = 10) => {
    const v = { ...search, pageNum, pageSize };
    setSearch(v);
    run(v);
  };

  const handleRowChange = (_: any, s_rows: defs.product.BackendProduct[]) => {
    const list: defs.product.BackendProduct[] = [];
    if (tableRes?.data) {
      rows.forEach((i) => {
        if (!tableRes?.data?.list?.find((n) => n.productId === i.productId)) {
          list.push(i);
        }
      });
    }
    list.push(...s_rows);
    if (onChang) {
      onChang(list);
    }
  };

  const rowSelection = {
    disabled,
    selectedRowKeys,
    onChange: handleRowChange,
  };

  useEffect(() => {
    if (data) {
      const list: number[] = [];
      data?.forEach((i) => i.productId && list.push(i.productId));
      setRows(data);
      setSelectedRowKeys(list);
    }
  }, [data]);

  return (
    <div className={styles.selectTableCard}>
      <Row gutter={2} style={{ paddingBottom: '10px' }}>
        <Col span={16}>
          <Input
            disabled={loading}
            placeholder={t<string>(`components.goodsSelect.title0004`)}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </Col>
        <Col span={4}>
          <Button loading={loading} onClick={() => handlePagination()}>
            {t<string>('button.common.search')}
          </Button>
        </Col>
      </Row>
      <Table
        rowKey="productId"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={tableRes?.data?.list || []}
        scroll={{ y: '266px' }}
        size="small"
        pagination={{
          current: tableRes?.data?.pageNum,
          total: tableRes?.data?.total,
          onChange: handlePagination,
          pageSizeOptions: [10, 20, 30, 50],
        }}
      />
    </div>
  );
};

export default TableSelect;
