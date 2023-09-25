/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getCategoriesParam = {
  /** name */
  name: string;
};
export type getCategoriesOptions = Record<string, any>;

export type getCategoriesResponse = Promise<
  defs.product.Response<Array<defs.product.CategoryView>>
>;

/**
 * @desc 根据名字查询类目链
 */
export function request(
  params: getCategoriesParam,
  options?: getCategoriesOptions,
): getCategoriesResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/categoryView/name';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
