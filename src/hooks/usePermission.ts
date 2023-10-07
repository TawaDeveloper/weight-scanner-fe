import { useRecoilState } from 'recoil';
import { loginStateAtom } from '@/atoms/login';
import { findPermissionByCode } from '@/utils';

const usePermission = (code: string) => {
  const [login] = useRecoilState(loginStateAtom);
  const isHasPermission = findPermissionByCode(code, login.permission as any);
  return isHasPermission;
};

export default usePermission;
