class Address {
  /** 单元楼栋 */
  aptUnit = '';

  /** 城市 */
  city = '';

  /** 配送说明 */
  deliveryNote = '';

  /** 名字 */
  firstName = '';

  /** 配送说明 */
  id = undefined;

  /** 是否默认 */
  isDefault = false;

  /** 是否最近使用 */
  isLastUsed = false;

  /** 姓 */
  lastName = '';

  /** 纬度 */
  latitude = undefined;

  /** 经度 */
  longitude = undefined;

  /** 手机号 */
  phone = '';

  /** 州 */
  state = '';

  /** 街道 */
  street = '';

  /** 邮编 */
  zipCode = '';
}

class AppPointsDetailsPageQueryDTO {
  /** 分类：all-全部、earned-获取的积分、spend-消费的积分 */
  classify = 'all';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;
}

class AppPointsDetailsVO {
  /** 积分 */
  amount = '';

  /** 创建时间 */
  createdTime = undefined;

  /** 事件类型名称 */
  eventTypeName = '';

  /** 备注 */
  remark = '';
}

class BindMemberCardCommandDTO {
  /** Member card number */
  cardNo = '';

  /** Temporary ticket */
  ticket = '';

  /** User ID */
  userId = undefined;
}

class BizItem {
  /** bizId */
  bizId = '';

  /** statusDesc */
  statusDesc = '';
}

class CheckCodeDTO {
  /** 验证码 */
  code = '';

  /** 手机号 */
  phone = '';
}

class CheckCodeInviteDTO {
  /** 验证码 */
  code = '';

  /** 邀请码 */
  inviteCode = '';

  /** 手机号 */
  phone = '';
}

class CheckCodeVO {
  /** 临时票据 */
  ticket = '';
}

class CheckEmailCodeDTO {
  /** 验证码 */
  code = '';

  /** 邮箱地址 */
  email = '';
}

class CheckSmsCodeDTO {
  /** 验证码 */
  code = '';

  /** 手机号 */
  phone = '';
}

class ClosedUserPageQueryDTO {
  /** 终止会员卡号 */
  cardNoEnd = '';

  /** 起始会员卡号 */
  cardNoStart = '';

  /** 注册时间结束于 */
  createdTimeEnd = '';

  /** 注册时间开始于 */
  createdTimeStart = '';

  /** 邮箱 */
  email = '';

  /** 昵称 */
  nickName = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 手机号码 */
  phone = '';

  /** 邀请人手机号码 */
  phoneOfInviter = '';

  /** 注册来源：1-APP、2-WEB */
  registrationSource = 1;

  /** 会员状态：2-已注销 */
  status = 2;
}

class ClosedUserVO {
  /** 头像 */
  avatar = '';

  /** 生日 */
  birthday = '';

  /** 会员卡号 */
  cardNo = '';

  /** 注册时间 */
  createdTime = '';

  /** 邮箱 */
  email = '';

  /** 等级类型 */
  feeType = undefined;

  /** 性别 */
  gender = undefined;

  /** 性别名称 */
  genderName = '';

  /** 用户ID */
  id = undefined;

  /** 邀请人ID */
  invitedBy = undefined;

  /** 语言 */
  language = undefined;

  /** 语言名称 */
  languageName = '';

  /** 会员等级名称 */
  memberLevelName = '';

  /** 昵称 */
  nickName = '';

  /** 付费会员 */
  paidMember = '';

  /** 手机号 */
  phone = '';

  /** 积分余额 */
  pointsBalance = undefined;

  /** 注册来源 */
  registrationSource = undefined;

  /** 注册来源名称 */
  registrationSourceName = '';

  /** 注销时间 */
  updatedTime = '';
}

class ContactVO {
  /** firstName */
  firstName = '';

  /** id */
  id = undefined;

  /** lastName */
  lastName = '';

  /** phone */
  phone = '';

  /** userId */
  userId = undefined;
}

class DefaultMemberBenefitsCommandDTO {
  /** 规则说明（英文） */
  enDescription = '';

  /** 规则名称（英文） */
  enName = '';

  /** 规则逻辑 */
  logic = undefined;

  /** 规则说明（中文简体） */
  zhChsDescription = '';

