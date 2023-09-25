import { Button } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';

import type { To } from 'react-router-dom';

type AuthorizeProps = {
  code: string;
  menuCode: string;
  [x: string]: any;
};

type AuthButtonProps = {
  code: string;
  menuCode: string;
  tag?: 'button' | 'link' | 'a' | 'plain';
  text?: string;
  to?: To;
  [x: string]: any;
};

export const checkAccess = (code: string, menuCode: any) => {
  const menu = window.PERMISSIONS?.find((item) => menuCode === item.code) ?? {};

  const { components = [] } = menu;

  return components?.some(
    (item: { code: string; visible: boolean }) =>
      code === item.code && item.visible,
  );
};

export const Authorize: React.FC<AuthorizeProps> = ({
  code,
  menuCode,
  notMatch,
  children,
}) => {
  if (!code) return children;

  if (!checkAccess(code, menuCode)) {
    return notMatch || null;
  }

  return children;
};

function AuthButton(props: AuthButtonProps) {
  const {
    code,
    menuCode,
    children,
    tag = 'button',
    text,
    to = '',
    notMatch,
    ...restProps
  } = props;

  const ComponentMap = {
    a: () => <a {...restProps}>{children || text}</a>,
    link: () => (
      <Link to={to} {...restProps}>
        {children || text}
      </Link>
    ),
    button: () => <Button {...restProps}>{children || text}</Button>,
    plain: () => <span {...restProps}>{children || text}</span>,
  };

  return (
    <Authorize menuCode={menuCode} code={code} notMatch={notMatch}>
      {ComponentMap[tag]()}
    </Authorize>
  );
}

export default AuthButton;
