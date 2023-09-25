/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type importStateParam = {
  /** categoryViewId */
  categoryViewId: number;
};
export type importStateFormData = FormData;
export type importStateOptions = Record<string, any>;

export type importStateResponse = Promise<
  defs.product.Response<defs.product.ImportVariantVO>
>;

/**
 * @desc 导入商品规格
 */
export function request(
  params: importStateParam,
  formData: importStateFormData,
  options?: importStateOptions,
): importStateResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/categoryView/variant/import';
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
