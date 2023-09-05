/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type postSalesDataOptions = Record<string, any>;

export type postSalesDataResponse = Promise<ObjectMap<any, object>>;

/**
 * @desc 上传所有销售数据（耗时）
 */
export function request(options?: postSalesDataOptions): postSalesDataResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/sap/post_sales_data';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
