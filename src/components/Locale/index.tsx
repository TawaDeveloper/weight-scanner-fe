import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import moment from 'moment';
import 'moment/locale/zh-cn';

import MarioConfigProvider from '@tawa/mario-config-provider';
import { ConfigProvider } from 'antd';

import { antdLocaleAtom, curLangAtom } from '@/atoms/locale';
import { ZH_CN } from '@/constants';
import { MarioConfig } from '@/config';
import { getContainer } from '@/utils';

const Locale: React.FC<{
  children: React.ReactElement;
}> = ({ children }) => {
  const antdLocale = useRecoilValue(antdLocaleAtom);
  const [curLang] = useRecoilState(curLangAtom);

  moment.locale(curLang === ZH_CN ? 'zh-cn' : 'en');

  return (
    <MarioConfigProvider
      getPopupContainer={getContainer}
      locale={antdLocale}
      {...MarioConfig}
    >
      <ConfigProvider getPopupContainer={getContainer} locale={antdLocale}>
        {children}
      </ConfigProvider>
    </MarioConfigProvider>
  );
};

export default Locale;
