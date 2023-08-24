class AddSmsReplyRequest {
  /** 短信内容 */
  content = '';

  /** 图片url */
  imgUrl = '';

  /** 关键词 */
  keywordList = [];
}

class AuditSiteMessageRequest {
  /** 审核意见 */
  auditOpinion = '';

  /** 审核状态(0:待审核 1:审核通过 2:审核拒绝) */
  auditStatus = undefined;

  /** 消息id */
  id = undefined;
}

class ByDay {
  /** 每X天 */
  every = undefined;

  /** 小时 */
  hour = undefined;

  /** title */
  title = '';
}

class ByMouth {
  /** 每天 */
  days = [];

  /** 每X月 */
  every = undefined;

  /** 小时 */
  hour = undefined;

  /** title */
  title = '';
}

class ByWeek {
  /** 每X周 */
  every = undefined;

  /** 小时 */
  hour = undefined;

  /** title */
  title = '';

  /** 每周星期几 */
  weeks = [];
}

class CreateSiteMessageResponse {
  /** 导入失败的数量 */
  failNum = undefined;

  /** 请求导入失败的id */
  requestErrorId = '';

  /** 导入成功的数量 */
  successNum = undefined;
}

class ExportSmsReplyDetailRequest {
  /** 接收到用户回复的手机号 */
  receivePhone = '';

  /** 配置id */
  smsReplyConfigId = undefined;
}

class FSNRLXEmal {
  /** email内容 */
  content = '';

  /** 图片url */
  imgUrl = '';

  /** email标题 */
  title = '';
}

class GetCreateCycleMessageResponse {
  /** 周期类型(1:按天) */
  byDay = new ByDay();

  /** 周期类型(3:按月) */
  byMouth = new ByMouth();

  /** 周期类型(2:按周) */
  byWeek = new ByWeek();

  /** 发送内容类型(2:短信 3:邮件) */
  contentTypes = [];

  /** 周期类型(1:按天 2:按周 3:按月) */
  cycleType = undefined;

  /** Email内容 */
  email = new FSNRLXEmal();

  /** id */
  id = undefined;

  /** 周期规则名称 */
  name = '';

  /** 短信内容 */
  sms = new Sms();
}

class GetMessageResponse {
  /** 审核人 */
  auditBy = undefined;

  /** 审核人姓名 */
  auditByName = '';

  /** 审核意见 */
  auditOpinion = '';

  /** 审核状态(0:待审核 1:审核通过 2:审核拒绝) */
  auditStatus = undefined;

  /** 审核时间 */
  auditTime = '';

  /** 内容 */
  content = '';

  /** id */
  id = undefined;

  /** 发送状态(0:待发送 1:已发送) */
  sendStatus = undefined;

  /** 定时发送状态下的发送时间 */
  sendTime = '';

  /** 发送对象总数 */
  sendTotal = undefined;

  /** 发布类型(0:及时发布  1:定时发布) */
  sendType = undefined;

  /** 发起人 */
  submitBy = undefined;

  /** 发起人姓名 */
  submitByName = '';

  /** 提交时间 */
  submitTime = '';

  /** 标题 */
  title = '';
}

class MessageStateRequest {
  /** 审核人 */
  auditByName = '';

  /** 审核状态(null:全部 0:待审核 1:审核通过 2:审核拒绝) */
  auditStatus = undefined;

  /** 内容 */
  content = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 发起人 */
  submitByName = '';

  /** 结束提交时间 */
  submitTimeEnd = '';

  /** 开始提交时间 */
  submitTimeStart = '';

  /** 标题 */
  title = '';
}

class MessageStateResponse {
  /** 全部数量 */
  allTotal = undefined;

  /** 已审核数量 */
  alreadyTotal = undefined;

  /** 待审核数量 */
  awaitTotal = undefined;

  /** 已拒绝数量 */
  refuseTotal = undefined;
}

class PageInfo {
  /** endRow */
  endRow = undefined;

  /** hasNextPage */
  hasNextPage = false;

  /** hasPreviousPage */
  hasPreviousPage = false;

