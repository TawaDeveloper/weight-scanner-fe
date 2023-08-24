type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace finance {
    export class GetSettlementOrderDetailResponse {
      /** 核算人Id */
      accountingBy?: number;

      /** 核算人姓名 */
      accountingByName?: string;

      /** 核算状态(0:待核算 1:核算成功 2:核算失败) */
      accountingStatus?: number;

      /** 核算时间 */
      accountingTime?: string;

      /** 作废人 */
      invalidBy?: number;

      /** 作废人姓名 */
      invalidByName?: string;

      /** 作废时间 */
      invalidTime?: string;

      /** 已支付金额 */
      payAmount?: number;

      /** 支付状态(0:无 1:待支付 2:支付成功 3: 支付失败) */
      payStatus?: number;

      /** 支付时间 */
      payTime?: string;

      /** 支付记录 */
      paymentList?: Array<defs.finance.PaymentDto>;

      /** 退款记录 */
      reversalList?: Array<defs.finance.PaymentDto>;

      /** 结算单号 */
      settlementNo?: string;

      /** 结算单状态(0:正常 1:废弃) */
      settlementOrderStatus?: number;

      /** 结算任务列表 */
      taskList?: Array<defs.finance.SettlementTask>;
    }

    export class Merchant {
      /** 账户编码 */
      code?: string;

      /** 账户名称 */
      name?: string;
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

    export class PaymentDto {
      /** 支付金额(负数为退款) */
      payAmount?: number;

      /** 支付渠道(支付方式) */
      payChannel?: string;

      /** 支付状态(2:支付成功 3: 支付失败 4:退款成功 5:退款失败) */
      payStatus?: number;

      /** 支付时间 */
      payTime?: string;

      /** 付款单号 */
      paymentNo?: string;

      /** 支付流水号(stripe_no单号/第三方支付单号) */
      stripeNo?: string;
    }

    export class QueryPaymentRequest {
      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 支付状态( 2:支付成功 3: 支付失败 ) */
      payStatus?: number;

      /** 开始支付时间 */
      payTimeEnd?: string;

      /** 开始支付时间 */
      payTimeStart?: string;

      /** 支付单号 */
      stripeNo?: string;
    }

    export class QueryPaymentResponse {
      /** 支付失败原因 */
      errorInfo?: string;

      /** 交易金额 */
      needPayAmount?: number;

      /** 支付金额 */
      payAmount?: number;

      /** 支付对象 */
      payObject?: string;

      /** 支付状态(2:支付成功 3: 支付失败 ) */
      payStatus?: number;

      /** 支付时间 */
      payTime?: string;

      /** 收款方 */
      payee?: string;

      /** 付款方 */
      payer?: string;

      /** 支付流水号 */
      paymentNo?: string;

      /** 支付单号 */
      stripeNo?: string;

      /** 用户ID */
      userId?: number;
    }

    export class QuerySettlementOrderRequest {
      /** 核算状态(0:待核算 1:核算成功 2:核算失败) */
      accountingStatus?: number;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 支付状态(0:无 1:待支付 2:支付成功 3: 支付失败) */
      payStatus?: number;

      /** 结束支付时间 */
      payTimeEnd?: string;

      /** 开始支付时间 */
      payTimeStart?: string;

      /** 收款方 */
      payee?: string;

      /** 付款方 */
      payer?: string;

      /** 结算单号 */
      settlementNo?: string;

      /** 结束结算时间 */
      settlementTimeEnd?: string;

      /** 开始结算时间 */
      settlementTimeStart?: string;

      /** 结算方式(0:自动 1:手动) */
      settlementType?: number;

      /** 结束更新时间 */
      updatedTimeEnd?: string;

      /** 开始更新时间 */
      updatedTimeStart?: string;
    }

    export class QuerySettlementOrderResponse {
      /** 核算状态(0:待核算 1:核算成功 2:核算失败) */
      accountingStatus?: number;

      /** 核算时间 */
      accountingTime?: string;

      /** 支付失败原因 */
      errorInfo?: string;

      /** 已支付金额 */
      payAmount?: number;

      /** 支付渠道 */
      payChannel?: string;

      /** 支付状态(0:无 1:待支付 2:支付成功 3: 支付失败) */
      payStatus?: number;

      /** 支付时间 */
      payTime?: string;

      /** 收款方 */
      payee?: string;

      /** 付款方 */
      payer?: string;

      /** 结算金额 */
      settlementAmount?: number;

      /** 结算单号 */
      settlementNo?: string;

      /** 结算单状态(0:正常 1:废弃) */
      settlementOrderStatus?: number;

      /** 结算时间 */
      settlementTime?: string;

      /** 抓取时间段 */
      settlementTimePeriod?: string;

      /** 结算方式(0:自动 1:手动) */
      settlementType?: number;

      /** 未支付金额 */
      unpaidAmount?: number;

      /** 更新时间 */
      updatedTime?: string;
    }

    export class QuerySettlementTaskCalcDetailResponse {
      /** 核算分账金额 */
      accountingAmount?: number;

      /** 核价结果 */
      calcResult?: boolean;

      /** 订单实付/实退金额(Order total) */
      captureAmount?: number;

      /** 佣金(固定)(Comm by $) */
      commFixed?: number;

      /** 佣金(百分比)(Comm by %) */
      commPercent?: number;

      /** 退瓶费(Bottle fee) */
      crvFee?: number;

      /** 商家承当的优惠(Disc MER(Tawa)) */
      discMer?: number;

      /** 平台承当的优惠(Disc PFR) */
      discPfr?: number;

      /** 商品总额(SubTot) */
      itemAmount?: number;

      /** 订单号 */
      orderId?: string;

      /** 积分抵扣金额 */
      pointsDeduction?: number;

      /** 服务费(Service fee) */
      serviceFee?: number;

      /** 分账金额 */
      shareAmount?: number;

      /** 平台承当的运费(Shipping PFR) */
      shippingPfr?: number;

      /** 结算任务编号 */
      taskNo?: string;

      /** 消费税(Sales tax) */
      taxFee?: number;

      /** 平台承当司机小费(追加的司机小费)(Tip PFR) */
      tipPfr?: number;
    }

    export class QuerySettlementTaskItemRequest {
      /** 结束创建时间 */
      createdTimeEnd?: string;

      /** 开始创建时间 */
      createdTimeStart?: string;

      /** 订单号 */
      orderNo?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 售后订单号 */
      refundNo?: string;

      /** 店铺id */
      storeId?: number;

      /** 店铺名 */
      storeName?: string;

      /** 任务编号 */
      taskNo?: string;

      /** 任务编号-单项编号 */
      taskNoItem?: string;
    }

    export class QuerySettlementTaskItemResponse {
      /** 渠道类型(O2O B2C) */
      channelType?: string;

      /** 创建时间 */
      createdTime?: string;

      /** 订单号 */
      orderNo?: string;

      /** 收款方 */
      payee?: string;

      /** 付款方 */
      payer?: string;

      /** 商品名称 */
      productName?: string;

      /** 售后订单号 */
      refundNo?: string;

      /** 商品分账金额 */
      shareAmount?: number;

      /** 店铺id */
      storeId?: number;

      /** 店铺名 */
      storeName?: string;

      /** 任务编号 */
      taskNo?: string;

      /** 任务编号-单项编号 */
      taskNoItem?: string;
    }

    export class QuerySettlementTaskRequest {
      /** 核算状态(0:待核算 1:核算成功 2:核算失败) */
      accountingStatus?: number;

      /** 渠道类型(O2O B2C) */
      channelType?: string;

      /** 结束创建时间 */
      createdTimeEnd?: string;

      /** 开始创建时间 */
      createdTimeStart?: string;

      /** 订单或售后单创建时间 (结束采集时间) */
      orderCreatedTimeEnd?: string;

      /** 订单或售后单创建时间 (开始采集时间) */
      orderCreatedTimeStart?: string;

      /** 订单号 */
      orderId?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 支付状态(0:无 1:待支付 2:支付成功 3: 支付失败) */
      payStatus?: number;

      /** 收款方 */
      payee?: string;

      /** 付款方 */
      payer?: string;

      /** 售后订单号 */
      refundId?: string;

      /** 结算单号 */
      settlementNo?: string;

      /** 结算状态(0:待结算  1:已结算) */
      settlementStatus?: number;

      /** 结算方式(0:自动 1:手动) */
      settlementType?: number;

      /** 门店编码/店铺id */
      storeId?: number;

      /** 店铺名 */
      storeName?: string;

      /** 相关主体 */
      subjects?: string;

      /** 结算任务号 */
      taskNo?: string;

      /** 结束更新时间 */
      updatedTimeEnd?: string;

      /** 开始更新时间 */
      updatedTimeStart?: string;
    }

    export class QuerySettlementTaskResponse {
      /** 核算分账金额 */
      accountingAmount?: number;

      /** 核算状态(0:待核算 1:核算成功 2:核算失败) */
      accountingStatus?: number;

      /** 渠道类型(O2O B2C) */
      channelType?: string;

      /** 创建时间 */
      createdTime?: string;

      /** 订单或售后单创建时间 (采集时间) */
      orderCreatedTime?: string;

      /** 订单号 */
      orderId?: string;

      /** 支付状态(0:无 1:待支付 2:支付成功 3: 支付失败) */
      payStatus?: number;

      /** 收款方 */
      payee?: string;

      /** 付款方 */
      payer?: string;

      /** 收费金额(订单的实际收款金额;售后单的实际退款金额(售后单时为负数)) */
      receiveAmount?: number;

      /** 售后订单号 */
      refundId?: string;

      /** 结算单号 */
      settlementNo?: string;

      /** 结算状态(0:待结算  1:已结算) */
      settlementStatus?: number;

      /** 结算方式(0:自动 1:手动) */
      settlementType?: number;

      /** 分账金额 */
      shareAmount?: number;

      /** 门店编码/店铺id */
      storeId?: number;

      /** 店铺名 */
      storeName?: string;

      /** 结算任务号 */
      taskNo?: string;

      /** 更新时间 */
      updatedTime?: string;
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

    export class SettlementAccountCfgDto {
      /** 账户编码 */
      companyCode?: string;

      /** 账户名称 */
      companyName: string;

      /** 创建时间 */
      createdTime?: string;

      /** ID */
      id?: number;

      /** ENABLE:启用  DISABLE:禁用 */
      status?: 'ENABLE' | 'DISABLE';

      /** strip账号 */
      stripAccount: string;
    }

    export class SettlementCycleCfgDto {
      /** 结算周期 */
      cycle: number;

      /** 周期描述 */
      cycleDesc?: string;

      /** 结算周期单位:(小时-HOUR  天-DAY  周-WEEK  月-MOUTH  季-QUARTER) */
      cycleUnit: 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER';

      /** ID */
      id?: number;

      /** 商家Code列表 */
      merchantCodeList: Array<string>;

      /** 商家名称列表(只回显) */
      merchantList?: Array<string>;

      /** ENABLE:启用  DISABLE:禁用 */
      status?: 'ENABLE' | 'DISABLE';
    }

    export class SettlementDetailResponse {
      /** 核算分账金额总计 */
      accountingAmount?: number;

      /** 结算任务创建时间 */
      createdTime?: string;

      /** 结算单序号 */
      no?: number;

      /** 收款方 */
      payee?: string;

      /** 收款方账号 */
      payeeAccount?: string;

      /** 付款方 */
      payer?: string;

      /** 付款方账号 */
      payerAccount?: string;

      /** 收费金额总计 */
      receiveAmount?: number;

      /** 核价结果 */
      result?: boolean;

      /** 结算金额 */
      settlementAmount?: number;

      /** 结算时间 */
      settlementTime?: string;

      /** 结算方式(0:自动 1:手动) */
      settlementType?: number;

      /** 分账金额总计 */
      shareAmount?: number;

      /** 门店小计 */
      storeIds?: string;

      /** 结算任务号 */
      taskNo?: string;

      /** 结算任务号列表 */
      taskNoList?: Array<string>;

      /** 结算人id */
      updatedBy?: number;

      /** 结算人姓名 */
      updatedByName?: string;
    }

    export class SettlementPreRequest {
      /** 结算任务号list */
      taskNoList: Array<string>;
    }

    export class SettlementRequest {
      /** 是否需要立即支付 */
      doPay: boolean;

      /** 结算单序号list */
      noList: Array<number>;

      /** 结算任务号list */
      taskNoList: Array<string>;
    }

    export class SettlementResponse {
      /** 核算分账金额总计 */
      accountingAmount?: number;

      /** 结算任务创建时间 */
      createdTime?: string;

      /** 结算单序号 */
      no?: number;

      /** 收款方 */
      payee?: string;

      /** 收款方账号 */
      payeeAccount?: string;

      /** 付款方 */
      payer?: string;

      /** 付款方账号 */
      payerAccount?: string;

      /** 收费金额总计 */
      receiveAmount?: number;

      /** 核价结果 */
      result?: boolean;

      /** 结算金额 */
      settlementAmount?: number;

      /** 分账金额总计 */
      shareAmount?: number;

      /** 门店小计 */
      storeIds?: string;

      /** 结算任务号列表 */
      taskNoList?: Array<string>;
    }

    export class SettlementTask {
      /** 订单号 */
      orderId?: string;

      /** 收款方 */
      payee?: string;

      /** 付款方 */
      payer?: string;

      /** 售后订单号 */
      refundId?: string;

      /** 结算时间 */
      settlementTime?: string;

      /** 分账金额 */
      shareAmount?: number;

      /** 结算任务号 */
      taskNo?: string;
    }
  }
}

declare namespace API {
  export namespace finance {
    /**
     * 支付汇总
     */
    export namespace payment {
      /**
       * 列表查询
       * /bo/payment
       */
      export namespace page {
        export type pageBody = defs.finance.QueryPaymentRequest;
        export type pageOptions = Record<string, any>;
        export type pageResponse = defs.finance.Response<
          defs.finance.PageInfo<defs.finance.QueryPaymentResponse>
        >;
        export type request = (
          body: pageBody,
          options?: pageOptions,
        ) => pageResponse;
      }

      /**
       * 导出Excel
       * /bo/payment/export
       */
      export namespace exporting {
        export type exportingBody = defs.finance.QueryPaymentRequest;
        export type exportingOptions = Record<string, any>;
        export type exportingResponse = any;
        export type request = (
          body: exportingBody,
          options?: exportingOptions,
        ) => exportingResponse;
      }
    }

    /**
     * 结算设置
     */
    export namespace settlementConfig {
      /**
       * 账号创建
       * /bo/settlementCfg/account/create
       */
      export namespace createAccount {
        export type createAccountBody = defs.finance.SettlementAccountCfgDto;
        export type createAccountOptions = Record<string, any>;
        export type createAccountResponse = defs.finance.Response<number>;
        export type request = (
          body: createAccountBody,
          options?: createAccountOptions,
        ) => createAccountResponse;
      }

      /**
       * 结算账户列表查询
       * /bo/settlementCfg/account/list
       */
      export namespace page {
        export type pageParam = {
          /** pageNum */
          pageNum?: number;

          /** pageSize */
          pageSize?: number;
        };
        export type pageOptions = Record<string, any>;
        export type pageResponse = defs.finance.Response<
          defs.finance.PageInfo<defs.finance.SettlementAccountCfgDto>
        >;
        export type request = (
          params: pageParam,
          options?: pageOptions,
        ) => pageResponse;
      }

      /**
       * 账号更新
       * /bo/settlementCfg/account/update
       */
      export namespace updateAccount {
        export type updateAccountBody = defs.finance.SettlementAccountCfgDto;
        export type updateAccountOptions = Record<string, any>;
        export type updateAccountResponse = defs.finance.Response<void>;
        export type request = (
          body: updateAccountBody,
          options?: updateAccountOptions,
        ) => updateAccountResponse;
      }

      /**
       * 新增结算周期规则
       * /bo/settlementCfg/cycle/create
       */
      export namespace createCycle {
        export type createCycleBody = defs.finance.SettlementCycleCfgDto;
        export type createCycleOptions = Record<string, any>;
        export type createCycleResponse = defs.finance.Response<number>;
        export type request = (
          body: createCycleBody,
          options?: createCycleOptions,
        ) => createCycleResponse;
      }

      /**
       * 结算周期列表查询
       * /bo/settlementCfg/cycle/list
       */
      export namespace listSettlementCycle {
        export type listSettlementCycleOptions = Record<string, any>;
        export type listSettlementCycleResponse = defs.finance.Response<
          Array<defs.finance.SettlementCycleCfgDto>
        >;
        export type request = (
          options?: listSettlementCycleOptions,
        ) => listSettlementCycleResponse;
      }

      /**
       * 更新结算周期规则状态
       * /bo/settlementCfg/cycle/updateStatus
       */
      export namespace updateCycleStatus {
        export type updateCycleStatusParam = {
          /** id */
          id: number;

          /** status */
          status: 'ENABLE' | 'DISABLE';
        };
        export type updateCycleStatusOptions = Record<string, any>;
        export type updateCycleStatusResponse = defs.finance.Response<void>;
        export type request = (
          params: updateCycleStatusParam,
          options?: updateCycleStatusOptions,
        ) => updateCycleStatusResponse;
      }

      /**
       * 全部商家列表
       * /bo/settlementCfg/merchant/allList
       */
      export namespace allListMerchant {
        export type allListMerchantOptions = Record<string, any>;
        export type allListMerchantResponse = defs.finance.Response<
          Array<defs.finance.Merchant>
        >;
        export type request = (
          options?: allListMerchantOptions,
        ) => allListMerchantResponse;
      }

      /**
       * 商家列表(下拉)
       * /bo/settlementCfg/merchant/list
       */
      export namespace listMerchant {
        export type listMerchantOptions = Record<string, any>;
        export type listMerchantResponse = defs.finance.Response<
          Array<defs.finance.Merchant>
        >;
        export type request = (
          options?: listMerchantOptions,
        ) => listMerchantResponse;
      }
    }

    /**
     * 结算单-接口
     */
    export namespace settlementOrder {
      /**
       * 列表查询
       * /bo/settlementOrders
       */
      export namespace page {
        export type pageBody = defs.finance.QuerySettlementOrderRequest;
        export type pageOptions = Record<string, any>;
        export type pageResponse = defs.finance.Response<
          defs.finance.PageInfo<defs.finance.QuerySettlementOrderResponse>
        >;
        export type request = (
          body: pageBody,
          options?: pageOptions,
        ) => pageResponse;
      }

      /**
       * 取消支付
       * /bo/settlementOrders/cancelPay/{settlementNo}
       */
      export namespace cancelPay {
        export type cancelPayPath = {
          /** settlementNo */
          settlementNo: string;
        };
        export type cancelPayOptions = Record<string, any>;
        export type cancelPayResponse = defs.finance.Response<boolean>;
        export type request = (
          path: cancelPayPath,
          options?: cancelPayOptions,
        ) => cancelPayResponse;
      }

      /**
       * 结算单详情
       * /bo/settlementOrders/detail/{settlementNo}
       */
      export namespace detail {
        export type detailPath = {
          /** settlementNo */
          settlementNo: string;
        };
        export type detailOptions = Record<string, any>;
        export type detailResponse =
          defs.finance.Response<defs.finance.GetSettlementOrderDetailResponse>;
        export type request = (
          path: detailPath,
          options?: detailOptions,
        ) => detailResponse;
      }

      /**
       * 作废结算单
       * /bo/settlementOrders/disuse/{settlementNo}
       */
      export namespace disuse {
        export type disusePath = {
          /** settlementNo */
          settlementNo: string;
        };
        export type disuseOptions = Record<string, any>;
        export type disuseResponse = defs.finance.Response<void>;
        export type request = (
          path: disusePath,
          options?: disuseOptions,
        ) => disuseResponse;
      }

      /**
       * 支付
       * /bo/settlementOrders/pay
       */
      export namespace pay {
        export type payBody = Array<string>;
        export type payOptions = Record<string, any>;
        export type payResponse = defs.finance.Response<boolean>;
        export type request = (
          body: payBody,
          options?: payOptions,
        ) => payResponse;
      }

      /**
       * 作废结算单预览
       * /bo/settlementOrders/preDisuse/{settlementNo}
       */
      export namespace preDisuse {
        export type preDisusePath = {
          /** settlementNo */
          settlementNo: string;
        };
        export type preDisuseOptions = Record<string, any>;
        export type preDisuseResponse = defs.finance.Response<
          Array<defs.finance.SettlementTask>
        >;
        export type request = (
          path: preDisusePath,
          options?: preDisuseOptions,
        ) => preDisuseResponse;
      }
    }

    /**
     * 结算任务-接口
     */
    export namespace settlementTask {
      /**
       * 列表查询
       * /bo/settlementTasks
       */
      export namespace page {
        export type pageBody = defs.finance.QuerySettlementTaskRequest;
        export type pageOptions = Record<string, any>;
        export type pageResponse = defs.finance.Response<
          defs.finance.PageInfo<defs.finance.QuerySettlementTaskResponse>
        >;
        export type request = (
          body: pageBody,
          options?: pageOptions,
        ) => pageResponse;
      }

      /**
       * 核价详情
       * /bo/settlementTasks/calc/{taskNo}
       */
      export namespace calcDetail {
        export type calcDetailPath = {
          /** taskNo */
          taskNo: string;
        };
        export type calcDetailOptions = Record<string, any>;
        export type calcDetailResponse =
          defs.finance.Response<defs.finance.QuerySettlementTaskCalcDetailResponse>;
        export type request = (
          path: calcDetailPath,
          options?: calcDetailOptions,
        ) => calcDetailResponse;
      }

      /**
       * 结算详情
       * /bo/settlementTasks/detail/{taskNo}
       */
      export namespace detail {
        export type detailPath = {
          /** taskNo */
          taskNo: string;
        };
        export type detailOptions = Record<string, any>;
        export type detailResponse =
          defs.finance.Response<defs.finance.SettlementDetailResponse>;
        export type request = (
          path: detailPath,
          options?: detailOptions,
        ) => detailResponse;
      }

      /**
       * 导出Excel
       * /bo/settlementTasks/export
       */
      export namespace exporting {
        export type exportingBody = defs.finance.QuerySettlementTaskRequest;
        export type exportingOptions = Record<string, any>;
        export type exportingResponse = any;
        export type request = (
          body: exportingBody,
          options?: exportingOptions,
        ) => exportingResponse;
      }

      /**
       * 结算(结算单预览)
       * /bo/settlementTasks/preview
       */
      export namespace settlementPre {
        export type settlementPreBody = defs.finance.SettlementPreRequest;
        export type settlementPreOptions = Record<string, any>;
        export type settlementPreResponse = defs.finance.Response<
          Array<defs.finance.SettlementResponse>
        >;
        export type request = (
          body: settlementPreBody,
          options?: settlementPreOptions,
        ) => settlementPreResponse;
      }

      /**
       * 创建结算单
       * /bo/settlementTasks/settlement
       */
      export namespace settlement {
        export type settlementBody = defs.finance.SettlementRequest;
        export type settlementOptions = Record<string, any>;
        export type settlementResponse = defs.finance.Response<void>;
        export type request = (
          body: settlementBody,
          options?: settlementOptions,
        ) => settlementResponse;
      }
    }

    /**
     * 结算任务单行(结算任务明细)-接口
     */
    export namespace settlementTaskItem {
      /**
       * 列表查询
       * /bo/settlementTask/items
       */
      export namespace page {
        export type pageBody = defs.finance.QuerySettlementTaskItemRequest;
        export type pageOptions = Record<string, any>;
        export type pageResponse = defs.finance.Response<
          defs.finance.PageInfo<defs.finance.QuerySettlementTaskItemResponse>
        >;
        export type request = (
          body: pageBody,
          options?: pageOptions,
        ) => pageResponse;
      }

      /**
       * 导出
       * /bo/settlementTask/items/export
       */
      export namespace exporting {
        export type exportingBody = defs.finance.QuerySettlementTaskItemRequest;
        export type exportingOptions = Record<string, any>;
        export type exportingResponse = any;
        export type request = (
          body: exportingBody,
          options?: exportingOptions,
        ) => exportingResponse;
      }
    }

    /**
     * 工具接口
     */
    export namespace util {
      /**
       * 生成 CreditMemoFile Job
       * /bo/util/exec/generatorCreditMemoFileJob
       */
      export namespace generatorCreditMemoFileJob {
        export type generatorCreditMemoFileJobBody = string;
        export type generatorCreditMemoFileJobOptions = Record<string, any>;
        export type generatorCreditMemoFileJobResponse =
          defs.finance.Response<boolean>;
        export type request = (
          body: generatorCreditMemoFileJobBody,
          options?: generatorCreditMemoFileJobOptions,
        ) => generatorCreditMemoFileJobResponse;
      }

      /**
       * 生成 PfrSalesFile Job
       * /bo/util/exec/generatorPfrSalesFileJob
       */
      export namespace generatorPfrSalesFileJob {
        export type generatorPfrSalesFileJobBody = string;
        export type generatorPfrSalesFileJobOptions = Record<string, any>;
        export type generatorPfrSalesFileJobResponse =
          defs.finance.Response<boolean>;
        export type request = (
          body: generatorPfrSalesFileJobBody,
          options?: generatorPfrSalesFileJobOptions,
        ) => generatorPfrSalesFileJobResponse;
      }

      /**
       * 生成 SalesFile Job
       * /bo/util/exec/generatorSalesFileJob
       */
      export namespace generatorSalesFileJob {
        export type generatorSalesFileJobBody = string;
        export type generatorSalesFileJobOptions = Record<string, any>;
        export type generatorSalesFileJobResponse =
          defs.finance.Response<boolean>;
        export type request = (
          body: generatorSalesFileJobBody,
          options?: generatorSalesFileJobOptions,
        ) => generatorSalesFileJobResponse;
      }

      /**
       * 执行结算任务 settlement Job
       * /bo/util/exec/settlementJob
       */
      export namespace execSettlementJob {
        export type execSettlementJobBody = string;
        export type execSettlementJobOptions = Record<string, any>;
        export type execSettlementJobResponse = defs.finance.Response<boolean>;
        export type request = (
          body: execSettlementJobBody,
          options?: execSettlementJobOptions,
        ) => execSettlementJobResponse;
      }

      /**
       * 同步订单数据到财务系统
       * /bo/util/sync/order2finance
       */
      export namespace order2finance {
        export type order2financeBody = Array<string>;
        export type order2financeOptions = Record<string, any>;
        export type order2financeResponse = defs.finance.Response<string>;
        export type request = (
          body: order2financeBody,
          options?: order2financeOptions,
        ) => order2financeResponse;
      }

      /**
       * 同步逆向订单数据到财务系统
       * /bo/util/sync/refund2finance
       */
      export namespace refundIdList {
        export type refundIdListBody = Array<string>;
        export type refundIdListOptions = Record<string, any>;
        export type refundIdListResponse = defs.finance.Response<string>;
        export type request = (
          body: refundIdListBody,
          options?: refundIdListOptions,
        ) => refundIdListResponse;
      }
    }
  }
}
