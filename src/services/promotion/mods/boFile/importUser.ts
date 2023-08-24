/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type importUserFormData = FormData;
export type importUserOptions = Record<string, any>;

export type importUserResponse = Promise<defs.promotion.Response<void>>;

/**
       * @desc 上传用户信息
上传用户信息，用于手动发券上传用户信息
       */
export function request(
  formData: importUserFormData,
  options?: importUserOptions,
): importUserResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/file/import/user';
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
