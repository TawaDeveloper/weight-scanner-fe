import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import 'moment/locale/zh-cn';
import { useRecoilValue } from 'recoil';
import { PageLoading, Locale } from '@/components';
import { baseRoutes, DynamicRouteType } from './config/router';

import { loginStateAtom } from './atoms/login';

const routerViews = (routerItems: DynamicRouteType[]) => {
  if (routerItems && routerItems.length) {
    return routerItems.map(({ path, name = '', component, children }) => {
      const Component = component;
      const element = Component ? <Component /> : '';
      const key = path + name + component?.name;
      return children && children.length ? (
        <Route
          path={path}
          key={key}
          element={<Suspense fallback={<PageLoading />}>{element}</Suspense>}
        >
          {/* // 递归遍历子路由 */}
          {routerViews(children)}
        </Route>
      ) : (
        <Route
          key={key}
          path={path}
          element={<Suspense fallback={<PageLoading />}>{element}</Suspense>}
        />
      );
    });
  }
  return undefined;
};

export default () => {
  const { routes: routePremiss } = useRecoilValue(loginStateAtom);
  const routes = [...routePremiss, ...baseRoutes];
  return (
    <Suspense fallback={<PageLoading />}>
      <Locale>
        <Routes>{routerViews(routes)}</Routes>
      </Locale>
    </Suspense>
  );
};
