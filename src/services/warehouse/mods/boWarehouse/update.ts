/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateBody = defs.warehouse.BoWarehouseVo;
export type updateOptions = Record<string, any>;

export type updateResponse = Promise<defs.warehouse.Response<void>>;

/**
       * @desc 更新仓库
更新仓库时仓库编号要唯一，仓库名称支持不同语言的输入。仓库状态分为启用和禁用，禁用状态下其它的模块无法查询
       */
export function request(
  body: updateBody,
  options?: updateOptions,
): updateResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/warehouse/update';
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
