import { useEffect, useState } from 'react';
import { t } from 'i18next';
import {
  Modal,
  Form,
  Button,
  Space,
  ModalProps,
  Row,
  DatePicker,
  Select,
  Input,
} from 'antd';
import { useRequest } from 'ahooks';
import { bakeryAPI } from '@/services';
import moment from 'moment';
import { RangePickerProps } from 'antd/lib/date-picker';

export type BatchType = 'upc' | 'article';
type IProps = {
  editItem?: defs.bakery.SalesGoalListItem;
  optionsData?: defs.bakery.SalesGoalListOptionVO;
  onClose: () => void;
};
export default (props: IProps) => {
  const { onClose, editItem, optionsData } = props;
  const [form] = Form.useForm();
  const [open, setOpen] = useState(true);
  const { loading, runAsync } = useRequest(
    editItem
      ? bakeryAPI.salesGoal.updateSalesGoal.request
      : bakeryAPI.salesGoal.createSalesGoal.request,
    {
      manual: true,
    },
  );
  const handleClose = () => {
    onClose();
    setOpen(false);
  };

  const handleOk = () => {
    form.validateFields().then((values) =>
      runAsync({
        ...values,
        id: editItem ? editItem.id : undefined,
        month: moment(values.time).month() + 1,
        year: moment(values.time).year(),
      }).then((res) => {
        if (res.success) {
          handleClose();
        }
      }),
    );
  };

  const modalProps: ModalProps = {
    title: t<string>(`pages.orderList.title0110`),
    open,
    footer: null,
    width: '640px',
    closable: false,
  };

  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  };

  useEffect(() => {
    if (editItem) {
      form.setFieldsValue({
        depId: editItem.depId,
        storeId: editItem.storeId,
        goal: editItem.goal,
        time: moment(`${editItem.year}-${editItem.month}-1`),
      });
    }
  }, [editItem]);
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
          style={{ marginTop: '24px' }}
          name="depId"
          label={t<string>(`pages.orderList.title0090`)}
          rules={[{ required: true }]}
        >
          <Select
            options={optionsData ? optionsData.deps : []}
            placeholder={t<string>(`pages.orderList.title0090`)}
          />
        </Form.Item>
        <Form.Item
          name="storeId"
          label={t<string>(`pages.orderList.title0007`)}
          rules={[{ required: true }]}
        >
          <Select
            options={optionsData ? optionsData.stores : []}
            placeholder={t<string>(`pages.orderList.title0007`)}
          />
        </Form.Item>

        <Form.Item
          name="time"
          label={t<string>(`pages.orderList.title0109`)}
          rules={[{ required: true }]}
        >
          <DatePicker picker="month" disabledDate={disabledDate} />
        </Form.Item>
        <Form.Item
          name="goal"
          label={t<string>(`pages.orderList.title0106`)}
          rules={[{ required: true }]}
        >
          <Input placeholder={t<string>(`pages.orderList.title0106`)} />
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
