import { atom, selector } from 'recoil';
import antdZh from 'antd/es/locale/zh_CN';
import antdUs from 'antd/es/locale/en_US';
import { DEFAULT_LANG } from '@/constants';

export const locales = {
  en_US: {
    name: 'English',
    icon: '🇺🇸',
    antd: antdUs,
  },
  zh_CN: {
    name: '简体中文',
    icon: '🇨🇳',
    antd: antdZh,
  },
};

export const curLangAtom = atom({
  key: 'curLangAtom',
  default: localStorage.getItem('lang') ?? DEFAULT_LANG,
});

export const curLocaleLoadAtom = selector({
  key: 'curLocaleLoadAtom',
  // default: 'none',
  get: async ({ get }) => get(curLangAtom),
});

export const antdLocaleAtom = selector({
  key: 'antdLocaleAtom',
  get: ({ get }) => locales[get(curLangAtom)].antd,
});
