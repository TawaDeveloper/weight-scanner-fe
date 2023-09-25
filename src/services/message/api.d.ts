type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace message {
    export class AddSmsReplyRequest {
      /** 短信内容 */
      content: string;

      /** 图片url */
      imgUrl?: string;

      /** 关键词 */
      keywordList: Array<string>;
    }

    export class AuditSiteMessageRequest {
      /** 审核意见 */
      auditOpinion: string;

      /** 审核状态(0:待审核 1:审核通过 2:审核拒绝) */
      auditStatus: number;

      /** 消息id */
      id: number;
    }

    export class ByDay {
      /** 每X天 */
      every?: number;

      /** 小时 */
      hour?: number;

      /** title */
      title?: string;
    }

    export class ByMouth {
      /** 每天 */
      days?: Array<number>;

      /** 每X月 */
      every?: number;

      /** 小时 */
      hour?: number;

      /** title */
      title?: string;
    }

    export class ByWeek {
      /** 每X周 */
      every?: number;

      /** 小时 */
      hour?: number;

      /** title */
      title?: string;

      /** 每周星期几 */
      weeks?: Array<number>;
    }

    export class CreateSiteMessageResponse {
      /** 导入失败的数量 */
      failNum?: number;

      /** 请求导入失败的id */
      requestErrorId?: string;

      /** 导入成功的数量 */
      successNum?: number;
    }

    export class ExportSmsReplyDetailRequest {
      /** 接收到用户回复的手机号 */
      receivePhone?: string;

      /** 配置id */
      smsReplyConfigId: number;
    }

    export class FSNRLXEmal {
      /** email内容 */
      content: string;

      /** 图片url */
      imgUrl?: string;

      /** email标题 */
      title: string;
    }

    export class GetCreateCycleMessageResponse {
      /** 周期类型(1:按天) */
      byDay?: defs.message.ByDay;

      /** 周期类型(3:按月) */
      byMouth?: defs.message.ByMouth;

      /** 周期类型(2:按周) */
      byWeek?: defs.message.ByWeek;

      /** 发送内容类型(2:短信 3:邮件) */
      contentTypes?: Array<number>;

      /** 周期类型(1:按天 2:按周 3:按月) */
      cycleType: number;

      /** Email内容 */
      email?: defs.message.FSNRLXEmal;

      /** id */
      id: number;

      /** 周期规则名称 */
      name: string;

      /** 短信内容 */
      sms?: defs.message.Sms;
    }

    export class GetMessageResponse {
      /** 审核人 */
      auditBy?: number;

      /** 审核人姓名 */
      auditByName?: string;

      /** 审核意见 */
      auditOpinion?: string;

      /** 审核状态(0:待审核 1:审核通过 2:审核拒绝) */
      auditStatus?: number;

      /** 审核时间 */
      auditTime?: string;

      /** 内容 */
      content?: string;

      /** id */
      id?: number;

      /** 发送状态(0:待发送 1:已发送) */
      sendStatus?: number;

      /** 定时发送状态下的发送时间 */
      sendTime?: string;

      /** 发送对象总数 */
      sendTotal?: number;

      /** 发布类型(0:及时发布  1:定时发布) */
      sendType?: number;

      /** 发起人 */
      submitBy?: number;

      /** 发起人姓名 */
      submitByName?: string;

      /** 提交时间 */
      submitTime?: string;

      /** 标题 */
      title?: string;
    }

    export class MessageStateRequest {
      /** 审核人 */
      auditByName?: string;

      /** 审核状态(null:全部 0:待审核 1:审核通过 2:审核拒绝) */
      auditStatus?: number;

      /** 内容 */
      content?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 发起人 */
      submitByName?: string;

      /** 结束提交时间 */
      submitTimeEnd?: string;

      /** 开始提交时间 */
      submitTimeStart?: string;

      /** 标题 */
      title?: string;
    }

    export class MessageStateResponse {
      /** 全部数量 */
      allTotal?: number;

      /** 已审核数量 */
      alreadyTotal?: number;

      /** 待审核数量 */
      awaitTotal?: number;

      /** 已拒绝数量 */
      refuseTotal?: number;
    }

    export class PageInfo<T0 = any> {
      /** endRow */
      endRow?: number;

      /** hasNextPage */
      hasNextPage?: boolean;

      /** hasPreviousPage */
      hasPreviousPage?: boolean;

      /** isFirstPage */
      isFirstPage?: boolean;

      /** isLastPage */
      isLastPage?: boolean;

      /** list */
      list?: Array<T0>;

      /** navigateFirstPage */
      navigateFirstPage?: number;

      /** navigateLastPage */
      navigateLastPage?: number;

      /** navigatePages */
      navigatePages?: number;

      /** navigatepageNums */
      navigatepageNums?: Array<number>;

      /** nextPage */
      nextPage?: number;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** pages */
      pages?: number;

      /** prePage */
      prePage?: number;

      /** size */
      size?: number;

      /** startRow */
      startRow?: number;

      /** total */
      total?: number;
    }

    export class QueryAppUserMessageGroupResponse {
      /** thisMonth */
      thisMonth?: Array<defs.message.QueryAppUserMessageResponse>;

      /** thisMonthBefore */
      thisMonthBefore?: Array<defs.message.QueryAppUserMessageResponse>;

      /** thisWeek */
      thisWeek?: Array<defs.message.QueryAppUserMessageResponse>;

      /** today */
      today?: Array<defs.message.QueryAppUserMessageResponse>;
    }

    export class QueryAppUserMessageRequest {
      /** 内容 */
      body?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 阅读状态(未读:UNREAD 已读:READ) */
      readStatus?: 'UNREAD' | 'READ';

      /** 标题 */
      title?: string;

      /** 消息类型(后台创建的消息:PROMOTION_MESSAGE  订单状态变更消息:ORDER_UPDATE 系统通知消息:SYSTEM_NOTICE) */
      type?: 'PROMOTION_MESSAGE' | 'ORDER_UPDATE' | 'SYSTEM_NOTICE';
    }

    export class QueryAppUserMessageResponse {
      /** 消息body */
      body?: string;

      /** id */
      id?: number;

      /** 跳转页面url */
      jumpUrl?: string;

      /** 消息类型(后台创建的消息:PROMOTION_MESSAGE  订单状态变更消息:ORDER_UPDATE  系统通知消息(评论审核/到货通知/会员等级变更/积分到期...): SYSTEM_NOTICE) */
      msgType?: 'PROMOTION_MESSAGE' | 'ORDER_UPDATE' | 'SYSTEM_NOTICE';

      /** 阅读状态(未读:UNREAD 已读:READ) */
      status?: 'UNREAD' | 'READ';

      /** 已经发生时间(1h  1d  3d) */
      timeDesc?: string;

      /** 消息title */
      title?: string;
    }

    export class QueryBoUserMessageRequest {
      /** 消息类型(审核消息:AUDIT  通知消息:NOTIFY) */
      msgType?: 'AUDIT' | 'NOTIFY';

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;
    }

    export class QueryBoUserMessageResponse {
      /** 消息内容 */
      content?: string;

      /** 创建时间 */
      createdTime?: string;

      /** 时间(格式1: 12/12/2020 20:18 ; 格式2: 6天前 ; 格式3: 2个月前 ; 格式3: 1年前) */
      createdTimeFormat?: string;

      /** id */
      id?: number;

      /** 跳转页面url */
      jumpUrl?: string;

      /** 消息类型(审核消息:AUDIT  通知消息:NOTIFY) */
      msgType?: 'AUDIT' | 'NOTIFY';

      /** 阅读状态(未读:UNREAD 已读:READ) */
      status?: 'UNREAD' | 'READ';

      /** 用户id */
      userId?: number;

      /** 用户姓名 */
      userName?: string;
    }

    export class QueryCycleMessageRequest {
      /** 可用状态(0:禁用 1:启用) */
      availableStatus?: number;

      /** 名称 */
      name?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;
    }

    export class QueryCycleMessageResponse {
      /** 可用状态(0:禁用 1:启用) */
      availableStatus?: number;

      /** id */
      id?: number;

      /** 发送规则名称 */
      name?: string;

      /** 周期规则(周期时间描述) */
      ruleTimeDesc?: string;

      /** 更新人姓名 */
      updatedByName?: string;

      /** 更新时间 */
      updatedTime?: string;
    }

    export class QuerySiteMessageResponse {
      /** 审核人 */
      auditByName?: string;

      /** 审核意见 */
      auditOpinion?: string;

      /** 审核状态(0:待审核 1:审核通过 2:审核拒绝) */
      auditStatus?: number;

      /** 审核时间 */
      auditTime?: string;

      /** 内容 */
      content?: string;

      /** id */
      id?: number;

      /** 短信投送率 */
      receivedRate?: number;

      /** 发送状态(0:待发送 1:已发送) */
      sendStatus?: number;

      /** 发送对象总数 */
      sendTotal?: number;

      /** 发起人 */
      submitByName?: string;

      /** 提交时间 */
      submitTime?: string;

      /** 标题 */
      title?: string;
    }

    export class QuerySmsReplyDetailRequest {
      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 接收到用户回复的手机号 */
      receivePhone?: string;

      /** 配置id */
      smsReplyConfigId: number;
    }

    export class QuerySmsReplyDetailResponse {
      /** 接收到用户回复的内容 */
      receiveContent?: string;

      /** 接收到用户回复的手机号 */
      receivePhone?: string;

      /** 接收到用户回复的时间 */
      receiveTime?: string;

      /** 系统自动发送的内容 */
      sendContent?: string;

      /** 系统自动发送的时间 */
      sendTime?: string;

      /** ms_reply_config表id */
      smsReplyConfigId?: number;
    }

    export class QuerySmsReplyRequest {
      /** 可用状态(0:禁用 1:启用) */
      availableStatus?: number;

      /** 回复的消息内容 */
      content?: string;

      /** 关键词 */
      keyword?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;
    }

    export class QuerySmsReplyResponse {
      /** 可用状态(0:禁用 1:启用) */
      availableStatus?: number;

      /** 消息内容 */
      content?: string;

      /** id */
      id?: number;

      /** 图片url */
      imgUrl?: string;

      /** 关键词 */
      keyword?: string;

      /** 更新人 */
      updatedByName?: string;

      /** 更新时间 */
      updatedTime?: string;
    }

    export class ReadAllMessageRequest {
      /** 消息类型,如果传null,表示标记所有消息为已读状态(后台创建的消息:PROMOTION_MESSAGE  订单状态变更消息:ORDER_UPDATE 系统通知消息:SYSTEM_NOTICE) */
      type?: 'PROMOTION_MESSAGE' | 'ORDER_UPDATE' | 'SYSTEM_NOTICE';
    }

    export class Response<T0 = any> {
      /** 状态码：0-成功 */
      code?: number;

      /** 响应数据 */
      data?: T0;

      /** 状态描述 */
      message?: string;

      /** success */
      success?: boolean;
    }

    export class Sms {
      /** 短信内容 */
      content: string;

      /** 图片url */
      imgUrl?: string;
    }

    export class UpdateSmsReplyDto {
      /** 短信内容 */
      content: string;

      /** id */
      id: number;

      /** 图片url */
      imgUrl?: string;

      /** 关键词 */
      keywordList: Array<string>;
    }

    export class UpdateStatusRequest {
      /** 可用状态(0:禁用 1:启用) */
      availableStatus: number;

      /** id */
      id: number;
    }

    export class UserNoticeSettingDTO {
      /** 应用通知开关 */
      app?: boolean;

      /** 邮件通知开关 */
      email?: boolean;

      /** 短信通知开关 */
      sms?: boolean;
    }

    export class UserNoticeSettingVO {
      /** 应用通知开关 */
      app?: boolean;

      /** 邮件通知开关 */
      email?: boolean;

      /** 短信通知开关 */
      sms?: boolean;
    }
  }
}

