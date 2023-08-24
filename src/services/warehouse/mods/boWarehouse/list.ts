/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listParam = {
  /** name */
  name?: string;

  /** page */
  page?: number;

  /** size */
  size?: number;

  /** wmsNo */
  wmsNo?: string;
};
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.warehouse.Response<defs.warehouse.IPage<defs.warehouse.BoWarehouseVo>>
>;

/**
       * @desc 仓库列表
按仓库编号升序排列，支持按仓库名称模糊查询，按仓库编号精确查询，支持翻页。
       */
export function request(
  params: listParam,
  options?: listOptions,
): listResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/warehouse/list';
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
