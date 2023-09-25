/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type importShelfLocationParam = {
  /** warehouseId */
  warehouseId: number;
};
export type importShelfLocationFormData = FormData;
export type importShelfLocationOptions = Record<string, any>;

export type importShelfLocationResponse = Promise<
  defs.warehouse.Response<ObjectMap>
>;

/**
       * @desc 导入存货位
导入存货位，会返回导出成功和导入失败的数据
       */
export function request(
  params: importShelfLocationParam,
  formData: importShelfLocationFormData,
  options?: importShelfLocationOptions,
): importShelfLocationResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/shelfNode/import/shelfLocation';
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
