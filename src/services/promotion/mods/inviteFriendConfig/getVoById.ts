/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getVoByIdPath = {
  /** id */
  id: number;
};
export type getVoByIdOptions = Record<string, any>;

export type getVoByIdResponse = Promise<
  defs.promotion.Response<defs.promotion.InviteFriendConfigDto>
>;

/**
 * @desc 查看配置
 */
export function request(
  path: getVoByIdPath,
  options?: getVoByIdOptions,
): getVoByIdResponse {
  const host = getEnvHost();
  const url =
    host +
    '/promotion/bo/inviteFriendConfig/detail/{id}'.replace(
      /\{[\w]+\}/,
      String(path.id),
    );
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
