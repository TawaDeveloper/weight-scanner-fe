/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pagePopupBody = defs.product.PopupReq;
export type pagePopupOptions = Record<string, any>;

export type pagePopupResponse = Promise<
  defs.product.Response<defs.product.PageInfo<defs.product.Popup>>
>;

/**
 * @desc 查询弹窗配置列表
 */
export function request(
  body: pagePopupBody,
  options?: pagePopupOptions,
): pagePopupResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/homePage/setting/popup/list';
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
