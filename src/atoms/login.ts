import { atom } from 'recoil';
import { DynamicRouteType } from '@/config/router';

export interface LoginStateAtomType {
  role?: string | null;
  id?: string | null;
  account: string;
  isLogin: boolean;
  token: string | null | undefined;
  permission: object;
  indexPath: string;
  routes: DynamicRouteType[];
  routesFlat: DynamicRouteType[];
}

const token = localStorage.getItem('token');
export const loginStateAtom = atom<LoginStateAtomType>({
  key: 'loginStateAtom',
  default: {
    role: null,
    id: null,
    account: 'Tester',
    isLogin: true,
    // isLogin: true,
    token,
    permission: {},
    indexPath: '/report/reportByCategory',
    routesFlat: [],
    routes: [],
  },
});
