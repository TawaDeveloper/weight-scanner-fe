class ActivityDiscountCodeDetailVo {
  /** amount */
  amount = undefined;

  /** code */
  code = '';

  /** discountCategory */
  discountCategory = '';

  /** discountPercentage */
  discountPercentage = undefined;

  /** endTime */
  endTime = '';

  /** fixedReduce */
  fixedReduce = undefined;

  /** id */
  id = undefined;

  /** limitByUser */
  limitByUser = false;

  /** maximumDiscountAmount */
  maximumDiscountAmount = undefined;

  /** merchantProportion */
  merchantProportion = undefined;

  /** name */
  name = '';

  /** numberOfAvailable */
  numberOfAvailable = undefined;

  /** platProportion */
  platProportion = undefined;

  /** products */
  products = [];

  /** scope */
  scope = [];

  /** startTime */
  startTime = '';

  /** stores */
  stores = [];
}

class ActivityDiscountCodeVo {
  /** code */
  code = '';

  /** discountCategory */
  discountCategory = '';

  /** endTime */
  endTime = '';

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** numberOfAvailable */
  numberOfAvailable = undefined;

  /** numberOfBurned */
  numberOfBurned = undefined;

  /** startTime */
  startTime = '';

  /** status */
  status = '';

  /** updateByName */
  updateByName = '';

  /** updateTime */
  updateTime = '';
}

class BigSaleProductDetailVo {
  /** activityId */
  activityId = undefined;

  /** activityProduct */
  activityProduct = new Product();

  /** bizScope */
  bizScope = [];

  /** discountType */
  discountType = undefined;

  /** discountValue */
  discountValue = undefined;

  /** endTime */
  endTime = '';

  /** fixedPrice */
  fixedPrice = undefined;

  /** fixedReduce */
  fixedReduce = undefined;

  /** freeGiftNum */
  freeGiftNum = undefined;

  /** freeGiftProduct */
  freeGiftProduct = new Product();

  /** id */
  id = undefined;

  /** maximumDiscountAmount */
  maximumDiscountAmount = undefined;

  /** merchantProportion */
  merchantProportion = undefined;

  /** platProportion */
  platProportion = undefined;

  /** productMerchantRelations */
  productMerchantRelations = [];

  /** promotionType */
  promotionType = undefined;

  /** startTime */
  startTime = '';

  /** stores */
  stores = [];

  /** thresholdNum */
  thresholdNum = undefined;
}

class BigSaleProductVo {
  /** activityCategory */
  activityCategory = '';

  /** category */
  category = '';

  /** discountType */
  discountType = undefined;

  /** discountValue */
  discountValue = undefined;

  /** endTime */
  endTime = '';

  /** fixedPrice */
  fixedPrice = undefined;

  /** id */
  id = undefined;

  /** maximumDiscountAmount */
  maximumDiscountAmount = undefined;

  /** picUrl */
  picUrl = '';

  /** productId */
  productId = undefined;

  /** productName */
  productName = '';

  /** productNameEn */
  productNameEn = '';

  /** productNameZhCn */
  productNameZhCn = '';

  /** productNameZhTw */
  productNameZhTw = '';

  /** startTime */
  startTime = '';

  /** status */
  status = undefined;

  /** upc */
  upc = '';

  /** updateByName */
  updateByName = '';

  /** updateTime */
  updateTime = '';
}

class CouponActivityCheckReq {
  /** pass */
  pass = false;

  /** reason */
  reason = '';
}

class CouponActivityDto {
  /** 可用操作 */
  availableActions = [];

  /** 背景图 */
  backgroundPicUrl = '';

  /** 背景图英文 */
  backgroundPicUrlEn = '';

  /** 背景图简体中文 */
  backgroundPicUrlZhCn = '';

  /** 背景图繁体中文 */
  backgroundPicUrlZhTw = '';

  /** 覆盖业务 */
  bizScope = [];

