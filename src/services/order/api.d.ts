type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace order {
    export class AddDeliveryFeeDTO {
      /** 金额 */
      amount?: number;

      /** 订单 id */
      orderId?: string;
    }

    export class AddRecipeCategoryRequest {
      /** icon图标 */
      icon: string;

      /** 英文名称 */
      nameEnUs: string;

      /** 中文名称 */
      nameZhCn: string;

      /** 繁体名称 */
      nameZhTw: string;

      /** 排序 */
      sort: number;
    }

    export class AddRecipeRequest {
      /** 分类id */
      categoryId: number;

      /** 英文-内容 */
      contentEnUs: string;

      /** contentZhCn */
      contentZhCn: string;

      /** 繁体-内容 */
      contentZhTw: string;

      /** 烹饪时间(单位:分钟) */
      cookingTime?: number;

      /** 描述信息 */
      description: string;

      /** 关键词 */
      keyword: string;

      /** 素材 */
      materialList?: Array<defs.order.RecipeMaterialVo>;

      /** 商品信息 */
      productList?: Array<defs.order.RecipeProductVo>;

      /** SEO标题 */
      seoTitle: string;

      /** 排序 */
      sort: number;

      /** 英文-标题 */
      titleEnUs: string;

      /** 中文-标题 */
      titleZhCn: string;

      /** 繁体-标题 */
      titleZhTw: string;
    }

    export class Address {
      /** 楼栋/单元 */
      aptUnit?: string;

      /** 城市 */
      city?: string;

      /** 姓氏 */
      firstName?: string;

      /** 名字 */
      lastName?: string;

      /** 手机号 */
      phone?: string;

      /** 州 */
      state?: string;

      /** 街道 */
      street?: string;

      /** 邮编 */
      zipCode?: string;
    }

    export class AdjustItem {
      /** 调整金额 */
      adjustAmount?: number;

      /** 调整项 */
      adjustTypeDesc?: string;

      /** 商品主 UPC */
      mainUpc?: string;

      /** 商品名称 */
      productName?: string;

      /** UPC */
      upc?: string;
    }

    export class AdjustRefund {
      /** 卡类型 */
      brand?: string;

      /** 后 4 位 */
      last4?: string;

      /** 状态 */
      statusDesc?: string;
    }

    export class Adjustment {
      /** 退瓶费调整金额 */
      beverageContainerFeeAdjust?: number;

      /** 数量调整金额 */
      quantityAdjust?: number;

      /** 商品调整金额 */
      subTotal?: number;

      /** 税费调整金额 */
      taxAdjust?: number;

      /** 调价总金额 */
      total?: number;

      /** 重量调整金额 */
      weighAdjust?: number;
    }

    export class AdjustmentItem {
      /** 调整价格 */
      adjustPrice?: number;

      /** 调整数量 */
      adjustQuantity?: number;

      /** 调价类型：0-无、1-数量、2-重量、3-重量和数量 */
      adjustType?: number;

      /** 调整重量 */
      adjustWeigh?: number;

      /** 是否缺货 */
      isOutOfStock?: boolean;

      /** 商品金额 */
      itemAmount?: number;

      /** 商品主图 */
      mainPic?: string;

      /** 市场价格 */
      marketPrice?: number;

      /** 商品净重 */
      netWeight?: number;

      /** 净重单位 */
      netWeightUom?: string;

      /** 拣货金额 */
      pickingAmount?: number;

      /** 拣货数量 */
      pickingQuantity?: number;

      /** 拣货重量 */
      pickingWeight?: number;

      /** 商品名称 */
      productName?: string;

      /** 商品类型：1-非称重、2-称重 */
      productType?: number;

      /** 购买数量 */
      quantity?: number;

      /** 净重单价（零售价） */
      retailPrice?: number;

      /** 售卖价格 */
      salePrice?: number;

      /** 售卖单位 */
      saleUom?: string;

      /** 购买单位 */
      uom?: string;

      /** 购买净重 */
      weigh?: number;
    }

    export class AllRefundInfo {
      /** 售后备注 */
      comment?: string;

      /** 售后凭证 */
      pictures?: Array<string>;

      /** 售后原因 */
      reasonDesc?: string;
    }

    export class AppAddRecipeReviewRequest {
      /** 评论内容 */
      description: string;

      /** 评论图片 */
      photos?: string;

      /** 食谱id */
      recipeId: number;
    }

    export class AppGetRecipeResponse {
      /** 评论次数 */
      commentNum?: number;

      /** (中/英/繁) -内容 */
      content?: string;

      /** 烹饪时间(单位:分钟) */
      cookingTime?: number;

      /** 当前账号是否点赞 */
      like?: boolean;

      /** 点赞次数 */
      likeNum?: number;

      /** 素材 */
      materialList?: Array<defs.order.RecipeMaterialVo>;

      /** 商品信息 */
      productList?: Array<defs.order.AppRecipeProductVo>;

      /** 分享次数 */
      shareNum?: number;

      /** (中/英/繁) 标题 */
      title?: string;
    }

    export class AppPersonalRecipeReviewResponse {
      /** 头像 */
      avatar?: string;

      /** 被回复的内容 */
      byDescription?: string;

      /** 评论时间 */
      createdTime?: string;

      /** 评论内容 */
      description?: string;

      /** 评论id */
      id?: number;

      /** 当前账号是否点赞 */
      like?: boolean;

      /** 点赞次数 */
      likeNum?: number;

      /** 等级 */
      memberLevel?: string;

      /** 昵称 */
      nickName?: string;

      /** 被回复对应的id */
      parentId?: number;

      /** 评论图片 */
      photos?: string;

      /** 食谱id */
      recipeId?: number;

      /** 回复次数 */
      replyNum?: number;

      /** 素材类型(0: 图片 1:视频) */
      type?: number;

      /** 素材url */
      url?: string;

      /** 用户id */
      userId?: number;
    }

    export class AppQueryRecipeCategoryResponse {
      /** icon图标 */
      icon?: string;

      /** id */
      id?: number;

      /** 分类名 自动转化语言 中/英/繁 */
      name?: string;
    }

    export class AppQueryRecipeRequest {
      /** 分类id */
      categoryId?: number;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 类型: 1:推荐 Recommend  2:最新 newest  3:最热  most Likes 4:喜欢 your likes */
      type?: number;
    }

    export class AppQueryRecipeResponse {
      /** 创建时间  格式: MM-dd */
      createdTime?: string;

      /** id */
      id?: number;

      /** 当前账号是否点赞 */
      like?: boolean;

      /** 点赞次数 */
      likeNum?: number;

      /** 素材  最多只会返回1条 */
      material?: defs.order.RecipeMaterialVo;

      /** 标题 自动转化语言 中/英/繁 */
      title?: string;

      /** 会员头像 */
      userAvatar?: string;

      /** 会员昵称 */
      userNickName?: string;
    }

    export class AppQueryRecipeReviewRequest {
      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 父级帖子对应id */
      parentId?: number;

      /** 食谱id */
      recipeId: number;
    }

    export class AppQueryRecipeReviewResponse {
      /** 头像 */
      avatar?: string;

      /** 被回复的内容 */
      byDescription?: string;

      /** 评论时间 */
      createdTime?: string;

      /** 评论内容 */
      description?: string;

      /** 评论id */
      id?: number;

      /** 当前账号是否点赞 */
      like?: boolean;

      /** 点赞次数 */
      likeNum?: number;

      /** 等级 */
      memberLevel?: string;

      /** 昵称 */
      nickName?: string;

      /** 被回复对应的id */
      parentId?: number;

      /** 评论图片 */
      photos?: string;

      /** 食谱id */
      recipeId?: number;

      /** 回复次数 */
      replyNum?: number;

      /** 用户id */
      userId?: number;
    }

    export class AppRecipeProductVo {
      /** 主图地址 */
      imageUrl?: string;

      /** 市场价格(单位 美元) */
      price?: number;

      /** 商品名称(会根据当前语音自动设置中英文) */
      productName?: string;

      /** 所需数量 */
      quantity?: number;

      /** 商品零售价格(单位 美元) */
      retailPrice?: number;

      /** 库存量 */
      stockNum?: number;

      /** 商品sku(规格id) Id */
      variantId?: string;
    }

    export class AppRecipeReviewRequest {
      /** 评论内容 */
      description: string;

      /** 回复帖子对应id */
      parentId: number;

      /** 评论图片 */
      photos?: string;

      /** 食谱id */
      recipeId: number;
    }

    export class BillingAddress {
      /** 单元楼栋 */
      aptUnit?: string;

      /** 市 */
      city?: string;

      /** 州 */
      state?: string;

      /** 街道 */
      street?: string;

      /** 邮编 */
      zipCode?: string;
    }

    export class BoAcceptListOrderDTO {
      /** 配送方式: 1-自提，2-闪送，3-快递 */
      deliveryType?: number;

      /** 最大下单时间 */
      maxOrderTime?: string;

      /** 最大应收金额 */
      maxPrice?: number;

      /** 会员卡号 */
      memberCardNo?: string;

      /** 最小下单时间 */
      minOrderTime?: string;

      /** 最小应收金额 */
      minPrice?: number;

      /** 订单编号 */
      orderId?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 支付单号 */
      paymentId?: string;

      /** 下单渠道 */
      platform?: number;

      /** 门店 */
      storeIds?: Array<number>;

      /** 用户 id */
      userId?: string;

      /** 用户手机号 */
      userPhone?: string;
    }

    export class BoAcceptListOrderItem {
      /** 接单：1-展示接单 */
      acceptType?: number;

      /** 配送方式名称 */
      deliveryTypeDesc?: string;

      /** 预计送达时间 */
      estDeliveredTime?: string;

      /** 会员卡号 */
      memberCardNo?: string;

      /** 订单编号 */
      orderId?: string;

      /** 下单时间 */
      orderTime?: string;

      /** 付款单号 */
      paymentId?: number;

      /** 下单渠道描述 */
      platformDesc?: string;

      /** 状态描述 */
      statusDesc?: string;

      /** 门店名称 */
      storeName?: string;

      /** 订单金额 */
      totalAmount?: number;

      /** 用户 id */
      userId?: number;

      /** 用户手机号 */
      userPhone?: string;
    }

    export class BoAcceptListOrderOptionVO {
      /** 配送方式 */
      deliveryTypeOptions?: Array<defs.order.Option>;

      /** 下单渠道 */
      platformOptions?: Array<defs.order.Option>;

      /** 订单状态 */
      statusOptions?: Array<defs.order.Option>;
    }

    export class BoAcceptOrderDTO {
      /** 订单编号 */
      orderId?: string;
    }

    export class BoBatchReceiveOrderDTO {
      /** 订单列表 */
      orderIds: Array<string>;
    }

    export class BoLackListOptionVO {
      /** 配送方式 */
      deliveryTypeOptions?: Array<defs.order.Option>;

      /** 下单渠道 */
      platformOptions?: Array<defs.order.Option>;
    }

    export class BoLackOrderConfigDTO {
      /** 缺货 - 拣货金额占比 */
      lackAmount: number;

      /** 缺货 - 拣货数量占比 */
      lackQuantity: number;
    }

    export class BoLackOrderConfigVO {
      /** 缺货 - 拣货金额占比 */
      lackAmount?: number;

      /** 缺货 - 拣货数量占比 */
      lackQuantity?: number;
    }

    export class BoListRefundItem {
      /** 售后申请金额 */
      applyPrice?: number;

      /** 售后申请时间 */
      applyTime?: string;

      /** 主售后单号 */
      mainRefundId?: string;

      /** 会员卡号 */
      memberCardNo?: string;

      /** 订单编号 */
      orderId?: string;

      /** 用户电话 */
      phone?: string;

      /** 售后退款金额 */
      refundPrice?: number;

      /** 是否展示：退款入库 */
      showReturnToWarehouse?: boolean;

      /** 售后状态 */
      statusDesc?: string;

      /** 子售后单号 */
      subRefundId?: string;

      /** 用户 id */
      userId?: number;
    }

    export class BoListRefundOptionVO {
      /** 售后状态：tab 选项 */
      quickStatusList?: Array<defs.order.Option>;

      /** 售后状态 */
      statusList?: Array<defs.order.Option>;
    }

    export class BoListRefundPageDTO {
      /** 最大申请金额 */
      maxApplyPrice?: number;

      /** 最大售后时间 */
      maxApplyTime?: string;

      /** 最大退款金额 */
      maxRefundPrice?: number;

      /** 最大退款完成时间 */
      maxRefundTime?: string;

      /** 最小申请金额 */
      minApplyPrice?: number;

      /** 最小售后时间 */
      minApplyTime?: string;

      /** 最小退款金额 */
      minRefundPrice?: number;

      /** 最小退款完成时间 */
      minRefundTime?: string;

      /** 订单编号 */
      orderId?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 用户手机号 */
      phone?: string;

      /** 售后单号 */
      refundId?: string;

      /** 售后状态 */
      status?: number;

      /** 用户 id */
      userId?: number;
    }

    export class BoListReviewAuditItem {
      /** 审核意见 */
      auditComment?: string;

      /** 审核状态: 1-待审核、2-已审核、3-已拒绝 */
      auditStatus?: number;

      /** 审核状态描述 */
      auditStatusDesc?: string;

      /** 审核时间 */
      auditTime?: string;

      /** 审核人姓名 */
      auditUserName?: string;

      /** 评论内容 */
      content?: string;

      /** 审核 id */
      id?: number;

      /** 评论图片 */
      photos?: Array<string>;

      /** 所在位置 */
      sourceDesc?: string;

      /** 提交时间 */
      submitTime?: string;

      /** 会员昵称 */
      userNickName?: string;
    }

    export class BoOrderDetailAdjustment {
      /** 退瓶费调整金额 */
      adjustCrvFee?: number;

      /** 商品调整金额 */
      adjustItemAmount?: number;

      /** 数量调整金额 */
      adjustQuantityAmount?: number;

      /** 税费调整金额 */
      adjustTaxFee?: number;

      /** 调整总金额 */
      adjustTotalAmount?: number;

      /** 重量调整金额 */
      adjustWeightAmount?: number;

      /** 调整商品列表 */
      items?: Array<defs.order.AdjustItem>;
    }

    export class BoOrderDetailBaseInfo {
      /** 授权金额 */
      authedAmount?: number;

      /** 配送方式名称 */
      deliveryTypeDesc?: string;

      /** 会员卡号 */
      memberCardNo?: string;

      /** 商家名称 */
      merchantName?: string;

      /** 商家类型 */
      merchantTypeDesc?: string;

      /** 订单 id */
      orderId?: string;

      /** 下单时间 */
      orderTime?: string;

      /** 退款金额 */
      refundAmount?: number;

      /** 状态下的业务时间 */
      statusBizTime?: string;

      /** 订单状态 */
      statusDesc?: string;

      /** 门店编号 */
      storeId?: number;

      /** 门店名称 */
      storeName?: string;

      /** 应付金额 */
      totalAmount?: number;

      /** 用户 id */
      userId?: number;

      /** 用户手机号 */
      userPhone?: string;
    }

    export class BoOrderDetailCancelItem {
      /** 业务时间 */
      bizTime?: string;

      /** 取消原因 */
      reason?: string;

      /** 取消类型：1-用户取消，2-平台取消 */
      type?: number;

      /** 取消类型描述 */
      typeDesc?: string;
    }

    export class BoOrderDetailDeliveryItem {
      /** 运单号(第三方) */
      deliverId?: string;

      /** 送达图片 */
      deliveredImageUrl?: string;

      /** 送达时间 */
      deliveredTime?: string;

      /** 配送费 */
      deliveryFee?: number;

      /** 配送服务商 */
      deliveryProvider?: string;

      /** 配送起始时间 */
      deliveryStartTime?: string;

      /** 物流信息: deliveryType = 2 */
      deliveryTrackingUrl?: string;

      /** 配送方式: 1-自提，2-闪送，3-快递 */
      deliveryType?: number;

      /** 配送方式名称 */
      deliveryTypeDesc?: string;

      /** 司机小费 */
      driverTip?: number;

      /** 附加配送费 */
      extraFee?: number;

      /** 包裹名称 */
      packageName?: string;

      /** 取货时间 */
      pickUpTime?: string;

      /** 总金额 */
      totalAmount?: number;
    }

    export class BoOrderDetailItem {
      /** ERP Article Number */
      articleNumber?: number;

      /** 是否为赠品 */
      isGift?: boolean;

      /** 订单金额 */
      itemAmount?: number;

      /** 商品主图 */
      mainPic?: string;

      /** 主商品名称 */
      mainProductName?: string;

      /** 拣货金额 */
      pickingAmount?: number;

      /** 拣货数量 */
      pickingQuantity?: number;

      /** 拣货重量 */
      pickingWeigh?: number;

      /** 商品 id */
      productId?: number;

      /** 商品名称 */
      productName?: string;

      /** 商品类型：1-非称重、2-称重 */
      productType?: number;

      /** 下单数量 */
      quantity?: number;

      /** 售价 */
      salePrice?: number;

      /** 子订单 id */
      subOrderId?: number;

      /** 商品规格 */
      uom?: string;

      /** UPC 编码 */
      upc?: string;

      /** 下单重量 */
      weigh?: number;
    }

    export class BoOrderDetailOptLog {
      /** 日志内容 */
      logContent?: string;

      /** 操作时间 */
      optTime?: string;

      /** 操作人 id */
      optUserId?: number;

      /** 操作人姓名 */
      optUserName?: string;
    }

    export class BoOrderDetailPaymentItem {
      /** 金额 */
      amount?: number;

      /** 时间 */
      bizTime?: string;

      /** 业务类型：如预授权/扣款/退款 */
      bizTypeDesc?: string;

      /** 付款渠道 */
      payChannel?: string;

      /** 卡品牌 */
      payMethodBrand?: string;

      /** 卡号后 4 位 */
      payMethodLast4?: string;

      /** 支付方式 */
      payTypeDesc?: string;

      /** 付款单 id */
      paymentId?: string;

      /** 状态 */
      statusDesc?: string;
    }

    export class BoOrderDetailPriceItem {
      /** name */
      name?: string;

      /** price */
      price?: number;
    }

    export class BoOrderDetailShipAddress {
      /** 地址信息 */
      addressInfo?: string;

      /** 收货地址邮编 */
      addressZipCode?: string;

      /** 配送方式: 1-自提，2-闪送，3-快递 */
      deliveryType?: number;

      /** 名字 */
      fistName?: string;

      /** 姓氏 */
      lastName?: string;

      /** 联系电话 */
      phone?: string;

      /** 门店名称 */
      storeName?: string;
    }

    export class BoOrderDetailStatusStep {
      /** 业务时间 */
      bizTime?: string;

      /** 状态描述 */
      statusDesc?: string;

      /** 类型：1-成功，2-失败，3-待处理 */
      type?: number;
    }

    export class BoOrderDetailVO {
      /** 价格调整详情 */
      adjustmentDetail?: defs.order.BoOrderDetailAdjustment;

      /** 订单金额 - 调整后订单金额 */
      afterAdjustPriceItems?: Array<defs.order.BoOrderDetailPriceItem>;

      /** 基本信息 */
      baseInfo?: defs.order.BoOrderDetailBaseInfo;

      /** 订单取消 */
      cancelItem?: defs.order.BoOrderDetailCancelItem;

      /** 配送信息 */
      deliveryItem?: defs.order.BoOrderDetailDeliveryItem;

      /** 优惠列表 */
      discounts?: Array<defs.order.BoOrderDiscount>;

      /** 订单金额 - 初始化订单金额 */
      initPriceItems?: Array<defs.order.BoOrderDetailPriceItem>;

      /** 商品列表 */
      items?: Array<defs.order.BoOrderDetailItem>;

      /** 操作日志 */
      optLogs?: Array<defs.order.BoOrderDetailOptLog>;

      /** 付款信息 */
      paymentItems?: Array<defs.order.BoOrderDetailPaymentItem>;

      /** 退款信息 */
      refunds?: Array<defs.order.PaymentRefund>;

      /** 收货地址 */
      shipAddress?: defs.order.BoOrderDetailShipAddress;

      /** 是否展示价格调整详情 */
      showAdjustmentDetail?: boolean;

      /** 是否展示：调整后订单金额 */
      showAfterAdjustPrice?: boolean;

      /** 状态进度 */
      statusSteps?: Array<defs.order.BoOrderDetailStatusStep>;
    }

    export class BoOrderDiscount {
      /** 优惠对象列表 */
      discountItems?: Array<defs.order.BoOrderDiscountItem>;

      /** 优惠标题 */
      title?: string;
    }

    export class BoOrderDiscountItem {
      /** 优惠后金额 */
      afterDiscountAmount?: number;

      /** 数量 */
      count?: number;

      /** 优惠金额 */
      discountAmount?: number;

      /** 名称 */
      name?: string;

      /** 起始金额 */
      startAmount?: number;
    }

    export class BoOrderLackDetailItem {
      /** 后台分类 */
      backendCategoryName?: string;

      /** main upc */
      mainUpc?: string;

      /** 订单金额 */
      orderItemAmount?: number;

      /** 下单数量 */
      orderQuantity?: number;

      /** 下单重量 */
      orderWeight?: number;

      /** 实际拣货金额 */
      pickingItemAmount?: number;

      /** 实际拣货数量 */
      pickingQuantity?: number;

      /** 拣货结果 */
      pickingResult?: string;

      /** 实际拣货重量 */
      pickingWeight?: number;

      /** 商品 id */
      productId?: number;

      /** 商品名称 */
      productName?: string;

      /** 商品类型：1-非称重、2-称重 */
      productType?: number;

      /** 商品类型 */
      productTypeDesc?: string;

      /** upc */
      upc?: string;
    }

    export class BoOrderLackDetailVO {
      /** 商品列表 */
      items?: Array<defs.order.BoOrderLackDetailItem>;

      /** 订单编号 */
      orderId?: string;

      /** 状态描述 */
      statusDesc?: string;

      /** 门店名称 */
      storeName?: string;
    }

    export class BoOrderLackListDTO {
      /** 配送方式: 1-自提，2-闪送，3-快递 */
      deliveryType?: number;

      /** 最大下单时间 */
      maxOrderTime?: string;

      /** 最大应收金额 */
      maxPrice?: number;

      /** 会员卡号 */
      memberCardNo?: string;

      /** 最小下单时间 */
      minOrderTime?: string;

      /** 最小应收金额 */
      minPrice?: number;

      /** 订单编号 */
      orderId?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 付款单号 */
      paymentId?: string;

      /** 下单渠道 */
      platform?: number;

      /** 门店 */
      storeIds?: Array<number>;

      /** 用户 id */
      userId?: string;

      /** 用户手机号 */
      userPhone?: string;
    }

    export class BoOrderLackListItem {
      /** 配送方式 */
      deliveryTypeDesc?: string;

      /** 会员卡号 */
      memberCardNo?: string;

      /** 订单 ID */
      orderId?: string;

      /** orderTime */
      orderTime?: string;

      /** 付款单号 */
      paymentId?: string;

      /** 下单渠道 */
      platformDesc?: string;

      /** 应收金额 */
      shouldReceiveAmount?: number;

      /** 订单状态 */
      statusDesc?: string;

      /** 门店名称 */
      storeName?: string;

      /** 用户 ID */
      userId?: number;

      /** 用户手机号 */
      userPhone?: string;
    }

    export class BoOrderListExportDTO {
      /** 订单 id 列表 */
      orderIds: Array<string>;
    }

    export class BoOrderListOptionVO {
      /** 扣款状态 */
      captureStatusOptions?: Array<defs.order.Option>;

      /** 配送方式 */
      deliveryTypeOptions?: Array<defs.order.Option>;

      /** 下单渠道 */
      platformOptions?: Array<defs.order.Option>;

      /** 订单状态 */
      statusOptions?: Array<defs.order.Option>;
    }

    export class BoOrderListOrderDTO {
      /** 扣款状态 */
      captureStatus?: number;

      /** 配送方式: 1-自提，2-闪送，3-快递 */
      deliveryType?: number;

      /** 最大扣款时间 */
      maxCaptureTime?: string;

      /** 最大下单时间 */
      maxOrderTime?: string;

      /** 最大应收金额 */
      maxPrice?: number;

      /** 会员卡号 */
      memberCardNo?: string;

      /** 最小扣款时间 */
      minCaptureTime?: string;

      /** 最小下单时间 */
      minOrderTime?: string;

      /** 最小应收金额 */
      minPrice?: number;

      /** 订单编号 */
      orderId?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 支付单号 */
      paymentId?: string;

      /** 下单渠道 */
      platform?: number;

      /** 订单状态 */
      status?: number;

      /** 门店 */
      storeIds?: Array<number>;

      /** 用户 id */
      userId?: string;

      /** 用户手机号 */
      userPhone?: string;
    }

    export class BoOrderListOrderItem {
      /** 收货地址 */
      address?: string;

      /** 取消退款状态：7-失败 */
      cancelRefundStatus?: number;

      /** 取消退款状态描述 */
      cancelRefundStatusDesc?: string;

      /** 扣款状态：4-失败 */
      captureStatus?: number;

      /** 扣款状态描述 */
      captureStatusDesc?: string;

      /** 配送备注 */
      deliveryNote?: string;

      /** 自提/送达时间 */
      deliveryTime?: string;

      /** 配送方式名称 */
      deliveryTypeDesc?: string;

      /** 是否缺货订单：0-否，1-是，2-无 */
      isLack?: number;

      /** 是否超时订单：0-否，1-是，2-无 */
      isOvertime?: number;

      /** 是否拣货超时：0-否，1-是，2-无 */
      isPickOvertime?: number;

      /** 会员卡号 */
      memberCardNo?: string;

      /** 订单编号 */
      orderId?: string;

      /** 订单备注 */
      orderNote?: string;

      /** 下单时间 */
      orderTime?: string;

      /** 付款单号 */
      paymentId?: number;

      /** 拣货：1-展示拣货 */
      pickingType?: number;

      /** 下单渠道描述 */
      platformDesc?: string;

      /** 是否展示：取消订单 */
      showCancelBtn?: boolean;

      /** 是否展示：退款申请 */
      showRefundBtn?: boolean;

      /** 状态描述 */
      statusDesc?: string;

      /** 门店 id */
      storeId?: number;

      /** 门店名称 */
      storeName?: string;

      /** 订单金额 */
      totalAmount?: number;

      /** 用户 id */
      userId?: number;

      /** 用户手机号 */
      userPhone?: string;
    }

    export class BoOrderListPickingDTO {
      /** orderId */
      orderId?: string;
    }

    export class BoOrderListRefundDTO {
      /** 商品列表 */
      items?: Array<defs.order.Item>;

      /** 订单 id */
      orderId?: string;

      /** 退款原因 */
      reason?: string;
    }

    export class BoOrderListRefundItem {
      /** 商品主图 */
      mainPic?: string;

      /** 主 upc */
      mainUpc?: string;

      /** 商品 id */
      productId?: number;

      /** 商品名称 */
      productName?: string;

      /** 商品类型：1-非称重、2-称重 */
      productType?: number;

      /** 数量 */
      quantity?: number;

      /** 净重单价 */
      retailPrice?: number;

      /** 单件售价 */
      salePrice?: number;

      /** 金额 */
      totalAmount?: number;

      /** 规格名称 */
      variantName?: string;

      /** 重量 */
      weight?: number;

      /** 重量单位 */
      weightUom?: string;
    }

    export class BoOrderListRefundProductVO {
      /** 商品列表 */
      items?: Array<defs.order.BoOrderListRefundItem>;

      /** 订单编号 */
      orderId?: string;

      /** 状态描述 */
      statusDesc?: string;

      /** 门店名称 */
      storeName?: string;
    }

    export class BoOrderOvertimeDetailVO {
      /** 收货地址 */
      address?: string;

      /** 配送费列表 */
      deliveryFeeList?: Array<defs.order.BoOrderOvertimeFee>;

      /** 配送费合计 */
      deliveryFeeTotal?: number;

      /** 预计送达时间 */
      estDeliveredTime?: string;

      /** 订单 id */
      orderId?: string;

      /** 超时时间（min） */
      overtime?: number;

      /** 订单状态 */
      statusDesc?: string;

      /** 门店名称 */
      storeName?: string;
    }

    export class BoOrderOvertimeFee {
      /** 费用金额 */
      amount?: number;

      /** 费用名称 */
      name?: string;
    }

    export class BoOrderOvertimeListDTO {
      /** 最大下单时间 */
      maxOrderTime?: string;

      /** 最大超时时间 */
      maxOverTime?: number;

      /** 最大应收金额 */
      maxPrice?: number;

      /** 会员卡号 */
      memberCardNo?: string;

      /** 最小下单时间 */
      minOrderTime?: string;

      /** 最小超时时间 */
      minOvertime?: number;

      /** 最小应收金额 */
      minPrice?: number;

      /** 订单编号 */
      orderId?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 付款单号 */
      paymentId?: string;

      /** 下单渠道 */
      platform?: number;

      /** 是否选中：附加配送费订单 */
      selectAddDriverTip?: boolean;

      /** 门店 */
      storeIds?: Array<number>;

      /** 用户 id */
      userId?: string;

      /** 用户手机号 */
      userPhone?: string;
    }

    export class BoOrderOvertimeListItem {
      /** 附加配送费 */
      addDriverTip?: number;

      /** 配送费 */
      deliveryFee?: number;

      /** 配送费合计 */
      deliveryTotal?: number;

      /** 配送方式 */
      deliveryTypeDesc?: string;

      /** 配送小费 */
      driverTip?: number;

      /** 预计送达时间 */
      estDeliveredTime?: string;

      /** 司机是否接单 */
      isDriverTake?: boolean;

      /** 会员卡号 */
      memberCardNo?: string;

      /** 订单 ID */
      orderId?: string;

      /** orderTime */
      orderTime?: string;

      /** 超时时长 */
      overtime?: number;

      /** 付款单号 */
      paymentId?: string;

      /** 下单渠道 */
      platformDesc?: string;

      /** 应收金额 */
      shouldReceiveAmount?: number;

      /** 是否展示：附加配送费 */
      showAddDeliveryFee?: boolean;

      /** 是否展示：操作日志 */
      showOptLog?: boolean;

      /** 订单状态 */
      statusDesc?: string;

      /** 门店名称 */
      storeName?: string;

      /** 用户 ID */
      userId?: number;

      /** 用户手机号 */
      userPhone?: string;
    }

    export class BoOrderOvertimeOptLog {
      /** 附加金额 */
      addAmount?: number;

      /** 操作名称 */
      optName?: string;

      /** 操作时间 */
      optTime?: string;

      /** 操作人姓名 */
      optUserName?: string;
    }

    export class BoOvertimeListOptionVO {
      /** 下单渠道 */
      platformOptions?: Array<defs.order.Option>;
    }

    export class BoRefundAuditDTO {
      /** 同意原因 */
      agreeReason?: string;

      /** 同意退款商品项 id */
      agreeRefundItemIds?: Array<number>;

      /** 拒绝原因 */
      rejectReason?: string;

      /** 拒绝退款商品项 id */
      rejectRefundItemIds?: Array<number>;

      /** 选中：配送费 */
      selectDeliveryFee?: boolean;

      /** 选中：司机小费 */
      selectDriverTipFee?: boolean;

      /** 选中：退服务费 */
      selectServiceFee?: boolean;

      /** 子售后单 id */
      subRefundId?: string;
    }

    export class BoRefundDetailInfo {
      /** 售后申请金额 */
      applyPrice?: number;

      /** 售后申请时间 */
      applyTime?: string;

      /** 主售后单 */
      mainRefundId?: string;

      /** 会员卡号 */
      memberCardNo?: string;

      /** 订单编号 */
      orderId?: string;

      /** 用户电话 */
      phone?: string;

      /** 退款渠道 */
      refundChannel?: string;

      /** 售后退款金额 */
      refundPrice?: number;

      /** 退款方式 */
      refundWay?: string;

      /** 是否展示：退款渠道 */
      showRefundChannel?: boolean;

      /** 是否展示：售后退款金额 */
      showRefundPrice?: boolean;

      /** 是否展示：退款方式 */
      showRefundWay?: boolean;

      /** 是否展示：子售后单号 */
      showSubRefundId?: boolean;

      /** 售后状态描述 */
      statusDesc?: string;

      /** 售后状态时间 */
      statusTime?: string;

      /** 子售后单号 */
      subRefundId?: string;

      /** 用户 id */
      userId?: number;
    }

    export class BoRefundDetailItem {
      /** 申请退款金额 */
      applyPrice?: number;

      /** 后台分类 */
      backendCategoryName?: string;

      /** 退款说明 */
      comment?: string;

      /** 商品 id */
      productId?: number;

      /** 商品名称 */
      productName?: string;

      /** 商品类型 */
      productTypeDesc?: string;

      /** 数量 */
      quantity?: number;

      /** 退款原因 */
      reasonDesc?: string;

      /** 实收金额 */
      receivedPrice?: number;

      /** 售后商品项 id */
      refundItemId?: number;

      /** 凭证图片 */
      refundPictures?: Array<string>;

      /** 实际退款金额 */
      refundPrice?: number;

      /** 零售价 */
      retailPrice?: number;

      /** 退货商品确认描述 */
      returnConfirmComment?: string;

      /** 退货商品确认图片 */
      returnConfirmPictures?: Array<string>;

      /** 是否展示：实际退款金额 */
      showRefundPrice?: boolean;

      /** 是否展示：退货商品确认描述 */
      showReturnConfirmComment?: boolean;

      /** 是否展示：退货商品确认图片 */
      showReturnConfirmPicture?: boolean;

      /** 是否展示：售后状态 */
      showStatusDesc?: boolean;

      /** 售后状态 */
      statusDesc?: string;

      /** 商品 UPC */
      upc?: string;
    }

    export class BoRefundDetailPrice {
      /** 退瓶费 */
      crvFee?: number;

      /** 配送费 */
      deliveryFee?: number;

      /** 司机小费 */
      driverTip?: number;

      /** 商品金额 */
      itemAmount?: number;

      /** 积分余额 */
      pointsBalance?: number;

      /** 退回已发放积分 */
      refundIssuedPoints?: number;

      /** 退回已使用积分 */
      refundUsedPoints?: number;

      /** 服务费 */
      serviceFee?: number;

      /** 是否展示：积分信息 */
      showPointsInfo?: boolean;

      /** 税费 */
      taxFee?: number;

      /** 合计退款金额 */
      totalRefund?: number;
    }

    export class BoRefundDetailVO {
      /** 操作日志 */
      optLogs?: Array<defs.order.BoRefundOptLog>;

      /** 退款信息 */
      paymentRefunds?: Array<defs.order.PaymentRefund>;

      /** 售后信息 */
      refundInfo?: defs.order.BoRefundDetailInfo;

      /** 售后商品列表 */
      refundItems?: Array<defs.order.BoRefundDetailItem>;

      /** 退款金额 */
      refundPriceInfo?: defs.order.BoRefundDetailPrice;

      /** 退款类型：1-仅退款，2-退货退款 */
      refundType?: number;

      /** 是否展示：退款信息 */
      showPaymentRefund?: boolean;

      /** 是否展示：退款审核按钮 */
      showRefundAuditButton?: boolean;

      /** 是否展示：退款金额 */
      showRefundPriceInfo?: boolean;

      /** 是否展示：类型审核按钮 */
      showTypeAuditButton?: boolean;
    }

    export class BoRefundOptLog {
      /** 操作名称 */
      optName?: string;

      /** 操作时间 */
      optTime?: string;

      /** 操作人 id */
      optUserId?: number;

      /** 操作人姓名 */
      optUserName?: string;
    }

    export class BoRefundPeriodConfigDTO {
      /** 售后期限（天） */
      refundPeriod: number;
    }

    export class BoRefundPeriodConfigVO {
      /** 售后期限（天） */
      refundPeriod?: number;
    }

    export class BoRefundTypeAuditDTO {
      /** 类型审核结果：1-无需退回商品，2-需退回商品 */
      auditResult?: number;

      /** boUserName */
      boUserName?: string;

      /** 售后单号 */
      mainRefundId?: string;

      /** 售后商品项 id */
      refundItemIds?: Array<number>;
    }

    export class CancelDetailVO {
      /** 收货地址 */
      address?: defs.order.Address;

      /** 授权金额 */
      authedPrice?: number;

      /** 账单地址 */
      billingAddress?: defs.order.BillingAddress;

      /** 联系人 */
      contact?: defs.order.Contact;

      /** 配送备注 */
      deliveryNote?: string;

      /** 自提/配送时间 */
      deliveryTime?: defs.order.OrderDeliveryTime;

      /** 配送类型：1-自提，2-闪送，3-直邮 */
      deliveryType?: number;

      /** 配送方式名称 */
      deliveryTypeDesc?: string;

      /** 预计送达时间 */
      estArrivalTime?: string;

      /** 礼物信息 */
      gift?: defs.order.GiftInfo;

      /** 商品列表 */
      items?: Array<defs.order.OrderItem>;

      /** 下单日期 */
      orderDate?: string;

      /** 订单编号 */
      orderId?: string;

      /** 订单备注 */
      orderNote?: string;

      /** 费用信息 */
      refundDetail?: defs.order.OrderSummary;

      /** 退款信息 */
      refundInfo?: defs.order.RefundInfo;

      /** 退款账户 */
      refundTo?: defs.order.RefundTo;

      /** 快递选项 */
      shipOption?: defs.order.ShipOption;

      /** 状态 */
      status?: number;

      /** 状态描述 */
      statusDesc?: string;

      /** 门店信息 */
      store?: defs.order.Store;

      /** 灰色标题 */
      title?: string;
    }

    export class CardSetupIntentVO {
      /** 客户端密钥 */
      clientSecret?: string;
    }

    export class CardVO {
      /** 单元/楼栋 */
      aptUnit?: string;

      /** 卡类型，如 Visa */
      brand?: string;

      /** 城市 */
      city?: string;

      /** 过期月份 */
      expMonth?: number;

      /** 过期年份 */
      expYear?: number;

      /** id */
      id?: number;

      /** 是否默认 */
      isDefault?: boolean;

      /** 卡号后四位 */
      last4?: string;

      /** 姓名 */
      name?: string;

      /** 手机号 */
      phone?: string;

      /** 州 */
      state?: string;

      /** 街道 */
      street?: string;

      /** 邮编 */
      zipCode?: string;
    }

    export class ColorTitle {
      /** 关键字 */
      keyword?: string;

      /** 关键字颜色 */
      keywordColor?: string;

      /** 标题 */
      title?: string;
    }

    export class ComputePartRefundDTO {
      /** 售后商品列表 */
      items?: Array<defs.order.Item>;

      /** 订单编号 */
      orderId?: string;
    }

    export class ComputeRefundInfo {
      /** 配送方式名称 */
      deliveryTypeDesc?: string;

      /** 下单日期 */
      orderDate?: string;

      /** 订单编号  */
      orderId?: string;
    }

    export class ComputeRefundVO {
      /** 退款详情 */
      refundDetail?: defs.order.RefundDetail;

      /** 退款信息 */
      refundInfo?: defs.order.ComputeRefundInfo;

      /** 退款账户 */
      refundTo?: defs.order.RefundTo;
    }

    export class Contact {
      /** 名字 */
      firstName?: string;

      /** 姓氏 */
      lastName?: string;

      /** 手机号 */
      phone?: string;
    }

    export class DeliveryInfo {
      /** 送达图片 */
      deliveredImageUrl?: string;

      /** 物流轨迹 URL */
      deliveryTrackingUrl?: string;

      /** 第三方运单号 */
      thirdId?: string;
    }

    export class DigitalReceiptVO {
      /** 收货地址 & 联系人 */
      address?: defs.order.Address;

      /** 基础信息 */
      information?: defs.order.ReceiptOrderInfo;

      /** 缺货商品 */
      lackItems?: Array<defs.order.ReceiptItem>;

      /** 正常商品 */
      normalItems?: Array<defs.order.ReceiptItem>;

      /** 退款商品 */
      refundItems?: Array<defs.order.ReceiptItem>;

      /** 门店 */
      store?: defs.order.Store;

      /** 费用信息 */
      summary?: defs.order.ReceiptSummary;
    }

    export class EditCardDTO {
      /** 单元/楼栋 */
      aptUnit?: string;

      /** 银行卡 id */
      cardId: number;

      /** 城市 */
      city: string;

      /** 过期月份 */
      expMonth: number;

      /** 过期年份 */
      expYear: number;

      /** 是否默认 */
      isDefault?: boolean;

      /** 姓名 */
      name: string;

      /** 手机号 */
      phone?: string;

      /** 州 */
      state: string;

      /** 街道 */
      street: string;

      /** 邮编 */
      zipCode: string;
    }

    export class EditRecipeCategoryRequest {
      /** icon图标 */
      icon: string;

      /** id */
      id: number;

      /** 英文名称 */
      nameEnUs: string;

      /** 中文名称 */
      nameZhCn: string;

      /** 繁体名称 */
      nameZhTw: string;

      /** 排序 */
      sort: number;
    }

    export class EditRecipeRequest {
      /** 分类id */
      categoryId: number;

      /** 英文-内容 */
      contentEnUs: string;

      /** contentZhCn */
      contentZhCn: string;

      /** 繁体-内容 */
      contentZhTw: string;

      /** 烹饪时间(单位:分钟) */
      cookingTime?: number;

      /** 描述信息 */
      description: string;

      /** id */
      id: number;

      /** 关键词 */
      keyword: string;

      /** 素材 */
      materialList?: Array<defs.order.RecipeMaterialVo>;

      /** 商品信息 */
      productList?: Array<defs.order.RecipeProductVo>;

      /** SEO标题 */
      seoTitle: string;

      /** 排序 */
      sort: number;

      /** 英文-标题 */
      titleEnUs: string;

      /** 中文-标题 */
      titleZhCn: string;

      /** 繁体-标题 */
      titleZhTw: string;
    }

    export class EditStatusRequest {
      /** id */
      id: number;

      /** 状态 1: 禁用 2: 启用 */
      status: number;
    }

    export class ExportOrderDaySummaryDTO {
      /** 渠道类型 */
      channel?: number;

      /** 选中导出的 id */
      ids?: Array<number>;

      /** 最小日期 */
      maxBizTime?: string;

      /** 最小日期 */
      minBizTime?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 门店编码 */
      storeId?: number;
    }

    export class ExportOrderItemListDTO {
      /** 扣款时间-结束 */
      captureTimeEnd?: string;

      /** 扣款时间-开始 */
      captureTimeStart?: string;

      /** 渠道类型/OMS类型 */
      channelType?: number;

      /** 下单时间-结束 */
      createdTimeEnd?: string;

      /** 下单时间-开始 */
      createdTimeStart?: string;

      /** 订单完成时间-结束 */
      deliveredTimeEnd?: string;

      /** 订单完成时间-开始 */
      deliveredTimeStart?: string;

      /** 订单行编码 */
      id?: number;

      /** 订单号 */
      orderId?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 店铺编码 */
      storeId?: number;

      /** 选中导出的子订单（商品）id */
      subOrderIds?: Array<number>;

      /** 用户ID */
      userId?: number;
    }

    export class ExportOrderListDTO {
      /** 扣款状态 */
      captureStatus?: number;

      /** 订单扣款时间-结束 */
      captureTimeEnd?: string;

      /** 订单扣款时间-开始 */
      captureTimeStart?: string;

      /** 渠道类型 */
      channelType?: number;

      /** 订单创建时间-结束 */
      createdTimeEnd?: string;

      /** 订单创建时间-开始 */
      createdTimeStart?: string;

      /** 订单完成时间-结束 */
      deliveredTimeEnd?: string;

      /** 订单完成时间-开始 */
      deliveredTimeStart?: string;

      /** 订单号 */
      id?: string;

      /** 选中导出的订单 id */
      orderIds?: Array<string>;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 订单状态 */
      status?: number;

      /** 店铺编码 */
      storeId?: number;

      /** 用户编码/ID */
      userId?: number;

      /** 用户手机号 */
      userPhone?: string;
    }

    export class GiftInfo {
      /** 是否为礼物 */
      isGift?: boolean;

      /** 礼物备注 */
      remark?: string;
    }

    export class Item {
      /** 商品主 upc */
      mainUpc?: string;

      /** 售后数量 */
      quantity?: number;
    }

    export class ListOrderItem {
      /** 配送方式描述 */
      deliveryTypeDesc?: string;

      /** 商品数量 */
      itemNum?: number;

      /** 商品图片列表 */
      mainPics?: Array<string>;

      /** 订单 id */
      orderId?: string;

      /** 下单时间 */
      orderTime?: string;

      /** 订单金额 */
      totalAmount?: number;
    }

    export class ListOrderPageDTO {
      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** tab 选项值 */
      tab?: number;
    }

    export class ListOrderPageItem {
      /** 配送方式: 1-自提，2-闪送，3-快递 */
      deliveryType?: number;

      /** 配送方式描述 */
      deliveryTypeDesc?: string;

      /** 商品数量 */
      itemNum?: number;

      /** 商品图片列表 */
      mainPics?: Array<string>;

      /** 下单日期 */
      orderDate?: string;

      /** 订单编号 */
      orderNum?: string;

      /** 订单状态 */
      statusDesc?: string;

      /** 订单总金额 */
      totalAmount?: number;
    }

    export class ListProductReviewDTO {
      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 商品 id */
      productId?: number;
    }

    export class ListRefundPageDTO {
      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;
    }

    export class ListRefundPageItem {
      /** 业务单号 */
      bizNo?: string;

      /** 业务时间 */
      bizTime?: string;

      /** 业务类型: 1-售后，2-取消 */
      bizType?: number;

      /** 配送方式: 1-自提，2-闪送，3-快递 */
      deliveryType?: number;

      /** 配送方式描述 */
      deliveryTypeDesc?: string;

      /** 商品数量 */
      itemNum?: number;

      /** 商品图片列表 */
      mainPics?: Array<string>;

      /** 售后状态 */
      statusDesc?: string;

      /** 售后总金额 */
      totalAmount?: number;
    }

    export class ListReviewCountVO {
      /** 状态数量列表 */
      statusCounts?: Array<defs.order.StatusCount>;
    }

    export class ListReviewItem {
      /** 评价内容 */
      description?: string;

      /** 订单 id */
      orderId?: string;

      /** 下单时间 */
      orderTime?: string;

      /** 评价图片 */
      photos?: Array<string>;

      /** 评论时间 */
      reviewTime?: string;

      /** 评价星级 */
      star?: number;

      /** 会员头像 */
      userAvatar?: string;

      /** 会员昵称 */
      userNickName?: string;
    }

    export class ListReviewOptionVO {
      /** 审核结果 */
      auditResultList?: Array<defs.order.Option>;

      /** 审核状态 */
      auditStatusList?: Array<defs.order.Option>;
    }

    export class ListReviewPageDTO {
      /** 审核状态 */
      auditStatus?: number;

      /** 最大提交时间 */
      maxSubmitTime?: string;

      /** 最小提交时间 */
      minSubmitTime?: string;

      /** 会员昵称 */
      nickName?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 来源(1:商品评论 2:食谱评论) */
      source?: string;
    }

    export class ListSubOrderDTO {
      /** 订单 id */
      orderId?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;
    }

    export class ListSubOrderItem {
      /** 商品主图 */
      mainPic?: string;

      /** 金额 */
      price?: number;

      /** 商品名称 */
      productName?: string;

      /** 数量 */
      quantity?: number;

      /** 子订单 id */
      subOrderId?: number;

      /** 售卖单位 */
      uom?: string;

      /** 规格名称 */
      variantNameEn?: string;
    }

    export class ListToReviewOrderDTO {
      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 商品 id */
      productId?: number;
    }

    export class NewCardDTO {
      /** 是否默认 */
      isDefault?: boolean;

      /** 支付方式编号（如：Stripe 的 payment_method，即 paymentMethodId） */
      paymentMethodNo?: string;
    }

    export class Option {
      /** label */
      label?: string;

      /** value */
      value?: object;
    }

    export class OrderAdjustDetailVO {
      /** 配送地址 */
      address?: defs.order.Address;

      /** 调价信息 */
      adjustment?: defs.order.Adjustment;

      /** 授权金额 */
      authedPrice?: number;

      /** 联系人 */
      contact?: defs.order.Contact;

      /** 礼物信息 */
      gift?: defs.order.GiftInfo;

      /** 是否展示退款：true-展示，false-不展示 */
      hasRefund?: boolean;

      /** 订单信息 */
      information?: defs.order.OrderInfo;

      /** 商品信息 */
      items?: Array<defs.order.AdjustmentItem>;

      /** 支付信息 */
      payment?: defs.order.OrderPayment;

      /** 退款信息 */
      refund?: defs.order.AdjustRefund;

      /** 退款提示时间 */
      refundTipTime?: string;

      /** 快递选项 */
      shipOption?: defs.order.ShipOption;
    }

    export class OrderCompleteDelivery {
      /** 地址信息 */
      address?: defs.order.Address;

      /** 配送备注 */
      deliveryInstruction?: string;

      /** 配送时间 */
      deliveryTime?: defs.order.OrderDeliveryTime;

      /** 商品列表（APP） */
      items?: Array<defs.order.OrderItem>;

      /** 订单备注 */
      orderNote?: string;

      /** 支付信息 */
      payment?: defs.order.OrderPayment;

      /** 节省金额 */
      savedAmount?: number;

      /** 费用信息 */
      summary?: defs.order.OrderCompleteSummary;
    }

    export class OrderCompleteExpress {
      /** 地址信息 */
      address?: defs.order.Address;

      /** 配送备注 */
      deliveryInstruction?: string;

      /** 预估送达时间 */
      estimateDate?: string;

      /** 礼物信息 */
      gift?: defs.order.GiftInfo;

      /** 商品列表（APP） */
      items?: Array<defs.order.OrderItem>;

      /** 订单备注 */
      orderNote?: string;

      /** 支付信息 */
      payment?: defs.order.OrderPayment;

      /** 节省金额 */
      savedAmount?: number;

      /** 快递选项 */
      shipOption?: defs.order.ShipOption;

      /** 费用信息 */
      summary?: defs.order.OrderCompleteSummary;
    }

    export class OrderCompletePickup {
      /** 联系人 */
      contact?: defs.order.Contact;

      /** 商品列表 */
      items?: Array<defs.order.OrderItem>;

      /** 订单备注 */
      orderNote?: string;

      /** 支付信息 */
      payment?: defs.order.OrderPayment;

      /** 自提码 */
      pickupCode?: string;

      /** 自提时间 */
      pickupTime?: defs.order.OrderDeliveryTime;

      /** 节省金额 */
      savedAmount?: number;

      /** 门店信息 */
      store?: defs.order.Store;

      /** 费用信息 */
      summary?: defs.order.OrderCompleteSummary;
    }

    export class OrderCompleteSummary {
      /** 调整金额 */
      adjustPrice?: number;

      /** 退瓶费 */
      beverageContainerFee?: number;

      /** 配送费（运费） */
      deliveryFee?: number;

      /** 优惠金额 */
      discount?: number;

      /** 配送小费（闪送） */
      driverTip?: number;

      /** 临时加收 */
      estItemAdjustment?: number;

      /** 预估总金额 */
      estTotal?: number;

      /** 授权金额 */
      grandTotal?: number;

      /** 积分抵扣 */
      pointDeduction?: number;

      /** 节省金额 */
      savedAmount?: number;

      /** 服务费（闪送） */
      serviceFee?: number;

      /** 运费（快递） */
      shippingFee?: number;

      /** 商品总金额 */
      subTotalAmount?: number;

      /** 税费 */
      taxFee?: number;
    }

    export class OrderCompleteVO {
      /** 订单完成信息 - 闪送 */
      delivery?: defs.order.OrderCompleteDelivery;

      /** 配送方式：1-自提，2-闪送，3-快递 */
      deliveryType?: number;

      /** 订单完成信息 - 快递 */
      express?: defs.order.OrderCompleteExpress;

      /** 订单编号 */
      orderId?: string;

      /** 订单完成信息 - 自提 */
      pickup?: defs.order.OrderCompletePickup;
    }

    export class OrderDaySummaryItem {
      /** 附加配送费 */
      addDeliveryFee?: number;

      /** 业务日期 */
      bizDate?: string;

      /** 扣款金额 */
      captureAmount?: number;

      /** 渠道类型 */
      channelTypeDesc?: string;

      /** 公司编码 */
      companyCode?: string;

      /** 公司名称 */
      companyName?: string;

      /** 退瓶费 */
      crvFee?: number;

      /** 配送费 */
      deliveryFee?: number;

      /** 司机小费 */
      driverTip?: number;

      /** id */
      id?: number;

      /** 临时加收 */
      itemAdjustAmount?: number;

      /** 商品总价 */
      itemAmount?: number;

      /** 订单总计 */
      orderTotal?: number;

      /** 授权金额 */
      payAmount?: number;

      /** 捡货调整金额 */
      pickingAdjustAmount?: number;

      /** 平台扣点(定额) */
      platformDeductionFixed?: number;

      /** 平台扣点 % */
      platformDeductionPct?: number;

      /** 平台优惠 */
      platformDiscount?: number;

      /** 积分抵扣 */
      pointsDeduction?: number;

      /** 服务费 */
      serviceFee?: number;

      /** 分账金额 */
      shareAmount?: number;

      /** 门店优惠 */
      storeDiscount?: number;

      /** 门店 id */
      storeId?: number;

      /** 门店名称 */
      storeName?: string;

      /** 税费 */
      taxFee?: number;

      /** 所属时区 */
      timeZone?: string;
    }

    export class OrderDaySummaryOptionsVO {
      /** 渠道类型 */
      channels?: Array<defs.order.Option>;

      /** 门店编码 */
      storeCodes?: Array<defs.order.Option>;
    }

    export class OrderDaySummaryPageDTO {
      /** 渠道类型 */
      channel?: number;

      /** 最小日期 */
      maxBizTime?: string;

      /** 最小日期 */
      minBizTime?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 门店编码 */
      storeId?: number;
    }

    export class OrderDeliver {
      /** 闪送信息 */
      deliveryInfo?: defs.order.DeliveryInfo;

      /** 配送方式: 1-自提，2-闪送，3-快递 */
      deliveryType?: number;

      /** 自提信息 */
      pickupInfo?: defs.order.PickupInfo;

      /** 是否展示：闪送信息 */
      showDelivery?: boolean;

      /** 是否展示：自提信息 */
      showPickup?: boolean;

      /** 是否展示：快递信息 */
      showShip?: boolean;
    }

    export class OrderDeliveryTime {
      /** 截止时间 */
      endTime?: string;

      /** 开始时间 */
      startTime?: string;
    }

    export class OrderDetailVO {
      /** 收货地址 */
      address?: defs.order.Address;

      /** 联系人 */
      contact?: defs.order.Contact;

      /** 物流信息 */
      deliver?: defs.order.OrderDeliver;

      /** 送达时间 */
      deliveredTime?: string;

      /** 配送备注 */
      deliveryNote?: string;

      /** 自提/配送时间 */
      deliveryTime?: defs.order.OrderDeliveryTime;

      /** 配送类型：1-自提，2-闪送，3-直邮 */
      deliveryType?: number;

      /** 配送方式名称 */
      deliveryTypeDesc?: string;

      /** 预计送达时间（快递） */
      estArrivalTime?: string;

      /** 礼物信息 */
      gift?: defs.order.GiftInfo;

      /** 订单信息 */
      information?: defs.order.OrderInfo;

      /** 商品信息 */
      items?: Array<defs.order.OrderItem>;

      /** 下单日期 */
      orderDate?: string;

      /** 订单编号 */
      orderId?: string;

      /** 订单备注 */
      orderNote?: string;

      /** 支付信息 */
      payment?: defs.order.OrderPayment;

      /** 快递选项 */
      shipOption?: defs.order.ShipOption;

      /** 是否展示: Adjustment & Refund */
      showAdjustmentAndRefund?: boolean;

      /** 是否展示: Apply Refund */
      showApplyRefund?: boolean;

      /** 是否展示: Cancel Order */
      showCancel?: boolean;

      /** 是否展示：电子发票 */
      showDigitalReceipt?: boolean;

      /** 是否展示：超过售后时效说明 */
      showExceedRefundDesc?: boolean;

      /** 是否展示: Reorder */
      showReorder?: boolean;

      /** 是否展示：取消退款详情 */
      showViewRefundDetail?: boolean;

      /** 状态：8-已送达、9-已取消 */
      status?: number;

      /** 状态名称 */
      statusDesc?: string;

      /** 门店信息 */
      store?: defs.order.Store;

      /** 子标题 */
      subTitle?: string;

      /** 费用信息 */
      summary?: defs.order.OrderSummary;

      /** 标题 */
      title?: string;
    }

    export class OrderInfo {
      /** 配送说明 */
      deliveryNote?: string;

      /** 配送方式 */
      deliveryType?: number;

      /** 配送方式名称 */
      deliveryTypeDesc?: string;

      /** 下单日期 */
      orderDate?: string;

      /** 订单编号 */
      orderId?: string;

      /** 订单备注 */
      orderNote?: string;

      /** 支付信息 */
      paymentDesc?: string;
    }

    export class OrderItem {
      /** 调整价格 */
      adjustPrice?: number;

      /** 调整数量 */
      adjustQuantity?: number;

      /** 调价类型：0-无、1-数量、2-重量、3-重量和数量 */
      adjustType?: number;

      /** 调整重量 */
      adjustWeigh?: number;

      /** 是否缺货 */
      isOutOfStock?: boolean;

      /** 商品金额 */
      itemAmount?: number;

      /** 商品主图 */
      mainPic?: string;

      /** 市场价格 */
      marketPrice?: number;

      /** 商品净重 */
      netWeight?: number;

      /** 净重单位 */
      netWeightUom?: string;

      /** 商品名称 */
      productName?: string;

      /** 商品类型：1-非称重、2-称重 */
      productType?: number;

      /** 促销商品 */
      promotionItem?: defs.order.OrderItem;

      /** 促销商品金额 */
      promotionItemAmount?: number;

      /** 促销净重单价 */
      promotionRetailPrice?: number;

      /** 促销售价 */
      promotionSalePrice?: number;

      /** 促销提示：如买一送一 */
      promotionTip?: string;

      /** 促销类型：0 - 无，1 - 直降，2 - 买赠，3 - 第 X 件折扣 */
      promotionType?: number;

      /** 购买数量 */
      quantity?: number;

      /** 净重单价（零售价） */
      retailPrice?: number;

      /** 售卖价格 */
      salePrice?: number;

      /** 售卖单位 */
      saleUom?: string;

      /** 购买单位 */
      uom?: string;

      /** 规格名称 */
      variantName?: string;

      /** 购买净重 */
      weigh?: number;
    }

    export class OrderItemListOptionsVO {
      /** 渠道类型 */
      channels?: Array<defs.order.Option>;

      /** 门店编码 */
      storeCodes?: Array<defs.order.Option>;
    }

    export class OrderItemPageQueryDTO {
      /** 扣款时间-结束 */
      captureTimeEnd?: string;

      /** 扣款时间-开始 */
      captureTimeStart?: string;

      /** 渠道类型/OMS类型 */
      channelType?: number;

      /** 下单时间-结束 */
      createdTimeEnd?: string;

      /** 下单时间-开始 */
      createdTimeStart?: string;

      /** 订单完成时间-结束 */
      deliveredTimeEnd?: string;

      /** 订单完成时间-开始 */
      deliveredTimeStart?: string;

      /** 订单行编码 */
      id?: number;

      /** 订单号 */
      orderId?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 店铺编码 */
      storeId?: number;

      /** 用户ID */
      userId?: number;
    }

    export class OrderItemVO {
      /** 附加配送费 */
      addDriverTip?: number;

      /** ship to(city) */
      addressCity?: string;

      /** ship to(state) */
      addressState?: string;

      /** 拣货调整金额 */
      adjustPrice?: number;

      /** 调整数量 */
      adjustQuantity?: number;

      /** 调整重量 */
      adjustWeight?: number;

      /** 所有促销后金额 */
      afterAllPromotionAmount?: number;

      /** 预授权金额 */
      authedAmount?: number;

      /** 扣款时间 */
      captureTime?: string;

      /** 渠道类型 */
      channelType?: string;

      /** 下单时间 */
      createdTime?: string;

      /** 退瓶费 */
      crvFee?: number;

      /** 售价 */
      currentSalePrice?: number;

      /** 完成时间 */
      deliveredTime?: string;

      /** 配送费 */
      deliveryFee?: number;

      /** 配送方式 */
      deliveryTypeDesc?: string;

      /** 补差所有促销后金额 */
      diffAfterAllPromotionAmount?: number;

      /** 补差退瓶费 */
      diffCrvFee?: number;

      /** 补差直降后商品价格 */
      diffDiscountedPrice?: number;

      /** 补差商品原价 */
      diffMarketPrice?: number;

      /** 补差平台分摊促销金额 */
      diffPlatformDiscount?: number;

      /** 补差积分抵扣 */
      diffPointsDeduction?: number;

      /** 补差商家分摊促销金额 */
      diffStoreDiscount?: number;

      /** 补差消费税 */
      diffTaxFee?: number;

      /** 直降后商品价格 */
      discountedPrice?: number;

      /** 司机小费 */
      driverTip?: number;

      /** 订单行编码 */
      id?: number;

      /** 是否为赠品 */
      isGift?: string;

      /** 称重商品 */
      isWeighedProduct?: string;

      /** 下单重量 */
      itemWeight?: number;

      /** 主品名称 */
      mainProductName?: string;

      /** 商品原价 */
      marketPrice?: number;

      /** 商家名称 */
      merchantName?: string;

      /** 订单号 */
      orderId?: string;

      /** 收费金额 */
      payAmount?: number;

      /** 付款方 */
      payingParty?: string;

      /** 扣款成功 */
      paymentSuccessful?: string;

      /** 履约附加配送费 */
      performAddDriverTip?: number;

      /** 履约所有促销后金额 */
      performAfterAllPromotionAmount?: number;

      /** 履约退瓶费 */
      performCrvFee?: number;

      /** 履约配送费 */
      performDeliveryFee?: number;

      /** 履约直降后商品价格 */
      performDiscountedPrice?: number;

      /** 履约司机小费 */
      performDriverTip?: number;

      /** 履约商品原价 */
      performMarketPrice?: number;

      /** 履约平台分摊促销金额 */
      performPlatformDiscount?: number;

      /** 履约积分抵扣 */
      performPointsDeduction?: number;

      /** 履约服务费 */
      performServiceFee?: number;

      /** 履约商家分摊促销金额 */
      performStoreDiscount?: number;

      /** 履约消费税 */
      performTaxFee?: number;

      /** 履约数量 */
      performanceQuantity?: number;

      /** 履约重量 */
      performanceWeigh?: number;

      /** 平台扣点（定额） */
      platformCommissionAmount?: number;

      /** 平台扣点% */
      platformCommissionPercent?: number;

      /** 平台分摊促销金额 */
      platformDiscount?: number;

      /** 积分抵扣 */
      pointsDeduction?: number;

      /** Article Number */
      productId?: number;

      /** 商品名称 */
      productName?: string;

      /** 下单数量 */
      quantity?: number;

      /** 收款方 */
      receivingParty?: string;

      /** 单位 */
      saleUom?: string;

      /** 服务费 */
      serviceFee?: number;

      /** 分账金额 */
      splitAmount?: number;

      /** ship from(city) */
      storeAddrCity?: string;

      /** ship from(State) */
      storeAddrState?: string;

      /** 商家分摊促销金额 */
      storeDiscount?: number;

      /** 店铺编码 */
      storeId?: number;

      /** 店铺名称 */
      storeName?: string;

      /** 所在时区 */
      storeTimeZone?: string;

      /** 消费税 */
      taxFee?: number;

      /** UPC */
      upc?: string;

      /** 用户ID */
      userId?: number;

      /** 用户手机号 */
      userPhone?: string;

      /** 规格 */
      variantNameEn?: string;
    }

    export class OrderListOptionsVO {
      /** 扣款状态 */
      captureStatusList?: Array<defs.order.Option>;

      /** 渠道类型 */
      channels?: Array<defs.order.Option>;

      /** 订单状态 */
      orderStatusList?: Array<defs.order.Option>;

      /** 门店编码 */
      storeCodes?: Array<defs.order.Option>;
    }

    export class OrderPayment {
      /** 卡类型 */
      brand?: string;

      /** 后 4 位 */
      last4?: string;

      /** 支付金额 */
      payAmount?: number;
    }

    export class OrderReportPageQueryDTO {
      /** 扣款状态 */
      captureStatus?: number;

      /** 订单扣款时间-结束 */
      captureTimeEnd?: string;

      /** 订单扣款时间-开始 */
      captureTimeStart?: string;

      /** 渠道类型 */
      channelType?: number;

      /** 订单创建时间-结束 */
      createdTimeEnd?: string;

      /** 订单创建时间-开始 */
      createdTimeStart?: string;

      /** 订单完成时间-结束 */
      deliveredTimeEnd?: string;

      /** 订单完成时间-开始 */
      deliveredTimeStart?: string;

      /** 订单号 */
      id?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 订单状态 */
      status?: number;

      /** 店铺编码 */
      storeId?: number;

      /** 用户编码/ID */
      userId?: number;

      /** 用户手机号 */
      userPhone?: string;
    }

    export class OrderReportVO {
      /** 附加配送费/运费 */
      addDriverTip?: number;

      /** ship to(city) */
      addressCity?: string;

      /** ship to(state) */
      addressState?: string;

      /** 实际扣款金额 */
      captureAmount?: number;

      /** 扣款状态 */
      captureStatus?: string;

      /** 扣款时间 */
      captureTime?: string;

      /** 渠道类型 */
      channelType?: string;

      /** 公司编码 */
      companyCode?: string;

      /** 订单创建时间 */
      createdTime?: string;

      /** 退瓶费 */
      crvFee?: number;

      /** 订单完成时间 */
      deliveredTime?: string;

      /** 配送费/运费 */
      deliveryFee?: number;

      /** 配送方式 */
      deliveryType?: string;

      /** 司机小费/配送小费 */
      driverTip?: number;

      /** 订单号 */
      id?: string;

      /** 是否割接订单 */
      isCutOrder?: string;

      /** 临时加收金额 */
      itemAdjustment?: number;

      /** 商品总价 */
      itemAmount?: number;

      /** 商家名称 */
      merchantName?: string;

      /** 订单总计 */
      orderTotalAmount?: number;

      /** 预授权金额 */
      payAmount?: number;

      /** 履约时间 */
      performanceTime?: string;

      /** 提货码 */
      pickUpCode?: string;

      /** 拣货调整金额 */
      pickingAdjustAmount?: number;

      /** 平台订单级优惠金额 */
      platformCoupon?: number;

      /** 积分抵扣 */
      pointsDeduction?: number;

      /** 商品类型 */
      productType?: string;

      /** 服务费 */
      serviceFee?: number;

      /** 订单状态 */
      status?: string;

      /** ship from(city) */
      storeAddrCity?: string;

      /** ship from(State) */
      storeAddrState?: string;

      /** 门店订单级优惠金额 */
      storeCoupon?: number;

      /** 门店分组名称 */
      storeGroupName?: string;

      /** 店铺编码 */
      storeId?: number;

      /** 店铺名称 */
      storeName?: string;

      /** 所在时区 */
      storeTimeZone?: string;

      /** 消费税 */
      taxFee?: number;

      /** 用户ID */
      userId?: number;

      /** 用户手机号 */
      userPhone?: string;
    }

    export class OrderSummary {
      /** 调整金额 */
      adjustPrice?: number;

      /** 授权金额 */
      authedPrice?: number;

      /** 退瓶费 */
      beverageContainerFee?: number;

      /** 配送费（闪送） */
      deliveryFee?: number;

      /** 优惠金额 */
      discount?: number;

      /** 配送小费（闪送） */
      driverTip?: number;

      /** 临时加收 */
      estItemAdjustment?: number;

      /** 预估总价 */
      estTotal?: number;

      /** 积分抵扣 */
      pointDeduction?: number;

      /** 服务费（闪送） */
      serviceFee?: number;

      /** 运费（快递） */
      shippingFee?: number;

      /** 是否展示：临时加收 */
      showEstItemAdjustment?: boolean;

      /** 是否展示：Est.total */
      showEstTotal?: boolean;

      /** 是否展示：total */
      showTotal?: boolean;

      /** 商品总金额 */
      subTotalAmount?: number;

      /** 税费 */
      taxFee?: number;

      /** 订单总金额 */
      totalAmount?: number;
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

    export class PageParam {
      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;
    }

    export class PayConfigVO {
      /** Stripe 公钥 */
      publicKey?: string;
    }

    export class Payment {
      /** 信用卡品牌 */
      brand?: string;

      /** 信用卡后 4 位 */
      last4?: string;
    }

    export class PaymentRefund {
      /** 实退金额 */
      actualRefund?: number;

      /** 卡号后 4 位 */
      payMethodLast4?: string;

      /** 退款渠道 */
      refundChannel?: string;

      /** 售后单号 */
      refundId?: string;

      /** 退款单号 */
      refundNo?: string;

      /** 退款路径 */
      refundPath?: string;

      /** 退款时间 */
      refundTime?: string;

      /** 应退金额 */
      shouldRefund?: number;

      /** 退款状态 */
      statusDesc?: string;
    }

    export class PickupInfo {
      /** 自提码 */
      pickupCode?: string;
    }

    export class ProductReviewItem {
      /** 评价内容 */
      description?: string;

      /** 评价图片 */
      photos?: Array<string>;

      /** 评论时间 */
      reviewTime?: string;

      /** 评价星级 */
      star?: number;

      /** 会员头像 */
      userAvatar?: string;

      /** 会员昵称 */
      userNickName?: string;
    }

    export class ProductReviewVO {
      /** 平均星级 */
      avgStar?: number;

      /** 评价数 */
      reviewNum?: number;

      /** 是否展示：评论按钮 */
      showReviewButton?: boolean;

      /** 1 星百分比 */
      star1?: number;

      /** 2 星百分比 */
      star2?: number;

      /** 3 星百分比 */
      star3?: number;

      /** 4 星百分比 */
      star4?: number;

      /** 5 星百分比 */
      star5?: number;
    }

    export class QueryRecipeCategoryOptionResponse {
      /** id */
      id?: number;

      /** 名称(会自动转化 中/英/繁 语言) */
      name?: string;
    }

    export class QueryRecipeCategoryRequest {
      /** 分类名称 */
      categoryName?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /**  状态  1: 启用 2:禁用 */
      status?: number;
    }

    export class QueryRecipeCategoryResponse {
      /** 内容数量 */
      contentNum?: number;

      /** icon图标 */
      icon?: string;

      /** id */
      id?: number;

      /** 英文名称 */
      nameEnUs?: string;

      /** 中文名称 */
      nameZhCn?: string;

      /** 繁体名称 */
      nameZhTw?: string;

      /** 排序 */
      sort?: number;

      /**  状态  1: 启用 2:禁用 */
      status?: number;

      /** 更新人id */
      updatedBy?: number;

      /** 更新人姓名 */
      updatedByName?: string;

      /** 更新时间 yyyy-MM-dd HH:mm:ss */
      updatedTime?: string;
    }

    export class QueryRecipeRequest {
      /** 分类id */
      categoryId?: number;

      /** 结束-创建时间   yyyy-MM-dd HH:mm:ss */
      endCreatedTime?: string;

      /** 结束-更新时间   yyyy-MM-dd HH:mm:ss */
      endUpdatedTime?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 起始-创建时间   yyyy-MM-dd HH:mm:ss */
      startCreatedTime?: string;

      /** 起始-更新时间   yyyy-MM-dd HH:mm:ss */
      startUpdatedTime?: string;

      /**  状态  0:草稿, 1: 启用 2:禁用 */
      status?: number;

      /** 标题 */
      title?: string;
    }

    export class QueryRecipeResponse {
      /** 分类id */
      categoryId?: number;

      /** 分类名 */
      categoryName?: number;

      /** 评论次数 */
      commentNum?: number;

      /** id */
      id?: number;

      /** 素材  最多只会返回2条 */
      materialList?: Array<defs.order.RecipeMaterialVo>;

      /** 展示次数 */
      showNum?: number;

      /** 排序 */
      sort?: number;

      /** 状态   0:草稿, 1: 启用 2:禁用 */
      status?: number;

      /** 标题 自动转化语言 中/英/繁 */
      title?: string;

      /** 更新人id */
      updatedBy?: number;

      /** 更新人姓名 */
      updatedByName?: string;

      /** 更新时间 yyyy-MM-dd HH:mm:ss */
      updatedTime?: string;
    }

    export class ReceiptItem {
      /** 商品金额 */
      itemAmount?: number;

      /** main upc */
      mainUpc?: string;

      /** 商品名称 */
      productName?: string;

      /** 商品类型：1-非称重、2-称重 */
      productType?: number;

      /** 数量 */
      quantity?: number;

      /** 净重单价 */
      retailPrice?: number;

      /** 重量 */
      weight?: number;

      /** 称重单位 */
      weightUom?: string;
    }

    export class ReceiptOrderInfo {
      /** 配送方式: 1-自提，2-闪送，3-快递 */
      deliveryType?: number;

      /** 订单 id */
      orderId?: string;

      /** 下单时间 */
      orderTime?: string;

      /** 支付描述 */
      paymentDesc?: string;

      /** 服务类型：Pickup、Delivery */
      serviceTypeDesc?: string;
    }

    export class ReceiptSummary {
      /** 授权金额 */
      authedAmount?: number;

      /** 退瓶费 */
      crvFee?: number;

      /** 配送费 */
      deliveryFee?: number;

      /** 优惠金额 */
      discount?: number;

      /** 配送小费 */
      driverTip?: number;

      /** 积分抵扣 */
      pointsDeduction?: number;

      /** 调价金额 */
      priceAdjustment?: number;

      /** 退款总额 */
      refundTotal?: number;

      /** 服务费 */
      serviceFee?: number;

      /** 商品总金额 */
      subTotal?: number;

      /** 税费 */
      taxFee?: number;

      /** 总金额 */
      totalAmount?: number;
    }

    export class RecipeMaterialVo {
      /** recipeId */
      recipeId?: number;

      /** 素材类型(0: 图片 1:视频) */
      type: number;

      /** 素材url */
      url: string;
    }

    export class RecipeProductVo {
      /** 图片地址 */
      imageUrl: string;

      /** 商品名称 */
      name: string;

      /** 数量 */
      quantity: number;

      /** upc */
      upc: string;

      /** 商品sku(规格id) Id */
      variantId: string;
    }

    export class RefundApplyItem {
      /** 是否有促销 */
      hasPromotion?: boolean;

      /** 商品主图 */
      mainPic?: string;

      /** 主 upc */
      mainUpc?: string;

      /** 商品 id */
      productId?: number;

      /** 商品名称 */
      productName?: string;

      /** 商品类型：1-非称重、2-称重 */
      productType?: number;

      /** 促销商品 */
      promotionItem?: defs.order.WebRefundPromotionItem;

      /** 促销提示 */
      promotionTip?: string;

      /** 促销类型：2-买赠 */
      promotionType?: number;

      /** 可售后数量 */
      quantity?: number;

      /** 净重单价 */
      retailPrice?: number;

      /** 单件售价 */
      salePrice?: number;

      /** 商品金额 */
      totalAmount?: number;

      /** 规格名称 */
      variantName?: string;

      /** 总重量 */
      weight?: number;

      /** 重量单位 */
      weightUom?: string;
    }

    export class RefundApplyVO {
      /** 商品列表 */
      items?: Array<defs.order.RefundApplyItem>;

      /** 是否没有售后 */
      noRefund?: boolean;

      /** 下单时间 */
      orderDate?: string;

      /** 订单编号 */
      orderId?: string;
    }

    export class RefundDetail {
      /** 退瓶费 */
      crvFee?: number;

      /** 抵扣的积分 */
      deductPoints?: number;

      /** 配送费 */
      deliveryFee?: number;

      /** 优惠金额 */
      discount?: number;

      /** 司机小费 */
      driverTip?: number;

      /** 预计退款金额 */
      estTotal?: number;

      /** 发放的积分 */
      issuedPoints?: number;

      /** 积分抵扣金额 */
      pointsDeduction?: number;

      /** 服务费 */
      serviceFee?: number;

      /** 是否展示：预计退款金额 */
      showEstTotal?: boolean;

      /** 是否展示：退款金额项 */
      showPriceItems?: boolean;

      /** 是否展示：退款金额 */
      showTotal?: boolean;

      /** 商品总额 */
      subTotal?: number;

      /** 税费 */
      taxFee?: number;

      /** 退款金额 */
      total?: number;
    }

    export class RefundDetailVO {
      /** 整单售后信息 */
      allRefundInfo?: defs.order.AllRefundInfo;

      /** 申请类型：1-整单、2-部分 */
      applyType?: number;

      /** 授权金额 */
      authedPrice?: number;

      /** 配送方式: 1-自提，2-闪送，3-快递 */
      deliveryType?: number;

      /** 配送方式名称 */
      deliveryTypeDesc?: string;

      /** 售后详情 */
      refundDetail?: defs.order.RefundDetail;

      /** 主售后单号 */
      refundId?: string;

      /** 售后信息 */
      refundInfo?: defs.order.RefundInfo;

      /** 售后商品列表 */
      refundItems?: Array<defs.order.RefundItem>;

      /** 售后单列表 */
      refundOrders?: Array<defs.order.RefundOrder>;

      /** 退款账户 */
      refundTo?: defs.order.RefundTo;

      /** 展示类型：1-售后商品列表，2-售后单列表 */
      showType?: number;

      /** 状态时间 */
      statusTime?: string;

      /** 状态标题 */
      statusTitle?: defs.order.ColorTitle;

      /** 门店信息 */
      store?: defs.order.Store;
    }

    export class RefundInfo {
      /** 业务日期 */
      bizDate?: string;

      /** 业务单号 */
      bizNo?: string;

      /** 配送方式名称 */
      deliveryTypeDesc?: string;

      /** 订单备注 */
      orderNote?: string;

      /** 支付信息 */
      payment?: string;
    }

    export class RefundItem {
      /** 售后备注 */
      comment?: string;

      /** 商品主图 */
      mainPic?: string;

      /** 售后凭证 */
      pictures?: Array<string>;

      /** 商品名称 */
      productName?: string;

      /** 商品类型：1-非称重、2-称重 */
      productType?: number;

      /** 数量 */
      quantity?: number;

      /** 售后原因 */
      reasonDesc?: string;

      /** 拒绝原因 */
      rejectReason?: string;

      /** 净重单价 */
      retailPrice?: number;

      /** 状态 */
      status?: number;

      /** 状态描述 */
      statusDesc?: string;

      /** 购买金额 */
      totalAmount?: number;

      /** 售卖单位 */
      uom?: string;

      /** 重量 */
      weigh?: number;
    }

    export class RefundItemListExportDTO {
      /** 渠道类型 */
      channel?: number;

      /** 最大申请时间 */
      maxApplyTime?: string;

      /** 最大扣款时间 */
      maxCaptureTime?: string;

      /** 最大完成时间 */
      maxCompleteTime?: string;

      /** 最大下单时间 */
      maxOrderTime?: string;

      /** 最大退款时间 */
      maxRefundTime?: string;

      /** 最小申请时间 */
      minApplyTime?: string;

      /** 最小扣款时间 */
      minCaptureTime?: string;

      /** 最小完成时间 */
      minCompleteTime?: string;

      /** 最小下单时间 */
      minOrderTime?: string;

      /** 最小退款时间 */
      minRefundTime?: string;

      /** 订单号 */
      orderId?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 售后单号 */
      refundId?: string;

      /** 售后单行编码 */
      refundItemId?: string;

      /** 选中的售后单行编码 */
      refundItemIds?: Array<string>;

      /** 店铺编码 */
      storeCode?: number;

      /** 用户 id */
      userId?: number;
    }

    export class RefundItemListItem {
      /** 附加配送费 */
      addDeliveryFee?: number;

      /** 直降后商品价格 */
      afterDirectDiscountAmount?: number;

      /** 所有促销后金额 */
      afterDiscountAmount?: number;

      /** 申请时间 */
      applyTime?: string;

      /** Article Number */
      articleNumber?: number;

      /** 扣款时间 */
      captureTime?: string;

      /** 渠道类型 */
      channel?: string;

      /** 公司编码 */
      companyCode?: string;

      /** 完成时间 */
      completeTime?: string;

      /** 退瓶费 */
      crvFee?: number;

      /** 司机小费 */
      driverTip?: number;

      /** 退款成功 */
      isRefund?: string;

      /** 称重商品 */
      isWeightProduct?: string;

      /** 商品原价 */
      marketPrice?: number;

      /** 订单号 */
      orderId?: string;

      /** 下单时间 */
      orderTime?: string;

      /** 收款方（用户 ID） */
      payee?: number;

      /** 付款方 */
      payer?: string;

      /** 履约方 */
      performingParty?: string;

      /** 平台扣点（定额） */
      platformDeductionFixed?: number;

      /** 平台扣点 % */
      platformDeductionPct?: number;

      /** 平台配送费 */
      platformDeliveryFee?: number;

      /** 平台运费抵扣 */
      platformDeliveryFeeDiscount?: number;

      /** 平台分摊促销金额 */
      platformDiscountAmount?: number;

      /** 积分抵扣 */
      pointsDeduction?: number;

      /** 商品名称 */
      productName?: string;

      /** 退款金额 */
      refundAmount?: number;

      /** 售后单号 */
      refundId?: string;

      /** 售后单行编码 */
      refundItemId?: number;

      /** 售后数量 */
      refundNum?: number;

      /** 售后状态 */
      refundStatusDesc?: string;

      /** 退款时间 */
      refundTime?: string;

      /** 售后类型 */
      refundTypeDesc?: string;

      /** 售价 */
      salePrice?: number;

      /** 服务费 */
      serviceFee?: number;

      /** 分账金额 */
      shareAmount?: number;

      /** ship from city */
      shipFromCity?: string;

      /** ship from state */
      shipFromState?: string;

      /** ship to city */
      shipToCity?: string;

      /** ship to state */
      shipToState?: string;

      /** 店铺编码 */
      storeCode?: number;

      /** 商家配送费 */
      storeDeliveryFee?: number;

      /** 商家运费抵扣 */
      storeDeliveryFeeDiscount?: number;

      /** 商家分摊促销金额 */
      storeDiscountAmount?: number;

      /** 店铺名称 */
      storeName?: string;

      /** 消费税 */
      taxFee?: number;

      /** 所在时区 */
      timezone?: string;

      /** 单位 */
      uom?: string;

      /** UPC */
      upc?: string;

      /** 用户 ID */
      userId?: number;

      /** 规格 */
      variantName?: string;
    }

    export class RefundItemListOptionsVO {
      /** 渠道类型 */
      channels?: Array<defs.order.Option>;

      /** 门店编码 */
      storeCodes?: Array<defs.order.Option>;
    }

    export class RefundItemListPageDTO {
      /** 渠道类型 */
      channel?: number;

      /** 最大申请时间 */
      maxApplyTime?: string;

      /** 最大扣款时间 */
      maxCaptureTime?: string;

      /** 最大完成时间 */
      maxCompleteTime?: string;

      /** 最大下单时间 */
      maxOrderTime?: string;

      /** 最大退款时间 */
      maxRefundTime?: string;

      /** 最小申请时间 */
      minApplyTime?: string;

      /** 最小扣款时间 */
      minCaptureTime?: string;

      /** 最小完成时间 */
      minCompleteTime?: string;

      /** 最小下单时间 */
      minOrderTime?: string;

      /** 最小退款时间 */
      minRefundTime?: string;

      /** 订单号 */
      orderId?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 售后单号 */
      refundId?: string;

      /** 售后单行编码 */
      refundItemId?: string;

      /** 店铺编码 */
      storeCode?: number;

      /** 用户 id */
      userId?: number;
    }

    export class RefundListExportDTO {
      /** 最大申请时间 */
      maxApplyTime?: string;

      /** 最大扣款时间 */
      maxCaptureTime?: string;

      /** 最大退款时间 */
      maxRefundTime?: string;

      /** 最小申请时间 */
      minApplyTime?: string;

      /** 最小扣款时间 */
      minCaptureTime?: string;

      /** 最小退款时间 */
      minRefundTime?: string;

      /** 订单号 */
      orderId?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 售后单号 */
      refundId?: string;

      /** 选中导出的售后 id */
      refundIds?: Array<string>;

      /** 店铺编码 */
      storeCode?: number;

      /** 门店分组 id */
      storeGroupId?: number;

      /** 用户 id */
      userId?: number;

      /** 用户手机号 */
      userPhone?: string;
    }

    export class RefundListItem {
      /** 申请时间 */
      applyTime?: string;

      /** 商家名称 */
      merchantName?: string;

      /** 商家类型 */
      merchantTypeDesc?: string;

      /** 订单号 */
      orderId?: string;

      /** 实退金额 */
      refundAmount?: number;

      /** 售后单号 */
      refundId?: string;

      /** 售后状态 */
      refundStatusDesc?: string;

      /** 退款时间 */
      refundTime?: string;

      /** 售后类型 */
      refundTypeDesc?: string;

      /** ship from city */
      shipFromCity?: string;

      /** ship from state */
      shipFromState?: string;

      /** ship to city */
      shipToCity?: string;

      /** ship to state */
      shipToState?: string;

      /** 应退金额 */
      shouldRefundAmount?: number;

      /** Sku 个数 */
      skuNum?: number;

      /** 店铺编码 */
      storeId?: number;

      /** 店铺名称 */
      storeName?: string;

      /** 用户 id */
      userId?: number;

      /** 用户手机号 */
      userPhone?: string;
    }

    export class RefundListOptionsVO {
      /** 门店编码 */
      storeCodes?: Array<defs.order.Option>;

      /** 门店分组 */
      storeGroups?: Array<defs.order.Option>;
    }

    export class RefundListPageDTO {
      /** 最大申请时间 */
      maxApplyTime?: string;

      /** 最大扣款时间 */
      maxCaptureTime?: string;

      /** 最大退款时间 */
      maxRefundTime?: string;

      /** 最小申请时间 */
      minApplyTime?: string;

      /** 最小扣款时间 */
      minCaptureTime?: string;

      /** 最小退款时间 */
      minRefundTime?: string;

      /** 订单号 */
      orderId?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 售后单号 */
      refundId?: string;

      /** 店铺编码 */
      storeCode?: number;

      /** 门店分组 id */
      storeGroupId?: number;

      /** 用户 id */
      userId?: number;

      /** 用户手机号 */
      userPhone?: string;
    }

    export class RefundOrder {
      /** 售后商品列表 */
      items?: Array<defs.order.RefundItem>;

      /** 售后详情（费用信息） */
      refundDetail?: defs.order.RefundDetail;

      /** 售后单号 */
      refundNo?: string;

      /** 退货提示标题 */
      returnHintTitle?: string;

      /** 退货警告信息 */
      returnWarn?: string;

      /** 是否展示：退货提示（退货时效、门店地址、导航） */
      showReturnHint?: boolean;

      /** 是否展示：退货警告信息 */
      showReturnWarn?: boolean;

      /** 售后状态 */
      status?: number;

      /** 状态标题 */
      statusTitle?: defs.order.ColorTitle;

      /** 售后类型: 1-仅退款，2-退货退款 */
      type?: number;
    }

    export class RefundRuleVO {
      /** 售后原因列表 */
      reasons?: Array<defs.order.RuleItem>;
    }

    export class RefundStatusItem {
      /** 业务时间 */
      bizTime?: string;

      /** 标题 1 */
      title1?: defs.order.ColorTitle;

      /** 标题 2 */
      title2?: string;
    }

    export class RefundStatusVO {
      /** 预估退款金额 */
      estTotal?: number;

      /** 是否展示：预估退款金额 */
      showEstTotal?: boolean;

      /** 是否展示：退款金额 */
      showTotal?: boolean;

      /** 状态列表 */
      statusList?: Array<defs.order.RefundStatusItem>;

      /** 退款金额 */
      total?: number;
    }

    export class RefundTo {
      /** 卡类型 */
      brand?: string;

      /** 后 4 位 */
      last4?: string;
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

    export class ReturnItem {
      /** ERP Article Number */
      articleNumber?: number;

      /** 是否赠品描述 */
      isGiftDesc?: string;

      /** 商品主图 */
      mainPic?: string;

      /** 主 UPC */
      mainUpc?: string;

      /** 商品 id */
      productId?: number;

      /** 商品名称 */
      productName?: string;

      /** 售价 */
      retailPrice?: number;

      /** 应退数量 */
      shouldReturnQuantity?: number;

      /** 应退重量 */
      shouldReturnWeigh?: number;

      /** 商品规格 */
      uom?: string;
    }

    export class ReturnProductVO {
      /** 商品列表 */
      items?: Array<defs.order.ReturnItem>;

      /** 主售后单 */
      mainRefundId?: string;

      /** 售后状态 */
      statusDesc?: string;

      /** 子售后单 */
      subRefundId?: string;
    }

    export class ReviewStatusCountDTO {
      /** 最大提交时间 */
      maxSubmitTime?: string;

      /** 最小提交时间 */
      minSubmitTime?: string;

      /** 会员昵称 */
      nickName?: string;
    }

    export class RuleItem {
      /** 备注限制 */
      commentLimit?: number;

      /** 备注必填 */
      commentRequired?: boolean;

      /** 图片限制 */
      pictureLimit?: number;

      /** 图片必填 */
      pictureRequired?: boolean;

      /** 售后原因 */
      reason?: number;

      /** 售后原因描述 */
      reasonDesc?: string;
    }

    export class S3PreSignInfo {
      /** 上传后的访问地址 */
      key?: string;

      /** 上传 URL，请求方式 PUT */
      url?: string;
    }

    export class SaveAllRefundDTO {
      /** 备注 */
      comment?: string;

      /** 订单编号 */
      orderId?: string;

      /** 图片 */
      pictures?: Array<string>;

      /** 售后原因 */
      reason?: number;
    }

    export class SaveAuditDTO {
      /** 审核意见 */
      auditComment?: string;

      /** 审核结果 */
      auditResult?: number;

      /** 审核 id 列表 */
      ids?: Array<number>;
    }

    export class SavePartRefundDTO {
      /** 商品信息列表 */
      items?: Array<defs.order.SaveRefundItem>;

      /** 订单编号 */
      orderId?: string;
    }

    export class SaveRefundItem {
      /** 备注 */
      comment?: string;

      /** 主 UPC */
      mainUpc?: string;

      /** 图片 */
      pictures?: Array<string>;

      /** 售后数量 */
      quantity?: number;

      /** 售后原因 */
      reason?: number;
    }

    export class SaveRefundVO {
      /** 售后编号 */
      refundNo?: string;
    }

    export class SaveReviewDTO {
      /** 评价内容 */
      description?: string;

      /** 评价图片 */
      photos?: Array<string>;

      /** 星级 */
      star?: number;

      /** 子订单 id */
      subOrderId?: number;
    }

    export class ShipOption {
      /** 选项值：1-普通快递、2-加急快递 */
      optionId?: number;

      /** 快递备注 */
      remark?: string;
    }

    export class StatusCount {
      /** 数量 */
      count?: number;

      /** 状态 */
      status?: number;

      /** 状态描述 */
      statusDesc?: string;
    }

    export class Store {
      /** 城市 */
      city?: string;

      /** 编号 */
      code?: number;

      /** 门店 id */
      id?: number;

      /** 纬度 */
      latitude?: number;

      /** 经度 */
      longitude?: number;

      /** 名称 */
      name?: string;

      /** 联系电话 */
      phone?: string;

      /** 州 */
      state?: string;

      /** 街道 */
      street?: string;

      /** 邮编 */
      zipCode?: string;
    }

    export class TestDateDTO {
      /** maxTime */
      maxTime?: string;

      /** minTime */
      minTime?: string;
    }

    export class WebComputeRefundVO {
      /** 退款费用 */
      refundPrice?: defs.order.WebRefundPrice;

      /** 退款账户 */
      refundTo?: defs.order.RefundTo;
    }

    export class WebOrderAdjustVO {
      /** 调价信息 */
      adjustment?: defs.order.Adjustment;

      /** 联系人 */
      contact?: defs.order.Contact;

      /** 配送地址 */
      deliveryAddress?: defs.order.Address;

      /** 配送备注 */
      deliveryNote?: string;

      /** 配送类型：1-自提，2-闪送，3-直邮 */
      deliveryType?: number;

      /** 配送方式名称 */
      deliveryTypeDesc?: string;

      /** 礼物信息 */
      giftInfo?: defs.order.GiftInfo;

      /** 是否有退款 */
      hasRefund?: boolean;

      /** 商品信息 */
      items?: Array<defs.order.AdjustmentItem>;

      /** 下单日期 */
      orderDate?: string;

      /** 订单编号 */
      orderId?: string;

      /** 订单备注 */
      orderNote?: string;

      /** 支付信息 */
      payment?: defs.order.OrderPayment;

      /** 退款状态描述 */
      refundStatusDesc?: string;

      /** 退款提示时间 */
      refundTipTime?: string;

      /** 快递地址 */
      shipAddress?: defs.order.Address;

      /** 快递信息 */
      shipOption?: defs.order.ShipOption;
    }

    export class WebOrderCancelVO {
      /** 账单地址 */
      billingAddress?: defs.order.BillingAddress;

      /** 联系人 */
      contact?: defs.order.Contact;

      /** 配送地址 */
      deliveryAddress?: defs.order.Address;

      /** 配送备注 */
      deliveryNote?: string;

      /** 配送时间 */
      deliveryTime?: defs.order.OrderDeliveryTime;

      /** 配送类型：1-自提，2-闪送，3-直邮 */
      deliveryType?: number;

      /** 配送方式名称 */
      deliveryTypeDesc?: string;

      /** 预计送达时间 */
      estArrivalTime?: string;

      /** 礼物信息 */
      giftInfo?: defs.order.GiftInfo;

      /** 商品信息 */
      items?: Array<defs.order.OrderItem>;

      /** 下单日期 */
      orderDate?: string;

      /** 订单编号 */
      orderId?: string;

      /** 订单备注 */
      orderNote?: string;

      /** 自提时间 */
      pickUpTime?: defs.order.OrderDeliveryTime;

      /** 费用信息 */
      refundDetail?: defs.order.OrderSummary;

      /** 退款信息 */
      refundTo?: defs.order.RefundTo;

      /** 快递地址 */
      shipAddress?: defs.order.Address;

      /** 快递信息 */
      shipOption?: defs.order.ShipOption;

      /** 状态 */
      status?: number;

      /** 状态名称 */
      statusDesc?: string;

      /** 门店信息 */
      store?: defs.order.Store;
    }

    export class WebOrderCompleteVO {
      /** 联系人 */
      contact?: defs.order.Contact;

      /** 配送地址 */
      deliveryAddress?: defs.order.Address;

      /** 配送备注 */
      deliveryNote?: string;

      /** 配送时间 */
      deliveryTime?: defs.order.OrderDeliveryTime;

      /** 配送方式：1-自提，2-闪送，3-快递 */
      deliveryType?: number;

      /** 预计送达时间 */
      estArrivalTime?: string;

      /** 礼物信息 */
      giftInfo?: defs.order.GiftInfo;

      /** 商品信息 */
      items?: Array<defs.order.OrderItem>;

      /** 订单号 */
      orderId?: string;

      /** 订单备注 */
      orderNote?: string;

      /** 支付信息 */
      payment?: defs.order.OrderPayment;

      /** 自提码 */
      pickUpCode?: string;

      /** 自提时间 */
      pickUpTime?: defs.order.OrderDeliveryTime;

      /** 快递地址 */
      shipAddress?: defs.order.Address;

      /** 快递信息 */
      shipOption?: defs.order.ShipOption;

      /** 门店信息 */
      store?: defs.order.Store;

      /** 费用信息 */
      summary?: defs.order.OrderCompleteSummary;
    }

    export class WebOrderDetailVO {
      /** 联系人 */
      contact?: defs.order.Contact;

      /** 物流信息 */
      deliver?: defs.order.OrderDeliver;

      /** 送达时间 */
      deliveredTime?: string;

      /** 配送地址 */
      deliveryAddress?: defs.order.Address;

      /** 配送备注 */
      deliveryNote?: string;

      /** 配送时间 */
      deliveryTime?: defs.order.OrderDeliveryTime;

      /** 配送类型：1-自提，2-闪送，3-直邮 */
      deliveryType?: number;

      /** 配送方式名称 */
      deliveryTypeDesc?: string;

      /** 预计送达时间 */
      estArrivalTime?: string;

      /** 礼物信息 */
      giftInfo?: defs.order.GiftInfo;

      /** 商品信息 */
      items?: Array<defs.order.OrderItem>;

      /** 下单日期 */
      orderDate?: string;

      /** 订单编号 */
      orderId?: string;

      /** 订单备注 */
      orderNote?: string;

      /** 支付信息 */
      payment?: defs.order.OrderPayment;

      /** 自提时间 */
      pickUpTime?: defs.order.OrderDeliveryTime;

      /** 快递地址 */
      shipAddress?: defs.order.Address;

      /** 快递信息 */
      shipOption?: defs.order.ShipOption;

      /** 是否展示: Adjustment & Refund */
      showAdjustmentAndRefund?: boolean;

      /** 是否展示: Apply Refund */
      showApplyRefund?: boolean;

      /** 是否展示: Cancel Order */
      showCancel?: boolean;

      /** 是否展示：电子发票 */
      showDigitalReceipt?: boolean;

      /** 是否展示：取消退款详情 */
      showViewRefundSummary?: boolean;

      /** 状态：8-已送达、9-已取消 */
      status?: number;

      /** 状态名称 */
      statusDesc?: string;

      /** 门店信息 */
      store?: defs.order.Store;

      /** 费用信息 */
      summary?: defs.order.OrderSummary;
    }

    export class WebOrderListItem {
      /** 单号：订单和取消为订单号，售后为售后单号 */
      bizNo?: string;

      /** 业务时间 */
      bizTime?: string;

      /** 类型：0-订单，1-售后，2-取消 */
      bizType?: number;

      /** 配送方式：1-自提，2-闪送，3-快递 */
      deliveryType?: number;

      /** 配送方式描述 */
      deliveryTypeDesc?: string;

      /** 商品数量 */
      itemNum?: number;

      /** 商品图片列表 */
      mainPics?: Array<string>;

      /** 状态描述 */
      statusDesc?: string;

      /** 总金额 */
      totalAmount?: number;
    }

    export class WebProductReviewVO {
      /** 平均星级 */
      avgStar?: number;

      /** 评价数 */
      reviewNum?: number;

      /** 是否展示：评论按钮 */
      showReviewButton?: boolean;

      /** 1 星百分比 */
      star1?: number;

      /** 2 星百分比 */
      star2?: number;

      /** 3 星百分比 */
      star3?: number;

      /** 4 星百分比 */
      star4?: number;

      /** 5 星百分比 */
      star5?: number;
    }

    export class WebRefundAllReason {
      /** comment */
      comment?: string;

      /** pictures */
      pictures?: Array<string>;

      /** reason */
      reason?: string;
    }

    export class WebRefundBase {
      /** 售后类型：1-整单、2-部分 */
      applyType?: number;

      /** 配送方式：1-自提、2-当日达、3-全美直邮 */
      deliveryType?: number;

      /** 配送方式描述 */
      deliveryTypeDesc?: string;

      /** 订单 id */
      orderId?: string;

      /** 下单时间 */
      orderTime?: string;

      /** 售后 id */
      refundId?: string;

      /** 售后状态标题 */
      refundStatusTitle?: string;

      /** 售后时间 */
      refundTime?: string;

      /** 售后状态：8-拒绝退款（退款失败） */
      status?: number;
    }

    export class WebRefundDetailVO {
      /** 收货地址 */
      address?: defs.order.Address;

      /** 整单售后信息 */
      allReason?: defs.order.WebRefundAllReason;

      /** 基础信息 */
      base?: defs.order.WebRefundBase;

      /** 联系人 */
      contact?: defs.order.Contact;

      /** 配送备注 */
      deliveryNote?: string;

      /** 礼物信息 */
      giftInfo?: defs.order.GiftInfo;

      /** 售后商品详情 */
      itemDetails?: Array<defs.order.WebRefundItemDetail>;

      /** 订单备注 */
      orderNote?: string;

      /** 支付信息 */
      payment?: defs.order.Payment;

      /** 费用信息 */
      refundPrice?: defs.order.WebRefundPrice;

      /** 退回门店截止时间 */
      returnDeadline?: string;

      /** 已退回门店提示 */
      returnedTip?: string;

      /** 快递退回提示 */
      shipBackTip?: string;

      /** 快递选项 */
      shipOption?: defs.order.WebRefundShipOption;

      /** 快递已退回提示 */
      shippedBackTip?: string;

      /** 售后状态进度列表 */
      statusItems?: Array<defs.order.WebRefundStatus>;

      /** 门店 */
      store?: defs.order.Store;
    }

    export class WebRefundItem {
      /** 售后备注 */
      comment?: string;

      /** 是否有促销活动 */
      hasPromotion?: boolean;

      /** 商品金额 */
      itemAmount?: number;

      /** 商品主图 */
      mainPic?: string;

      /** 主 UPC */
      mainUpc?: string;

      /** 拣货重量 */
      pickingWeight?: number;

      /** 售后凭证 */
      pictures?: Array<string>;

      /** 商品名称 */
      productName?: string;

      /** 商品类型：1-非称重、2-称重 */
      productType?: number;

      /** 关联促销商品 */
      promotionItem?: defs.order.WebRefundPromotionItem;

      /** 促销提示：如买一赠一 */
      promotionTip?: string;

      /** 促销类型：2-买赠 */
      promotionType?: number;

      /** 数量 */
      quantity?: number;

      /** 售后原因 */
      reasonDesc?: string;

      /** 拒绝原因 */
      rejectReason?: string;

      /** 售卖单位 */
      saleUom?: string;

      /** 销售重量 */
      saleWeight?: number;

      /** 状态：1-处理中、2-成功、3-拒绝 */
      status?: number;

      /** 状态描述 */
      statusDesc?: string;

      /** 规格名称 */
      variantName?: string;

      /** 称重单位 */
      weightUom?: string;
    }

    export class WebRefundItemDetail {
      /** 售后商品列表 */
      items?: Array<defs.order.WebRefundItem>;

      /** 售后 id */
      refundId?: string;

      /** 退货退回提示 */
      returnBackTip?: string;

      /** 状态标题 */
      statusTitle?: string;
    }

    export class WebRefundPrice {
      /** 退瓶费 */
      crvFee?: number;

      /** 抵扣的积分 */
      deductPoints?: number;

      /** 配送费 */
      deliveryFee?: number;

      /** 优惠金额 */
      discount?: number;

      /** 司机小费 */
      driverTip?: number;

      /** 预计退款金额 */
      estTotal?: number;

      /** 发放的积分 */
      issuedPoints?: number;

      /** 积分抵扣金额 */
      pointsDeduction?: number;

      /** 服务费 */
      serviceFee?: number;

      /** 是否展示：预计退款金额 */
      showEstTotal?: boolean;

      /** 是否展示：实际退款金额 */
      showTotal?: boolean;

      /** 商品总额 */
      subTotal?: number;

      /** 税费 */
      taxFee?: number;

      /** 实际退款金额 */
      total?: number;
    }

    export class WebRefundPromotionItem {
      /** 商品主图 */
      mainPic?: string;

      /** 主 UPC */
      mainUpc?: string;

      /** 商品名称 */
      productName?: string;

      /** 商品类型：1-非称重、2-称重 */
      productType?: number;

      /** 规格名称 */
      variantName?: string;
    }

    export class WebRefundShipOption {
      /** shipFee */
      shipFee?: number;

      /** 类型：1-普通快递、2-加急快递 */
      type?: number;

      /** 类型名称 */
      typeDesc?: string;
    }

    export class WebRefundStatus {
      /** 业务时间 */
      bizTime?: string;

      /** 标题 1 */
      title1?: string;

      /** 标题 2 */
      title2?: string;
    }

    export class WebSaveRefundVO {
      /** 售后 id */
      refundId?: string;
    }
  }
}

declare namespace API {
  export namespace order {
    /**
     * Backoffice - 订单相关
     */
    export namespace boOrder {
      /**
       * 接单管理 - 查询搜索条件选项
       * /bo/order/accept/list/page/options
       */
      export namespace getAcceptListOrderOptions {
        export type getAcceptListOrderOptionsOptions = Record<string, any>;
        export type getAcceptListOrderOptionsResponse =
          defs.order.Response<defs.order.BoAcceptListOrderOptionVO>;
        export type request = (
          options?: getAcceptListOrderOptionsOptions,
        ) => getAcceptListOrderOptionsResponse;
      }

      /**
       * 接单管理 - 分页查询订单列表
       * /bo/order/accept/list/page/query
       */
      export namespace listOrdersForPage {
        export type listOrdersForPageBody = defs.order.BoAcceptListOrderDTO;
        export type listOrdersForPageOptions = Record<string, any>;
        export type listOrdersForPageResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.BoAcceptListOrderItem>
        >;
        export type request = (
          body: listOrdersForPageBody,
          options?: listOrdersForPageOptions,
        ) => listOrdersForPageResponse;
      }

      /**
       * 接单管理 - 操作接单
       * /bo/order/accept/save
       */
      export namespace acceptOrder {
        export type acceptOrderBody = defs.order.BoAcceptOrderDTO;
        export type acceptOrderOptions = Record<string, any>;
        export type acceptOrderResponse = defs.order.Response<void>;
        export type request = (
          body: acceptOrderBody,
          options?: acceptOrderOptions,
        ) => acceptOrderResponse;
      }

      /**
       * 查询订单缺货配置
       * /bo/order/config/order/lack/query
       */
      export namespace getLackOrderConfig {
        export type getLackOrderConfigOptions = Record<string, any>;
        export type getLackOrderConfigResponse =
          defs.order.Response<defs.order.BoLackOrderConfigVO>;
        export type request = (
          options?: getLackOrderConfigOptions,
        ) => getLackOrderConfigResponse;
      }

      /**
       * 保存订单缺货配置
       * /bo/order/config/order/lack/save
       */
      export namespace saveLackOrderConfig {
        export type saveLackOrderConfigBody = defs.order.BoLackOrderConfigDTO;
        export type saveLackOrderConfigOptions = Record<string, any>;
        export type saveLackOrderConfigResponse = defs.order.Response<void>;
        export type request = (
          body: saveLackOrderConfigBody,
          options?: saveLackOrderConfigOptions,
        ) => saveLackOrderConfigResponse;
      }

      /**
       * 查询售后期限配置
       * /bo/order/config/refund/period/query
       */
      export namespace getRefundPeriodConfig {
        export type getRefundPeriodConfigOptions = Record<string, any>;
        export type getRefundPeriodConfigResponse =
          defs.order.Response<defs.order.BoRefundPeriodConfigVO>;
        export type request = (
          options?: getRefundPeriodConfigOptions,
        ) => getRefundPeriodConfigResponse;
      }

      /**
       * 保存售后期限配置
       * /bo/order/config/refund/period/save
       */
      export namespace saveRefundPeriodConfig {
        export type saveRefundPeriodConfigBody =
          defs.order.BoRefundPeriodConfigDTO;
        export type saveRefundPeriodConfigOptions = Record<string, any>;
        export type saveRefundPeriodConfigResponse = defs.order.Response<void>;
        export type request = (
          body: saveRefundPeriodConfigBody,
          options?: saveRefundPeriodConfigOptions,
        ) => saveRefundPeriodConfigResponse;
      }

      /**
       * 订单详情 - 查询订单详情
       * /bo/order/detail/query
       */
      export namespace getOrderDetail {
        export type getOrderDetailParam = {
          /** orderId */
          orderId: string;
        };
        export type getOrderDetailOptions = Record<string, any>;
        export type getOrderDetailResponse =
          defs.order.Response<defs.order.BoOrderDetailVO>;
        export type request = (
          params: getOrderDetailParam,
          options?: getOrderDetailOptions,
        ) => getOrderDetailResponse;
      }

      /**
       * 缺货管理 - 查询缺货详情
       * /bo/order/lack/detail
       */
      export namespace getLackDetail {
        export type getLackDetailParam = {
          /** orderId */
          orderId: string;
        };
        export type getLackDetailOptions = Record<string, any>;
        export type getLackDetailResponse =
          defs.order.Response<defs.order.BoOrderLackDetailVO>;
        export type request = (
          params: getLackDetailParam,
          options?: getLackDetailOptions,
        ) => getLackDetailResponse;
      }

      /**
       * 缺货管理 - 查询条件选项
       * /bo/order/lack/list/options
       */
      export namespace getLackListOptions {
        export type getLackListOptionsOptions = Record<string, any>;
        export type getLackListOptionsResponse =
          defs.order.Response<defs.order.BoLackListOptionVO>;
        export type request = (
          options?: getLackListOptionsOptions,
        ) => getLackListOptionsResponse;
      }

      /**
       * 缺货管理 - 查询缺货列表
       * /bo/order/lack/list/page
       */
      export namespace getLackListPage {
        export type getLackListPageBody = defs.order.BoOrderLackListDTO;
        export type getLackListPageOptions = Record<string, any>;
        export type getLackListPageResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.BoOrderLackListItem>
        >;
        export type request = (
          body: getLackListPageBody,
          options?: getLackListPageOptions,
        ) => getLackListPageResponse;
      }

      /**
       * 订单列表 - 批量导出
       * /bo/order/list/batch/export
       */
      export namespace batchExportOrders {
        export type batchExportOrdersBody = defs.order.BoOrderListExportDTO;
        export type batchExportOrdersOptions = Record<string, any>;
        export type batchExportOrdersResponse = any;
        export type request = (
          body: batchExportOrdersBody,
          options?: batchExportOrdersOptions,
        ) => batchExportOrdersResponse;
      }

      /**
       * 订单列表 - 取消订单
       * /bo/order/list/cancel
       */
      export namespace cancelOrder {
        export type cancelOrderParam = {
          /** orderId */
          orderId: string;
        };
        export type cancelOrderOptions = Record<string, any>;
        export type cancelOrderResponse = defs.order.Response<void>;
        export type request = (
          params: cancelOrderParam,
          options?: cancelOrderOptions,
        ) => cancelOrderResponse;
      }

      /**
       * 订单列表 - 取消退款失败退款
       * /bo/order/list/cancel/refund/save
       */
      export namespace cancelRefund {
        export type cancelRefundParam = {
          /** orderId */
          orderId: string;
        };
        export type cancelRefundOptions = Record<string, any>;
        export type cancelRefundResponse = defs.order.Response<void>;
        export type request = (
          params: cancelRefundParam,
          options?: cancelRefundOptions,
        ) => cancelRefundResponse;
      }

      /**
       * 订单列表 - 扣款失败扣款
       * /bo/order/list/capture/save
       */
      export namespace orderCapture {
        export type orderCaptureParam = {
          /** orderId */
          orderId: string;
        };
        export type orderCaptureOptions = Record<string, any>;
        export type orderCaptureResponse = defs.order.Response<void>;
        export type request = (
          params: orderCaptureParam,
          options?: orderCaptureOptions,
        ) => orderCaptureResponse;
      }

      /**
       * 订单列表 - 查询缺货详情
       * /bo/order/list/lack/detail
       */
      export namespace getListLackDetail {
        export type getListLackDetailParam = {
          /** orderId */
          orderId: string;
        };
        export type getListLackDetailOptions = Record<string, any>;
        export type getListLackDetailResponse =
          defs.order.Response<defs.order.BoOrderLackDetailVO>;
        export type request = (
          params: getListLackDetailParam,
          options?: getListLackDetailOptions,
        ) => getListLackDetailResponse;
      }

      /**
       * 订单列表 - 查询超时详情
       * /bo/order/list/overtime/detail
       */
      export namespace getListOvertimeDetail {
        export type getListOvertimeDetailParam = {
          /** orderId */
          orderId: string;
        };
        export type getListOvertimeDetailOptions = Record<string, any>;
        export type getListOvertimeDetailResponse =
          defs.order.Response<defs.order.BoOrderOvertimeDetailVO>;
        export type request = (
          params: getListOvertimeDetailParam,
          options?: getListOvertimeDetailOptions,
        ) => getListOvertimeDetailResponse;
      }

      /**
       * 订单列表 - 查询订单列表条件
       * /bo/order/list/page/options
       */
      export namespace getListOrderOptions {
        export type getListOrderOptionsOptions = Record<string, any>;
        export type getListOrderOptionsResponse =
          defs.order.Response<defs.order.BoOrderListOptionVO>;
        export type request = (
          options?: getListOrderOptionsOptions,
        ) => getListOrderOptionsResponse;
      }

      /**
       * 订单列表 - 分页查询订单列表
       * /bo/order/list/page/query
       */
      export namespace postListPageQuery {
        export type postListPageQueryBody = defs.order.BoOrderListOrderDTO;
        export type postListPageQueryOptions = Record<string, any>;
        export type postListPageQueryResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.BoOrderListOrderItem>
        >;
        export type request = (
          body: postListPageQueryBody,
          options?: postListPageQueryOptions,
        ) => postListPageQueryResponse;
      }

      /**
       * 订单列表 - 操作订单拣货
       * /bo/order/list/picking/save
       */
      export namespace orderPicking {
        export type orderPickingBody = defs.order.BoOrderListPickingDTO;
        export type orderPickingOptions = Record<string, any>;
        export type orderPickingResponse = defs.order.Response<void>;
        export type request = (
          body: orderPickingBody,
          options?: orderPickingOptions,
        ) => orderPickingResponse;
      }

      /**
       * 订单列表 - 查询可退款商品
       * /bo/order/list/refund/product
       */
      export namespace getRefundProductInfo {
        export type getRefundProductInfoParam = {
          /** orderId */
          orderId: string;
        };
        export type getRefundProductInfoOptions = Record<string, any>;
        export type getRefundProductInfoResponse =
          defs.order.Response<defs.order.BoOrderListRefundProductVO>;
        export type request = (
          params: getRefundProductInfoParam,
          options?: getRefundProductInfoOptions,
        ) => getRefundProductInfoResponse;
      }

      /**
       * 订单列表 - 保存退款申请
       * /bo/order/list/refund/save
       */
      export namespace saveRefund {
        export type saveRefundBody = defs.order.BoOrderListRefundDTO;
        export type saveRefundOptions = Record<string, any>;
        export type saveRefundResponse = defs.order.Response<void>;
        export type request = (
          body: saveRefundBody,
          options?: saveRefundOptions,
        ) => saveRefundResponse;
      }

      /**
       * 超时管理 - 附加配送费
       * /bo/order/overtime/delivery_fee/add
       */
      export namespace addDeliveryFee {
        export type addDeliveryFeeBody = defs.order.AddDeliveryFeeDTO;
        export type addDeliveryFeeOptions = Record<string, any>;
        export type addDeliveryFeeResponse = defs.order.Response<void>;
        export type request = (
          body: addDeliveryFeeBody,
          options?: addDeliveryFeeOptions,
        ) => addDeliveryFeeResponse;
      }

      /**
       * 超时管理 - 查询超时详情
       * /bo/order/overtime/detail
       */
      export namespace getOvertimeDetail {
        export type getOvertimeDetailParam = {
          /** orderId */
          orderId: string;
        };
        export type getOvertimeDetailOptions = Record<string, any>;
        export type getOvertimeDetailResponse =
          defs.order.Response<defs.order.BoOrderOvertimeDetailVO>;
        export type request = (
          params: getOvertimeDetailParam,
          options?: getOvertimeDetailOptions,
        ) => getOvertimeDetailResponse;
      }

      /**
       * 超时管理 - 查询条件选项
       * /bo/order/overtime/list/options
       */
      export namespace getOvertimeListOptions {
        export type getOvertimeListOptionsOptions = Record<string, any>;
        export type getOvertimeListOptionsResponse =
          defs.order.Response<defs.order.BoOvertimeListOptionVO>;
        export type request = (
          options?: getOvertimeListOptionsOptions,
        ) => getOvertimeListOptionsResponse;
      }

      /**
       * 超时管理 - 查询超时列表
       * /bo/order/overtime/list/page
       */
      export namespace getOvertimeListPage {
        export type getOvertimeListPageBody = defs.order.BoOrderOvertimeListDTO;
        export type getOvertimeListPageOptions = Record<string, any>;
        export type getOvertimeListPageResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.BoOrderOvertimeListItem>
        >;
        export type request = (
          body: getOvertimeListPageBody,
          options?: getOvertimeListPageOptions,
        ) => getOvertimeListPageResponse;
      }

      /**
       * 超时管理 - 查询日志列表
       * /bo/order/overtime/opt/logs
       */
      export namespace getOvertimeOptLogs {
        export type getOvertimeOptLogsParam = {
          /** orderId */
          orderId: string;
        };
        export type getOvertimeOptLogsOptions = Record<string, any>;
        export type getOvertimeOptLogsResponse = defs.order.Response<
          Array<defs.order.BoOrderOvertimeOptLog>
        >;
        export type request = (
          params: getOvertimeOptLogsParam,
          options?: getOvertimeOptLogsOptions,
        ) => getOvertimeOptLogsResponse;
      }

      /**
       * 接单管理 - 批量接单
       * /bo/order/receive/batch
       */
      export namespace batchReceiveOrders {
        export type batchReceiveOrdersBody = defs.order.BoBatchReceiveOrderDTO;
        export type batchReceiveOrdersOptions = Record<string, any>;
        export type batchReceiveOrdersResponse = defs.order.Response<number>;
        export type request = (
          body: batchReceiveOrdersBody,
          options?: batchReceiveOrdersOptions,
        ) => batchReceiveOrdersResponse;
      }
    }

    /**
     * Backoffice - 售后相关
     */
    export namespace boRefund {
      /**
       * 查询售后详情
       * /bo/refund/detail/query
       */
      export namespace getRefundDetail {
        export type getRefundDetailParam = {
          /** subRefundId */
          subRefundId: string;
        };
        export type getRefundDetailOptions = Record<string, any>;
        export type getRefundDetailResponse =
          defs.order.Response<defs.order.BoRefundDetailVO>;
        export type request = (
          params: getRefundDetailParam,
          options?: getRefundDetailOptions,
        ) => getRefundDetailResponse;
      }

      /**
       * 查询售后列表条件选项
       * /bo/refund/list/page/options
       */
      export namespace getListRefundPageOptions {
        export type getListRefundPageOptionsOptions = Record<string, any>;
        export type getListRefundPageOptionsResponse =
          defs.order.Response<defs.order.BoListRefundOptionVO>;
        export type request = (
          options?: getListRefundPageOptionsOptions,
        ) => getListRefundPageOptionsResponse;
      }

      /**
       * 分页查询售后列表
       * /bo/refund/list/page/query
       */
      export namespace listRefundPage {
        export type listRefundPageBody = defs.order.BoListRefundPageDTO;
        export type listRefundPageOptions = Record<string, any>;
        export type listRefundPageResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.BoListRefundItem>
        >;
        export type request = (
          body: listRefundPageBody,
          options?: listRefundPageOptions,
        ) => listRefundPageResponse;
      }

      /**
       * 售后退款审核
       * /bo/refund/refund/audit
       */
      export namespace auditRefund {
        export type auditRefundBody = defs.order.BoRefundAuditDTO;
        export type auditRefundOptions = Record<string, any>;
        export type auditRefundResponse = defs.order.Response<void>;
        export type request = (
          body: auditRefundBody,
          options?: auditRefundOptions,
        ) => auditRefundResponse;
      }

      /**
       * 退货入库 - 查询商品信息
       * /bo/refund/return/product
       */
      export namespace getReturnProduct {
        export type getReturnProductParam = {
          /** subRefundId */
          subRefundId: string;
        };
        export type getReturnProductOptions = Record<string, any>;
        export type getReturnProductResponse =
          defs.order.Response<defs.order.ReturnProductVO>;
        export type request = (
          params: getReturnProductParam,
          options?: getReturnProductOptions,
        ) => getReturnProductResponse;
      }

      /**
       * 退货入库 - 保存
       * /bo/refund/return/save
       */
      export namespace submitReturn {
        export type submitReturnParam = {
          /** subRefundId */
          subRefundId: string;
        };
        export type submitReturnOptions = Record<string, any>;
        export type submitReturnResponse = defs.order.Response<void>;
        export type request = (
          params: submitReturnParam,
          options?: submitReturnOptions,
        ) => submitReturnResponse;
      }

      /**
       * 售后类型审核
       * /bo/refund/type/audit
       */
      export namespace auditRefundType {
        export type auditRefundTypeBody = defs.order.BoRefundTypeAuditDTO;
        export type auditRefundTypeOptions = Record<string, any>;
        export type auditRefundTypeResponse = defs.order.Response<void>;
        export type request = (
          body: auditRefundTypeBody,
          options?: auditRefundTypeOptions,
        ) => auditRefundTypeResponse;
      }
    }

    /**
     * Backoffice - 评论相关
     */
    export namespace boReview {
      /**
       * 查询是否自动审核通过
       * /bo/review/audit/auto/query
       */
      export namespace getAutoAuditConfig {
        export type getAutoAuditConfigOptions = Record<string, any>;
        export type getAutoAuditConfigResponse = defs.order.Response<boolean>;
        export type request = (
          options?: getAutoAuditConfigOptions,
        ) => getAutoAuditConfigResponse;
      }

      /**
       * 保存是否自动审核通过
       * /bo/review/audit/auto/save
       */
      export namespace saveAutoAuditConfig {
        export type saveAutoAuditConfigParam = {
          /** isAutoAudit */
          isAutoAudit: boolean;
        };
        export type saveAutoAuditConfigOptions = Record<string, any>;
        export type saveAutoAuditConfigResponse = defs.order.Response<void>;
        export type request = (
          params: saveAutoAuditConfigParam,
          options?: saveAutoAuditConfigOptions,
        ) => saveAutoAuditConfigResponse;
      }

      /**
       * 查询评论审核选项
       * /bo/review/audit/list/option
       */
      export namespace getReviewAuditListOptions {
        export type getReviewAuditListOptionsOptions = Record<string, any>;
        export type getReviewAuditListOptionsResponse =
          defs.order.Response<defs.order.ListReviewOptionVO>;
        export type request = (
          options?: getReviewAuditListOptionsOptions,
        ) => getReviewAuditListOptionsResponse;
      }

      /**
       * 分页查询评论列表
       * /bo/review/audit/list/page
       */
      export namespace listAuditForPage {
        export type listAuditForPageBody = defs.order.ListReviewPageDTO;
        export type listAuditForPageOptions = Record<string, any>;
        export type listAuditForPageResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.BoListReviewAuditItem>
        >;
        export type request = (
          body: listAuditForPageBody,
          options?: listAuditForPageOptions,
        ) => listAuditForPageResponse;
      }

      /**
       * 保存审核信息
       * /bo/review/audit/save
       */
      export namespace saveAudit {
        export type saveAuditBody = defs.order.SaveAuditDTO;
        export type saveAuditOptions = Record<string, any>;
        export type saveAuditResponse = defs.order.Response<void>;
        export type request = (
          body: saveAuditBody,
          options?: saveAuditOptions,
        ) => saveAuditResponse;
      }

      /**
       * 统计评论状态数量
       * /bo/review/audit/status/count
       */
      export namespace getAuditStatusCount {
        export type getAuditStatusCountBody = defs.order.ReviewStatusCountDTO;
        export type getAuditStatusCountOptions = Record<string, any>;
        export type getAuditStatusCountResponse =
          defs.order.Response<defs.order.ListReviewCountVO>;
        export type request = (
          body: getAuditStatusCountBody,
          options?: getAuditStatusCountOptions,
        ) => getAuditStatusCountResponse;
      }
    }

    /**
     * Backoffice - 财务结算 - 结算报表
     */
    export namespace boSettlementReport {
      /**
       * 订单日汇总 - 筛选导出
       * /bo/settlement/report/order/day/summary/list/export
       */
      export namespace exportOrderDaySummaryList {
        export type exportOrderDaySummaryListBody =
          defs.order.ExportOrderDaySummaryDTO;
        export type exportOrderDaySummaryListOptions = Record<string, any>;
        export type exportOrderDaySummaryListResponse = any;
        export type request = (
          body: exportOrderDaySummaryListBody,
          options?: exportOrderDaySummaryListOptions,
        ) => exportOrderDaySummaryListResponse;
      }

      /**
       * 订单日汇总 - 条件选项
       * /bo/settlement/report/order/day/summary/list/options
       */
      export namespace getOrderDaySummaryListOptions {
        export type getOrderDaySummaryListOptionsOptions = Record<string, any>;
        export type getOrderDaySummaryListOptionsResponse =
          defs.order.Response<defs.order.OrderDaySummaryOptionsVO>;
        export type request = (
          options?: getOrderDaySummaryListOptionsOptions,
        ) => getOrderDaySummaryListOptionsResponse;
      }

      /**
       * 订单日汇总 - 分页查询
       * /bo/settlement/report/order/day/summary/list/page
       */
      export namespace getOrderDaySummaryListPage {
        export type getOrderDaySummaryListPageBody =
          defs.order.OrderDaySummaryPageDTO;
        export type getOrderDaySummaryListPageOptions = Record<string, any>;
        export type getOrderDaySummaryListPageResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.OrderDaySummaryItem>
        >;
        export type request = (
          body: getOrderDaySummaryListPageBody,
          options?: getOrderDaySummaryListPageOptions,
        ) => getOrderDaySummaryListPageResponse;
      }

      /**
       * 订单商品明细 - 筛选导出
       * /bo/settlement/report/order/item/list/export
       */
      export namespace exportOrderItemList {
        export type exportOrderItemListBody = defs.order.ExportOrderItemListDTO;
        export type exportOrderItemListOptions = Record<string, any>;
        export type exportOrderItemListResponse = any;
        export type request = (
          body: exportOrderItemListBody,
          options?: exportOrderItemListOptions,
        ) => exportOrderItemListResponse;
      }

      /**
       * 订单商品明细 - 条件选项
       * /bo/settlement/report/order/item/list/options
       */
      export namespace getOrderItemListOptions {
        export type getOrderItemListOptionsOptions = Record<string, any>;
        export type getOrderItemListOptionsResponse =
          defs.order.Response<defs.order.OrderItemListOptionsVO>;
        export type request = (
          options?: getOrderItemListOptionsOptions,
        ) => getOrderItemListOptionsResponse;
      }

      /**
       * 订单商品明细 - 分页查询
       * /bo/settlement/report/order/item/list/page
       */
      export namespace getOrderItemListPage {
        export type getOrderItemListPageBody = defs.order.OrderItemPageQueryDTO;
        export type getOrderItemListPageOptions = Record<string, any>;
        export type getOrderItemListPageResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.OrderItemVO>
        >;
        export type request = (
          body: getOrderItemListPageBody,
          options?: getOrderItemListPageOptions,
        ) => getOrderItemListPageResponse;
      }

      /**
       * 订单列表 - 筛选导出
       * /bo/settlement/report/order/list/export
       */
      export namespace exportOrderList {
        export type exportOrderListBody = defs.order.ExportOrderListDTO;
        export type exportOrderListOptions = Record<string, any>;
        export type exportOrderListResponse = any;
        export type request = (
          body: exportOrderListBody,
          options?: exportOrderListOptions,
        ) => exportOrderListResponse;
      }

      /**
       * 订单列表 - 条件选项
       * /bo/settlement/report/order/list/options
       */
      export namespace getOrderListOptions {
        export type getOrderListOptionsOptions = Record<string, any>;
        export type getOrderListOptionsResponse =
          defs.order.Response<defs.order.OrderListOptionsVO>;
        export type request = (
          options?: getOrderListOptionsOptions,
        ) => getOrderListOptionsResponse;
      }

      /**
       * 订单列表 - 分页查询
       * /bo/settlement/report/order/list/page
       */
      export namespace getOrderListPage {
        export type getOrderListPageBody = defs.order.OrderReportPageQueryDTO;
        export type getOrderListPageOptions = Record<string, any>;
        export type getOrderListPageResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.OrderReportVO>
        >;
        export type request = (
          body: getOrderListPageBody,
          options?: getOrderListPageOptions,
        ) => getOrderListPageResponse;
      }

      /**
       * 售后商品明细 - 筛选导出
       * /bo/settlement/report/refund/item/list/export
       */
      export namespace exportRefundItemList {
        export type exportRefundItemListBody =
          defs.order.RefundItemListExportDTO;
        export type exportRefundItemListOptions = Record<string, any>;
        export type exportRefundItemListResponse = any;
        export type request = (
          body: exportRefundItemListBody,
          options?: exportRefundItemListOptions,
        ) => exportRefundItemListResponse;
      }

      /**
       * 售后商品明细 - 条件选项
       * /bo/settlement/report/refund/item/list/options
       */
      export namespace getRefundItemListOptions {
        export type getRefundItemListOptionsOptions = Record<string, any>;
        export type getRefundItemListOptionsResponse =
          defs.order.Response<defs.order.RefundItemListOptionsVO>;
        export type request = (
          options?: getRefundItemListOptionsOptions,
        ) => getRefundItemListOptionsResponse;
      }

      /**
       * 售后商品明细 - 分页查询
       * /bo/settlement/report/refund/item/list/page
       */
      export namespace getRefundItemListPage {
        export type getRefundItemListPageBody =
          defs.order.RefundItemListPageDTO;
        export type getRefundItemListPageOptions = Record<string, any>;
        export type getRefundItemListPageResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.RefundItemListItem>
        >;
        export type request = (
          body: getRefundItemListPageBody,
          options?: getRefundItemListPageOptions,
        ) => getRefundItemListPageResponse;
      }

      /**
       * 售后明细 - 筛选导出
       * /bo/settlement/report/refund/list/export
       */
      export namespace exportRefundList {
        export type exportRefundListBody = defs.order.RefundListExportDTO;
        export type exportRefundListOptions = Record<string, any>;
        export type exportRefundListResponse = any;
        export type request = (
          body: exportRefundListBody,
          options?: exportRefundListOptions,
        ) => exportRefundListResponse;
      }

      /**
       * 售后明细 - 条件选项
       * /bo/settlement/report/refund/list/options
       */
      export namespace getRefundListOptions {
        export type getRefundListOptionsOptions = Record<string, any>;
        export type getRefundListOptionsResponse =
          defs.order.Response<defs.order.RefundListOptionsVO>;
        export type request = (
          options?: getRefundListOptionsOptions,
        ) => getRefundListOptionsResponse;
      }

      /**
       * 售后明细 - 分页查询
       * /bo/settlement/report/refund/list/page
       */
      export namespace getRefundListPage {
        export type getRefundListPageBody = defs.order.RefundListPageDTO;
        export type getRefundListPageOptions = Record<string, any>;
        export type getRefundListPageResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.RefundListItem>
        >;
        export type request = (
          body: getRefundListPageBody,
          options?: getRefundListPageOptions,
        ) => getRefundListPageResponse;
      }
    }

    /**
     * Order Test Controller
     */
    export namespace orderTest {
      /**
       * 订单列表 - 取消订单
       * /test/list/cancel
       */
      export namespace cancelOrder {
        export type cancelOrderParam = {
          /** orderId */
          orderId: string;
        };
        export type cancelOrderOptions = Record<string, any>;
        export type cancelOrderResponse = defs.order.Response<void>;
        export type request = (
          params: cancelOrderParam,
          options?: cancelOrderOptions,
        ) => cancelOrderResponse;
      }

      /**
       * 订单日汇总 - 筛选导出
       * /test/order/day/summary/list/export
       */
      export namespace exportOrderDaySummaryList {
        export type exportOrderDaySummaryListBody =
          defs.order.ExportOrderDaySummaryDTO;
        export type exportOrderDaySummaryListOptions = Record<string, any>;
        export type exportOrderDaySummaryListResponse = any;
        export type request = (
          body: exportOrderDaySummaryListBody,
          options?: exportOrderDaySummaryListOptions,
        ) => exportOrderDaySummaryListResponse;
      }

      /**
       * 订单日汇总 - 条件选项
       * /test/order/day/summary/list/options
       */
      export namespace getOrderDaySummaryListOptions {
        export type getOrderDaySummaryListOptionsOptions = Record<string, any>;
        export type getOrderDaySummaryListOptionsResponse =
          defs.order.Response<defs.order.OrderDaySummaryOptionsVO>;
        export type request = (
          options?: getOrderDaySummaryListOptionsOptions,
        ) => getOrderDaySummaryListOptionsResponse;
      }

      /**
       * 订单日汇总 - 分页查询
       * /test/order/day/summary/list/page
       */
      export namespace getOrderDaySummaryListPage {
        export type getOrderDaySummaryListPageBody =
          defs.order.OrderDaySummaryPageDTO;
        export type getOrderDaySummaryListPageOptions = Record<string, any>;
        export type getOrderDaySummaryListPageResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.OrderDaySummaryItem>
        >;
        export type request = (
          body: getOrderDaySummaryListPageBody,
          options?: getOrderDaySummaryListPageOptions,
        ) => getOrderDaySummaryListPageResponse;
      }

      /**
       * 订单日汇总 - 定时任务
       * /test/order/day/summary/task
       */
      export namespace orderDaySummaryTask {
        export type orderDaySummaryTaskOptions = Record<string, any>;
        export type orderDaySummaryTaskResponse = defs.order.Response<void>;
        export type request = (
          options?: orderDaySummaryTaskOptions,
        ) => orderDaySummaryTaskResponse;
      }

      /**
       * 订单商品明细 - 筛选导出
       * /test/order/item/list/export
       */
      export namespace exportOrderItemList {
        export type exportOrderItemListBody = defs.order.ExportOrderItemListDTO;
        export type exportOrderItemListOptions = Record<string, any>;
        export type exportOrderItemListResponse = any;
        export type request = (
          body: exportOrderItemListBody,
          options?: exportOrderItemListOptions,
        ) => exportOrderItemListResponse;
      }

      /**
       * 订单商品明细 - 条件选项
       * /test/order/item/list/options
       */
      export namespace getOrderItemListOptions {
        export type getOrderItemListOptionsOptions = Record<string, any>;
        export type getOrderItemListOptionsResponse =
          defs.order.Response<defs.order.OrderItemListOptionsVO>;
        export type request = (
          options?: getOrderItemListOptionsOptions,
        ) => getOrderItemListOptionsResponse;
      }

      /**
       * 订单商品明细 - 分页查询
       * /test/order/item/list/page
       */
      export namespace getOrderItemListPage {
        export type getOrderItemListPageBody = defs.order.OrderItemPageQueryDTO;
        export type getOrderItemListPageOptions = Record<string, any>;
        export type getOrderItemListPageResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.OrderItemVO>
        >;
        export type request = (
          body: getOrderItemListPageBody,
          options?: getOrderItemListPageOptions,
        ) => getOrderItemListPageResponse;
      }

      /**
       * 订单列表 - 筛选导出
       * /test/order/list/export
       */
      export namespace exportOrderList {
        export type exportOrderListBody = defs.order.ExportOrderListDTO;
        export type exportOrderListOptions = Record<string, any>;
        export type exportOrderListResponse = any;
        export type request = (
          body: exportOrderListBody,
          options?: exportOrderListOptions,
        ) => exportOrderListResponse;
      }

      /**
       * 订单列表 - 条件选项
       * /test/order/list/options
       */
      export namespace getOrderListOptions {
        export type getOrderListOptionsOptions = Record<string, any>;
        export type getOrderListOptionsResponse =
          defs.order.Response<defs.order.OrderListOptionsVO>;
        export type request = (
          options?: getOrderListOptionsOptions,
        ) => getOrderListOptionsResponse;
      }

      /**
       * 订单列表 - 分页查询
       * /test/order/list/page
       */
      export namespace getOrderListPage {
        export type getOrderListPageBody = defs.order.OrderReportPageQueryDTO;
        export type getOrderListPageOptions = Record<string, any>;
        export type getOrderListPageResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.OrderReportVO>
        >;
        export type request = (
          body: getOrderListPageBody,
          options?: getOrderListPageOptions,
        ) => getOrderListPageResponse;
      }

      /**
       * getOrderStatusSteps
       * /test/order/status/steps
       */
      export namespace getOrderStatusSteps {
        export type getOrderStatusStepsParam = {
          /** orderId */
          orderId: string;
        };
        export type getOrderStatusStepsOptions = Record<string, any>;
        export type getOrderStatusStepsResponse = defs.order.Response<
          Array<defs.order.BoOrderDetailStatusStep>
        >;
        export type request = (
          params: getOrderStatusStepsParam,
          options?: getOrderStatusStepsOptions,
        ) => getOrderStatusStepsResponse;
      }

      /**
       * 售后商品明细 - 筛选导出
       * /test/refund/item/list/export
       */
      export namespace exportRefundItemList {
        export type exportRefundItemListBody =
          defs.order.RefundItemListExportDTO;
        export type exportRefundItemListOptions = Record<string, any>;
        export type exportRefundItemListResponse = any;
        export type request = (
          body: exportRefundItemListBody,
          options?: exportRefundItemListOptions,
        ) => exportRefundItemListResponse;
      }

      /**
       * 售后商品明细 - 条件选项
       * /test/refund/item/list/options
       */
      export namespace getRefundItemListOptions {
        export type getRefundItemListOptionsOptions = Record<string, any>;
        export type getRefundItemListOptionsResponse =
          defs.order.Response<defs.order.RefundItemListOptionsVO>;
        export type request = (
          options?: getRefundItemListOptionsOptions,
        ) => getRefundItemListOptionsResponse;
      }

      /**
       * 售后商品明细 - 分页查询
       * /test/refund/item/list/page
       */
      export namespace getRefundItemListPage {
        export type getRefundItemListPageBody =
          defs.order.RefundItemListPageDTO;
        export type getRefundItemListPageOptions = Record<string, any>;
        export type getRefundItemListPageResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.RefundItemListItem>
        >;
        export type request = (
          body: getRefundItemListPageBody,
          options?: getRefundItemListPageOptions,
        ) => getRefundItemListPageResponse;
      }

      /**
       * 售后明细 - 筛选导出
       * /test/refund/list/export
       */
      export namespace exportRefundList {
        export type exportRefundListBody = defs.order.RefundListExportDTO;
        export type exportRefundListOptions = Record<string, any>;
        export type exportRefundListResponse = any;
        export type request = (
          body: exportRefundListBody,
          options?: exportRefundListOptions,
        ) => exportRefundListResponse;
      }

      /**
       * 售后明细 - 条件选项
       * /test/refund/list/options
       */
      export namespace getRefundListOptions {
        export type getRefundListOptionsOptions = Record<string, any>;
        export type getRefundListOptionsResponse =
          defs.order.Response<defs.order.RefundListOptionsVO>;
        export type request = (
          options?: getRefundListOptionsOptions,
        ) => getRefundListOptionsResponse;
      }

      /**
       * 售后明细 - 分页查询
       * /test/refund/list/page
       */
      export namespace getRefundListPage {
        export type getRefundListPageBody = defs.order.RefundListPageDTO;
        export type getRefundListPageOptions = Record<string, any>;
        export type getRefundListPageResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.RefundListItem>
        >;
        export type request = (
          body: getRefundListPageBody,
          options?: getRefundListPageOptions,
        ) => getRefundListPageResponse;
      }

      /**
       * testTime
       * /test/time
       */
      export namespace testTime {
        export type testTimeBody = defs.order.TestDateDTO;
        export type testTimeOptions = Record<string, any>;
        export type testTimeResponse = defs.order.Response<void>;
        export type request = (
          body: testTimeBody,
          options?: testTimeOptions,
        ) => testTimeResponse;
      }
    }

    /**
     * Backoffice-食谱接口
     */
    export namespace rcpRecipe {
      /**
       * 新增食谱
       * /bo/recipe
       */
      export namespace add {
        export type addBody = defs.order.AddRecipeRequest;
        export type addOptions = Record<string, any>;
        export type addResponse = defs.order.Response<number>;
        export type request = (
          body: addBody,
          options?: addOptions,
        ) => addResponse;
      }

      /**
       * 编辑食谱
       * /bo/recipe
       */
      export namespace edit {
        export type editBody = defs.order.EditRecipeRequest;
        export type editOptions = Record<string, any>;
        export type editResponse = defs.order.Response<boolean>;
        export type request = (
          body: editBody,
          options?: editOptions,
        ) => editResponse;
      }

      /**
       * 编辑状态
       * /bo/recipe/editStatus
       */
      export namespace editStatus {
        export type editStatusBody = defs.order.EditStatusRequest;
        export type editStatusOptions = Record<string, any>;
        export type editStatusResponse = defs.order.Response<boolean>;
        export type request = (
          body: editStatusBody,
          options?: editStatusOptions,
        ) => editStatusResponse;
      }

      /**
       * 食谱列表
       * /bo/recipe/list
       */
      export namespace list {
        export type listBody = defs.order.QueryRecipeRequest;
        export type listOptions = Record<string, any>;
        export type listResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.QueryRecipeResponse>
        >;
        export type request = (
          body: listBody,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 新增/修改 食谱为草稿状态 (不会校验参数非空状态)
       * /bo/recipe/tmp
       */
      export namespace addTmp {
        export type addTmpBody = defs.order.EditRecipeRequest;
        export type addTmpOptions = Record<string, any>;
        export type addTmpResponse = defs.order.Response<number>;
        export type request = (
          body: addTmpBody,
          options?: addTmpOptions,
        ) => addTmpResponse;
      }

      /**
       * 食谱详情
       * /bo/recipe/{id}
       */
      export namespace get {
        export type getPath = {
          /** id */
          id: number;
        };
        export type getOptions = Record<string, any>;
        export type getResponse =
          defs.order.Response<defs.order.AddRecipeRequest>;
        export type request = (
          path: getPath,
          options?: getOptions,
        ) => getResponse;
      }
    }

    /**
     * Backoffice-食谱分类接口
     */
    export namespace rcpRecipeCategory {
      /**
       * 新增分类
       * /bo/recipe/category
       */
      export namespace add {
        export type addBody = defs.order.AddRecipeCategoryRequest;
        export type addOptions = Record<string, any>;
        export type addResponse = defs.order.Response<number>;
        export type request = (
          body: addBody,
          options?: addOptions,
        ) => addResponse;
      }

      /**
       * 编辑分类
       * /bo/recipe/category
       */
      export namespace edit {
        export type editBody = defs.order.EditRecipeCategoryRequest;
        export type editOptions = Record<string, any>;
        export type editResponse = defs.order.Response<boolean>;
        export type request = (
          body: editBody,
          options?: editOptions,
        ) => editResponse;
      }

      /**
       * 编辑状态
       * /bo/recipe/category/editStatus
       */
      export namespace editStatus {
        export type editStatusBody = defs.order.EditStatusRequest;
        export type editStatusOptions = Record<string, any>;
        export type editStatusResponse = defs.order.Response<boolean>;
        export type request = (
          body: editStatusBody,
          options?: editStatusOptions,
        ) => editStatusResponse;
      }

      /**
       * 分类列表
       * /bo/recipe/category/list
       */
      export namespace list {
        export type listBody = defs.order.QueryRecipeCategoryRequest;
        export type listOptions = Record<string, any>;
        export type listResponse = defs.order.Response<
          defs.order.PageInfo<defs.order.QueryRecipeCategoryResponse>
        >;
        export type request = (
          body: listBody,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 分类列表(下拉选项)
       * /bo/recipe/category/options
       */
      export namespace options {
        export type optionsOptions = Record<string, any>;
        export type optionsResponse = defs.order.Response<
          Array<defs.order.QueryRecipeCategoryOptionResponse>
        >;
        export type request = (options?: optionsOptions) => optionsResponse;
      }
    }
  }
}