  /** 规则名称（中文简体） */
  zhChsName = '';

  /** 规则说明（中文繁体） */
  zhChtDescription = '';

  /** 规则名称（中文繁体） */
  zhChtName = '';
}

class DefaultMemberBenefitsVO {
  /** 规则说明（英文） */
  enDescription = '';

  /** 规则名称（英文） */
  enName = '';

  /** 规则ID */
  id = undefined;

  /** 规则逻辑 */
  logic = undefined;

  /** 更新人 */
  updatedBy = undefined;

  /** 更新人名称 */
  updatedByName = '';

  /** 更新时间 */
  updatedTime = '';

  /** 规则说明（中文简体） */
  zhChsDescription = '';

  /** 规则名称（中文简体） */
  zhChsName = '';

  /** 规则说明（中文繁体） */
  zhChtDescription = '';

  /** 规则名称（中文繁体） */
  zhChtName = '';
}

class DefaultPointsRulesCommandDTO {
  /** 规则说明（英文） */
  enDescription = '';

  /** 规则名称（英文） */
  enName = '';

  /** 规则逻辑 */
  logic = undefined;

  /** 规则说明（中文简体） */
  zhChsDescription = '';

  /** 规则名称（中文简体） */
  zhChsName = '';

  /** 规则说明（中文繁体） */
  zhChtDescription = '';

  /** 规则名称（中文繁体） */
  zhChtName = '';
}

class DefaultPointsRulesVO {
  /** 规则说明（英文） */
  enDescription = '';

  /** 规则名称（英文） */
  enName = '';

  /** 规则ID */
  id = undefined;

  /** 规则逻辑 */
  logic = undefined;

  /** 更新人 */
  updatedBy = undefined;

  /** 更新人名称 */
  updatedByName = '';

  /** 更新时间 */
  updatedTime = '';

  /** 规则说明（中文简体） */
  zhChsDescription = '';

  /** 规则名称（中文简体） */
  zhChsName = '';

  /** 规则说明（中文繁体） */
  zhChtDescription = '';

  /** 规则名称（中文繁体） */
  zhChtName = '';
}

class DefaultUpgradeRulesCommandDTO {
  /** 规则说明（英文） */
  enDescription = '';

  /** 规则名称（英文） */
  enName = '';

  /** 规则逻辑 */
  logic = undefined;

  /** 规则说明（中文简体） */
  zhChsDescription = '';

  /** 规则名称（中文简体） */
  zhChsName = '';

  /** 规则说明（中文繁体） */
  zhChtDescription = '';

  /** 规则名称（中文繁体） */
  zhChtName = '';
}

class DefaultUpgradeRulesVO {
  /** 规则说明（英文） */
  enDescription = '';

  /** 规则名称（英文） */
  enName = '';

  /** 规则ID */
  id = undefined;

  /** 规则逻辑 */
  logic = undefined;

  /** 更新人 */
  updatedBy = undefined;

  /** 更新人名称 */
  updatedByName = '';

  /** 更新时间 */
  updatedTime = '';

  /** 规则说明（中文简体） */
  zhChsDescription = '';

  /** 规则名称（中文简体） */
  zhChsName = '';

  /** 规则说明（中文繁体） */
  zhChtDescription = '';

  /** 规则名称（中文繁体） */
  zhChtName = '';
}

class DictionaryStrVO {
  /** Key */
  key = '';

  /** Value */
  value = '';
}

class DictionaryVO {
  /** Key */
  key = undefined;

  /** Value */
  value = '';
}

class EditPasswordDTO {
  /** 新密码 */
  newPassword = '';

  /** 旧密码 */
  oldPassword = '';

  /** 手机号 */
  phone = '';

  /** 临时票据 */
  ticket = '';
}

class EmailDTO {
  /** 邮箱地址 */
  email = '';
}

class FeedbackDTO {
  /** 意见反馈 */
  feedback = '';

  /** 上传图片 */
  imageList = [];
}

class FeedbackPageQueryDTO {
  /** 反馈内容 */
  content = '';

  /** 终止提交时间 */
  createdTimeEnd = undefined;

  /** 起始提交时间 */
  createdTimeStart = undefined;

