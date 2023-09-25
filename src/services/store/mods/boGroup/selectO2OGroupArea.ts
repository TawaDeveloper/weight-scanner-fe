/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type selectO2OGroupAreaOptions = Record<string, any>;

export type selectO2OGroupAreaResponse = Promise<
  defs.store.Response<Array<defs.store.GroupVo>>
>;

/**
 * @desc 获取O2O分组区域
 */
export function request(
  options?: selectO2OGroupAreaOptions,
): selectO2OGroupAreaResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/smsGroup/o2o/group';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