declare namespace API {
  export namespace message {
    /**
     * BO端,用户消息通知接口
     */
    export namespace boUserMessage {
      /**
       * 查询列表
       * /bo/user/message/list
       */
      export namespace list {
        export type listBody = defs.message.QueryBoUserMessageRequest;
        export type listOptions = Record<string, any>;
        export type listResponse = defs.message.Response<
          defs.message.PageInfo<defs.message.QueryBoUserMessageResponse>
        >;
        export type request = (
          body: listBody,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 标记消息为已读状态
       * /bo/user/message/read/{id}
       */
      export namespace read {
        export type readPath = {
          /** id */
          id: number;
        };
        export type readOptions = Record<string, any>;
        export type readResponse = defs.message.Response<void>;
        export type request = (
          path: readPath,
          options?: readOptions,
        ) => readResponse;
      }

      /**
       * 统计未读消息总数
       * /bo/user/message/total
       */
      export namespace total {
        export type totalOptions = Record<string, any>;
        export type totalResponse = defs.message.Response<number>;
        export type request = (options?: totalOptions) => totalResponse;
      }

      /**
       * 标记所有消息为已读状态(消息类型(审核消息:AUDIT  通知消息:NOTIFY))
       * /bo/user/message/{type}/readAll
       */
      export namespace readAll {
        export type readAllPath = {
          /** type */
          type: 'AUDIT' | 'NOTIFY';
        };
        export type readAllOptions = Record<string, any>;
        export type readAllResponse = defs.message.Response<void>;
        export type request = (
          path: readAllPath,
          options?: readAllOptions,
        ) => readAllResponse;
      }
    }

