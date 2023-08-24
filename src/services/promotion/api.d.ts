type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace promotion {
    export class ActivityDiscountCodeDetailVo {
      /** amount */
      amount?: number;

      /** code */
      code?: string;

      /** discountCategory */
      discountCategory?: string;

      /** discountPercentage */
      discountPercentage?: number;

      /** endTime */
      endTime?: string;

      /** fixedReduce */
      fixedReduce?: number;

      /** id */
      id?: number;

      /** limitByUser */
      limitByUser?: boolean;

      /** maximumDiscountAmount */
      maximumDiscountAmount?: number;

      /** merchantProportion */
      merchantProportion?: number;

      /** name */
      name?: string;

      /** numberOfAvailable */
      numberOfAvailable?: number;

      /** platProportion */
      platProportion?: number;

      /** products */
      products?: Array<defs.promotion.Product>;

      /** scope */
      scope?: Array<number>;

      /** startTime */
      startTime?: string;

      /** stores */
      stores?: Array<defs.promotion.Store>;
    }

    export class ActivityDiscountCodeVo {
      /** code */
      code?: string;

      /** discountCategory */
      discountCategory?: string;

      /** endTime */
      endTime?: string;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** numberOfAvailable */
      numberOfAvailable?: number;

      /** numberOfBurned */
      numberOfBurned?: number;

      /** startTime */
      startTime?: string;

      /** status */
      status?: string;

      /** updateByName */
      updateByName?: string;

      /** updateTime */
      updateTime?: string;
    }

    export class BigSaleProductDetailVo {
      /** activityId */
      activityId?: number;

      /** activityProduct */
      activityProduct?: defs.promotion.Product;

      /** bizScope */
      bizScope?: Array<number>;

      /** discountType */
      discountType?: number;

      /** discountValue */
      discountValue?: number;

      /** endTime */
      endTime?: string;

      /** fixedPrice */
      fixedPrice?: number;

      /** fixedReduce */
      fixedReduce?: number;

      /** freeGiftNum */
      freeGiftNum?: number;

      /** freeGiftProduct */
      freeGiftProduct?: defs.promotion.Product;

      /** id */
      id?: number;

      /** maximumDiscountAmount */
      maximumDiscountAmount?: number;

      /** merchantProportion */
      merchantProportion?: number;

      /** platProportion */
      platProportion?: number;

      /** productMerchantRelations */
      productMerchantRelations?: Array<defs.promotion.ProductMerchantRelation>;

      /** promotionType */
      promotionType?: number;

      /** startTime */
      startTime?: string;

      /** stores */
      stores?: Array<defs.promotion.Store>;

      /** thresholdNum */
      thresholdNum?: number;
    }

    export class BigSaleProductVo {
      /** activityCategory */
      activityCategory?: string;

      /** category */
      category?: string;

      /** discountType */
      discountType?: number;

      /** discountValue */
      discountValue?: number;

      /** endTime */
      endTime?: string;

      /** fixedPrice */
      fixedPrice?: number;

      /** id */
      id?: number;

      /** maximumDiscountAmount */
      maximumDiscountAmount?: number;

      /** picUrl */
      picUrl?: string;

      /** productId */
      productId?: number;

      /** productName */
      productName?: string;

      /** productNameEn */
      productNameEn?: string;

      /** productNameZhCn */
      productNameZhCn?: string;

      /** productNameZhTw */
      productNameZhTw?: string;

      /** startTime */
      startTime?: string;

      /** status */
      status?: number;

      /** upc */
      upc?: string;

      /** updateByName */
      updateByName?: string;

      /** updateTime */
      updateTime?: string;
    }

    export class CouponActivityCheckReq {
      /** pass */
      pass?: boolean;

      /** reason */
      reason?: string;
    }

    export class CouponActivityDto {
      /** 可用操作 */
      availableActions?: Array<defs.promotion.EnumVO>;

      /** 背景图 */
      backgroundPicUrl?: string;

      /** 背景图英文 */
      backgroundPicUrlEn?: string;

      /** 背景图简体中文 */
      backgroundPicUrlZhCn?: string;

      /** 背景图繁体中文 */
      backgroundPicUrlZhTw?: string;

      /** 覆盖业务 */
      bizScope?: Array<number>;

      /** 券活动编码 */
      code?: string;

      /** 判断条件 */
      conditionStr?: string;

      /** 条件类型 */
      conditionType?: number;

      /** 券活动状态枚举 */
      couponActivityStatus?: defs.promotion.EnumVO;

      /** 券类型枚举 */
      couponType?: defs.promotion.EnumVO;

      /** 创建时间 */
      createTime?: string;

      /** 抵扣金额 */
      deductAmount?: number;

      /** 配送方式 */
      deliveryType?: Array<number>;

      /** 配送方式 */
      deliveryTypeStr?: string;

      /** 用户看到的简要说明 */
      descForUser?: string;

      /** 用户看到的简要说明英文 */
      descForUserEn?: string;

      /** 用户看到的简要说明简体中文 */
      descForUserZhCn?: string;

      /** 用户看到的简要说明繁体中文 */
      descForUserZhTw?: string;

      /** 简要说明 */
      description?: string;

      /** 简要说明英文 */
      descriptionEn?: string;

      /** 简要说明简体中文 */
      descriptionZhCn?: string;

      /** 简要说明繁体中文 */
      descriptionZhTw?: string;

      /** 折扣力度 */
      discountValue?: number;

      /** 券活动失效时间 */
      endTime?: string;

      /** 商品文件 ID */
      fileIds?: Array<number>;

      /** 已发数量 */
      handoutNum?: number;

      /** 发券状态 */
      handoutStatus?: number;

      /** 主键 */
      id?: number;

      /** 券层级 */
      levelType?: number;

      /** 限定用户 X 天内 */
      limitXDays?: number;

      /** 可领取 Y 张优惠券 */
      limitYNum?: number;

      /** 最大抵扣金额 */
      maxDeductAmount?: number;

      /** 门店分摊比例 */
      merchantProportion?: number;

      /** 可用门店 */
      merchants?: Array<defs.promotion.CouponMerchantDto>;

      /** 券活动名称 */
      name?: string;

      /** 券活动名称英文 */
      nameEn?: string;

      /** 用户看到的券活动名称 */
      nameForUser?: string;

      /** 用户看到的券活动名称英文 */
      nameForUserEn?: string;

      /** 用户看到的券活动名称简体中文 */
      nameForUserZhCn?: string;

      /** 用户看到的券活动名称繁体中文 */
      nameForUserZhTw?: string;

      /** 券活动名称简体中文 */
      nameZhCn?: string;

      /** 券活动名称繁体中文 */
      nameZhTw?: string;

      /** 可发券数量 */
      num?: number;

      /** 平台分摊比例 */
      platProportion?: number;

      /** 购买商品 */
      products?: Array<defs.promotion.CouponProductDto>;

      /** 领取 x 天后失效 */
      receivedEndDay?: number;

      /** 指定起止日期 */
      receivedEndTime?: string;

      /** 生效后的限制类型 */
      receivedLimitType?: number;

      /** 生效后的限制值 */
      receivedLimitValue?: string;

      /** 领取 X 天后生效 */
      receivedStartDay?: number;

      /** 指定起止日期 */
      receivedStartTime?: string;

      /** 券活动生效时间 */
      startTime?: string;

      /** 券活动状态 */
      status?: number;

      /** 商品数量门槛 */
      thresholdNum?: number;

      /** 商品金额门槛 */
      thresholdPrice?: number;

      /** 券类型 */
      type?: number;

      /** 日期类型 */
      useDateType?: number;

      /** 已核销数量 */
      usedNum?: number;
    }

    export class CouponActivityOpLogVO {
      /** activityId */
      activityId?: number;

      /** createBy */
      createBy?: string;

      /** createTime */
      createTime?: string;

      /** deleted */
      deleted?: number;

      /** id */
      id?: number;

      /** opDescCode */
      opDescCode?: number;

      /** opReason */
      opReason?: string;

      /** opUserName */
      opUserName?: string;

      /** updateBy */
      updateBy?: string;

      /** updateTime */
      updateTime?: string;
    }

    export class CouponActivityQueryConditionReq {
      /** 券活动编码 */
      code?: string;

      /** 结束时间 */
      endTime?: string;

      /** 券活动名称 */
      name?: string;

      /** 用户看到的券活动名称 */
      nameForUser?: string;

      /** 开始时间 */
      startTime?: string;

      /** 券活动状态 */
      status?: number;

      /** 券类型 */
      type?: number;
    }

    export class CouponActivitySubReq {
      /** 需要添加的分类 */
      addCategories?: Array<defs.promotion.CouponProductCategoryDto>;

      /** 需要添加的门店 */
      addMerchants?: Array<defs.promotion.CouponMerchantDto>;

      /** 需要添加的商品 */
      addProducts?: Array<defs.promotion.CouponProductDto>;

      /** 需要删除的分类 */
      deleteCategories?: Array<defs.promotion.CouponProductCategoryDto>;

      /** 需要删除的门店 */
      deleteMerchants?: Array<defs.promotion.CouponMerchantDto>;

      /** 需要删除的商品 */
      deleteProducts?: Array<defs.promotion.CouponProductDto>;

      /** reason */
      reason?: string;
    }

    export class CouponAndNum {
      /** 券活动id */
      activityId?: number;

      /** 券数量 */
      num?: number;
    }

    export class CouponDestroyReq {
      /** 需要销毁的券id */
      couponIds?: Array<number>;

      /** 销毁原因 */
      opReason?: string;
    }

    export class CouponDetailReq {
      /** 券活动名称 */
      activityDesc?: string;

      /** 券活动id */
      activityId?: number;

      /** 结束时间 */
      endTime?: string;

      /** 发券方式 */
      handoutType?: number;

      /** 昵称 */
      nickName?: string;

      /** phone */
      phone?: string;

      /** 开始时间 */
      startTime?: string;

      /** 券状态 */
      status?: number;

      /** 用户ID */
      userId?: number;
    }

    export class CouponDetailVO {
      /** 券活动编码 */
      activityCode?: string;

      /** 券活动名称 */
      activityDesc?: string;

      /** 券活动 ID */
      activityId?: number;

      /** 券码 */
      couponNo?: string;

      /** 获得时间 */
      createTime?: string;

      /** 有效期截止时间 */
      endTime?: string;

      /** 发券批次 ID */
      handoutId?: number;

      /** 领取方式 */
      handoutType?: number;

      /** 主键 */
      id?: number;

      /** 昵称 */
      nickName?: string;

      /** 销毁原因 */
      opReason?: string;

      /** phone */
      phone?: string;

      /** 有效期开始时间 */
      startTime?: string;

      /** 券状态 */
      status?: number;

      /** 用户 ID */
      userId?: number;
    }

    export class CouponEventHandoutQueryReq {
      /** 结束时间 */
      endTime?: string;

      /** 开始时间 */
      startTime?: string;

      /** 任务编码 */
      taskCode?: string;

      /** 任务名称 */
      taskName?: string;
    }

    export class CouponEventHandoutReq {
      /** 已选择券与数量 */
      couponAndNums?: Array<defs.promotion.CouponAndNum>;

      /** 触发事件 */
      eventTypeCode?: number;

      /** id,仅修改时传递 */
      id?: number;

      /** 简要说明 */
      taskDesc?: string;

      /** 任务名称 */
      taskName?: string;
    }

    export class CouponEventHandoutRsp {
      /** 已选择券与数量 */
      couponAndNums?: Array<defs.promotion.CouponAndNum>;

      /** 自动发券创建时间 */
      createTime?: string;

      /** 自动发券触发事件 */
      eventTypeCode?: number;

      /** 自动发券触发事件描述 */
      eventTypeDesc?: string;

      /** 主键 */
      id?: number;

      /** 自动发券任务状态 */
      status?: number;

      /** 自动发券任务状态描述 */
      statusDesc?: string;

      /** 自动发券任务代码 */
      taskCode?: string;

      /** 自动发券简要说明 */
      taskDesc?: string;

      /** 自动发券任务名称 */
      taskName?: string;
    }

    export class CouponHandoutDto {
      /** 券活动 ID */
      activityId?: number;

      /** 单个用户发放数量 */
      eachOneNum?: number;

      /** 发券批次名称 */
      handoutDesc?: string;

      /** 发放原因 */
      handoutReason?: string;

      /** 发放时间 */
      handoutTime?: string;

      /** 用户 ID */
      userIds?: Array<number>;
    }

    export class CouponHandoutLogVo {
      /** 活动 ID */
      activityId?: number;

      /** 批次号 */
      batchNo?: string;

      /** 发券数量 */
      couponNum?: number;

      /** 操作人 */
      createBy?: string;

      /** 操作时间 */
      createTime?: string;

      /** 发券批次名称 */
      handoutDesc?: string;

      /** 发放原因 */
      handoutReason?: string;

      /** 主键 */
      id?: number;

      /** 涉及用户数 */
      userNum?: number;
    }

    export class CouponMerchantDto {
      /** activityId */
      activityId?: number;

      /** id */
      id?: number;

      /** merchantArea */
      merchantArea?: string;

      /** merchantCode */
      merchantCode?: string;

      /** merchantId */
      merchantId?: number;

      /** merchantName */
      merchantName?: string;
    }

    export class CouponProductCategoryDto {
      /** activityId */
      activityId?: number;

      /** categoryId */
      categoryId?: number;

      /** id */
      id?: number;
    }

    export class CouponProductDto {
      /** category */
      category?: string;

      /** deleted */
      deleted?: number;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** picUrl */
      picUrl?: string;

      /** productId */
      productId?: number;

      /** upc */
      upc?: string;
    }

    export class CouponVo {
      /** 准用门槛条件 */
      conditionType?: number;

      /** 使用限制 */
      conditions?: Array<string>;

      /** couponNo */
      couponNo?: string;

      /** 1全美直邮,2当日达,当券类型为运费券时有效, */
      deliveryType?: Array<number>;

      /** 使用说明 */
      description?: string;

      /** 折扣力度，30就是30%off */
      discountValue?: number;

      /** id */
      id?: number;

      /** 最高抵用金额 */
      maximumDiscountAmount?: number;

      /** 券活动名称 */
      nameForUser?: string;

      /** platformRatio */
      platformRatio?: number;

      /** 抵扣金额/直降金额 */
      reduceAmount?: number;

      /** 抵扣信息，优惠券左上角展示 */
      reduceInfo?: string;

      /** 抵扣信息，优惠券右上角展示 */
      reduceInfoWithMaximum?: string;

      /** storeRatio */
      storeRatio?: number;

      /** 条件信息 */
      threshold?: string;

      /** 准用门槛金额 */
      thresholdAmount?: number;

      /** 准用门槛件数 */
      thresholdNum?: number;

      /** 1满减券、2满折券、3直减券、4运费券 */
      type?: number;

      /** validEndTime */
      validEndTime?: string;

      /** validStartTime */
      validStartTime?: string;
    }

    export class CouponsVo {
      /** available */
      available?: Array<defs.promotion.CouponVo>;

      /** expired */
      expired?: Array<defs.promotion.CouponVo>;

      /** used */
      used?: Array<defs.promotion.CouponVo>;
    }

    export class CreateBuyAGetBDiscountRequest {
      /** bizScope */
      bizScope?: Array<number>;

      /** buyProductUpc */
      buyProductUpc?: string;

      /** endTime */
      endTime?: string;

      /** getProductUpc */
      getProductUpc?: string;

      /** giftNum */
      giftNum?: number;

      /** merchantProportion */
      merchantProportion?: number;

      /** platProportion */
      platProportion?: number;

      /** startTime */
      startTime?: string;

      /** storeIds */
      storeIds?: Array<number>;

      /** thresholdNum */
      thresholdNum?: number;
    }

    export class CreateBuyNGetXDiscountRequest {
      /** bizScope */
      bizScope?: Array<number>;

      /** buyProductUpc */
      buyProductUpc?: string;

      /** discountType */
      discountType?: number;

      /** discountValue */
      discountValue?: number;

      /** endTime */
      endTime?: string;

      /** fixedPrice */
      fixedPrice?: number;

      /** fixedReduce */
      fixedReduce?: number;

      /** merchantProportion */
      merchantProportion?: number;

      /** platProportion */
      platProportion?: number;

      /** startTime */
      startTime?: string;

      /** storeIds */
      storeIds?: Array<number>;

      /** thresholdNum */
      thresholdNum?: number;
    }

    export class CreateDiscountCodeRequest {
      /** amount */
      amount?: number;

      /** code */
      code?: string;

      /** discountCategory */
      discountCategory?: string;

      /** discountPercentage */
      discountPercentage?: number;

      /** endTime */
      endTime?: string;

      /** fixedReduce */
      fixedReduce?: number;

      /** limitByUser */
      limitByUser?: boolean;

      /** maximumDiscountAmount */
      maximumDiscountAmount?: number;

      /** merchantProportion */
      merchantProportion?: number;

      /** name */
      name?: string;

      /** numberOfAvailable */
      numberOfAvailable?: number;

      /** platProportion */
      platProportion?: number;

      /** scope */
      scope?: Array<number>;

      /** startTime */
      startTime?: string;

      /** storeIds */
      storeIds?: Array<number>;

      /** upcList */
      upcList?: Array<string>;
    }

    export class CreateTimeLimitDiscountRequest {
      /** bizScope */
      bizScope?: Array<number>;

      /** discountType */
      discountType?: number;

      /** discountValue */
      discountValue?: number;

      /** endTime */
      endTime?: string;

      /** fixedPrice */
      fixedPrice?: number;

      /** maximumDiscountAmount */
      maximumDiscountAmount?: number;

      /** merchantProportion */
      merchantProportion?: number;

      /** platProportion */
      platProportion?: number;

      /** startTime */
      startTime?: string;

      /** stockValue */
      stockValue?: number;

      /** storeIds */
      storeIds?: Array<number>;

      /** upcList */
      upcList?: Array<string>;
    }

    export class EnumMapVO {
      /** 枚举 */
      enums?: ObjectMap<any, Array<defs.promotion.EnumVO>>;
    }

    export class EnumVO {
      /** code */
      code?: number;

      /** 描述 */
      desc?: string;
    }

    export class EventHandoutOpLogVO {
      /** createTime */
      createTime?: string;

      /** opDesc */
      opDesc?: string;

      /** opUserName */
      opUserName?: string;
    }

    export class HandoutLogQueryConditionReq {
      /** 结束时间 */
      endTime?: string;

      /** 发券批次名称 */
      handOutDesc?: string;

      /** 批次号 */
      handOutNO?: string;

      /** 开始时间 */
      startTime?: string;

      /** 操作人 */
      user?: string;
    }

    export class IPage<T0 = any> {
      /** current */
      current?: number;

      /** pages */
      pages?: number;

      /** records */
      records?: Array<T0>;

      /** size */
      size?: number;

      /** total */
      total?: number;
    }

    export class ImportProductResponse {
      /** batchId */
      batchId?: string;

      /** failCount */
      failCount?: number;

      /** successCount */
      successCount?: number;

      /** successProducts */
      successProducts?: Array<defs.promotion.Product>;
    }

    export class InviteFriendConfigDto {
      /** 优惠券描述 */
      couponActivityDesc?: string;

      /** 优惠券活动id */
      couponActivityId: number;

      /** createTime */
      createTime?: string;

      /** 有效期结束时间,yyyyMMdd */
      endTime: string;

      /** 是否双向发放 */
      giveOutModel: number;

      /** 是否双向发放描述 */
      giveOutModelDesc?: string;

      /** id */
      id?: number;

      /** 活动名称 */
      name?: string;

      /** 有效期开始时间,yyyyMMdd */
      startTime: string;

      /** 上架状态 */
      status: number;

      /** 上架状态描述 */
      statusDesc?: string;

      /** 更新人 */
      updateBy?: string;

      /** 更新时间 */
      updateTime?: string;
    }

    export class InviteFriendConfigQueryConditionReq {
      /** 名称 */
      name?: string;

      /** 上架状态 */
      status?: number;
    }

    export class InviteFriendConfigShelfReq {
      /** 上架状态 */
      status?: number;
    }

    export class LabelEnumValueVo {
      /** code */
      code?: number;

      /** id */
      id?: number;

      /** labelId */
      labelId?: number;

      /** name */
      name?: string;
    }

    export class LabelVo {
      /** enumValueVos */
      enumValueVos?: Array<defs.promotion.LabelEnumValueVo>;

      /** fieldName */
      fieldName?: string;

      /** id */
      id?: number;

      /** labelType */
      labelType?: 'BETWEEN' | 'ENUMS' | 'VALUES' | 'X_Y';

      /** name */
      name?: string;

      /** sqlStr */
      sqlStr?: string;

      /** tableName */
      tableName?: string;

      /** type */
      type?: number;
    }

    export class OrderItem {
      /** asc */
      asc?: boolean;

      /** column */
      column?: string;
    }

    export class Page<T0 = any> {
      /** countId */
      countId?: string;

      /** current */
      current?: number;

      /** maxLimit */
      maxLimit?: number;

      /** optimizeCountSql */
      optimizeCountSql?: boolean;

      /** orders */
      orders?: Array<defs.promotion.OrderItem>;

      /** pages */
      pages?: number;

      /** records */
      records?: Array<T0>;

      /** searchCount */
      searchCount?: boolean;

      /** size */
      size?: number;

      /** total */
      total?: number;
    }

    export class PageReqDto<T0 = any> {
      /** condition */
      condition?: T0;

      /** offset */
      offset?: number;

      /** page */
      page?: number;

      /** size */
      size?: number;
    }

    export class PortraitLabelValuesVo {
      /** checkedEnumValues */
      checkedEnumValues?: Array<defs.promotion.LabelEnumValueVo>;

      /** id */
      id?: number;

      /** labelId */
      labelId?: number;

      /** labelVo */
      labelVo?: defs.promotion.LabelVo;

      /** leftValue */
      leftValue?: string;

      /** mulValues */
      mulValues?: string;

      /** rightValue */
      rightValue?: string;

      /** ruleId */
      ruleId?: number;
    }

    export class PortraitRuleQueryConditionReq {
      /** 规则名称 */
      name?: string;

      /** 上架状态 */
      status?: number;
    }

    export class PortraitRuleVo {
      /** id */
      id?: number;

      /** name */
      name?: string;

      /** portraitLabelValues */
      portraitLabelValues?: Array<defs.promotion.PortraitLabelValuesVo>;

      /** status */
      status?: number;
    }

    export class Product {
      /** category */
      category?: string;

      /** id */
      id?: number;

      /** image */
      image?: string;

      /** name */
      name?: string;

      /** upc */
      upc?: string;
    }

    export class ProductMerchantRelation {
      /** available */
      available?: number;

      /** discountPrice */
      discountPrice?: number;

      /** discountRate */
      discountRate?: number;

      /** id */
      id?: number;

      /** maximumDiscountAmount */
      maximumDiscountAmount?: number;

      /** price */
      price?: number;

      /** purchaseLimit */
      purchaseLimit?: number;

      /** salePrice */
      salePrice?: number;

      /** stockNum */
      stockNum?: number;

      /** stockType */
      stockType?: number;

      /** storeId */
      storeId?: number;
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

    export class Store {
      /** groupId */
      groupId?: number;

      /** groupName */
      groupName?: string;

      /** id */
      id?: number;

      /** storeName */
      storeName?: string;

      /** storeNumber */
      storeNumber?: number;
    }

    export class UpdateBuyAGetBDiscountRequest {
      /** bizScope */
      bizScope?: Array<number>;

      /** buyProductUpc */
      buyProductUpc?: string;

      /** endTime */
      endTime?: string;

      /** getProductUpc */
      getProductUpc?: string;

      /** giftNum */
      giftNum?: number;

      /** id */
      id?: number;

      /** merchantProportion */
      merchantProportion?: number;

      /** platProportion */
      platProportion?: number;

      /** startTime */
      startTime?: string;

      /** storeIds */
      storeIds?: Array<number>;

      /** thresholdNum */
      thresholdNum?: number;
    }

    export class UpdateBuyNGetXDiscountRequest {
      /** bizScope */
      bizScope?: Array<number>;

      /** buyProductUpc */
      buyProductUpc?: string;

      /** discountType */
      discountType?: number;

      /** discountValue */
      discountValue?: number;

      /** endTime */
      endTime?: string;

      /** fixedPrice */
      fixedPrice?: number;

      /** fixedReduce */
      fixedReduce?: number;

      /** id */
      id?: number;

      /** merchantProportion */
      merchantProportion?: number;

      /** platProportion */
      platProportion?: number;

      /** startTime */
      startTime?: string;

      /** storeIds */
      storeIds?: Array<number>;

      /** thresholdNum */
      thresholdNum?: number;
    }

    export class UpdateDiscountCodeRequest {
      /** amount */
      amount?: number;

      /** code */
      code?: string;

      /** discountCategory */
      discountCategory?: string;

      /** discountPercentage */
      discountPercentage?: number;

      /** endTime */
      endTime?: string;

      /** fixedReduce */
      fixedReduce?: number;

      /** id */
      id?: number;

      /** limitByUser */
      limitByUser?: boolean;

      /** maximumDiscountAmount */
      maximumDiscountAmount?: number;

      /** merchantProportion */
      merchantProportion?: number;

      /** name */
      name?: string;

      /** numberOfAvailable */
      numberOfAvailable?: number;

      /** platProportion */
      platProportion?: number;

      /** scope */
      scope?: Array<number>;

      /** startTime */
      startTime?: string;

      /** storeIds */
      storeIds?: Array<number>;

      /** upcList */
      upcList?: Array<string>;
    }

    export class UpdateTimeLimitDiscountRequest {
      /** bizScope */
      bizScope?: Array<number>;

      /** buyProductUpc */
      buyProductUpc?: string;

      /** discountType */
      discountType?: number;

      /** discountValue */
      discountValue?: number;

      /** endTime */
      endTime?: string;

      /** fixedPrice */
      fixedPrice?: number;

      /** id */
      id?: number;

      /** maximumDiscountAmount */
      maximumDiscountAmount?: number;

      /** merchantProportion */
      merchantProportion?: number;

      /** platProportion */
      platProportion?: number;

      /** startTime */
      startTime?: string;

      /** stockValue */
      stockValue?: number;

      /** storeIds */
      storeIds?: Array<number>;
    }

    export class UploadProductRsp {
      /** id */
      fileId?: number;

      /** 导入失败商品数量 */
      importFailedProductNum?: number;

      /** 导入成功商品数量 */
      importSuccessProductNum?: number;
    }
  }
}

