import { t } from 'i18next';
import { checkStatus, enumsObjectToArray } from '@/constants/enums';

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
    key: 'action',
    width: 160,
    name: t<string>(`pages.orderList.title0050`),
  },
  {
    key: 'descriptionTc',
    width: 160,
    name: t<string>(`pages.orderList.title0096`),
  },
  {
    key: 'descriptionEn',
    width: 160,
    name: t<string>(`pages.orderList.title0097`),
  },
  {
    key: 'articleNumber',
    width: 160,
    name: t<string>(`pages.orderList.title0095`),
  },
  {
    key: 'quantity',
    width: 200,
    name: t<string>(`pages.orderList.title0113`),
  },
  {
    key: 'lastQt',
    width: 200,
    name: t<string>(`pages.orderList.title0130`),
  },
  {
    key: 'storeName',
    width: 160,
    name: t<string>(`pages.orderList.title0048`),
  },
  // {
  //   key: 'storeId',
  //   width: 160,
  //   name: t<string>(`pages.orderList.title0007`),
  // },
  {
    key: 'depName',
    width: 160,
    name: t<string>(`pages.orderList.title0090`),
  },
  {
    key: 'price',
    width: 160,
    name: t<string>(`pages.orderList.title0098`),
  },
  {
    key: 'packSize',
    width: 160,
    name: t<string>(`pages.orderList.title0099`),
  },
  {
    key: 'supplierName',
    width: 160,
    name: t<string>(`pages.orderList.title0100`),
  },
  {
    key: 'weekSalesGoal',
    width: 200,
    name: t<string>(`pages.orderList.title0101`),
  },
  {
    key: 'dayRefQuantity',
    width: 200,
    name: t<string>(`pages.orderList.title0104`),
  },
  
];

export const formFields = [
  {
    key: 'storeId',
    type: 'select',
    props: {
      showSearch: true,
    },
    name: `${t<string>(`pages.orderList.title0089`)}`,
  },
  {
    key: 'depId',
    name: `${t<string>(`pages.orderList.title0090`)}`,
    type: 'select',
  },
];

export const modalFields = [
  {
    key: 'content',
    name: t<string>(`pages.commentModerationManagement.comments`),
    type: 'text',
    visible: false,
  },
  {
    name: t<string>(`pages.commentModerationManagement.auditResults`),
    key: 'auditStatus',
    type: 'radio-group',
    required: true,
    props: () => ({
      options: enumsObjectToArray(checkStatus),
    }),
  },
  {
    name: t<string>(`pages.commentModerationManagement.reviewOpinion`),
    key: 'auditOpinion',
    type: 'text-area',
    props: () => ({
      rows: 4,
      placeholder: t<string>(`pages.commentModerationManagement.reviewOpinion`),
      maxLength: 200,
    }),
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