  /** 券活动编码 */
  code = '';

  /** 判断条件 */
  conditionStr = '';

  /** 条件类型 */
  conditionType = undefined;

  /** 券活动状态枚举 */
  couponActivityStatus = new EnumVO();

  /** 券类型枚举 */
  couponType = new EnumVO();

  /** 创建时间 */
  createTime = '';

  /** 抵扣金额 */
  deductAmount = undefined;

  /** 配送方式 */
  deliveryType = [];

  /** 配送方式 */
  deliveryTypeStr = '';

  /** 用户看到的简要说明 */
  descForUser = '';

  /** 用户看到的简要说明英文 */
  descForUserEn = '';

  /** 用户看到的简要说明简体中文 */
  descForUserZhCn = '';

  /** 用户看到的简要说明繁体中文 */
  descForUserZhTw = '';

  /** 简要说明 */
  description = '';

  /** 简要说明英文 */
  descriptionEn = '';

  /** 简要说明简体中文 */
  descriptionZhCn = '';

  /** 简要说明繁体中文 */
  descriptionZhTw = '';

  /** 折扣力度 */
  discountValue = undefined;

  /** 券活动失效时间 */
  endTime = '';

  /** 商品文件 ID */
  fileIds = [];

  /** 已发数量 */
  handoutNum = undefined;

  /** 发券状态 */
  handoutStatus = undefined;

  /** 主键 */
  id = undefined;

  /** 券层级 */
  levelType = undefined;

  /** 限定用户 X 天内 */
  limitXDays = undefined;

  /** 可领取 Y 张优惠券 */
  limitYNum = undefined;

  /** 最大抵扣金额 */
  maxDeductAmount = undefined;

  /** 门店分摊比例 */
  merchantProportion = undefined;

  /** 可用门店 */
  merchants = [];

  /** 券活动名称 */
  name = '';

  /** 券活动名称英文 */
  nameEn = '';

  /** 用户看到的券活动名称 */
  nameForUser = '';

  /** 用户看到的券活动名称英文 */
  nameForUserEn = '';

  /** 用户看到的券活动名称简体中文 */
  nameForUserZhCn = '';

  /** 用户看到的券活动名称繁体中文 */
  nameForUserZhTw = '';

  /** 券活动名称简体中文 */
  nameZhCn = '';

  /** 券活动名称繁体中文 */
  nameZhTw = '';

  /** 可发券数量 */
  num = undefined;

  /** 平台分摊比例 */
  platProportion = undefined;

  /** 购买商品 */
  products = [];

  /** 领取 x 天后失效 */
  receivedEndDay = undefined;

  /** 指定起止日期 */
  receivedEndTime = '';

  /** 生效后的限制类型 */
  receivedLimitType = undefined;

  /** 生效后的限制值 */
  receivedLimitValue = '';

  /** 领取 X 天后生效 */
  receivedStartDay = undefined;

  /** 指定起止日期 */
  receivedStartTime = '';

  /** 券活动生效时间 */
  startTime = '';

  /** 券活动状态 */
  status = undefined;

  /** 商品数量门槛 */
  thresholdNum = undefined;

  /** 商品金额门槛 */
  thresholdPrice = undefined;

  /** 券类型 */
  type = undefined;

  /** 日期类型 */
  useDateType = undefined;

  /** 已核销数量 */
  usedNum = undefined;
}

class CouponActivityOpLogVO {
  /** activityId */
  activityId = undefined;

  /** createBy */
  createBy = '';

  /** createTime */
  createTime = '';

  /** deleted */
  deleted = undefined;

  /** id */
  id = undefined;

  /** opDescCode */
  opDescCode = undefined;

  /** opReason */
  opReason = '';

  /** opUserName */
  opUserName = '';

  /** updateBy */
  updateBy = '';

  /** updateTime */
  updateTime = '';
}

class CouponActivityQueryConditionReq {
  /** 券活动编码 */
  code = '';

