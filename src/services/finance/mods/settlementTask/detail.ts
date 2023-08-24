/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type detailPath = {
  /** taskNo */
  taskNo: string;
};
export type detailOptions = Record<string, any>;

export type detailResponse = Promise<
  defs.finance.Response<defs.finance.SettlementDetailResponse>
>;

/**
 * @desc 结算详情
 */
export function request(
  path: detailPath,
  options?: detailOptions,
): detailResponse {
  const host = getEnvHost();
  const url =
    host +
    '/finance/bo/settlementTasks/detail/{taskNo}'.replace(
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
