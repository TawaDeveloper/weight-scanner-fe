/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type detailPath = {
  /** storeId */
  storeId: number;
};
export type detailOptions = Record<string, any>;

export type detailResponse = Promise<
  defs.store.Response<defs.store.BoStoreDeliveryDetailVo>
>;

/**
 * @desc 查询门店配送设置
 */
export function request(
  path: detailPath,
  options?: detailOptions,
): detailResponse {
  const host = getEnvHost();
  const url =
    host +
    '/store/bo/store/delivery/{storeId}'.replace(
      /\{[\w]+\}/,
      String(path.storeId),
    );
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
