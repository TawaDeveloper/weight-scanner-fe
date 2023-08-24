/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createBody = defs.warehouse.BoWarehouseVo;
export type createOptions = Record<string, any>;

export type createResponse = Promise<defs.warehouse.Response<void>>;

/**
       * @desc 新增仓库
新建仓库时仓库编号要唯一，仓库名称支持不同语言的输入。仓库状态分为启用和禁用，禁用状态下其它的模块无法查询
       */
export function request(
  body: createBody,
  options?: createOptions,
): createResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/warehouse/create';
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
