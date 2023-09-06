import { lazy } from 'react';

const UserLogin = lazy(() =>
  import(/* webpackChunkName: "login" */ '@/pages/user/login'),
);
const SecurityLayout = lazy(() =>
  import(/* webpackChunkName: "SecurityLayout" */ '@/layouts/SecurityLayout'),
);
const UserLayout = lazy(() =>
  import(/* webpackChunkName: "UserLayout" */ '@/layouts/UserLayout'),
);

const Account = lazy(() =>
  import(/* webpackChunkName: "Account" */ '@/pages/Permission/Account'),
);
const RolePermissions = lazy(() =>
  import(/* webpackChunkName: "RolePermissions" */ '@/pages/Permission/Role'),
);
const Organization = lazy(() =>
  import(
    /* webpackChunkName: "Organization" */ '@/pages/Permission/Organization'
  ),
);
const Menu = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/Permission/Menu'),
);
const OrderList = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/Order/List'),
);
const ReportByStore = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/SalesReport/ReportByStore'),
);
const ReportByProduct = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/SalesReport/ReportByProduct'),
);
const ReportByCategory = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/SalesReport/ReportByCategory'),
);
const LossFactor = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/Setting/LossFactor'),
);
const baseRoutes = [
  {
    name: 'all',
    path: '*',
    hideInMenu: true,
    component: SecurityLayout,
  },
  {
    path: '/',
    name: 'index',
    component: SecurityLayout,
  },
  {
    path: '/user',
    name: 'user',
    component: UserLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: UserLogin,
      },
    ],
  },
];

const orderMenus = [
  {
    path: 'list',
    name: 'menus.top.order',
    component: OrderList,
    code: 'list',
    parentCode: 'order',
  },
  {
    path: 'create',
    name: 'menus.top.order',
    component: OrderList,
    code: 'create',
    parentCode: 'order',
  },
  {
    path: 'detail',
    name: 'menus.top.order',
    component: OrderList,
    code: 'detail',
    parentCode: 'order',
  },
];
const salesReportMenus = [
  {
    path: 'reportByStore',
    name: 'menus.top.reportByStore',
    component: ReportByStore,
    code: 'reportByStore',
    parentCode: 'report',
    skipAuthentication: true,
  },
  {
    path: 'reportByProduct',
    name: 'menus.top.reportByProduct',
    component: ReportByProduct,
    code: 'reportByProduct',
    parentCode: 'report',
    skipAuthentication: true,
  },
  {
    path: 'reportByCategory',
    name: 'menus.top.reportByCategory',
    component: ReportByCategory,
    code: 'reportByCategory',
    parentCode: 'report',
    skipAuthentication: true,
  },
];
const permissionMenus = [
  {
    path: 'list',
    name: 'menus.top.order',
    component: OrderList,
    code: 'role',
    parentCode: 'permissions',
  },
  {
    path: 'role',
    name: 'menus.top.rolePermissions',
    component: RolePermissions,
    code: 'role',
    parentCode: 'permissions',
  },
  {
    path: 'organization',
    name: 'menus.top.organization',
    component: Organization,
    code: 'organization',
    parentCode: 'permissions',
  },
  {
    path: 'account',
    name: 'menus.top.account',
    component: Account,
    code: 'account',
    parentCode: 'permissions',
  },
  {
    path: 'menu',
    name: 'menus.top.menu',
    component: Menu,
    code: 'menu',
    parentCode: 'permissions',
  },
];

const settingMenus = [
  {
    path: 'lossfactor',
    name: 'menus.top.lossFactor',
    component: LossFactor,
    code: 'lossFactor',
    parentCode: 'setting',
    skipAuthentication: true,
  },
];

export {
  permissionMenus,
  orderMenus,
  baseRoutes,
  salesReportMenus,
  settingMenus,
};
