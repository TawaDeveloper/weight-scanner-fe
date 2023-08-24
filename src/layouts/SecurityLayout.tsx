import React from 'react';
import { useRecoilState } from 'recoil';
import { useMount, useRequest } from 'ahooks';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { stringify } from 'qs';

import { loginStateAtom } from '@/atoms/login';
import BasicLayout from './BasicLayout';
import { getPermissionsMenus } from '@/utils/route-utils';
import { backofficeAPI } from '@/services';
import { PageLoading } from '@/components';

const SecurityLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [login, setLogin] = useRecoilState(loginStateAtom);
  const { runAsync, loading } = useRequest(
    backofficeAPI.webAdmin.getUserInfo.request,
  );

  useMount(() => {
    if (login.isLogin) {
      runAsync({ useCache: true }).then((data) => {
        const { routePremiss, indexPath, filteredMenus } = getPermissionsMenus(
          data?.data?.menus,
        );
        setLogin({
          ...login,
          routes: routePremiss,
          indexPath,
          routesFlat: filteredMenus,
        });
      });
    }
  });

  if (!login.isLogin && location.pathname !== '/user/login') {
    const queryString = stringify({
      redirect: window.location.href,
    });
    return <Navigate to={`/user/login?${queryString}`} replace />;
  }

  if (location.pathname === '/' && login.indexPath) {
    navigate(login.indexPath, { replace: true });
  }
  if (loading) {
    return <PageLoading />;
  }
  return <BasicLayout />;
};

export default SecurityLayout;
