/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createOrEditPopupBody = defs.product.Popup;
export type createOrEditPopupOptions = Record<string, any>;

export type createOrEditPopupResponse = Promise<defs.product.Response>;

/**
 * @desc 新建/编辑弹窗
 */
export function request(
  body: createOrEditPopupBody,
  options?: createOrEditPopupOptions,
): createOrEditPopupResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/popup/createOrEdit';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
