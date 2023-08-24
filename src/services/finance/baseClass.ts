class GetSettlementOrderDetailResponse {
  /** 核算人Id */
  accountingBy = undefined;

  /** 核算人姓名 */
  accountingByName = '';

  /** 核算状态(0:待核算 1:核算成功 2:核算失败) */
  accountingStatus = undefined;

  /** 核算时间 */
  accountingTime = '';

  /** 作废人 */
  invalidBy = undefined;

  /** 作废人姓名 */
  invalidByName = '';

  /** 作废时间 */
  invalidTime = '';

  /** 已支付金额 */
  payAmount = undefined;

  /** 支付状态(0:无 1:待支付 2:支付成功 3: 支付失败) */
  payStatus = undefined;

  /** 支付时间 */
  payTime = '';

  /** 支付记录 */
  paymentList = [];

  /** 退款记录 */
  reversalList = [];

  /** 结算单号 */
  settlementNo = '';

  /** 结算单状态(0:正常 1:废弃) */
  settlementOrderStatus = undefined;

  /** 结算任务列表 */
  taskList = [];
}

class Merchant {
  /** 账户编码 */
  code = '';

  /** 账户名称 */
  name = '';
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

class PaymentDto {
  /** 支付金额(负数为退款) */
  payAmount = undefined;

  /** 支付渠道(支付方式) */
  payChannel = '';

  /** 支付状态(2:支付成功 3: 支付失败 4:退款成功 5:退款失败) */
  payStatus = undefined;

  /** 支付时间 */
  payTime = '';

  /** 付款单号 */
  paymentNo = '';

  /** 支付流水号(stripe_no单号/第三方支付单号) */
  stripeNo = '';
}

class QueryPaymentRequest {
  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 支付状态( 2:支付成功 3: 支付失败 ) */
  payStatus = undefined;

  /** 开始支付时间 */
  payTimeEnd = '';

  /** 开始支付时间 */
  payTimeStart = '';

  /** 支付单号 */
  stripeNo = '';
}

class QueryPaymentResponse {
  /** 支付失败原因 */
  errorInfo = '';

  /** 交易金额 */
  needPayAmount = undefined;

  /** 支付金额 */
  payAmount = undefined;

  /** 支付对象 */
  payObject = '';

  /** 支付状态(2:支付成功 3: 支付失败 ) */
  payStatus = undefined;

  /** 支付时间 */
  payTime = '';

  /** 收款方 */
  payee = '';

  /** 付款方 */
  payer = '';

  /** 支付流水号 */
  paymentNo = '';

  /** 支付单号 */
  stripeNo = '';

  /** 用户ID */
  userId = undefined;
}

class QuerySettlementOrderRequest {
  /** 核算状态(0:待核算 1:核算成功 2:核算失败) */
  accountingStatus = undefined;

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 支付状态(0:无 1:待支付 2:支付成功 3: 支付失败) */
  payStatus = undefined;

  /** 结束支付时间 */
  payTimeEnd = '';

  /** 开始支付时间 */
  payTimeStart = '';

  /** 收款方 */
  payee = '';

  /** 付款方 */
  payer = '';

  /** 结算单号 */
  settlementNo = '';

  /** 结束结算时间 */
  settlementTimeEnd = '';

  /** 开始结算时间 */
  settlementTimeStart = '';

  /** 结算方式(0:自动 1:手动) */
  settlementType = undefined;

  /** 结束更新时间 */
  updatedTimeEnd = '';

  /** 开始更新时间 */
  updatedTimeStart = '';
}

class QuerySettlementOrderResponse {
  /** 核算状态(0:待核算 1:核算成功 2:核算失败) */
  accountingStatus = undefined;

  /** 核算时间 */
  accountingTime = '';

  /** 支付失败原因 */
  errorInfo = '';

  /** 已支付金额 */
  payAmount = undefined;

  /** 支付渠道 */
  payChannel = '';

  /** 支付状态(0:无 1:待支付 2:支付成功 3: 支付失败) */
  payStatus = undefined;

  /** 支付时间 */
  payTime = '';

  /** 收款方 */
  payee = '';

  /** 付款方 */
  payer = '';

  /** 结算金额 */
  settlementAmount = undefined;

  /** 结算单号 */
  settlementNo = '';

  /** 结算单状态(0:正常 1:废弃) */
  settlementOrderStatus = undefined;

  /** 结算时间 */
  settlementTime = '';

  /** 抓取时间段 */
  settlementTimePeriod = '';

  /** 结算方式(0:自动 1:手动) */
  settlementType = undefined;

  /** 未支付金额 */
  unpaidAmount = undefined;

  /** 更新时间 */
  updatedTime = '';
}

class QuerySettlementTaskCalcDetailResponse {
  /** 核算分账金额 */
  accountingAmount = undefined;