declare namespace API {
  export namespace promotion {
    /**
     * 后台管理 - 优惠码活动
     */
    export namespace activityDiscountCodeConfig {
      /**
       * 新增配置
       * /bo/discountCode/config/create
       */
      export namespace create {
        export type createBody = defs.promotion.CreateDiscountCodeRequest;
        export type createOptions = Record<string, any>;
        export type createResponse = defs.promotion.Response<void>;
        export type request = (
          body: createBody,
          options?: createOptions,
        ) => createResponse;
      }

      /**
       * 查看详情
       * /bo/discountCode/config/detail/{id}
       */
      export namespace detail {
        export type detailPath = {
          /** id */
          id: number;
        };
        export type detailOptions = Record<string, any>;
        export type detailResponse =
          defs.promotion.Response<defs.promotion.ActivityDiscountCodeDetailVo>;
        export type request = (
          path: detailPath,
          options?: detailOptions,
        ) => detailResponse;
      }

      /**
       * 活动列表
       * /bo/discountCode/config/list
       */
      export namespace list {
        export type listParam = {
          /** code */
          code?: string;

          /** discountCategory */
          discountCategory?: string;

          /** id */
          id?: number;

          /** name */
          name?: string;

          /** page */
          page?: number;

          /** size */
          size?: number;

          /** status */
          status?: string;
        };
        export type listOptions = Record<string, any>;
        export type listResponse = defs.promotion.Response<
          defs.promotion.IPage<defs.promotion.ActivityDiscountCodeVo>
        >;
        export type request = (
          params: listParam,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 上架或下架活动
       * /bo/discountCode/config/openOrClose/{id}
       */
      export namespace openOrClose {
        export type openOrClosePath = {
          /** id */
          id: number;
        };
        export type openOrCloseOptions = Record<string, any>;
        export type openOrCloseResponse = defs.promotion.Response<void>;
        export type request = (
          path: openOrClosePath,
          options?: openOrCloseOptions,
        ) => openOrCloseResponse;
      }

      /**
       * 编辑配置
       * /bo/discountCode/config/update
       */
      export namespace update {
        export type updateBody = defs.promotion.UpdateDiscountCodeRequest;
        export type updateOptions = Record<string, any>;
        export type updateResponse = defs.promotion.Response<void>;
        export type request = (
          body: updateBody,
          options?: updateOptions,
        ) => updateResponse;
      }
    }

