import { Modal, Tag, Button, Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import { t } from 'i18next';
import SelectCard from './SelectCard';
import styles from './index.less';

type ChangeValues = defs.store.StoreDetail[] | (number | undefined)[];
type StoreSelectProps = {
  placeholder?: string;
  /**
   * @default input
   */
  type?: 'input' | 'button';
  valuesType?: 'all' | 'code';
  value?: defs.store.StoreDetail[];
  buttonTitle?: string;
  disabled?: boolean;
  onChange?: (values?: ChangeValues) => void;
  tagsMaxLen?: number;
  defaultValue?: defs.promotion.Store[];
  isShowNum?: boolean;
};
const StoreSelect = (props: StoreSelectProps) => {
  const {
    onChange,
    placeholder,
    type = 'input',
    valuesType = 'all',
    value = [],
    disabled = false,
    buttonTitle,
    tagsMaxLen = 10,
    defaultValue = [],
    isShowNum = false,
  } = props;
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<defs.store.StoreDetail[]>(value);
  const [data1, setData1] = useState<defs.store.StoreDetail[]>(value);
  const handleOk = () => {
    if (onChange) {
      if (valuesType === 'all') {
        onChange(data);
      }
      if (valuesType === 'code') {
        onChange(data.map((i) => i.storeNumber));
      }
      setData1(data);
    }
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const showTags = data1.slice(0, tagsMaxLen);
  const isMax = data1.length ? data1.length > tagsMaxLen : false;

  useEffect(() => {
    if (data && data.length > 0) return;
    setData(defaultValue);
  }, [defaultValue]);

  return (
    <div className={`ant-select ${styles.storeSelectCard}`}>
      {type === 'input' && (
        <div
          onClick={handleOpen}
          className={`ant-select-selector ${styles.storeSelectDiv}`}
        >
          {showTags?.length ? (
            <div className={styles.storeTags}>
              {showTags?.map((item) => (
                <Tag key={item.storeNumber}>{item.storeName}</Tag>
              ))}
              {isMax && <Tag>...</Tag>}
            </div>
          ) : (
            <div
              className={`ant-select-selection-placeholder ${styles.storePlaceholder}`}
            >
              {placeholder || t<string>(`pages.rules.select`)}
            </div>
          )}
        </div>
      )}
      {type === 'button' && (
        <>
          <Button onClick={handleOpen}>
            {buttonTitle ?? t<string>(`pages.rules.select`)}
          </Button>
          {isShowNum && (
            <span style={{ marginLeft: '15px', color: '#999' }}>
              {t<string>(`components.storeSelect.selected_stores`, {
                num: data.length ?? 0,
              })}
            </span>
          )}
        </>
      )}
      {open && (
        <Modal
          open={open}
          title={t<string>(`components.storeSelect.title0001`)}
          onCancel={handleCancel}
          closable={false}
          footer={null}
          width="900px"
        >
          <SelectCard onChang={setData} data={data} disabled={disabled} />
          <Row justify="end" style={{ padding: '10px' }}>
            <Col>
              <Button type="primary" onClick={handleOk}>
                {t<string>(`button.common.ok`)}
              </Button>
            </Col>
          </Row>
        </Modal>
      )}
    </div>
  );
};

export default StoreSelect;
