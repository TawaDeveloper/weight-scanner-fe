/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type editParam = {
  /** requestJson */
  requestJson?: string;
};
export type editFormData = FormData;
export type editOptions = Record<string, any>;

export type editResponse = Promise<
  defs.message.Response<defs.message.CreateSiteMessageResponse>
>;

/**
 * @desc 编辑消息(请注意参数是format-data格式)！！！【注意：这里在做的时候，请和后端沟通一下请求参数格式】！！！！
 */
export function request(
  params: editParam,
  formData: editFormData,
  options?: editOptions,
): editResponse {
  const host = getEnvHost();
  const url = host + '/message/bo/cycleMessage/edit';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    params,
    data: formData,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