  /** 终止处理时间 */
  operateTimeEnd = undefined;

  /** 起始处理时间 */
  operateTimeStart = undefined;

  /** 处理人ID列表 */
  operatorIdList = [];

  /** 处理人名称 */
  operatorName = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 状态：1-待处理、2-已处理 */
  status = undefined;

  /** 会员昵称 */
  userNickName = '';
}

class FeedbackPageVO {
  /** 分页信息 */
  pageInfo = new PageInfo();

  /** 待处理数量 */
  pendingCount = undefined;

  /** 已处理数量 */
  processedCount = undefined;

  /** 全部数量 */
  totalCount = undefined;
}

class FeedbackSuggestDTO {
  /** ID */
  id = undefined;

  /** 处理意见 */
  suggestion = '';
}

class FeedbackVO {
  /** 反馈内容 */
  content = '';

  /** 提交时间 */
  createdTime = undefined;

  /** ID */
  id = undefined;

  /** 反馈图片 */
  images = [];

  /** 处理时间 */
  operateTime = undefined;

  /** 处理人ID */
  operatorId = undefined;

  /** 处理人名称 */
  operatorName = '';

  /** 来源：1-APP、2-WEB */
  source = undefined;

  /** 来源名称 */
  sourceName = '';

  /** 状态：1-待处理、2-已处理 */
  status = undefined;

  /** 状态名称 */
  statusName = '';

  /** 处理意见 */
  suggestion = '';

  /** 用户ID */
  userId = undefined;

  /** 会员昵称 */
  userNickName = '';
}

class FrozenUserCommandDTO {
  /** 冻结终止时间 */
  endTime = '';

  /** 操作原因 */
  remark = '';

  /** 冻结时间终止前X天发系统消息提示 */
  reminderDays = undefined;

  /** 冻结起始时间 */
  startTime = '';

  /** 类型：1-永久冻结、2-短期冻结 */
  type = undefined;

  /** 用户ID */
  userId = undefined;
}

class InviteCodeDTO {
  /** 邀请码 */
  code = '';
}

class LoginInfo {
  /** 头像 */
  avatar = '';

  /** token 过期时间(s) */
  expireTime = undefined;

  /** 昵称 */
  nickName = '';

  /** 临时会话票据 */
  ticket = '';

  /** token */
  token = '';

  /** 用户 id */
  userId = undefined;
}

class Map {}

class MemberBenefitsDTO {
  /** 默认的会员权益ID */
  defaultMemberBenefitsId = undefined;

  /** 规则逻辑 */
  logic = undefined;

  /** 是否勾选 */
  selected = false;
}

class MemberBenefitsVO {
  /** 默认的会员权益ID */
  defaultMemberBenefitsId = undefined;

  /** 规则逻辑 */
  logic = undefined;

  /** 是否勾选 */
  selected = false;
}

class MemberLevelAllRulesVO {
  /** benefitRuleList */
  benefitRuleList = [];

  /** pointRuleList */
  pointRuleList = [];
}

class MemberLevelCommandDTO {
  /** 等级标识 */
  avatar = '';

  /** 英文名称 */
  enName = '';

  /** 等级类型：0-免费会员、1-付费会员 */
  feeType = 0;

  /** 中文简体名称 */
  zhChsName = '';

  /** 中文繁体名称 */
  zhChtName = '';
}

class MemberLevelNameVO {
  /** 会员等级ID */
  id = undefined;

  /** 会员等级名称 */
  name = '';
}

class MemberLevelRulesVO {
  /** 规则说明 */
  description = '';

  /** 规则名称 */
  name = '';
}

class MemberLevelVO {
  /** 等级标识 */
  avatar = '';

  /** 英文名称 */
  enName = '';

  /** 等级类型：0-免费会员、1-付费会员 */
  feeType = undefined;

  /** 等级类型名称 */
  feeTypeName = '';

  /** 会员等级ID */
  id = undefined;

  /** 下一级 */
  nextLevelId = undefined;

  /** 状态：0-已启用、1-已禁用 */
  status = undefined;

  /** 状态名称 */
  statusName = '';

  /** 更新人 */
  updatedBy = undefined;

  /** 更新人名称 */
  updatedByName = '';

