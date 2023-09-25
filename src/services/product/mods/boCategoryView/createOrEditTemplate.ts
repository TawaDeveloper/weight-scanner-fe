/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createOrEditTemplateBody = defs.product.CategoryViewTemplate;
export type createOrEditTemplateOptions = Record<string, any>;

export type createOrEditTemplateResponse = Promise<defs.product.Response>;

/**
 * @desc 新增或编辑前台分类模板
 */
export function request(
  body: createOrEditTemplateBody,
  options?: createOrEditTemplateOptions,
): createOrEditTemplateResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/categoryView/template/createOrEdit';
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
