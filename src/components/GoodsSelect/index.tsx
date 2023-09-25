import { Modal, Button, Tag, Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import { t } from 'i18next';
import SelectCard from './SelectCard';
import styles from './index.less';
import { CommonButton } from '../CommonButton';

export type GoodsValue = {
  fileIds?: number[];
  products?: defs.bakery.NewArticleItem[];
};

export type StoreSelectProps = {
  placeholder?: string;
  /**
   * @default input
   */
  onChange?: (values?: GoodsValue) => void;
  type?: 'input' | 'button';
  buttonType?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed';
  buttonTitle?: React.ReactNode;
  disabled?: boolean;
  value?: GoodsValue;
  tagsMaxLen?: number;
  depId?: string;
  storeId?: string;
  defaultValue?: defs.bakery.NewArticleItem[];
};
const GoodsSelect = (props: StoreSelectProps) => {
  const {
    storeId,
    depId,
    onChange,
    disabled,
    value,
    type = 'input',
    placeholder,
    buttonTitle,
    tagsMaxLen = 10,
    defaultValue = [],
  } = props;
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<defs.bakery.NewArticleItem[] | undefined>(
    value?.products,
  );
  const [data1, setData1] = useState<defs.bakery.NewArticleItem[] | undefined>(
    value?.products,
  );
  const [fileIds, setIds] = useState<number[] | undefined>(value?.fileIds);
  const handleOk = () => {
    if (onChange) {
      if (data?.length || fileIds?.length) {
        onChange({ products: data, fileIds });
        setData(undefined)
        setIds([])
      } else {
        onChange(undefined);
        setData1(undefined);
      }
    }
    setOpen(false);
  };
  const handleChange = (products: defs.bakery.NewArticleItem[]) => {
    setData(products);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleFiles = (ids: number[]) => {
    setIds(ids);
  };
  const showTags = data1?.slice(0, tagsMaxLen);
  const isTagsMax = data?.length ? data?.length > tagsMaxLen : false;
  useEffect(() => {
    if (data && data.length > 0) return;
    setData(defaultValue);
  }, [defaultValue.length]);
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
                <Tag key={item.articleNumber}>{item.description}</Tag>
              ))}
              {isTagsMax && <Tag>...</Tag>}
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
        <CommonButton onClick={handleOpen}>
          {buttonTitle || t<string>(`pages.rules.select`)}
        </CommonButton>
      )}
      {open && (
        <Modal
          open={open}
          title={t<string>(`components.goodsSelect.title0001`)}
          onCancel={handleCancel}
          closable={false}
          footer={null}
          width="1000px"
        >
          <SelectCard
            depId={depId}
            storeId={storeId}
            onChang={handleChange}
            data={data}
            disabled={disabled}
            onFileIdsChange={handleFiles}
          />
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

export default GoodsSelect;