    /**
     * 后台管理 - 活动商品管理
     */
    export namespace bigSaleProduct {
      /**
       * 批量上架或下架活动商品
       * /bo/saleProduct/batchOpenOrClose
       */
      export namespace openOrClose {
        export type openOrCloseBody = Array<number>;
        export type openOrCloseOptions = Record<string, any>;
        export type openOrCloseResponse = defs.promotion.Response<void>;
        export type request = (
          body: openOrCloseBody,
          options?: openOrCloseOptions,
        ) => openOrCloseResponse;
      }

      /**
       * 查询商品是否参加活动
       * /bo/saleProduct/checkOnActivity
       */
      export namespace checkOnActivity {
        export type checkOnActivityBody = Array<string>;
        export type checkOnActivityOptions = Record<string, any>;
        export type checkOnActivityResponse = defs.promotion.Response<
          Array<string>
        >;
        export type request = (
          body: checkOnActivityBody,
          options?: checkOnActivityOptions,
        ) => checkOnActivityResponse;
      }

      /**
       * 删除活动商品
       * /bo/saleProduct/delete/{id}
       */
      export namespace remove {
        export type removePath = {
          /** id */
          id: number;
        };
        export type removeOptions = Record<string, any>;
        export type removeResponse = defs.promotion.Response<void>;
        export type request = (
          path: removePath,
          options?: removeOptions,
        ) => removeResponse;
      }

