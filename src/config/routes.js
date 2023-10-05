import { lazy } from 'react';

const UserLogin = lazy(() =>
  import(/* webpackChunkName: "login" */ '@/pages/user/login'),
);
const ForgetPassword = lazy(() =>
  import(/* webpackChunkName: "login" */ '@/pages/user/forget-password'),
);
const SecurityLayout = lazy(() =>
  import(/* webpackChunkName: "SecurityLayout" */ '@/layouts/SecurityLayout'),
);
const UserLayout = lazy(() =>
  import(/* webpackChunkName: "UserLayout" */ '@/layouts/UserLayout'),
);

// const Account = lazy(() =>
//   import(/* webpackChunkName: "Account" */ '@/pages/Permission/Account'),
// );
// // const RolePermissions = lazy(() =>
// //   import(/* webpackChunkName: "RolePermissions" */ '@/pages/Permission/Role'),
// // );
// const Organization = lazy(() =>
//   import(
//     /* webpackChunkName: "Organization" */ '@/pages/Permission/Organization'
//   ),
// );
// const Menu = lazy(() =>
//   import(/* webpackChunkName: "Menu" */ '@/pages/Permission/Menu'),
// );
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
const LossFactor = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/Setting/LossFactor'),
);

const RolePermissionSetting = lazy(() =>
  import(
    /* webpackChunkName: "Menu" */ '@/pages/Setting/RolePermissionSetting'
  ),
);

const Ghost = lazy(() =>
  import(/* webpackChunkName: "Ghost" */ '@/pages/Ghost'),
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
    path: '/ghost',
    name: 'ghost',
    component: Ghost,
  },
  {
    path: '/user',
    name: 'user',
    component: UserLayout,
    children: [
      {
        path: 'forget-password',
        name: 'forget-password',
        component: ForgetPassword,
      },
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
    code: 'menu:OrderManagement1',
    parentCode: 'menu:Order Management',
    skipAuthentication: true,
  },
  {
    path: 'create',
    name: 'menus.top.createOrder',
    component: CreateOrder,
    code: 'menu:Create New Order',
    parentCode: 'menu:Order Management',
    skipAuthentication: true,
  },
  {
    path: 'detail',
    name: 'menus.top.orderDetails',
    component: OrderDetail,
    code: 'component:Setting:OrderDetail',
    parentCode: 'menu:Order Management',
    hideInMenu: true,
    skipAuthentication: true,
  },
  {
    path: 'po-detail',
    name: 'menus.top.poOrderDetail',
    component: PoDetail,
    code: 'component:Setting:PoOrderDetail',
    parentCode: 'menu:Order Management',
    hideInMenu: true,
    skipAuthentication: true,
  },
];
const salesReportMenus = [
  {
    path: 'reportByStore',
    name: 'menus.top.reportByStore',
    component: ReportByStore,
    code: 'menu:Sales Report by Store',
    parentCode: 'menu:Sales Report',
    skipAuthentication: true,
  },
  {
    path: 'reportByProduct',
    name: 'menus.top.reportByProduct',
    component: ReportByProduct,
    code: 'menu:Sales Report by Product',
    parentCode: 'menu:Sales Report',
    skipAuthentication: true,
  },
  {
    path: 'reportByCategory',
    name: 'menus.top.reportByCategory',
    component: ReportByCategory,
    code: 'menu:Sales Report by Category',
    parentCode: 'menu:Sales Report',
    skipAuthentication: true,
  },
];

// const permissionMenus = [
//   {
//     path: 'organization',
//     name: 'menus.top.organization',
//     component: Organization,
//     code: 'organization',
//     parentCode: 'permissions',
//   },
//   {
//     path: 'account',
//     name: 'menus.top.account',
//     component: Account,
//     code: 'account',
//     parentCode: 'permissions',
//   },
//   {
//     path: 'menu',
//     name: 'menus.top.menu',
//     component: Menu,
//     code: 'menu',
//     parentCode: 'permissions',
//   },
// ];
const settingMenus = [
  {
    path: 'lossfactor',
    name: 'menus.top.lossFactor',
    component: LossFactor,
    code: 'menu:Loss Factor',
    parentCode: 'menu:Setting',
    skipAuthentication: true,
  },
  {
    path: 'saletarget',
    name: 'menus.top.SalesTargetSetting',
    component: SalesTargetSetting,
    code: 'menu:Sales Target Settings',
    parentCode: 'menu:Setting',
    skipAuthentication: true,
  },
  {
    path: 'permission',
    name: 'menus.top.rolePermissionSetting',
    component: RolePermissionSetting,
    code: 'menu:Role Permission Setting',
    parentCode: 'menu:Setting',
    skipAuthentication: true,
  },
];
export { orderMenus, baseRoutes, salesReportMenus, settingMenus };
