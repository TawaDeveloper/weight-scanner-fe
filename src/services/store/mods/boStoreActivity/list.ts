/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listParam = {
  /** activityEndTime */
  activityEndTime?: string;

  /** activityName */
  activityName?: string;

  /** activityStartTime */
  activityStartTime?: string;

  /** pageNum */
  pageNum?: number;

  /** pageSize */
  pageSize?: number;

  /** smsGroupId */
  smsGroupId?: number;

  /** storeId */
  storeId?: number;

  /** storeName */
  storeName?: string;
};
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.store.Response<defs.store.IPage<defs.store.BoStoreActivityVo>>
>;

/**
 * @desc 查询活动列表
 */
export function request(
  params: listParam,
  options?: listOptions,
): listResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/activity/list';
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
