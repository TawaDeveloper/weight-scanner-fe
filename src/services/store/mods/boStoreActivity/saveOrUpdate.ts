/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveOrUpdateParam = {
  /** activityEndTime */
  activityEndTime: string;

  /** activityName */
  activityName: string;

  /** activityStartTime */
  activityStartTime: string;

  /** id */
  id?: number;

  /** image */
  image: string;

  /** releaseTime */
  releaseTime: string;

  /** releaseType */
  releaseType: number;

  /** smsGroupId */
  smsGroupId?: number;

  /** storeIds */
  storeIds?: string;

  /** type */
  type?: number;
};
export type saveOrUpdateFormData = FormData;
export type saveOrUpdateOptions = Record<string, any>;

export type saveOrUpdateResponse = Promise<defs.store.Response<void>>;

/**
 * @desc 保存或更新活动
 */
export function request(
  params: saveOrUpdateParam,
  formData: saveOrUpdateFormData,
  options?: saveOrUpdateOptions,
): saveOrUpdateResponse {
  const host = getEnvHost();
  const url = host + '/store/bo/store/activity/saveOrUpdate';
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
