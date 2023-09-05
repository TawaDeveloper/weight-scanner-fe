/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getPoDetailItemsForPageBody = defs.bakery.PoDetailItemDTO;
export type getPoDetailItemsForPageOptions = Record<string, any>;

export type getPoDetailItemsForPageResponse = Promise<
  defs.bakery.Response<defs.bakery.IPage<defs.bakery.PoDetailItem>>
>;

/**
 * @desc PO 单详情 - 分页查询商品
 */
export function request(
  body: getPoDetailItemsForPageBody,
  options?: getPoDetailItemsForPageOptions,
): getPoDetailItemsForPageResponse {
  const host = getEnvHost();
  console.log(host)
  const url = 'http://10.89.24.25:8080' + '/hot-deli-bakery/api/order/po/detail/items/page';
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
