/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type postSalesPriceOptions = Record<string, any>;

export type postSalesPriceResponse = Promise<any>;

/**
 * @desc postSalesPrice
 */
export function request(
  options?: postSalesPriceOptions,
): postSalesPriceResponse {
  const host = getEnvHost();
  const url = host + '/hot-deli-bakery/sap/update_sales_price';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
