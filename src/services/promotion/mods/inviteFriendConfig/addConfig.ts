/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type addConfigBody = defs.promotion.InviteFriendConfigDto;
export type addConfigOptions = Record<string, any>;

export type addConfigResponse = Promise<defs.promotion.Response<boolean>>;

/**
 * @desc 新增配置
 */
export function request(
  body: addConfigBody,
  options?: addConfigOptions,
): addConfigResponse {
  const host = getEnvHost();
  const url = host + '/promotion/bo/inviteFriendConfig';
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
