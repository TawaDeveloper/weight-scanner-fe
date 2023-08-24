import { Row, Col, Input, Button, Typography } from 'antd';
import React, { useState, useMemo } from 'react';
import { t } from 'i18next';
import { useRequest } from 'ahooks';
import styles from '../index.less';
import { storeAPI } from '@/services';
import TreeSelect from '@/components/TreeSelect';
import { insertRooNode } from './data';

type IProps = {
  onChang?: (values: defs.store.StoreDetail[]) => void;
  data?: any[];
  disabled?: boolean;
};
const TableSelect = (props: IProps) => {
  const { data, onChang, disabled = false } = props;
  const [search, setSearch] = useState('');
  const {
    loading,
    data: res,
    run,
  } = useRequest(storeAPI.boStore.storeAndGroupList.request, {
    manual: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    run({ condition: search, authFilter: false });
  };
  const handleTree = (
    _: any,
    selectNodes: (defs.store.StoreDetail & { leaf: boolean })[],
  ) => {
    if (onChang) {
      const list = selectNodes.filter((i) => i?.leaf);
      onChang(list);
    }
  };
  const treeV = useMemo(() => insertRooNode(res?.data), [res?.data]);
  return (
    <div className={styles.selectSearchCard}>
      <Row style={{ paddingBottom: '10px' }}>
        <Col span={5}>
          <Typography.Text>
            {t<string>(`components.storeSelect.title0002`)}
          </Typography.Text>
        </Col>
        <Col span={14}>
          <Input
            disabled={disabled}
            placeholder={t<string>(`components.storeSelect.title0003`)}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </Col>
        <Col span={4}>
          <Button loading={loading} disabled={disabled} onClick={handleClick}>
            {t<string>('button.common.search')}
          </Button>
        </Col>
      </Row>
      <div className={styles.selectTreeSelect}>
        <TreeSelect
          onChang={handleTree}
          disabled={disabled}
          loading={loading}
          treeData={treeV}
          fieldNames={{
            value: 'storeNumber',
            label: 'storeName',
            parentId: 'groupId',
          }}
          data={data}
          defaultOpen
        />
      </div>
    </div>
  );
};

export default TableSelect;
