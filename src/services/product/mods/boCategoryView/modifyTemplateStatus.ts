/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type modifyTemplateStatusParam = {
  /** status */
  status?: number;

  /** templateId */
  templateId: number;
};
export type modifyTemplateStatusOptions = Record<string, any>;

export type modifyTemplateStatusResponse = Promise<defs.product.Response>;

/**
 * @desc 修改前台分类模板状态
 */
export function request(
  params: modifyTemplateStatusParam,
  options?: modifyTemplateStatusOptions,
): modifyTemplateStatusResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/categoryView/template/modifyStatus';
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
