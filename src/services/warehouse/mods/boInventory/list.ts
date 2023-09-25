/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listParam = {
  /** articleNumber */
  articleNumber?: number;

  /** locationNo */
  locationNo?: string;

  /** page */
  page?: number;

  /** productName */
  productName?: string;

  /** size */
  size?: number;

  /** upc */
  upc?: string;

  /** wmsId */
  wmsId?: number;
};
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.warehouse.Response<defs.warehouse.IPage<defs.warehouse.BoInventoryVO>>
>;

/**
       * @desc 库存列表
按仓库编号、位置编码升序排列，支持翻页
       */
export function request(
  params: listParam,
  options?: listOptions,
): listResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/inventory/list';
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
