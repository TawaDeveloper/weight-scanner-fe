class AddDeliveryFeeDTO {
  /** 金额 */
  amount = undefined;

  /** 订单 id */
  orderId = '';
}

class AddRecipeCategoryRequest {
  /** icon图标 */
  icon = '';

  /** 英文名称 */
  nameEnUs = '';

  /** 中文名称 */
  nameZhCn = '';

  /** 繁体名称 */
  nameZhTw = '';

  /** 排序 */
  sort = undefined;
}

class AddRecipeRequest {
  /** 分类id */
  categoryId = undefined;

  /** 英文-内容 */
  contentEnUs = '';

  /** contentZhCn */
  contentZhCn = '';

  /** 繁体-内容 */
  contentZhTw = '';

  /** 烹饪时间(单位:分钟) */
  cookingTime = undefined;

  /** 描述信息 */
  description = '';

  /** 关键词 */
  keyword = '';

  /** 素材 */
  materialList = [];

  /** 商品信息 */
  productList = [];

  /** SEO标题 */
  seoTitle = '';

  /** 排序 */
  sort = undefined;

  /** 英文-标题 */
  titleEnUs = '';

  /** 中文-标题 */
  titleZhCn = '';

  /** 繁体-标题 */
  titleZhTw = '';
}

class Address {
  /** 楼栋/单元 */
  aptUnit = '';

  /** 城市 */
  city = '';

  /** 姓氏 */
  firstName = '';

  /** 名字 */
  lastName = '';

  /** 手机号 */
  phone = '';

  /** 州 */
  state = '';

  /** 街道 */
  street = '';

  /** 邮编 */
  zipCode = '';
}

class AdjustItem {
  /** 调整金额 */
  adjustAmount = undefined;

  /** 调整项 */
  adjustTypeDesc = '';

  /** 商品主 UPC */
  mainUpc = '';

  /** 商品名称 */
  productName = '';

  /** UPC */
  upc = '';
}

class AdjustRefund {
  /** 卡类型 */
  brand = '';

  /** 后 4 位 */
  last4 = '';

  /** 状态 */
  statusDesc = '';
}

class Adjustment {
  /** 退瓶费调整金额 */
  beverageContainerFeeAdjust = undefined;

  /** 数量调整金额 */
  quantityAdjust = undefined;

  /** 商品调整金额 */
  subTotal = undefined;

  /** 税费调整金额 */
  taxAdjust = undefined;

  /** 调价总金额 */
  total = undefined;

  /** 重量调整金额 */
  weighAdjust = undefined;
}

class AdjustmentItem {
  /** 调整价格 */
  adjustPrice = undefined;

  /** 调整数量 */
  adjustQuantity = undefined;

  /** 调价类型：0-无、1-数量、2-重量、3-重量和数量 */
  adjustType = undefined;

  /** 调整重量 */
  adjustWeigh = undefined;

  /** 是否缺货 */
  isOutOfStock = false;

  /** 商品金额 */
  itemAmount = undefined;

  /** 商品主图 */
  mainPic = '';

  /** 市场价格 */
  marketPrice = undefined;

  /** 商品净重 */
  netWeight = undefined;

  /** 净重单位 */
  netWeightUom = '';

  /** 拣货金额 */
  pickingAmount = undefined;

  /** 拣货数量 */
  pickingQuantity = undefined;

  /** 拣货重量 */
  pickingWeight = undefined;

  /** 商品名称 */
  productName = '';

  /** 商品类型：1-非称重、2-称重 */
  productType = undefined;

  /** 购买数量 */
  quantity = undefined;

  /** 净重单价（零售价） */
  retailPrice = undefined;

  /** 售卖价格 */
  salePrice = undefined;

  /** 售卖单位 */
  saleUom = '';

  /** 购买单位 */
  uom = '';

  /** 购买净重 */
  weigh = undefined;
}

class AllRefundInfo {
  /** 售后备注 */
  comment = '';

  /** 售后凭证 */
  pictures = [];

  /** 售后原因 */
  reasonDesc = '';
}

class AppAddRecipeReviewRequest {
  /** 评论内容 */
  description = '';

  /** 评论图片 */
  photos = '';

  /** 食谱id */
  recipeId = undefined;
}

class AppGetRecipeResponse {
  /** 评论次数 */
  commentNum = undefined;

  /** (中/英/繁) -内容 */
  content = '';

  /** 烹饪时间(单位:分钟) */
  cookingTime = undefined;

  /** 当前账号是否点赞 */
  like = false;

  /** 点赞次数 */
  likeNum = undefined;

  /** 素材 */
  materialList = [];

  /** 商品信息 */
  productList = [];

  /** 分享次数 */
  shareNum = undefined;

  /** (中/英/繁) 标题 */
  title = '';
}

class AppPersonalRecipeReviewResponse {
  /** 头像 */
  avatar = '';

  /** 被回复的内容 */
  byDescription = '';

  /** 评论时间 */
  createdTime = '';

  /** 评论内容 */
  description = '';

  /** 评论id */
  id = undefined;

  /** 当前账号是否点赞 */
  like = false;

  /** 点赞次数 */
  likeNum = undefined;

  /** 等级 */
  memberLevel = '';

  /** 昵称 */
  nickName = '';

  /** 被回复对应的id */
  parentId = undefined;

  /** 评论图片 */
  photos = '';

  /** 食谱id */
  recipeId = undefined;

  /** 回复次数 */
  replyNum = undefined;

  /** 素材类型(0: 图片 1:视频) */
  type = undefined;

  /** 素材url */
  url = '';

  /** 用户id */
  userId = undefined;
}

class AppQueryRecipeCategoryResponse {
  /** icon图标 */
  icon = '';

  /** id */
  id = undefined;

  /** 分类名 自动转化语言 中/英/繁 */
  name = '';
}

class AppQueryRecipeRequest {
  /** 分类id */
  categoryId = undefined;

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 类型: 1:推荐 Recommend  2:最新 newest  3:最热  most Likes 4:喜欢 your likes */
  type = undefined;
}

class AppQueryRecipeResponse {
  /** 创建时间  格式: MM-dd */
  createdTime = '';

  /** id */
  id = undefined;

  /** 当前账号是否点赞 */
  like = false;

  /** 点赞次数 */
  likeNum = undefined;

  /** 素材  最多只会返回1条 */
  material = new RecipeMaterialVo();

  /** 标题 自动转化语言 中/英/繁 */
  title = '';

  /** 会员头像 */
  userAvatar = '';

  /** 会员昵称 */
  userNickName = '';
}

class AppQueryRecipeReviewRequest {
  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 父级帖子对应id */
  parentId = undefined;

  /** 食谱id */
  recipeId = undefined;
}

class AppQueryRecipeReviewResponse {
  /** 头像 */
  avatar = '';

  /** 被回复的内容 */
  byDescription = '';

  /** 评论时间 */
  createdTime = '';

  /** 评论内容 */
  description = '';

  /** 评论id */
  id = undefined;

  /** 当前账号是否点赞 */
  like = false;

  /** 点赞次数 */
  likeNum = undefined;

  /** 等级 */
  memberLevel = '';

  /** 昵称 */
  nickName = '';

  /** 被回复对应的id */
  parentId = undefined;

  /** 评论图片 */
  photos = '';

  /** 食谱id */
  recipeId = undefined;

  /** 回复次数 */
  replyNum = undefined;

  /** 用户id */
  userId = undefined;
}

class AppRecipeProductVo {
  /** 主图地址 */
  imageUrl = '';

  /** 市场价格(单位 美元) */
  price = undefined;

  /** 商品名称(会根据当前语音自动设置中英文) */
  productName = '';

  /** 所需数量 */
  quantity = undefined;

  /** 商品零售价格(单位 美元) */
  retailPrice = undefined;

  /** 库存量 */
  stockNum = undefined;

  /** 商品sku(规格id) Id */
  variantId = '';
}

class AppRecipeReviewRequest {
  /** 评论内容 */
  description = '';

  /** 回复帖子对应id */
  parentId = undefined;

  /** 评论图片 */
  photos = '';

  /** 食谱id */
  recipeId = undefined;
}

class BillingAddress {
  /** 单元楼栋 */
  aptUnit = '';

  /** 市 */
  city = '';

  /** 州 */
  state = '';

  /** 街道 */
  street = '';

  /** 邮编 */
  zipCode = '';
}

class BoAcceptListOrderDTO {
  /** 配送方式: 1-自提，2-闪送，3-快递 */
  deliveryType = undefined;

  /** 最大下单时间 */
  maxOrderTime = '';

  /** 最大应收金额 */
  maxPrice = undefined;

  /** 会员卡号 */
  memberCardNo = '';

  /** 最小下单时间 */
  minOrderTime = '';

  /** 最小应收金额 */
  minPrice = undefined;

  /** 订单编号 */
  orderId = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 支付单号 */
  paymentId = '';

  /** 下单渠道 */
  platform = undefined;

  /** 门店 */
  storeIds = [];

  /** 用户 id */
  userId = '';

  /** 用户手机号 */
  userPhone = '';
}

class BoAcceptListOrderItem {
  /** 接单：1-展示接单 */
  acceptType = undefined;

  /** 配送方式名称 */
  deliveryTypeDesc = '';

  /** 预计送达时间 */
  estDeliveredTime = '';

  /** 会员卡号 */
  memberCardNo = '';

  /** 订单编号 */
  orderId = '';

  /** 下单时间 */
  orderTime = '';

  /** 付款单号 */
  paymentId = undefined;

  /** 下单渠道描述 */
  platformDesc = '';

  /** 状态描述 */
  statusDesc = '';

  /** 门店名称 */
  storeName = '';

  /** 订单金额 */
  totalAmount = undefined;

  /** 用户 id */
  userId = undefined;

  /** 用户手机号 */
  userPhone = '';
}

class BoAcceptListOrderOptionVO {
  /** 配送方式 */
  deliveryTypeOptions = [];

  /** 下单渠道 */
  platformOptions = [];

  /** 订单状态 */
  statusOptions = [];
}

class BoAcceptOrderDTO {
  /** 订单编号 */
  orderId = '';
}

class BoBatchReceiveOrderDTO {
  /** 订单列表 */
  orderIds = [];
}

class BoLackListOptionVO {
  /** 配送方式 */
  deliveryTypeOptions = [];

  /** 下单渠道 */
  platformOptions = [];
}

class BoLackOrderConfigDTO {
  /** 缺货 - 拣货金额占比 */
  lackAmount = undefined;

  /** 缺货 - 拣货数量占比 */
  lackQuantity = undefined;
}

class BoLackOrderConfigVO {
  /** 缺货 - 拣货金额占比 */
  lackAmount = undefined;

  /** 缺货 - 拣货数量占比 */
  lackQuantity = undefined;
}

class BoListRefundItem {
  /** 售后申请金额 */
  applyPrice = undefined;

  /** 售后申请时间 */
  applyTime = '';

  /** 主售后单号 */
  mainRefundId = '';

  /** 会员卡号 */
  memberCardNo = '';

  /** 订单编号 */
  orderId = '';

  /** 用户电话 */
  phone = '';

  /** 售后退款金额 */
  refundPrice = undefined;

  /** 是否展示：退款入库 */
  showReturnToWarehouse = false;

  /** 售后状态 */
  statusDesc = '';

  /** 子售后单号 */
  subRefundId = '';

  /** 用户 id */
  userId = undefined;
}

class BoListRefundOptionVO {
  /** 售后状态：tab 选项 */
  quickStatusList = [];

  /** 售后状态 */
  statusList = [];
}

class BoListRefundPageDTO {
  /** 最大申请金额 */
  maxApplyPrice = undefined;

  /** 最大售后时间 */
  maxApplyTime = '';

  /** 最大退款金额 */
  maxRefundPrice = undefined;

  /** 最大退款完成时间 */
  maxRefundTime = '';

  /** 最小申请金额 */
  minApplyPrice = undefined;

  /** 最小售后时间 */
  minApplyTime = '';

  /** 最小退款金额 */
  minRefundPrice = undefined;

  /** 最小退款完成时间 */
  minRefundTime = '';

  /** 订单编号 */
  orderId = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 用户手机号 */
  phone = '';

  /** 售后单号 */
  refundId = '';

  /** 售后状态 */
  status = undefined;

  /** 用户 id */
  userId = undefined;
}

class BoListReviewAuditItem {
  /** 审核意见 */
  auditComment = '';

  /** 审核状态: 1-待审核、2-已审核、3-已拒绝 */
  auditStatus = undefined;

  /** 审核状态描述 */
  auditStatusDesc = '';

  /** 审核时间 */
  auditTime = '';

  /** 审核人姓名 */
  auditUserName = '';

  /** 评论内容 */
  content = '';

  /** 审核 id */
  id = undefined;

  /** 评论图片 */
  photos = [];

  /** 所在位置 */
  sourceDesc = '';

  /** 提交时间 */
  submitTime = '';

  /** 会员昵称 */
  userNickName = '';
}

class BoOrderDetailAdjustment {
  /** 退瓶费调整金额 */
  adjustCrvFee = undefined;

  /** 商品调整金额 */
  adjustItemAmount = undefined;

  /** 数量调整金额 */
  adjustQuantityAmount = undefined;

