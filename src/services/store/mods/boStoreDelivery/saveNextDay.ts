/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveNextDayParam = {
  /** storeId */
  storeId: number;

  /** zipCodes */
  zipCodes: Array<string>;
};
export type saveNextDayFormData = FormData;
export type saveNextDayOptions = Record<string, any>;

export type saveNextDayResponse = Promise<
  defs.store.Response<defs.store.ImportZipCodeResult>
>;

/**
 * @desc 添加或更新次日达配送设置
 */
export function request(
  params: saveNextDayParam,
  formData: saveNextDayFormData,
  options?: saveNextDayOptions,
): saveNextDayResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/delivery/nextDay/save';
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
