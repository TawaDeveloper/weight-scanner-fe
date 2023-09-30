import { Table, Row, Col, Input, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { useRequest } from 'ahooks';
import { t } from 'i18next';
import styles from './index.less';
import { bakeryAPI } from '@/services';

const columns: ColumnsType<defs.bakery.NewArticleItem> = [
  {
    title: t<string>(`pages.orderList.title0097`),
    dataIndex: 'descriptionEn',
    key: 'descriptionEn',
    align: 'center',
  },
  {
    title: t<string>(`pages.orderList.title0096`),
    dataIndex: 'descriptionTc',
    key: 'descriptionTc',
    align: 'center',
  },
  {
    title: t<string>(`pages.orderList.title0095`),
    dataIndex: 'articleNumber',
    key: 'articleNumber',
    align: 'center',
  },
];

type IProps = {
  depId?: string;
  storeId?: string;
  onChang?: (values: defs.bakery.NewArticleItem[]) => void;
  data?: defs.bakery.NewArticleItem[];
  disabled?: boolean;
};
const TableSelect = (props: IProps) => {
  const { data, onChang, disabled = false, storeId, depId } = props;
  const [search, setSearch] = useState({
    articleName: '',
    pageNum: 1,
    pageSize: 10,
    storeId: storeId || '',
    depId: depId || '',
  });
  const {
    loading,
    data: tableRes,
    run,
  } = useRequest(bakeryAPI.order.getNewArticles.request, {
    manual: true,
  });
  useEffect(() => {
    if (storeId && depId) {
      run(search)
    }
  }, [depId, storeId])
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [rows, setRows] = useState<defs.bakery.NewArticleItem[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, articleName: e.target.value });
  };

  const handlePagination = (pageNum = 1, pageSize = 10) => {
    const v = { ...search, pageNum, pageSize };
    setSearch(v);
    run(v);
  };

  const handleRowChange = (_: any, s_rows: defs.bakery.NewArticleItem[]) => {
    const list: defs.bakery.NewArticleItem[] = [];
    if (tableRes?.data) {
      rows.forEach((i) => {
        if (!tableRes?.data?.records?.find((n) => n.articleNumber === i.articleNumber)) {
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
      const list: string[] = [];
      data?.forEach((i) => i.articleNumber && list.push(i.articleNumber));
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
            onKeyDown={event => {
              if (event.code === 'Enter') {
                handlePagination()
              }
            }}
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
        rowKey="articleNumber"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={tableRes?.data?.records || []}
        scroll={{ y: '266px' }}
        size="small"
        pagination={{
          current: tableRes?.data?.current,
          total: tableRes?.data?.total,
          onChange: handlePagination,
          pageSizeOptions: [10, 20, 30, 50],
        }}
      />
    </div>
  );
};

export default TableSelect;