  /** 结束时间 */
  endTime = '';

  /** 券活动名称 */
  name = '';

  /** 用户看到的券活动名称 */
  nameForUser = '';

  /** 开始时间 */
  startTime = '';

  /** 券活动状态 */
  status = undefined;

  /** 券类型 */
  type = undefined;
}

class CouponActivitySubReq {
  /** 需要添加的分类 */
  addCategories = [];

  /** 需要添加的门店 */
  addMerchants = [];

  /** 需要添加的商品 */
  addProducts = [];

  /** 需要删除的分类 */
  deleteCategories = [];

  /** 需要删除的门店 */
  deleteMerchants = [];

  /** 需要删除的商品 */
  deleteProducts = [];

  /** reason */
  reason = '';
}

class CouponAndNum {
  /** 券活动id */
  activityId = undefined;

  /** 券数量 */
  num = undefined;
}

class CouponDestroyReq {
  /** 需要销毁的券id */
  couponIds = [];

  /** 销毁原因 */
  opReason = '';
}

class CouponDetailReq {
  /** 券活动名称 */
  activityDesc = '';

  /** 券活动id */
  activityId = undefined;

  /** 结束时间 */
  endTime = '';

  /** 发券方式 */
  handoutType = undefined;

  /** 昵称 */
  nickName = '';

  /** phone */
  phone = '';

  /** 开始时间 */
  startTime = '';

  /** 券状态 */
  status = undefined;

  /** 用户ID */
  userId = undefined;
}

class CouponDetailVO {
  /** 券活动编码 */
  activityCode = '';

  /** 券活动名称 */
  activityDesc = '';

  /** 券活动 ID */
  activityId = undefined;

  /** 券码 */
  couponNo = '';

  /** 获得时间 */
  createTime = '';

  /** 有效期截止时间 */
  endTime = '';

  /** 发券批次 ID */
  handoutId = undefined;

  /** 领取方式 */
  handoutType = undefined;

  /** 主键 */
  id = undefined;

  /** 昵称 */
  nickName = '';

  /** 销毁原因 */
  opReason = '';

  /** phone */
  phone = '';

  /** 有效期开始时间 */
  startTime = '';

  /** 券状态 */
  status = undefined;

  /** 用户 ID */
  userId = undefined;
}

class CouponEventHandoutQueryReq {
  /** 结束时间 */
  endTime = '';

  /** 开始时间 */
  startTime = '';

  /** 任务编码 */
  taskCode = '';

  /** 任务名称 */
  taskName = '';
}

class CouponEventHandoutReq {
  /** 已选择券与数量 */
  couponAndNums = [];

  /** 触发事件 */
  eventTypeCode = undefined;

  /** id,仅修改时传递 */
  id = undefined;

  /** 简要说明 */
  taskDesc = '';

  /** 任务名称 */
  taskName = '';
}

class CouponEventHandoutRsp {
  /** 已选择券与数量 */
  couponAndNums = [];

  /** 自动发券创建时间 */
  createTime = '';

  /** 自动发券触发事件 */
  eventTypeCode = undefined;

  /** 自动发券触发事件描述 */
  eventTypeDesc = '';

  /** 主键 */
  id = undefined;

  /** 自动发券任务状态 */
  status = undefined;

  /** 自动发券任务状态描述 */
  statusDesc = '';

  /** 自动发券任务代码 */
  taskCode = '';

  /** 自动发券简要说明 */
  taskDesc = '';

  /** 自动发券任务名称 */
  taskName = '';
}

class CouponHandoutDto {
  /** 券活动 ID */
  activityId = undefined;

  /** 单个用户发放数量 */
  eachOneNum = undefined;

  /** 发券批次名称 */
  handoutDesc = '';

  /** 发放原因 */
  handoutReason = '';

  /** 发放时间 */
  handoutTime = '';

  /** 用户 ID */
  userIds = [];
}

