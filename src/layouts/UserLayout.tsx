import React from 'react';
import { useTitle } from 'ahooks';
import { Outlet } from 'react-router-dom';
import { t } from 'i18next';

import GlobalFooter from '@/components/GlobalFooter';

import styles from './UserLayout.less';

const UserLayout: React.FC = () => {
  useTitle(t<string>('pages.common.pageTitle'));

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top} />
        <Outlet />
      </div>
      <GlobalFooter />
    </div>
  );
};

export default UserLayout;
