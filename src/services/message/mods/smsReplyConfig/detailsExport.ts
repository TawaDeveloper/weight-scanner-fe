/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type detailsExportBody = defs.message.ExportSmsReplyDetailRequest;
export type detailsExportOptions = Record<string, any>;

export type detailsExportResponse = Promise<any>;

/**
 * @desc 触发明细导出
 */
export function request(
  body: detailsExportBody,
  options?: detailsExportOptions,
): detailsExportResponse {
  const host = getEnvHost();
  const url = host + '/message/bo/sms/reply/details/export';
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
