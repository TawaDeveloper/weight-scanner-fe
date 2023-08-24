import MarioModal from '@tawa/mario-modal';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { t } from 'i18next';

import { message } from 'antd';
import { backofficeAPI } from '@/services';

import { modalFields } from './fields';

const TreeNodeModal = (
  { onTreeQuery }: any,
  ref: React.Ref<unknown> | undefined,
) => {
  const [visible, setVisible] = useState(false);
  const [isEdit, setIsEdit] = useState();
  const [data, setData] = useState<any>({});

  useImperativeHandle(ref, () => ({
    toShow({ isEdit, ...data }: any) {
      setVisible(Symbol() as any);
      setIsEdit(isEdit);
      setData(data);
    },
  }));

  const modalProps = {
    data,
    visible,
    title: isEdit
      ? t<string>('pages.menuManagement.edit')
      : t<string>('pages.menuManagement.new'),
    fields: modalFields,
    width: 780,
    onOk: async (params: any) => {
      isEdit
        ? await backofficeAPI.webMenu.edit.request({ ...data, ...params })
        : await backofficeAPI.webMenu.add.request({
            ...params,
            ...data,
            level: data.level + 1,
          });

      message.success(t<string>('pages.common.operationSuccess'));
      onTreeQuery();
    },
  };
  return <MarioModal {...modalProps} />;
};

export default forwardRef(TreeNodeModal);
