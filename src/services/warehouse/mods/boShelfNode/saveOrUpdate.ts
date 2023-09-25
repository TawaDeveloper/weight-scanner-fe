/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveOrUpdateBody = defs.warehouse.BoCreateShelfNodeVo;
export type saveOrUpdateOptions = Record<string, any>;

export type saveOrUpdateResponse = Promise<defs.warehouse.Response<void>>;

/**
       * @desc 添加或更新记录
新增或更新货架和存货位的节点和位置
       */
export function request(
  body: saveOrUpdateBody,
  options?: saveOrUpdateOptions,
): saveOrUpdateResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/shelfNode/saveOrUpdate';
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
