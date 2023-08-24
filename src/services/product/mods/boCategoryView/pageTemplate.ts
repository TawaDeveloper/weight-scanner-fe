/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageTemplateBody = defs.product.TemplateRequest;
export type pageTemplateOptions = Record<string, any>;

export type pageTemplateResponse = Promise<
  defs.product.Response<defs.product.PageVO<defs.product.CategoryViewTemplate>>
>;

/**
 * @desc 分页查询前台分类模板
 */
export function request(
  body: pageTemplateBody,
  options?: pageTemplateOptions,
): pageTemplateResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/categoryView/template/page';
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
