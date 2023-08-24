/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type eventHandoutOpLogPath = {
  /** id */
  id: number;
};
export type eventHandoutOpLogOptions = Record<string, any>;

export type eventHandoutOpLogResponse = Promise<
  defs.promotion.Response<Array<defs.promotion.EventHandoutOpLogVO>>
>;

/**
 * @desc 自动发券启用/停用
 */
export function request(
  path: eventHandoutOpLogPath,
  options?: eventHandoutOpLogOptions,
): eventHandoutOpLogResponse {
  const host = getEnvHost();
  const url =
    host +
    '/promotion/bo/couponActivity/event/handout/detail/{id}/opLog'.replace(
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
