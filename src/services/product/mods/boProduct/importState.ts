/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type importStateFormData = FormData;
export type importStateOptions = Record<string, any>;

export type importStateResponse = Promise<
  defs.product.Response<defs.product.ImportLimitResponse>
>;

/**
 * @desc 导入门店商品规格
 */
export function request(
  formData: importStateFormData,
  options?: importStateOptions,
): importStateResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/variant/import';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