      /**
       * 查询直降活动商品详情
       * /bo/saleProduct/detail/{id}
       */
      export namespace detail {
        export type detailPath = {
          /** id */
          id: number;
        };
        export type detailOptions = Record<string, any>;
        export type detailResponse =
          defs.promotion.Response<defs.promotion.BigSaleProductDetailVo>;
        export type request = (
          path: detailPath,
          options?: detailOptions,
        ) => detailResponse;
      }

      /**
       * 查询活动商品列表
       * /bo/saleProduct/list
       */
      export namespace list {
        export type listParam = {
          /** article */
          article?: string;

          /** page */
          page?: number;

          /** productName */
          productName?: string;

          /** promotionType */
          promotionType: number;

          /** size */
          size?: number;

          /** status */
          status?: number;
        };
        export type listOptions = Record<string, any>;
        export type listResponse = defs.promotion.Response<
          defs.promotion.IPage<defs.promotion.BigSaleProductVo>
        >;
        export type request = (
          params: listParam,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 查询活动商品列表
       * /bo/saleProduct/match
       */
      export namespace match {
        export type matchParam = {
          /** exact */
          exact?: boolean;

          /** keyword */
          keyword?: string;

          /** page */
          page?: number;

          /** size */
          size?: number;
        };
        export type matchOptions = Record<string, any>;
        export type matchResponse = defs.promotion.Response<
          defs.promotion.IPage<defs.promotion.BigSaleProductVo>
        >;
        export type request = (
          params: matchParam,
          options?: matchOptions,
        ) => matchResponse;
      }

      /**
       * 上架或下架活动商品
       * /bo/saleProduct/openOrClose/{id}
       */
      export namespace putOpenOrCloseById {
        export type putOpenOrCloseByIdPath = {
          /** id */
          id: number;
        };
        export type putOpenOrCloseByIdOptions = Record<string, any>;
        export type putOpenOrCloseByIdResponse = defs.promotion.Response<void>;
        export type request = (
          path: putOpenOrCloseByIdPath,
          options?: putOpenOrCloseByIdOptions,
        ) => putOpenOrCloseByIdResponse;
      }
    }

