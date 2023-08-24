type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace account {
    export class Address {
      /** 单元楼栋 */
      aptUnit?: string;

      /** 城市 */
      city?: string;

      /** 配送说明 */
      deliveryNote?: string;

      /** 名字 */
      firstName?: string;

      /** 配送说明 */
      id?: number;

      /** 是否默认 */
      isDefault?: boolean;

      /** 是否最近使用 */
      isLastUsed?: boolean;

      /** 姓 */
      lastName?: string;

      /** 纬度 */
      latitude?: number;

      /** 经度 */
      longitude?: number;

      /** 手机号 */
      phone?: string;

      /** 州 */
      state?: string;

      /** 街道 */
      street?: string;

      /** 邮编 */
      zipCode?: string;
    }

    export class AppPointsDetailsPageQueryDTO {
      /** 分类：all-全部、earned-获取的积分、spend-消费的积分 */
      classify?: 'all' | 'earned' | 'spend';

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;
    }

    export class AppPointsDetailsVO {
      /** 积分 */
      amount?: string;

      /** 创建时间 */
      createdTime?: number;

      /** 事件类型名称 */
      eventTypeName?: string;

      /** 备注 */
      remark?: string;
    }

    export class BindMemberCardCommandDTO {
      /** Member card number */
      cardNo?: string;

      /** Temporary ticket */
      ticket?: string;

      /** User ID */
      userId?: number;
    }

    export class BizItem {
      /** bizId */
      bizId?: string;

      /** statusDesc */
      statusDesc?: string;
    }

    export class CheckCodeDTO {
      /** 验证码 */
      code?: string;

      /** 手机号 */
      phone?: string;
    }

    export class CheckCodeInviteDTO {
      /** 验证码 */
      code?: string;

      /** 邀请码 */
      inviteCode?: string;

      /** 手机号 */
      phone?: string;
    }

    export class CheckCodeVO {
      /** 临时票据 */
      ticket?: string;
    }

    export class CheckEmailCodeDTO {
      /** 验证码 */
      code?: string;

      /** 邮箱地址 */
      email?: string;
    }

    export class CheckSmsCodeDTO {
      /** 验证码 */
      code?: string;

      /** 手机号 */
      phone?: string;
    }

    export class ClosedUserPageQueryDTO {
      /** 终止会员卡号 */
      cardNoEnd?: string;

      /** 起始会员卡号 */
      cardNoStart?: string;

      /** 注册时间结束于 */
      createdTimeEnd?: string;

      /** 注册时间开始于 */
      createdTimeStart?: string;

      /** 邮箱 */
      email?: string;

      /** 昵称 */
      nickName?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 手机号码 */
      phone?: string;

      /** 邀请人手机号码 */
      phoneOfInviter?: string;

      /** 注册来源：1-APP、2-WEB */
      registrationSource?: 1 | 2 | 1 | 2;

      /** 会员状态：2-已注销 */
      status?: 2 | 2;
    }

    export class ClosedUserVO {
      /** 头像 */
      avatar?: string;

      /** 生日 */
      birthday?: string;

      /** 会员卡号 */
      cardNo?: string;

      /** 注册时间 */
      createdTime?: string;

      /** 邮箱 */
      email?: string;

      /** 等级类型 */
      feeType?: number;

      /** 性别 */
      gender?: number;

      /** 性别名称 */
      genderName?: string;

      /** 用户ID */
      id?: number;

      /** 邀请人ID */
      invitedBy?: number;

      /** 语言 */
      language?: number;

      /** 语言名称 */
      languageName?: string;

      /** 会员等级名称 */
      memberLevelName?: string;

      /** 昵称 */
      nickName?: string;

      /** 付费会员 */
      paidMember?: string;

      /** 手机号 */
      phone?: string;

      /** 积分余额 */
      pointsBalance?: number;

      /** 注册来源 */
      registrationSource?: number;

      /** 注册来源名称 */
      registrationSourceName?: string;

      /** 注销时间 */
      updatedTime?: string;
    }

    export class ContactVO {
      /** firstName */
      firstName?: string;

      /** id */
      id?: number;

      /** lastName */
      lastName?: string;

      /** phone */
      phone?: string;

      /** userId */
      userId?: number;
    }

    export class DefaultMemberBenefitsCommandDTO {
      /** 规则说明（英文） */
      enDescription?: string;

      /** 规则名称（英文） */
      enName?: string;

      /** 规则逻辑 */
      logic?: ObjectMap<any, object>;

      /** 规则说明（中文简体） */
      zhChsDescription?: string;

      /** 规则名称（中文简体） */
      zhChsName?: string;

      /** 规则说明（中文繁体） */
      zhChtDescription?: string;

      /** 规则名称（中文繁体） */
      zhChtName?: string;
    }

    export class DefaultMemberBenefitsVO {
      /** 规则说明（英文） */
      enDescription?: string;

      /** 规则名称（英文） */
      enName?: string;

      /** 规则ID */
      id?: number;

      /** 规则逻辑 */
      logic?: ObjectMap<any, object>;

      /** 更新人 */
      updatedBy?: number;

      /** 更新人名称 */
      updatedByName?: string;

      /** 更新时间 */
      updatedTime?: string;

      /** 规则说明（中文简体） */
      zhChsDescription?: string;

      /** 规则名称（中文简体） */
      zhChsName?: string;

      /** 规则说明（中文繁体） */
      zhChtDescription?: string;

      /** 规则名称（中文繁体） */
      zhChtName?: string;
    }

    export class DefaultPointsRulesCommandDTO {
      /** 规则说明（英文） */
      enDescription?: string;

      /** 规则名称（英文） */
      enName?: string;

      /** 规则逻辑 */
      logic?: ObjectMap<any, object>;

      /** 规则说明（中文简体） */
      zhChsDescription?: string;

      /** 规则名称（中文简体） */
      zhChsName?: string;

      /** 规则说明（中文繁体） */
      zhChtDescription?: string;

      /** 规则名称（中文繁体） */
      zhChtName?: string;
    }

    export class DefaultPointsRulesVO {
      /** 规则说明（英文） */
      enDescription?: string;

      /** 规则名称（英文） */
      enName?: string;

      /** 规则ID */
      id?: number;

      /** 规则逻辑 */
      logic?: ObjectMap<any, object>;

      /** 更新人 */
      updatedBy?: number;

      /** 更新人名称 */
      updatedByName?: string;

      /** 更新时间 */
      updatedTime?: string;

      /** 规则说明（中文简体） */
      zhChsDescription?: string;

      /** 规则名称（中文简体） */
      zhChsName?: string;

      /** 规则说明（中文繁体） */
      zhChtDescription?: string;

      /** 规则名称（中文繁体） */
      zhChtName?: string;
    }

    export class DefaultUpgradeRulesCommandDTO {
      /** 规则说明（英文） */
      enDescription?: string;

      /** 规则名称（英文） */
      enName?: string;

      /** 规则逻辑 */
      logic?: ObjectMap<any, object>;

      /** 规则说明（中文简体） */
      zhChsDescription?: string;

      /** 规则名称（中文简体） */
      zhChsName?: string;

      /** 规则说明（中文繁体） */
      zhChtDescription?: string;

      /** 规则名称（中文繁体） */
      zhChtName?: string;
    }

    export class DefaultUpgradeRulesVO {
      /** 规则说明（英文） */
      enDescription?: string;

      /** 规则名称（英文） */
      enName?: string;

      /** 规则ID */
      id?: number;

      /** 规则逻辑 */
      logic?: ObjectMap<any, object>;

      /** 更新人 */
      updatedBy?: number;

      /** 更新人名称 */
      updatedByName?: string;

      /** 更新时间 */
      updatedTime?: string;

      /** 规则说明（中文简体） */
      zhChsDescription?: string;

      /** 规则名称（中文简体） */
      zhChsName?: string;

      /** 规则说明（中文繁体） */
      zhChtDescription?: string;

      /** 规则名称（中文繁体） */
      zhChtName?: string;
    }

    export class DictionaryStrVO {
      /** Key */
      key?: string;

      /** Value */
      value?: string;
    }

    export class DictionaryVO {
      /** Key */
      key?: number;

      /** Value */
      value?: string;
    }

    export class EditPasswordDTO {
      /** 新密码 */
      newPassword?: string;

      /** 旧密码 */
      oldPassword?: string;

      /** 手机号 */
      phone?: string;

      /** 临时票据 */
      ticket?: string;
    }

    export class EmailDTO {
      /** 邮箱地址 */
      email?: string;
    }

    export class FeedbackDTO {
      /** 意见反馈 */
      feedback?: string;

      /** 上传图片 */
      imageList?: Array<string>;
    }

    export class FeedbackPageQueryDTO {
      /** 反馈内容 */
      content?: string;

      /** 终止提交时间 */
      createdTimeEnd?: number;

      /** 起始提交时间 */
      createdTimeStart?: number;

      /** 终止处理时间 */
      operateTimeEnd?: number;

      /** 起始处理时间 */
      operateTimeStart?: number;

      /** 处理人ID列表 */
      operatorIdList?: Array<number>;

      /** 处理人名称 */
      operatorName?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 状态：1-待处理、2-已处理 */
      status?: number;

      /** 会员昵称 */
      userNickName?: string;
    }

    export class FeedbackPageVO {
      /** 分页信息 */
      pageInfo?: defs.account.PageInfo<defs.account.FeedbackVO>;

      /** 待处理数量 */
      pendingCount?: number;

      /** 已处理数量 */
      processedCount?: number;

      /** 全部数量 */
      totalCount?: number;
    }

    export class FeedbackSuggestDTO {
      /** ID */
      id?: number;

      /** 处理意见 */
      suggestion?: string;
    }

    export class FeedbackVO {
      /** 反馈内容 */
      content?: string;

      /** 提交时间 */
      createdTime?: number;

      /** ID */
      id?: number;

      /** 反馈图片 */
      images?: Array<object>;

      /** 处理时间 */
      operateTime?: number;

      /** 处理人ID */
      operatorId?: number;

      /** 处理人名称 */
      operatorName?: string;

      /** 来源：1-APP、2-WEB */
      source?: number;

      /** 来源名称 */
      sourceName?: string;

      /** 状态：1-待处理、2-已处理 */
      status?: number;

      /** 状态名称 */
      statusName?: string;

      /** 处理意见 */
      suggestion?: string;

      /** 用户ID */
      userId?: number;

      /** 会员昵称 */
      userNickName?: string;
    }

    export class FrozenUserCommandDTO {
      /** 冻结终止时间 */
      endTime?: string;

      /** 操作原因 */
      remark?: string;

      /** 冻结时间终止前X天发系统消息提示 */
      reminderDays?: number;

      /** 冻结起始时间 */
      startTime?: string;

      /** 类型：1-永久冻结、2-短期冻结 */
      type?: number;

      /** 用户ID */
      userId?: number;
    }

    export class InviteCodeDTO {
      /** 邀请码 */
      code?: string;
    }

    export class LoginInfo {
      /** 头像 */
      avatar?: string;

      /** token 过期时间(s) */
      expireTime?: number;

      /** 昵称 */
      nickName?: string;

      /** 临时会话票据 */
      ticket?: string;

      /** token */
      token?: string;

      /** 用户 id */
      userId?: number;
    }

    export class Map<T0 = any, T1 = any> {}

    export class MemberBenefitsDTO {
      /** 默认的会员权益ID */
      defaultMemberBenefitsId?: number;

      /** 规则逻辑 */
      logic?: ObjectMap<any, object>;

      /** 是否勾选 */
      selected?: boolean;
    }

    export class MemberBenefitsVO {
      /** 默认的会员权益ID */
      defaultMemberBenefitsId?: number;

      /** 规则逻辑 */
      logic?: ObjectMap<any, object>;

      /** 是否勾选 */
      selected?: boolean;
    }

    export class MemberLevelAllRulesVO {
      /** benefitRuleList */
      benefitRuleList?: Array<defs.account.MemberLevelRulesVO>;

      /** pointRuleList */
      pointRuleList?: Array<defs.account.MemberLevelRulesVO>;
    }

    export class MemberLevelCommandDTO {
      /** 等级标识 */
      avatar?: string;

      /** 英文名称 */
      enName?: string;

      /** 等级类型：0-免费会员、1-付费会员 */
      feeType?: 0 | 1 | 0 | 1;

      /** 中文简体名称 */
      zhChsName?: string;

      /** 中文繁体名称 */
      zhChtName?: string;
    }

    export class MemberLevelNameVO {
      /** 会员等级ID */
      id?: number;

      /** 会员等级名称 */
      name?: string;
    }

    export class MemberLevelRulesVO {
      /** 规则说明 */
      description?: string;

      /** 规则名称 */
      name?: string;
    }

    export class MemberLevelVO {
      /** 等级标识 */
      avatar?: string;

      /** 英文名称 */
      enName?: string;

      /** 等级类型：0-免费会员、1-付费会员 */
      feeType?: number;

      /** 等级类型名称 */
      feeTypeName?: string;

      /** 会员等级ID */
      id?: number;

      /** 下一级 */
      nextLevelId?: number;

      /** 状态：0-已启用、1-已禁用 */
      status?: number;

      /** 状态名称 */
      statusName?: string;

      /** 更新人 */
      updatedBy?: number;

      /** 更新人名称 */
      updatedByName?: string;

      /** 更新时间 */
      updatedTime?: number;

      /** 中文简体名称 */
      zhChsName?: string;

      /** 中文繁体名称 */
      zhChtName?: string;
    }

    export class NewAddressDTO {
      /** 单元楼栋 */
      aptUnit?: string;

      /** 城市 */
      city: string;

      /** 配送说明 */
      deliveryNote?: string;

      /** 名字 */
      firstName: string;

      /** 是否默认 */
      isDefault?: boolean;

      /** 姓 */
      lastName: string;

      /** 维度 */
      latitude?: number;

      /** 经度 */
      longitude?: number;

      /** 手机号 */
      phone: string;

      /** 州 */
      state: string;

      /** 街道 */
      street: string;

      /** 邮编 */
      zipCode: string;
    }

    export class OrderAndRefund {
      /** orders */
      orders?: Array<defs.account.BizItem>;

      /** refunds */
      refunds?: Array<defs.account.BizItem>;
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

    export class PhoneDTO {
      /** 手机号 */
      phone?: string;
    }

    export class PhonePwdDTO {
      /** 密码 */
      password?: string;

      /** 手机号 */
      phone?: string;
    }

    export class PlatformAccountPointsDetailsPageQueryDTO {
      /** 积分变更时间结束于 */
      createdTimeEnd?: number;

      /** 积分变更时间开始于 */
      createdTimeStart?: number;

      /** 事项类型 */
      eventType?: number;

      /** 对账账户ID */
      oppositeAccountId?: string;

      /** 订单号 */
      orderId?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 主体账户ID */
      principalAccountId?: string;

      /** 售后单号 */
      subAfterSalesOrderId?: string;
    }

    export class PlatformAccountPointsDetailsQueryDTO {
      /** 积分变更时间结束于 */
      createdTimeEnd?: number;

      /** 积分变更时间开始于 */
      createdTimeStart?: number;

      /** 事项类型 */
      eventType?: number;

      /** 积分流水单号（PO+8位随机数字） */
      idList?: Array<string>;

      /** 对账账户ID */
      oppositeAccountId?: string;

      /** 订单号 */
      orderId?: string;

      /** 主体账户ID */
      principalAccountId?: string;

      /** 售后单号 */
      subAfterSalesOrderId?: string;
    }

    export class PlatformAccountPointsDetailsVO {
      /** 加速 */
      acceleration?: number;

      /** 积分变更 */
      amount?: number;

      /** 账户余额 */
      balance?: number;

      /** 积分变更时间戳 */
      createdTime?: number;

      /** 事项类型 */
      eventType?: number;

      /** 事项类型名称 */
      eventTypeName?: string;

      /** 积分流水单号（PO+8位随机数字） */
      id?: string;

      /** 对账账户ID */
      oppositeAccountId?: string;

      /** 对账账户名称 */
      oppositeAccountName?: string;

      /** 订单号 */
      orderId?: string;

      /** 主体账户ID */
      principalAccountId?: string;

      /** 主体账户名称 */
      principalAccountName?: string;

      /** 备注 */
      remark?: Array<defs.account.ObjectMap<string, string>>;

      /** 售后单号 */
      subAfterSalesOrderId?: string;
    }

    export class PlatformPointsAccountVO {
      /** 可用积分余额 */
      balance?: number;

      /** 账户编码 */
      code?: string;

      /** 创建时间 */
      createdTime?: number;

      /** 持有人 */
      holder?: string;

      /** 平台账户ID */
      id?: number;

      /** 账户名称 */
      name?: string;

      /** 用途 */
      purpose?: string;

      /** 状态 */
      status?: 'ACTIVATED';

      /** 状态名称 */
      statusName?: string;

      /** 积分总额 */
      totalAmount?: number;

      /** 类型 */
      type?: 'PLATFORM';

      /** 类型名称 */
      typeName?: string;
    }

    export class PointsAdjustAddDTO {
      /** 调整的积分点数（有符号） */
      amount?: number;

      /** 操作原因 */
      submitRemark?: string;

      /** 会员ID */
      userId?: number;
    }

    export class PointsAdjustOperateDTO {
      /** 积分调整ID */
      id?: number;

      /** 操作原因 */
      reviewRemark?: string;
    }

    export class PointsAdjustPageQueryDTO {
      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 手机号 */
      phone?: string;

      /** 积分调整时间结束于 */
      submitTimeEnd?: number;

      /** 积分调整时间开始于 */
      submitTimeStart?: number;

      /** 会员ID */
      userId?: number;
    }

    export class PointsAdjustVO {
      /** 调整数量 */
      amount?: number;

      /** 积分调整单号 */
      id?: number;

      /** 会员昵称 */
      nickName?: string;

      /** 手机号 */
      phone?: string;

      /** 审核操作原因 */
      reviewRemark?: string;

      /** 审核时间 */
      reviewTime?: number;

      /** 审核人 */
      reviewerName?: string;

      /** 审核状态：1-待审核、2-已通过、3-已拒绝 */
      status?: number;

      /** 审核状态名称 */
      statusName?: string;

      /** 积分调整原因 */
      submitRemark?: string;

      /** 积分调整发起时间 */
      submitTime?: number;

      /** 发起人 */
      submitterName?: string;

      /** 会员ID */
      userId?: number;
    }

    export class PointsDetailsLocPageQueryDTO {
      /** 会员卡号 */
      cardNo?: string;

      /** 事项类型 */
      eventType?: number;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 手机号 */
      phone?: string;

      /** 线下门店编号 */
      storeNoList?: Array<string>;

      /** 结束发生时间 */
      transTimeEnd?: string;

      /** 开始发生时间 */
      transTimeStart?: string;
    }

    export class PointsDetailsLocQueryDTO {
      /** 会员卡号 */
      cardNo?: string;

      /** 事项类型 */
      eventType?: number;

      /** 手机号 */
      phone?: string;

      /** 线下门店编号 */
      storeNoList?: Array<string>;

      /** 结束发生时间 */
      transTimeEnd?: string;

      /** 开始发生时间 */
      transTimeStart?: string;
    }

    export class PointsDetailsLocVO {
      /** 当前积分余额 */
      balance?: number;

      /** 会员卡号 */
      cardNo?: string;

      /** 事件类型 */
      eventType?: number;

      /** 事件类型名称 */
      eventTypeName?: string;

      /** 车道号 */
      laneNo?: string;

      /** 积分减少 */
      negativeAmo?: number;

      /** 手机号 */
      phone?: string;

      /** 积分增加 */
      positiveAmo?: number;

      /** 门店号 */
      storeNo?: string;

      /** 事务号 */
      transNo?: number;

      /** 发生时间 */
      transTime?: string;
    }

    export class PointsDetailsPageQueryDTO {
      /** 会员卡号 */
      cardNo?: string;

      /** 发生时间结束于 */
      createdTimeEnd?: number;

      /** 发生时间开始于 */
      createdTimeStart?: number;

      /** 事项类型 */
      eventType?: number;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 手机号 */
      phone?: string;

      /** 变更渠道 */
      source?: number;

      /** 门店编号 */
      storeNo?: string;

      /** 会员ID */
      userId?: number;
    }

    export class PointsDetailsQueryDTO {
      /** 会员卡号 */
      cardNo?: string;

      /** 发生时间结束于 */
      createdTimeEnd?: number;

      /** 发生时间开始于 */
      createdTimeStart?: number;

      /** 事项类型 */
      eventType?: number;

      /** 手机号 */
      phone?: string;

      /** 变更渠道 */
      source?: number;

      /** 门店编号 */
      storeNo?: string;

      /** 会员ID */
      userId?: number;
    }

    export class PointsDetailsVO {
      /** 积分加速 */
      acceleration?: number;

      /** 积分余额 */
      balance?: number;

      /** 会员卡号 */
      cardNo?: string;

      /** 创建时间 */
      createdTime?: number;

      /** 事件类型 */
      eventType?: number;

      /** 事件类型名称 */
      eventTypeName?: string;

      /** 过期时间 */
      expiryDate?: number;

      /** 明细ID */
      id?: number;

      /** 积分减少 */
      negativeAmo?: number;

      /** 手机号 */
      phone?: string;

      /** 积分增加 */
      positiveAmo?: number;

      /** 备注（包含有订单信息、售后单信息、规则信息） */
      remark?: Array<defs.account.ObjectMap<string, string>>;

      /** 积分变更渠道 */
      source?: number;

      /** 积分变更渠道名称 */
      sourceName?: string;

      /** 门店编号 */
      storeNo?: string;

      /** 会员ID */
      userId?: number;

      /** 会员昵称 */
      userNickName?: string;

      /** 会员状态 */
      userStatus?: number;

      /** 会员状态名称 */
      userStatusName?: string;
    }

    export class PointsMainPageVO {
      /** 积分明细列表 */
      appPointsDetailsList?: Array<defs.account.AppPointsDetailsVO>;

      /** 可用积分余额 */
      pointsBalance?: number;
    }

    export class PointsRulesDTO {
      /** 默认的积分规则ID */
      defaultPointsRulesId?: number;

      /** 规则逻辑 */
      logic?: ObjectMap<any, object>;

      /** 是否勾选 */
      selected?: boolean;
    }

    export class PointsRulesMainPageVO {
      /** 积分兑美元的兑换比率 */
      exchangeRate?: number;

      /** 积分规则 */
      pointRules?: Array<string>;

      /** 积分有效期（单位：天） */
      pointsValidityDays?: number;
    }

    export class PointsRulesVO {
      /** 默认的积分规则ID */
      defaultPointsRulesId?: number;

      /** 规则逻辑 */
      logic?: ObjectMap<any, object>;

      /** 是否勾选 */
      selected?: boolean;
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

    export class S3PreSignInfo {
      /** 上传后的访问地址 */
      key?: string;

      /** 上传 URL，请求方式 PUT */
      url?: string;
    }

    export class SaveContactDTO {
      /** firstName */
      firstName?: string;

      /** lastName */
      lastName?: string;

      /** phone */
      phone?: string;
    }

    export class SendCodeVO {
      /** 是否发送成功 */
      success?: boolean;

      /** 等待时间（单位：s） */
      waitTime?: number;
    }

    export class SetPasswordDTO {
      /** 密码 */
      password?: string;

      /** 手机号 */
      phone?: string;

      /** 临时票据 */
      ticket?: string;
    }

    export class SmsCodeDTO {
      /** 验证码 */
      code?: string;

      /** 手机号 */
      phone?: string;
    }

    export class UnbindMemberCardCommandDTO {
      /** Temporary ticket */
      ticket?: string;

      /** User ID */
      userId?: number;
    }

    export class UpdateAddressDTO {
      /** 单元楼栋 */
      aptUnit?: string;

      /** 城市 */
      city: string;

      /** 配送说明 */
      deliveryNote?: string;

      /** 名字 */
      firstName: string;

      /** id */
      id: number;

      /** 是否默认 */
      isDefault: boolean;

      /** 姓 */
      lastName: string;

      /** 维度 */
      latitude?: number;

      /** 经度 */
      longitude?: number;

      /** 手机号 */
      phone: string;

      /** 州 */
      state: string;

      /** 街道 */
      street: string;

      /** 邮编 */
      zipCode: string;
    }

    export class UpdatePhoneDTO {
      /** 手机号 */
      phone?: string;

      /** 临时票据 */
      ticket?: string;
    }

    export class UpdateUserStatusCommandDTO {
      /** 操作原因 */
      remark?: string;

      /** 用户ID */
      userId?: number;
    }

    export class UpgradeRulesCommandDTO {
      /** 升级规则明细 */
      list?: Array<defs.account.UpgradeRulesDTO>;

      /** 下一级 */
      nextLevelId?: number;
    }

    export class UpgradeRulesDTO {
      /** 默认的升级规则ID */
      defaultUpgradeRulesId?: number;

      /** 规则逻辑 */
      logic?: ObjectMap<any, object>;

      /** 是否勾选 */
      selected?: boolean;
    }

    export class UpgradeRulesVO {
      /** 默认的升级规则ID */
      defaultUpgradeRulesId?: number;

      /** 规则逻辑 */
      logic?: ObjectMap<any, object>;

      /** 是否勾选 */
      selected?: boolean;
    }

    export class UserContactHistoryVO {
      /** 历史邮箱地址 */
      emailList?: Array<string>;

      /** 历史手机号 */
      phoneList?: Array<string>;

      /** 用户ID */
      userId?: number;
    }

    export class UserEnabledPageQueryDTO {
      /** 会员等级 */
      memberLevelIdList?: Array<number>;

      /** 昵称 */
      nickName?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 手机号码 */
      phone?: string;

      /** 注册来源 */
      registrationSourceList?: Array<number>;
    }

    export class UserEnabledVO {
      /** 用户ID */
      id?: number;

      /** 会员等级 */
      memberLevelId?: number;

      /** 会员等级名称 */
      memberLevelName?: string;

      /** 昵称 */
      nickName?: string;

      /** 手机号 */
      phone?: string;

      /** 注册来源 */
      registrationSource?: number;

      /** 注册来源名称 */
      registrationSourceName?: string;

      /** 状态 */
      status?: number;

      /** 状态名称 */
      statusName?: string;
    }

    export class UserInviteFriendVO {
      /** 用户ID */
      id?: number;

      /** 邀请码 */
      inviteCode?: string;

      /** 成功邀请计数 */
      invitedCount?: number;

      /** 已邀请的好友列表 */
      invitedUserList?: Array<defs.account.UserVO>;

      /** 主页奖励信息 */
      rewardInfo?: string;

      /** 已获得的积分奖励 */
      rewardedPoints?: number;
    }

    export class UserMemberLevelInfoVO {
      /** 会员消费总金额（用于升级进度条） */
      totalAmount?: number;

      /** 升至下一级的信息 */
      upgradeInfo?: string;

      /** 会员等级升级阈值（用于升级进度条） */
      upgradeThresholdAmount?: number;
    }

    export class UserNameDTO {
      /** 用户头像 */
      avatar?: string;

      /** 用户ID/编码 */
      id?: number;

      /** 用户昵称 */
      name?: string;
    }

    export class UserOperationRecordVO {
      /** 操作时间 */
      createdTime?: string;

      /** 操作人 */
      operator?: number;

      /** 操作人名称 */
      operatorName?: string;

      /** 操作原因 */
      remark?: string;

      /** 操作类型 */
      type?: number;

      /** 操作类型名称 */
      typeName?: string;

      /** 用户ID */
      userId?: number;
    }

    export class UserPageQueryDTO {
      /** 终止会员卡号 */
      cardNoEnd?: string;

      /** 起始会员卡号 */
      cardNoStart?: string;

      /** 终止注册时间 */
      createdTimeEnd?: string;

      /** 起始注册时间 */
      createdTimeStart?: string;

      /** 邮箱 */
      email?: string;

      /** 昵称 */
      nickName?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 手机号码 */
      phone?: string;

      /** 邀请人手机号码 */
      phoneOfInviter?: string;

      /** 注册来源 */
      registrationSource?: number;

      /** 状态 */
      status?: number;
    }

    export class UserProfileDTO {
      /** 头像 */
      avatar?: string;

      /** 生日 */
      birthday?: string;

      /** 性别：0-保密、1-男、2-女 */
      gender?: 0 | 1 | 2 | 0 | 1 | 2;

      /** 语言：0-英语、1-中文简体、2-中文繁体 */
      language?: 0 | 1 | 2 | 0 | 1 | 2;

      /** 昵称 */
      nickName?: string;

      /** 用户最喜欢的社交媒体平台 */
      socialMedia?: 'facebook' | 'twitter' | 'instagram';
    }

    export class UserProfileVO {
      /** 头像 */
      avatar?: string;

      /** 生日 */
      birthday?: string;

      /** 生日修改的次数 */
      birthdayChanged?: number;

      /** 会员卡号 */
      cardNo?: string;

      /** 邮箱 */
      email?: string;

      /** 用户是否已经设置了密码 */
      existsPassword?: boolean;

      /** 性别：0-保密、1-男、2-女 */
      gender?: number;

      /** 语言：0-英语、1-中文简体、2-中文繁体 */
      language?: number;

      /** 会员等级名称 */
      memberLevelName?: string;

      /** 昵称 */
      nickName?: string;

      /** 昵称修改的次数 */
      nickNameChanged?: number;

      /** 优惠券的数量 */
      numOfCoupon?: number;

      /** 通知的数量 */
      numOfNotification?: number;

      /** 评论的数量 */
      numOfReview?: number;

      /** 手机号 */
      phone?: string;

      /** 可用积分余额 */
      pointsBalance?: number;

      /** 将要过期的积分信息 */
      recentPointsExpireInfo?: string;

      /** 用户最喜欢的社交媒体平台 */
      socialMedia?: 'facebook' | 'twitter' | 'instagram';
    }

    export class UserSettingsDTO {
      /** FaceID开关 */
      faceId?: boolean;
    }

    export class UserSettingsVO {
      /** FaceID开关 */
      faceId?: boolean;
    }

    export class UserSimpleProfileVO {
      /** 头像 */
      avatar?: string;

      /** 用户ID */
      id?: number;

      /** 昵称 */
      nickName?: string;
    }

    export class UserSimpleVO {
      /** UID */
      id?: number;

      /** 会员等级 */
      memberLevelName?: string;

      /** 昵称 */
      nickName?: string;

      /** 手机号 */
      phone?: string;

      /** 状态：0-已注销、1-正常、2-已冻结、3-已停用 */
      status?: number;

      /** 状态名称 */
      statusName?: string;
    }

    export class UserVO {
      /** 用户ID */
      id?: number;

      /** 用户昵称 */
      nickName?: string;

      /** 邀请状态，固定只有一个值'成功' */
      status?: string;
    }

    export class WebFeedbackDTO {
      /** Your Email */
      email?: string;

      /** Your Message */
      message?: string;

      /** Name */
      name?: string;

      /** State */
      state?: string;

      /** Store Number */
      storeNo?: string;

      /** Subject */
      subject?: string;

      /** Topic */
      topic?: string;
    }

    export class WebRegisterDTO {
      /** 邀请码 */
      inviteCode?: string;

      /** 密码 */
      password?: string;

      /** 手机号 */
      phone?: string;

      /** 临时票据 */
      ticket?: string;
    }
  }
}

declare namespace API {
  export namespace account {
    /**
     * BO 意见反馈
     */
    export namespace boFeedback {
      /**
       * 分页查询
       * /bo/feedback/page
       */
      export namespace pageQuery {
        export type pageQueryBody = defs.account.FeedbackPageQueryDTO;
        export type pageQueryOptions = Record<string, any>;
        export type pageQueryResponse =
          defs.account.Response<defs.account.FeedbackPageVO>;
        export type request = (
          body: pageQueryBody,
          options?: pageQueryOptions,
        ) => pageQueryResponse;
      }

      /**
       * 填写处理意见
       * /bo/feedback/suggest
       */
      export namespace suggest {
        export type suggestBody = defs.account.FeedbackSuggestDTO;
        export type suggestOptions = Record<string, any>;
        export type suggestResponse = defs.account.Response<string>;
        export type request = (
          body: suggestBody,
          options?: suggestOptions,
        ) => suggestResponse;
      }
    }

    /**
     * BO 会员权益
     */
    export namespace boMemberBenefits {
      /**
       * 查询所有的默认的会员权益
       * /bo/member/benefits/list
       */
      export namespace queryAllDefaultMemberBenefits {
        export type queryAllDefaultMemberBenefitsOptions = Record<string, any>;
        export type queryAllDefaultMemberBenefitsResponse =
          defs.account.Response<Array<defs.account.DefaultMemberBenefitsVO>>;
        export type request = (
          options?: queryAllDefaultMemberBenefitsOptions,
        ) => queryAllDefaultMemberBenefitsResponse;
      }

      /**
       * 更新默认的会员权益
       * /bo/member/benefits/update/{id}
       */
      export namespace updateDefaultMemberBenefits {
        export type updateDefaultMemberBenefitsBody =
          defs.account.DefaultMemberBenefitsCommandDTO;
        export type updateDefaultMemberBenefitsPath = {
          /** id */
          id: number;
        };
        export type updateDefaultMemberBenefitsOptions = Record<string, any>;
        export type updateDefaultMemberBenefitsResponse =
          defs.account.Response<string>;
        export type request = (
          body: updateDefaultMemberBenefitsBody,
          path: updateDefaultMemberBenefitsPath,
          options?: updateDefaultMemberBenefitsOptions,
        ) => updateDefaultMemberBenefitsResponse;
      }
    }

    /**
     * BO 会员等级
     */
    export namespace boMemberLevel {
      /**
       * 配置会员等级对应的会员权益
       * /bo/member/level/config/benefits/{id}
       */
      export namespace configMemberBenefits {
        export type configMemberBenefitsBody =
          Array<defs.account.MemberBenefitsDTO>;
        export type configMemberBenefitsPath = {
          /** id */
          id: number;
        };
        export type configMemberBenefitsOptions = Record<string, any>;
        export type configMemberBenefitsResponse =
          defs.account.Response<string>;
        export type request = (
          body: configMemberBenefitsBody,
          path: configMemberBenefitsPath,
          options?: configMemberBenefitsOptions,
        ) => configMemberBenefitsResponse;
      }

      /**
       * 配置会员等级对应的积分规则
       * /bo/member/level/config/points-rules/{id}
       */
      export namespace configPointsRules {
        export type configPointsRulesBody = Array<defs.account.PointsRulesDTO>;
        export type configPointsRulesPath = {
          /** id */
          id: number;
        };
        export type configPointsRulesOptions = Record<string, any>;
        export type configPointsRulesResponse = defs.account.Response<string>;
        export type request = (
          body: configPointsRulesBody,
          path: configPointsRulesPath,
          options?: configPointsRulesOptions,
        ) => configPointsRulesResponse;
      }

      /**
       * 配置会员等级对应的升级规则
       * /bo/member/level/config/upgrade-rules/{id}
       */
      export namespace configUpgradeRules {
        export type configUpgradeRulesBody =
          defs.account.UpgradeRulesCommandDTO;
        export type configUpgradeRulesPath = {
          /** id */
          id: number;
        };
        export type configUpgradeRulesOptions = Record<string, any>;
        export type configUpgradeRulesResponse = defs.account.Response<string>;
        export type request = (
          body: configUpgradeRulesBody,
          path: configUpgradeRulesPath,
          options?: configUpgradeRulesOptions,
        ) => configUpgradeRulesResponse;
      }

      /**
       * 创建新的会员等级
       * /bo/member/level/create
       */
      export namespace createMemberLevel {
        export type createMemberLevelBody = defs.account.MemberLevelCommandDTO;
        export type createMemberLevelOptions = Record<string, any>;
        export type createMemberLevelResponse = defs.account.Response<string>;
        export type request = (
          body: createMemberLevelBody,
          options?: createMemberLevelOptions,
        ) => createMemberLevelResponse;
      }

      /**
       * 查询会员等级下拉列表
       * /bo/member/level/dropdown/list
       */
      export namespace listMemberLevelForDropdown {
        export type listMemberLevelForDropdownOptions = Record<string, any>;
        export type listMemberLevelForDropdownResponse = defs.account.Response<
          Array<defs.account.DictionaryVO>
        >;
        export type request = (
          options?: listMemberLevelForDropdownOptions,
        ) => listMemberLevelForDropdownResponse;
      }

      /**
       * 查询所有的会员等级
       * /bo/member/level/list
       */
      export namespace listAllMemberLevels {
        export type listAllMemberLevelsOptions = Record<string, any>;
        export type listAllMemberLevelsResponse = defs.account.Response<
          Array<defs.account.MemberLevelVO>
        >;
        export type request = (
          options?: listAllMemberLevelsOptions,
        ) => listAllMemberLevelsResponse;
      }

      /**
       * 查询会员等级对应的会员权益
       * /bo/member/level/list/benefits/{id}
       */
      export namespace listMemberBenefits {
        export type listMemberBenefitsPath = {
          /** id */
          id: number;
        };
        export type listMemberBenefitsOptions = Record<string, any>;
        export type listMemberBenefitsResponse = defs.account.Response<
          Array<defs.account.MemberBenefitsVO>
        >;
        export type request = (
          path: listMemberBenefitsPath,
          options?: listMemberBenefitsOptions,
        ) => listMemberBenefitsResponse;
      }

      /**
       * 查询会员等级对应的积分规则
       * /bo/member/level/list/points-rules/{id}
       */
      export namespace listPointsRules {
        export type listPointsRulesPath = {
          /** id */
          id: number;
        };
        export type listPointsRulesOptions = Record<string, any>;
        export type listPointsRulesResponse = defs.account.Response<
          Array<defs.account.PointsRulesVO>
        >;
        export type request = (
          path: listPointsRulesPath,
          options?: listPointsRulesOptions,
        ) => listPointsRulesResponse;
      }

      /**
       * 查询会员等级对应的升级规则
       * /bo/member/level/list/upgrade-rules/{id}
       */
      export namespace listUpgradeRules {
        export type listUpgradeRulesPath = {
          /** id */
          id: number;
        };
        export type listUpgradeRulesOptions = Record<string, any>;
        export type listUpgradeRulesResponse = defs.account.Response<
          Array<defs.account.UpgradeRulesVO>
        >;
        export type request = (
          path: listUpgradeRulesPath,
          options?: listUpgradeRulesOptions,
        ) => listUpgradeRulesResponse;
      }

      /**
       * 更新会员等级的状态
       * /bo/member/level/update/status/{id}/{status}
       */
      export namespace updateMemberLevelStatus {
        export type updateMemberLevelStatusPath = {
          /** id */
          id: number;
        };
        export type updateMemberLevelStatusOptions = Record<string, any>;
        export type updateMemberLevelStatusResponse =
          defs.account.Response<string>;
        export type request = (
          path: updateMemberLevelStatusPath,
          options?: updateMemberLevelStatusOptions,
        ) => updateMemberLevelStatusResponse;
      }

      /**
       * 更新会员等级
       * /bo/member/level/update/{id}
       */
      export namespace updateMemberLevel {
        export type updateMemberLevelBody = defs.account.MemberLevelCommandDTO;
        export type updateMemberLevelPath = {
          /** id */
          id: number;
        };
        export type updateMemberLevelOptions = Record<string, any>;
        export type updateMemberLevelResponse = defs.account.Response<string>;
        export type request = (
          body: updateMemberLevelBody,
          path: updateMemberLevelPath,
          options?: updateMemberLevelOptions,
        ) => updateMemberLevelResponse;
      }
    }

    /**
     * BO 积分预算（财务）
     */
    export namespace boPlatformPointsAccount {
      /**
       * 查询平台积分账户列表
       * /bo/platform-points/account/list
       */
      export namespace list {
        export type listParam = {
          /** status */
          status?: 'ACTIVATED';
        };
        export type listOptions = Record<string, any>;
        export type listResponse = defs.account.Response<
          Array<defs.account.PlatformPointsAccountVO>
        >;
        export type request = (
          params: listParam,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 根据账户编码查询提示账户
       * /bo/platform-points/account/notice-user/by-id
       */
      export namespace getNoticeUserById {
        export type getNoticeUserByIdParam = {
          /** userId */
          userId: number;
        };
        export type getNoticeUserByIdOptions = Record<string, any>;
        export type getNoticeUserByIdResponse = defs.account.Response<
          Array<defs.account.UserNameDTO>
        >;
        export type request = (
          params: getNoticeUserByIdParam,
          options?: getNoticeUserByIdOptions,
        ) => getNoticeUserByIdResponse;
      }

      /**
       * 根据账户名称查询提示账户
       * /bo/platform-points/account/notice-user/by-name
       */
      export namespace getNoticeUserByName {
        export type getNoticeUserByNameParam = {
          /** name */
          name: string;
        };
        export type getNoticeUserByNameOptions = Record<string, any>;
        export type getNoticeUserByNameResponse = defs.account.Response<
          Array<defs.account.UserNameDTO>
        >;
        export type request = (
          params: getNoticeUserByNameParam,
          options?: getNoticeUserByNameOptions,
        ) => getNoticeUserByNameResponse;
      }

      /**
       * 查询已选择的提示账户
       * /bo/platform-points/account/notice-user/selected/{id}
       */
      export namespace getNoticeUserSelectedById {
        export type getNoticeUserSelectedByIdPath = {
          /** id */
          id: number;
        };
        export type getNoticeUserSelectedByIdOptions = Record<string, any>;
        export type getNoticeUserSelectedByIdResponse = defs.account.Response<
          Array<defs.account.UserNameDTO>
        >;
        export type request = (
          path: getNoticeUserSelectedByIdPath,
          options?: getNoticeUserSelectedByIdOptions,
        ) => getNoticeUserSelectedByIdResponse;
      }

      /**
       * 提交/保存提示账户
       * /bo/platform-points/account/notice-user/{id}
       */
      export namespace modifyPointsAmount {
        export type modifyPointsAmountParam = {
          /** noticeUserIdSet */
          noticeUserIdSet: Array<number>;
        };
        export type modifyPointsAmountPath = {
          /** id */
          id: number;
        };
        export type modifyPointsAmountOptions = Record<string, any>;
        export type modifyPointsAmountResponse = defs.account.Response<string>;
        export type request = (
          params: modifyPointsAmountParam,
          path: modifyPointsAmountPath,
          options?: modifyPointsAmountOptions,
        ) => modifyPointsAmountResponse;
      }

      /**
       * 金额变动
       * /bo/platform-points/account/points/amount/{id}
       */
      export namespace putPointsAmountById {
        export type putPointsAmountByIdParam = {
          /** pointsAmount */
          pointsAmount: number;
        };
        export type putPointsAmountByIdPath = {
          /** id */
          id: number;
        };
        export type putPointsAmountByIdOptions = Record<string, any>;
        export type putPointsAmountByIdResponse = defs.account.Response<string>;
        export type request = (
          params: putPointsAmountByIdParam,
          path: putPointsAmountByIdPath,
          options?: putPointsAmountByIdOptions,
        ) => putPointsAmountByIdResponse;
      }

      /**
       * 查询状态下拉列表
       * /bo/platform-points/account/status/dropdown/list
       */
      export namespace listStatusForDropdown {
        export type listStatusForDropdownOptions = Record<string, any>;
        export type listStatusForDropdownResponse = defs.account.Response<
          Array<defs.account.DictionaryStrVO>
        >;
        export type request = (
          options?: listStatusForDropdownOptions,
        ) => listStatusForDropdownResponse;
      }
    }

    /**
     * BO 积分流水（财务）
     */
    export namespace boPlatformPointsDetails {
      /**
       * 查询事项类型下拉列表
       * /bo/platform-points/details/event-type/dropdown
       */
      export namespace getEventTypeDropdown {
        export type getEventTypeDropdownOptions = Record<string, any>;
        export type getEventTypeDropdownResponse = defs.account.Response<
          Array<defs.account.DictionaryVO>
        >;
        export type request = (
          options?: getEventTypeDropdownOptions,
        ) => getEventTypeDropdownResponse;
      }

      /**
       * 导出平台账户积分流水
       * /bo/platform-points/details/platform-account/export
       */
      export namespace exportPlatformAccountPointsDetails {
        export type exportPlatformAccountPointsDetailsBody =
          defs.account.PlatformAccountPointsDetailsQueryDTO;
        export type exportPlatformAccountPointsDetailsOptions = Record<
          string,
          any
        >;
        export type exportPlatformAccountPointsDetailsResponse = any;
        export type request = (
          body: exportPlatformAccountPointsDetailsBody,
          options?: exportPlatformAccountPointsDetailsOptions,
        ) => exportPlatformAccountPointsDetailsResponse;
      }

      /**
       * 分页查询平台账户积分流水
       * /bo/platform-points/details/platform-account/page
       */
      export namespace pageQueryPlatformAccountPointsDetails {
        export type pageQueryPlatformAccountPointsDetailsBody =
          defs.account.PlatformAccountPointsDetailsPageQueryDTO;
        export type pageQueryPlatformAccountPointsDetailsOptions = Record<
          string,
          any
        >;
        export type pageQueryPlatformAccountPointsDetailsResponse =
          defs.account.Response<
            defs.account.PageInfo<defs.account.PlatformAccountPointsDetailsVO>
          >;
        export type request = (
          body: pageQueryPlatformAccountPointsDetailsBody,
          options?: pageQueryPlatformAccountPointsDetailsOptions,
        ) => pageQueryPlatformAccountPointsDetailsResponse;
      }

      /**
       * 导出用户账户积分流水
       * /bo/platform-points/details/user-account/export
       */
      export namespace exportUserAccountPointsDetails {
        export type exportUserAccountPointsDetailsBody =
          defs.account.PlatformAccountPointsDetailsQueryDTO;
        export type exportUserAccountPointsDetailsOptions = Record<string, any>;
        export type exportUserAccountPointsDetailsResponse = any;
        export type request = (
          body: exportUserAccountPointsDetailsBody,
          options?: exportUserAccountPointsDetailsOptions,
        ) => exportUserAccountPointsDetailsResponse;
      }

      /**
       * 分页查询用户账户积分流水
       * /bo/platform-points/details/user-account/page
       */
      export namespace pageQueryUserAccountPointsDetails {
        export type pageQueryUserAccountPointsDetailsBody =
          defs.account.PlatformAccountPointsDetailsPageQueryDTO;
        export type pageQueryUserAccountPointsDetailsOptions = Record<
          string,
          any
        >;
        export type pageQueryUserAccountPointsDetailsResponse =
          defs.account.Response<
            defs.account.PageInfo<defs.account.PlatformAccountPointsDetailsVO>
          >;
        export type request = (
          body: pageQueryUserAccountPointsDetailsBody,
          options?: pageQueryUserAccountPointsDetailsOptions,
        ) => pageQueryUserAccountPointsDetailsResponse;
      }
    }

    /**
     * BO 手动调整积分
     */
    export namespace boPointsAdjust {
      /**
       * 手动调整积分
       * /bo/points/adjust/add
       */
      export namespace addPointsAdjust {
        export type addPointsAdjustBody = defs.account.PointsAdjustAddDTO;
        export type addPointsAdjustOptions = Record<string, any>;
        export type addPointsAdjustResponse = defs.account.Response<string>;
        export type request = (
          body: addPointsAdjustBody,
          options?: addPointsAdjustOptions,
        ) => addPointsAdjustResponse;
      }

      /**
       * 审核/通过
       * /bo/points/adjust/operate/pass
       */
      export namespace operatePointsAdjustPass {
        export type operatePointsAdjustPassBody =
          defs.account.PointsAdjustOperateDTO;
        export type operatePointsAdjustPassOptions = Record<string, any>;
        export type operatePointsAdjustPassResponse =
          defs.account.Response<string>;
        export type request = (
          body: operatePointsAdjustPassBody,
          options?: operatePointsAdjustPassOptions,
        ) => operatePointsAdjustPassResponse;
      }

      /**
       * 审核/拒绝
       * /bo/points/adjust/operate/reject
       */
      export namespace operatePointsAdjustReject {
        export type operatePointsAdjustRejectBody =
          defs.account.PointsAdjustOperateDTO;
        export type operatePointsAdjustRejectOptions = Record<string, any>;
        export type operatePointsAdjustRejectResponse =
          defs.account.Response<string>;
        export type request = (
          body: operatePointsAdjustRejectBody,
          options?: operatePointsAdjustRejectOptions,
        ) => operatePointsAdjustRejectResponse;
      }

      /**
       * 分页查询积分调整列表
       * /bo/points/adjust/page
       */
      export namespace pageQueryPointsAdjust {
        export type pageQueryPointsAdjustBody =
          defs.account.PointsAdjustPageQueryDTO;
        export type pageQueryPointsAdjustOptions = Record<string, any>;
        export type pageQueryPointsAdjustResponse = defs.account.Response<
          defs.account.PageInfo<defs.account.PointsAdjustVO>
        >;
        export type request = (
          body: pageQueryPointsAdjustBody,
          options?: pageQueryPointsAdjustOptions,
        ) => pageQueryPointsAdjustResponse;
      }
    }

    /**
     * BO 积分明细
     */
    export namespace boPointsDetails {
      /**
       * 查询事项类型下拉列表
       * /bo/points/details/event-type/dropdown
       */
      export namespace getEventTypeDropdown {
        export type getEventTypeDropdownOptions = Record<string, any>;
        export type getEventTypeDropdownResponse = defs.account.Response<
          Array<defs.account.DictionaryVO>
        >;
        export type request = (
          options?: getEventTypeDropdownOptions,
        ) => getEventTypeDropdownResponse;
      }

      /**
       * 导出积分明细
       * /bo/points/details/export
       */
      export namespace exportPointsDetails {
        export type exportPointsDetailsBody =
          defs.account.PointsDetailsQueryDTO;
        export type exportPointsDetailsOptions = Record<string, any>;
        export type exportPointsDetailsResponse = any;
        export type request = (
          body: exportPointsDetailsBody,
          options?: exportPointsDetailsOptions,
        ) => exportPointsDetailsResponse;
      }

      /**
       * 分页查询积分明细
       * /bo/points/details/page
       */
      export namespace pageQueryPointsDetails {
        export type pageQueryPointsDetailsBody =
          defs.account.PointsDetailsPageQueryDTO;
        export type pageQueryPointsDetailsOptions = Record<string, any>;
        export type pageQueryPointsDetailsResponse = defs.account.Response<
          defs.account.PageInfo<defs.account.PointsDetailsVO>
        >;
        export type request = (
          body: pageQueryPointsDetailsBody,
          options?: pageQueryPointsDetailsOptions,
        ) => pageQueryPointsDetailsResponse;
      }

      /**
       * 查询积分变更渠道下拉列表
       * /bo/points/details/source/dropdown
       */
      export namespace getSourceDropdown {
        export type getSourceDropdownOptions = Record<string, any>;
        export type getSourceDropdownResponse = defs.account.Response<
          Array<defs.account.DictionaryVO>
        >;
        export type request = (
          options?: getSourceDropdownOptions,
        ) => getSourceDropdownResponse;
      }

      /**
       * 查询门店编号下拉列表
       * /bo/points/details/store-no/dropdown
       */
      export namespace getStoreNoDropdown {
        export type getStoreNoDropdownOptions = Record<string, any>;
        export type getStoreNoDropdownResponse = defs.account.Response<
          Array<string>
        >;
        export type request = (
          options?: getStoreNoDropdownOptions,
        ) => getStoreNoDropdownResponse;
      }

      /**
       * 临时积分充值接口（测试用）
       * /bo/points/details/temporary/recharge/{userId}
       */
      export namespace temporaryPointsRecharge {
        export type temporaryPointsRechargeParam = {
          /** amount */
          amount: number;
        };
        export type temporaryPointsRechargePath = {
          /** userId */
          userId: number;
        };
        export type temporaryPointsRechargeOptions = Record<string, any>;
        export type temporaryPointsRechargeResponse =
          defs.account.Response<number>;
        export type request = (
          params: temporaryPointsRechargeParam,
          path: temporaryPointsRechargePath,
          options?: temporaryPointsRechargeOptions,
        ) => temporaryPointsRechargeResponse;
      }
    }

    /**
     * BO 线下积分明细
     */
    export namespace boPointsDetailsLoc {
      /**
       * 查询事项类型下拉列表
       * /bo/points/details/loc/event-type/dropdown
       */
      export namespace getEventTypeDropdown {
        export type getEventTypeDropdownOptions = Record<string, any>;
        export type getEventTypeDropdownResponse = defs.account.Response<
          Array<defs.account.DictionaryVO>
        >;
        export type request = (
          options?: getEventTypeDropdownOptions,
        ) => getEventTypeDropdownResponse;
      }

      /**
       * 导出积分明细
       * /bo/points/details/loc/export
       */
      export namespace exportPointsDetails {
        export type exportPointsDetailsBody =
          defs.account.PointsDetailsLocQueryDTO;
        export type exportPointsDetailsOptions = Record<string, any>;
        export type exportPointsDetailsResponse = any;
        export type request = (
          body: exportPointsDetailsBody,
          options?: exportPointsDetailsOptions,
        ) => exportPointsDetailsResponse;
      }

      /**
       * 分页查询积分明细
       * /bo/points/details/loc/page
       */
      export namespace pageQuery {
        export type pageQueryBody = defs.account.PointsDetailsLocPageQueryDTO;
        export type pageQueryOptions = Record<string, any>;
        export type pageQueryResponse = defs.account.Response<
          defs.account.PageInfo<defs.account.PointsDetailsLocVO>
        >;
        export type request = (
          body: pageQueryBody,
          options?: pageQueryOptions,
        ) => pageQueryResponse;
      }

      /**
       * 查询门店编号下拉列表
       * /bo/points/details/loc/store-no/dropdown
       */
      export namespace getStoreNoDropdown {
        export type getStoreNoDropdownOptions = Record<string, any>;
        export type getStoreNoDropdownResponse = defs.account.Response<
          Array<string>
        >;
        export type request = (
          options?: getStoreNoDropdownOptions,
        ) => getStoreNoDropdownResponse;
      }
    }

    /**
     * BO 积分规则
     */
    export namespace boPointsRules {
      /**
       * 查询所有的默认积分规则
       * /bo/points/rules/list
       */
      export namespace queryAllDefaultPointsRules {
        export type queryAllDefaultPointsRulesOptions = Record<string, any>;
        export type queryAllDefaultPointsRulesResponse = defs.account.Response<
          Array<defs.account.DefaultPointsRulesVO>
        >;
        export type request = (
          options?: queryAllDefaultPointsRulesOptions,
        ) => queryAllDefaultPointsRulesResponse;
      }

      /**
       * 更新默认的积分规则
       * /bo/points/rules/update/{id}
       */
      export namespace updateDefaultPointsRules {
        export type updateDefaultPointsRulesBody =
          defs.account.DefaultPointsRulesCommandDTO;
        export type updateDefaultPointsRulesPath = {
          /** id */
          id: number;
        };
        export type updateDefaultPointsRulesOptions = Record<string, any>;
        export type updateDefaultPointsRulesResponse =
          defs.account.Response<string>;
        export type request = (
          body: updateDefaultPointsRulesBody,
          path: updateDefaultPointsRulesPath,
          options?: updateDefaultPointsRulesOptions,
        ) => updateDefaultPointsRulesResponse;
      }
    }

    /**
     * BO 升级规则
     */
    export namespace boUpgradeRules {
      /**
       * 查询所有的默认的升级规则
       * /bo/upgrade/rules/list
       */
      export namespace queryAllDefaultUpgradeRules {
        export type queryAllDefaultUpgradeRulesOptions = Record<string, any>;
        export type queryAllDefaultUpgradeRulesResponse = defs.account.Response<
          Array<defs.account.DefaultUpgradeRulesVO>
        >;
        export type request = (
          options?: queryAllDefaultUpgradeRulesOptions,
        ) => queryAllDefaultUpgradeRulesResponse;
      }

      /**
       * 更新默认的升级规则
       * /bo/upgrade/rules/update/{id}
       */
      export namespace updateDefaultUpgradeRules {
        export type updateDefaultUpgradeRulesBody =
          defs.account.DefaultUpgradeRulesCommandDTO;
        export type updateDefaultUpgradeRulesPath = {
          /** id */
          id: number;
        };
        export type updateDefaultUpgradeRulesOptions = Record<string, any>;
        export type updateDefaultUpgradeRulesResponse =
          defs.account.Response<string>;
        export type request = (
          body: updateDefaultUpgradeRulesBody,
          path: updateDefaultUpgradeRulesPath,
          options?: updateDefaultUpgradeRulesOptions,
        ) => updateDefaultUpgradeRulesResponse;
      }
    }

    /**
     * BO 用户
     */
    export namespace boUser {
      /**
       * 绑定会员卡
       * /bo/user/card/bind
       */
      export namespace bindMemberCard {
        export type bindMemberCardBody = defs.account.BindMemberCardCommandDTO;
        export type bindMemberCardOptions = Record<string, any>;
        export type bindMemberCardResponse = defs.account.Response<string>;
        export type request = (
          body: bindMemberCardBody,
          options?: bindMemberCardOptions,
        ) => bindMemberCardResponse;
      }

      /**
       * 绑定会员卡-校验短信验证码
       * /bo/user/card/bind/check/sms/code
       */
      export namespace checkSmsCodeForBindMemberCard {
        export type checkSmsCodeForBindMemberCardBody =
          defs.account.CheckSmsCodeDTO;
        export type checkSmsCodeForBindMemberCardOptions = Record<string, any>;
        export type checkSmsCodeForBindMemberCardResponse =
          defs.account.Response<defs.account.CheckCodeVO>;
        export type request = (
          body: checkSmsCodeForBindMemberCardBody,
          options?: checkSmsCodeForBindMemberCardOptions,
        ) => checkSmsCodeForBindMemberCardResponse;
      }

      /**
       * 绑定会员卡-发送短信验证码
       * /bo/user/card/bind/send/sms/code
       */
      export namespace sendSmsCodeForBindMemberCard {
        export type sendSmsCodeForBindMemberCardBody = defs.account.PhoneDTO;
        export type sendSmsCodeForBindMemberCardOptions = Record<string, any>;
        export type sendSmsCodeForBindMemberCardResponse =
          defs.account.Response<defs.account.SendCodeVO>;
        export type request = (
          body: sendSmsCodeForBindMemberCardBody,
          options?: sendSmsCodeForBindMemberCardOptions,
        ) => sendSmsCodeForBindMemberCardResponse;
      }

      /**
       * 会员卡解绑
       * /bo/user/card/unbind
       */
      export namespace unbindMemberCard {
        export type unbindMemberCardBody =
          defs.account.UnbindMemberCardCommandDTO;
        export type unbindMemberCardOptions = Record<string, any>;
        export type unbindMemberCardResponse = defs.account.Response<string>;
        export type request = (
          body: unbindMemberCardBody,
          options?: unbindMemberCardOptions,
        ) => unbindMemberCardResponse;
      }

      /**
       * 会员卡解绑-校验短信验证码
       * /bo/user/card/unbind/check/sms/code
       */
      export namespace checkSmsCodeForUnbindMemberCard {
        export type checkSmsCodeForUnbindMemberCardBody =
          defs.account.CheckSmsCodeDTO;
        export type checkSmsCodeForUnbindMemberCardOptions = Record<
          string,
          any
        >;
        export type checkSmsCodeForUnbindMemberCardResponse =
          defs.account.Response<defs.account.CheckCodeVO>;
        export type request = (
          body: checkSmsCodeForUnbindMemberCardBody,
          options?: checkSmsCodeForUnbindMemberCardOptions,
        ) => checkSmsCodeForUnbindMemberCardResponse;
      }

      /**
       * 会员卡解绑-发送短信验证码
       * /bo/user/card/unbind/send/sms/code
       */
      export namespace sendSmsCodeForUnbindMemberCard {
        export type sendSmsCodeForUnbindMemberCardBody = defs.account.PhoneDTO;
        export type sendSmsCodeForUnbindMemberCardOptions = Record<string, any>;
        export type sendSmsCodeForUnbindMemberCardResponse =
          defs.account.Response<defs.account.SendCodeVO>;
        export type request = (
          body: sendSmsCodeForUnbindMemberCardBody,
          options?: sendSmsCodeForUnbindMemberCardOptions,
        ) => sendSmsCodeForUnbindMemberCardResponse;
      }

      /**
       * 注销用户
       * /bo/user/close
       */
      export namespace closeUser {
        export type closeUserBody = defs.account.UpdateUserStatusCommandDTO;
        export type closeUserOptions = Record<string, any>;
        export type closeUserResponse = defs.account.Response<string>;
        export type request = (
          body: closeUserBody,
          options?: closeUserOptions,
        ) => closeUserResponse;
      }

      /**
       * 查询用户的历史联系信息
       * /bo/user/contact/history/{userId}
       */
      export namespace getUserContactHistory {
        export type getUserContactHistoryPath = {
          /** userId */
          userId: number;
        };
        export type getUserContactHistoryOptions = Record<string, any>;
        export type getUserContactHistoryResponse =
          defs.account.Response<defs.account.UserContactHistoryVO>;
        export type request = (
          path: getUserContactHistoryPath,
          options?: getUserContactHistoryOptions,
        ) => getUserContactHistoryResponse;
      }

      /**
       * 停用用户
       * /bo/user/disable
       */
      export namespace disableUser {
        export type disableUserBody = defs.account.UpdateUserStatusCommandDTO;
        export type disableUserOptions = Record<string, any>;
        export type disableUserResponse = defs.account.Response<string>;
        export type request = (
          body: disableUserBody,
          options?: disableUserOptions,
        ) => disableUserResponse;
      }

      /**
       * 获取文件上传的URL
       * /bo/user/file-upload/url
       */
      export namespace getFileUrl {
        export type getFileUrlParam = {
          /** contentType */
          contentType?: string;
        };
        export type getFileUrlOptions = Record<string, any>;
        export type getFileUrlResponse =
          defs.account.Response<defs.account.S3PreSignInfo>;
        export type request = (
          params: getFileUrlParam,
          options?: getFileUrlOptions,
        ) => getFileUrlResponse;
      }

      /**
       * 冻结用户
       * /bo/user/frozen
       */
      export namespace frozenUser {
        export type frozenUserBody = defs.account.FrozenUserCommandDTO;
        export type frozenUserOptions = Record<string, any>;
        export type frozenUserResponse = defs.account.Response<string>;
        export type request = (
          body: frozenUserBody,
          options?: frozenUserOptions,
        ) => frozenUserResponse;
      }

      /**
       * 查询用户操作记录
       * /bo/user/operation/record/{userId}
       */
      export namespace getUserOperationRecord {
        export type getUserOperationRecordPath = {
          /** userId */
          userId: number;
        };
        export type getUserOperationRecordOptions = Record<string, any>;
        export type getUserOperationRecordResponse = defs.account.Response<
          Array<defs.account.UserOperationRecordVO>
        >;
        export type request = (
          path: getUserOperationRecordPath,
          options?: getUserOperationRecordOptions,
        ) => getUserOperationRecordResponse;
      }

      /**
       * 分页查询用户
       * /bo/user/page
       */
      export namespace pageQueryUsers {
        export type pageQueryUsersBody = defs.account.UserPageQueryDTO;
        export type pageQueryUsersOptions = Record<string, any>;
        export type pageQueryUsersResponse = defs.account.Response<
          defs.account.PageInfo<defs.account.UserVO>
        >;
        export type request = (
          body: pageQueryUsersBody,
          options?: pageQueryUsersOptions,
        ) => pageQueryUsersResponse;
      }

      /**
       * 分页查询已注销的用户
       * /bo/user/page/closed
       */
      export namespace pageQueryClosedUsers {
        export type pageQueryClosedUsersBody =
          defs.account.ClosedUserPageQueryDTO;
        export type pageQueryClosedUsersOptions = Record<string, any>;
        export type pageQueryClosedUsersResponse = defs.account.Response<
          defs.account.PageInfo<defs.account.ClosedUserVO>
        >;
        export type request = (
          body: pageQueryClosedUsersBody,
          options?: pageQueryClosedUsersOptions,
        ) => pageQueryClosedUsersResponse;
      }

      /**
       * 分页查询已启用的用户
       * /bo/user/page/enabled
       */
      export namespace pageQueryMemberEnabled {
        export type pageQueryMemberEnabledBody =
          defs.account.UserEnabledPageQueryDTO;
        export type pageQueryMemberEnabledOptions = Record<string, any>;
        export type pageQueryMemberEnabledResponse = defs.account.Response<
          defs.account.PageInfo<defs.account.UserEnabledVO>
        >;
        export type request = (
          body: pageQueryMemberEnabledBody,
          options?: pageQueryMemberEnabledOptions,
        ) => pageQueryMemberEnabledResponse;
      }

      /**
       * 查询用户账户下处理中的订单
       * /bo/user/processing/orders/{userId}
       */
      export namespace getProcessingOrders {
        export type getProcessingOrdersPath = {
          /** userId */
          userId: number;
        };
        export type getProcessingOrdersOptions = Record<string, any>;
        export type getProcessingOrdersResponse =
          defs.account.Response<defs.account.OrderAndRefund>;
        export type request = (
          path: getProcessingOrdersPath,
          options?: getProcessingOrdersOptions,
        ) => getProcessingOrdersResponse;
      }

      /**
       * 停用召回
       * /bo/user/recall
       */
      export namespace recallUser {
        export type recallUserBody = defs.account.UpdateUserStatusCommandDTO;
        export type recallUserOptions = Record<string, any>;
        export type recallUserResponse = defs.account.Response<string>;
        export type request = (
          body: recallUserBody,
          options?: recallUserOptions,
        ) => recallUserResponse;
      }

      /**
       * 查询注册来源列表
       * /bo/user/register-source/list
       */
      export namespace listRegisterSource {
        export type listRegisterSourceOptions = Record<string, any>;
        export type listRegisterSourceResponse = defs.account.Response<
          Array<defs.account.DictionaryVO>
        >;
        export type request = (
          options?: listRegisterSourceOptions,
        ) => listRegisterSourceResponse;
      }

      /**
       * 查询用户简要信息
       * /bo/user/simple
       */
      export namespace getUserSimple {
        export type getUserSimpleParam = {
          /** phone */
          phone?: string;

          /** userId */
          userId?: number;
        };
        export type getUserSimpleOptions = Record<string, any>;
        export type getUserSimpleResponse =
          defs.account.Response<defs.account.UserSimpleVO>;
        export type request = (
          params: getUserSimpleParam,
          options?: getUserSimpleOptions,
        ) => getUserSimpleResponse;
      }

      /**
       * 查询用户状态列表
       * /bo/user/status/list
       */
      export namespace listUserStatus {
        export type listUserStatusOptions = Record<string, any>;
        export type listUserStatusResponse = defs.account.Response<
          Array<defs.account.DictionaryVO>
        >;
        export type request = (
          options?: listUserStatusOptions,
        ) => listUserStatusResponse;
      }

      /**
       * 解冻用户
       * /bo/user/unfreeze
       */
      export namespace unfreezeUser {
        export type unfreezeUserBody = defs.account.UpdateUserStatusCommandDTO;
        export type unfreezeUserOptions = Record<string, any>;
        export type unfreezeUserResponse = defs.account.Response<string>;
        export type request = (
          body: unfreezeUserBody,
          options?: unfreezeUserOptions,
        ) => unfreezeUserResponse;
      }
    }

    /**
     * H5 权限接口
     */
    export namespace h5Permission {
      /**
       * 根据邀请码查询邀请人昵称头像
       * /h5/permission/profile/{inviteCode}
       */
      export namespace getUserProfile {
        export type getUserProfilePath = {
          /** inviteCode */
          inviteCode: string;
        };
        export type getUserProfileOptions = Record<string, any>;
        export type getUserProfileResponse =
          defs.account.Response<defs.account.UserSimpleProfileVO>;
        export type request = (
          path: getUserProfilePath,
          options?: getUserProfileOptions,
        ) => getUserProfileResponse;
      }

      /**
       * 注册（发送短信验证码）
       * /h5/permission/register/send/sms/code
       */
      export namespace sendRegisterSmsCode {
        export type sendRegisterSmsCodeBody = defs.account.PhoneDTO;
        export type sendRegisterSmsCodeOptions = Record<string, any>;
        export type sendRegisterSmsCodeResponse =
          defs.account.Response<defs.account.SendCodeVO>;
        export type request = (
          body: sendRegisterSmsCodeBody,
          options?: sendRegisterSmsCodeOptions,
        ) => sendRegisterSmsCodeResponse;
      }

      /**
       * 注册 - 设置密码
       * /h5/permission/register/set/password
       */
      export namespace setRegisterPassword {
        export type setRegisterPasswordBody = defs.account.SetPasswordDTO;
        export type setRegisterPasswordOptions = Record<string, any>;
        export type setRegisterPasswordResponse = defs.account.Response<string>;
        export type request = (
          body: setRegisterPasswordBody,
          options?: setRegisterPasswordOptions,
        ) => setRegisterPasswordResponse;
      }

      /**
       * 注册（短信验证码注册）
       * /h5/permission/register/sms/code
       */
      export namespace registerSmsCode {
        export type registerSmsCodeBody = defs.account.CheckCodeInviteDTO;
        export type registerSmsCodeOptions = Record<string, any>;
        export type registerSmsCodeResponse =
          defs.account.Response<defs.account.LoginInfo>;
        export type request = (
          body: registerSmsCodeBody,
          options?: registerSmsCodeOptions,
        ) => registerSmsCodeResponse;
      }
    }
  }
}