class CouponHandoutLogVo {
  /** 活动 ID */
  activityId = undefined;

  /** 批次号 */
  batchNo = '';

  /** 发券数量 */
  couponNum = undefined;

  /** 操作人 */
  createBy = '';

  /** 操作时间 */
  createTime = '';

  /** 发券批次名称 */
  handoutDesc = '';

  /** 发放原因 */
  handoutReason = '';

  /** 主键 */
  id = undefined;

  /** 涉及用户数 */
  userNum = undefined;
}

class CouponMerchantDto {
  /** activityId */
  activityId = undefined;

  /** id */
  id = undefined;

  /** merchantArea */
  merchantArea = '';

  /** merchantCode */
  merchantCode = '';

  /** merchantId */
  merchantId = undefined;

  /** merchantName */
  merchantName = '';
}

class CouponProductCategoryDto {
  /** activityId */
  activityId = undefined;

  /** categoryId */
  categoryId = undefined;

  /** id */
  id = undefined;
}

class CouponProductDto {
  /** category */
  category = '';

  /** deleted */
  deleted = undefined;

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** picUrl */
  picUrl = '';

  /** productId */
  productId = undefined;

  /** upc */
  upc = '';
}

class CouponVo {
  /** 准用门槛条件 */
  conditionType = undefined;

  /** 使用限制 */
  conditions = [];

  /** couponNo */
  couponNo = '';

  /** 1全美直邮,2当日达,当券类型为运费券时有效, */
  deliveryType = [];

  /** 使用说明 */
  description = '';

  /** 折扣力度，30就是30%off */
  discountValue = undefined;

  /** id */
  id = undefined;

  /** 最高抵用金额 */
  maximumDiscountAmount = undefined;

  /** 券活动名称 */
  nameForUser = '';

  /** platformRatio */
  platformRatio = undefined;

  /** 抵扣金额/直降金额 */
  reduceAmount = undefined;

  /** 抵扣信息，优惠券左上角展示 */
  reduceInfo = '';

  /** 抵扣信息，优惠券右上角展示 */
  reduceInfoWithMaximum = '';

  /** storeRatio */
  storeRatio = undefined;

  /** 条件信息 */
  threshold = '';

  /** 准用门槛金额 */
  thresholdAmount = undefined;

  /** 准用门槛件数 */
  thresholdNum = undefined;

  /** 1满减券、2满折券、3直减券、4运费券 */
  type = undefined;

  /** validEndTime */
  validEndTime = '';

  /** validStartTime */
  validStartTime = '';
}

class CouponsVo {
  /** available */
  available = [];

  /** expired */
  expired = [];

  /** used */
  used = [];
}

class CreateBuyAGetBDiscountRequest {
  /** bizScope */
  bizScope = [];

  /** buyProductUpc */
  buyProductUpc = '';

  /** endTime */
  endTime = '';

  /** getProductUpc */
  getProductUpc = '';

  /** giftNum */
  giftNum = undefined;

  /** merchantProportion */
  merchantProportion = undefined;

  /** platProportion */
  platProportion = undefined;

  /** startTime */
  startTime = '';

  /** storeIds */
  storeIds = [];

  /** thresholdNum */
  thresholdNum = undefined;
}

class CreateBuyNGetXDiscountRequest {
  /** bizScope */
  bizScope = [];

  /** buyProductUpc */
  buyProductUpc = '';

  /** discountType */
  discountType = undefined;

  /** discountValue */
  discountValue = undefined;

  /** endTime */
  endTime = '';

  /** fixedPrice */
  fixedPrice = undefined;

  /** fixedReduce */
  fixedReduce = undefined;

  /** merchantProportion */
  merchantProportion = undefined;

  /** platProportion */
  platProportion = undefined;

  /** startTime */
  startTime = '';

  /** storeIds */
  storeIds = [];

  /** thresholdNum */
  thresholdNum = undefined;
}

