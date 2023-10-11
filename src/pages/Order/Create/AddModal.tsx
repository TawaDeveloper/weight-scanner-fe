import { useState } from 'react';
import { t } from 'i18next';
import { Modal, Button, Space, ModalProps, Row, Card } from 'antd';

type IProps = {
  onClose: (type?: string) => void;
  order?: defs.bakery.CreateOrderVO;
};
export default (props: IProps) => {
  const { onClose, order } = props;
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    onClose();
    setOpen(false);
  };

  const handleOk = () => {
    onClose('go');
    setOpen(false);
  };

  const modalProps: ModalProps = {
    title: '',
    open,
    footer: null,
    width: '640px',
    closable: false,
  };

  return (
    <Modal {...modalProps}>
      <Card
        style={{
          padding: '24px',
          marginBottom: '24px',
          border: 'none',
        }}
      >
        {order && order.result === 3
          ? (t('pages.orderList.title0133') as string)
          : (t('pages.orderList.title0134') as string)}
        {order &&
          order.result !== 1 &&
          (t('pages.orderList.title0137') as string)}
        {order &&
          order.result === 2 &&
          (t('pages.orderList.title0135', {
            success: order.successNum,
            error: order.failedNum,
          }) as string)}
        {order &&
          order.result === 3 &&
          (t('pages.orderList.title0136') as string)}
      </Card>
      <Row justify="end">
        <Space>
          <Button onClick={handleClose}>
            {t<string>(`button.common.close`)}
          </Button>
          {order && order.result !== 3 && (
            <Button onClick={handleOk} type="primary">
              {t<string>(`pages.orderList.title0114`)}
            </Button>
          )}
        </Space>
      </Row>
    </Modal>
  );
};