  /** 核价结果 */
  calcResult = false;

  /** 订单实付/实退金额(Order total) */
  captureAmount = undefined;

  /** 佣金(固定)(Comm by $) */
  commFixed = undefined;

  /** 佣金(百分比)(Comm by %) */
  commPercent = undefined;

  /** 退瓶费(Bottle fee) */
  crvFee = undefined;

  /** 商家承当的优惠(Disc MER(Tawa)) */
  discMer = undefined;

  /** 平台承当的优惠(Disc PFR) */
  discPfr = undefined;

  /** 商品总额(SubTot) */
  itemAmount = undefined;

  /** 订单号 */
  orderId = '';

  /** 积分抵扣金额 */
  pointsDeduction = undefined;

  /** 服务费(Service fee) */
  serviceFee = undefined;

  /** 分账金额 */
  shareAmount = undefined;

  /** 平台承当的运费(Shipping PFR) */
  shippingPfr = undefined;

  /** 结算任务编号 */
  taskNo = '';

  /** 消费税(Sales tax) */
  taxFee = undefined;

  /** 平台承当司机小费(追加的司机小费)(Tip PFR) */
  tipPfr = undefined;
}

class QuerySettlementTaskItemRequest {
  /** 结束创建时间 */
  createdTimeEnd = '';

  /** 开始创建时间 */
  createdTimeStart = '';

  /** 订单号 */
  orderNo = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 售后订单号 */
  refundNo = '';

  /** 店铺id */
  storeId = undefined;

  /** 店铺名 */
  storeName = '';

  /** 任务编号 */
  taskNo = '';

  /** 任务编号-单项编号 */
  taskNoItem = '';
}

class QuerySettlementTaskItemResponse {
  /** 渠道类型(O2O B2C) */
  channelType = '';

  /** 创建时间 */
  createdTime = '';

  /** 订单号 */
  orderNo = '';

  /** 收款方 */
  payee = '';

  /** 付款方 */
  payer = '';

  /** 商品名称 */
  productName = '';

  /** 售后订单号 */
  refundNo = '';

  /** 商品分账金额 */
  shareAmount = undefined;

  /** 店铺id */
  storeId = undefined;

  /** 店铺名 */
  storeName = '';

  /** 任务编号 */
  taskNo = '';

  /** 任务编号-单项编号 */
  taskNoItem = '';
}

class QuerySettlementTaskRequest {
  /** 核算状态(0:待核算 1:核算成功 2:核算失败) */
  accountingStatus = undefined;

  /** 渠道类型(O2O B2C) */
  channelType = '';

  /** 结束创建时间 */
  createdTimeEnd = '';

  /** 开始创建时间 */
  createdTimeStart = '';

  /** 订单或售后单创建时间 (结束采集时间) */
  orderCreatedTimeEnd = '';

  /** 订单或售后单创建时间 (开始采集时间) */
  orderCreatedTimeStart = '';

  /** 订单号 */
  orderId = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 支付状态(0:无 1:待支付 2:支付成功 3: 支付失败) */
  payStatus = undefined;

  /** 收款方 */
  payee = '';

  /** 付款方 */
  payer = '';

  /** 售后订单号 */
  refundId = '';

  /** 结算单号 */
  settlementNo = '';

  /** 结算状态(0:待结算  1:已结算) */
  settlementStatus = undefined;

  /** 结算方式(0:自动 1:手动) */
  settlementType = undefined;

  /** 门店编码/店铺id */
  storeId = undefined;

  /** 店铺名 */
  storeName = '';

  /** 相关主体 */
  subjects = '';

  /** 结算任务号 */
  taskNo = '';

  /** 结束更新时间 */
  updatedTimeEnd = '';

  /** 开始更新时间 */
  updatedTimeStart = '';
}

class QuerySettlementTaskResponse {
  /** 核算分账金额 */
  accountingAmount = undefined;

  /** 核算状态(0:待核算 1:核算成功 2:核算失败) */
  accountingStatus = undefined;

  /** 渠道类型(O2O B2C) */
  channelType = '';

  /** 创建时间 */
  createdTime = '';

  /** 订单或售后单创建时间 (采集时间) */
  orderCreatedTime = '';

  /** 订单号 */
  orderId = '';

  /** 支付状态(0:无 1:待支付 2:支付成功 3: 支付失败) */
  payStatus = undefined;

  /** 收款方 */
  payee = '';

  /** 付款方 */
  payer = '';

  /** 收费金额(订单的实际收款金额;售后单的实际退款金额(售后单时为负数)) */
  receiveAmount = undefined;

  /** 售后订单号 */
  refundId = '';

  /** 结算单号 */
  settlementNo = '';

  /** 结算状态(0:待结算  1:已结算) */
  settlementStatus = undefined;

