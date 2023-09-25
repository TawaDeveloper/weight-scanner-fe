/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type departmentsPath = {
  /** roleId */
  roleId: number;
};
export type departmentsOptions = Record<string, any>;

export type departmentsResponse = Promise<
  defs.backoffice.Response<defs.backoffice.RoleDepDistributeDTO>
>;

/**
 * @desc 根据角色查询绑定的部门
 */
export function request(
  path: departmentsPath,
  options?: departmentsOptions,
): departmentsResponse {
  const host = getEnvHost();
  const url =
    host +
    '/backoffice/bo/role/assign/{roleId}/departments'.replace(
      /\{[\w]+\}/,
      String(path.roleId),
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
