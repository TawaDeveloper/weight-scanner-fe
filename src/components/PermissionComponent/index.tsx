import React from 'react';
import { useRecoilState } from 'recoil';
import { loginStateAtom } from '@/atoms/login';
import { findPermissionByCode } from '@/utils';

const PermissionComponent: React.FC<{
  children: React.ReactNode;
  code: string;
}> = ({ children, code }) => {
  const [login] = useRecoilState(loginStateAtom);
  const isHasPermission = findPermissionByCode(code, login.permission as any);
  if (isHasPermission) {
    return <> {children}</>;
  } else {
    return null;
  }
};

export default PermissionComponent;