  /** 更新时间 */
  updatedTime = undefined;

  /** 中文简体名称 */
  zhChsName = '';

  /** 中文繁体名称 */
  zhChtName = '';
}

class NewAddressDTO {
  /** 单元楼栋 */
  aptUnit = '';

  /** 城市 */
  city = '';

  /** 配送说明 */
  deliveryNote = '';

  /** 名字 */
  firstName = '';

  /** 是否默认 */
  isDefault = false;

  /** 姓 */
  lastName = '';

  /** 维度 */
  latitude = undefined;

  /** 经度 */
  longitude = undefined;

  /** 手机号 */
  phone = '';

  /** 州 */
  state = '';

  /** 街道 */
  street = '';

  /** 邮编 */
  zipCode = '';
}

class OrderAndRefund {
  /** orders */
  orders = [];

  /** refunds */
  refunds = [];
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

class PhoneDTO {
  /** 手机号 */
  phone = '';
}

class PhonePwdDTO {
  /** 密码 */
  password = '';

  /** 手机号 */
  phone = '';
}

class PlatformAccountPointsDetailsPageQueryDTO {
  /** 积分变更时间结束于 */
  createdTimeEnd = undefined;

  /** 积分变更时间开始于 */
  createdTimeStart = undefined;

  /** 事项类型 */
  eventType = undefined;

  /** 对账账户ID */
  oppositeAccountId = '';

  /** 订单号 */
  orderId = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 主体账户ID */
  principalAccountId = '';

  /** 售后单号 */
  subAfterSalesOrderId = '';
}

class PlatformAccountPointsDetailsQueryDTO {
  /** 积分变更时间结束于 */
  createdTimeEnd = undefined;

  /** 积分变更时间开始于 */
  createdTimeStart = undefined;

  /** 事项类型 */
  eventType = undefined;

  /** 积分流水单号（PO+8位随机数字） */
  idList = [];

  /** 对账账户ID */
  oppositeAccountId = '';

  /** 订单号 */
  orderId = '';

  /** 主体账户ID */
  principalAccountId = '';

  /** 售后单号 */
  subAfterSalesOrderId = '';
}

class PlatformAccountPointsDetailsVO {
  /** 加速 */
  acceleration = undefined;

  /** 积分变更 */
  amount = undefined;

  /** 账户余额 */
  balance = undefined;

  /** 积分变更时间戳 */
  createdTime = undefined;

  /** 事项类型 */
  eventType = undefined;

  /** 事项类型名称 */
  eventTypeName = '';

  /** 积分流水单号（PO+8位随机数字） */
  id = '';

  /** 对账账户ID */
  oppositeAccountId = '';

  /** 对账账户名称 */
  oppositeAccountName = '';

  /** 订单号 */
  orderId = '';

  /** 主体账户ID */
  principalAccountId = '';

  /** 主体账户名称 */
  principalAccountName = '';

  /** 备注 */
  remark = [];

  /** 售后单号 */
  subAfterSalesOrderId = '';
}

class PlatformPointsAccountVO {
  /** 可用积分余额 */
  balance = undefined;

  /** 账户编码 */
  code = '';

  /** 创建时间 */
  createdTime = undefined;

  /** 持有人 */
  holder = '';

  /** 平台账户ID */
  id = undefined;

  /** 账户名称 */
  name = '';

  /** 用途 */
  purpose = '';

  /** 状态 */
  status = 'ACTIVATED';

  /** 状态名称 */
  statusName = '';

  /** 积分总额 */
  totalAmount = undefined;

  /** 类型 */
  type = 'PLATFORM';

  /** 类型名称 */
  typeName = '';
}

class PointsAdjustAddDTO {
  /** 调整的积分点数（有符号） */
  amount = undefined;

  /** 操作原因 */
  submitRemark = '';

  /** 会员ID */
  userId = undefined;
}

class PointsAdjustOperateDTO {
  /** 积分调整ID */
  id = undefined;

  /** 操作原因 */
  reviewRemark = '';
}

class PointsAdjustPageQueryDTO {
  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 手机号 */
  phone = '';

  /** 积分调整时间结束于 */
  submitTimeEnd = undefined;

