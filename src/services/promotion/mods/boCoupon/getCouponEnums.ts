/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getCouponEnumsParam = {
  /** keys */
  keys?: string;
};
export type getCouponEnumsOptions = Record<string, any>;

export type getCouponEnumsResponse = Promise<
  defs.promotion.Response<defs.promotion.EnumMapVO>
>;

/**
       * @desc 获取券活动相关的枚举
couponType:券活动类型,couponActivityStatus:券活动状态,couponConditionType:券规则条件类型,couponUseDateType:使用日期类型,deliveryCouponScopeType:运费券适用范围,bizScope:覆盖业务,receivedLimitType:领取后限制类型
       */
export function request(
  params: getCouponEnumsParam,
  options?: getCouponEnumsOptions,
): getCouponEnumsResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity/enums';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