  /** 税费调整金额 */
  adjustTaxFee = undefined;

  /** 调整总金额 */
  adjustTotalAmount = undefined;

  /** 重量调整金额 */
  adjustWeightAmount = undefined;

  /** 调整商品列表 */
  items = [];
}

class BoOrderDetailBaseInfo {
  /** 授权金额 */
  authedAmount = undefined;

  /** 配送方式名称 */
  deliveryTypeDesc = '';

  /** 会员卡号 */
  memberCardNo = '';

  /** 商家名称 */
  merchantName = '';

  /** 商家类型 */
  merchantTypeDesc = '';

  /** 订单 id */
  orderId = '';

  /** 下单时间 */
  orderTime = '';

  /** 退款金额 */
  refundAmount = undefined;

  /** 状态下的业务时间 */
  statusBizTime = '';

  /** 订单状态 */
  statusDesc = '';

  /** 门店编号 */
  storeId = undefined;

  /** 门店名称 */
  storeName = '';

  /** 应付金额 */
  totalAmount = undefined;

  /** 用户 id */
  userId = undefined;

  /** 用户手机号 */
  userPhone = '';
}

class BoOrderDetailCancelItem {
  /** 业务时间 */
  bizTime = '';

  /** 取消原因 */
  reason = '';

  /** 取消类型：1-用户取消，2-平台取消 */
  type = undefined;

  /** 取消类型描述 */
  typeDesc = '';
}

class BoOrderDetailDeliveryItem {
  /** 运单号(第三方) */
  deliverId = '';

  /** 送达图片 */
  deliveredImageUrl = '';

  /** 送达时间 */
  deliveredTime = '';

  /** 配送费 */
  deliveryFee = undefined;

  /** 配送服务商 */
  deliveryProvider = '';

  /** 配送起始时间 */
  deliveryStartTime = '';

  /** 物流信息: deliveryType = 2 */
  deliveryTrackingUrl = '';

  /** 配送方式: 1-自提，2-闪送，3-快递 */
  deliveryType = undefined;

  /** 配送方式名称 */
  deliveryTypeDesc = '';

  /** 司机小费 */
  driverTip = undefined;

  /** 附加配送费 */
  extraFee = undefined;

  /** 包裹名称 */
  packageName = '';

  /** 取货时间 */
  pickUpTime = '';

  /** 总金额 */
  totalAmount = undefined;
}

class BoOrderDetailItem {
  /** ERP Article Number */
  articleNumber = undefined;

  /** 是否为赠品 */
  isGift = false;

  /** 订单金额 */
  itemAmount = undefined;

  /** 商品主图 */
  mainPic = '';

  /** 主商品名称 */
  mainProductName = '';

  /** 拣货金额 */
  pickingAmount = undefined;

  /** 拣货数量 */
  pickingQuantity = undefined;

  /** 拣货重量 */
  pickingWeigh = undefined;

  /** 商品 id */
  productId = undefined;

  /** 商品名称 */
  productName = '';

  /** 商品类型：1-非称重、2-称重 */
  productType = undefined;

  /** 下单数量 */
  quantity = undefined;

  /** 售价 */
  salePrice = undefined;

  /** 子订单 id */
  subOrderId = undefined;

  /** 商品规格 */
  uom = '';

  /** UPC 编码 */
  upc = '';

  /** 下单重量 */
  weigh = undefined;
}

class BoOrderDetailOptLog {
  /** 日志内容 */
  logContent = '';

  /** 操作时间 */
  optTime = '';

  /** 操作人 id */
  optUserId = undefined;

  /** 操作人姓名 */
  optUserName = '';
}

class BoOrderDetailPaymentItem {
  /** 金额 */
  amount = undefined;

  /** 时间 */
  bizTime = '';

  /** 业务类型：如预授权/扣款/退款 */
  bizTypeDesc = '';

  /** 付款渠道 */
  payChannel = '';

  /** 卡品牌 */
  payMethodBrand = '';

  /** 卡号后 4 位 */
  payMethodLast4 = '';

  /** 支付方式 */
  payTypeDesc = '';

  /** 付款单 id */
  paymentId = '';

  /** 状态 */
  statusDesc = '';
}

class BoOrderDetailPriceItem {
  /** name */
  name = '';

  /** price */
  price = undefined;
}

class BoOrderDetailShipAddress {
  /** 地址信息 */
  addressInfo = '';

  /** 收货地址邮编 */
  addressZipCode = '';

  /** 配送方式: 1-自提，2-闪送，3-快递 */
  deliveryType = undefined;

  /** 名字 */
  fistName = '';

  /** 姓氏 */
  lastName = '';

  /** 联系电话 */
  phone = '';

  /** 门店名称 */
  storeName = '';
}

class BoOrderDetailStatusStep {
  /** 业务时间 */
  bizTime = '';

  /** 状态描述 */
  statusDesc = '';

  /** 类型：1-成功，2-失败，3-待处理 */
  type = undefined;
}

class BoOrderDetailVO {
  /** 价格调整详情 */
  adjustmentDetail = new BoOrderDetailAdjustment();

  /** 订单金额 - 调整后订单金额 */
  afterAdjustPriceItems = [];

  /** 基本信息 */
  baseInfo = new BoOrderDetailBaseInfo();

  /** 订单取消 */
  cancelItem = new BoOrderDetailCancelItem();

  /** 配送信息 */
  deliveryItem = new BoOrderDetailDeliveryItem();

  /** 优惠列表 */
  discounts = [];

  /** 订单金额 - 初始化订单金额 */
  initPriceItems = [];

  /** 商品列表 */
  items = [];

  /** 操作日志 */
  optLogs = [];

  /** 付款信息 */
  paymentItems = [];

  /** 退款信息 */
  refunds = [];

  /** 收货地址 */
  shipAddress = new BoOrderDetailShipAddress();

  /** 是否展示价格调整详情 */
  showAdjustmentDetail = false;

  /** 是否展示：调整后订单金额 */
  showAfterAdjustPrice = false;

  /** 状态进度 */
  statusSteps = [];
}

class BoOrderDiscount {
  /** 优惠对象列表 */
  discountItems = [];

  /** 优惠标题 */
  title = '';
}

class BoOrderDiscountItem {
  /** 优惠后金额 */
  afterDiscountAmount = undefined;

  /** 数量 */
  count = undefined;

  /** 优惠金额 */
  discountAmount = undefined;

  /** 名称 */
  name = '';

  /** 起始金额 */
  startAmount = undefined;
}

class BoOrderLackDetailItem {
  /** 后台分类 */
  backendCategoryName = '';

  /** main upc */
  mainUpc = '';

  /** 订单金额 */
  orderItemAmount = undefined;

  /** 下单数量 */
  orderQuantity = undefined;

  /** 下单重量 */
  orderWeight = undefined;

  /** 实际拣货金额 */
  pickingItemAmount = undefined;

  /** 实际拣货数量 */
  pickingQuantity = undefined;

  /** 拣货结果 */
  pickingResult = '';

  /** 实际拣货重量 */
  pickingWeight = undefined;

  /** 商品 id */
  productId = undefined;

  /** 商品名称 */
  productName = '';

  /** 商品类型：1-非称重、2-称重 */
  productType = undefined;

  /** 商品类型 */
  productTypeDesc = '';

  /** upc */
  upc = '';
}

class BoOrderLackDetailVO {
  /** 商品列表 */
  items = [];

  /** 订单编号 */
  orderId = '';

  /** 状态描述 */
  statusDesc = '';

  /** 门店名称 */
  storeName = '';
}

class BoOrderLackListDTO {
  /** 配送方式: 1-自提，2-闪送，3-快递 */
  deliveryType = undefined;

  /** 最大下单时间 */
  maxOrderTime = '';

  /** 最大应收金额 */
  maxPrice = undefined;

  /** 会员卡号 */
  memberCardNo = '';

  /** 最小下单时间 */
  minOrderTime = '';

  /** 最小应收金额 */
  minPrice = undefined;

  /** 订单编号 */
  orderId = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 付款单号 */
  paymentId = '';

  /** 下单渠道 */
  platform = undefined;

  /** 门店 */
  storeIds = [];

  /** 用户 id */
  userId = '';

  /** 用户手机号 */
  userPhone = '';
}

class BoOrderLackListItem {
  /** 配送方式 */
  deliveryTypeDesc = '';

  /** 会员卡号 */
  memberCardNo = '';

  /** 订单 ID */
  orderId = '';

  /** orderTime */
  orderTime = '';

  /** 付款单号 */
  paymentId = '';

  /** 下单渠道 */
  platformDesc = '';

  /** 应收金额 */
  shouldReceiveAmount = undefined;

  /** 订单状态 */
  statusDesc = '';

  /** 门店名称 */
  storeName = '';

  /** 用户 ID */
  userId = undefined;

  /** 用户手机号 */
  userPhone = '';
}

class BoOrderListExportDTO {
  /** 订单 id 列表 */
  orderIds = [];
}

class BoOrderListOptionVO {
  /** 扣款状态 */
  captureStatusOptions = [];

  /** 配送方式 */
  deliveryTypeOptions = [];

  /** 下单渠道 */
  platformOptions = [];

  /** 订单状态 */
  statusOptions = [];
}

class BoOrderListOrderDTO {
  /** 扣款状态 */
  captureStatus = undefined;

  /** 配送方式: 1-自提，2-闪送，3-快递 */
  deliveryType = undefined;

  /** 最大扣款时间 */
  maxCaptureTime = '';

  /** 最大下单时间 */
  maxOrderTime = '';

  /** 最大应收金额 */
  maxPrice = undefined;

  /** 会员卡号 */
  memberCardNo = '';

  /** 最小扣款时间 */
  minCaptureTime = '';

  /** 最小下单时间 */
  minOrderTime = '';

  /** 最小应收金额 */
  minPrice = undefined;

  /** 订单编号 */
  orderId = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 支付单号 */
  paymentId = '';

  /** 下单渠道 */
  platform = undefined;

  /** 订单状态 */
  status = undefined;

  /** 门店 */
  storeIds = [];

  /** 用户 id */
  userId = '';

  /** 用户手机号 */
  userPhone = '';
}

class BoOrderListOrderItem {
  /** 收货地址 */
  address = '';

  /** 取消退款状态：7-失败 */
  cancelRefundStatus = undefined;

  /** 取消退款状态描述 */
  cancelRefundStatusDesc = '';

  /** 扣款状态：4-失败 */
  captureStatus = undefined;

  /** 扣款状态描述 */
  captureStatusDesc = '';

  /** 配送备注 */
  deliveryNote = '';

  /** 自提/送达时间 */
  deliveryTime = '';

  /** 配送方式名称 */
  deliveryTypeDesc = '';

  /** 是否缺货订单：0-否，1-是，2-无 */
  isLack = undefined;

  /** 是否超时订单：0-否，1-是，2-无 */
  isOvertime = undefined;

  /** 是否拣货超时：0-否，1-是，2-无 */
  isPickOvertime = undefined;

  /** 会员卡号 */
  memberCardNo = '';

  /** 订单编号 */
  orderId = '';

  /** 订单备注 */
  orderNote = '';

  /** 下单时间 */
  orderTime = '';

  /** 付款单号 */
  paymentId = undefined;

  /** 拣货：1-展示拣货 */
  pickingType = undefined;

  /** 下单渠道描述 */
  platformDesc = '';

  /** 是否展示：取消订单 */
  showCancelBtn = false;

  /** 是否展示：退款申请 */
  showRefundBtn = false;

  /** 状态描述 */
  statusDesc = '';

  /** 门店 id */
  storeId = undefined;

  /** 门店名称 */
  storeName = '';

  /** 订单金额 */
  totalAmount = undefined;

  /** 用户 id */
  userId = undefined;

  /** 用户手机号 */
  userPhone = '';
}

class BoOrderListPickingDTO {
  /** orderId */
  orderId = '';
}

class BoOrderListRefundDTO {
  /** 商品列表 */
  items = [];

  /** 订单 id */
  orderId = '';

  /** 退款原因 */
  reason = '';
}

class BoOrderListRefundItem {
  /** 商品主图 */
  mainPic = '';

  /** 主 upc */
  mainUpc = '';

  /** 商品 id */
  productId = undefined;

  /** 商品名称 */
  productName = '';

  /** 商品类型：1-非称重、2-称重 */
  productType = undefined;

  /** 数量 */
  quantity = undefined;

  /** 净重单价 */
  retailPrice = undefined;

  /** 单件售价 */
  salePrice = undefined;

  /** 金额 */
  totalAmount = undefined;

  /** 规格名称 */
  variantName = '';

  /** 重量 */
  weight = undefined;

  /** 重量单位 */
  weightUom = '';
}

class BoOrderListRefundProductVO {
  /** 商品列表 */
  items = [];

  /** 订单编号 */
  orderId = '';

  /** 状态描述 */
  statusDesc = '';

  /** 门店名称 */
  storeName = '';
}

class BoOrderOvertimeDetailVO {
  /** 收货地址 */
  address = '';

  /** 配送费列表 */
  deliveryFeeList = [];

  /** 配送费合计 */
  deliveryFeeTotal = undefined;

  /** 预计送达时间 */
  estDeliveredTime = '';