  /** 积分调整时间开始于 */
  submitTimeStart = undefined;

  /** 会员ID */
  userId = undefined;
}

class PointsAdjustVO {
  /** 调整数量 */
  amount = undefined;

  /** 积分调整单号 */
  id = undefined;

  /** 会员昵称 */
  nickName = '';

  /** 手机号 */
  phone = '';

  /** 审核操作原因 */
  reviewRemark = '';

  /** 审核时间 */
  reviewTime = undefined;

  /** 审核人 */
  reviewerName = '';

  /** 审核状态：1-待审核、2-已通过、3-已拒绝 */
  status = undefined;

  /** 审核状态名称 */
  statusName = '';

  /** 积分调整原因 */
  submitRemark = '';

  /** 积分调整发起时间 */
  submitTime = undefined;

  /** 发起人 */
  submitterName = '';

  /** 会员ID */
  userId = undefined;
}

class PointsDetailsLocPageQueryDTO {
  /** 会员卡号 */
  cardNo = '';

  /** 事项类型 */
  eventType = undefined;

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 手机号 */
  phone = '';

  /** 线下门店编号 */
  storeNoList = [];

  /** 结束发生时间 */
  transTimeEnd = '';

  /** 开始发生时间 */
  transTimeStart = '';
}

class PointsDetailsLocQueryDTO {
  /** 会员卡号 */
  cardNo = '';

  /** 事项类型 */
  eventType = undefined;

  /** 手机号 */
  phone = '';

  /** 线下门店编号 */
  storeNoList = [];

  /** 结束发生时间 */
  transTimeEnd = '';

  /** 开始发生时间 */
  transTimeStart = '';
}

class PointsDetailsLocVO {
  /** 当前积分余额 */
  balance = undefined;

  /** 会员卡号 */
  cardNo = '';

  /** 事件类型 */
  eventType = undefined;

  /** 事件类型名称 */
  eventTypeName = '';

  /** 车道号 */
  laneNo = '';

  /** 积分减少 */
  negativeAmo = undefined;

  /** 手机号 */
  phone = '';

  /** 积分增加 */
  positiveAmo = undefined;

  /** 门店号 */
  storeNo = '';

  /** 事务号 */
  transNo = undefined;

  /** 发生时间 */
  transTime = '';
}

class PointsDetailsPageQueryDTO {
  /** 会员卡号 */
  cardNo = '';

  /** 发生时间结束于 */
  createdTimeEnd = undefined;

  /** 发生时间开始于 */
  createdTimeStart = undefined;

  /** 事项类型 */
  eventType = undefined;

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 手机号 */
  phone = '';

  /** 变更渠道 */
  source = undefined;

  /** 门店编号 */
  storeNo = '';

  /** 会员ID */
  userId = undefined;
}

class PointsDetailsQueryDTO {
  /** 会员卡号 */
  cardNo = '';

  /** 发生时间结束于 */
  createdTimeEnd = undefined;

  /** 发生时间开始于 */
  createdTimeStart = undefined;

  /** 事项类型 */
  eventType = undefined;

  /** 手机号 */
  phone = '';

  /** 变更渠道 */
  source = undefined;

  /** 门店编号 */
  storeNo = '';

  /** 会员ID */
  userId = undefined;
}

class PointsDetailsVO {
  /** 积分加速 */
  acceleration = undefined;

  /** 积分余额 */
  balance = undefined;

  /** 会员卡号 */
  cardNo = '';

  /** 创建时间 */
  createdTime = undefined;

  /** 事件类型 */
  eventType = undefined;

  /** 事件类型名称 */
  eventTypeName = '';

  /** 过期时间 */
  expiryDate = undefined;

  /** 明细ID */
  id = undefined;

  /** 积分减少 */
  negativeAmo = undefined;

  /** 手机号 */
  phone = '';

  /** 积分增加 */
  positiveAmo = undefined;

  /** 备注（包含有订单信息、售后单信息、规则信息） */
  remark = [];

  /** 积分变更渠道 */
  source = undefined;

  /** 积分变更渠道名称 */
  sourceName = '';

  /** 门店编号 */
  storeNo = '';

  /** 会员ID */
  userId = undefined;

