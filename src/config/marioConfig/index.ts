import dataDisplayFieldTypes from './dataDisplayFieldTypes';
import dataEntryFieldTypes from './dataEntryFieldTypes';
import { Authorize } from '@/components/AuthButton';

const isEnUS = localStorage.getItem('lang') === 'en_US';
const getInputPrefix = () => (isEnUS ? 'Please input ' : '请输入');
const getSelectPrefix = () => (isEnUS ? 'Please select ' : '请选择');

const placeholderPrefix = {
  input$: getInputPrefix(),
  number$: getInputPrefix(),
  select$: getSelectPrefix(),
  'checkbox|radio': getSelectPrefix(),
  cascader$: getSelectPrefix(),
  textarea$: getInputPrefix(),
  'tree-select': getSelectPrefix(),
  upload: getSelectPrefix(),
};

export default {
  components: {
    Table: {
      pagination: {
        pageSizeOptions: [10, 20, 30, 50],
      },
      fieldTypes: {
        ...dataDisplayFieldTypes,
      },
    },
    Form: {
      fieldTypes: {
        ...dataEntryFieldTypes,
      },
      placeholderPrefix,
    },
    Description: {
      fieldTypes: {},
    },
    ListContent: {
      currentKey: 'pageNum',
      formProps: {
        labelCol: { style: { width: 'auto', paddingLeft: '12px' } },
        placeholderPrefix,
      },
    },
    Input: {
      allowClear: true,
    },
    Select: {
      allowClear: true,
    },
    InputNumber: {
      allowClear: true,
    },
    DatePicker: {
      allowClear: true,
    },
    Cascader: {
      allowClear: true,
    },
    TreeSelect: {
      allowClear: true,
    },
  },
  widgets: {
    action: {
      component: Authorize,
      componentPropKeys: ['code', 'menuCode', 'notMatch', 'children', 'tag'],
    },
  },
};
