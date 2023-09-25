/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listParam = {
  /** name */
  name?: string;

  /** nodeCategory */
  nodeCategory: number;

  /** nodeId */
  nodeId?: number;

  /** page */
  page?: number;

  /** size */
  size?: number;

  /** status */
  status?: number;

  /** wmsId */
  wmsId?: number;
};
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.warehouse.Response<defs.warehouse.IPage<defs.warehouse.BoShelfNodeVo>>
>;

/**
       * @desc 货架和存货位列表
查询货架或者存货位列表，需要传递仓库 ID 和节点 ID，支持按照位置编码或节点名称进行模糊查询，支持分页
       */
export function request(
  params: listParam,
  options?: listOptions,
): listResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/shelfNode/list';
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
