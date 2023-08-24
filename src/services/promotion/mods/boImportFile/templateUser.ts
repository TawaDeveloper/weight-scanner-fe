/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type templateUserOptions = Record<string, any>;

export type templateUserResponse = Promise<any>;

/**
       * @desc 下载用户模板
下载用户模板，用于手动发券上传用户信息
       */
export function request(options?: templateUserOptions): templateUserResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/import/file/template/user';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
