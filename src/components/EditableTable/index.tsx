import React, { useState } from 'react';
import {
  Form,
  Input,
  InputNumber,
  PaginationProps,
  Table,
  Typography,
} from 'antd';
import { t } from 'i18next';

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: any;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const { formitemprops = {}, props = {} } = restProps as any;
  const inputNode =
    inputType === 'number' ? <InputNumber {...props} /> : <Input {...props} />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `${t<string>('pages.rules.input')} ${title}!`,
            },
          ]}
          {...formitemprops}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

interface IProps {
  loading?: boolean;
  fields: any[];
  data: any[];
  pagination?: PaginationProps | boolean;
  rowKey: string;
  onSave: (params: any) => void;
}

const EditableTable = (props: IProps) => {
  const { loading, fields, data, pagination, onSave, rowKey } = props;
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: any) => record[rowKey] === editingKey;

  const edit = (record: any & { key: React.Key }) => {
    const editableKeys = fields
      .filter((field) => field.editable)
      .reduce((prev, cur) => {
        prev[cur.dataIndex] = '';
        return prev;
      }, {});
    form.setFieldsValue({ ...editableKeys, ...record });
    setEditingKey(record[rowKey]);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item[rowKey]);
      if (index > -1) {
        const item = newData[index];
        onSave([
          {
            ...item,
            ...row,
          },
        ]);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    ...fields,
    {
      title: t<string>('button.common.operation'),
      dataIndex: 'operation',
      width: '15%',
      render: (_: any, record: any) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record[rowKey])}
              style={{ marginRight: 8 }}
            >
              {t<string>('button.common.save')}
            </Typography.Link>
            <Typography.Link onClick={cancel}>
              {t<string>('button.common.cancel')}
            </Typography.Link>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
          >
            {t<string>('button.common.edit')}
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        inputType: col.inputType,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
        formitemprops: col?.formItemProps || {},
        props: col?.props || {},
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        loading={loading}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        rowKey={rowKey}
        pagination={
          pagination && typeof pagination === 'object'
            ? {
                ...pagination,
                onChange: cancel,
              }
            : false
        }
      />
    </Form>
  );
};

export default EditableTable;
