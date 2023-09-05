import { t } from 'i18next';
import {
  checkStatus,
  enumsObjectToArray,
} from '@/constants/enums';

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
    key: 'descriptionTc',
    width: 120,
    name: t<string>(`pages.orderList.title0096`),
  },
  {
    key: 'descriptionEn',
    width: 120,
    name: t<string>(`pages.orderList.title0097`),
  },
  {
    key: 'articleNumber',
    width: 140,
    name: t<string>(`pages.orderList.title0095`),
  },
  {
    key: 'storeName',
    width: 100,
    name: t<string>(`pages.orderList.title0048`),
  },
  {
    key: 'storeId',
    width: 100,
    name: t<string>(`pages.orderList.title0007`),
  },
  {
    key: 'depName',
    width: 100,
    name: t<string>(`pages.orderList.title0090`),
  },
  {
    key: 'price',
    width: 140,
    name: t<string>(`pages.orderList.title0098`),
  },
  {
    key: 'packSize',
    width: 100,
    name: t<string>(`pages.orderList.title0099`),
  },
  {
    key: 'supplier',
    width: 200,
    name: t<string>(`pages.orderList.title0100`),
  },
  {
    key: 'supplier',
    width: 200,
    name: t<string>(`pages.orderList.title0103`),
  },
  {
    key: 'supplier',
    width: 200,
    name: t<string>(`pages.orderList.title0104`),
  },
];

export const formFields = [
  {
    key: 'id',
    name: t<string>(`pages.orderList.title0001`),
  },
  {
    key: 'createUserName',
    name: t<string>(`pages.orderList.title0088`),
  },
  {
    key: 'createTime',
    name: t<string>(`pages.orderList.title0012`),
    type: 'date-range-picker',
  },
  {
    key: 'storeGroup',
    name: t<string>(`pages.orderList.title0089`),
  },
  {
    key: 'storeId',
    name: t<string>(`pages.orderList.title0007`),
  },
  {
    key: 'storeName',
    name: t<string>(`pages.orderList.title0048`),
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
