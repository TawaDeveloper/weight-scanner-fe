/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type detailPath = {
  /** id */
  id: number;
};
export type detailOptions = Record<string, any>;

export type detailResponse = Promise<
  defs.warehouse.Response<defs.warehouse.BoShelfNodeDetailVo>
>;

/**
       * @desc 查询详情
查询货架和存货位的节点和位置
       */
export function request(
  path: detailPath,
  options?: detailOptions,
): detailResponse {
  const host = getEnvHost();
  const url =
    host +
    '/warehouse/bo/shelfNode/detail/{id}'.replace(/\{[\w]+\}/, String(path.id));
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
