import { get } from 'lodash-es';
import { menuTabs, StaticRouteType } from '@/config/router';

export const flattenPermissions = (
  menus?: defs.backoffice.Menu[],
): defs.backoffice.Menu[] =>
  (menus || []).reduce(
    (
      prev: defs.backoffice.Menu[],
      { code, level, name, components, children = [] }: defs.backoffice.Menu,
    ) =>
      prev.concat(
        { code, level, name, components },
        flattenPermissions(children),
      ),
    [],
  );

export const flattenMenus = (
  menus: StaticRouteType[],
  parentPath = '',
): StaticRouteType[] =>
  (menus || []).reduce(
    (
      prev: StaticRouteType[],
      {
        path,
        access,
        fullPath,
        name,
        icon,
        component,
        code,
        parentCode,
        children = [],
        skipAuthentication,
        hideInMenu,
      }: StaticRouteType,
    ) => {
      const allPath =
        fullPath || `${parentPath}${parentPath ? '/' : ''}${path}`;
      return prev.concat(
        {
          path,
          access,
          fullPath: allPath,
          name,
          icon,
          component,
          code,
          parentCode,
          skipAuthentication,
          hideInMenu,
        },
        flattenMenus(children, allPath),
      );
    },
    [],
  );

export function toTree(list: StaticRouteType[]) {
  const tree: StaticRouteType[] = [];
  const map = list.reduce((pre, cur) => {
    pre[cur.code] = cur;
    return pre;
  }, {});
  // eslint-disable-next-line no-restricted-syntax
  for (const item of list) {
    if (!item.parentCode) {
      tree.push(item);
      // eslint-disable-next-line no-continue
      continue;
    }
    if (item.parentCode in map) {
      const parent = map[item.parentCode];
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  }
  return tree;
}

export const getPermissionsMenus = (menus?: defs.backoffice.Menu[]) => {
  const flattedPermissions = flattenPermissions(menus);
  window.PERMISSIONS = flattedPermissions;
  const pathKeys: string[] = flattedPermissions.map((menu) => menu.code || '');
  const authorityMenus = flattenMenus(menuTabs).filter(
    (r) => pathKeys.includes(r.code || '') || r.skipAuthentication,
  );
  const filteredMenus = authorityMenus.filter((menu) => !!menu.parentCode);

  const indexPath =
    get(
      filteredMenus.filter((menu) => !menu.skipAuthentication),
      [0, 'fullPath'],
    ) ?? '/';
  const routePremiss = toTree(authorityMenus);
  return { indexPath, routePremiss, filteredMenus };
};
