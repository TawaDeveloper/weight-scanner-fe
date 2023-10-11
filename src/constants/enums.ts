import { t } from 'i18next';

export const enumsObjectToArray = (
  obj: { [x: string | number]: string },
  key = 'value',
  label = 'label',
): { [x: string | number]: string }[] | [] => {
  const keys = Object.keys(obj);
  return keys.map((objKey) => {
    const o = {};
    o[key] = objKey;
    o[label] = obj[objKey];
    return o;
  });
};

export const contentType = {
  //   des: 'Content type';
  1: t<string>(`pages.enums.contentType.title001`),
  2: t<string>(`pages.enums.contentType.title002`),
};
export const shelvesStatus = {
  //   des: 'Shelves status';
  0: t<string>(`pages.enums.shelvesStatus.title002`),
  1: t<string>(`pages.enums.shelvesStatus.title001`),
};
export const shelvesOptions = {
  0: t<string>(`pages.enums.shelvesStatus.title004`),
  1: t<string>(`pages.enums.shelvesStatus.title003`),
};
export const pointType = {
  //   des: 'Point type';
  1: t<string>(`pages.enums.pointType.title001`),
  2: t<string>(`pages.enums.pointType.title002`),
  3: t<string>(`pages.enums.pointType.title003`),
  4: t<string>(`pages.enums.pointType.title004`),
};
export const coverageType = {
  0: t<string>(`pages.hotSearchWordConfigManagement.default`),
  1: '8899',
  2: '9988',
  3: 'O2O',
};
export const limitedTimeCoverageType = {
  1: t<string>(`pages.hotSearchWordConfigManagement.default`),
  2: '8899',
  3: '9988',
  4: 'O2O',
};
export const businessType = {
  0: t<string>(`pages.hotSearchWordConfigManagement.default`),
  1: 'O2O',
  2: '9988',
  3: '8899',
};
export const o2oType = {
  1: 'SCA1009',
  2: 'SCA1761',
  3: 'SCA1622',
  4: 'TC',
};
export const countryType = {
  1: t<string>(`pages.enums.countryType.title001`),
};
export const americanStates = {
  1: t<string>(`pages.enums.american.title001`),
  2: t<string>(`pages.enums.american.title002`),
  3: t<string>(`pages.enums.american.title003`),
  4: t<string>(`pages.enums.american.title004`),
  5: t<string>(`pages.enums.american.title005`),
  6: t<string>(`pages.enums.american.title006`),
  7: t<string>(`pages.enums.american.title007`),
  8: t<string>(`pages.enums.american.title008`),
  9: t<string>(`pages.enums.american.title009`),
  10: t<string>(`pages.enums.american.title010`),
  11: t<string>(`pages.enums.american.title011`),
  12: t<string>(`pages.enums.american.title012`),
  13: t<string>(`pages.enums.american.title013`),
  14: t<string>(`pages.enums.american.title014`),
  15: t<string>(`pages.enums.american.title015`),
  16: t<string>(`pages.enums.american.title016`),
  17: t<string>(`pages.enums.american.title017`),
  18: t<string>(`pages.enums.american.title018`),
  19: t<string>(`pages.enums.american.title019`),
  20: t<string>(`pages.enums.american.title020`),
  21: t<string>(`pages.enums.american.title021`),
  22: t<string>(`pages.enums.american.title022`),
  23: t<string>(`pages.enums.american.title023`),
  24: t<string>(`pages.enums.american.title024`),
  25: t<string>(`pages.enums.american.title025`),
  26: t<string>(`pages.enums.american.title026`),
  27: t<string>(`pages.enums.american.title027`),
  28: t<string>(`pages.enums.american.title028`),
  29: t<string>(`pages.enums.american.title029`),
  30: t<string>(`pages.enums.american.title030`),
  31: t<string>(`pages.enums.american.title031`),
  32: t<string>(`pages.enums.american.title032`),
  33: t<string>(`pages.enums.american.title033`),
  34: t<string>(`pages.enums.american.title034`),
  35: t<string>(`pages.enums.american.title035`),
  36: t<string>(`pages.enums.american.title036`),
  37: t<string>(`pages.enums.american.title037`),
  38: t<string>(`pages.enums.american.title038`),
  39: t<string>(`pages.enums.american.title039`),
  40: t<string>(`pages.enums.american.title040`),
  41: t<string>(`pages.enums.american.title041`),
  42: t<string>(`pages.enums.american.title042`),
  43: t<string>(`pages.enums.american.title043`),
  44: t<string>(`pages.enums.american.title044`),
  45: t<string>(`pages.enums.american.title045`),
  46: t<string>(`pages.enums.american.title046`),
  47: t<string>(`pages.enums.american.title047`),
  48: t<string>(`pages.enums.american.title048`),
  49: t<string>(`pages.enums.american.title049`),
  50: t<string>(`pages.enums.american.title050`),
  51: t<string>(`pages.enums.american.title051`),
};

