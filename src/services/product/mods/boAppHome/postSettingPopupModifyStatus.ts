/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type postSettingPopupModifyStatusParam = {
  /** id */
  id: number;

  /** status */
  status: number;
};
export type postSettingPopupModifyStatusOptions = Record<string, any>;

export type postSettingPopupModifyStatusResponse =
  Promise<defs.product.Response>;

/**
 * @desc 修改弹窗状态
 */
export function request(
  params: postSettingPopupModifyStatusParam,
  options?: postSettingPopupModifyStatusOptions,
): postSettingPopupModifyStatusResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/popup/modifyStatus';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
