import React from 'react';
import { Switch } from 'antd';
import { useRecoilState } from 'recoil';
import { t } from 'i18next';

import { tabsModelAtom } from '@/atoms/tabsModel';
import { SelectLang, FullScreen, UserMessage } from '@/components';

import Avatar from './AvatarDropdown';
import styles from './index.less';

const inlineStyle = {
  cursor: 'pointer',
  padding: '12px',
  // display: "inline-flex",
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 18,
  verticalAlign: 'middle',
};

const GlobalHeaderRight: React.FC = () => {
  const className = `${styles.right}  ${styles.dark}`;

  const [tabsModel, setTabsModel] = useRecoilState(tabsModelAtom);

  const onChangetabsModel = (checked: boolean) => {
    setTabsModel(checked);
  };

  return (
    <div className={className}>
      <FullScreen />
      <div style={inlineStyle}>
        <Switch
          onChange={onChangetabsModel}
          checkedChildren={t<string>('components.header.multiLabel')}
          unCheckedChildren={t<string>('components.header.singleLabel')}
          defaultChecked={tabsModel}
        />
      </div>
      <SelectLang />
      <UserMessage />
      <Avatar />
    </div>
  );
};

export default GlobalHeaderRight;
