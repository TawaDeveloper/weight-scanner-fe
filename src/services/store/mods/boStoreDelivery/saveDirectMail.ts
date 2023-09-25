/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveDirectMailParam = {
  /** states */
  states: Array<string>;

  /** storeId */
  storeId: number;

  /** zipCodes */
  zipCodes: Array<string>;
};
export type saveDirectMailFormData = FormData;
export type saveDirectMailOptions = Record<string, any>;

export type saveDirectMailResponse = Promise<
  defs.store.Response<defs.store.ImportZipCodeResult>
>;

/**
 * @desc 添加或更新全美直邮配送设置
 */
export function request(
  params: saveDirectMailParam,
  formData: saveDirectMailFormData,
  options?: saveDirectMailOptions,
): saveDirectMailResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/delivery/directMail/save';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    params,
    data: formData,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