    /**
     * 后台管理 - 优惠券管理
     */
    export namespace boCoupon {
      /**
       * 新增券活动
       * /bo/couponActivity
       */
      export namespace createCouponActivity {
        export type createCouponActivityBody = defs.promotion.CouponActivityDto;
        export type createCouponActivityOptions = Record<string, any>;
        export type createCouponActivityResponse =
          defs.promotion.Response<boolean>;
        export type request = (
          body: createCouponActivityBody,
          options?: createCouponActivityOptions,
        ) => createCouponActivityResponse;
      }

      /**
       * 修改券活动
       * /bo/couponActivity
       */
      export namespace updateCouponActivity {
        export type updateCouponActivityBody = defs.promotion.CouponActivityDto;
        export type updateCouponActivityOptions = Record<string, any>;
        export type updateCouponActivityResponse =
          defs.promotion.Response<boolean>;
        export type request = (
          body: updateCouponActivityBody,
          options?: updateCouponActivityOptions,
        ) => updateCouponActivityResponse;
      }

      /**
       * 已发券列表
       * /bo/couponActivity/coupons
       */
      export namespace listCoupons {
        export type listCouponsBody =
          defs.promotion.PageReqDto<defs.promotion.CouponDetailReq>;
        export type listCouponsOptions = Record<string, any>;
        export type listCouponsResponse = defs.promotion.Response<
          defs.promotion.IPage<defs.promotion.CouponDetailVO>
        >;
        export type request = (
          body: listCouponsBody,
          options?: listCouponsOptions,
        ) => listCouponsResponse;
      }

      /**
       * 销毁已发券
       * /bo/couponActivity/coupons/destroy
       */
      export namespace destroyCoupons {
        export type destroyCouponsBody = defs.promotion.CouponDestroyReq;
        export type destroyCouponsOptions = Record<string, any>;
        export type destroyCouponsResponse = defs.promotion.Response<boolean>;
        export type request = (
          body: destroyCouponsBody,
          options?: destroyCouponsOptions,
        ) => destroyCouponsResponse;
      }