    /**
     * bo端,周期消息
     */
    export namespace cycleMessageConfig {
      /**
       * 新增消息(请注意参数是format-data格式)
       * /bo/cycleMessage/add
       */
      export namespace add {
        export type addParam = {
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
        export type addFormData = FormData;
        export type addOptions = Record<string, any>;
        export type addResponse =
          defs.message.Response<defs.message.CreateSiteMessageResponse>;
        export type request = (
          params: addParam,
          formData: addFormData,
          options?: addOptions,
        ) => addResponse;
      }

      /**
       * 编辑消息(请注意参数是format-data格式)！！！
       * /bo/cycleMessage/edit
       */
      export namespace editByFormat {
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
        export type editByFormatResponse =
          defs.message.Response<defs.message.CreateSiteMessageResponse>;
        export type request = (
          params: editByFormatParam,
          formData: editByFormatFormData,
          options?: editByFormatOptions,
        ) => editByFormatResponse;
      }

      /**
       * 导出含有错误信息的Excel表格
       * /bo/cycleMessage/export/error/{requestErrorId}
       */
      export namespace exportError {
        export type exportErrorPath = {
          /** requestErrorId */
          requestErrorId: string;
        };
        export type exportErrorOptions = Record<string, any>;
        export type exportErrorResponse = any;
        export type request = (
          path: exportErrorPath,
          options?: exportErrorOptions,
        ) => exportErrorResponse;
      }

