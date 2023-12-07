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
const SalesTargetSetting = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/SalesTargetSetting/List'),
);
const ReportByStore = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/SalesReport/ReportByStore'),
);
const ItemMeasure = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/ItemMaintenance/ItemMeasure'),
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

const itemMaintenanceMenus = [
  {
    path: 'measure',
    name: 'menus.top.item',
    component: ItemMeasure,
    code: 'menu:Item Maintenance By measure',
    parentCode: 'menu:Item Maintenance',
    skipAuthentication: true,
  },
];
const recordMenus = [
  {
    path: 'imported',
    name: 'menus.top.record',
    component: ItemMeasure,
    code: 'menu:Import Record',
    parentCode: 'menu:Record',
    skipAuthentication: true,
  },
];

export { baseRoutes, itemMaintenanceMenus, recordMenus };