  /** 会员昵称 */
  userNickName = '';

  /** 会员状态 */
  userStatus = undefined;

  /** 会员状态名称 */
  userStatusName = '';
}

class PointsMainPageVO {
  /** 积分明细列表 */
  appPointsDetailsList = [];

  /** 可用积分余额 */
  pointsBalance = undefined;
}

class PointsRulesDTO {
  /** 默认的积分规则ID */
  defaultPointsRulesId = undefined;

  /** 规则逻辑 */
  logic = undefined;

  /** 是否勾选 */
  selected = false;
}

class PointsRulesMainPageVO {
  /** 积分兑美元的兑换比率 */
  exchangeRate = undefined;

  /** 积分规则 */
  pointRules = [];

  /** 积分有效期（单位：天） */
  pointsValidityDays = undefined;
}

class PointsRulesVO {
  /** 默认的积分规则ID */
  defaultPointsRulesId = undefined;

  /** 规则逻辑 */
  logic = undefined;

  /** 是否勾选 */
  selected = false;
}

class Response {
  /** 状态码：0-成功 */
  code = undefined;

  /** 响应数据 */
  data = new Address();

  /** 状态描述 */
  message = '';

  /** success */
  success = false;
}

class S3PreSignInfo {
  /** 上传后的访问地址 */
  key = '';

  /** 上传 URL，请求方式 PUT */
  url = '';
}

class SaveContactDTO {
  /** firstName */
  firstName = '';

  /** lastName */
  lastName = '';

  /** phone */
  phone = '';
}

class SendCodeVO {
  /** 是否发送成功 */
  success = false;

  /** 等待时间（单位：s） */
  waitTime = undefined;
}

class SetPasswordDTO {
  /** 密码 */
  password = '';

  /** 手机号 */
  phone = '';

  /** 临时票据 */
  ticket = '';
}

class SmsCodeDTO {
  /** 验证码 */
  code = '';

  /** 手机号 */
  phone = '';
}

class UnbindMemberCardCommandDTO {
  /** Temporary ticket */
  ticket = '';

  /** User ID */
  userId = undefined;
}

class UpdateAddressDTO {
  /** 单元楼栋 */
  aptUnit = '';

  /** 城市 */
  city = '';

  /** 配送说明 */
  deliveryNote = '';

  /** 名字 */
  firstName = '';

  /** id */
  id = undefined;

  /** 是否默认 */
  isDefault = false;

  /** 姓 */
  lastName = '';

  /** 维度 */
  latitude = undefined;

  /** 经度 */
  longitude = undefined;

  /** 手机号 */
  phone = '';

  /** 州 */
  state = '';

  /** 街道 */
  street = '';

  /** 邮编 */
  zipCode = '';
}

class UpdatePhoneDTO {
  /** 手机号 */
  phone = '';

  /** 临时票据 */
  ticket = '';
}

class UpdateUserStatusCommandDTO {
  /** 操作原因 */
  remark = '';

  /** 用户ID */
  userId = undefined;
}

class UpgradeRulesCommandDTO {
  /** 升级规则明细 */
  list = [];

  /** 下一级 */
  nextLevelId = undefined;
}

class UpgradeRulesDTO {
  /** 默认的升级规则ID */
  defaultUpgradeRulesId = undefined;

  /** 规则逻辑 */
  logic = undefined;

  /** 是否勾选 */
  selected = false;
}

class UpgradeRulesVO {
  /** 默认的升级规则ID */
  defaultUpgradeRulesId = undefined;

  /** 规则逻辑 */
  logic = undefined;

  /** 是否勾选 */
  selected = false;
}

class UserContactHistoryVO {
  /** 历史邮箱地址 */
  emailList = [];

  /** 历史手机号 */
  phoneList = [];

  /** 用户ID */
  userId = undefined;
}

class UserEnabledPageQueryDTO {
  /** 会员等级 */
  memberLevelIdList = [];

  /** 昵称 */
  nickName = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 手机号码 */
  phone = '';

  /** 注册来源 */
  registrationSourceList = [];
}

class UserEnabledVO {
  /** 用户ID */
  id = undefined;

  /** 会员等级 */
  memberLevelId = undefined;

