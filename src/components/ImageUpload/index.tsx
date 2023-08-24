/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal, Upload, message, ButtonProps } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { isString } from 'lodash-es';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import { promotionAPI } from '@/services';

const UPLOAD_CONTENT_TYPE = 'image/jpeg';

const DEFAULT_FILE_COUNT = 1;
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

// TODO To Be Optimized
type ImageUProps = {
  onChange?: (value: string[]) => void;
  maxCount?: number;
  accept?: string;
  imageText?: string;
  value?: string[];
  limitSize?: number;
  showButton?: boolean;
  tip?: JSX.Element;
  buttonConfig?: ButtonProps;
  buttonTitle?: React.ReactNode;
} & UploadProps;

const ImageUpload = (props: ImageUProps) => {
  const {
    onChange,
    maxCount = DEFAULT_FILE_COUNT,
    accept = '.png,.jpg,.jpeg',
    imageText = 'Upload',
    value,
    limitSize = 2,
    showButton = false,
    tip = null,
    buttonConfig,
    buttonTitle,
    ...uploadProps
  } = props;
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1),
    );
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng =
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/gif';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLtSize = file.size / 1024 / 1024 < limitSize;
    if (!isLtSize) {
      message.error(`Image must smaller than ${limitSize}MB!`);
    }
    return !!(isJpgOrPng && isLtSize);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    onChange &&
      onChange(
        (maxCount === DEFAULT_FILE_COUNT
          ? newFileList?.[0]?.response
          : newFileList.map((file) => file.response)) || '',
      );
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{imageText}</div>
    </div>
  );

  const showUploadButton = () => {
    return showButton ? (
      <Button {...buttonConfig}>{buttonTitle}</Button>
    ) : (
      uploadButton
    );
  };

  const handleUpload = async ({ file, onSuccess }: any) => {
    const { data, success } = await promotionAPI.boCoupon.getFileUrl.request({
      contentType: UPLOAD_CONTENT_TYPE,
    });

    if (success) {
      const url = data?.url || '';
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': UPLOAD_CONTENT_TYPE,
        },
        body: file,
      })
        .then(() => {
          onSuccess(data?.key);
          message.success('upload successfully.');
        })
        .catch(() => {
          message.error('upload failed.');
        });
    } else {
      message.error('upload failed.');
    }
  };

  useEffect(() => {
    if (value && isString(value)) {
      setFileList([{ url: value, uid: uuidv4(), name: uuidv4() }]);
    }
  }, [value]);

  return (
    <>
      {tip}
      <Upload
        accept={accept}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        maxCount={maxCount}
        beforeUpload={beforeUpload}
        customRequest={handleUpload}
        onChange={handleChange}
        {...uploadProps}
      >
        {fileList.length >= maxCount ? null : showUploadButton()}
      </Upload>

      <Modal
        open={previewOpen}
        title={previewTitle}
        onCancel={handleCancel}
        footer={null}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default ImageUpload;
