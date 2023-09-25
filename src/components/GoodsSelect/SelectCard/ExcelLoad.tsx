import {
  Button,
  Col,
  message,
  Row,
  Typography,
  Upload,
  UploadProps,
  Modal,
} from 'antd';
import type { RcFile } from 'antd/es/upload/interface';
import { t } from 'i18next';
import { useState } from 'react';
import { promotionAPI } from '@/services';
import { download } from '@/utils';

type IProps = {
  onChange?: (files: defs.promotion.Product[]) => void;
  disabled?: boolean;
};
const ExcelLoad = (props: IProps) => {
  const { onChange, disabled = false } = props;
  const [fileList, setFileList] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleExportError = async (batchId: string) => {
    const content = await promotionAPI.boImportFile.importProductFailed.request(
      { batchId },
      {
        responseType: 'blob',
      },
    );

    download({ content, filename: 'downloadImportProductsErrors.xlsx' });

    message.success(t<string>('pages.common.operationSuccess'));
  };

  const handleNotice = (data: defs.promotion.ImportProductResponse) => {
    const { batchId, failCount, successCount, successProducts } = data;

    if (batchId) {
      if (failCount) {
        Modal.confirm({
          title: 'Notice',
          content: (
            <span style={{ color: '#A30014' }}>
              {t<string>(`components.goodsSelect.title0018`, {
                num: successCount,
              })}
            </span>
          ),
          okText: t<string>(`components.goodsSelect.title0019`),
          onOk: () => handleExportError(batchId),
        });
      } else {
        Modal.success({
          title: 'Notice',
          content: t<string>(`components.goodsSelect.title0017`, {
            num: successCount,
          }),
        });
      }
      if (successProducts && onChange) {
        onChange(successProducts);
      }
      // const files_ids = [...fileIds, Number(batchId)];
      // if (data.batchId) if (onChange) onChange(files_ids);
      // setFileIds(files_ids);
    }
  };
  const handleUpload = (currentFile: RcFile) => {
    setUploading(true);
    const formData = new FormData();
    formData.append('file', currentFile);
    promotionAPI.boImportFile.importProduct
      .request(formData, { headers: { Accept: '*/*' } })
      .then((data) => {
        setFileList([...fileList, currentFile]);
        handleNotice(data?.data || {});
      })
      .catch(() => {
        message.error('upload failed.');
      })
      .finally(() => {
        setUploading(false);
      });
  };
  const uploadProps: UploadProps = {
    action: '',
    listType: 'text',
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    fileList,
    beforeUpload: async (file) => {
      if (!/^.*\.(?:xls|xlsx)$/i.test(file.name)) {
        message.error(t<string>(`components.goodsSelect.title0020`));
      } else {
        handleUpload(file);
      }
      return false;
    },
    disabled,
  };

  const handleExport = async () => {
    const content = await promotionAPI.boImportFile.templateProduct.request({
      responseType: 'blob',
    });

    download({ content, filename: 'downloadProductTemplate.xlsx' });

    message.success(t<string>('pages.common.operationSuccess'));
  };

  return (
    <Row>
      <Col span={4}>
        <Typography.Text>
          {t<string>(`components.goodsSelect.title0014`)}
        </Typography.Text>
      </Col>
      <Col span={8}>
        <Upload {...uploadProps}>
          <Button loading={uploading} disabled={disabled}>
            {t<string>(`components.goodsSelect.title0015`)}
          </Button>
        </Upload>
      </Col>
      <Col span={8}>
        <Button onClick={handleExport} type="link" disabled={disabled}>
          {t<string>(`components.goodsSelect.title0016`)}
        </Button>
      </Col>
    </Row>
  );
};

export default ExcelLoad;