  /** 会员等级名称 */
  memberLevelName = '';

  /** 昵称 */
  nickName = '';

  /** 手机号 */
  phone = '';

  /** 注册来源 */
  registrationSource = undefined;

  /** 注册来源名称 */
  registrationSourceName = '';

  /** 状态 */
  status = undefined;

  /** 状态名称 */
  statusName = '';
}

class UserInviteFriendVO {
  /** 用户ID */
  id = undefined;

  /** 邀请码 */
  inviteCode = '';

  /** 成功邀请计数 */
  invitedCount = undefined;

  /** 已邀请的好友列表 */
  invitedUserList = [];

  /** 主页奖励信息 */
  rewardInfo = '';

  /** 已获得的积分奖励 */
  rewardedPoints = undefined;
}

class UserMemberLevelInfoVO {
  /** 会员消费总金额（用于升级进度条） */
  totalAmount = undefined;

  /** 升至下一级的信息 */
  upgradeInfo = '';

  /** 会员等级升级阈值（用于升级进度条） */
  upgradeThresholdAmount = undefined;
}

class UserNameDTO {
  /** 用户头像 */
  avatar = '';

  /** 用户ID/编码 */
  id = undefined;

  /** 用户昵称 */
  name = '';
}

class UserOperationRecordVO {
  /** 操作时间 */
  createdTime = '';

  /** 操作人 */
  operator = undefined;

  /** 操作人名称 */
  operatorName = '';

  /** 操作原因 */
  remark = '';

  /** 操作类型 */
  type = undefined;

  /** 操作类型名称 */
  typeName = '';

  /** 用户ID */
  userId = undefined;
}

class UserPageQueryDTO {
  /** 终止会员卡号 */
  cardNoEnd = '';

  /** 起始会员卡号 */
  cardNoStart = '';

  /** 终止注册时间 */
  createdTimeEnd = '';

  /** 起始注册时间 */
  createdTimeStart = '';

  /** 邮箱 */
  email = '';

  /** 昵称 */
  nickName = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 手机号码 */
  phone = '';

  /** 邀请人手机号码 */
  phoneOfInviter = '';

  /** 注册来源 */
  registrationSource = undefined;

  /** 状态 */
  status = undefined;
}

class UserProfileDTO {
  /** 头像 */
  avatar = '';

  /** 生日 */
  birthday = '';

  /** 性别：0-保密、1-男、2-女 */
  gender = 0;

  /** 语言：0-英语、1-中文简体、2-中文繁体 */
  language = 0;

  /** 昵称 */
  nickName = '';

  /** 用户最喜欢的社交媒体平台 */
  socialMedia = 'facebook';
}

class UserProfileVO {
  /** 头像 */
  avatar = '';

  /** 生日 */
  birthday = '';

  /** 生日修改的次数 */
  birthdayChanged = undefined;

  /** 会员卡号 */
  cardNo = '';

  /** 邮箱 */
  email = '';

  /** 用户是否已经设置了密码 */
  existsPassword = false;

  /** 性别：0-保密、1-男、2-女 */
  gender = undefined;

  /** 语言：0-英语、1-中文简体、2-中文繁体 */
  language = undefined;

  /** 会员等级名称 */
  memberLevelName = '';

  /** 昵称 */
  nickName = '';

  /** 昵称修改的次数 */
  nickNameChanged = undefined;

  /** 优惠券的数量 */
  numOfCoupon = undefined;

  /** 通知的数量 */
  numOfNotification = undefined;

  /** 评论的数量 */
  numOfReview = undefined;

  /** 手机号 */
  phone = '';

  /** 可用积分余额 */
  pointsBalance = undefined;

  /** 将要过期的积分信息 */
  recentPointsExpireInfo = '';

  /** 用户最喜欢的社交媒体平台 */
  socialMedia = 'facebook';
}

class UserSettingsDTO {
  /** FaceID开关 */
  faceId = false;
}

class UserSettingsVO {
  /** FaceID开关 */
  faceId = false;
}

class UserSimpleProfileVO {
  /** 头像 */
  avatar = '';

  /** 用户ID */
  id = undefined;

  /** 昵称 */
  nickName = '';
}

class UserSimpleVO {
  /** UID */
  id = undefined;

