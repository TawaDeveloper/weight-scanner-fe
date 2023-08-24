/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOvertimeListPageBody = defs.order.BoOrderOvertimeListDTO;
export type getOvertimeListPageOptions = Record<string, any>;

export type getOvertimeListPageResponse = Promise<
  defs.order.Response<defs.order.PageInfo<defs.order.BoOrderOvertimeListItem>>
>;

/**
 * @desc 超时管理 - 查询超时列表
 */
export function request(
  body: getOvertimeListPageBody,
  options?: getOvertimeListPageOptions,
): getOvertimeListPageResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/order/overtime/list/page';
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
