/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listAuditForPageBody = defs.order.ListReviewPageDTO;
export type listAuditForPageOptions = Record<string, any>;

export type listAuditForPageResponse = Promise<
  defs.order.Response<defs.order.PageInfo<defs.order.BoListReviewAuditItem>>
>;

/**
 * @desc 分页查询评论列表
 */
export function request(
  body: listAuditForPageBody,
  options?: listAuditForPageOptions,
): listAuditForPageResponse {
  const host = getEnvHost();
  const url = host + '/order/bo/review/audit/list/page';
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
