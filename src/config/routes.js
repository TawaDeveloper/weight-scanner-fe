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
]
const permissionMenus = [
  {
    path: 'list',
    name: 'menus.top.orderList',
    component: OrderList,
    code: 'role',
    parentCode: 'permissions',
  },
  {
    path: 'detail',
    name: 'menus.top.orderDetails',
    component: OrderDetail,
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

export { permissionMenus, orderMenus, baseRoutes };
