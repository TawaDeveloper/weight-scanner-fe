/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type removePath = {
  /** id */
  id: number;
};
export type removeOptions = Record<string, any>;

export type removeResponse = Promise<defs.warehouse.Response<void>>;

/**
       * @desc 删除记录
当前节点存在子节点或当前节点存在商品库存时无法删除
       */
export function request(
  path: removePath,
  options?: removeOptions,
): removeResponse {
  const host = getEnvHost();
  const url =
    host +
    '/warehouse/bo/shelfNode/delete/{id}'.replace(/\{[\w]+\}/, String(path.id));
  const fetchOption = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
