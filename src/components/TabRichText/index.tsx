import { Tabs, Form, Card, Typography } from 'antd';
import i18n, { t } from 'i18next';
import type { CardProps, FormItemProps, TabsProps } from 'antd';
import BraftEditor, { BraftEditorProps } from 'braft-editor';
import React from 'react';
import { ZH_CN } from '@/constants/global';
import { backofficeAPI } from '@/services';
import './index.less';

interface TabProps {
  tabKey: string;
  tabLabel: React.ReactNode;
}

interface IProps {
  tabConfig: TabsProps['items'];
  getRichTextItemProps: ({ tabKey, tabLabel }: TabProps) => FormItemProps;
  ExtraTabComps?: (props: TabProps) => React.ReactElement;
  editorProps?: BraftEditorProps;
  cardProps?: CardProps;
  tips?: string;
}

const TabRichText = (props: IProps) => {
  const {
    tabConfig = [],
    ExtraTabComps,
    getRichTextItemProps,
    editorProps = {},
    cardProps = {},
    tips,
  } = props;

  const TabPane = ({
    tabKey,
    tabLabel,
  }: {
    tabKey: string;
    tabLabel: React.ReactNode;
  }) => {
    const itemProps = { ...getRichTextItemProps({ tabKey, tabLabel }) };
    const form = Form.useFormInstance();
    const editorState = Form.useWatch(itemProps.name || '', form);
    if (editorState?.toHTML?.() === '<p></p>') {
      form.setFieldValue(itemProps.name || '', '');
    }

    const uploadFn = async (params: any) => {
      const res = await backofficeAPI.boContent.getFileUrl.request({
        contentType: 'image/jpeg',
      });
      if (res.data?.url) {
        fetch(res.data.url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'image/jpeg',
            Accept: '*/*',
          },
          body: params.file,
        }).then((fetchRes) => {
          if (fetchRes) {
            params.success({
              url: res.data?.key,
            });
          }
        });
      }
    };

    return (
      <>
        <Typography.Text type="danger">
          {tips || `${t(`pages.platformContentRelease.title0043`)}`}
        </Typography.Text>
        <Card {...cardProps}>
          <Form.Item {...getRichTextItemProps({ tabKey, tabLabel })}>
            <BraftEditor
              language={i18n.language === ZH_CN ? 'zh' : 'en'}
              style={{ border: '1px solid #f5f5f5' }}
              media={{ uploadFn }}
              excludeControls={['code']}
              contentClassName="editorHtml"
              {...editorProps}
            />
          </Form.Item>
          {ExtraTabComps && (
            <ExtraTabComps tabKey={tabKey} tabLabel={tabLabel} />
          )}
        </Card>
      </>
    );
  };

  const tabItems: TabsProps['items'] = tabConfig.map((tab) => {
    return {
      forceRender: true,
      ...tab,
      children: <TabPane tabKey={tab.key} tabLabel={tab.label} />,
    };
  });

  return (
    <Card>
      <Tabs items={tabItems} />
    </Card>
  );
};

export default TabRichText;