      /**
       * 导入优惠券商品数据
       * /bo/couponActivity/detail/product/import
       */
      export namespace importProducts {
        export type importProductsFormData = FormData;
        export type importProductsOptions = Record<string, any>;
        export type importProductsResponse =
          defs.promotion.Response<defs.promotion.UploadProductRsp>;
        export type request = (
          formData: importProductsFormData,
          options?: importProductsOptions,
        ) => importProductsResponse;
      }

      /**
       * 下载商品导入模板
       * /bo/couponActivity/detail/product/template
       */
      export namespace downloadProductTemplate {
        export type downloadProductTemplateOptions = Record<string, any>;
        export type downloadProductTemplateResponse = any;
        export type request = (
          options?: downloadProductTemplateOptions,
        ) => downloadProductTemplateResponse;
      }

      /**
       * 下载商品导入错误数据
       * /bo/couponActivity/detail/product/uploadError/{logId}
       */
      export namespace downloadImportProductsErrors {
        export type downloadImportProductsErrorsPath = {
          /** logId */
          logId: number;
        };
        export type downloadImportProductsErrorsOptions = Record<string, any>;
        export type downloadImportProductsErrorsResponse = any;
        export type request = (
          path: downloadImportProductsErrorsPath,
          options?: downloadImportProductsErrorsOptions,
        ) => downloadImportProductsErrorsResponse;
      }

      /**
       * 查看券活动详情
       * /bo/couponActivity/detail/{activityId}
       */
      export namespace couponActivityDetail {
        export type couponActivityDetailPath = {
          /** activityId */
          activityId: number;
        };
        export type couponActivityDetailOptions = Record<string, any>;
        export type couponActivityDetailResponse =
          defs.promotion.Response<defs.promotion.CouponActivityDto>;
        export type request = (
          path: couponActivityDetailPath,
          options?: couponActivityDetailOptions,
        ) => couponActivityDetailResponse;
      }

      /**
       * 审核优惠券活动
       * /bo/couponActivity/detail/{activityId}/active
       */
      export namespace reviewCouponActivity {
        export type reviewCouponActivityBody =
          defs.promotion.CouponActivityCheckReq;
        export type reviewCouponActivityPath = {
          /** activityId */
          activityId: number;
        };
        export type reviewCouponActivityOptions = Record<string, any>;
        export type reviewCouponActivityResponse =
          defs.promotion.Response<boolean>;
        export type request = (
          body: reviewCouponActivityBody,
          path: reviewCouponActivityPath,
          options?: reviewCouponActivityOptions,
        ) => reviewCouponActivityResponse;
      }

      /**
       * 启用禁用优惠券活动
       * /bo/couponActivity/detail/{activityId}/handout
       */
      export namespace openOrCloseCouponActivity {
        export type openOrCloseCouponActivityBody =
          defs.promotion.CouponActivityCheckReq;
        export type openOrCloseCouponActivityPath = {
          /** activityId */
          activityId: number;
        };
        export type openOrCloseCouponActivityOptions = Record<string, any>;
        export type openOrCloseCouponActivityResponse =
          defs.promotion.Response<boolean>;
        export type request = (
          body: openOrCloseCouponActivityBody,
          path: openOrCloseCouponActivityPath,
          options?: openOrCloseCouponActivityOptions,
        ) => openOrCloseCouponActivityResponse;
      }

      /**
       * 修改券活动的商品、类目、门店
       * /bo/couponActivity/detail/{activityId}/modifySub
       */
      export namespace modifyCouponActivitySub {
        export type modifyCouponActivitySubBody =
          defs.promotion.CouponActivitySubReq;
        export type modifyCouponActivitySubPath = {
          /** activityId */
          activityId: number;
        };
        export type modifyCouponActivitySubOptions = Record<string, any>;
        export type modifyCouponActivitySubResponse =
          defs.promotion.Response<boolean>;
        export type request = (
          body: modifyCouponActivitySubBody,
          path: modifyCouponActivitySubPath,
          options?: modifyCouponActivitySubOptions,
        ) => modifyCouponActivitySubResponse;
      }

      /**
        * 获取券活动相关的枚举
couponType:券活动类型,couponActivityStatus:券活动状态,couponConditionType:券规则条件类型,couponUseDateType:使用日期类型,deliveryCouponScopeType:运费券适用范围,bizScope:覆盖业务,receivedLimitType:领取后限制类型
        * /bo/couponActivity/enums
        */
      export namespace getCouponEnums {
        export type getCouponEnumsParam = {
          /** keys */
          keys?: string;
        };
        export type getCouponEnumsOptions = Record<string, any>;
        export type getCouponEnumsResponse =
          defs.promotion.Response<defs.promotion.EnumMapVO>;
        export type request = (
          params: getCouponEnumsParam,
          options?: getCouponEnumsOptions,
        ) => getCouponEnumsResponse;
      }

      /**
       * 自动发券-新增
       * /bo/couponActivity/event/handout
       */
      export namespace addEventHandoutRule {
        export type addEventHandoutRuleBody =
          defs.promotion.CouponEventHandoutReq;
        export type addEventHandoutRuleOptions = Record<string, any>;
        export type addEventHandoutRuleResponse =
          defs.promotion.Response<boolean>;
        export type request = (
          body: addEventHandoutRuleBody,
          options?: addEventHandoutRuleOptions,
        ) => addEventHandoutRuleResponse;
      }

      /**
       * 自动发券-修改
       * /bo/couponActivity/event/handout
       */
      export namespace modifyEventHandoutRule {
        export type modifyEventHandoutRuleBody =
          defs.promotion.CouponEventHandoutReq;
        export type modifyEventHandoutRuleOptions = Record<string, any>;
        export type modifyEventHandoutRuleResponse =
          defs.promotion.Response<boolean>;
        export type request = (
          body: modifyEventHandoutRuleBody,
          options?: modifyEventHandoutRuleOptions,
        ) => modifyEventHandoutRuleResponse;
      }

      /**
       * 自动发券启用/停用
       * /bo/couponActivity/event/handout/detail/{id}/active
       */
      export namespace activeEventHandout {
        export type activeEventHandoutBody =
          defs.promotion.CouponActivityCheckReq;
        export type activeEventHandoutPath = {
          /** id */
          id: number;
        };
        export type activeEventHandoutOptions = Record<string, any>;
        export type activeEventHandoutResponse =
          defs.promotion.Response<boolean>;
        export type request = (
          body: activeEventHandoutBody,
          path: activeEventHandoutPath,
          options?: activeEventHandoutOptions,
        ) => activeEventHandoutResponse;
      }

