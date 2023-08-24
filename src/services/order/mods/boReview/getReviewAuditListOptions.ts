/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getReviewAuditListOptionsOptions = Record<string, any>;

export type getReviewAuditListOptionsResponse = Promise<
  defs.order.Response<defs.order.ListReviewOptionVO>
>;

/**
 * @desc 查询评论审核选项
 */
export function request(
  options?: getReviewAuditListOptionsOptions,
): getReviewAuditListOptionsResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/review/audit/list/option';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