      /**
       * 导出推送消息的用户的表格
       * /bo/cycleMessage/export/user/{messageId}
       */
      export namespace exportUser {
        export type exportUserPath = {
          /** messageId */
          messageId: number;
        };
        export type exportUserOptions = Record<string, any>;
        export type exportUserResponse = any;
        export type request = (
          path: exportUserPath,
          options?: exportUserOptions,
        ) => exportUserResponse;
      }

      /**
       * 查询列表
       * /bo/cycleMessage/list
       */
      export namespace list {
        export type listBody = defs.message.QueryCycleMessageRequest;
        export type listOptions = Record<string, any>;
        export type listResponse = defs.message.Response<
          defs.message.PageInfo<defs.message.QueryCycleMessageResponse>
        >;
        export type request = (
          body: listBody,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 模板下载
       * /bo/cycleMessage/template
       */
      export namespace template {
        export type templateOptions = Record<string, any>;
        export type templateResponse = any;
        export type request = (options?: templateOptions) => templateResponse;
      }

      /**
       * 更新状态
       * /bo/cycleMessage/updateStatus
       */
      export namespace updateStatus {
        export type updateStatusBody = defs.message.UpdateStatusRequest;
        export type updateStatusOptions = Record<string, any>;
        export type updateStatusResponse = defs.message.Response<void>;
        export type request = (
          body: updateStatusBody,
          options?: updateStatusOptions,
        ) => updateStatusResponse;
      }

      /**
       * 查询详情
       * /bo/cycleMessage/{id}
       */
      export namespace get {
        export type getPath = {
          /** id */
          id: number;
        };
        export type getOptions = Record<string, any>;
        export type getResponse =
          defs.message.Response<defs.message.GetCreateCycleMessageResponse>;
        export type request = (
          path: getPath,
          options?: getOptions,
        ) => getResponse;
      }
    }

    /**
     * bo端,Email消息接口
     */
    export namespace emailMessage {
      /**
       * 新增消息(请注意参数是format-data格式)
       * /bo/message/email/add
       */
      export namespace add {
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
        export type addResponse =
          defs.message.Response<defs.message.CreateSiteMessageResponse>;
        export type request = (
          params: addParam,
          formData: addFormData,
          options?: addOptions,
        ) => addResponse;
      }

      /**
       * 审核消息
       * /bo/message/email/audit
       */
      export namespace audit {
        export type auditBody = defs.message.AuditSiteMessageRequest;
        export type auditOptions = Record<string, any>;
        export type auditResponse = defs.message.Response<void>;
        export type request = (
          body: auditBody,
          options?: auditOptions,
        ) => auditResponse;
      }

      /**
       * 查询自动审核状态(true:开启自动审核 false:关闭自动审核)
       * /bo/message/email/autoAuditStatus
       */
      export namespace autoAuditStatus {
        export type autoAuditStatusOptions = Record<string, any>;
        export type autoAuditStatusResponse = defs.message.Response<boolean>;
        export type request = (
          options?: autoAuditStatusOptions,
        ) => autoAuditStatusResponse;
      }

      /**
       * 设置自动审核状态
       * /bo/message/email/autoAuditStatus/{status}
       */
      export namespace setAutoAuditStatus {
        export type setAutoAuditStatusPath = {
          /** 自动审核的状态 */
          status: boolean;
        };
        export type setAutoAuditStatusOptions = Record<string, any>;
        export type setAutoAuditStatusResponse = defs.message.Response<void>;
        export type request = (
          path: setAutoAuditStatusPath,
          options?: setAutoAuditStatusOptions,
        ) => setAutoAuditStatusResponse;
      }

      /**
       * 导出含有错误信息的Excel表格
       * /bo/message/email/export/error/{requestErrorId}
       */
      export namespace exportError {
        export type exportErrorPath = {
          /** requestErrorId */
          requestErrorId: string;
        };
        export type exportErrorOptions = Record<string, any>;
        export type exportErrorResponse = any;
        export type request = (
          path: exportErrorPath,
          options?: exportErrorOptions,
        ) => exportErrorResponse;
      }

