/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type importProductFormData = FormData;
export type importProductOptions = Record<string, any>;

export type importProductResponse = Promise<defs.promotion.Response<void>>;

/**
       * @desc 上传商品信息
上传商品信息，用于上传活动商品
       */
export function request(
  formData: importProductFormData,
  options?: importProductOptions,
): importProductResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/file/import/product';
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
