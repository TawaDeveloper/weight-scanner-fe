/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type editByFormatParam = {
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

  /** id */
  id: number;

  /** 周期规则名称 */
  name: string;
};
export type editByFormatFormData = FormData;
export type editByFormatOptions = Record<string, any>;

export type editByFormatResponse = Promise<
  defs.message.Response<defs.message.CreateSiteMessageResponse>
>;

/**
 * @desc 编辑消息(请注意参数是format-data格式)！！！
 */
export function request(
  params: editByFormatParam,
  formData: editByFormatFormData,
  options?: editByFormatOptions,
): editByFormatResponse {
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
