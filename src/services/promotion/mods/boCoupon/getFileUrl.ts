/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getFileUrlParam = {
  /** contentType */
  contentType?: string;
};
export type getFileUrlOptions = Record<string, any>;

export type getFileUrlResponse = Promise<
  defs.promotion.Response<defs.promotion.S3PreSignInfo>
>;

/**
 * @desc 获取文件上传的URL
 */
export function request(
  params: getFileUrlParam,
  options?: getFileUrlOptions,
): getFileUrlResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity/file-upload/url';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
