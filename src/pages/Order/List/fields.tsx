import { t } from 'i18next';
import {
  MESSAGE_STATUS_TYPES,
  checkStatus,
  checkType,
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
    key: 'id',
    width: 60,
    align: 'left',
    name: 'ID',
  },
  {
    key: 'submitByName',
    name: t<string>(`pages.websiteMessageManagement.sponsor`),
  },
  {
    key: 'title',
    name: t<string>(`pages.websiteMessageManagement.contentTitle`),
  },
  {
    key: 'content',
    name: t<string>(`pages.websiteMessageManagement.messageContent`),
  },
  {
    key: 'submitTime',
    name: t<string>(`pages.websiteMessageManagement.submitTime`),
    type: 'time-pst',
  },
  {
    key: 'sendTotal',
    name: t<string>(`pages.websiteMessageManagement.sendCount`),
  },
  {
    key: 'receivedRate',
    name: t<string>(`pages.smsManagement.receivedRate`),
    render: (value: number) => {
      return `${value} %`;
    },
  },
  {
    key: 'sendStatus',
    name: t<string>(`pages.smsManagement.sendStatus`),
    render: (value: number) => {
      return MESSAGE_STATUS_TYPES[value];
    },
  },
  {
    key: 'auditOpinion',
    name: t<string>(`pages.websiteMessageManagement.auditOpinion`),
  },
  {
    key: 'auditByName',
    name: t<string>(`pages.websiteMessageManagement.reviewer`),
  },
  {
    key: 'auditTime',
    name: t<string>(`pages.websiteMessageManagement.reviewTime`),
    sorter: (a: any, b: any) => (a.auditTime > b.auditTime ? 1 : -1),
    type: 'time-pst',
  },
  {
    key: 'auditStatus',
    name: t<string>(`pages.websiteMessageManagement.approvalStatus`),
    render: (value: number) => {
      return checkType[value + 1];
    },
  },
  // {
  //   key: 'status',
  //   name: t<string>(`pages.appHomepageBannerConfigManagement.title0015`),
  //   type: 'badge',
  //   props: (value: number) => ({
  //     color: `${value === 1 ? 'geekblue' : '#d9d9d9'}`,
  //     text: `${shelvesStatus[value]}`,
  //   }),
  // },
];

export const formFields = [
  {
    key: 'content',
    name: t<string>(`pages.websiteMessageManagement.messageContent`),
  },
  {
    key: 'auditStatus',
    name: t<string>(`pages.websiteMessageManagement.approvalStatus`),
    type: 'select',
    props: () => ({
      options: enumsObjectToArray(checkType),
    }),
  },
  {
    key: 'submitByName',
    name: t<string>(`pages.websiteMessageManagement.sponsor`),
  },
  {
    key: 'auditByName',
    name: t<string>(`pages.websiteMessageManagement.reviewer`),
  },
  {
    key: 'submitTime',
    name: t<string>(`pages.websiteMessageManagement.submitTime`),
    type: 'date-range-picker',
  },
  {
    key: 'title',
    name: t<string>(`pages.websiteMessageManagement.contentTitle`),
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