  /** 订单 id */
  orderId = '';

  /** 超时时间（min） */
  overtime = undefined;

  /** 订单状态 */
  statusDesc = '';

  /** 门店名称 */
  storeName = '';
}

class BoOrderOvertimeFee {
  /** 费用金额 */
  amount = undefined;

  /** 费用名称 */
  name = '';
}

class BoOrderOvertimeListDTO {
  /** 最大下单时间 */
  maxOrderTime = '';

  /** 最大超时时间 */
  maxOverTime = undefined;

  /** 最大应收金额 */
  maxPrice = undefined;

  /** 会员卡号 */
  memberCardNo = '';

  /** 最小下单时间 */
  minOrderTime = '';

  /** 最小超时时间 */
  minOvertime = undefined;

  /** 最小应收金额 */
  minPrice = undefined;

  /** 订单编号 */
  orderId = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 付款单号 */
  paymentId = '';

  /** 下单渠道 */
  platform = undefined;

  /** 是否选中：附加配送费订单 */
  selectAddDriverTip = false;

  /** 门店 */
  storeIds = [];

  /** 用户 id */
  userId = '';

  /** 用户手机号 */
  userPhone = '';
}

class BoOrderOvertimeListItem {
  /** 附加配送费 */
  addDriverTip = undefined;

  /** 配送费 */
  deliveryFee = undefined;

  /** 配送费合计 */
  deliveryTotal = undefined;

  /** 配送方式 */
  deliveryTypeDesc = '';

  /** 配送小费 */
  driverTip = undefined;

  /** 预计送达时间 */
  estDeliveredTime = '';

  /** 司机是否接单 */
  isDriverTake = false;

  /** 会员卡号 */
  memberCardNo = '';

  /** 订单 ID */
  orderId = '';

  /** orderTime */
  orderTime = '';

  /** 超时时长 */
  overtime = undefined;

  /** 付款单号 */
  paymentId = '';

  /** 下单渠道 */
  platformDesc = '';

  /** 应收金额 */
  shouldReceiveAmount = undefined;

  /** 是否展示：附加配送费 */
  showAddDeliveryFee = false;

  /** 是否展示：操作日志 */
  showOptLog = false;

  /** 订单状态 */
  statusDesc = '';

  /** 门店名称 */
  storeName = '';

  /** 用户 ID */
  userId = undefined;

  /** 用户手机号 */
  userPhone = '';
}

class BoOrderOvertimeOptLog {
  /** 附加金额 */
  addAmount = undefined;

  /** 操作名称 */
  optName = '';

  /** 操作时间 */
  optTime = '';

  /** 操作人姓名 */
  optUserName = '';
}

class BoOvertimeListOptionVO {
  /** 下单渠道 */
  platformOptions = [];
}

class BoRefundAuditDTO {
  /** 同意原因 */
  agreeReason = '';

  /** 同意退款商品项 id */
  agreeRefundItemIds = [];

  /** 拒绝原因 */
  rejectReason = '';

  /** 拒绝退款商品项 id */
  rejectRefundItemIds = [];

  /** 选中：配送费 */
  selectDeliveryFee = false;

  /** 选中：司机小费 */
  selectDriverTipFee = false;

  /** 选中：退服务费 */
  selectServiceFee = false;

  /** 子售后单 id */
  subRefundId = '';
}

class BoRefundDetailInfo {
  /** 售后申请金额 */
  applyPrice = undefined;

  /** 售后申请时间 */
  applyTime = '';

  /** 主售后单 */
  mainRefundId = '';

  /** 会员卡号 */
  memberCardNo = '';

  /** 订单编号 */
  orderId = '';

  /** 用户电话 */
  phone = '';

  /** 退款渠道 */
  refundChannel = '';

  /** 售后退款金额 */
  refundPrice = undefined;

  /** 退款方式 */
  refundWay = '';

  /** 是否展示：退款渠道 */
  showRefundChannel = false;

  /** 是否展示：售后退款金额 */
  showRefundPrice = false;

  /** 是否展示：退款方式 */
  showRefundWay = false;

  /** 是否展示：子售后单号 */
  showSubRefundId = false;

  /** 售后状态描述 */
  statusDesc = '';

  /** 售后状态时间 */
  statusTime = '';

  /** 子售后单号 */
  subRefundId = '';

  /** 用户 id */
  userId = undefined;
}

class BoRefundDetailItem {
  /** 申请退款金额 */
  applyPrice = undefined;

  /** 后台分类 */
  backendCategoryName = '';

  /** 退款说明 */
  comment = '';

  /** 商品 id */
  productId = undefined;

  /** 商品名称 */
  productName = '';

  /** 商品类型 */
  productTypeDesc = '';

  /** 数量 */
  quantity = undefined;

  /** 退款原因 */
  reasonDesc = '';

  /** 实收金额 */
  receivedPrice = undefined;

  /** 售后商品项 id */
  refundItemId = undefined;

  /** 凭证图片 */
  refundPictures = [];

  /** 实际退款金额 */
  refundPrice = undefined;

  /** 零售价 */
  retailPrice = undefined;

  /** 退货商品确认描述 */
  returnConfirmComment = '';

  /** 退货商品确认图片 */
  returnConfirmPictures = [];

  /** 是否展示：实际退款金额 */
  showRefundPrice = false;

  /** 是否展示：退货商品确认描述 */
  showReturnConfirmComment = false;

  /** 是否展示：退货商品确认图片 */
  showReturnConfirmPicture = false;

  /** 是否展示：售后状态 */
  showStatusDesc = false;

  /** 售后状态 */
  statusDesc = '';

  /** 商品 UPC */
  upc = '';
}

class BoRefundDetailPrice {
  /** 退瓶费 */
  crvFee = undefined;

  /** 配送费 */
  deliveryFee = undefined;

  /** 司机小费 */
  driverTip = undefined;

  /** 商品金额 */
  itemAmount = undefined;

  /** 积分余额 */
  pointsBalance = undefined;

  /** 退回已发放积分 */
  refundIssuedPoints = undefined;

  /** 退回已使用积分 */
  refundUsedPoints = undefined;

  /** 服务费 */
  serviceFee = undefined;

  /** 是否展示：积分信息 */
  showPointsInfo = false;

  /** 税费 */
  taxFee = undefined;

  /** 合计退款金额 */
  totalRefund = undefined;
}

class BoRefundDetailVO {
  /** 操作日志 */
  optLogs = [];

  /** 退款信息 */
  paymentRefunds = [];

  /** 售后信息 */
  refundInfo = new BoRefundDetailInfo();

  /** 售后商品列表 */
  refundItems = [];

  /** 退款金额 */
  refundPriceInfo = new BoRefundDetailPrice();

  /** 退款类型：1-仅退款，2-退货退款 */
  refundType = undefined;

  /** 是否展示：退款信息 */
  showPaymentRefund = false;

  /** 是否展示：退款审核按钮 */
  showRefundAuditButton = false;

  /** 是否展示：退款金额 */
  showRefundPriceInfo = false;

  /** 是否展示：类型审核按钮 */
  showTypeAuditButton = false;
}

class BoRefundOptLog {
  /** 操作名称 */
  optName = '';

  /** 操作时间 */
  optTime = '';

  /** 操作人 id */
  optUserId = undefined;

  /** 操作人姓名 */
  optUserName = '';
}

class BoRefundPeriodConfigDTO {
  /** 售后期限（天） */
  refundPeriod = undefined;
}

class BoRefundPeriodConfigVO {
  /** 售后期限（天） */
  refundPeriod = undefined;
}

class BoRefundTypeAuditDTO {
  /** 类型审核结果：1-无需退回商品，2-需退回商品 */
  auditResult = undefined;

  /** boUserName */
  boUserName = '';

  /** 售后单号 */
  mainRefundId = '';

  /** 售后商品项 id */
  refundItemIds = [];
}

class CancelDetailVO {
  /** 收货地址 */
  address = new Address();

  /** 授权金额 */
  authedPrice = undefined;

  /** 账单地址 */
  billingAddress = new BillingAddress();

  /** 联系人 */
  contact = new Contact();

  /** 配送备注 */
  deliveryNote = '';

  /** 自提/配送时间 */
  deliveryTime = new OrderDeliveryTime();

  /** 配送类型：1-自提，2-闪送，3-直邮 */
  deliveryType = undefined;

  /** 配送方式名称 */
  deliveryTypeDesc = '';

  /** 预计送达时间 */
  estArrivalTime = '';

  /** 礼物信息 */
  gift = new GiftInfo();

  /** 商品列表 */
  items = [];

  /** 下单日期 */
  orderDate = '';

  /** 订单编号 */
  orderId = '';

  /** 订单备注 */
  orderNote = '';

  /** 费用信息 */
  refundDetail = new OrderSummary();

  /** 退款信息 */
  refundInfo = new RefundInfo();

  /** 退款账户 */
  refundTo = new RefundTo();

  /** 快递选项 */
  shipOption = new ShipOption();

  /** 状态 */
  status = undefined;

  /** 状态描述 */
  statusDesc = '';

  /** 门店信息 */
  store = new Store();

  /** 灰色标题 */
  title = '';
}

class CardSetupIntentVO {
  /** 客户端密钥 */
  clientSecret = '';
}

class CardVO {
  /** 单元/楼栋 */
  aptUnit = '';

  /** 卡类型，如 Visa */
  brand = '';

  /** 城市 */
  city = '';

  /** 过期月份 */
  expMonth = undefined;

  /** 过期年份 */
  expYear = undefined;

  /** id */
  id = undefined;

  /** 是否默认 */
  isDefault = false;

  /** 卡号后四位 */
  last4 = '';

  /** 姓名 */
  name = '';

  /** 手机号 */
  phone = '';

  /** 州 */
  state = '';

  /** 街道 */
  street = '';

  /** 邮编 */
  zipCode = '';
}

class ColorTitle {
  /** 关键字 */
  keyword = '';

  /** 关键字颜色 */
  keywordColor = '';

  /** 标题 */
  title = '';
}

class ComputePartRefundDTO {
  /** 售后商品列表 */
  items = [];

  /** 订单编号 */
  orderId = '';
}

class ComputeRefundInfo {
  /** 配送方式名称 */
  deliveryTypeDesc = '';

  /** 下单日期 */
  orderDate = '';

  /** 订单编号  */
  orderId = '';
}

class ComputeRefundVO {
  /** 退款详情 */
  refundDetail = new RefundDetail();

  /** 退款信息 */
  refundInfo = new ComputeRefundInfo();

  /** 退款账户 */
  refundTo = new RefundTo();
}

class Contact {
  /** 名字 */
  firstName = '';

  /** 姓氏 */
  lastName = '';

  /** 手机号 */
  phone = '';
}

class DeliveryInfo {
  /** 送达图片 */
  deliveredImageUrl = '';

  /** 物流轨迹 URL */
  deliveryTrackingUrl = '';

  /** 第三方运单号 */
  thirdId = '';
}

class DigitalReceiptVO {
  /** 收货地址 & 联系人 */
  address = new Address();

  /** 基础信息 */
  information = new ReceiptOrderInfo();

  /** 缺货商品 */
  lackItems = [];

  /** 正常商品 */
  normalItems = [];

  /** 退款商品 */
  refundItems = [];

  /** 门店 */
  store = new Store();

  /** 费用信息 */
  summary = new ReceiptSummary();
}

class EditCardDTO {
  /** 单元/楼栋 */
  aptUnit = '';

  /** 银行卡 id */
  cardId = undefined;

  /** 城市 */
  city = '';

  /** 过期月份 */
  expMonth = undefined;

  /** 过期年份 */
  expYear = undefined;

  /** 是否默认 */
  isDefault = false;

  /** 姓名 */
  name = '';

  /** 手机号 */
  phone = '';

  /** 州 */
  state = '';

  /** 街道 */
  street = '';

  /** 邮编 */
  zipCode = '';
}

class EditRecipeCategoryRequest {
  /** icon图标 */
  icon = '';

  /** id */
  id = undefined;

  /** 英文名称 */
  nameEnUs = '';

  /** 中文名称 */
  nameZhCn = '';

  /** 繁体名称 */
  nameZhTw = '';

  /** 排序 */
  sort = undefined;
}

class EditRecipeRequest {
  /** 分类id */
  categoryId = undefined;

  /** 英文-内容 */
  contentEnUs = '';

  /** contentZhCn */
  contentZhCn = '';

  /** 繁体-内容 */
  contentZhTw = '';

  /** 烹饪时间(单位:分钟) */
  cookingTime = undefined;

  /** 描述信息 */
  description = '';

  /** id */
  id = undefined;

  /** 关键词 */
  keyword = '';

  /** 素材 */
  materialList = [];

  /** 商品信息 */
  productList = [];

  /** SEO标题 */
  seoTitle = '';

  /** 排序 */
  sort = undefined;

  /** 英文-标题 */
  titleEnUs = '';

  /** 中文-标题 */
  titleZhCn = '';

  /** 繁体-标题 */
  titleZhTw = '';
}

class EditStatusRequest {
  /** id */
  id = undefined;

  /** 状态 1: 禁用 2: 启用 */
  status = undefined;
}