  /** 结算方式(0:自动 1:手动) */
  settlementType = undefined;

  /** 分账金额 */
  shareAmount = undefined;

  /** 门店编码/店铺id */
  storeId = undefined;

  /** 店铺名 */
  storeName = '';

  /** 结算任务号 */
  taskNo = '';

  /** 更新时间 */
  updatedTime = '';
}

class Response {
  /** 状态码：0-成功 */
  code = undefined;

  /** 响应数据 */
  data = new GetSettlementOrderDetailResponse();

  /** 状态描述 */
  message = '';

  /** success */
  success = false;
}

class SettlementAccountCfgDto {
  /** 账户编码 */
  companyCode = '';

  /** 账户名称 */
  companyName = '';

  /** 创建时间 */
  createdTime = '';

  /** ID */
  id = undefined;

  /** ENABLE:启用  DISABLE:禁用 */
  status = 'ENABLE';

  /** strip账号 */
  stripAccount = '';
}

class SettlementCycleCfgDto {
  /** 结算周期 */
  cycle = undefined;

  /** 周期描述 */
  cycleDesc = '';

  /** 结算周期单位:(小时-HOUR  天-DAY  周-WEEK  月-MOUTH  季-QUARTER) */
  cycleUnit = 'HOUR';

  /** ID */
  id = undefined;

  /** 商家Code列表 */
  merchantCodeList = [];

  /** 商家名称列表(只回显) */
  merchantList = [];

  /** ENABLE:启用  DISABLE:禁用 */
  status = 'ENABLE';
}

class SettlementDetailResponse {
  /** 核算分账金额总计 */
  accountingAmount = undefined;

  /** 结算任务创建时间 */
  createdTime = '';

  /** 结算单序号 */
  no = undefined;

  /** 收款方 */
  payee = '';

  /** 收款方账号 */
  payeeAccount = '';

  /** 付款方 */
  payer = '';

  /** 付款方账号 */
  payerAccount = '';

  /** 收费金额总计 */
  receiveAmount = undefined;

  /** 核价结果 */
  result = false;

  /** 结算金额 */
  settlementAmount = undefined;

  /** 结算时间 */
  settlementTime = '';

  /** 结算方式(0:自动 1:手动) */
  settlementType = undefined;

  /** 分账金额总计 */
  shareAmount = undefined;

  /** 门店小计 */
  storeIds = '';

  /** 结算任务号 */
  taskNo = '';

  /** 结算任务号列表 */
  taskNoList = [];

  /** 结算人id */
  updatedBy = undefined;

  /** 结算人姓名 */
  updatedByName = '';
}

class SettlementPreRequest {
  /** 结算任务号list */
  taskNoList = [];
}

class SettlementRequest {
  /** 是否需要立即支付 */
  doPay = false;

  /** 结算单序号list */
  noList = [];

  /** 结算任务号list */
  taskNoList = [];
}

class SettlementResponse {
  /** 核算分账金额总计 */
  accountingAmount = undefined;

  /** 结算任务创建时间 */
  createdTime = '';

  /** 结算单序号 */
  no = undefined;

  /** 收款方 */
  payee = '';

  /** 收款方账号 */
  payeeAccount = '';

  /** 付款方 */
  payer = '';

  /** 付款方账号 */
  payerAccount = '';

  /** 收费金额总计 */
  receiveAmount = undefined;

  /** 核价结果 */
  result = false;

  /** 结算金额 */
  settlementAmount = undefined;

  /** 分账金额总计 */
  shareAmount = undefined;

  /** 门店小计 */
  storeIds = '';

  /** 结算任务号列表 */
  taskNoList = [];
}

class SettlementTask {
  /** 订单号 */
  orderId = '';

  /** 收款方 */
  payee = '';

  /** 付款方 */
  payer = '';

  /** 售后订单号 */
  refundId = '';

  /** 结算时间 */
  settlementTime = '';

  /** 分账金额 */
  shareAmount = undefined;

  /** 结算任务号 */
  taskNo = '';
}

export const finance = {
  GetSettlementOrderDetailResponse,
  Merchant,
  PageInfo,
  PaymentDto,
  QueryPaymentRequest,
  QueryPaymentResponse,
  QuerySettlementOrderRequest,
  QuerySettlementOrderResponse,
  QuerySettlementTaskCalcDetailResponse,
  QuerySettlementTaskItemRequest,
  QuerySettlementTaskItemResponse,
  QuerySettlementTaskRequest,
  QuerySettlementTaskResponse,
  Response,
  SettlementAccountCfgDto,
  SettlementCycleCfgDto,
  SettlementDetailResponse,
  SettlementPreRequest,
  SettlementRequest,
  SettlementResponse,
  SettlementTask,
};