      /**
       * 导出推送消息的用户的表格
       * /bo/message/email/export/user/{messageId}
       */
      export namespace exportUser {
        export type exportUserPath = {
          /** messageId */
          messageId: number;
        };
        export type exportUserOptions = Record<string, any>;
        export type exportUserResponse = any;
        export type request = (
          path: exportUserPath,
          options?: exportUserOptions,
        ) => exportUserResponse;
      }

      /**
       * 查询消息列表
       * /bo/message/email/list
       */
      export namespace list {
        export type listBody = defs.message.MessageStateRequest;
        export type listOptions = Record<string, any>;
        export type listResponse = defs.message.Response<
          defs.message.PageInfo<defs.message.QuerySiteMessageResponse>
        >;
        export type request = (
          body: listBody,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 消息统计
       * /bo/message/email/stat
       */
      export namespace stat {
        export type statBody = defs.message.MessageStateRequest;
        export type statOptions = Record<string, any>;
        export type statResponse =
          defs.message.Response<defs.message.MessageStateResponse>;
        export type request = (
          body: statBody,
          options?: statOptions,
        ) => statResponse;
      }

      /**
       * 模板下载
       * /bo/message/email/template
       */
      export namespace template {
        export type templateOptions = Record<string, any>;
        export type templateResponse = any;
        export type request = (options?: templateOptions) => templateResponse;
      }

      /**
       * 查询消息详情
       * /bo/message/email/{id}
       */
      export namespace get {
        export type getPath = {
          /** id */
          id: number;
        };
        export type getOptions = Record<string, any>;
        export type getResponse =
          defs.message.Response<defs.message.GetMessageResponse>;
        export type request = (
          path: getPath,
          options?: getOptions,
        ) => getResponse;
      }
    }

    /**
     * bo端,站内消息接口
     */
    export namespace sateMessage {
      /**
       * 新增消息(请注意参数是format-data格式)
       * /bo/message/site/add
       */
      export namespace add {
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
        export type addResponse =
          defs.message.Response<defs.message.CreateSiteMessageResponse>;
        export type request = (
          params: addParam,
          formData: addFormData,
          options?: addOptions,
        ) => addResponse;
      }

      /**
       * 审核消息
       * /bo/message/site/audit
       */
      export namespace audit {
        export type auditBody = defs.message.AuditSiteMessageRequest;
        export type auditOptions = Record<string, any>;
        export type auditResponse = defs.message.Response<void>;
        export type request = (
          body: auditBody,
          options?: auditOptions,
        ) => auditResponse;
      }

      /**
       * 查询自动审核状态(true:开启自动审核 false:关闭自动审核)
       * /bo/message/site/autoAuditStatus
       */
      export namespace autoAuditStatus {
        export type autoAuditStatusOptions = Record<string, any>;
        export type autoAuditStatusResponse = defs.message.Response<boolean>;
        export type request = (
          options?: autoAuditStatusOptions,
        ) => autoAuditStatusResponse;
      }

      /**
       * 设置自动审核状态
       * /bo/message/site/autoAuditStatus/{status}
       */
      export namespace setAutoAuditStatus {
        export type setAutoAuditStatusPath = {
          /** 自动审核的状态 */
          status: boolean;
        };
        export type setAutoAuditStatusOptions = Record<string, any>;
        export type setAutoAuditStatusResponse = defs.message.Response<void>;
        export type request = (
          path: setAutoAuditStatusPath,
          options?: setAutoAuditStatusOptions,
        ) => setAutoAuditStatusResponse;
      }

      /**
       * 导出含有错误信息的Excel表格
       * /bo/message/site/export/error/{requestErrorId}
       */
      export namespace exportError {
        export type exportErrorPath = {
          /** requestErrorId */
          requestErrorId: string;
        };
        export type exportErrorOptions = Record<string, any>;
        export type exportErrorResponse = any;
        export type request = (
          path: exportErrorPath,
          options?: exportErrorOptions,
        ) => exportErrorResponse;
      }

      /**
       * 导出推送消息的用户的表格
       * /bo/message/site/export/user/{messageId}
       */
      export namespace exportUser {
        export type exportUserPath = {
          /** messageId */
          messageId: number;
        };
        export type exportUserOptions = Record<string, any>;
        export type exportUserResponse = any;
        export type request = (
          path: exportUserPath,
          options?: exportUserOptions,
        ) => exportUserResponse;
      }

