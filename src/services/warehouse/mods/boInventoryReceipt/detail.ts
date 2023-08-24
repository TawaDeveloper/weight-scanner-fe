/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type detailParam = {
  /** page */
  page?: number;

  /** size */
  size?: number;
};
export type detailPath = {
  /** id */
  id: number;
};
export type detailOptions = Record<string, any>;

export type detailResponse = Promise<
  defs.warehouse.Response<
    defs.warehouse.IPage<defs.warehouse.BoInventoryReceiptDetailVo>
  >
>;

/**
 * @desc 查询出入库单据详情
 */
export function request(
  params: detailParam,
  path: detailPath,
  options?: detailOptions,
): detailResponse {
  const host = getEnvHost();
  const url =
    host +
    '/warehouse/bo/inventoryReceipt/detail/{id}'.replace(
      /\{[\w]+\}/,
      String(path.id),
    );
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
