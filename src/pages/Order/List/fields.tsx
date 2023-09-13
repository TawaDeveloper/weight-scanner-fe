import { t } from 'i18next';
import {
  checkStatus,
  enumsObjectToArray,
  orderStatus,
} from '@/constants/enums';
import { Link } from 'react-router-dom';
import { timestampToZone } from '@/utils';

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
    key: 'orderId',
    width: 100,
    name: t<string>(`pages.orderList.title0001`),
    render: (value: string) => {
      return <Link to={`/order/detail?id=${value}`}>{value}</Link>;
    },
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
    render: (value: string, record: any) => {
      return (
        <Link to={`/order/po-detail?po=${value}&id=${record.orderId}`}>
          {value}
        </Link>
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
    key: 'dep',
    width: 100,
    name: t<string>(`pages.orderList.title0090`),
  },
  {
    key: 'createTime',
    width: 200,
    name: t<string>(`pages.orderList.title0012`),
    type: 'time-pst',
  },
  {
    key: 'createUserName',
    width: 100,
    name: t<string>(`pages.orderList.title0088`),
  },
  {
    key: 'status',
    width: 100,
    name: t<string>(`pages.orderList.title0006`),
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
    key: 'amount',
    width: 140,
    name: t<string>(`pages.orderList.title0016`),
  },
  {
    key: 'skuNum',
    width: 100,
    name: t<string>(`pages.orderList.title0093`),
  },
  {
    key: 'estDeliveredTime',
    width: 200,
    name: t<string>(`pages.orderList.title0040`),
    render: (value: string, record: any) => {
      return timestampToZone(value, record.timezone);
    },
  },
];

export const formFields = [
  {
    key: 'id',
    name: t<string>(`pages.orderList.title0001`),
  },
  {
    key: 'pr',
    name: t<string>(`pages.orderList.title0091`),
  },
  {
    key: 'po',
    name: t<string>(`pages.orderList.title0092`),
  },
  // {
  //   key: 'storeGroup',
  //   name: t<string>(`pages.orderList.title0089`),
  // },
  {
    key: 'storeId',
    name: t<string>(`pages.orderList.title0007`),
    type: 'select',
  },
  {
    key: 'createTime',
    name: t<string>(`pages.orderList.title0012`),
    type: 'date-range-picker',
  },
  {
    key: 'createUserName',
    name: t<string>(`pages.orderList.title0088`),
  },
  // {
  //   key: 'storeName',
  //   name: t<string>(`pages.orderList.title0048`),
  // },
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
