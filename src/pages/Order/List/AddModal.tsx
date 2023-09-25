import { useState } from 'react';
import { t } from 'i18next';
import {
  Modal,
  Form,
  Button,
  Space,
  ModalProps,
  UploadProps,
  Upload,
  Row,
  message,
  Typography,
  Input,
  Radio,
  DatePicker,
  DatePickerProps,
} from 'antd';
import { useRequest } from 'ahooks';
import { RangePickerProps } from 'antd/lib/date-picker';
import moment from 'moment';
import { download } from '@/utils';
import { messageAPI } from '@/services';

export type BatchType = 'upc' | 'article';
type IProps = {
  onClose: () => void;
};
export default (props: IProps) => {
  const { onClose } = props;
  const [form] = Form.useForm();
  const [sendType, setSendType] = useState();
  const [open, setOpen] = useState(true);
  const { loading, runAsync } = useRequest(messageAPI.smsMessage.add.request, {
    manual: true,
  });
  const [fileList, setFileData] = useState<any[]>();
  const handleClose = () => {
    onClose();
    setOpen(false);
  };

  const handleExport = async (requestErrorId?: string) => {
    let content: any;
    if (requestErrorId !== undefined) {
      content = await messageAPI.smsMessage.exportError.request(
        { requestErrorId },
        {
          responseType: 'blob',
          'response-type': 'blob',
        },
      );
      download({ content, filename: 'ErrorUserInfo.xls' });
    } else {
      content = await messageAPI.smsMessage.template.request({
        responseType: 'blob',
        'response-type': 'blob',
      });
      download({ content, filename: 'UploadUserTemplate.xls' });
    }

    message.success(t<string>('pages.common.operationSuccess'));
  };

  const handleUpload = (values: any) => {
    if (!fileList?.length) return;
    const formData = new FormData();
    formData.append('file', fileList[0]);

    runAsync(
      {
        ...values,
        sendTime: moment(values.sendTime).utc().format('YYYY-MM-DD HH:mm:ss'),
      },
      formData,
      {
        headers: { Accept: '*/*' },
      },
    ).then((res) => {
      if (res.success) {
        handleClose();
        const { failNum = 0, successNum = 0, requestErrorId } = res?.data || {};
        Modal.warning({
          title: t<string>(`pages.productInformationM.title0025`),
          content: (
            <div>
              <p>
                {t<string>(`pages.productInformationM.title0026`, {
                  success: successNum,
                  error: failNum,
                })}
              </p>
              {requestErrorId && failNum > 0 && (
                <Button
                  onClick={() => handleExport(requestErrorId)}
                  type="link"
                >
                  {t<string>(`pages.productInformationM.title0027`)}
                </Button>
              )}
            </div>
          ),
        });
      }
    });
  };
  const handleOk = () => {
    form.validateFields().then((values) => handleUpload(values));
  };

  const uploadProps: UploadProps = {
    action: '',
    listType: 'text',
    fileList,
    onRemove: (file) => {
      if (fileList) {
        const index = fileList.indexOf(file);
        const newFileList = fileList.slice();
        newFileList.splice(index, 1);
        setFileData(newFileList);
      }
    },
    accept: '.xls,.xlsx',
    beforeUpload: (file) => {
      setFileData([file]);
      return false;
    },
  };

  const modalProps: ModalProps = {
    title: t<string>(`pages.websiteMessageManagement.add`),
    open,
    footer: null,
    width: '640px',
    closable: false,
  };
  const onChange = (
    value: DatePickerProps['value'] | RangePickerProps['value'],
    dateString: [string, string] | string,
  ) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };

  const onOk = (
    value: DatePickerProps['value'] | RangePickerProps['value'],
  ) => {
    console.log('onOk: ', value);
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
          extra={
            <Button onClick={() => handleExport()} type="link">
              {t<string>(`pages.smsManagement.templateDownload`)}
            </Button>
          }
        >
          <Space>
            <Upload {...uploadProps}>
              <Button loading={loading}>
                {t<string>(`pages.smsManagement.uploadButton`)}
              </Button>
            </Upload>
            <Typography.Text>
              {t<string>(`pages.productInformationM.title0023`)}
            </Typography.Text>
          </Space>
        </Form.Item>
        <Typography.Text>
          {t<string>(`pages.smsManagement.uploadDesc`)}
        </Typography.Text>
        <Form.Item
          style={{ marginTop: '24px' }}
          name="title"
          label={t<string>(`pages.websiteMessageManagement.contentTitle`)}
          rules={[{ required: true }]}
        >
          <Input
            placeholder={t<string>('pages.helpCenterManagement.title0018')}
          />
        </Form.Item>
        <Form.Item
          name="content"
          label={t<string>(`pages.websiteMessageManagement.messageContent`)}
          rules={[{ required: true }]}
        >
          <Input
            placeholder={t<string>('pages.smsManagement.inputPlaceholder1')}
          />
        </Form.Item>
        <Form.Item
          name="sendType"
          label={t<string>(`pages.smsManagement.releaseType`)}
          rules={[{ required: true }]}
        >
          <Radio.Group
            value={sendType}
            onChange={(event) => setSendType(event.target.value)}
          >
            <Radio value={0}>
              {t<string>(`pages.enums.releaseTypes.title001`)}
            </Radio>
            <Radio value={1}>
              {t<string>(`pages.enums.releaseTypes.title002`)}
            </Radio>
          </Radio.Group>
        </Form.Item>
        {sendType === 1 && (
          <Form.Item
            name="sendTime"
            label={t<string>(`pages.smsManagement.releaseTime`)}
            rules={[{ required: true }]}
          >
            <DatePicker
              disabledDate={(date) => {
                if (date) {
                  return date.isBefore(new Date());
                }
                return false;
              }}
              showTime
              onChange={onChange}
              onOk={onOk}
            />
          </Form.Item>
        )}
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
