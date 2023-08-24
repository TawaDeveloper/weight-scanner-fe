/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type treeViewParam = {
  /** category */
  category: number;

  /** parentId */
  parentId?: number;
};
export type treeViewOptions = Record<string, any>;

export type treeViewResponse = Promise<
  defs.warehouse.Response<Array<defs.warehouse.BoShelfTreeViewVo>>
>;

/**
       * @desc 树形结构
查询货架和存货位的属性结构
       */
export function request(
  params: treeViewParam,
  options?: treeViewOptions,
): treeViewResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/shelfNode/treeView';
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