class ExportOrderDaySummaryDTO {
  /** 渠道类型 */
  channel = undefined;

  /** 选中导出的 id */
  ids = [];

  /** 最小日期 */
  maxBizTime = '';

  /** 最小日期 */
  minBizTime = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 门店编码 */
  storeId = undefined;
}

class ExportOrderItemListDTO {
  /** 扣款时间-结束 */
  captureTimeEnd = '';

  /** 扣款时间-开始 */
  captureTimeStart = '';

  /** 渠道类型/OMS类型 */
  channelType = undefined;

  /** 下单时间-结束 */
  createdTimeEnd = '';

  /** 下单时间-开始 */
  createdTimeStart = '';

  /** 订单完成时间-结束 */
  deliveredTimeEnd = '';

  /** 订单完成时间-开始 */
  deliveredTimeStart = '';

  /** 订单行编码 */
  id = undefined;

  /** 订单号 */
  orderId = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 店铺编码 */
  storeId = undefined;

  /** 选中导出的子订单（商品）id */
  subOrderIds = [];

  /** 用户ID */
  userId = undefined;
}

class ExportOrderListDTO {
  /** 扣款状态 */
  captureStatus = undefined;

  /** 订单扣款时间-结束 */
  captureTimeEnd = '';

  /** 订单扣款时间-开始 */
  captureTimeStart = '';

  /** 渠道类型 */
  channelType = undefined;

  /** 订单创建时间-结束 */
  createdTimeEnd = '';

  /** 订单创建时间-开始 */
  createdTimeStart = '';

  /** 订单完成时间-结束 */
  deliveredTimeEnd = '';

  /** 订单完成时间-开始 */
  deliveredTimeStart = '';

  /** 订单号 */
  id = '';

  /** 选中导出的订单 id */
  orderIds = [];

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 订单状态 */
  status = undefined;

  /** 店铺编码 */
  storeId = undefined;

  /** 用户编码/ID */
  userId = undefined;

  /** 用户手机号 */
  userPhone = '';
}

class GiftInfo {
  /** 是否为礼物 */
  isGift = false;

  /** 礼物备注 */
  remark = '';
}

class Item {
  /** 商品主 upc */
  mainUpc = '';

  /** 售后数量 */
  quantity = undefined;
}

class ListOrderItem {
  /** 配送方式描述 */
  deliveryTypeDesc = '';

  /** 商品数量 */
  itemNum = undefined;

  /** 商品图片列表 */
  mainPics = [];

  /** 订单 id */
  orderId = '';

  /** 下单时间 */
  orderTime = '';

  /** 订单金额 */
  totalAmount = undefined;
}

class ListOrderPageDTO {
  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** tab 选项值 */
  tab = undefined;
}

class ListOrderPageItem {
  /** 配送方式: 1-自提，2-闪送，3-快递 */
  deliveryType = undefined;

  /** 配送方式描述 */
  deliveryTypeDesc = '';

  /** 商品数量 */
  itemNum = undefined;

  /** 商品图片列表 */
  mainPics = [];

  /** 下单日期 */
  orderDate = '';

  /** 订单编号 */
  orderNum = '';

  /** 订单状态 */
  statusDesc = '';

  /** 订单总金额 */
  totalAmount = undefined;
}

class ListProductReviewDTO {
  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 商品 id */
  productId = undefined;
}

class ListRefundPageDTO {
  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;
}

class ListRefundPageItem {
  /** 业务单号 */
  bizNo = '';

  /** 业务时间 */
  bizTime = '';

  /** 业务类型: 1-售后，2-取消 */
  bizType = undefined;

  /** 配送方式: 1-自提，2-闪送，3-快递 */
  deliveryType = undefined;

  /** 配送方式描述 */
  deliveryTypeDesc = '';

  /** 商品数量 */
  itemNum = undefined;

  /** 商品图片列表 */
  mainPics = [];

  /** 售后状态 */
  statusDesc = '';

  /** 售后总金额 */
  totalAmount = undefined;
}

class ListReviewCountVO {
  /** 状态数量列表 */
  statusCounts = [];
}

class ListReviewItem {
  /** 评价内容 */
  description = '';

  /** 订单 id */
  orderId = '';

  /** 下单时间 */
  orderTime = '';

  /** 评价图片 */
  photos = [];

  /** 评论时间 */
  reviewTime = '';

  /** 评价星级 */
  star = undefined;

  /** 会员头像 */
  userAvatar = '';

  /** 会员昵称 */
  userNickName = '';
}

class ListReviewOptionVO {
  /** 审核结果 */
  auditResultList = [];

  /** 审核状态 */
  auditStatusList = [];
}

class ListReviewPageDTO {
  /** 审核状态 */
  auditStatus = undefined;

  /** 最大提交时间 */
  maxSubmitTime = '';

  /** 最小提交时间 */
  minSubmitTime = '';

  /** 会员昵称 */
  nickName = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 来源(1:商品评论 2:食谱评论) */
  source = '';
}

class ListSubOrderDTO {
  /** 订单 id */
  orderId = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;
}

class ListSubOrderItem {
  /** 商品主图 */
  mainPic = '';

  /** 金额 */
  price = undefined;

  /** 商品名称 */
  productName = '';

  /** 数量 */
  quantity = undefined;

  /** 子订单 id */
  subOrderId = undefined;

  /** 售卖单位 */
  uom = '';

  /** 规格名称 */
  variantNameEn = '';
}

class ListToReviewOrderDTO {
  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 商品 id */
  productId = undefined;
}

class NewCardDTO {
  /** 是否默认 */
  isDefault = false;

  /** 支付方式编号（如：Stripe 的 payment_method，即 paymentMethodId） */
  paymentMethodNo = '';
}

class Option {
  /** label */
  label = '';

  /** value */
  value = undefined;
}

class OrderAdjustDetailVO {
  /** 配送地址 */
  address = new Address();

  /** 调价信息 */
  adjustment = new Adjustment();

  /** 授权金额 */
  authedPrice = undefined;

  /** 联系人 */
  contact = new Contact();

  /** 礼物信息 */
  gift = new GiftInfo();

  /** 是否展示退款：true-展示，false-不展示 */
  hasRefund = false;

  /** 订单信息 */
  information = new OrderInfo();

  /** 商品信息 */
  items = [];

  /** 支付信息 */
  payment = new OrderPayment();

  /** 退款信息 */
  refund = new AdjustRefund();

  /** 退款提示时间 */
  refundTipTime = '';

  /** 快递选项 */
  shipOption = new ShipOption();
}

class OrderCompleteDelivery {
  /** 地址信息 */
  address = new Address();

  /** 配送备注 */
  deliveryInstruction = '';

  /** 配送时间 */
  deliveryTime = new OrderDeliveryTime();

  /** 商品列表（APP） */
  items = [];

  /** 订单备注 */
  orderNote = '';

  /** 支付信息 */
  payment = new OrderPayment();

  /** 节省金额 */
  savedAmount = undefined;

  /** 费用信息 */
  summary = new OrderCompleteSummary();
}

class OrderCompleteExpress {
  /** 地址信息 */
  address = new Address();

  /** 配送备注 */
  deliveryInstruction = '';

  /** 预估送达时间 */
  estimateDate = '';

  /** 礼物信息 */
  gift = new GiftInfo();

  /** 商品列表（APP） */
  items = [];

  /** 订单备注 */
  orderNote = '';

  /** 支付信息 */
  payment = new OrderPayment();

  /** 节省金额 */
  savedAmount = undefined;

  /** 快递选项 */
  shipOption = new ShipOption();

  /** 费用信息 */
  summary = new OrderCompleteSummary();
}

class OrderCompletePickup {
  /** 联系人 */
  contact = new Contact();

  /** 商品列表 */
  items = [];

  /** 订单备注 */
  orderNote = '';

  /** 支付信息 */
  payment = new OrderPayment();

  /** 自提码 */
  pickupCode = '';

  /** 自提时间 */
  pickupTime = new OrderDeliveryTime();

  /** 节省金额 */
  savedAmount = undefined;

  /** 门店信息 */
  store = new Store();

  /** 费用信息 */
  summary = new OrderCompleteSummary();
}

class OrderCompleteSummary {
  /** 调整金额 */
  adjustPrice = undefined;

  /** 退瓶费 */
  beverageContainerFee = undefined;

  /** 配送费（运费） */
  deliveryFee = undefined;

  /** 优惠金额 */
  discount = undefined;

  /** 配送小费（闪送） */
  driverTip = undefined;

  /** 临时加收 */
  estItemAdjustment = undefined;

  /** 预估总金额 */
  estTotal = undefined;

  /** 授权金额 */
  grandTotal = undefined;

  /** 积分抵扣 */
  pointDeduction = undefined;

  /** 节省金额 */
  savedAmount = undefined;

  /** 服务费（闪送） */
  serviceFee = undefined;

  /** 运费（快递） */
  shippingFee = undefined;

  /** 商品总金额 */
  subTotalAmount = undefined;

  /** 税费 */
  taxFee = undefined;
}

class OrderCompleteVO {
  /** 订单完成信息 - 闪送 */
  delivery = new OrderCompleteDelivery();

  /** 配送方式：1-自提，2-闪送，3-快递 */
  deliveryType = undefined;

  /** 订单完成信息 - 快递 */
  express = new OrderCompleteExpress();

  /** 订单编号 */
  orderId = '';

  /** 订单完成信息 - 自提 */
  pickup = new OrderCompletePickup();
}

class OrderDaySummaryItem {
  /** 附加配送费 */
  addDeliveryFee = undefined;

  /** 业务日期 */
  bizDate = '';

  /** 扣款金额 */
  captureAmount = undefined;

  /** 渠道类型 */
  channelTypeDesc = '';

  /** 公司编码 */
  companyCode = '';

  /** 公司名称 */
  companyName = '';

  /** 退瓶费 */
  crvFee = undefined;

  /** 配送费 */
  deliveryFee = undefined;

  /** 司机小费 */
  driverTip = undefined;

  /** id */
  id = undefined;

  /** 临时加收 */
  itemAdjustAmount = undefined;

  /** 商品总价 */
  itemAmount = undefined;

  /** 订单总计 */
  orderTotal = undefined;

  /** 授权金额 */
  payAmount = undefined;

  /** 捡货调整金额 */
  pickingAdjustAmount = undefined;

  /** 平台扣点(定额) */
  platformDeductionFixed = undefined;

  /** 平台扣点 % */
  platformDeductionPct = undefined;

  /** 平台优惠 */
  platformDiscount = undefined;

  /** 积分抵扣 */
  pointsDeduction = undefined;

  /** 服务费 */
  serviceFee = undefined;

  /** 分账金额 */
  shareAmount = undefined;

  /** 门店优惠 */
  storeDiscount = undefined;

  /** 门店 id */
  storeId = undefined;

  /** 门店名称 */
  storeName = '';

  /** 税费 */
  taxFee = undefined;

  /** 所属时区 */
  timeZone = '';
}

class OrderDaySummaryOptionsVO {
  /** 渠道类型 */
  channels = [];

  /** 门店编码 */
  storeCodes = [];
}

class OrderDaySummaryPageDTO {
  /** 渠道类型 */
  channel = undefined;

  /** 最小日期 */
  maxBizTime = '';

  /** 最小日期 */
  minBizTime = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 门店编码 */
  storeId = undefined;
}

class OrderDeliver {
  /** 闪送信息 */
  deliveryInfo = new DeliveryInfo();

  /** 配送方式: 1-自提，2-闪送，3-快递 */
  deliveryType = undefined;

  /** 自提信息 */
  pickupInfo = new PickupInfo();

  /** 是否展示：闪送信息 */
  showDelivery = false;

  /** 是否展示：自提信息 */
  showPickup = false;

  /** 是否展示：快递信息 */
  showShip = false;
}

class OrderDeliveryTime {
  /** 截止时间 */
  endTime = '';

  /** 开始时间 */
  startTime = '';
}

class OrderDetailVO {
  /** 收货地址 */
  address = new Address();

  /** 联系人 */
  contact = new Contact();

  /** 物流信息 */
  deliver = new OrderDeliver();

  /** 送达时间 */
  deliveredTime = '';

  /** 配送备注 */
  deliveryNote = '';

  /** 自提/配送时间 */
  deliveryTime = new OrderDeliveryTime();

  /** 配送类型：1-自提，2-闪送，3-直邮 */
  deliveryType = undefined;

  /** 配送方式名称 */
  deliveryTypeDesc = '';

  /** 预计送达时间（快递） */
  estArrivalTime = '';

  /** 礼物信息 */
  gift = new GiftInfo();

  /** 订单信息 */
  information = new OrderInfo();

  /** 商品信息 */
  items = [];

  /** 下单日期 */
  orderDate = '';

  /** 订单编号 */
  orderId = '';

  /** 订单备注 */
  orderNote = '';

  /** 支付信息 */
  payment = new OrderPayment();

  /** 快递选项 */
  shipOption = new ShipOption();

  /** 是否展示: Adjustment & Refund */
  showAdjustmentAndRefund = false;

  /** 是否展示: Apply Refund */
  showApplyRefund = false;

  /** 是否展示: Cancel Order */
  showCancel = false;

  /** 是否展示：电子发票 */
  showDigitalReceipt = false;

