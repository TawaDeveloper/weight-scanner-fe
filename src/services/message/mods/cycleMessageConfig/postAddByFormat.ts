/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type postAddByFormatParam = {
  /** 每X天 */
  every?: number;

  /** 小时 */
  hour?: number;

  /** title */
  title?: string;

  /** 每天 */
  days?: Array<number>;

  /** 每周星期几 */
  weeks?: Array<number>;

  /** 发送内容类型(2:短信 3:邮件) */
  contentTypes?: Array<number>;

  /** 周期类型(1:按天 2:按周 3:按月) */
  cycleType: number;

  /** email内容 */
  content: string;

  /** 图片url */
  imgUrl?: string;

  /** 周期规则名称 */
  name: string;
};
export type postAddByFormatFormData = FormData;
export type postAddByFormatOptions = Record<string, any>;

export type postAddByFormatResponse = Promise<
  defs.message.Response<defs.message.CreateSiteMessageResponse>
>;

/**
 * @desc 新增消息(请注意参数是format-data格式)！！！【注意：这里在做的时候，请和后端沟通一下请求参数格式】！！！！
 */
export function request(
  params: postAddByFormatParam,
  formData: postAddByFormatFormData,
  options?: postAddByFormatOptions,
): postAddByFormatResponse {
  const host = getEnvHost();
  const url = host + '/message/bo/cycleMessage/addByFormat';
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
