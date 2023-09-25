import { t } from 'i18next';

export const modalFields = [
  {
    key: 'parentName',
    name: t<string>(`pages.menuManagement.parentNode`),
    props: {
      disabled: true,
    },
  },
  {
    key: 'nameZhCn',
    name: t<string>(`pages.menuManagement.nodeNameCH`),
    required: true,
  },
  {
    key: 'nameZhTw',
    name: t<string>(`pages.menuManagement.nodeNameTW`),
  },
  {
    key: 'nameEnUs',
    name: t<string>(`pages.menuManagement.nodeNameEN`),
    required: true,
  },
  {
    key: 'code',
    name: t<string>(`pages.menuManagement.nodeParam`),
    required: true,
  },
  {
    key: 'sort',
    name: t<string>(`pages.menuManagement.displayOrder`),
    required: true,
  },
  {
    key: 'type',
    name: t<string>(`pages.menuManagement.nodeType`),
    type: 'radio-group',
    required: true,
    props: () => ({
      options: [
        { value: 11, label: t<string>(`pages.menuManagement.menu`) },
        { value: 12, label: t<string>(`pages.menuManagement.actionButton`) },
      ],
    }),
  },
];