  /** 是否展示：超过售后时效说明 */
  showExceedRefundDesc = false;

  /** 是否展示: Reorder */
  showReorder = false;

  /** 是否展示：取消退款详情 */
  showViewRefundDetail = false;

  /** 状态：8-已送达、9-已取消 */
  status = undefined;

  /** 状态名称 */
  statusDesc = '';

  /** 门店信息 */
  store = new Store();

  /** 子标题 */
  subTitle = '';

  /** 费用信息 */
  summary = new OrderSummary();

  /** 标题 */
  title = '';
}

class OrderInfo {
  /** 配送说明 */
  deliveryNote = '';

  /** 配送方式 */
  deliveryType = undefined;

  /** 配送方式名称 */
  deliveryTypeDesc = '';

  /** 下单日期 */
  orderDate = '';

  /** 订单编号 */
  orderId = '';

  /** 订单备注 */
  orderNote = '';

  /** 支付信息 */
  paymentDesc = '';
}

class OrderItem {
  /** 调整价格 */
  adjustPrice = undefined;

  /** 调整数量 */
  adjustQuantity = undefined;

  /** 调价类型：0-无、1-数量、2-重量、3-重量和数量 */
  adjustType = undefined;

  /** 调整重量 */
  adjustWeigh = undefined;

  /** 是否缺货 */
  isOutOfStock = false;

  /** 商品金额 */
  itemAmount = undefined;

  /** 商品主图 */
  mainPic = '';

  /** 市场价格 */
  marketPrice = undefined;

  /** 商品净重 */
  netWeight = undefined;

  /** 净重单位 */
  netWeightUom = '';

  /** 商品名称 */
  productName = '';

  /** 商品类型：1-非称重、2-称重 */
  productType = undefined;

  /** 促销商品 */
  promotionItem = {};

  /** 促销商品金额 */
  promotionItemAmount = undefined;

  /** 促销净重单价 */
  promotionRetailPrice = undefined;

  /** 促销售价 */
  promotionSalePrice = undefined;

  /** 促销提示：如买一送一 */
  promotionTip = '';

  /** 促销类型：0 - 无，1 - 直降，2 - 买赠，3 - 第 X 件折扣 */
  promotionType = undefined;

  /** 购买数量 */
  quantity = undefined;

  /** 净重单价（零售价） */
  retailPrice = undefined;

  /** 售卖价格 */
  salePrice = undefined;

  /** 售卖单位 */
  saleUom = '';

  /** 购买单位 */
  uom = '';

  /** 规格名称 */
  variantName = '';

  /** 购买净重 */
  weigh = undefined;
}

class OrderItemListOptionsVO {
  /** 渠道类型 */
  channels = [];

  /** 门店编码 */
  storeCodes = [];
}

class OrderItemPageQueryDTO {
  /** 扣款时间-结束 */
  captureTimeEnd = '';

  /** 扣款时间-开始 */
  captureTimeStart = '';

  /** 渠道类型/OMS类型 */
  channelType = undefined;

  /** 下单时间-结束 */
  createdTimeEnd = '';

  /** 下单时间-开始 */
  createdTimeStart = '';

  /** 订单完成时间-结束 */
  deliveredTimeEnd = '';

  /** 订单完成时间-开始 */
  deliveredTimeStart = '';

  /** 订单行编码 */
  id = undefined;

  /** 订单号 */
  orderId = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 店铺编码 */
  storeId = undefined;

  /** 用户ID */
  userId = undefined;
}

class OrderItemVO {
  /** 附加配送费 */
  addDriverTip = undefined;

  /** ship to(city) */
  addressCity = '';

  /** ship to(state) */
  addressState = '';

  /** 拣货调整金额 */
  adjustPrice = undefined;

  /** 调整数量 */
  adjustQuantity = undefined;

  /** 调整重量 */
  adjustWeight = undefined;

  /** 所有促销后金额 */
  afterAllPromotionAmount = undefined;

  /** 预授权金额 */
  authedAmount = undefined;

  /** 扣款时间 */
  captureTime = '';

  /** 渠道类型 */
  channelType = '';

  /** 下单时间 */
  createdTime = '';

  /** 退瓶费 */
  crvFee = undefined;

  /** 售价 */
  currentSalePrice = undefined;

  /** 完成时间 */
  deliveredTime = '';

  /** 配送费 */
  deliveryFee = undefined;

  /** 配送方式 */
  deliveryTypeDesc = '';

  /** 补差所有促销后金额 */
  diffAfterAllPromotionAmount = undefined;

  /** 补差退瓶费 */
  diffCrvFee = undefined;

  /** 补差直降后商品价格 */
  diffDiscountedPrice = undefined;

  /** 补差商品原价 */
  diffMarketPrice = undefined;

  /** 补差平台分摊促销金额 */
  diffPlatformDiscount = undefined;

  /** 补差积分抵扣 */
  diffPointsDeduction = undefined;

  /** 补差商家分摊促销金额 */
  diffStoreDiscount = undefined;

  /** 补差消费税 */
  diffTaxFee = undefined;

  /** 直降后商品价格 */
  discountedPrice = undefined;

  /** 司机小费 */
  driverTip = undefined;

  /** 订单行编码 */
  id = undefined;

  /** 是否为赠品 */
  isGift = '';

  /** 称重商品 */
  isWeighedProduct = '';

  /** 下单重量 */
  itemWeight = undefined;

  /** 主品名称 */
  mainProductName = '';

  /** 商品原价 */
  marketPrice = undefined;

  /** 商家名称 */
  merchantName = '';

  /** 订单号 */
  orderId = '';

  /** 收费金额 */
  payAmount = undefined;

  /** 付款方 */
  payingParty = '';

  /** 扣款成功 */
  paymentSuccessful = '';

  /** 履约附加配送费 */
  performAddDriverTip = undefined;

  /** 履约所有促销后金额 */
  performAfterAllPromotionAmount = undefined;

  /** 履约退瓶费 */
  performCrvFee = undefined;

  /** 履约配送费 */
  performDeliveryFee = undefined;

  /** 履约直降后商品价格 */
  performDiscountedPrice = undefined;

  /** 履约司机小费 */
  performDriverTip = undefined;

  /** 履约商品原价 */
  performMarketPrice = undefined;

  /** 履约平台分摊促销金额 */
  performPlatformDiscount = undefined;

  /** 履约积分抵扣 */
  performPointsDeduction = undefined;

  /** 履约服务费 */
  performServiceFee = undefined;

  /** 履约商家分摊促销金额 */
  performStoreDiscount = undefined;

  /** 履约消费税 */
  performTaxFee = undefined;

  /** 履约数量 */
  performanceQuantity = undefined;

  /** 履约重量 */
  performanceWeigh = undefined;

  /** 平台扣点（定额） */
  platformCommissionAmount = undefined;

  /** 平台扣点% */
  platformCommissionPercent = undefined;

  /** 平台分摊促销金额 */
  platformDiscount = undefined;

  /** 积分抵扣 */
  pointsDeduction = undefined;

  /** Article Number */
  productId = undefined;

  /** 商品名称 */
  productName = '';

  /** 下单数量 */
  quantity = undefined;

  /** 收款方 */
  receivingParty = '';

  /** 单位 */
  saleUom = '';

  /** 服务费 */
  serviceFee = undefined;

  /** 分账金额 */
  splitAmount = undefined;

  /** ship from(city) */
  storeAddrCity = '';

  /** ship from(State) */
  storeAddrState = '';

  /** 商家分摊促销金额 */
  storeDiscount = undefined;

  /** 店铺编码 */
  storeId = undefined;

  /** 店铺名称 */
  storeName = '';

  /** 所在时区 */
  storeTimeZone = '';

  /** 消费税 */
  taxFee = undefined;

  /** UPC */
  upc = '';

  /** 用户ID */
  userId = undefined;

  /** 用户手机号 */
  userPhone = '';

  /** 规格 */
  variantNameEn = '';
}

class OrderListOptionsVO {
  /** 扣款状态 */
  captureStatusList = [];

  /** 渠道类型 */
  channels = [];

  /** 订单状态 */
  orderStatusList = [];

  /** 门店编码 */
  storeCodes = [];
}

class OrderPayment {
  /** 卡类型 */
  brand = '';

  /** 后 4 位 */
  last4 = '';

  /** 支付金额 */
  payAmount = undefined;
}

class OrderReportPageQueryDTO {
  /** 扣款状态 */
  captureStatus = undefined;

  /** 订单扣款时间-结束 */
  captureTimeEnd = '';

  /** 订单扣款时间-开始 */
  captureTimeStart = '';

  /** 渠道类型 */
  channelType = undefined;

  /** 订单创建时间-结束 */
  createdTimeEnd = '';

  /** 订单创建时间-开始 */
  createdTimeStart = '';

  /** 订单完成时间-结束 */
  deliveredTimeEnd = '';

  /** 订单完成时间-开始 */
  deliveredTimeStart = '';

  /** 订单号 */
  id = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 订单状态 */
  status = undefined;

  /** 店铺编码 */
  storeId = undefined;

  /** 用户编码/ID */
  userId = undefined;

  /** 用户手机号 */
  userPhone = '';
}

class OrderReportVO {
  /** 附加配送费/运费 */
  addDriverTip = undefined;

  /** ship to(city) */
  addressCity = '';

  /** ship to(state) */
  addressState = '';

  /** 实际扣款金额 */
  captureAmount = undefined;

  /** 扣款状态 */
  captureStatus = '';

  /** 扣款时间 */
  captureTime = '';

  /** 渠道类型 */
  channelType = '';

  /** 公司编码 */
  companyCode = '';

  /** 订单创建时间 */
  createdTime = '';

  /** 退瓶费 */
  crvFee = undefined;

  /** 订单完成时间 */
  deliveredTime = '';

  /** 配送费/运费 */
  deliveryFee = undefined;

  /** 配送方式 */
  deliveryType = '';

  /** 司机小费/配送小费 */
  driverTip = undefined;

  /** 订单号 */
  id = '';

  /** 是否割接订单 */
  isCutOrder = '';

  /** 临时加收金额 */
  itemAdjustment = undefined;

  /** 商品总价 */
  itemAmount = undefined;

  /** 商家名称 */
  merchantName = '';

  /** 订单总计 */
  orderTotalAmount = undefined;

  /** 预授权金额 */
  payAmount = undefined;

  /** 履约时间 */
  performanceTime = '';

  /** 提货码 */
  pickUpCode = '';

  /** 拣货调整金额 */
  pickingAdjustAmount = undefined;

  /** 平台订单级优惠金额 */
  platformCoupon = undefined;

  /** 积分抵扣 */
  pointsDeduction = undefined;

  /** 商品类型 */
  productType = '';

  /** 服务费 */
  serviceFee = undefined;

  /** 订单状态 */
  status = '';

  /** ship from(city) */
  storeAddrCity = '';

  /** ship from(State) */
  storeAddrState = '';

  /** 门店订单级优惠金额 */
  storeCoupon = undefined;

  /** 门店分组名称 */
  storeGroupName = '';

  /** 店铺编码 */
  storeId = undefined;

  /** 店铺名称 */
  storeName = '';

  /** 所在时区 */
  storeTimeZone = '';

  /** 消费税 */
  taxFee = undefined;

  /** 用户ID */
  userId = undefined;

  /** 用户手机号 */
  userPhone = '';
}

class OrderSummary {
  /** 调整金额 */
  adjustPrice = undefined;

  /** 授权金额 */
  authedPrice = undefined;

  /** 退瓶费 */
  beverageContainerFee = undefined;

  /** 配送费（闪送） */
  deliveryFee = undefined;

  /** 优惠金额 */
  discount = undefined;

  /** 配送小费（闪送） */
  driverTip = undefined;

  /** 临时加收 */
  estItemAdjustment = undefined;

  /** 预估总价 */
  estTotal = undefined;

  /** 积分抵扣 */
  pointDeduction = undefined;

  /** 服务费（闪送） */
  serviceFee = undefined;

  /** 运费（快递） */
  shippingFee = undefined;

  /** 是否展示：临时加收 */
  showEstItemAdjustment = false;

  /** 是否展示：Est.total */
  showEstTotal = false;

  /** 是否展示：total */
  showTotal = false;

  /** 商品总金额 */
  subTotalAmount = undefined;

  /** 税费 */
  taxFee = undefined;

  /** 订单总金额 */
  totalAmount = undefined;
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

class PageParam {
  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;
}

class PayConfigVO {
  /** Stripe 公钥 */
  publicKey = '';
}

class Payment {
  /** 信用卡品牌 */
  brand = '';

  /** 信用卡后 4 位 */
  last4 = '';
}

class PaymentRefund {
  /** 实退金额 */
  actualRefund = undefined;

  /** 卡号后 4 位 */
  payMethodLast4 = '';

  /** 退款渠道 */
  refundChannel = '';

  /** 售后单号 */
  refundId = '';

  /** 退款单号 */
  refundNo = '';

  /** 退款路径 */
  refundPath = '';

  /** 退款时间 */
  refundTime = '';

  /** 应退金额 */
  shouldRefund = undefined;

