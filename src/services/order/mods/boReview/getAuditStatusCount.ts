/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getAuditStatusCountBody = defs.order.ReviewStatusCountDTO;
export type getAuditStatusCountOptions = Record<string, any>;

export type getAuditStatusCountResponse = Promise<
  defs.order.Response<defs.order.ListReviewCountVO>
>;

/**
 * @desc 统计评论状态数量
 */
export function request(
  body: getAuditStatusCountBody,
  options?: getAuditStatusCountOptions,
): getAuditStatusCountResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/review/audit/status/count';
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
