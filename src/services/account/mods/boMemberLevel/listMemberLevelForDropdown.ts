/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listMemberLevelForDropdownOptions = Record<string, any>;

export type listMemberLevelForDropdownResponse = Promise<
  defs.account.Response<Array<defs.account.DictionaryVO>>
>;

/**
 * @desc 查询会员等级下拉列表
 */
export function request(
  options?: listMemberLevelForDropdownOptions,
): listMemberLevelForDropdownResponse {
  const host = getEnvHost();
  const url = host + '/account/bo/member/level/dropdown/list';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