  /** 退款状态 */
  statusDesc = '';
}

class PickupInfo {
  /** 自提码 */
  pickupCode = '';
}

class ProductReviewItem {
  /** 评价内容 */
  description = '';

  /** 评价图片 */
  photos = [];

  /** 评论时间 */
  reviewTime = '';

  /** 评价星级 */
  star = undefined;

  /** 会员头像 */
  userAvatar = '';

  /** 会员昵称 */
  userNickName = '';
}

class ProductReviewVO {
  /** 平均星级 */
  avgStar = undefined;

  /** 评价数 */
  reviewNum = undefined;

  /** 是否展示：评论按钮 */
  showReviewButton = false;

  /** 1 星百分比 */
  star1 = undefined;

  /** 2 星百分比 */
  star2 = undefined;

  /** 3 星百分比 */
  star3 = undefined;

  /** 4 星百分比 */
  star4 = undefined;

  /** 5 星百分比 */
  star5 = undefined;
}

class QueryRecipeCategoryOptionResponse {
  /** id */
  id = undefined;

  /** 名称(会自动转化 中/英/繁 语言) */
  name = '';
}

class QueryRecipeCategoryRequest {
  /** 分类名称 */
  categoryName = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /**  状态  1: 启用 2:禁用 */
  status = undefined;
}

class QueryRecipeCategoryResponse {
  /** 内容数量 */
  contentNum = undefined;

  /** icon图标 */
  icon = '';

  /** id */
  id = undefined;

  /** 英文名称 */
  nameEnUs = '';

  /** 中文名称 */
  nameZhCn = '';

  /** 繁体名称 */
  nameZhTw = '';

  /** 排序 */
  sort = undefined;

  /**  状态  1: 启用 2:禁用 */
  status = undefined;

  /** 更新人id */
  updatedBy = undefined;

  /** 更新人姓名 */
  updatedByName = '';

  /** 更新时间 yyyy-MM-dd HH:mm:ss */
  updatedTime = '';
}

class QueryRecipeRequest {
  /** 分类id */
  categoryId = undefined;

  /** 结束-创建时间   yyyy-MM-dd HH:mm:ss */
  endCreatedTime = '';

  /** 结束-更新时间   yyyy-MM-dd HH:mm:ss */
  endUpdatedTime = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 起始-创建时间   yyyy-MM-dd HH:mm:ss */
  startCreatedTime = '';

  /** 起始-更新时间   yyyy-MM-dd HH:mm:ss */
  startUpdatedTime = '';

  /**  状态  0:草稿, 1: 启用 2:禁用 */
  status = undefined;

  /** 标题 */
  title = '';
}

class QueryRecipeResponse {
  /** 分类id */
  categoryId = undefined;

  /** 分类名 */
  categoryName = undefined;

  /** 评论次数 */
  commentNum = undefined;

  /** id */
  id = undefined;

  /** 素材  最多只会返回2条 */
  materialList = [];

  /** 展示次数 */
  showNum = undefined;

  /** 排序 */
  sort = undefined;

  /** 状态   0:草稿, 1: 启用 2:禁用 */
  status = undefined;

  /** 标题 自动转化语言 中/英/繁 */
  title = '';

  /** 更新人id */
  updatedBy = undefined;

  /** 更新人姓名 */
  updatedByName = '';

  /** 更新时间 yyyy-MM-dd HH:mm:ss */
  updatedTime = '';
}

class ReceiptItem {
  /** 商品金额 */
  itemAmount = undefined;

  /** main upc */
  mainUpc = '';

  /** 商品名称 */
  productName = '';

  /** 商品类型：1-非称重、2-称重 */
  productType = undefined;

  /** 数量 */
  quantity = undefined;

  /** 净重单价 */
  retailPrice = undefined;

  /** 重量 */
  weight = undefined;

  /** 称重单位 */
  weightUom = '';
}

class ReceiptOrderInfo {
  /** 配送方式: 1-自提，2-闪送，3-快递 */
  deliveryType = undefined;

  /** 订单 id */
  orderId = '';

  /** 下单时间 */
  orderTime = '';

  /** 支付描述 */
  paymentDesc = '';

  /** 服务类型：Pickup、Delivery */
  serviceTypeDesc = '';
}

class ReceiptSummary {
  /** 授权金额 */
  authedAmount = undefined;

  /** 退瓶费 */
  crvFee = undefined;

  /** 配送费 */
  deliveryFee = undefined;

  /** 优惠金额 */
  discount = undefined;

  /** 配送小费 */
  driverTip = undefined;

  /** 积分抵扣 */
  pointsDeduction = undefined;

  /** 调价金额 */
  priceAdjustment = undefined;

  /** 退款总额 */
  refundTotal = undefined;

  /** 服务费 */
  serviceFee = undefined;

  /** 商品总金额 */
  subTotal = undefined;

  /** 税费 */
  taxFee = undefined;

  /** 总金额 */
  totalAmount = undefined;
}

class RecipeMaterialVo {
  /** recipeId */
  recipeId = undefined;

  /** 素材类型(0: 图片 1:视频) */
  type = undefined;

  /** 素材url */
  url = '';
}

class RecipeProductVo {
  /** 图片地址 */
  imageUrl = '';

  /** 商品名称 */
  name = '';

  /** 数量 */
  quantity = undefined;

  /** upc */
  upc = '';

  /** 商品sku(规格id) Id */
  variantId = '';
}

class RefundApplyItem {
  /** 是否有促销 */
  hasPromotion = false;

  /** 商品主图 */
  mainPic = '';

  /** 主 upc */
  mainUpc = '';

  /** 商品 id */
  productId = undefined;

  /** 商品名称 */
  productName = '';

  /** 商品类型：1-非称重、2-称重 */
  productType = undefined;

  /** 促销商品 */
  promotionItem = new WebRefundPromotionItem();

  /** 促销提示 */
  promotionTip = '';

  /** 促销类型：2-买赠 */
  promotionType = undefined;

  /** 可售后数量 */
  quantity = undefined;

  /** 净重单价 */
  retailPrice = undefined;

  /** 单件售价 */
  salePrice = undefined;

  /** 商品金额 */
  totalAmount = undefined;

  /** 规格名称 */
  variantName = '';

  /** 总重量 */
  weight = undefined;

  /** 重量单位 */
  weightUom = '';
}

class RefundApplyVO {
  /** 商品列表 */
  items = [];

  /** 是否没有售后 */
  noRefund = false;

  /** 下单时间 */
  orderDate = '';

  /** 订单编号 */
  orderId = '';
}

class RefundDetail {
  /** 退瓶费 */
  crvFee = undefined;

  /** 抵扣的积分 */
  deductPoints = undefined;

  /** 配送费 */
  deliveryFee = undefined;

  /** 优惠金额 */
  discount = undefined;

  /** 司机小费 */
  driverTip = undefined;

  /** 预计退款金额 */
  estTotal = undefined;

  /** 发放的积分 */
  issuedPoints = undefined;

  /** 积分抵扣金额 */
  pointsDeduction = undefined;

  /** 服务费 */
  serviceFee = undefined;

  /** 是否展示：预计退款金额 */
  showEstTotal = false;

  /** 是否展示：退款金额项 */
  showPriceItems = false;

  /** 是否展示：退款金额 */
  showTotal = false;

  /** 商品总额 */
  subTotal = undefined;

  /** 税费 */
  taxFee = undefined;

  /** 退款金额 */
  total = undefined;
}

class RefundDetailVO {
  /** 整单售后信息 */
  allRefundInfo = new AllRefundInfo();

  /** 申请类型：1-整单、2-部分 */
  applyType = undefined;

  /** 授权金额 */
  authedPrice = undefined;

  /** 配送方式: 1-自提，2-闪送，3-快递 */
  deliveryType = undefined;

  /** 配送方式名称 */
  deliveryTypeDesc = '';

  /** 售后详情 */
  refundDetail = new RefundDetail();

  /** 主售后单号 */
  refundId = '';

  /** 售后信息 */
  refundInfo = new RefundInfo();

  /** 售后商品列表 */
  refundItems = [];

  /** 售后单列表 */
  refundOrders = [];

  /** 退款账户 */
  refundTo = new RefundTo();

  /** 展示类型：1-售后商品列表，2-售后单列表 */
  showType = undefined;

  /** 状态时间 */
  statusTime = '';

  /** 状态标题 */
  statusTitle = new ColorTitle();

  /** 门店信息 */
  store = new Store();
}

class RefundInfo {
  /** 业务日期 */
  bizDate = '';

  /** 业务单号 */
  bizNo = '';

  /** 配送方式名称 */
  deliveryTypeDesc = '';

  /** 订单备注 */
  orderNote = '';

  /** 支付信息 */
  payment = '';
}

class RefundItem {
  /** 售后备注 */
  comment = '';

  /** 商品主图 */
  mainPic = '';

  /** 售后凭证 */
  pictures = [];

  /** 商品名称 */
  productName = '';

  /** 商品类型：1-非称重、2-称重 */
  productType = undefined;

  /** 数量 */
  quantity = undefined;

  /** 售后原因 */
  reasonDesc = '';

  /** 拒绝原因 */
  rejectReason = '';

  /** 净重单价 */
  retailPrice = undefined;

  /** 状态 */
  status = undefined;

  /** 状态描述 */
  statusDesc = '';

  /** 购买金额 */
  totalAmount = undefined;

  /** 售卖单位 */
  uom = '';

  /** 重量 */
  weigh = undefined;
}

class RefundItemListExportDTO {
  /** 渠道类型 */
  channel = undefined;

  /** 最大申请时间 */
  maxApplyTime = '';

  /** 最大扣款时间 */
  maxCaptureTime = '';

  /** 最大完成时间 */
  maxCompleteTime = '';

  /** 最大下单时间 */
  maxOrderTime = '';

  /** 最大退款时间 */
  maxRefundTime = '';

  /** 最小申请时间 */
  minApplyTime = '';

  /** 最小扣款时间 */
  minCaptureTime = '';

  /** 最小完成时间 */
  minCompleteTime = '';

  /** 最小下单时间 */
  minOrderTime = '';

  /** 最小退款时间 */
  minRefundTime = '';

  /** 订单号 */
  orderId = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 售后单号 */
  refundId = '';

  /** 售后单行编码 */
  refundItemId = '';

  /** 选中的售后单行编码 */
  refundItemIds = [];

  /** 店铺编码 */
  storeCode = undefined;

  /** 用户 id */
  userId = undefined;
}

class RefundItemListItem {
  /** 附加配送费 */
  addDeliveryFee = undefined;

  /** 直降后商品价格 */
  afterDirectDiscountAmount = undefined;

  /** 所有促销后金额 */
  afterDiscountAmount = undefined;

  /** 申请时间 */
  applyTime = '';

  /** Article Number */
  articleNumber = undefined;

  /** 扣款时间 */
  captureTime = '';

  /** 渠道类型 */
  channel = '';

  /** 公司编码 */
  companyCode = '';

  /** 完成时间 */
  completeTime = '';

  /** 退瓶费 */
  crvFee = undefined;

  /** 司机小费 */
  driverTip = undefined;

  /** 退款成功 */
  isRefund = '';

  /** 称重商品 */
  isWeightProduct = '';

  /** 商品原价 */
  marketPrice = undefined;

  /** 订单号 */
  orderId = '';

  /** 下单时间 */
  orderTime = '';

  /** 收款方（用户 ID） */
  payee = undefined;

  /** 付款方 */
  payer = '';

  /** 履约方 */
  performingParty = '';

  /** 平台扣点（定额） */
  platformDeductionFixed = undefined;

  /** 平台扣点 % */
  platformDeductionPct = undefined;

  /** 平台配送费 */
  platformDeliveryFee = undefined;

  /** 平台运费抵扣 */
  platformDeliveryFeeDiscount = undefined;

  /** 平台分摊促销金额 */
  platformDiscountAmount = undefined;

  /** 积分抵扣 */
  pointsDeduction = undefined;

  /** 商品名称 */
  productName = '';

  /** 退款金额 */
  refundAmount = undefined;

  /** 售后单号 */
  refundId = '';

  /** 售后单行编码 */
  refundItemId = undefined;

  /** 售后数量 */
  refundNum = undefined;

  /** 售后状态 */
  refundStatusDesc = '';

  /** 退款时间 */
  refundTime = '';

  /** 售后类型 */
  refundTypeDesc = '';

  /** 售价 */
  salePrice = undefined;

  /** 服务费 */
  serviceFee = undefined;

  /** 分账金额 */
  shareAmount = undefined;

  /** ship from city */
  shipFromCity = '';

  /** ship from state */
  shipFromState = '';

  /** ship to city */
  shipToCity = '';

  /** ship to state */
  shipToState = '';

  /** 店铺编码 */
  storeCode = undefined;

  /** 商家配送费 */
  storeDeliveryFee = undefined;

  /** 商家运费抵扣 */
  storeDeliveryFeeDiscount = undefined;

  /** 商家分摊促销金额 */
  storeDiscountAmount = undefined;

  /** 店铺名称 */
  storeName = '';

  /** 消费税 */
  taxFee = undefined;

  /** 所在时区 */
  timezone = '';

  /** 单位 */
  uom = '';

  /** UPC */
  upc = '';

  /** 用户 ID */
  userId = undefined;

