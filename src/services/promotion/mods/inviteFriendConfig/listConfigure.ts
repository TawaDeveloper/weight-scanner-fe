/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type listConfigureBody =
  defs.promotion.PageReqDto<defs.promotion.InviteFriendConfigQueryConditionReq>;
export type listConfigureOptions = Record<string, any>;

export type listConfigureResponse = Promise<
  defs.promotion.Response<
    defs.promotion.Page<defs.promotion.InviteFriendConfigDto>
  >
>;

/**
 * @desc 查看列表(分页)
 */
export function request(
  body: listConfigureBody,
  options?: listConfigureOptions,
): listConfigureResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/inviteFriendConfig/list';
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
