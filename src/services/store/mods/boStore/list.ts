/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listBody = defs.store.BoSelectStoreCondition;
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.store.Response<defs.store.IPage<defs.store.BoStoreVo>>
>;

/**
 * @desc 查询门店列表
 */
export function request(body: listBody, options?: listOptions): listResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/list';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