  /** isFirstPage */
  isFirstPage = false;

  /** isLastPage */
  isLastPage = false;

  /** list */
  list = [];

  /** navigateFirstPage */
  navigateFirstPage = undefined;

  /** navigateLastPage */
  navigateLastPage = undefined;

  /** navigatePages */
  navigatePages = undefined;

  /** navigatepageNums */
  navigatepageNums = [];

  /** nextPage */
  nextPage = undefined;

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** pages */
  pages = undefined;

  /** prePage */
  prePage = undefined;

  /** size */
  size = undefined;

  /** startRow */
  startRow = undefined;

  /** total */
  total = undefined;
}

class QueryAppUserMessageGroupResponse {
  /** thisMonth */
  thisMonth = [];

  /** thisMonthBefore */
  thisMonthBefore = [];

  /** thisWeek */
  thisWeek = [];

  /** today */
  today = [];
}

class QueryAppUserMessageRequest {
  /** 内容 */
  body = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 阅读状态(未读:UNREAD 已读:READ) */
  readStatus = 'UNREAD';

  /** 标题 */
  title = '';

  /** 消息类型(后台创建的消息:PROMOTION_MESSAGE  订单状态变更消息:ORDER_UPDATE 系统通知消息:SYSTEM_NOTICE) */
  type = 'PROMOTION_MESSAGE';
}

class QueryAppUserMessageResponse {
  /** 消息body */
  body = '';

  /** id */
  id = undefined;

  /** 跳转页面url */
  jumpUrl = '';

  /** 消息类型(后台创建的消息:PROMOTION_MESSAGE  订单状态变更消息:ORDER_UPDATE  系统通知消息(评论审核/到货通知/会员等级变更/积分到期...): SYSTEM_NOTICE) */
  msgType = 'PROMOTION_MESSAGE';

  /** 阅读状态(未读:UNREAD 已读:READ) */
  status = 'UNREAD';

  /** 已经发生时间(1h  1d  3d) */
  timeDesc = '';

  /** 消息title */
  title = '';
}

class QueryBoUserMessageRequest {
  /** 消息类型(审核消息:AUDIT  通知消息:NOTIFY) */
  msgType = 'AUDIT';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;
}

class QueryBoUserMessageResponse {
  /** 消息内容 */
  content = '';

  /** 创建时间 */
  createdTime = '';

  /** 时间(格式1: 12/12/2020 20:18 ; 格式2: 6天前 ; 格式3: 2个月前 ; 格式3: 1年前) */
  createdTimeFormat = '';

  /** id */
  id = undefined;

  /** 跳转页面url */
  jumpUrl = '';

  /** 消息类型(审核消息:AUDIT  通知消息:NOTIFY) */
  msgType = 'AUDIT';

  /** 阅读状态(未读:UNREAD 已读:READ) */
  status = 'UNREAD';

  /** 用户id */
  userId = undefined;

  /** 用户姓名 */
  userName = '';
}

class QueryCycleMessageRequest {
  /** 可用状态(0:禁用 1:启用) */
  availableStatus = undefined;

  /** 名称 */
  name = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;
}

class QueryCycleMessageResponse {
  /** 可用状态(0:禁用 1:启用) */
  availableStatus = undefined;

  /** id */
  id = undefined;

  /** 发送规则名称 */
  name = '';

  /** 周期规则(周期时间描述) */
  ruleTimeDesc = '';

  /** 更新人姓名 */
  updatedByName = '';

  /** 更新时间 */
  updatedTime = '';
}

class QuerySiteMessageResponse {
  /** 审核人 */
  auditByName = '';

  /** 审核意见 */
  auditOpinion = '';

  /** 审核状态(0:待审核 1:审核通过 2:审核拒绝) */
  auditStatus = undefined;

  /** 审核时间 */
  auditTime = '';

  /** 内容 */
  content = '';

  /** id */
  id = undefined;

  /** 短信投送率 */
  receivedRate = undefined;

  /** 发送状态(0:待发送 1:已发送) */
  sendStatus = undefined;

