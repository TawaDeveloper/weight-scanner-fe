import { t } from 'i18next';

// "brandId": 0,
// "brandNameEN": "string",
// "brandNameSCH": "string",
// "brandNameTCH": "string",
// "description": "string",
// "logo": "string",
// "status": 0,
// "updatedByName": "string",
// "updatedTime": "2023-07-11T07:11:01.256Z"
export const tableFields = [
  {
    key: 'storeId',
    width: 100,
    name: t<string>(`pages.orderList.title0007`),
  },
  {
    key: 'storeName',
    width: 100,
    name: t<string>(`pages.orderList.title0048`),
  },
  {
    key: 'depName',
    width: 100,
    name: t<string>(`pages.orderList.title0090`),
  },
  {
    key: 'goal',
    width: 100,
    name: t<string>(`pages.orderList.title0105`),
    render: (value: string, record: any) => {
      return <span>{record.year}年{record.month}月</span>
    }
  },
  {
    key: 'goal',
    width: 100,
    name: t<string>(`pages.orderList.title0106`),
  },
  {
    key: 'optUserName',
    width: 100,
    name: t<string>(`pages.orderList.title0107`),
  },
  {
    key: 'updateTime',
    width: 100,
    name: t<string>(`pages.orderList.title0108`),
    type: 'date'
  },
];

export const formFields = [
  {
    key: 'storeId',
    name: t<string>(`pages.orderList.title0007`),
    type: 'select',
  },
  {
    key: 'createTime',
    name: t<string>(`pages.orderList.title0012`),
    type: 'date-month-picker',
  },
  {
    key: 'dep',
    name: t<string>(`pages.orderList.title0090`),
    type: 'select',
  },
];

export const modalFields = [
  {
    key: 'content',
    name: t<string>(`pages.orderList.title0090`),
    type: 'text',
    required: true,
  },
  {
    name: t<string>(`pages.orderList.title0007`),
    key: 'auditStatus',
    type: 'radio-group',
    required: true,
  },
];

export const viewModalFields = [
  {
    key: 'phone',
    name: t<string>(`pages.smsManagement.phone`),
    type: 'text',
    visible: false,
  },
];

export const viewTableModalFields = [
  {
    key: 'phone',
    name: t<string>(`pages.smsManagement.phone`),
    type: 'text',
    visible: false,
  },
  {
    key: 'replyContent',
    name: t<string>(`pages.smsManagement.replyContent`),
    type: 'text',
    visible: false,
  },
  {
    key: 'receivingTime',
    name: t<string>(`pages.smsManagement.receivingTime`),
    type: 'time-pst',
    visible: false,
  },
];
