/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type importInventoryFormData = FormData;
export type importInventoryOptions = Record<string, any>;

export type importInventoryResponse = Promise<
  defs.warehouse.Response<ObjectMap>
>;

/**
       * @desc 导入商品库存
导入商品和库存信息
       */
export function request(
  formData: importInventoryFormData,
  options?: importInventoryOptions,
): importInventoryResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/inventory/import/inventory';
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