  /** 发送对象总数 */
  sendTotal = undefined;

  /** 发起人 */
  submitByName = '';

  /** 提交时间 */
  submitTime = '';

  /** 标题 */
  title = '';
}

class QuerySmsReplyDetailRequest {
  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 接收到用户回复的手机号 */
  receivePhone = '';

  /** 配置id */
  smsReplyConfigId = undefined;
}

class QuerySmsReplyDetailResponse {
  /** 接收到用户回复的内容 */
  receiveContent = '';

  /** 接收到用户回复的手机号 */
  receivePhone = '';

  /** 接收到用户回复的时间 */
  receiveTime = '';

  /** 系统自动发送的内容 */
  sendContent = '';

  /** 系统自动发送的时间 */
  sendTime = '';

  /** ms_reply_config表id */
  smsReplyConfigId = undefined;
}

class QuerySmsReplyRequest {
  /** 可用状态(0:禁用 1:启用) */
  availableStatus = undefined;

  /** 回复的消息内容 */
  content = '';

  /** 关键词 */
  keyword = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;
}

class QuerySmsReplyResponse {
  /** 可用状态(0:禁用 1:启用) */
  availableStatus = undefined;

  /** 消息内容 */
  content = '';

  /** id */
  id = undefined;

  /** 图片url */
  imgUrl = '';

  /** 关键词 */
  keyword = '';

  /** 更新人 */
  updatedByName = '';

  /** 更新时间 */
  updatedTime = '';
}

class ReadAllMessageRequest {
  /** 消息类型,如果传null,表示标记所有消息为已读状态(后台创建的消息:PROMOTION_MESSAGE  订单状态变更消息:ORDER_UPDATE 系统通知消息:SYSTEM_NOTICE) */
  type = 'PROMOTION_MESSAGE';
}

class Response {
  /** 状态码：0-成功 */
  code = undefined;

  /** 响应数据 */
  data = new CreateSiteMessageResponse();

  /** 状态描述 */
  message = '';

  /** success */
  success = false;
}

class Sms {
  /** 短信内容 */
  content = '';

  /** 图片url */
  imgUrl = '';
}

class UpdateSmsReplyDto {
  /** 短信内容 */
  content = '';

  /** id */
  id = undefined;

  /** 图片url */
  imgUrl = '';

  /** 关键词 */
  keywordList = [];
}

class UpdateStatusRequest {
  /** 可用状态(0:禁用 1:启用) */
  availableStatus = undefined;

  /** id */
  id = undefined;
}

class UserNoticeSettingDTO {
  /** 应用通知开关 */
  app = false;

  /** 邮件通知开关 */
  email = false;

  /** 短信通知开关 */
  sms = false;
}

class UserNoticeSettingVO {
  /** 应用通知开关 */
  app = false;

  /** 邮件通知开关 */
  email = false;

  /** 短信通知开关 */
  sms = false;
}

export const message = {
  AddSmsReplyRequest,
  AuditSiteMessageRequest,
  ByDay,
  ByMouth,
  ByWeek,
  CreateSiteMessageResponse,
  ExportSmsReplyDetailRequest,
  FSNRLXEmal,
  GetCreateCycleMessageResponse,
  GetMessageResponse,
  MessageStateRequest,
  MessageStateResponse,
  PageInfo,
  QueryAppUserMessageGroupResponse,
  QueryAppUserMessageRequest,
  QueryAppUserMessageResponse,
  QueryBoUserMessageRequest,
  QueryBoUserMessageResponse,
  QueryCycleMessageRequest,
  QueryCycleMessageResponse,
  QuerySiteMessageResponse,
  QuerySmsReplyDetailRequest,
  QuerySmsReplyDetailResponse,
  QuerySmsReplyRequest,
  QuerySmsReplyResponse,
  ReadAllMessageRequest,
  Response,
  Sms,
  UpdateSmsReplyDto,
  UpdateStatusRequest,
  UserNoticeSettingDTO,
  UserNoticeSettingVO,
};