export const matchType = {
  1: t<string>(`pages.enums.matchType.title001`),
  2: t<string>(`pages.enums.matchType.title002`),
};

export const checkType = {
  1: t<string>(`pages.enums.checkType.title001`),
  2: t<string>(`pages.enums.checkType.title002`),
  3: t<string>(`pages.enums.checkType.title003`),
};

export const checkStatus = {
  1: t<string>(`pages.enums.checkStatus.title001`),
  2: t<string>(`pages.enums.checkStatus.title002`),
};

export const categoryStatus = {
  1: t<string>(`pages.enums.categoryStatus.title001`),
  0: t<string>(`pages.enums.categoryStatus.title002`),
};

export const contentCategoryStatus = {
  1: t<string>(`pages.enums.categoryStatus.title002`),
  2: t<string>(`pages.enums.categoryStatus.title001`),
};

export const contentReleaseStatus = {
  1: t<string>(`pages.enums.contentStatus.title002`),
  2: t<string>(`pages.enums.contentStatus.title001`),
  3: t<string>(`pages.enums.contentStatus.title003`),
};

export const contentStatus = {
  0: t<string>(`pages.enums.contentStatus.title002`),
  1: t<string>(`pages.enums.contentStatus.title003`),
  2: t<string>(`pages.enums.contentStatus.title001`),
};

export const recipeContentStatus = {
  0: t<string>(`pages.enums.contentStatus.title002`),
  1: t<string>(`pages.enums.contentStatus.title001`),
  2: t<string>(`pages.enums.contentStatus.title003`),
};

export const processStatus = {
  1: t<string>(`pages.enums.processStatus.title001`),
  2: t<string>(`pages.enums.processStatus.title002`),
};

// enabled/disabled
export const StatusType = {
  0: t<string>(`pages.enums.status.enabled`),
  1: t<string>(`pages.enums.status.disabled`),
};

// enabled/disabled
export const MessageStatusType = {
  0: t<string>(`pages.enums.status.disabled`),
  1: t<string>(`pages.enums.status.enabled`),
};
export const ChannelType = {
  1: 'APP',
  2: 'WEB',
};

export const afterSalesType = {
  1: t<string>(`pages.enums.afterSalesType.title001`),
  2: t<string>(`pages.enums.afterSalesType.title002`),
  3: t<string>(`pages.enums.afterSalesType.title003`),
};
export const deliveryMethodType = {
  1: t<string>(`pages.enums.deliveryMethodType.title001`),
  2: t<string>(`pages.enums.deliveryMethodType.title002`),
  3: t<string>(`pages.enums.deliveryMethodType.title003`),
  4: t<string>(`pages.enums.deliveryMethodType.title004`),
};
export const orderStatus = {
  1: t<string>(`pages.enums.orderStatus.title001`),
  2: t<string>(`pages.enums.orderStatus.title002`),
  3: t<string>(`pages.enums.orderStatus.title003`),
  4: t<string>(`pages.enums.orderStatus.title004`),
};
export const orderChannelsType = {
  1: t<string>(`pages.enums.orderChannelsType.title001`),
  2: t<string>(`pages.enums.orderChannelsType.title002`),
  3: 'APP',
};
export const debitStatus = {
  1: t<string>(`pages.enums.debitStatus.title001`),
  2: t<string>(`pages.enums.debitStatus.title002`),
  3: t<string>(`pages.enums.debitStatus.title003`),
};

