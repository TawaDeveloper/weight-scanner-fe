/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type importProductsFormData = FormData;
export type importProductsOptions = Record<string, any>;

export type importProductsResponse = Promise<
  defs.promotion.Response<defs.promotion.UploadProductRsp>
>;

/**
 * @desc 导入优惠券商品数据
 */
export function request(
  formData: importProductsFormData,
  options?: importProductsOptions,
): importProductsResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/couponActivity/detail/product/import';
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