      /**
       * 自动发券启用/停用
       * /bo/couponActivity/event/handout/detail/{id}/opLog
       */
      export namespace eventHandoutOpLog {
        export type eventHandoutOpLogPath = {
          /** id */
          id: number;
        };
        export type eventHandoutOpLogOptions = Record<string, any>;
        export type eventHandoutOpLogResponse = defs.promotion.Response<
          Array<defs.promotion.EventHandoutOpLogVO>
        >;
        export type request = (
          path: eventHandoutOpLogPath,
          options?: eventHandoutOpLogOptions,
        ) => eventHandoutOpLogResponse;
      }

      /**
       * 自动发券列表
       * /bo/couponActivity/event/handout/list
       */
      export namespace listEventHandouts {
        export type listEventHandoutsBody =
          defs.promotion.PageReqDto<defs.promotion.CouponEventHandoutQueryReq>;
        export type listEventHandoutsOptions = Record<string, any>;
        export type listEventHandoutsResponse = defs.promotion.Response<
          defs.promotion.Page<defs.promotion.CouponEventHandoutRsp>
        >;
        export type request = (
          body: listEventHandoutsBody,
          options?: listEventHandoutsOptions,
        ) => listEventHandoutsResponse;
      }

      /**
       * 自动发券触发事件
       * /bo/couponActivity/event/types
       */
      export namespace getEventTypes {
        export type getEventTypesOptions = Record<string, any>;
        export type getEventTypesResponse = defs.promotion.Response<
          Array<defs.promotion.EnumVO>
        >;
        export type request = (
          options?: getEventTypesOptions,
        ) => getEventTypesResponse;
      }

      /**
       * 获取文件上传的URL
       * /bo/couponActivity/file-upload/url
       */
      export namespace getFileUrl {
        export type getFileUrlParam = {
          /** contentType */
          contentType?: string;
        };
        export type getFileUrlOptions = Record<string, any>;
        export type getFileUrlResponse =
          defs.promotion.Response<defs.promotion.S3PreSignInfo>;
        export type request = (
          params: getFileUrlParam,
          options?: getFileUrlOptions,
        ) => getFileUrlResponse;
      }

      /**
       * 券活动列表
       * /bo/couponActivity/list
       */
      export namespace listCouponActivity {
        export type listCouponActivityBody =
          defs.promotion.PageReqDto<defs.promotion.CouponActivityQueryConditionReq>;
        export type listCouponActivityOptions = Record<string, any>;
        export type listCouponActivityResponse = defs.promotion.Response<
          defs.promotion.Page<defs.promotion.CouponActivityDto>
        >;
        export type request = (
          body: listCouponActivityBody,
          options?: listCouponActivityOptions,
        ) => listCouponActivityResponse;
      }

      /**
       * 批量手动发券
       * /bo/couponActivity/manual/handout
       */
      export namespace createManualHandout {
        export type createManualHandoutBody = defs.promotion.CouponHandoutDto;
        export type createManualHandoutOptions = Record<string, any>;
        export type createManualHandoutResponse =
          defs.promotion.Response<boolean>;
        export type request = (
          body: createManualHandoutBody,
          options?: createManualHandoutOptions,
        ) => createManualHandoutResponse;
      }

      /**
       * 可用券活动列表
       * /bo/couponActivity/manual/handout/availableActivity
       */
      export namespace listAvailableActivity {
        export type listAvailableActivityOptions = Record<string, any>;
        export type listAvailableActivityResponse = defs.promotion.Response<
          Array<defs.promotion.CouponActivityDto>
        >;
        export type request = (
          options?: listAvailableActivityOptions,
        ) => listAvailableActivityResponse;
      }

      /**
       * 下载手动发券错误信息
       * /bo/couponActivity/manual/handout/detail/{handoutId}
       */
      export namespace downloadHandoutError {
        export type downloadHandoutErrorPath = {
          /** handoutId */
          handoutId: number;
        };
        export type downloadHandoutErrorOptions = Record<string, any>;
        export type downloadHandoutErrorResponse = any;
        export type request = (
          path: downloadHandoutErrorPath,
          options?: downloadHandoutErrorOptions,
        ) => downloadHandoutErrorResponse;
      }

      /**
       * 导入用户数据
       * /bo/couponActivity/manual/handout/import
       */
      export namespace importUserList {
        export type importUserListFormData = FormData;
        export type importUserListOptions = Record<string, any>;
        export type importUserListResponse = any;
        export type request = (
          formData: importUserListFormData,
          options?: importUserListOptions,
        ) => importUserListResponse;
      }

      /**
       * 手动发券日志
       * /bo/couponActivity/manual/handout/logs
       */
      export namespace selectManualHandoutLogs {
        export type selectManualHandoutLogsBody =
          defs.promotion.PageReqDto<defs.promotion.HandoutLogQueryConditionReq>;
        export type selectManualHandoutLogsOptions = Record<string, any>;
        export type selectManualHandoutLogsResponse = defs.promotion.Response<
          defs.promotion.IPage<defs.promotion.CouponHandoutLogVo>
        >;
        export type request = (
          body: selectManualHandoutLogsBody,
          options?: selectManualHandoutLogsOptions,
        ) => selectManualHandoutLogsResponse;
      }

      /**
       * 查看手动发券批次详情
       * /bo/couponActivity/manual/handout/logs/detail
       */
      export namespace manualHandoutCoupons {
        export type manualHandoutCouponsBody =
          defs.promotion.PageReqDto<defs.promotion.CouponDetailReq>;
        export type manualHandoutCouponsOptions = Record<string, any>;
        export type manualHandoutCouponsResponse = defs.promotion.Response<
          defs.promotion.IPage<defs.promotion.CouponDetailVO>
        >;
        export type request = (
          body: manualHandoutCouponsBody,
          options?: manualHandoutCouponsOptions,
        ) => manualHandoutCouponsResponse;
      }

      /**
       * 下载导入模板
       * /bo/couponActivity/manual/handout/template
       */
      export namespace downloadTemplate {
        export type downloadTemplateOptions = Record<string, any>;
        export type downloadTemplateResponse = any;
        export type request = (
          options?: downloadTemplateOptions,
        ) => downloadTemplateResponse;
      }

      /**
       * 查看券活动操作记录
       * /bo/couponActivity/opLog/{activityId}
       */
      export namespace listCouponActivityOperations {
        export type listCouponActivityOperationsPath = {
          /** activityId */
          activityId: number;
        };
        export type listCouponActivityOperationsOptions = Record<string, any>;
        export type listCouponActivityOperationsResponse =
          defs.promotion.Response<Array<defs.promotion.CouponActivityOpLogVO>>;
        export type request = (
          path: listCouponActivityOperationsPath,
          options?: listCouponActivityOperationsOptions,
        ) => listCouponActivityOperationsResponse;
      }
    }

    /**
     * 后台管理 - 活动文件上传下载
     */
    export namespace boImportFile {
      /**
        * 上传商品信息
上传商品信息，用于上传活动商品
        * /bo/import/file/import/product
        */
      export namespace importProduct {
        export type importProductFormData = FormData;
        export type importProductOptions = Record<string, any>;
        export type importProductResponse =
          defs.promotion.Response<defs.promotion.ImportProductResponse>;
        export type request = (
          formData: importProductFormData,
          options?: importProductOptions,
        ) => importProductResponse;
      }