      /**
       * 查询消息列表
       * /bo/message/site/list
       */
      export namespace list {
        export type listBody = defs.message.MessageStateRequest;
        export type listOptions = Record<string, any>;
        export type listResponse = defs.message.Response<
          defs.message.PageInfo<defs.message.QuerySiteMessageResponse>
        >;
        export type request = (
          body: listBody,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 消息统计
       * /bo/message/site/stat
       */
      export namespace stat {
        export type statBody = defs.message.MessageStateRequest;
        export type statOptions = Record<string, any>;
        export type statResponse =
          defs.message.Response<defs.message.MessageStateResponse>;
        export type request = (
          body: statBody,
          options?: statOptions,
        ) => statResponse;
      }

      /**
       * 模板下载
       * /bo/message/site/template
       */
      export namespace template {
        export type templateOptions = Record<string, any>;
        export type templateResponse = any;
        export type request = (options?: templateOptions) => templateResponse;
      }

      /**
       * 查询消息详情
       * /bo/message/site/{id}
       */
      export namespace get {
        export type getPath = {
          /** id */
          id: number;
        };
        export type getOptions = Record<string, any>;
        export type getResponse =
          defs.message.Response<defs.message.GetMessageResponse>;
        export type request = (
          path: getPath,
          options?: getOptions,
        ) => getResponse;
      }
    }

    /**
     * bo端,短信消息接口
     */
    export namespace smsMessage {
      /**
       * 新增消息(请注意参数是format-data格式)
       * /bo/message/sms/add
       */
      export namespace add {
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
        export type addResponse =
          defs.message.Response<defs.message.CreateSiteMessageResponse>;
        export type request = (
          params: addParam,
          formData: addFormData,
          options?: addOptions,
        ) => addResponse;
      }

      /**
       * 审核消息
       * /bo/message/sms/audit
       */
      export namespace audit {
        export type auditBody = defs.message.AuditSiteMessageRequest;
        export type auditOptions = Record<string, any>;
        export type auditResponse = defs.message.Response<void>;
        export type request = (
          body: auditBody,
          options?: auditOptions,
        ) => auditResponse;
      }

      /**
       * 查询自动审核状态(true:开启自动审核 false:关闭自动审核)
       * /bo/message/sms/autoAuditStatus
       */
      export namespace autoAuditStatus {
        export type autoAuditStatusOptions = Record<string, any>;
        export type autoAuditStatusResponse = defs.message.Response<boolean>;
        export type request = (
          options?: autoAuditStatusOptions,
        ) => autoAuditStatusResponse;
      }

      /**
       * 设置自动审核状态
       * /bo/message/sms/autoAuditStatus/{status}
       */
      export namespace setAutoAuditStatus {
        export type setAutoAuditStatusPath = {
          /** 自动审核的状态 */
          status: boolean;
        };
        export type setAutoAuditStatusOptions = Record<string, any>;
        export type setAutoAuditStatusResponse = defs.message.Response<void>;
        export type request = (
          path: setAutoAuditStatusPath,
          options?: setAutoAuditStatusOptions,
        ) => setAutoAuditStatusResponse;
      }

      /**
       * 导出含有错误信息的Excel表格
       * /bo/message/sms/export/error/{requestErrorId}
       */
      export namespace exportError {
        export type exportErrorPath = {
          /** requestErrorId */
          requestErrorId: string;
        };
        export type exportErrorOptions = Record<string, any>;
        export type exportErrorResponse = any;
        export type request = (
          path: exportErrorPath,
          options?: exportErrorOptions,
        ) => exportErrorResponse;
      }

      /**
       * 导出推送消息的用户的表格
       * /bo/message/sms/export/user/{messageId}
       */
      export namespace exportUser {
        export type exportUserPath = {
          /** messageId */
          messageId: number;
        };
        export type exportUserOptions = Record<string, any>;
        export type exportUserResponse = any;
        export type request = (
          path: exportUserPath,
          options?: exportUserOptions,
        ) => exportUserResponse;
      }

      /**
       * 查询消息列表
       * /bo/message/sms/list
       */
      export namespace list {
        export type listBody = defs.message.MessageStateRequest;
        export type listOptions = Record<string, any>;
        export type listResponse = defs.message.Response<
          defs.message.PageInfo<defs.message.QuerySiteMessageResponse>
        >;
        export type request = (
          body: listBody,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 消息统计
       * /bo/message/sms/stat
       */
      export namespace stat {
        export type statBody = defs.message.MessageStateRequest;
        export type statOptions = Record<string, any>;
        export type statResponse =
          defs.message.Response<defs.message.MessageStateResponse>;
        export type request = (
          body: statBody,
          options?: statOptions,
        ) => statResponse;
      }

      /**
       * 模板下载
       * /bo/message/sms/template
       */
      export namespace template {
        export type templateOptions = Record<string, any>;
        export type templateResponse = any;
        export type request = (options?: templateOptions) => templateResponse;
      }

      /**
       * 查询消息详情
       * /bo/message/sms/{id}
       */
      export namespace get {
        export type getPath = {
          /** id */
          id: number;
        };
        export type getOptions = Record<string, any>;
        export type getResponse =
          defs.message.Response<defs.message.GetMessageResponse>;
        export type request = (
          path: getPath,
          options?: getOptions,
        ) => getResponse;
      }
    }

