import { useMemoizedFn } from 'ahooks';
import { Tabs } from 'antd';
import { last } from 'lodash-es';
import memoized from 'nano-memoize';
import React, { Suspense, useEffect, useRef } from 'react';
import type { Location } from 'react-router-dom';
import {
  generatePath,
  useLocation,
  useNavigate,
  useOutlet,
  useParams,
} from 'react-router-dom';

import PageLoading from '@/components/PageLoading';
import { DynamicRouteType } from '@/config/router';

interface TabObjectType {
  name: string;
  key: string;
  page: React.ReactElement | null;
  location: Location;
  params: Record<string, any>;
}

const { TabPane } = Tabs;

const getTabPath = (tab: TabObjectType) =>
  generatePath(tab.location.pathname, tab.params);

const generTabKey = memoized(
  (location: Location, matchpath: string) =>
    `${location.pathname},${matchpath}`,
);

const getTabMapKey = memoized((key: string) =>
  key.substring(key.indexOf(',') + 1, key.length),
);

interface Props {
  routeConfig: DynamicRouteType;
  matchPath: string;
}

const TabRoute: React.FC<Props> = ({ routeConfig, matchPath }) => {
  const ele = useOutlet();

  const location = useLocation();

  const params = useParams();

  const navigate = useNavigate();

  const tabList = useRef<Map<string, TabObjectType>>(new Map());

  useEffect(() => {
    const tab = tabList.current.get(matchPath);
    const newTab: TabObjectType = {
      name: routeConfig.name,
      key: generTabKey(location, matchPath),
      page: ele,
      // access:routeConfig.access,
      location,
      params,
    };

    if (tab) {
      if (tab.location.pathname !== location.pathname) {
        tabList.current.set(matchPath, newTab);
      }
    } else {
      tabList.current.set(matchPath, newTab);
    }
  }, [location]);

  const closeTab = useMemoizedFn((selectKey) => {
    if (tabList.current.size >= 2) {
      tabList.current.delete(getTabMapKey(selectKey));
      const nextKey = last(Array.from(tabList.current.keys()));
      if (nextKey) {
        navigate(getTabPath(tabList.current.get(nextKey)!), { replace: true });
      }
    }
  });

  const selectTab = useMemoizedFn((selectKey) => {
    navigate(getTabPath(tabList.current.get(getTabMapKey(selectKey))!), {
      replace: true,
    });
  });

  return (
    <Tabs
      // className={styles.tabs}
      activeKey={generTabKey(location, matchPath)}
      onChange={(key) => selectTab(key)}
      // tabBarExtraContent={operations}
      tabBarStyle={{ background: '#fff' }}
      tabPosition="top"
      animated
      tabBarGutter={-1}
      hideAdd
      type="editable-card"
      onEdit={(targetKey) => closeTab(targetKey)}
    >
      {[...tabList.current.values()].map((item) => (
        <TabPane tab={item.name} key={item.key}>
          <Suspense fallback={<PageLoading />}>{item.page}</Suspense>
        </TabPane>
      ))}
    </Tabs>
  );
};

export default TabRoute;
