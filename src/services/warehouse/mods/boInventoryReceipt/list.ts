/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listParam = {
  /** category */
  category: number;

  /** endTime */
  endTime?: string;

  /** locationNo */
  locationNo?: string;

  /** page */
  page?: number;

  /** productName */
  productName?: string;

  /** receiptNo */
  receiptNo?: string;

  /** size */
  size?: number;

  /** startTime */
  startTime?: string;

  /** upc */
  upc?: string;

  /** userName */
  userName?: string;

  /** wmsId */
  wmsId?: number;
};
export type listOptions = Record<string, any>;

export type listResponse = Promise<
  defs.warehouse.Response<
    defs.warehouse.IPage<defs.warehouse.BoInventoryReceiptVo>
  >
>;

/**
 * @desc 查询出入库单据
 */
export function request(
  params: listParam,
  options?: listOptions,
): listResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/inventoryReceipt/list';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
