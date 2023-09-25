/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type importUserListFormData = FormData;
export type importUserListOptions = Record<string, any>;

export type importUserListResponse = Promise<any>;

/**
 * @desc 导入用户数据
 */
export function request(
  formData: importUserListFormData,
  options?: importUserListOptions,
): importUserListResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity/manual/handout/import';
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
