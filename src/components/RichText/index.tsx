import BraftEditor, { BraftEditorProps, EditorState } from 'braft-editor';
import { useState } from 'react';
import 'braft-editor/dist/index.css';
import { Card } from 'antd';
import { ZH_CN } from '@/constants/global';
import { backofficeAPI } from '@/services';

interface ReactBraftProps extends Omit<BraftEditorProps, 'language'> {
  onChange?: (content: string) => void;
  value?: string;
  contentType?: 'html' | 'raw' | 'text';
  language?: string;
}

const RichText = (props: ReactBraftProps) => {
  const {
    onChange,
    contentType = 'html',
    language,
    value = '',
    ...Others
  } = props;
  const lan = language === ZH_CN ? 'zh' : 'en';
  const [editorState, setEditorState] = useState<EditorState>(
    BraftEditor.createEditorState(value),
  );

  const handleEditorChange = (editorState: EditorState) => {
    setEditorState(editorState);

    if (!onChange) {
      return;
    }

    if (editorState.isEmpty()) {
      return onChange('');
    }
    switch (contentType) {
      case 'html':
        onChange(editorState.toHTML());
        break;
      case 'raw':
        onChange(editorState.toRAW());
        break;
      case 'text':
        onChange(editorState.toText());
        break;
      default:
        onChange('');
        break;
    }
  };

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
    <Card size="small" bodyStyle={{ padding: '4px' }}>
      <BraftEditor
        onChange={handleEditorChange}
        language={lan}
        value={editorState}
        media={{ uploadFn }}
        {...Others}
      />
    </Card>
  );
};
export default RichText;
