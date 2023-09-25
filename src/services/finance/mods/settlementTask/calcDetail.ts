/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type calcDetailPath = {
  /** taskNo */
  taskNo: string;
};
export type calcDetailOptions = Record<string, any>;

export type calcDetailResponse = Promise<
  defs.finance.Response<defs.finance.QuerySettlementTaskCalcDetailResponse>
>;

/**
 * @desc 核价详情
 */
export function request(
  path: calcDetailPath,
  options?: calcDetailOptions,
): calcDetailResponse {
  const host = getEnvHost();
  const url =
    host +
    '/finance/bo/settlementTasks/calc/{taskNo}'.replace(
      /\{[\w]+\}/,
      String(path.taskNo),
    );
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