class CreateDiscountCodeRequest {
  /** amount */
  amount = undefined;

  /** code */
  code = '';

  /** discountCategory */
  discountCategory = '';

  /** discountPercentage */
  discountPercentage = undefined;

  /** endTime */
  endTime = '';

  /** fixedReduce */
  fixedReduce = undefined;

  /** limitByUser */
  limitByUser = false;

  /** maximumDiscountAmount */
  maximumDiscountAmount = undefined;

  /** merchantProportion */
  merchantProportion = undefined;

  /** name */
  name = '';

  /** numberOfAvailable */
  numberOfAvailable = undefined;

  /** platProportion */
  platProportion = undefined;

  /** scope */
  scope = [];

  /** startTime */
  startTime = '';

  /** storeIds */
  storeIds = [];

  /** upcList */
  upcList = [];
}

class CreateTimeLimitDiscountRequest {
  /** bizScope */
  bizScope = [];

  /** discountType */
  discountType = undefined;

  /** discountValue */
  discountValue = undefined;

  /** endTime */
  endTime = '';

  /** fixedPrice */
  fixedPrice = undefined;

  /** maximumDiscountAmount */
  maximumDiscountAmount = undefined;

  /** merchantProportion */
  merchantProportion = undefined;

  /** platProportion */
  platProportion = undefined;

  /** startTime */
  startTime = '';

  /** stockValue */
  stockValue = undefined;

  /** storeIds */
  storeIds = [];

  /** upcList */
  upcList = [];
}

class EnumMapVO {
  /** 枚举 */
  enums = undefined;
}

class EnumVO {
  /** code */
  code = undefined;

  /** 描述 */
  desc = '';
}

class EventHandoutOpLogVO {
  /** createTime */
  createTime = '';

  /** opDesc */
  opDesc = '';

  /** opUserName */
  opUserName = '';
}

class HandoutLogQueryConditionReq {
  /** 结束时间 */
  endTime = '';

  /** 发券批次名称 */
  handOutDesc = '';

  /** 批次号 */
  handOutNO = '';

  /** 开始时间 */
  startTime = '';

  /** 操作人 */
  user = '';
}

class IPage {
  /** current */
  current = undefined;

  /** pages */
  pages = undefined;

  /** records */
  records = [];

  /** size */
  size = undefined;

  /** total */
  total = undefined;
}

class ImportProductResponse {
  /** batchId */
  batchId = '';

  /** failCount */
  failCount = undefined;

  /** successCount */
  successCount = undefined;

  /** successProducts */
  successProducts = [];
}

class InviteFriendConfigDto {
  /** 优惠券描述 */
  couponActivityDesc = '';

  /** 优惠券活动id */
  couponActivityId = undefined;

  /** createTime */
  createTime = '';

  /** 有效期结束时间,yyyyMMdd */
  endTime = '';

  /** 是否双向发放 */
  giveOutModel = undefined;

  /** 是否双向发放描述 */
  giveOutModelDesc = '';

  /** id */
  id = undefined;

  /** 活动名称 */
  name = '';

  /** 有效期开始时间,yyyyMMdd */
  startTime = '';

  /** 上架状态 */
  status = undefined;

  /** 上架状态描述 */
  statusDesc = '';

  /** 更新人 */
  updateBy = '';

  /** 更新时间 */
  updateTime = '';
}

class InviteFriendConfigQueryConditionReq {
  /** 名称 */
  name = '';

  /** 上架状态 */
  status = undefined;
}

class InviteFriendConfigShelfReq {
  /** 上架状态 */
  status = undefined;
}

class LabelEnumValueVo {
  /** code */
  code = undefined;

  /** id */
  id = undefined;

  /** labelId */
  labelId = undefined;

  /** name */
  name = '';
}

class LabelVo {
  /** enumValueVos */
  enumValueVos = [];

  /** fieldName */
  fieldName = '';

  /** id */
  id = undefined;

  /** labelType */
  labelType = 'BETWEEN';

