/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type departmentsOptions = Record<string, any>;

export type departmentsResponse = Promise<defs.bakery.Response<Set<string>>>;

/**
       * @desc 查询部门
查询部门用于下拉列表
       */
export function request(options?: departmentsOptions): departmentsResponse {
  const host = getEnvHost();
  const url =
    host + '/bakery/hot-deli-bakery/api/statistics/common/departments';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
