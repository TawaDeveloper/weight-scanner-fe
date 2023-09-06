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
const OrderDetail = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/Order/Detail'),
);
const PoDetail = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/Order/PoDetail'),
);
const CreateOrder = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/Order/Create'),
);
const SalesTargetSetting = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/SalesTargetSetting/List'),
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
    skipAuthentication: true,
  },
  {
    path: 'create',
    name: 'menus.top.createOrder',
    component: CreateOrder,
    code: 'create',
    parentCode: 'order',
    skipAuthentication: true,
  },
  {
    path: 'detail',
    name: 'menus.top.orderDetails',
    component: OrderDetail,
    code: 'detail',
    parentCode: 'order',
    skipAuthentication: true,
  },
  {
    path: 'po-detail',
    name: 'menus.top.poOrderDetail',
    component: PoDetail,
    code: 'po-detail',
    parentCode: 'order',
    skipAuthentication: true,
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

const salesTargetSettingMenus = [
  {
    path: 'index',
    name: 'menus.top.SalesTargetSetting',
    component: SalesTargetSetting,
    code: 'salesTargetSetting',
    parentCode: 'sales-target-setting',
    skipAuthentication: true,
  },
]
const permissionMenus = [
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

export { permissionMenus, salesTargetSettingMenus, orderMenus, baseRoutes, salesReportMenus };
