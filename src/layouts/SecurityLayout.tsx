import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useMount } from 'ahooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginStateAtom } from '@/atoms/login';
import BasicLayout from './BasicLayout';
import { getPermissionsMenus } from '@/utils/route-utils';
import { bakeryAPI } from '@/services';
// import { backofficeAPI } from '@/services';
// import { PageLoading } from '@/components';
const SecurityLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [login, setLogin] = useRecoilState(loginStateAtom);
  const token = localStorage.getItem('tawa_sso_token');

  useEffect(() => {
    if (token) {
      bakeryAPI.account.userInfo.request().then((res) => {
        if (res.data && res.success) {
          localStorage.setItem('username', res.data.account || '');
          sessionStorage.setItem('bakeryUserInfo', JSON.stringify(res.data))
        }
      })
    }
  }, [token])
  useMount(() => {
    if (login.isLogin) {
      const { routePremiss, filteredMenus } = getPermissionsMenus([]);
      setLogin({
        ...login,
        routes: routePremiss,
        indexPath: login.indexPath,
        routesFlat: filteredMenus,
      });
    }
  });

  if (!login.isLogin && location.pathname !== '/user/login') {
    window.location.href = `${process.env.REACT_APP_SSO_LOGIN}?redirect=${window.location.href}`;
    // return <Navigate to={process.env.REACT_APP_SSO_LOGIN + `?redirect=${window.location.href}`} replace />;
  }

  if (location.pathname === '/' && login.indexPath) {
    navigate(login.indexPath, { replace: true });
  }
  // if (loading) {
  //   return <PageLoading />;
  // }
  return <BasicLayout />;
};

export default SecurityLayout;