    /**
     * bo端,主动回复消息
     */
    export namespace smsReplyConfig {
      /**
       * 新增配置
       * /bo/sms/reply/add
       */
      export namespace add {
        export type addBody = defs.message.AddSmsReplyRequest;
        export type addOptions = Record<string, any>;
        export type addResponse = defs.message.Response<number>;
        export type request = (
          body: addBody,
          options?: addOptions,
        ) => addResponse;
      }

      /**
       * 查看触发明细
       * /bo/sms/reply/details
       */
      export namespace details {
        export type detailsBody = defs.message.QuerySmsReplyDetailRequest;
        export type detailsOptions = Record<string, any>;
        export type detailsResponse = defs.message.Response<
          defs.message.PageInfo<defs.message.QuerySmsReplyDetailResponse>
        >;
        export type request = (
          body: detailsBody,
          options?: detailsOptions,
        ) => detailsResponse;
      }

      /**
       * 触发明细导出
       * /bo/sms/reply/details/export
       */
      export namespace detailsExport {
        export type detailsExportBody =
          defs.message.ExportSmsReplyDetailRequest;
        export type detailsExportOptions = Record<string, any>;
        export type detailsExportResponse = any;
        export type request = (
          body: detailsExportBody,
          options?: detailsExportOptions,
        ) => detailsExportResponse;
      }

      /**
       * 查询短信回复管理列表
       * /bo/sms/reply/list
       */
      export namespace list {
        export type listBody = defs.message.QuerySmsReplyRequest;
        export type listOptions = Record<string, any>;
        export type listResponse = defs.message.Response<
          defs.message.PageInfo<defs.message.QuerySmsReplyResponse>
        >;
        export type request = (
          body: listBody,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 更新配置
       * /bo/sms/reply/update
       */
      export namespace update {
        export type updateBody = defs.message.UpdateSmsReplyDto;
        export type updateOptions = Record<string, any>;
        export type updateResponse = defs.message.Response<void>;
        export type request = (
          body: updateBody,
          options?: updateOptions,
        ) => updateResponse;
      }

      /**
       * 更新状态
       * /bo/sms/reply/updateStatus
       */
      export namespace updateStatus {
        export type updateStatusBody = defs.message.UpdateStatusRequest;
        export type updateStatusOptions = Record<string, any>;
        export type updateStatusResponse = defs.message.Response<void>;
        export type request = (
          body: updateStatusBody,
          options?: updateStatusOptions,
        ) => updateStatusResponse;
      }

      /**
       * 查看详情
       * /bo/sms/reply/{id}
       */
      export namespace get {
        export type getPath = {
          /** id */
          id: number;
        };
        export type getOptions = Record<string, any>;
        export type getResponse =
          defs.message.Response<defs.message.UpdateSmsReplyDto>;
        export type request = (
          path: getPath,
          options?: getOptions,
        ) => getResponse;
      }
    }

    /**
     * Test Controller
     */
    export namespace testApi {
      /**
       * 发送消息
       * /firebase/send
       */
      export namespace exportUser {
        export type exportUserParam = {
          /** token */
          token?: string;
        };
        export type exportUserOptions = Record<string, any>;
        export type exportUserResponse = defs.message.Response<string>;
        export type request = (
          params: exportUserParam,
          options?: exportUserOptions,
        ) => exportUserResponse;
      }
    }

    /**
     * Twilio Controller
     */
    export namespace twilioApi {
      /**
       * 接收用户自动回复短信回调
       * /twilio/autoReply
       */
      export namespace autoReply {
        export type autoReplyOptions = Record<string, any>;
        export type autoReplyResponse = any;
        export type request = (options?: autoReplyOptions) => autoReplyResponse;
      }

      /**
       * 接收用户自动回复短信回调
       * /twilio/autoReply
       */
      export namespace headAutoReply {
        export type headAutoReplyOptions = Record<string, any>;
        export type headAutoReplyResponse = any;
        export type request = (
          options?: headAutoReplyOptions,
        ) => headAutoReplyResponse;
      }

      /**
       * 接收用户自动回复短信回调
       * /twilio/autoReply
       */
      export namespace postAutoReply {
        export type postAutoReplyOptions = Record<string, any>;
        export type postAutoReplyResponse = any;
        export type request = (
          options?: postAutoReplyOptions,
        ) => postAutoReplyResponse;
      }