  /** 规格 */
  variantName = '';
}

class RefundItemListOptionsVO {
  /** 渠道类型 */
  channels = [];

  /** 门店编码 */
  storeCodes = [];
}

class RefundItemListPageDTO {
  /** 渠道类型 */
  channel = undefined;

  /** 最大申请时间 */
  maxApplyTime = '';

  /** 最大扣款时间 */
  maxCaptureTime = '';

  /** 最大完成时间 */
  maxCompleteTime = '';

  /** 最大下单时间 */
  maxOrderTime = '';

  /** 最大退款时间 */
  maxRefundTime = '';

  /** 最小申请时间 */
  minApplyTime = '';

  /** 最小扣款时间 */
  minCaptureTime = '';

  /** 最小完成时间 */
  minCompleteTime = '';

  /** 最小下单时间 */
  minOrderTime = '';

  /** 最小退款时间 */
  minRefundTime = '';

  /** 订单号 */
  orderId = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 售后单号 */
  refundId = '';

  /** 售后单行编码 */
  refundItemId = '';

  /** 店铺编码 */
  storeCode = undefined;

  /** 用户 id */
  userId = undefined;
}

class RefundListExportDTO {
  /** 最大申请时间 */
  maxApplyTime = '';

  /** 最大扣款时间 */
  maxCaptureTime = '';

  /** 最大退款时间 */
  maxRefundTime = '';

  /** 最小申请时间 */
  minApplyTime = '';

  /** 最小扣款时间 */
  minCaptureTime = '';

  /** 最小退款时间 */
  minRefundTime = '';

  /** 订单号 */
  orderId = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 售后单号 */
  refundId = '';

  /** 选中导出的售后 id */
  refundIds = [];

  /** 店铺编码 */
  storeCode = undefined;

  /** 门店分组 id */
  storeGroupId = undefined;

  /** 用户 id */
  userId = undefined;

  /** 用户手机号 */
  userPhone = '';
}

class RefundListItem {
  /** 申请时间 */
  applyTime = '';

  /** 商家名称 */
  merchantName = '';

  /** 商家类型 */
  merchantTypeDesc = '';

  /** 订单号 */
  orderId = '';

  /** 实退金额 */
  refundAmount = undefined;

  /** 售后单号 */
  refundId = '';

  /** 售后状态 */
  refundStatusDesc = '';

  /** 退款时间 */
  refundTime = '';

  /** 售后类型 */
  refundTypeDesc = '';

  /** ship from city */
  shipFromCity = '';

  /** ship from state */
  shipFromState = '';

  /** ship to city */
  shipToCity = '';

  /** ship to state */
  shipToState = '';

  /** 应退金额 */
  shouldRefundAmount = undefined;

  /** Sku 个数 */
  skuNum = undefined;

  /** 店铺编码 */
  storeId = undefined;

  /** 店铺名称 */
  storeName = '';

  /** 用户 id */
  userId = undefined;

  /** 用户手机号 */
  userPhone = '';
}

class RefundListOptionsVO {
  /** 门店编码 */
  storeCodes = [];

  /** 门店分组 */
  storeGroups = [];
}

class RefundListPageDTO {
  /** 最大申请时间 */
  maxApplyTime = '';

  /** 最大扣款时间 */
  maxCaptureTime = '';

  /** 最大退款时间 */
  maxRefundTime = '';

  /** 最小申请时间 */
  minApplyTime = '';

  /** 最小扣款时间 */
  minCaptureTime = '';

  /** 最小退款时间 */
  minRefundTime = '';

  /** 订单号 */
  orderId = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 售后单号 */
  refundId = '';

  /** 店铺编码 */
  storeCode = undefined;

  /** 门店分组 id */
  storeGroupId = undefined;

  /** 用户 id */
  userId = undefined;

  /** 用户手机号 */
  userPhone = '';
}

class RefundOrder {
  /** 售后商品列表 */
  items = [];

  /** 售后详情（费用信息） */
  refundDetail = new RefundDetail();

  /** 售后单号 */
  refundNo = '';

  /** 退货提示标题 */
  returnHintTitle = '';

  /** 退货警告信息 */
  returnWarn = '';

  /** 是否展示：退货提示（退货时效、门店地址、导航） */
  showReturnHint = false;

  /** 是否展示：退货警告信息 */
  showReturnWarn = false;

  /** 售后状态 */
  status = undefined;

  /** 状态标题 */
  statusTitle = new ColorTitle();

  /** 售后类型: 1-仅退款，2-退货退款 */
  type = undefined;
}

class RefundRuleVO {
  /** 售后原因列表 */
  reasons = [];
}

class RefundStatusItem {
  /** 业务时间 */
  bizTime = '';

  /** 标题 1 */
  title1 = new ColorTitle();

  /** 标题 2 */
  title2 = '';
}

class RefundStatusVO {
  /** 预估退款金额 */
  estTotal = undefined;

  /** 是否展示：预估退款金额 */
  showEstTotal = false;

  /** 是否展示：退款金额 */
  showTotal = false;

  /** 状态列表 */
  statusList = [];

  /** 退款金额 */
  total = undefined;
}

class RefundTo {
  /** 卡类型 */
  brand = '';

  /** 后 4 位 */
  last4 = '';
}

class Response {
  /** 状态码：0-成功 */
  code = undefined;

  /** 响应数据 */
  data = new AddRecipeRequest();

  /** 状态描述 */
  message = '';

  /** success */
  success = false;
}

class ReturnItem {
  /** ERP Article Number */
  articleNumber = undefined;

  /** 是否赠品描述 */
  isGiftDesc = '';

  /** 商品主图 */
  mainPic = '';

  /** 主 UPC */
  mainUpc = '';

  /** 商品 id */
  productId = undefined;

  /** 商品名称 */
  productName = '';

  /** 售价 */
  retailPrice = undefined;

  /** 应退数量 */
  shouldReturnQuantity = undefined;

  /** 应退重量 */
  shouldReturnWeigh = undefined;

  /** 商品规格 */
  uom = '';
}

class ReturnProductVO {
  /** 商品列表 */
  items = [];

  /** 主售后单 */
  mainRefundId = '';

  /** 售后状态 */
  statusDesc = '';

  /** 子售后单 */
  subRefundId = '';
}

class ReviewStatusCountDTO {
  /** 最大提交时间 */
  maxSubmitTime = '';

  /** 最小提交时间 */
  minSubmitTime = '';

  /** 会员昵称 */
  nickName = '';
}

class RuleItem {
  /** 备注限制 */
  commentLimit = undefined;

  /** 备注必填 */
  commentRequired = false;

  /** 图片限制 */
  pictureLimit = undefined;

  /** 图片必填 */
  pictureRequired = false;

  /** 售后原因 */
  reason = undefined;

  /** 售后原因描述 */
  reasonDesc = '';
}

class S3PreSignInfo {
  /** 上传后的访问地址 */
  key = '';

  /** 上传 URL，请求方式 PUT */
  url = '';
}

class SaveAllRefundDTO {
  /** 备注 */
  comment = '';

  /** 订单编号 */
  orderId = '';

  /** 图片 */
  pictures = [];

  /** 售后原因 */
  reason = undefined;
}

class SaveAuditDTO {
  /** 审核意见 */
  auditComment = '';

  /** 审核结果 */
  auditResult = undefined;

  /** 审核 id 列表 */
  ids = [];
}

class SavePartRefundDTO {
  /** 商品信息列表 */
  items = [];

  /** 订单编号 */
  orderId = '';
}

class SaveRefundItem {
  /** 备注 */
  comment = '';

  /** 主 UPC */
  mainUpc = '';

  /** 图片 */
  pictures = [];

  /** 售后数量 */
  quantity = undefined;

  /** 售后原因 */
  reason = undefined;
}

class SaveRefundVO {
  /** 售后编号 */
  refundNo = '';
}

class SaveReviewDTO {
  /** 评价内容 */
  description = '';

  /** 评价图片 */
  photos = [];

  /** 星级 */
  star = undefined;

  /** 子订单 id */
  subOrderId = undefined;
}

class ShipOption {
  /** 选项值：1-普通快递、2-加急快递 */
  optionId = undefined;

  /** 快递备注 */
  remark = '';
}

class StatusCount {
  /** 数量 */
  count = undefined;

  /** 状态 */
  status = undefined;

  /** 状态描述 */
  statusDesc = '';
}

class Store {
  /** 城市 */
  city = '';

  /** 编号 */
  code = undefined;

  /** 门店 id */
  id = undefined;

  /** 纬度 */
  latitude = undefined;

  /** 经度 */
  longitude = undefined;

  /** 名称 */
  name = '';

  /** 联系电话 */
  phone = '';

  /** 州 */
  state = '';

  /** 街道 */
  street = '';

  /** 邮编 */
  zipCode = '';
}

class TestDateDTO {
  /** maxTime */
  maxTime = '';

  /** minTime */
  minTime = '';
}

class WebComputeRefundVO {
  /** 退款费用 */
  refundPrice = new WebRefundPrice();

  /** 退款账户 */
  refundTo = new RefundTo();
}

class WebOrderAdjustVO {
  /** 调价信息 */
  adjustment = new Adjustment();

  /** 联系人 */
  contact = new Contact();

  /** 配送地址 */
  deliveryAddress = new Address();

  /** 配送备注 */
  deliveryNote = '';

  /** 配送类型：1-自提，2-闪送，3-直邮 */
  deliveryType = undefined;

  /** 配送方式名称 */
  deliveryTypeDesc = '';

  /** 礼物信息 */
  giftInfo = new GiftInfo();

  /** 是否有退款 */
  hasRefund = false;

  /** 商品信息 */
  items = [];

  /** 下单日期 */
  orderDate = '';

  /** 订单编号 */
  orderId = '';

  /** 订单备注 */
  orderNote = '';

  /** 支付信息 */
  payment = new OrderPayment();

  /** 退款状态描述 */
  refundStatusDesc = '';

  /** 退款提示时间 */
  refundTipTime = '';

  /** 快递地址 */
  shipAddress = new Address();

  /** 快递信息 */
  shipOption = new ShipOption();
}

class WebOrderCancelVO {
  /** 账单地址 */
  billingAddress = new BillingAddress();

  /** 联系人 */
  contact = new Contact();

  /** 配送地址 */
  deliveryAddress = new Address();

  /** 配送备注 */
  deliveryNote = '';

  /** 配送时间 */
  deliveryTime = new OrderDeliveryTime();

  /** 配送类型：1-自提，2-闪送，3-直邮 */
  deliveryType = undefined;

  /** 配送方式名称 */
  deliveryTypeDesc = '';

  /** 预计送达时间 */
  estArrivalTime = '';

  /** 礼物信息 */
  giftInfo = new GiftInfo();

  /** 商品信息 */
  items = [];

  /** 下单日期 */
  orderDate = '';

  /** 订单编号 */
  orderId = '';

  /** 订单备注 */
  orderNote = '';

  /** 自提时间 */
  pickUpTime = new OrderDeliveryTime();

  /** 费用信息 */
  refundDetail = new OrderSummary();

  /** 退款信息 */
  refundTo = new RefundTo();

  /** 快递地址 */
  shipAddress = new Address();

  /** 快递信息 */
  shipOption = new ShipOption();

  /** 状态 */
  status = undefined;

  /** 状态名称 */
  statusDesc = '';

  /** 门店信息 */
  store = new Store();
}

class WebOrderCompleteVO {
  /** 联系人 */
  contact = new Contact();

  /** 配送地址 */
  deliveryAddress = new Address();

  /** 配送备注 */
  deliveryNote = '';

  /** 配送时间 */
  deliveryTime = new OrderDeliveryTime();

  /** 配送方式：1-自提，2-闪送，3-快递 */
  deliveryType = undefined;

  /** 预计送达时间 */
  estArrivalTime = '';

  /** 礼物信息 */
  giftInfo = new GiftInfo();

  /** 商品信息 */
  items = [];

  /** 订单号 */
  orderId = '';

  /** 订单备注 */
  orderNote = '';

  /** 支付信息 */
  payment = new OrderPayment();

  /** 自提码 */
  pickUpCode = '';

  /** 自提时间 */
  pickUpTime = new OrderDeliveryTime();

  /** 快递地址 */
  shipAddress = new Address();

  /** 快递信息 */
  shipOption = new ShipOption();

  /** 门店信息 */
  store = new Store();

  /** 费用信息 */
  summary = new OrderCompleteSummary();
}

class WebOrderDetailVO {
  /** 联系人 */
  contact = new Contact();

  /** 物流信息 */
  deliver = new OrderDeliver();

  /** 送达时间 */
  deliveredTime = '';

  /** 配送地址 */
  deliveryAddress = new Address();

  /** 配送备注 */
  deliveryNote = '';

  /** 配送时间 */
  deliveryTime = new OrderDeliveryTime();

  /** 配送类型：1-自提，2-闪送，3-直邮 */
  deliveryType = undefined;

  /** 配送方式名称 */
  deliveryTypeDesc = '';

  /** 预计送达时间 */
  estArrivalTime = '';

  /** 礼物信息 */
  giftInfo = new GiftInfo();

  /** 商品信息 */
  items = [];

  /** 下单日期 */
  orderDate = '';

