/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type uploadFormData = FormData;
export type uploadOptions = Record<string, any>;

export type uploadResponse = Promise<defs.store.Response<string>>;

/**
 * @desc 上传文件到 S3
 */
export function request(
  formData: uploadFormData,
  options?: uploadOptions,
): uploadResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/file/upload';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