  /** 会员等级 */
  memberLevelName = '';

  /** 昵称 */
  nickName = '';

  /** 手机号 */
  phone = '';

  /** 状态：0-已注销、1-正常、2-已冻结、3-已停用 */
  status = undefined;

  /** 状态名称 */
  statusName = '';
}

class UserVO {
  /** 用户ID */
  id = undefined;

  /** 用户昵称 */
  nickName = '';

  /** 邀请状态，固定只有一个值'成功' */
  status = '';
}

class WebFeedbackDTO {
  /** Your Email */
  email = '';

  /** Your Message */
  message = '';

  /** Name */
  name = '';

  /** State */
  state = '';

  /** Store Number */
  storeNo = '';

  /** Subject */
  subject = '';

  /** Topic */
  topic = '';
}

class WebRegisterDTO {
  /** 邀请码 */
  inviteCode = '';

  /** 密码 */
  password = '';

  /** 手机号 */
  phone = '';

  /** 临时票据 */
  ticket = '';
}

export const account = {
  Address,
  AppPointsDetailsPageQueryDTO,
  AppPointsDetailsVO,
  BindMemberCardCommandDTO,
  BizItem,
  CheckCodeDTO,
  CheckCodeInviteDTO,
  CheckCodeVO,
  CheckEmailCodeDTO,
  CheckSmsCodeDTO,
  ClosedUserPageQueryDTO,
  ClosedUserVO,
  ContactVO,
  DefaultMemberBenefitsCommandDTO,
  DefaultMemberBenefitsVO,
  DefaultPointsRulesCommandDTO,
  DefaultPointsRulesVO,
  DefaultUpgradeRulesCommandDTO,
  DefaultUpgradeRulesVO,
  DictionaryStrVO,
  DictionaryVO,
  EditPasswordDTO,
  EmailDTO,
  FeedbackDTO,
  FeedbackPageQueryDTO,
  FeedbackPageVO,
  FeedbackSuggestDTO,
  FeedbackVO,
  FrozenUserCommandDTO,
  InviteCodeDTO,
  LoginInfo,
  Map,
  MemberBenefitsDTO,
  MemberBenefitsVO,
  MemberLevelAllRulesVO,
  MemberLevelCommandDTO,
  MemberLevelNameVO,
  MemberLevelRulesVO,
  MemberLevelVO,
  NewAddressDTO,
  OrderAndRefund,
  PageInfo,
  PhoneDTO,
  PhonePwdDTO,
  PlatformAccountPointsDetailsPageQueryDTO,
  PlatformAccountPointsDetailsQueryDTO,
  PlatformAccountPointsDetailsVO,
  PlatformPointsAccountVO,
  PointsAdjustAddDTO,
  PointsAdjustOperateDTO,
  PointsAdjustPageQueryDTO,
  PointsAdjustVO,
  PointsDetailsLocPageQueryDTO,
  PointsDetailsLocQueryDTO,
  PointsDetailsLocVO,
  PointsDetailsPageQueryDTO,
  PointsDetailsQueryDTO,
  PointsDetailsVO,
  PointsMainPageVO,
  PointsRulesDTO,
  PointsRulesMainPageVO,
  PointsRulesVO,
  Response,
  S3PreSignInfo,
  SaveContactDTO,
  SendCodeVO,
  SetPasswordDTO,
  SmsCodeDTO,
  UnbindMemberCardCommandDTO,
  UpdateAddressDTO,
  UpdatePhoneDTO,
  UpdateUserStatusCommandDTO,
  UpgradeRulesCommandDTO,
  UpgradeRulesDTO,
  UpgradeRulesVO,
  UserContactHistoryVO,
  UserEnabledPageQueryDTO,
  UserEnabledVO,
  UserInviteFriendVO,
  UserMemberLevelInfoVO,
  UserNameDTO,
  UserOperationRecordVO,
  UserPageQueryDTO,
  UserProfileDTO,
  UserProfileVO,
  UserSettingsDTO,
  UserSettingsVO,
  UserSimpleProfileVO,
  UserSimpleVO,
  UserVO,
  WebFeedbackDTO,
  WebRegisterDTO,
};
