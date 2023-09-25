/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type editVariantDetailBody = defs.product.VariantDetail;
export type editVariantDetailOptions = Record<string, any>;

export type editVariantDetailResponse = Promise<defs.product.Response>;

/**
 * @desc 编辑规格明细
 */
export function request(
  body: editVariantDetailBody,
  options?: editVariantDetailOptions,
): editVariantDetailResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/product/variantDetail/edit';
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
