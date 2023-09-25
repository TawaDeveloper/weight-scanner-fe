import { t } from 'i18next';
import {
  checkStatus,
  enumsObjectToArray,
  orderStatus,
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
    key: 'pr',
    width: 100,
    name: t<string>(`pages.orderList.title0091`),
  },
  {
    key: 'po',
    width: 100,
    name: t<string>(`pages.orderList.title0092`),
  },
  {
    key: 'status',
    width: 100,
    name: t<string>(`pages.orderList.title0102`),
    render: (value: number) => {
      return (
        <span
          style={{
            color:
              value === 1
                ? 'rgba(22, 163, 74, 0.85)'
                : value === 2
                ? '#7722EE'
                : 'rgba(247, 186, 30, 0.85)',
          }}
        >
          {orderStatus[value]}
        </span>
      );
    },
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
    width: 100,
    name: t<string>(`pages.orderList.title0100`),
  },
  {
    key: 'dayActualQuantity',
    width: 100,
    name: t<string>(`pages.orderList.title0116`),
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