  /** name */
  name = '';

  /** sqlStr */
  sqlStr = '';

  /** tableName */
  tableName = '';

  /** type */
  type = undefined;
}

class OrderItem {
  /** asc */
  asc = false;

  /** column */
  column = '';
}

class Page {
  /** countId */
  countId = '';

  /** current */
  current = undefined;

  /** maxLimit */
  maxLimit = undefined;

  /** optimizeCountSql */
  optimizeCountSql = false;

  /** orders */
  orders = [];

  /** pages */
  pages = undefined;

  /** records */
  records = [];

  /** searchCount */
  searchCount = false;

  /** size */
  size = undefined;

  /** total */
  total = undefined;
}

class PageReqDto {
  /** condition */
  condition = new CouponActivityQueryConditionReq();

  /** offset */
  offset = undefined;

  /** page */
  page = undefined;

  /** size */
  size = undefined;
}

class PortraitLabelValuesVo {
  /** checkedEnumValues */
  checkedEnumValues = [];

  /** id */
  id = undefined;

  /** labelId */
  labelId = undefined;

  /** labelVo */
  labelVo = new LabelVo();

  /** leftValue */
  leftValue = '';

  /** mulValues */
  mulValues = '';

  /** rightValue */
  rightValue = '';

  /** ruleId */
  ruleId = undefined;
}

class PortraitRuleQueryConditionReq {
  /** 规则名称 */
  name = '';

  /** 上架状态 */
  status = undefined;
}

class PortraitRuleVo {
  /** id */
  id = undefined;

  /** name */
  name = '';

  /** portraitLabelValues */
  portraitLabelValues = [];

  /** status */
  status = undefined;
}

class Product {
  /** category */
  category = '';

  /** id */
  id = undefined;

  /** image */
  image = '';

  /** name */
  name = '';

  /** upc */
  upc = '';
}

class ProductMerchantRelation {
  /** available */
  available = undefined;

  /** discountPrice */
  discountPrice = undefined;

  /** discountRate */
  discountRate = undefined;

  /** id */
  id = undefined;

  /** maximumDiscountAmount */
  maximumDiscountAmount = undefined;

  /** price */
  price = undefined;

  /** purchaseLimit */
  purchaseLimit = undefined;

  /** salePrice */
  salePrice = undefined;

  /** stockNum */
  stockNum = undefined;

  /** stockType */
  stockType = undefined;

  /** storeId */
  storeId = undefined;
}

class Response {
  /** 状态码：0-成功 */
  code = undefined;

  /** 响应数据 */
  data = new ActivityDiscountCodeDetailVo();

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

class Store {
  /** groupId */
  groupId = undefined;

  /** groupName */
  groupName = '';

  /** id */
  id = undefined;

  /** storeName */
  storeName = '';

  /** storeNumber */
  storeNumber = undefined;
}

class UpdateBuyAGetBDiscountRequest {
  /** bizScope */
  bizScope = [];

  /** buyProductUpc */
  buyProductUpc = '';

  /** endTime */
  endTime = '';

  /** getProductUpc */
  getProductUpc = '';

  /** giftNum */
  giftNum = undefined;

  /** id */
  id = undefined;

  /** merchantProportion */
  merchantProportion = undefined;

  /** platProportion */
  platProportion = undefined;

  /** startTime */
  startTime = '';

  /** storeIds */
  storeIds = [];

  /** thresholdNum */
  thresholdNum = undefined;
}

class UpdateBuyNGetXDiscountRequest {
  /** bizScope */
  bizScope = [];

  /** buyProductUpc */
  buyProductUpc = '';

  /** discountType */
  discountType = undefined;

  /** discountValue */
  discountValue = undefined;

  /** endTime */
  endTime = '';

  /** fixedPrice */
  fixedPrice = undefined;

  /** fixedReduce */
  fixedReduce = undefined;

  /** id */
  id = undefined;

