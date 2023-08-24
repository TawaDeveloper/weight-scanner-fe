/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type importShelfNodeParam = {
  /** warehouseId */
  warehouseId: number;
};
export type importShelfNodeFormData = FormData;
export type importShelfNodeOptions = Record<string, any>;

export type importShelfNodeResponse = Promise<
  defs.warehouse.Response<ObjectMap>
>;

/**
       * @desc 导入货架
导入货架，会返回导出成功和导入失败的数据
       */
export function request(
  params: importShelfNodeParam,
  formData: importShelfNodeFormData,
  options?: importShelfNodeOptions,
): importShelfNodeResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/shelfNode/import/shelfNode';
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