  /** 订单编号 */
  orderId = '';

  /** 订单备注 */
  orderNote = '';

  /** 支付信息 */
  payment = new OrderPayment();

  /** 自提时间 */
  pickUpTime = new OrderDeliveryTime();

  /** 快递地址 */
  shipAddress = new Address();

  /** 快递信息 */
  shipOption = new ShipOption();

  /** 是否展示: Adjustment & Refund */
  showAdjustmentAndRefund = false;

  /** 是否展示: Apply Refund */
  showApplyRefund = false;

  /** 是否展示: Cancel Order */
  showCancel = false;

  /** 是否展示：电子发票 */
  showDigitalReceipt = false;

  /** 是否展示：取消退款详情 */
  showViewRefundSummary = false;

  /** 状态：8-已送达、9-已取消 */
  status = undefined;

  /** 状态名称 */
  statusDesc = '';

  /** 门店信息 */
  store = new Store();

  /** 费用信息 */
  summary = new OrderSummary();
}

class WebOrderListItem {
  /** 单号：订单和取消为订单号，售后为售后单号 */
  bizNo = '';

  /** 业务时间 */
  bizTime = '';

  /** 类型：0-订单，1-售后，2-取消 */
  bizType = undefined;

  /** 配送方式：1-自提，2-闪送，3-快递 */
  deliveryType = undefined;

  /** 配送方式描述 */
  deliveryTypeDesc = '';

  /** 商品数量 */
  itemNum = undefined;

  /** 商品图片列表 */
  mainPics = [];

  /** 状态描述 */
  statusDesc = '';

  /** 总金额 */
  totalAmount = undefined;
}

class WebProductReviewVO {
  /** 平均星级 */
  avgStar = undefined;

  /** 评价数 */
  reviewNum = undefined;

  /** 是否展示：评论按钮 */
  showReviewButton = false;

  /** 1 星百分比 */
  star1 = undefined;

  /** 2 星百分比 */
  star2 = undefined;

  /** 3 星百分比 */
  star3 = undefined;

  /** 4 星百分比 */
  star4 = undefined;

  /** 5 星百分比 */
  star5 = undefined;
}

class WebRefundAllReason {
  /** comment */
  comment = '';

  /** pictures */
  pictures = [];

  /** reason */
  reason = '';
}

class WebRefundBase {
  /** 售后类型：1-整单、2-部分 */
  applyType = undefined;

  /** 配送方式：1-自提、2-当日达、3-全美直邮 */
  deliveryType = undefined;

  /** 配送方式描述 */
  deliveryTypeDesc = '';

  /** 订单 id */
  orderId = '';

  /** 下单时间 */
  orderTime = '';

  /** 售后 id */
  refundId = '';

  /** 售后状态标题 */
  refundStatusTitle = '';

  /** 售后时间 */
  refundTime = '';

  /** 售后状态：8-拒绝退款（退款失败） */
  status = undefined;
}

class WebRefundDetailVO {
  /** 收货地址 */
  address = new Address();

  /** 整单售后信息 */
  allReason = new WebRefundAllReason();

  /** 基础信息 */
  base = new WebRefundBase();

  /** 联系人 */
  contact = new Contact();

  /** 配送备注 */
  deliveryNote = '';

  /** 礼物信息 */
  giftInfo = new GiftInfo();

  /** 售后商品详情 */
  itemDetails = [];

  /** 订单备注 */
  orderNote = '';

  /** 支付信息 */
  payment = new Payment();

  /** 费用信息 */
  refundPrice = new WebRefundPrice();

  /** 退回门店截止时间 */
  returnDeadline = '';

  /** 已退回门店提示 */
  returnedTip = '';

  /** 快递退回提示 */
  shipBackTip = '';

  /** 快递选项 */
  shipOption = new WebRefundShipOption();

  /** 快递已退回提示 */
  shippedBackTip = '';

  /** 售后状态进度列表 */
  statusItems = [];

  /** 门店 */
  store = new Store();
}

class WebRefundItem {
  /** 售后备注 */
  comment = '';

  /** 是否有促销活动 */
  hasPromotion = false;

  /** 商品金额 */
  itemAmount = undefined;

  /** 商品主图 */
  mainPic = '';

  /** 主 UPC */
  mainUpc = '';

  /** 拣货重量 */
  pickingWeight = undefined;

  /** 售后凭证 */
  pictures = [];

  /** 商品名称 */
  productName = '';

  /** 商品类型：1-非称重、2-称重 */
  productType = undefined;

  /** 关联促销商品 */
  promotionItem = new WebRefundPromotionItem();

  /** 促销提示：如买一赠一 */
  promotionTip = '';

  /** 促销类型：2-买赠 */
  promotionType = undefined;

  /** 数量 */
  quantity = undefined;

  /** 售后原因 */
  reasonDesc = '';

  /** 拒绝原因 */
  rejectReason = '';

  /** 售卖单位 */
  saleUom = '';

  /** 销售重量 */
  saleWeight = undefined;

  /** 状态：1-处理中、2-成功、3-拒绝 */
  status = undefined;

  /** 状态描述 */
  statusDesc = '';

  /** 规格名称 */
  variantName = '';

  /** 称重单位 */
  weightUom = '';
}

class WebRefundItemDetail {
  /** 售后商品列表 */
  items = [];

  /** 售后 id */
  refundId = '';

  /** 退货退回提示 */
  returnBackTip = '';

  /** 状态标题 */
  statusTitle = '';
}

class WebRefundPrice {
  /** 退瓶费 */
  crvFee = undefined;

  /** 抵扣的积分 */
  deductPoints = undefined;

  /** 配送费 */
  deliveryFee = undefined;

  /** 优惠金额 */
  discount = undefined;

  /** 司机小费 */
  driverTip = undefined;

  /** 预计退款金额 */
  estTotal = undefined;

  /** 发放的积分 */
  issuedPoints = undefined;

  /** 积分抵扣金额 */
  pointsDeduction = undefined;

  /** 服务费 */
  serviceFee = undefined;

  /** 是否展示：预计退款金额 */
  showEstTotal = false;

  /** 是否展示：实际退款金额 */
  showTotal = false;

  /** 商品总额 */
  subTotal = undefined;

  /** 税费 */
  taxFee = undefined;

  /** 实际退款金额 */
  total = undefined;
}

class WebRefundPromotionItem {
  /** 商品主图 */
  mainPic = '';

  /** 主 UPC */
  mainUpc = '';

  /** 商品名称 */
  productName = '';

  /** 商品类型：1-非称重、2-称重 */
  productType = undefined;

  /** 规格名称 */
  variantName = '';
}

class WebRefundShipOption {
  /** shipFee */
  shipFee = undefined;

  /** 类型：1-普通快递、2-加急快递 */
  type = undefined;

  /** 类型名称 */
  typeDesc = '';
}

class WebRefundStatus {
  /** 业务时间 */
  bizTime = '';

  /** 标题 1 */
  title1 = '';

  /** 标题 2 */
  title2 = '';
}

class WebSaveRefundVO {
  /** 售后 id */
  refundId = '';
}

export const order = {
  AddDeliveryFeeDTO,
  AddRecipeCategoryRequest,
  AddRecipeRequest,
  Address,
  AdjustItem,
  AdjustRefund,
  Adjustment,
  AdjustmentItem,
  AllRefundInfo,
  AppAddRecipeReviewRequest,
  AppGetRecipeResponse,
  AppPersonalRecipeReviewResponse,
  AppQueryRecipeCategoryResponse,
  AppQueryRecipeRequest,
  AppQueryRecipeResponse,
  AppQueryRecipeReviewRequest,
  AppQueryRecipeReviewResponse,
  AppRecipeProductVo,
  AppRecipeReviewRequest,
  BillingAddress,
  BoAcceptListOrderDTO,
  BoAcceptListOrderItem,
  BoAcceptListOrderOptionVO,
  BoAcceptOrderDTO,
  BoBatchReceiveOrderDTO,
  BoLackListOptionVO,
  BoLackOrderConfigDTO,
  BoLackOrderConfigVO,
  BoListRefundItem,
  BoListRefundOptionVO,
  BoListRefundPageDTO,
  BoListReviewAuditItem,
  BoOrderDetailAdjustment,
  BoOrderDetailBaseInfo,
  BoOrderDetailCancelItem,
  BoOrderDetailDeliveryItem,
  BoOrderDetailItem,
  BoOrderDetailOptLog,
  BoOrderDetailPaymentItem,
  BoOrderDetailPriceItem,
  BoOrderDetailShipAddress,
  BoOrderDetailStatusStep,
  BoOrderDetailVO,
  BoOrderDiscount,
  BoOrderDiscountItem,
  BoOrderLackDetailItem,
  BoOrderLackDetailVO,
  BoOrderLackListDTO,
  BoOrderLackListItem,
  BoOrderListExportDTO,
  BoOrderListOptionVO,
  BoOrderListOrderDTO,
  BoOrderListOrderItem,
  BoOrderListPickingDTO,
  BoOrderListRefundDTO,
  BoOrderListRefundItem,
  BoOrderListRefundProductVO,
  BoOrderOvertimeDetailVO,
  BoOrderOvertimeFee,
  BoOrderOvertimeListDTO,
  BoOrderOvertimeListItem,
  BoOrderOvertimeOptLog,
  BoOvertimeListOptionVO,
  BoRefundAuditDTO,
  BoRefundDetailInfo,
  BoRefundDetailItem,
  BoRefundDetailPrice,
  BoRefundDetailVO,
  BoRefundOptLog,
  BoRefundPeriodConfigDTO,
  BoRefundPeriodConfigVO,
  BoRefundTypeAuditDTO,
  CancelDetailVO,
  CardSetupIntentVO,
  CardVO,
  ColorTitle,
  ComputePartRefundDTO,
  ComputeRefundInfo,
  ComputeRefundVO,
  Contact,
  DeliveryInfo,
  DigitalReceiptVO,
  EditCardDTO,
  EditRecipeCategoryRequest,
  EditRecipeRequest,
  EditStatusRequest,
  ExportOrderDaySummaryDTO,
  ExportOrderItemListDTO,
  ExportOrderListDTO,
  GiftInfo,
  Item,
  ListOrderItem,
  ListOrderPageDTO,
  ListOrderPageItem,
  ListProductReviewDTO,
  ListRefundPageDTO,
  ListRefundPageItem,
  ListReviewCountVO,
  ListReviewItem,
  ListReviewOptionVO,
  ListReviewPageDTO,
  ListSubOrderDTO,
  ListSubOrderItem,
  ListToReviewOrderDTO,
  NewCardDTO,
  Option,
  OrderAdjustDetailVO,
  OrderCompleteDelivery,
  OrderCompleteExpress,
  OrderCompletePickup,
  OrderCompleteSummary,
  OrderCompleteVO,
  OrderDaySummaryItem,
  OrderDaySummaryOptionsVO,
  OrderDaySummaryPageDTO,
  OrderDeliver,
  OrderDeliveryTime,
  OrderDetailVO,
  OrderInfo,
  OrderItem,
  OrderItemListOptionsVO,
  OrderItemPageQueryDTO,
  OrderItemVO,
  OrderListOptionsVO,
  OrderPayment,
  OrderReportPageQueryDTO,
  OrderReportVO,
  OrderSummary,
  PageInfo,
  PageParam,
  PayConfigVO,
  Payment,
  PaymentRefund,
  PickupInfo,
  ProductReviewItem,
  ProductReviewVO,
  QueryRecipeCategoryOptionResponse,
  QueryRecipeCategoryRequest,
  QueryRecipeCategoryResponse,
  QueryRecipeRequest,
  QueryRecipeResponse,
  ReceiptItem,
  ReceiptOrderInfo,
  ReceiptSummary,
  RecipeMaterialVo,
  RecipeProductVo,
  RefundApplyItem,
  RefundApplyVO,
  RefundDetail,
  RefundDetailVO,
  RefundInfo,
  RefundItem,
  RefundItemListExportDTO,
  RefundItemListItem,
  RefundItemListOptionsVO,
  RefundItemListPageDTO,
  RefundListExportDTO,
  RefundListItem,
  RefundListOptionsVO,
  RefundListPageDTO,
  RefundOrder,
  RefundRuleVO,
  RefundStatusItem,
  RefundStatusVO,
  RefundTo,
  Response,
  ReturnItem,
  ReturnProductVO,
  ReviewStatusCountDTO,
  RuleItem,
  S3PreSignInfo,
  SaveAllRefundDTO,
  SaveAuditDTO,
  SavePartRefundDTO,
  SaveRefundItem,
  SaveRefundVO,
  SaveReviewDTO,
  ShipOption,
  StatusCount,
  Store,
  TestDateDTO,
  WebComputeRefundVO,
  WebOrderAdjustVO,
  WebOrderCancelVO,
  WebOrderCompleteVO,
  WebOrderDetailVO,
  WebOrderListItem,
  WebProductReviewVO,
  WebRefundAllReason,
  WebRefundBase,
  WebRefundDetailVO,
  WebRefundItem,
  WebRefundItemDetail,
  WebRefundPrice,
  WebRefundPromotionItem,
  WebRefundShipOption,
  WebRefundStatus,
  WebSaveRefundVO,
};
