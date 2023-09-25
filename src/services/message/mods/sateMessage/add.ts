/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type addParam = {
  /** 内容 */
  content: string;

  /** 定时发送状态下的发送时间 */
  sendTime?: string;

  /** 发布类型(0:及时发布  1:定时发布) */
  sendType: number;

  /** 标题 */
  title: string;
};
export type addFormData = FormData;
export type addOptions = Record<string, any>;

export type addResponse = Promise<
  defs.message.Response<defs.message.CreateSiteMessageResponse>
>;

/**
 * @desc 新增消息(请注意参数是format-data格式)
 */
export function request(
  params: addParam,
  formData: addFormData,
  options?: addOptions,
): addResponse {
  const host = getEnvHost();
  const url = host + '/message/bo/message/site/add';
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