  /** merchantProportion */
  merchantProportion = undefined;

  /** platProportion */
  platProportion = undefined;

  /** startTime */
  startTime = '';

  /** storeIds */
  storeIds = [];

  /** thresholdNum */
  thresholdNum = undefined;
}

class UpdateDiscountCodeRequest {
  /** amount */
  amount = undefined;

  /** code */
  code = '';

  /** discountCategory */
  discountCategory = '';

  /** discountPercentage */
  discountPercentage = undefined;

  /** endTime */
  endTime = '';

  /** fixedReduce */
  fixedReduce = undefined;

  /** id */
  id = undefined;

  /** limitByUser */
  limitByUser = false;

  /** maximumDiscountAmount */
  maximumDiscountAmount = undefined;

  /** merchantProportion */
  merchantProportion = undefined;

  /** name */
  name = '';

  /** numberOfAvailable */
  numberOfAvailable = undefined;

  /** platProportion */
  platProportion = undefined;

  /** scope */
  scope = [];

  /** startTime */
  startTime = '';

  /** storeIds */
  storeIds = [];

  /** upcList */
  upcList = [];
}

class UpdateTimeLimitDiscountRequest {
  /** bizScope */
  bizScope = [];

  /** buyProductUpc */
  buyProductUpc = '';

  /** discountType */
  discountType = undefined;

  /** discountValue */
  discountValue = undefined;

  /** endTime */
  endTime = '';

  /** fixedPrice */
  fixedPrice = undefined;

  /** id */
  id = undefined;

  /** maximumDiscountAmount */
  maximumDiscountAmount = undefined;

  /** merchantProportion */
  merchantProportion = undefined;

  /** platProportion */
  platProportion = undefined;

  /** startTime */
  startTime = '';

  /** stockValue */
  stockValue = undefined;

  /** storeIds */
  storeIds = [];
}

class UploadProductRsp {
  /** id */
  fileId = undefined;

  /** 导入失败商品数量 */
  importFailedProductNum = undefined;

  /** 导入成功商品数量 */
  importSuccessProductNum = undefined;
}

export const promotion = {
  ActivityDiscountCodeDetailVo,
  ActivityDiscountCodeVo,
  BigSaleProductDetailVo,
  BigSaleProductVo,
  CouponActivityCheckReq,
  CouponActivityDto,
  CouponActivityOpLogVO,
  CouponActivityQueryConditionReq,
  CouponActivitySubReq,
  CouponAndNum,
  CouponDestroyReq,
  CouponDetailReq,
  CouponDetailVO,
  CouponEventHandoutQueryReq,
  CouponEventHandoutReq,
  CouponEventHandoutRsp,
  CouponHandoutDto,
  CouponHandoutLogVo,
  CouponMerchantDto,
  CouponProductCategoryDto,
  CouponProductDto,
  CouponVo,
  CouponsVo,
  CreateBuyAGetBDiscountRequest,
  CreateBuyNGetXDiscountRequest,
  CreateDiscountCodeRequest,
  CreateTimeLimitDiscountRequest,
  EnumMapVO,
  EnumVO,
  EventHandoutOpLogVO,
  HandoutLogQueryConditionReq,
  IPage,
  ImportProductResponse,
  InviteFriendConfigDto,
  InviteFriendConfigQueryConditionReq,
  InviteFriendConfigShelfReq,
  LabelEnumValueVo,
  LabelVo,
  OrderItem,
  Page,
  PageReqDto,
  PortraitLabelValuesVo,
  PortraitRuleQueryConditionReq,
  PortraitRuleVo,
  Product,
  ProductMerchantRelation,
  Response,
  S3PreSignInfo,
  Store,
  UpdateBuyAGetBDiscountRequest,
  UpdateBuyNGetXDiscountRequest,
  UpdateDiscountCodeRequest,
  UpdateTimeLimitDiscountRequest,
  UploadProductRsp,
};
