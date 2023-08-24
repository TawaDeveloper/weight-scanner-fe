/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getEventTypesOptions = Record<string, any>;

export type getEventTypesResponse = Promise<
  defs.promotion.Response<Array<defs.promotion.EnumVO>>
>;

/**
 * @desc 自动发券触发事件
 */
export function request(options?: getEventTypesOptions): getEventTypesResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity/event/types';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
