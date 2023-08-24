/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type importRoleFormData = FormData;
export type importRoleOptions = Record<string, any>;

export type importRoleResponse = Promise<defs.backoffice.Response>;

/**
 * @desc 导入角色数据
 */
export function request(
  formData: importRoleFormData,
  options?: importRoleOptions,
): importRoleResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/role/template/import';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