export const BENEFIT_RULE_TYPES = {
  MONTHLY_COUPON: 1,
  BIRTHDAY_GIFT: 2,
  FREE_SAME_DAY_DELIVERY: 3,
  FREE_SHIPPING: 4,
  IN_STORE_PICKUP: 5,
  SALE_EVENT: 6,
  VIP_PRESALE_EVENT: 7,
};

export const POINT_RULE_TYPES = {
  PURCHASE: 1,
  WRITING_REVIEWS: 2,
  REFER_FRIEND: 3,
  EMAIL_SUBSCRIPTION: 4,
  SMS_SUBSCRIPTION: 5,
  COMPLETE_PROFILE: 6,
  FOLLOW_SOCIAL_MEDIA: 7,
  PURCHASE_REWARD_FULL_TIMES_PER_MONTH: 8,
  FIRST_PURCHASE: 9,
};

export const SOCIAL_MEDIA = {
  Wechat: 'Wechat',
  Redbook: 'Redbook',
  Facebook: 'Facebook',
  TikTok: 'Tik Tok',
  Twitter: 'Twitter',
  Instagram: 'Instagram',
};

export const LANGS = {
  0: 'English',
  1: '简体中文',
  2: '繁体中文',
};

export const ACTIVITY_CATEGORY = {
  BUY_A_GET_B: 'BUY_A_GET_B',
  BUY_N_GET_X: 'BUY_N_GET_X',
  DISCOUNT: 'DISCOUNT',
  DISCOUNT_CODE: 'DISCOUNT_CODE',
};

export const DEFAULT_TEMPLATE_STATUS_TYPES = {
  0: t<string>(`pages.common.no`),
  1: t<string>(`pages.common.yes`),
};

export enum STATUS {
  DISABLED,
  ENABLED,
}

export const STATUS_TYPES = {
  [STATUS.DISABLED]: t<string>(`pages.common.disabled`),
  [STATUS.ENABLED]: t<string>(`pages.common.enabled`),
};

export const ROLE_STATUS_TYPES = {
  DISABLE: t<string>(`pages.common.disabled`),
  ENABLE: t<string>(`pages.common.enabled`),
};

export const MESSAGE_STATUS_TYPES = {
  [STATUS.DISABLED]: t<string>(`pages.common.toBeSent`),
  [STATUS.ENABLED]: t<string>(`pages.common.hasBeenSent`),
};

export const PRODUCT_POLICY_TYPES = {
  1: t<string>(`pages.enums.productPolicyTypes.precautions`),
  2: t<string>(`pages.enums.productPolicyTypes.disclaimer`),
};

export const SHIPPING_TYPES = {
  1: t<string>(`pages.enums.shippingTypes.sameDayDelivery`),
  2: t<string>(`pages.enums.shippingTypes.nextDayDelivery`),
  3: t<string>(`pages.enums.shippingTypes.allUsDirectShipping`),
};

export const RELEASE_TYPE = {
  1: t<string>(`pages.enums.releaseTypes.title001`),
  2: t<string>(`pages.enums.releaseTypes.title002`),
};

export const BANNER_TYPE = {
  APP: 1,
  WEB: 2,
  WEB_TOP: 3,
};

export const STORE_TYPE = {
  1: t<string>('pages.enums.storeTypes.physicalStore'),
  2: t<string>('pages.enums.storeTypes.virtualStore'),
};

export const STORE_NATURE = {
  1: t<string>('pages.enums.storeNature.sameDay'),
  2: t<string>('pages.enums.storeNature.nextDay'),
  3: t<string>('pages.enums.storeNature.allArrive'),
  4: t<string>('pages.enums.storeNature.selfRunning'),
};

export const DELIVERY_TYPE = {
  1: 'Doordash',
  2: 'Uber',
  3: 'Fedex',
  4: t<string>('pages.enums.deliveryType.self'),
};

export const WEEK_TYPE = {
  MONDAY: t<string>('pages.common.monday'),
  TUESDAY: t<string>('pages.common.tuesday'),
  WEDNESDAY: t<string>('pages.common.wednesday'),
  THURSDAY: t<string>('pages.common.thursday'),
  FRIDAY: t<string>('pages.common.friday'),
  SATURDAY: t<string>('pages.common.saturday'),
  SUNDAY: t<string>('pages.common.sunday'),
};