      /**
        * 下载错误的商品信息
下载错误的商品信息，用于上传活动商品
        * /bo/import/file/import/product/failed
        */
      export namespace importProductFailed {
        export type importProductFailedParam = {
          /** batchId */
          batchId: string;
        };
        export type importProductFailedOptions = Record<string, any>;
        export type importProductFailedResponse = any;
        export type request = (
          params: importProductFailedParam,
          options?: importProductFailedOptions,
        ) => importProductFailedResponse;
      }

      /**
        * 上传用户信息
上传用户信息，用于手动发券上传用户信息
        * /bo/import/file/import/user
        */
      export namespace importUser {
        export type importUserFormData = FormData;
        export type importUserOptions = Record<string, any>;
        export type importUserResponse = defs.promotion.Response<void>;
        export type request = (
          formData: importUserFormData,
          options?: importUserOptions,
        ) => importUserResponse;
      }

      /**
        * 下载错误的用户信息
下载错误的用户信息，用于手动发券上传用户信息
        * /bo/import/file/import/user/failed
        */
      export namespace importUserFailed {
        export type importUserFailedParam = {
          /** batchId */
          batchId: string;
        };
        export type importUserFailedOptions = Record<string, any>;
        export type importUserFailedResponse = any;
        export type request = (
          params: importUserFailedParam,
          options?: importUserFailedOptions,
        ) => importUserFailedResponse;
      }

      /**
        * 下载商品模板
下载用户模板，用于上传活动商品
        * /bo/import/file/template/product
        */
      export namespace templateProduct {
        export type templateProductOptions = Record<string, any>;
        export type templateProductResponse = any;
        export type request = (
          options?: templateProductOptions,
        ) => templateProductResponse;
      }

      /**
        * 下载用户模板
下载用户模板，用于手动发券上传用户信息
        * /bo/import/file/template/user
        */
      export namespace templateUser {
        export type templateUserOptions = Record<string, any>;
        export type templateUserResponse = any;
        export type request = (
          options?: templateUserOptions,
        ) => templateUserResponse;
      }
    }

    /**
     * 后台管理 - 买 A 赠 B
     */
    export namespace buyAGetBDiscountConfig {
      /**
       * 新增配置
       * /bo/buyA/GetB/discount/config/create
       */
      export namespace create {
        export type createBody = defs.promotion.CreateBuyAGetBDiscountRequest;
        export type createOptions = Record<string, any>;
        export type createResponse = defs.promotion.Response<void>;
        export type request = (
          body: createBody,
          options?: createOptions,
        ) => createResponse;
      }

      /**
       * 编辑配置
       * /bo/buyA/GetB/discount/config/update
       */
      export namespace update {
        export type updateBody = defs.promotion.UpdateBuyAGetBDiscountRequest;
        export type updateOptions = Record<string, any>;
        export type updateResponse = defs.promotion.Response<void>;
        export type request = (
          body: updateBody,
          options?: updateOptions,
        ) => updateResponse;
      }
    }

    /**
     * 后台管理 - 买 N 件打 X 折
     */
    export namespace buyNGetXDiscountConfig {
      /**
       * 新增配置
       * /bo/buyN/GetX/discount/config/create
       */
      export namespace create {
        export type createBody = defs.promotion.CreateBuyNGetXDiscountRequest;
        export type createOptions = Record<string, any>;
        export type createResponse = defs.promotion.Response<void>;
        export type request = (
          body: createBody,
          options?: createOptions,
        ) => createResponse;
      }

      /**
       * 编辑配置
       * /bo/buyN/GetX/discount/config/update
       */
      export namespace update {
        export type updateBody = defs.promotion.UpdateBuyNGetXDiscountRequest;
        export type updateOptions = Record<string, any>;
        export type updateResponse = defs.promotion.Response<void>;
        export type request = (
          body: updateBody,
          options?: updateOptions,
        ) => updateResponse;
      }
    }

    /**
     * 后台管理 - 邀请好友管理
     */
    export namespace inviteFriendConfig {
      /**
       * 新增配置
       * /bo/inviteFriendConfig
       */
      export namespace addConfig {
        export type addConfigBody = defs.promotion.InviteFriendConfigDto;
        export type addConfigOptions = Record<string, any>;
        export type addConfigResponse = defs.promotion.Response<boolean>;
        export type request = (
          body: addConfigBody,
          options?: addConfigOptions,
        ) => addConfigResponse;
      }

      /**
       * 查看配置
       * /bo/inviteFriendConfig/detail/{id}
       */
      export namespace getVoById {
        export type getVoByIdPath = {
          /** id */
          id: number;
        };
        export type getVoByIdOptions = Record<string, any>;
        export type getVoByIdResponse =
          defs.promotion.Response<defs.promotion.InviteFriendConfigDto>;
        export type request = (
          path: getVoByIdPath,
          options?: getVoByIdOptions,
        ) => getVoByIdResponse;
      }

      /**
       * shelf
       * /bo/inviteFriendConfig/detail/{id}/shelf
       */
      export namespace shelf {
        export type shelfBody = defs.promotion.InviteFriendConfigShelfReq;
        export type shelfPath = {
          /** id */
          id: number;
        };
        export type shelfOptions = Record<string, any>;
        export type shelfResponse = defs.promotion.Response<boolean>;
        export type request = (
          body: shelfBody,
          path: shelfPath,
          options?: shelfOptions,
        ) => shelfResponse;
      }

      /**
       * 查看列表(分页)
       * /bo/inviteFriendConfig/list
       */
      export namespace listConfigure {
        export type listConfigureBody =
          defs.promotion.PageReqDto<defs.promotion.InviteFriendConfigQueryConditionReq>;
        export type listConfigureOptions = Record<string, any>;
        export type listConfigureResponse = defs.promotion.Response<
          defs.promotion.Page<defs.promotion.InviteFriendConfigDto>
        >;
        export type request = (
          body: listConfigureBody,
          options?: listConfigureOptions,
        ) => listConfigureResponse;
      }
    }

    /**
     * 后台管理 - 限时直降
     */
    export namespace timeLimitDiscountConfig {
      /**
       * 新增配置
       * /bo/timeLimitDiscount/config/create
       */
      export namespace create {
        export type createBody = defs.promotion.CreateTimeLimitDiscountRequest;
        export type createOptions = Record<string, any>;
        export type createResponse = defs.promotion.Response<void>;
        export type request = (
          body: createBody,
          options?: createOptions,
        ) => createResponse;
      }

      /**
       * 编辑配置
       * /bo/timeLimitDiscount/config/update
       */
      export namespace update {
        export type updateBody = defs.promotion.UpdateTimeLimitDiscountRequest;
        export type updateOptions = Record<string, any>;
        export type updateResponse = defs.promotion.Response<void>;
        export type request = (
          body: updateBody,
          options?: updateOptions,
        ) => updateResponse;
      }
    }
  }
}
