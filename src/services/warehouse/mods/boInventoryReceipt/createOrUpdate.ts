/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createOrUpdateBody = defs.warehouse.BoCreateInventoryReceiptVo;
export type createOrUpdateOptions = Record<string, any>;

export type createOrUpdateResponse = Promise<defs.warehouse.Response<void>>;

/**
 * @desc 增加或修改出入库单据
 */
export function request(
  body: createOrUpdateBody,
  options?: createOrUpdateOptions,
): createOrUpdateResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/inventoryReceipt/createOrUpdate';
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