      /**
       * 接收用户自动回复短信回调
       * /twilio/autoReply
       */
      export namespace putAutoReply {
        export type putAutoReplyOptions = Record<string, any>;
        export type putAutoReplyResponse = any;
        export type request = (
          options?: putAutoReplyOptions,
        ) => putAutoReplyResponse;
      }

      /**
       * 接收用户自动回复短信回调
       * /twilio/autoReply
       */
      export namespace deleteAutoReply {
        export type deleteAutoReplyOptions = Record<string, any>;
        export type deleteAutoReplyResponse = any;
        export type request = (
          options?: deleteAutoReplyOptions,
        ) => deleteAutoReplyResponse;
      }

      /**
       * 接收用户自动回复短信回调
       * /twilio/autoReply
       */
      export namespace optionsAutoReply {
        export type optionsAutoReplyOptions = Record<string, any>;
        export type optionsAutoReplyResponse = any;
        export type request = (
          options?: optionsAutoReplyOptions,
        ) => optionsAutoReplyResponse;
      }

      /**
       * 接收用户自动回复短信回调
       * /twilio/autoReply
       */
      export namespace patchAutoReply {
        export type patchAutoReplyOptions = Record<string, any>;
        export type patchAutoReplyResponse = any;
        export type request = (
          options?: patchAutoReplyOptions,
        ) => patchAutoReplyResponse;
      }

      /**
       * 短信推送回调
       * /twilio/callback/{taskId}
       */
      export namespace callback {
        export type callbackPath = {
          /** taskId */
          taskId: string;
        };
        export type callbackOptions = Record<string, any>;
        export type callbackResponse = any;
        export type request = (
          path: callbackPath,
          options?: callbackOptions,
        ) => callbackResponse;
      }

      /**
       * 短信推送回调
       * /twilio/callback/{taskId}
       */
      export namespace headCallbackByTaskId {
        export type headCallbackByTaskIdPath = {
          /** taskId */
          taskId: string;
        };
        export type headCallbackByTaskIdOptions = Record<string, any>;
        export type headCallbackByTaskIdResponse = any;
        export type request = (
          path: headCallbackByTaskIdPath,
          options?: headCallbackByTaskIdOptions,
        ) => headCallbackByTaskIdResponse;
      }

      /**
       * 短信推送回调
       * /twilio/callback/{taskId}
       */
      export namespace postCallbackByTaskId {
        export type postCallbackByTaskIdPath = {
          /** taskId */
          taskId: string;
        };
        export type postCallbackByTaskIdOptions = Record<string, any>;
        export type postCallbackByTaskIdResponse = any;
        export type request = (
          path: postCallbackByTaskIdPath,
          options?: postCallbackByTaskIdOptions,
        ) => postCallbackByTaskIdResponse;
      }

      /**
       * 短信推送回调
       * /twilio/callback/{taskId}
       */
      export namespace putCallbackByTaskId {
        export type putCallbackByTaskIdPath = {
          /** taskId */
          taskId: string;
        };
        export type putCallbackByTaskIdOptions = Record<string, any>;
        export type putCallbackByTaskIdResponse = any;
        export type request = (
          path: putCallbackByTaskIdPath,
          options?: putCallbackByTaskIdOptions,
        ) => putCallbackByTaskIdResponse;
      }

      /**
       * 短信推送回调
       * /twilio/callback/{taskId}
       */
      export namespace deleteCallbackByTaskId {
        export type deleteCallbackByTaskIdPath = {
          /** taskId */
          taskId: string;
        };
        export type deleteCallbackByTaskIdOptions = Record<string, any>;
        export type deleteCallbackByTaskIdResponse = any;
        export type request = (
          path: deleteCallbackByTaskIdPath,
          options?: deleteCallbackByTaskIdOptions,
        ) => deleteCallbackByTaskIdResponse;
      }

      /**
       * 短信推送回调
       * /twilio/callback/{taskId}
       */
      export namespace optionsCallbackByTaskId {
        export type optionsCallbackByTaskIdPath = {
          /** taskId */
          taskId: string;
        };
        export type optionsCallbackByTaskIdOptions = Record<string, any>;
        export type optionsCallbackByTaskIdResponse = any;
        export type request = (
          path: optionsCallbackByTaskIdPath,
          options?: optionsCallbackByTaskIdOptions,
        ) => optionsCallbackByTaskIdResponse;
      }

      /**
       * 短信推送回调
       * /twilio/callback/{taskId}
       */
      export namespace patchCallbackByTaskId {
        export type patchCallbackByTaskIdPath = {
          /** taskId */
          taskId: string;
        };
        export type patchCallbackByTaskIdOptions = Record<string, any>;
        export type patchCallbackByTaskIdResponse = any;
        export type request = (
          path: patchCallbackByTaskIdPath,
          options?: patchCallbackByTaskIdOptions,
        ) => patchCallbackByTaskIdResponse;
      }
    }
  }
}
