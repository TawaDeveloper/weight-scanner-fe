/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateSequenceBody = defs.warehouse.BoUpdateShelfNodeSequenceVo;
export type updateSequenceOptions = Record<string, any>;

export type updateSequenceResponse = Promise<defs.warehouse.Response<void>>;

/**
       * @desc 更新排序
更新各级节点的排序
       */
export function request(
  body: updateSequenceBody,
  options?: updateSequenceOptions,
): updateSequenceResponse {
  const host = getEnvHost();
  const url = host + '/warehouse/bo/shelfNode/updateSequence';
  const fetchOption = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
