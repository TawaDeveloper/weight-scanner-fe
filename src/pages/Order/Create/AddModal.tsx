import { useState } from 'react';
import { t } from 'i18next';
import { Modal, Form, Button, Space, ModalProps, Row } from 'antd';
import { useRequest } from 'ahooks';
import { messageAPI } from '@/services';
import GoodsSelect from '@/components/GoodsSelect';

export type BatchType = 'upc' | 'article';
type IProps = {
  onClose: () => void;
};
export default (props: IProps) => {
  const { onClose } = props;
  const [form] = Form.useForm();
  const [open, setOpen] = useState(true);
  const { loading } = useRequest(messageAPI.smsMessage.add.request, {
    manual: true,
  });
  const handleClose = () => {
    onClose();
    setOpen(false);
  };

  const handleOk = () => {
    form.validateFields().then((values) => console.log(values));
  };

  const modalProps: ModalProps = {
    title: t<string>(`pages.websiteMessageManagement.add`),
    open,
    footer: null,
    width: '640px',
    closable: false,
  };

  return (
    <Modal {...modalProps}>
      <Form
        labelCol={{ span: 8 }}
        form={form}
        name="import_form"
        autoComplete="off"
        scrollToFirstError
      >
        <Form.Item
          name="file"
          label={t<string>(`pages.smsManagement.uploadLabel`)}
          rules={[{ required: true }]}
        >
          <GoodsSelect
            type="button"
            buttonType="primary"
            buttonTitle={t('select_product') as string}
          />
        </Form.Item>
      </Form>

      <Row justify="end">
        <Space>
          <Button onClick={handleClose} loading={loading}>
            {t<string>(`button.common.cancel`)}
          </Button>
          <Button onClick={handleOk} type="primary" loading={loading}>
            {t<string>(`button.common.ok`)}
          </Button>
        </Space>
      </Row>
    </Modal>
  );
};
