/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveSameDayParam = {
  /** bypassTollRoad */
  bypassTollRoad: boolean;

  /** flashDistance */
  flashDistance: number;

  /** pickupDistance */
  pickupDistance: number;

  /** storeId */
  storeId: number;

  /** zipCodes */
  zipCodes: Array<string>;
};
export type saveSameDayFormData = FormData;
export type saveSameDayOptions = Record<string, any>;

export type saveSameDayResponse = Promise<
  defs.store.Response<defs.store.ImportZipCodeResult>
>;

/**
 * @desc 添加或更新当日达配送设置
 */
export function request(
  params: saveSameDayParam,
  formData: saveSameDayFormData,
  options?: saveSameDayOptions,
): saveSameDayResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/delivery/sameDay/save';
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
