import MarioModal from '@tawa/mario-modal';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { t } from 'i18next';

import { message } from 'antd';
import { messageAPI } from '@/services';

import { modalFields } from './fields';

interface AuditModalProps {
  onPageQuery: () => void;
}

const AuditModal = (
  { onPageQuery }: AuditModalProps,
  ref: React.Ref<unknown> | undefined,
) => {
  const [visible, setVisible] = useState<symbol | boolean>(false);
  const [data, setData] = useState<any>({});
  const { isBatch, content, ids = [] } = data;
  const handleOk = async (values: any) => {
    if (data.auditStatus !== '1') {
      await messageAPI.smsMessage.audit.request({
        content,
        id: ids[0],
        ...values,
      });
      message.success(t<string>('pages.common.operationSuccess'));
      onPageQuery();
    }
  };

  const modalProps = {
    data,
    width: '780px',
    title: t<string>(`pages.commentModerationManagement.audit`),
    labelCol: { span: 6 },
    fields: modalFields,
    nextFields: [
      {
        key: 'content',
        visible: !isBatch,
        render: () => <>{content}</>,
      },
    ],
    visible,
    onOk: handleOk,
  };

  useImperativeHandle(ref, () => ({
    toShow(dataSource: Record<string, any>) {
      setVisible(Symbol());
      if (Object.values(dataSource).length)
        setData({
          ...dataSource,
          auditStatus: dataSource.auditStatus.toString(),
        });
    },
  }));

  return <MarioModal {...modalProps} />;
};

export default forwardRef(AuditModal);
