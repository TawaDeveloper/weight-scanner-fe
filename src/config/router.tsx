import React, { lazy } from 'react';
import { UnorderedListOutlined } from '@ant-design/icons';
import type { MenuDataItem } from '@ant-design/pro-layout';
import {
  baseRoutes,
  itemMaintenanceMenus,
  recordMenus,
  userMenus,
} from './routes';

const SecurityLayout = lazy(() => import('@/layouts/SecurityLayout'));

/** 👇🏻路由配置的接口类型 */
export interface DynamicRouteType extends MenuDataItem {
  path?: string;
  /** 翻译失败后 则采用name配置值,如无需全球化直接使用中文即可 */
  name: string;
  /** @/config/icons里配置的图标,小写也可以 */
  icon?: string | React.ReactElement;
  /** @/config/access里可配置静态策略。权限入口在@/config/pages里 */
  access?: string;
  /** 非动态的有page属性的路由，会默认显示在sideMmenu里 */
  component?: React.FC<any>;
  children?: DynamicRouteType[];
  parentCode?: string;
  fullPath?: string;
}

export interface StaticRouteType extends MenuDataItem {
  path: string;
  /** 翻译失败后 则采用name配置值,如无需全球化直接使用中文即可 */
  name: string;
  code: string;
  /** @/config/icons里配置的图标,小写也可以 */
  icon?: string | React.ReactElement;
  /** @/config/access里可配置静态策略。权限入口在@/config/pages里 */
  /** 非动态的有page属性的路由，会默认显示在sideMmenu里 */
  component?: React.FC<any>;
  children?: StaticRouteType[];
  fullPath?: string;
}

// use a request result to instead it.
const menuTabs: StaticRouteType[] = [
  {
    name: 'menus.top.item',
    path: '/item',
    icon: <UnorderedListOutlined />,
    children: itemMaintenanceMenus,
    code: 'menu:Item Maintenance',
    component: SecurityLayout,
    skipAuthentication: true,
  },
  {
    name: 'menus.top.record',
    path: '/record',
    icon: <UnorderedListOutlined />,
    children: recordMenus,
    code: 'menu:Record',
    component: SecurityLayout,
    skipAuthentication: true,
  },
  {
    name: 'menus.top.user',
    path: '/user',
    icon: <UnorderedListOutlined />,
    children: userMenus,
    code: 'menu:User',
    component: SecurityLayout,
    skipAuthentication: true,
  },
];

const routes = [...menuTabs, ...baseRoutes];

export { menuTabs, baseRoutes, routes };
