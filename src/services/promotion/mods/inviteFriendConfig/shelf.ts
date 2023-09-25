/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type shelfBody = defs.promotion.InviteFriendConfigShelfReq;
export type shelfPath = {
  /** id */
  id: number;
};
export type shelfOptions = Record<string, any>;

export type shelfResponse = Promise<defs.promotion.Response<boolean>>;

/**
 * @desc shelf
 */
export function request(
  body: shelfBody,
  path: shelfPath,
  options?: shelfOptions,
): shelfResponse {
  const host = getEnvHost();
  const url =
    host +
    '/promotion/bo/inviteFriendConfig/detail/{id}/shelf'.replace(
      /\{[\w]+\}/,
      String(path.id),
    );
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
