type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace product {
    export class AttrValue {
      /** id */
      id?: number;

      /** value */
      value?: string;
    }

    export class Attribute {
      /** 属性值 */
      attrValues?: Array<defs.product.AttrValue>;

      /** 是否多选 */
      chooseStatus?: number;

      /** 属性ID */
      id?: number;

      /** 属性名 */
      name?: string;

      /** 是否必填 */
      requireStatus?: number;
    }

    export class AttributeClassify {
      /** attrCount */
      attrCount?: number;

      /** classifyId */
      classifyId?: number;

      /** classifyName */
      classifyName?: string;

      /** status */
      status?: number;

      /** updatedBy */
      updatedBy?: number;

      /** updatedByName */
      updatedByName?: string;

      /** updatedTime */
      updatedTime?: string;
    }

    export class AttributeClassifyRequest {
      /** classifyName */
      classifyName?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** status */
      status?: number;
    }

    export class AttributeRequest {
      /** attributeName */
      attributeName?: string;

      /** classifyName */
      classifyName?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** status */
      status?: number;
    }

    export class AttributeValue {
      /** id */
      id?: number;

      /** sort */
      sort?: number;

      /** valueEN */
      valueEN?: string;

      /** valueSCH */
      valueSCH?: string;

      /** valueTCH */
      valueTCH?: string;
    }

    export class BackendAttribute {
      /** attributeId */
      attributeId?: number;

      /** attributeValues */
      attributeValues?: Array<defs.product.AttributeValue>;

      /** choosesStatus */
      choosesStatus?: number;

      /** classifyId */
      classifyId?: number;

      /** classifyName */
      classifyName?: string;

      /** createdBy */
      createdBy?: number;

      /** createdByName */
      createdByName?: string;

      /** frontShow */
      frontShow?: number;

      /** name */
      name?: string;

      /** nameEN */
      nameEN?: string;

      /** nameSCH */
      nameSCH?: string;

      /** nameTCH */
      nameTCH?: string;

      /** requireStatus */
      requireStatus?: number;

      /** searchShow */
      searchShow?: number;

      /** status */
      status?: number;

      /** updatedBy */
      updatedBy?: number;

      /** updatedByName */
      updatedByName?: string;

      /** updatedTime */
      updatedTime?: string;
    }

    export class BackendBrand {
      /** brandId */
      brandId?: number;

      /** brandNameEN */
      brandNameEN?: string;

      /** brandNameSCH */
      brandNameSCH?: string;

      /** brandNameTCH */
      brandNameTCH?: string;

      /** description */
      description?: string;

      /** logo */
      logo?: string;

      /** status */
      status?: number;

      /** updatedByName */
      updatedByName?: string;

      /** updatedTime */
      updatedTime?: string;
    }

    export class BackendCategory {
      /** icon */
      icon?: string;

      /** id */
      id?: number;

      /** last */
      last?: number;

      /** level */
      level?: number;

      /** mchNumber */
      mchNumber?: number;

      /** name */
      name?: string;

      /** parentId */
      parentId?: number;

      /** parentName */
      parentName?: string;

      /** path */
      path?: string;

      /** status */
      status?: number;

      /** surchargeRate */
      surchargeRate?: number;
    }

    export class BackendProduct {
      /** alcoholic */
      alcoholic?: number;

      /** articleNumber */
      articleNumber?: number;

      /** brandId */
      brandId?: number;

      /** brandNameEN */
      brandNameEN?: string;

      /** brandNameSCH */
      brandNameSCH?: string;

      /** brandNameTCH */
      brandNameTCH?: string;

      /** category */
      category?: string;

      /** categoryId */
      categoryId?: number;

      /** image */
      image?: string;

      /** manufacturer */
      manufacturer?: string;

      /** productId */
      productId?: number;

      /** productNameEN */
      productNameEN?: string;

      /** productNameSCH */
      productNameSCH?: string;

      /** productNameTCH */
      productNameTCH?: string;

      /** status */
      status?: number;

      /** type */
      type?: number;

      /** upc */
      upc?: string;

      /** updatedTime */
      updatedTime?: string;

      /** validityPeriod */
      validityPeriod?: number;

      /** variantId */
      variantId?: string;
    }

    export class BackendProductRequest {
      /** articleNumbers */
      articleNumbers?: Array<number>;

      /** categoryIds */
      categoryIds?: Array<number>;

      /** exactMatch */
      exactMatch?: boolean;

      /** fromUpdatedTime */
      fromUpdatedTime?: string;

      /** keywords */
      keywords?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** productName */
      productName?: string;

      /** sortBy */
      sortBy?: string;

      /** sortOrder */
      sortOrder?: string;

      /** status */
      status?: number;

      /** toUpdatedTime */
      toUpdatedTime?: string;

      /** upcs */
      upcs?: Array<string>;
    }

    export class Brand {
      /** 品牌描述 */
      desc?: string;

      /** 品牌ID */
      id?: number;

      /** logo地址 */
      logo?: string;

      /** 品牌名 */
      name?: string;
    }

    export class BrandRequest {
      /** brandName */
      brandName?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** status */
      status?: number;
    }

    export class BriefDescStore {
      /** 英文简要描述 */
      briefDescEN?: string;

      /** 简体简要描述 */
      briefDescSCH?: string;

      /** 繁体简要描述 */
      briefDescTCH?: string;

      /** 商品ID */
      productId?: number;

      /** 门店ID */
      storeId?: number;
    }

    export class Category {
      /** icon */
      icon?: string;

      /** id */
      id?: number;

      /** last */
      last?: number;

      /** leaf */
      leaf?: number;

      /** level */
      level?: number;

      /** mchNumber */
      mchNumber?: number;

      /** name */
      name?: string;

      /** parentId */
      parentId?: number;

      /** parentName */
      parentName?: string;

      /** path */
      path?: string;

      /** sort */
      sort?: number;

      /** surchargeRate */
      surchargeRate?: number;
    }

    export class CategoryAttr {
      /** attrId */
      attrId?: number;

      /** attrNameEN */
      attrNameEN?: string;

      /** attrNameSCH */
      attrNameSCH?: string;

      /** attrNameTCH */
      attrNameTCH?: string;

      /** chooseStatus */
      chooseStatus?: number;

      /** classifyName */
      classifyName?: string;

      /** frontShow */
      frontShow?: number;

      /** requireStatus */
      requireStatus?: number;

      /** searchShow */
      searchShow?: number;

      /** valueCount */
      valueCount?: number;
    }

    export class CategoryAttrRel {
      /** attributeIds */
      attributeIds?: Array<number>;

      /** categoryId */
      categoryId?: number;
    }

    export class CategoryAttrRequest {
      /** attrName */
      attrName?: string;

      /** classifyName */
      classifyName?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;
    }

    export class CategoryBrand {
      /** brandId */
      brandId?: number;

      /** brandNameEN */
      brandNameEN?: string;

      /** brandNameSCH */
      brandNameSCH?: string;

      /** brandNameTCH */
      brandNameTCH?: string;

      /** logo */
      logo?: string;
    }

    export class CategoryBrandRel {
      /** brandIds */
      brandIds?: Array<number>;

      /** categoryId */
      categoryId?: number;
    }

    export class CategoryDetail {
      /** backendCategory */
      backendCategory?: defs.product.BackendCategory;

      /** categoryAttrs */
      categoryAttrs?: Array<defs.product.CategoryAttr>;

      /** categoryBrands */
      categoryBrands?: Array<defs.product.CategoryBrand>;

      /** parentCategoryAttrs */
      parentCategoryAttrs?: Array<defs.product.CategoryAttr>;

      /** parentCategoryBrands */
      parentCategoryBrands?: Array<defs.product.CategoryBrand>;
    }

    export class CategoryProduct {
      /** 前台分类ID */
      categoryViewId?: number;

      /** 前台分类名 */
      name?: string;

      /** 商品列表 */
      variants?: Array<defs.product.Variant>;
    }

    export class CategoryProductPage {
      /** 前台分类ID */
      categoryViewId?: number;

      /** 前台分类名 */
      name?: string;

      /** 商品列表 */
      variants?: defs.product.PageInfo<defs.product.Variant>;
    }

    export class CategoryProductPageQuery {
      /** 当前页 */
      pageNum?: number;

      /** 每页大小 */
      pageSize?: number;

      /** 前台分类ID */
      viewId?: number;
    }

    export class CategoryView {
      /** 图标地址 */
      icon?: string;

      /** 前台分类ID */
      id?: number;

      /** 是否末级 0: 否, 1: 是 */
      last?: number;

      /** 是否叶子节点 0: 否, 1: 是 */
      leaf?: number;

      /** 分类层级 */
      level?: number;

      /** 分类名 */
      name?: string;

      /** 上级分类ID */
      parentId?: number;

      /** 上级分类名 */
      parentName?: string;
    }

    export class CategoryViewCategory {
      /** categoryId */
      categoryId?: number;

      /** level */
      level?: number;

      /** path */
      path?: string;
    }

    export class CategoryViewCategoryRel {
      /** categoryIds */
      categoryIds?: Array<number>;

      /** categoryViewId */
      categoryViewId?: number;
    }

    export class CategoryViewDetail {
      /** categories */
      categories?: Array<defs.product.CategoryViewCategory>;

      /** categoryView */
      categoryView?: defs.product.CategoryView;

      /** variants */
      variants?: Array<defs.product.CategoryViewVariant>;
    }

    export class CategoryViewTemplate {
      /** coverageArea */
      coverageArea?: Array<string>;

      /** defaultStatus */
      defaultStatus?: number;

      /** deliveryLabel */
      deliveryLabel?: number;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** status */
      status?: number;

      /** storeGroup */
      storeGroup?: string;
    }

    export class CategoryViewVariant {
      /** image */
      image?: string;

      /** productId */
      productId?: number;

      /** productName */
      productName?: string;

      /** upc */
      upc?: string;

      /** variantId */
      variantId?: string;
    }

    export class CategoryViewVariantRel {
      /** categoryViewId */
      categoryViewId?: number;

      /** variantIds */
      variantIds?: Array<string>;
    }

    export class Comment {
      /** 是否精选评论 */
      chosen?: number;

      /** 评价日期 */
      commentTime?: string;

      /** 评论内容 */
      content?: string;

      /** 评论ID */
      id?: number;

      /** 会员图标 */
      memberIcon?: string;

      /** 昵称 */
      nickName?: string;

      /** 订单ID */
      orderId?: number;

      /** 评论图片，多张用;号分隔 */
      pictures?: string;

      /** 商品ID */
      productId?: number;

      /** 是否购买 */
      purchaseStatus?: number;

      /** 评分 */
      star?: number;

      /** 店铺ID */
      storeId?: number;

      /** 规格名 */
      variantName?: string;
    }

    export class CommentPageQuery {
      /** 当前页 */
      pageNum?: number;

      /** 每页大小 */
      pageSize?: number;

      /** 商品ID */
      productId?: number;
    }

    export class DiscountProduct {
      /** discount */
      discount?: number;

      /** functionType */
      functionType?: number;

      /** image */
      image?: string;

      /** productId */
      productId?: number;

      /** productName */
      productName?: string;

      /** upc */
      upc?: string;
    }

    export class DragCategory {
      /** category */
      category?: defs.product.Category;

      /** newParentId */
      newParentId?: number;

      /** parentCategory */
      parentCategory?: defs.product.Category;
    }

    export class DragCategoryView {
      /** categoryView */
      categoryView?: defs.product.CategoryView;

      /** newParentId */
      newParentId?: number;

      /** parentCategoryView */
      parentCategoryView?: defs.product.CategoryView;
    }

    export class EditStatusFunctionRequest {
      /** id */
      id: number;

      /** 状态  0:禁用, 1: 启用 */
      status: number;
    }

    export class FavoriteVariantReq {
      /** 品牌ID */
      brandId?: number;

      /** 商品ID */
      productId?: number;

      /** 商品规格所属门店ID */
      storeId?: number;

      /** 规格ID */
      variantId?: string;
    }

    export class FunctionDto {
      /** 点击量 */
      clickNum?: number;

      /** 指向链接 */
      directionUrl: string;

      /** id */
      id?: number;

      /** 功能区名称 */
      name: string;

      /** 英文图 url */
      pictureEn: string;

      /** 简体中文图 url */
      pictureSch: string;

      /** 繁体中文图 url */
      pictureTch: string;

      /** 平台，1：APP，2：WEB */
      platform?: number;

      /** 发布施时间 */
      releaseTime?: string;

      /** 1:即时发布 ,2:定时发布 */
      releaseType: number;

      /** 排序 */
      sort: number;

      /** 状态  0:禁用, 1: 启用 */
      status?: number;

      /** 更新姓名 */
      updatedByName?: string;

      /** 更新时间 */
      updatedTime?: string;
    }

    export class FunctionProduct {
      /** category */
      category?: string;

      /** discount */
      discount?: number;

      /** functionType */
      functionType?: number;

      /** hits */
      hits?: number;

      /** image */
      image?: string;

      /** productId */
      productId?: number;

      /** productName */
      productName?: string;

      /** sales */
      sales?: number;

      /** sort */
      sort?: number;

      /** status */
      status?: number;

      /** storeId */
      storeId?: number;

      /** upc */
      upc?: string;

      /** updatedByName */
      updatedByName?: string;

      /** updatedTime */
      updatedTime?: string;

      /** variantId */
      variantId?: string;
    }

    export class FunctionProductReq {
      /** functionType */
      functionType?: number;

      /** orderBy */
      orderBy?: number;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** productName */
      productName?: string;

      /** status */
      status?: number;

      /** storeId */
      storeId?: number;
    }

    export class ImportLimitResponse {
      /** error */
      error?: number;

      /** fileId */
      fileId?: number;

      /** success */
      success?: number;
    }

    export class ImportVariantVO {
      /** failRecords */
      failRecords?: number;

      /** successRecords */
      successRecords?: number;

      /** totalRecords */
      totalRecords?: number;
    }

    export class ModifyProductInfo {
      /** 门店活动价 */
      activityPrice?: number;

      /** 销售价格 */
      price?: number;

      /** 商品ID */
      productId: number;

      /** 限购数量 */
      purchaseLimit?: number;

      /** 状态 */
      status?: number;

      /** 门店ID列表 */
      storeIds: Array<number>;

      /** 规格ID */
      variantId: string;
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

    export class PageVO<T0 = any> {
      /** hasNextPage */
      hasNextPage?: boolean;

      /** list */
      list?: Array<T0>;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** pages */
      pages?: number;

      /** total */
      total?: number;
    }

    export class Policy {
      /** 声明ID */
      id?: number;

      /** 英文声明 */
      statementEN?: string;

      /** 简体声明 */
      statementSCH?: string;

      /** 繁体声明 */
      statementTCH?: string;

      /** 门店分组 */
      storeGroup: string;

      /** 声明类型，1: 注意事项, 2: 免责声明 */
      type: number;
    }

    export class Popup {
      /** 区域 */
      areas?: Array<string>;

      /** 覆盖业务 0:default, 1:当日达, 2:次日达, 3:全美直邮 */
      businesses: Array<number>;

      /** 是否有指向 0:无，1:有 */
      directionFlag: number;

      /** 指向类型 */
      directionType: number;

      /** 指向链接 */
      directionUrl: string;

      /** 点击量 */
      hits?: number;

      /** 弹窗配置ID */
      id?: number;

      /** 英文图片 */
      imageEN: string;

      /** 简体中文图片 */
      imageSCH: string;

      /** 繁体中文图片 */
      imageTCH: string;

      /** 弹窗名称 */
      name: string;

      /** 发布时间 */
      releaseTime?: string;

      /** 发布类型 1:即时发布 ,2:定时发布 */
      releaseType: number;

      /** 显示顺序 */
      sort: number;

      /** 状态  0:下架，1:上架 */
      status?: number;

      /** 更新人 */
      updatedByName?: string;

      /** 更新时间 */
      updatedTime?: string;
    }

    export class PopupReq {
      /** 弹窗名称 */
      name?: string;

      /** 更新时间排序 0：降序，1：升序 */
      orderBy?: number;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 状态 */
      status?: number;
    }

    export class ProductAttr {
      /** attributes */
      attributes?: Array<defs.product.Attribute>;

      /** productId */
      productId?: number;
    }

    export class ProductDetail {
      /** 货号编码 */
      articleNumber?: number;

      /** 属性信息 */
      attributes?: Array<defs.product.Attribute>;

      /** 平均星级 */
      avgStar?: number;

      /** 后台分类路径 */
      backendCategory?: Array<string>;

      /** 后台分类ID */
      backendCategoryId?: number;

      /** 后台分类路径 */
      backendCategoryPathId?: Array<number>;

      /** 品牌信息 */
      brand?: defs.product.Brand;

      /** 简要描述 */
      briefDesc?: string;

      /** 评论总数 */
      commentCount?: number;

      /** 商品评论列表 */
      comments?: Array<defs.product.Comment>;

      /** 详细描述 */
      detailDesc?: string;

      /** 商品ID */
      productId?: number;

      /** 图片列表 */
      productImages?: Array<defs.product.ProductImage>;

      /** 商品名 */
      productName?: string;

      /** 备注 */
      remark?: string;

      /** 规格信息 */
      variants?: Array<defs.product.Variant>;
    }

    export class ProductImage {
      /** ID */
      id?: number;

      /** 图片或视频地址 */
      path: string;

      /** 商品ID */
      productId: number;

      /** 类型：1->主图，2->商品详情图，3->商品标签图，4->视频，5->其它 */
      type: number;
    }

    export class ProductSeo {
      /** 英文描述 */
      descriptionEN?: string;

      /** 简体描述 */
      descriptionSCH?: string;

      /** 繁体描述 */
      descriptionTCH?: string;

      /** 商品SEO ID */
      id?: number;

      /** 英文关键词 */
      keywordsEN?: string;

      /** 简体关键词 */
      keywordsSCH?: string;

      /** 繁体关键词 */
      keywordsTCH?: string;

      /** 商品ID */
      productId: number;

      /** 英文标题 */
      titleEN?: string;

      /** 简体标题 */
      titleSCH?: string;

      /** 繁体标题 */
      titleTCH?: string;
    }

    export class ProductVariant {
      /** 图片 */
      image?: string;

      /** mainUpc */
      mainUpc?: string;

      /** 商品ID */
      productId?: number;

      /** 状态 */
      status?: number;

      /** 规格ID */
      variantId?: string;

      /** 规格英文名 */
      variantNameEN?: string;

      /** 规格简体名 */
      variantNameSCH?: string;

      /** 规格繁体名 */
      variantNameTCH?: string;
    }

    export class QueryFunctionRequest {
      /** 功能区名称 */
      name?: string;

      /** 更新时间排序，0：降序，1：升序 */
      orderBy?: number;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 平台，1：APP，2：WEB */
      platform: number;

      /** 状态  0:禁用, 1: 启用 */
      status?: number;
    }

    export class QueryStoreProductCondition {
      /** articleNumbers */
      articleNumbers?: Array<number>;

      /** categoryIds */
      categoryIds?: Array<number>;

      /** endUpdatedTime */
      endUpdatedTime?: string;

      /** lang */
      lang?: string;

      /** locationId */
      locationId?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** productName */
      productName?: string;

      /** startUpdatedTime */
      startUpdatedTime?: string;

      /** status */
      status?: number;

      /** storeIds */
      storeIds?: Array<number>;

      /** upcs */
      upcs?: Array<string>;

      /** wmsId */
      wmsId?: number;
    }

    export class QueryThemeRequest {
      /** 专题区名称 */
      name?: string;

      /** 更新时间排序 0：降序，1：升序 */
      orderBy?: number;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 状态  0:已下架, 1: 已上架 */
      status?: number;
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

    export class RestockNoticeRequest {
      /** 商品 ID */
      productId?: number;
    }

    export class S3PreSignInfo {
      /** 上传后的访问地址 */
      key?: string;

      /** 上传 URL，请求方式 PUT */
      url?: string;
    }

    export class StoreProductField {
      /** 英文字段名 */
      fieldEn: string;

      /** 简体字段名 */
      fieldSch?: string;

      /** 繁体字段名 */
      fieldTch?: string;

      /** 显示状态 */
      showStatus?: number;
    }

    export class StoreProductList {
      /** 是否含酒精：0‐>否；1‐>是 */
      alcoholic?: number;

      /** 可用库存 */
      availableStock?: number;

      /** 所属后台分类 */
      backendCategoryPath?: string;

      /** 品牌ID */
      brandId?: number;

      /** 商品品牌 */
      brandName?: string;

      /** 英文简要描述 */
      briefDescEn?: string;

      /** 简体简要描述 */
      briefDescSch?: string;

      /** 繁体简要描述 */
      briefDescTch?: string;

      /** 所属前台分类 */
      categoryViewPath?: Array<string>;

      /** 当前售价 */
      currentPrice?: number;

      /** 英文详细描述 */
      detailDescEn?: string;

      /** 简体详细描述 */
      detailDescSch?: string;

      /** 繁体详细描述 */
      detailDescTch?: string;

      /** 锁定库存 */
      lockStock?: number;

      /** MCH NUMBER */
      mchNumber?: number;

      /** 商家ID */
      merchantId?: number;

      /** 商家名称 */
      merchantName?: string;

      /** 商品净重 */
      netWeight?: number;

      /** 净重单位 */
      netWeightUom?: string;

      /** 线上活动价 */
      onlinePrice?: number;

      /** 商品售价 */
      price?: number;

      /** 产品后台分类ID */
      productCategoryId?: number;

      /** 商品ID */
      productId?: number;

      /** 商品主图 */
      productImageUrl?: string;

      /** 商品英文名称 */
      productNameEn?: string;

      /** 商品中文简体名称 */
      productNameSch?: string;

      /** 商品中文繁体名称 */
      productNameTch?: string;

      /** 商品视频 */
      productVideoUrl?: string;

      /** 促销区间 */
      promotionScope?: string;

      /** 促销类型：1. 直降 2. 买赠 3. 第X件折扣 */
      promotionType?: number;

      /** 门店活动价 */
      salePrice?: number;

      /** 销售单位 */
      saleUom?: string;

      /** 可售库存 = 可用库存*比例 */
      saleableStock?: number;

      /** 商品upc状态 0：禁用，1：启用 */
      status?: number;

      /** 门店ID */
      storeId?: number;

      /** 门店名称 */
      storeName?: string;

      /** 总库存库存 = 锁定库存+锁定库存 */
      totalStock?: number;

      /** 商品类型 1: 标准商品, 2: 称重商品 */
      type?: number;

      /** upc */
      upc?: string;

      /** upc缩略图 */
      upcImageUrl?: string;

      /** 更新人ID */
      updatedBy?: number;

      /** 更新人名称 */
      updatedByName?: string;

      /** 更新时间 */
      updatedTime?: string;

      /** variantId */
      variantId?: string;

      /** 位置编码 */
      wmsLocation?: string;

      /** 仓库名称 */
      wmsName?: string;
    }

    export class StoreVariantDetail {
      /** netWeight */
      netWeight?: number;

      /** netWeightUom */
      netWeightUom?: string;

      /** price */
      price?: number;

      /** saleUom */
      saleUom?: string;

      /** storeId */
      storeId?: number;

      /** variantId */
      variantId?: string;
    }

    export class TemplateRequest {
      /** name */
      name?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;
    }

    export class Theme {
      /** O2O区域 */
      areas?: Array<string>;

      /** 覆盖业务，0:默认 1:当日达(O2O) 2:次日达(9988) 3:全美直邮(8899) */
      businessTypes: Array<number>;

      /** 专题ID */
      id?: number;

      /** 发布时间 */
      releaseTime?: string;

      /** 发布类型 1:及时发布  2:定时发布 */
      releaseType?: number;

      /** 排序值 */
      sort?: number;

      /** 状态 0:已下架, 1:已上架 */
      status?: number;

      /** 专题英文名称 */
      themeNameEN: string;

      /** 专题简体名称 */
      themeNameSCH: string;

      /** 专题繁体名称 */
      themeNameTCH: string;

      /** 更新人 */
      updatedByName?: string;

      /** 更新时间 */
      updatedTime?: string;

      /** 商品数 */
      variantCount?: number;
    }

    export class ThemeAndFunction {
      /** 功能区类型，1：每周特价，2：新品发售，3：人气热卖，4：食谱 */
      functionType?: number;

      /** 列表ID */
      id?: number;

      /** 名称 */
      name?: string;

      /** 功能区图片 */
      picture?: string;

      /** 排序 */
      sort?: number;

      /** 专题区类型，1：自定义专题列表，2：常买商品专题，3：附近商品专题 */
      themeType?: number;

      /** 功能区跳转链接 */
      url?: string;

      /** 商品列表 */
      variants?: Array<defs.product.Variant>;
    }

    export class ThemeProduct {
      /** 后台分类 */
      category?: string;

      /** 折扣 */
      discount?: number;

      /** 点击量 */
      hits?: number;

      /** 缩略图 */
      image?: string;

      /** 商品ID */
      productId: number;

      /** 商品名 */
      productName: string;

      /** 销量 */
      sales?: number;

      /** 排序值 */
      sort?: number;

      /** 专题区ID */
      themeId?: number;

      /** UPC */
      upc: string;

      /** 规格ID */
      variantId?: string;
    }

    export class UpcRequest {
      /** articleNumber */
      articleNumber?: number;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** upc */
      upc?: string;
    }

    export class UpdateFunctionProduct {
      /** functionType */
      functionType?: number;

      /** productId */
      productId?: number;

      /** sort */
      sort?: number;

      /** status */
      status?: number;

      /** storeId */
      storeId?: number;

      /** variantId */
      variantId?: string;
    }

    export class Variant {
      /** 货号编码 */
      articleNumber?: number;

      /** 库存数量 */
      available?: number;

      /** 品牌ID */
      brandId?: number;

      /** 品牌名 */
      brandName?: string;

      /** 产地 */
      cooCode?: string;

      /** 是否有crv费用 */
      crv?: number;

      /** crv费用 */
      crvFee?: number;

      /** 是否收藏 */
      favorite?: boolean;

      /** 收藏时间 */
      favoriteTime?: string;

      /** 图片地址 */
      image?: string;

      /** 商品净重 */
      netWeight?: number;

      /** 净重单位 */
      netWeightUom?: string;

      /** 市场价格 */
      price?: number;

      /** 商品ID */
      productId?: number;

      /** 商品名 */
      productName?: string;

      /** 最大购买限制 */
      purchaseLimit?: number;

      /** 零售价格 */
      retailPrice?: number;

      /** 销量 */
      sale?: number;

      /** 销售价格 */
      salePrice?: number;

      /** 售卖单位 */
      saleUom?: string;

      /** 标准重量，单位磅 */
      standardWeight?: number;

      /** 门店ID */
      storeId?: number;

      /** 促销标签 */
      tag?: string;

      /** 商品类型 */
      type?: number;

      /** upcID */
      upcId?: string;

      /** 规格ID */
      variantId?: string;

      /** 规格名 */
      variantName?: string;

      /** 商品体积 */
      volume?: number;
    }

    export class VariantDetail {
      /** cooCode */
      cooCode?: string;

      /** defaultNetWeight */
      defaultNetWeight?: number;

      /** defaultNetWeightUom */
      defaultNetWeightUom?: string;

      /** defaultPrice */
      defaultPrice?: number;

      /** defaultSaleUom */
      defaultSaleUom?: string;

      /** image */
      image?: string;

      /** mainUpc */
      mainUpc?: string;

      /** productId */
      productId?: number;

      /** storeVariantDetails */
      storeVariantDetails?: Array<defs.product.StoreVariantDetail>;

      /** type */
      type?: number;

      /** variantId */
      variantId?: string;

      /** variantNameEN */
      variantNameEN?: string;

      /** variantNameSCH */
      variantNameSCH?: string;

      /** variantNameTCH */
      variantNameTCH?: string;

      /** variantSize */
      variantSize?: defs.product.VariantSize;
    }

    export class VariantSize {
      /** 高度 */
      high?: number;

      /** id */
      id?: number;

      /** 长度 */
      length?: number;

      /** 是否打包 */
      packFlag?: number;

      /** 打包高度 */
      packHigh?: number;

      /** 打包长度 */
      packLength?: number;

      /** 装箱数量 */
      packQuantity?: number;

      /** 打包重量 */
      packWeight?: number;

      /** 打包重量单位 */
      packWeightUom?: string;

      /** 打包宽度 */
      packWidth?: number;

      /** variantId */
      variantId?: string;

      /** 重量 */
      weight?: number;

      /** 重量单位 */
      weightUom?: string;

      /** 宽度 */
      width?: number;
    }

    export class VariantStoreActivity {
      /** availableStock */
      availableStock?: number;

      /** discount */
      discount?: number;

      /** lockStock */
      lockStock?: number;

      /** onlineActivityPrice */
      onlineActivityPrice?: number;

      /** price */
      price?: number;

      /** purchaseLimit */
      purchaseLimit?: number;

      /** salePrice */
      salePrice?: number;

      /** sellableStock */
      sellableStock?: number;

      /** status */
      status?: number;

      /** storeActivityPrice */
      storeActivityPrice?: number;

      /** storeGroup */
      storeGroup?: string;

      /** storeId */
      storeId?: number;

      /** storeName */
      storeName?: string;

      /** totalStock */
      totalStock?: number;

      /** updatedByName */
      updatedByName?: string;

      /** updatedTime */
      updatedTime?: string;
    }

    export class VariantStoreRequest {
      /** purchaseLimit */
      purchaseLimit?: number;

      /** salePrice */
      salePrice?: number;

      /** status */
      status?: number;

      /** storeId */
      storeId?: number;

      /** variantId */
      variantId?: string;
    }
  }
}

declare namespace API {
  export namespace product {
    /**
     * 后台管理-前台首页配置管理
     */
    export namespace boAppHome {
      /**
       * 新增配置
       * /bo/homePage/setting
       */
      export namespace add {
        export type addBody = defs.product.FunctionDto;
        export type addOptions = Record<string, any>;
        export type addResponse = defs.product.Response<number>;
        export type request = (
          body: addBody,
          options?: addOptions,
        ) => addResponse;
      }

      /**
       * 编辑配置
       * /bo/homePage/setting
       */
      export namespace edit {
        export type editBody = defs.product.FunctionDto;
        export type editOptions = Record<string, any>;
        export type editResponse = defs.product.Response;
        export type request = (
          body: editBody,
          options?: editOptions,
        ) => editResponse;
      }

      /**
       * 编辑状态
       * /bo/homePage/setting/editStatus
       */
      export namespace editStatus {
        export type editStatusBody = defs.product.EditStatusFunctionRequest;
        export type editStatusOptions = Record<string, any>;
        export type editStatusResponse = defs.product.Response<number>;
        export type request = (
          body: editStatusBody,
          options?: editStatusOptions,
        ) => editStatusResponse;
      }

      /**
       * 选择折扣商品
       * /bo/homePage/setting/function/discountProduct/select
       */
      export namespace selectDiscountProduct {
        export type selectDiscountProductBody = defs.product.DiscountProduct;
        export type selectDiscountProductOptions = Record<string, any>;
        export type selectDiscountProductResponse = defs.product.Response;
        export type request = (
          body: selectDiscountProductBody,
          options?: selectDiscountProductOptions,
        ) => selectDiscountProductResponse;
      }

      /**
       * 功能区商品列表
       * /bo/homePage/setting/function/product/list
       */
      export namespace pageFunctionProduct {
        export type pageFunctionProductBody = defs.product.FunctionProductReq;
        export type pageFunctionProductOptions = Record<string, any>;
        export type pageFunctionProductResponse = defs.product.Response<
          defs.product.PageInfo<defs.product.FunctionProduct>
        >;
        export type request = (
          body: pageFunctionProductBody,
          options?: pageFunctionProductOptions,
        ) => pageFunctionProductResponse;
      }

      /**
       * 移除商品
       * /bo/homePage/setting/function/remove
       */
      export namespace removeProduct {
        export type removeProductBody = defs.product.UpdateFunctionProduct;
        export type removeProductOptions = Record<string, any>;
        export type removeProductResponse = defs.product.Response;
        export type request = (
          body: removeProductBody,
          options?: removeProductOptions,
        ) => removeProductResponse;
      }

      /**
       * 设置排序
       * /bo/homePage/setting/function/sort/setting
       */
      export namespace setSort {
        export type setSortBody = defs.product.UpdateFunctionProduct;
        export type setSortOptions = Record<string, any>;
        export type setSortResponse = defs.product.Response;
        export type request = (
          body: setSortBody,
          options?: setSortOptions,
        ) => setSortResponse;
      }

      /**
       * 批量更新状态
       * /bo/homePage/setting/function/status/batchModify
       */
      export namespace batchModifyStatus {
        export type batchModifyStatusBody =
          Array<defs.product.UpdateFunctionProduct>;
        export type batchModifyStatusOptions = Record<string, any>;
        export type batchModifyStatusResponse = defs.product.Response;
        export type request = (
          body: batchModifyStatusBody,
          options?: batchModifyStatusOptions,
        ) => batchModifyStatusResponse;
      }

      /**
       * 状态更新
       * /bo/homePage/setting/function/status/modify
       */
      export namespace modifyStatus {
        export type modifyStatusBody = defs.product.UpdateFunctionProduct;
        export type modifyStatusOptions = Record<string, any>;
        export type modifyStatusResponse = defs.product.Response;
        export type request = (
          body: modifyStatusBody,
          options?: modifyStatusOptions,
        ) => modifyStatusResponse;
      }

      /**
       * 配置列表
       * /bo/homePage/setting/list
       */
      export namespace list {
        export type listBody = defs.product.QueryFunctionRequest;
        export type listOptions = Record<string, any>;
        export type listResponse = defs.product.Response<
          defs.product.PageInfo<defs.product.FunctionDto>
        >;
        export type request = (
          body: listBody,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 新建/编辑弹窗
       * /bo/homePage/setting/popup/createOrEdit
       */
      export namespace createOrEditPopup {
        export type createOrEditPopupBody = defs.product.Popup;
        export type createOrEditPopupOptions = Record<string, any>;
        export type createOrEditPopupResponse = defs.product.Response;
        export type request = (
          body: createOrEditPopupBody,
          options?: createOrEditPopupOptions,
        ) => createOrEditPopupResponse;
      }

      /**
       * 查询弹窗配置列表
       * /bo/homePage/setting/popup/list
       */
      export namespace pagePopup {
        export type pagePopupBody = defs.product.PopupReq;
        export type pagePopupOptions = Record<string, any>;
        export type pagePopupResponse = defs.product.Response<
          defs.product.PageInfo<defs.product.Popup>
        >;
        export type request = (
          body: pagePopupBody,
          options?: pagePopupOptions,
        ) => pagePopupResponse;
      }

      /**
       * 修改弹窗状态
       * /bo/homePage/setting/popup/modifyStatus
       */
      export namespace postSettingPopupModifyStatus {
        export type postSettingPopupModifyStatusParam = {
          /** id */
          id: number;

          /** status */
          status: number;
        };
        export type postSettingPopupModifyStatusOptions = Record<string, any>;
        export type postSettingPopupModifyStatusResponse =
          defs.product.Response;
        export type request = (
          params: postSettingPopupModifyStatusParam,
          options?: postSettingPopupModifyStatusOptions,
        ) => postSettingPopupModifyStatusResponse;
      }

      /**
       * 新建/编辑专题
       * /bo/homePage/setting/theme/createOrEdit
       */
      export namespace createOrEditTheme {
        export type createOrEditThemeBody = defs.product.Theme;
        export type createOrEditThemeOptions = Record<string, any>;
        export type createOrEditThemeResponse = defs.product.Response;
        export type request = (
          body: createOrEditThemeBody,
          options?: createOrEditThemeOptions,
        ) => createOrEditThemeResponse;
      }

      /**
       * 删除专题
       * /bo/homePage/setting/theme/delete
       */
      export namespace deleteTheme {
        export type deleteThemeParam = {
          /** themeId */
          themeId: number;
        };
        export type deleteThemeOptions = Record<string, any>;
        export type deleteThemeResponse = defs.product.Response;
        export type request = (
          params: deleteThemeParam,
          options?: deleteThemeOptions,
        ) => deleteThemeResponse;
      }

      /**
       * 分页查询专题列表
       * /bo/homePage/setting/theme/list
       */
      export namespace pageTheme {
        export type pageThemeBody = defs.product.QueryThemeRequest;
        export type pageThemeOptions = Record<string, any>;
        export type pageThemeResponse = defs.product.Response<
          defs.product.PageInfo<defs.product.Theme>
        >;
        export type request = (
          body: pageThemeBody,
          options?: pageThemeOptions,
        ) => pageThemeResponse;
      }

      /**
       * 移除专题商品
       * /bo/homePage/setting/theme/product/delete
       */
      export namespace deleteThemeProduct {
        export type deleteThemeProductParam = {
          /** themeId */
          themeId: number;

          /** variantId */
          variantId: string;
        };
        export type deleteThemeProductOptions = Record<string, any>;
        export type deleteThemeProductResponse = defs.product.Response;
        export type request = (
          params: deleteThemeProductParam,
          options?: deleteThemeProductOptions,
        ) => deleteThemeProductResponse;
      }

      /**
       * 查询专题区商品列表
       * /bo/homePage/setting/theme/product/page
       */
      export namespace pageThemeProduct {
        export type pageThemeProductParam = {
          /** pageNum */
          pageNum?: number;

          /** pageSize */
          pageSize?: number;

          /** themeId */
          themeId?: number;
        };
        export type pageThemeProductOptions = Record<string, any>;
        export type pageThemeProductResponse = defs.product.Response<
          defs.product.PageInfo<defs.product.ThemeProduct>
        >;
        export type request = (
          params: pageThemeProductParam,
          options?: pageThemeProductOptions,
        ) => pageThemeProductResponse;
      }

      /**
       * 选择商品
       * /bo/homePage/setting/theme/product/select
       */
      export namespace selectProduct {
        export type selectProductParam = {
          /** 分类 */
          category: string;

          /** 图片 */
          image: string;

          /** 商品ID */
          productId: number;

          /** 商品英文名 */
          productNameEN: string;

          /** 商品简体名 */
          productNameSCH: string;

          /** 商品繁体名 */
          productNameTCH: string;

          /** 专题区ID */
          themeId: number;

          /** UPC */
          upc: string;

          /** 规格ID */
          variantId: string;
        };
        export type selectProductOptions = Record<string, any>;
        export type selectProductResponse = defs.product.Response;
        export type request = (
          params: selectProductParam,
          options?: selectProductOptions,
        ) => selectProductResponse;
      }

      /**
       * 设置排序
       * /bo/homePage/setting/theme/product/sort
       */
      export namespace updateSort {
        export type updateSortBody = defs.product.ThemeProduct;
        export type updateSortOptions = Record<string, any>;
        export type updateSortResponse = defs.product.Response;
        export type request = (
          body: updateSortBody,
          options?: updateSortOptions,
        ) => updateSortResponse;
      }

      /**
       * 更新专题状态
       * /bo/homePage/setting/theme/updateStatus
       */
      export namespace updateStatus {
        export type updateStatusParam = {
          /** status */
          status: number;

          /** themeId */
          themeId: number;
        };
        export type updateStatusOptions = Record<string, any>;
        export type updateStatusResponse = defs.product.Response;
        export type request = (
          params: updateStatusParam,
          options?: updateStatusOptions,
        ) => updateStatusResponse;
      }

      /**
       * 删除菜单
       * /bo/homePage/setting/{id}
       */
      export namespace del {
        export type delPath = {
          /** id */
          id: number;
        };
        export type delOptions = Record<string, any>;
        export type delResponse = defs.product.Response;
        export type request = (
          path: delPath,
          options?: delOptions,
        ) => delResponse;
      }
    }

    /**
     * 商品属性管理
     */
    export namespace boAttribute {
      /**
       * 关联商品属性
       * /bo/attribute/attr/update
       */
      export namespace associateAttr {
        export type associateAttrBody = defs.product.ProductAttr;
        export type associateAttrOptions = Record<string, any>;
        export type associateAttrResponse = defs.product.Response;
        export type request = (
          body: associateAttrBody,
          options?: associateAttrOptions,
        ) => associateAttrResponse;
      }

      /**
       * 查询所有属性分类
       * /bo/attribute/classify/all
       */
      export namespace queryAllAttrClassify {
        export type queryAllAttrClassifyOptions = Record<string, any>;
        export type queryAllAttrClassifyResponse = defs.product.Response<
          Array<defs.product.AttributeClassify>
        >;
        export type request = (
          options?: queryAllAttrClassifyOptions,
        ) => queryAllAttrClassifyResponse;
      }

      /**
       * 新增属性分类
       * /bo/attribute/classify/create
       */
      export namespace createAttrClassify {
        export type createAttrClassifyBody = defs.product.AttributeClassify;
        export type createAttrClassifyOptions = Record<string, any>;
        export type createAttrClassifyResponse = defs.product.Response;
        export type request = (
          body: createAttrClassifyBody,
          options?: createAttrClassifyOptions,
        ) => createAttrClassifyResponse;
      }

      /**
       * 修改属性分类
       * /bo/attribute/classify/modify
       */
      export namespace modifyAttrClassify {
        export type modifyAttrClassifyBody = defs.product.AttributeClassify;
        export type modifyAttrClassifyOptions = Record<string, any>;
        export type modifyAttrClassifyResponse = defs.product.Response;
        export type request = (
          body: modifyAttrClassifyBody,
          options?: modifyAttrClassifyOptions,
        ) => modifyAttrClassifyResponse;
      }

      /**
       * 分页查询属性分类
       * /bo/attribute/classify/page
       */
      export namespace pageAttrClassify {
        export type pageAttrClassifyBody =
          defs.product.AttributeClassifyRequest;
        export type pageAttrClassifyOptions = Record<string, any>;
        export type pageAttrClassifyResponse = defs.product.Response<
          defs.product.PageVO<defs.product.AttributeClassify>
        >;
        export type request = (
          body: pageAttrClassifyBody,
          options?: pageAttrClassifyOptions,
        ) => pageAttrClassifyResponse;
      }

      /**
       * 创建或编辑属性
       * /bo/attribute/createOrEdit
       */
      export namespace createOrEditAttr {
        export type createOrEditAttrBody = defs.product.BackendAttribute;
        export type createOrEditAttrOptions = Record<string, any>;
        export type createOrEditAttrResponse = defs.product.Response;
        export type request = (
          body: createOrEditAttrBody,
          options?: createOrEditAttrOptions,
        ) => createOrEditAttrResponse;
      }

      /**
       * 修改商品属性状态
       * /bo/attribute/modify
       */
      export namespace modifyAttrStatus {
        export type modifyAttrStatusBody = defs.product.BackendAttribute;
        export type modifyAttrStatusOptions = Record<string, any>;
        export type modifyAttrStatusResponse = defs.product.Response;
        export type request = (
          body: modifyAttrStatusBody,
          options?: modifyAttrStatusOptions,
        ) => modifyAttrStatusResponse;
      }

      /**
       * 查询商品属性
       * /bo/attribute/page
       */
      export namespace pageAttribute {
        export type pageAttributeBody = defs.product.AttributeRequest;
        export type pageAttributeOptions = Record<string, any>;
        export type pageAttributeResponse = defs.product.Response<
          defs.product.PageVO<defs.product.BackendAttribute>
        >;
        export type request = (
          body: pageAttributeBody,
          options?: pageAttributeOptions,
        ) => pageAttributeResponse;
      }

      /**
       * 查询商品属性信息
       * /bo/attribute/query
       */
      export namespace queryProductAttr {
        export type queryProductAttrParam = {
          /** categoryId */
          categoryId: string;
        };
        export type queryProductAttrOptions = Record<string, any>;
        export type queryProductAttrResponse = defs.product.Response<
          Array<defs.product.Attribute>
        >;
        export type request = (
          params: queryProductAttrParam,
          options?: queryProductAttrOptions,
        ) => queryProductAttrResponse;
      }
    }

    /**
     * 后台分类管理
     */
    export namespace boCategory {
      /**
       * 关联属性
       * /bo/category/associate/attr
       */
      export namespace associateAttr {
        export type associateAttrBody = defs.product.CategoryAttrRel;
        export type associateAttrOptions = Record<string, any>;
        export type associateAttrResponse = defs.product.Response<boolean>;
        export type request = (
          body: associateAttrBody,
          options?: associateAttrOptions,
        ) => associateAttrResponse;
      }

      /**
       * 关联品牌
       * /bo/category/associate/brand
       */
      export namespace associateBrand {
        export type associateBrandBody = defs.product.CategoryBrandRel;
        export type associateBrandOptions = Record<string, any>;
        export type associateBrandResponse = defs.product.Response<boolean>;
        export type request = (
          body: associateBrandBody,
          options?: associateBrandOptions,
        ) => associateBrandResponse;
      }

      /**
       * 移除属性
       * /bo/category/attr/remove
       */
      export namespace removeAttr {
        export type removeAttrBody = defs.product.CategoryAttrRel;
        export type removeAttrOptions = Record<string, any>;
        export type removeAttrResponse = defs.product.Response<boolean>;
        export type request = (
          body: removeAttrBody,
          options?: removeAttrOptions,
        ) => removeAttrResponse;
      }

      /**
       * 移除品牌
       * /bo/category/brand/remove
       */
      export namespace removeBrand {
        export type removeBrandBody = defs.product.CategoryBrandRel;
        export type removeBrandOptions = Record<string, any>;
        export type removeBrandResponse = defs.product.Response<boolean>;
        export type request = (
          body: removeBrandBody,
          options?: removeBrandOptions,
        ) => removeBrandResponse;
      }

      /**
       * 查询类目属性
       * /bo/category/categoryAttr/page
       */
      export namespace getPageCategoryAttr {
        export type getPageCategoryAttrBody = defs.product.CategoryAttrRequest;
        export type getPageCategoryAttrOptions = Record<string, any>;
        export type getPageCategoryAttrResponse = defs.product.Response<
          defs.product.PageVO<defs.product.CategoryAttr>
        >;
        export type request = (
          body: getPageCategoryAttrBody,
          options?: getPageCategoryAttrOptions,
        ) => getPageCategoryAttrResponse;
      }

      /**
       * 查询类目品牌
       * /bo/category/categoryBrand/page
       */
      export namespace getPageCategoryBrand {
        export type getPageCategoryBrandBody = defs.product.BrandRequest;
        export type getPageCategoryBrandOptions = Record<string, any>;
        export type getPageCategoryBrandResponse = defs.product.Response<
          defs.product.PageVO<defs.product.BackendBrand>
        >;
        export type request = (
          body: getPageCategoryBrandBody,
          options?: getPageCategoryBrandOptions,
        ) => getPageCategoryBrandResponse;
      }

      /**
       * 新建或编辑类目
       * /bo/category/createOrEdit
       */
      export namespace createOrEditCategory {
        export type createOrEditCategoryBody = defs.product.Category;
        export type createOrEditCategoryOptions = Record<string, any>;
        export type createOrEditCategoryResponse =
          defs.product.Response<boolean>;
        export type request = (
          body: createOrEditCategoryBody,
          options?: createOrEditCategoryOptions,
        ) => createOrEditCategoryResponse;
      }

      /**
       * 跨层拖拽
       * /bo/category/crossLevelDrag
       */
      export namespace crossLevelDrag {
        export type crossLevelDragBody = defs.product.DragCategory;
        export type crossLevelDragOptions = Record<string, any>;
        export type crossLevelDragResponse = defs.product.Response;
        export type request = (
          body: crossLevelDragBody,
          options?: crossLevelDragOptions,
        ) => crossLevelDragResponse;
      }

      /**
       * 获取类目详情
       * /bo/category/detail
       */
      export namespace getCategoryDetail {
        export type getCategoryDetailParam = {
          /** categoryId */
          categoryId: string;
        };
        export type getCategoryDetailOptions = Record<string, any>;
        export type getCategoryDetailResponse =
          defs.product.Response<defs.product.CategoryDetail>;
        export type request = (
          params: getCategoryDetailParam,
          options?: getCategoryDetailOptions,
        ) => getCategoryDetailResponse;
      }

      /**
       * 删除类目
       * /bo/category/detail/delete
       */
      export namespace deleteCategoryDetail {
        export type deleteCategoryDetailParam = {
          /** categoryId */
          categoryId: string;
        };
        export type deleteCategoryDetailOptions = Record<string, any>;
        export type deleteCategoryDetailResponse = defs.product.Response;
        export type request = (
          params: deleteCategoryDetailParam,
          options?: deleteCategoryDetailOptions,
        ) => deleteCategoryDetailResponse;
      }

      /**
       * 修改后台类目状态
       * /bo/category/detail/modifyStatus
       */
      export namespace modifyStatus {
        export type modifyStatusParam = {
          /** categoryId */
          categoryId: string;

          /** status */
          status: number;
        };
        export type modifyStatusOptions = Record<string, any>;
        export type modifyStatusResponse = defs.product.Response<boolean>;
        export type request = (
          params: modifyStatusParam,
          options?: modifyStatusOptions,
        ) => modifyStatusResponse;
      }

      /**
       * 获取一级类目
       * /bo/category/level/one
       */
      export namespace getLevelOneCategory {
        export type getLevelOneCategoryOptions = Record<string, any>;
        export type getLevelOneCategoryResponse = defs.product.Response<
          Array<defs.product.BackendCategory>
        >;
        export type request = (
          options?: getLevelOneCategoryOptions,
        ) => getLevelOneCategoryResponse;
      }

      /**
       * 根据名字查询类目链
       * /bo/category/name
       */
      export namespace getCategories {
        export type getCategoriesParam = {
          /** name */
          name: string;
        };
        export type getCategoriesOptions = Record<string, any>;
        export type getCategoriesResponse = defs.product.Response<
          Array<defs.product.BackendCategory>
        >;
        export type request = (
          params: getCategoriesParam,
          options?: getCategoriesOptions,
        ) => getCategoriesResponse;
      }

      /**
       * 同层拖拽
       * /bo/category/sameLevelDrag
       */
      export namespace sameLevelDrag {
        export type sameLevelDragBody = defs.product.Category;
        export type sameLevelDragOptions = Record<string, any>;
        export type sameLevelDragResponse = defs.product.Response;
        export type request = (
          body: sameLevelDragBody,
          options?: sameLevelDragOptions,
        ) => sameLevelDragResponse;
      }

      /**
       * 获取当前类目子类目
       * /bo/category/sub
       */
      export namespace getSubCategory {
        export type getSubCategoryParam = {
          /** categoryId */
          categoryId: string;
        };
        export type getSubCategoryOptions = Record<string, any>;
        export type getSubCategoryResponse = defs.product.Response<
          Array<defs.product.BackendCategory>
        >;
        export type request = (
          params: getSubCategoryParam,
          options?: getSubCategoryOptions,
        ) => getSubCategoryResponse;
      }
    }

    /**
     * 前台分类管理
     */
    export namespace boCategoryView {
      /**
       * 关联后台类目
       * /bo/categoryView/associate/category
       */
      export namespace associateCategory {
        export type associateCategoryBody =
          defs.product.CategoryViewCategoryRel;
        export type associateCategoryOptions = Record<string, any>;
        export type associateCategoryResponse = defs.product.Response;
        export type request = (
          body: associateCategoryBody,
          options?: associateCategoryOptions,
        ) => associateCategoryResponse;
      }

      /**
       * 关联商品规格
       * /bo/categoryView/associate/variant
       */
      export namespace associateVariant {
        export type associateVariantBody = defs.product.CategoryViewVariantRel;
        export type associateVariantOptions = Record<string, any>;
        export type associateVariantResponse = defs.product.Response;
        export type request = (
          body: associateVariantBody,
          options?: associateVariantOptions,
        ) => associateVariantResponse;
      }

      /**
       * 移除后台类目
       * /bo/categoryView/category/remove
       */
      export namespace removeCategory {
        export type removeCategoryBody = defs.product.CategoryViewCategoryRel;
        export type removeCategoryOptions = Record<string, any>;
        export type removeCategoryResponse = defs.product.Response;
        export type request = (
          body: removeCategoryBody,
          options?: removeCategoryOptions,
        ) => removeCategoryResponse;
      }

      /**
       * 新建或编辑前台类目
       * /bo/categoryView/createOrEdit
       */
      export namespace createOrEditCategory {
        export type createOrEditCategoryParam = {
          /** templateId */
          templateId: number;
        };
        export type createOrEditCategoryBody = defs.product.CategoryView;
        export type createOrEditCategoryOptions = Record<string, any>;
        export type createOrEditCategoryResponse = defs.product.Response;
        export type request = (
          params: createOrEditCategoryParam,
          body: createOrEditCategoryBody,
          options?: createOrEditCategoryOptions,
        ) => createOrEditCategoryResponse;
      }

      /**
       * 跨层拖拽
       * /bo/categoryView/crossLevelDrag
       */
      export namespace crossLevelDrag {
        export type crossLevelDragBody = defs.product.DragCategoryView;
        export type crossLevelDragOptions = Record<string, any>;
        export type crossLevelDragResponse = defs.product.Response;
        export type request = (
          body: crossLevelDragBody,
          options?: crossLevelDragOptions,
        ) => crossLevelDragResponse;
      }

      /**
       * 获取前台类目详情
       * /bo/categoryView/detail
       */
      export namespace getCategoryViewDetail {
        export type getCategoryViewDetailParam = {
          /** categoryId */
          categoryId: number;
        };
        export type getCategoryViewDetailOptions = Record<string, any>;
        export type getCategoryViewDetailResponse =
          defs.product.Response<defs.product.CategoryViewDetail>;
        export type request = (
          params: getCategoryViewDetailParam,
          options?: getCategoryViewDetailOptions,
        ) => getCategoryViewDetailResponse;
      }

      /**
       * 删除前台类目
       * /bo/categoryView/detail/delete
       */
      export namespace deleteCategoryDetail {
        export type deleteCategoryDetailParam = {
          /** categoryViewId */
          categoryViewId: number;
        };
        export type deleteCategoryDetailOptions = Record<string, any>;
        export type deleteCategoryDetailResponse = defs.product.Response;
        export type request = (
          params: deleteCategoryDetailParam,
          options?: deleteCategoryDetailOptions,
        ) => deleteCategoryDetailResponse;
      }

      /**
       * 修改前台类目状态
       * /bo/categoryView/detail/modifyStatus
       */
      export namespace disableCategory {
        export type disableCategoryParam = {
          /** categoryViewId */
          categoryViewId: number;

          /** status */
          status: number;
        };
        export type disableCategoryOptions = Record<string, any>;
        export type disableCategoryResponse = defs.product.Response;
        export type request = (
          params: disableCategoryParam,
          options?: disableCategoryOptions,
        ) => disableCategoryResponse;
      }

      /**
       * 根据模板ID获取一级前台类目
       * /bo/categoryView/level/one
       */
      export namespace getLevelOneCategory {
        export type getLevelOneCategoryParam = {
          /** templateId */
          templateId: number;
        };
        export type getLevelOneCategoryOptions = Record<string, any>;
        export type getLevelOneCategoryResponse = defs.product.Response<
          Array<defs.product.CategoryView>
        >;
        export type request = (
          params: getLevelOneCategoryParam,
          options?: getLevelOneCategoryOptions,
        ) => getLevelOneCategoryResponse;
      }

      /**
       * 根据名字查询类目链
       * /bo/categoryView/name
       */
      export namespace getCategories {
        export type getCategoriesParam = {
          /** name */
          name: string;
        };
        export type getCategoriesOptions = Record<string, any>;
        export type getCategoriesResponse = defs.product.Response<
          Array<defs.product.CategoryView>
        >;
        export type request = (
          params: getCategoriesParam,
          options?: getCategoriesOptions,
        ) => getCategoriesResponse;
      }

      /**
       * 同层拖拽
       * /bo/categoryView/sameLevelDrag
       */
      export namespace sameLevelDrag {
        export type sameLevelDragBody = defs.product.CategoryView;
        export type sameLevelDragOptions = Record<string, any>;
        export type sameLevelDragResponse = defs.product.Response;
        export type request = (
          body: sameLevelDragBody,
          options?: sameLevelDragOptions,
        ) => sameLevelDragResponse;
      }

      /**
       * 获取当前类目子类目
       * /bo/categoryView/sub
       */
      export namespace getSubCategory {
        export type getSubCategoryParam = {
          /** categoryViewId */
          categoryViewId: number;
        };
        export type getSubCategoryOptions = Record<string, any>;
        export type getSubCategoryResponse = defs.product.Response<
          Array<defs.product.CategoryView>
        >;
        export type request = (
          params: getSubCategoryParam,
          options?: getSubCategoryOptions,
        ) => getSubCategoryResponse;
      }

      /**
       * 复制前台分类模板
       * /bo/categoryView/template/copy
       */
      export namespace copyTemplate {
        export type copyTemplateParam = {
          /** coverageArea */
          coverageArea?: Array<string>;

          /** defaultStatus */
          defaultStatus?: number;

          /** deliveryLabel */
          deliveryLabel?: number;

          /** id */
          id?: number;

          /** name */
          name?: string;

          /** status */
          status?: number;

          /** storeGroup */
          storeGroup?: string;
        };
        export type copyTemplateOptions = Record<string, any>;
        export type copyTemplateResponse = defs.product.Response;
        export type request = (
          params: copyTemplateParam,
          options?: copyTemplateOptions,
        ) => copyTemplateResponse;
      }

      /**
       * 新增或编辑前台分类模板
       * /bo/categoryView/template/createOrEdit
       */
      export namespace createOrEditTemplate {
        export type createOrEditTemplateBody =
          defs.product.CategoryViewTemplate;
        export type createOrEditTemplateOptions = Record<string, any>;
        export type createOrEditTemplateResponse = defs.product.Response;
        export type request = (
          body: createOrEditTemplateBody,
          options?: createOrEditTemplateOptions,
        ) => createOrEditTemplateResponse;
      }

      /**
       * 将当前模板设为默认模板
       * /bo/categoryView/template/default
       */
      export namespace modifyToDefaultTemplate {
        export type modifyToDefaultTemplateParam = {
          /** deliveryLabel */
          deliveryLabel: number;

          /** templateId */
          templateId: number;
        };
        export type modifyToDefaultTemplateOptions = Record<string, any>;
        export type modifyToDefaultTemplateResponse = defs.product.Response;
        export type request = (
          params: modifyToDefaultTemplateParam,
          options?: modifyToDefaultTemplateOptions,
        ) => modifyToDefaultTemplateResponse;
      }

      /**
       * 修改前台分类模板状态
       * /bo/categoryView/template/modifyStatus
       */
      export namespace modifyTemplateStatus {
        export type modifyTemplateStatusParam = {
          /** status */
          status?: number;

          /** templateId */
          templateId: number;
        };
        export type modifyTemplateStatusOptions = Record<string, any>;
        export type modifyTemplateStatusResponse = defs.product.Response;
        export type request = (
          params: modifyTemplateStatusParam,
          options?: modifyTemplateStatusOptions,
        ) => modifyTemplateStatusResponse;
      }

      /**
       * 分页查询前台分类模板
       * /bo/categoryView/template/page
       */
      export namespace pageTemplate {
        export type pageTemplateBody = defs.product.TemplateRequest;
        export type pageTemplateOptions = Record<string, any>;
        export type pageTemplateResponse = defs.product.Response<
          defs.product.PageVO<defs.product.CategoryViewTemplate>
        >;
        export type request = (
          body: pageTemplateBody,
          options?: pageTemplateOptions,
        ) => pageTemplateResponse;
      }

      /**
       * 导入商品规格
       * /bo/categoryView/variant/import
       */
      export namespace importState {
        export type importStateParam = {
          /** categoryViewId */
          categoryViewId: number;
        };
        export type importStateFormData = FormData;
        export type importStateOptions = Record<string, any>;
        export type importStateResponse =
          defs.product.Response<defs.product.ImportVariantVO>;
        export type request = (
          params: importStateParam,
          formData: importStateFormData,
          options?: importStateOptions,
        ) => importStateResponse;
      }

      /**
       * 移除商品规格
       * /bo/categoryView/variant/remove
       */
      export namespace removeBrand {
        export type removeBrandBody = defs.product.CategoryViewVariantRel;
        export type removeBrandOptions = Record<string, any>;
        export type removeBrandResponse = defs.product.Response;
        export type request = (
          body: removeBrandBody,
          options?: removeBrandOptions,
        ) => removeBrandResponse;
      }
    }

    /**
     * 后台商品管理
     */
    export namespace boProduct {
      /**
       * 查询子upc
       * /bo/product/altUpc
       */
      export namespace findAltUpc {
        export type findAltUpcBody = defs.product.UpcRequest;
        export type findAltUpcOptions = Record<string, any>;
        export type findAltUpcResponse = defs.product.Response<
          defs.product.PageVO<string>
        >;
        export type request = (
          body: findAltUpcBody,
          options?: findAltUpcOptions,
        ) => findAltUpcResponse;
      }

      /**
       * 新建或编辑品牌
       * /bo/product/brand/insertOrEdit
       */
      export namespace insertOrEditBrand {
        export type insertOrEditBrandBody = defs.product.BackendBrand;
        export type insertOrEditBrandOptions = Record<string, any>;
        export type insertOrEditBrandResponse = defs.product.Response;
        export type request = (
          body: insertOrEditBrandBody,
          options?: insertOrEditBrandOptions,
        ) => insertOrEditBrandResponse;
      }

      /**
       * 分页查询商品品牌
       * /bo/product/brand/page
       */
      export namespace pageBrand {
        export type pageBrandBody = defs.product.BrandRequest;
        export type pageBrandOptions = Record<string, any>;
        export type pageBrandResponse = defs.product.Response<
          defs.product.PageVO<defs.product.BackendBrand>
        >;
        export type request = (
          body: pageBrandBody,
          options?: pageBrandOptions,
        ) => pageBrandResponse;
      }

      /**
       * 更新品牌状态
       * /bo/product/brand/updateStatus
       */
      export namespace updateBrandStatus {
        export type updateBrandStatusParam = {
          /** brandId */
          brandId: number;

          /** status */
          status: number;
        };
        export type updateBrandStatusOptions = Record<string, any>;
        export type updateBrandStatusResponse = defs.product.Response;
        export type request = (
          params: updateBrandStatusParam,
          options?: updateBrandStatusOptions,
        ) => updateBrandStatusResponse;
      }

      /**
       * 通过分类Ids查询商品
       * /bo/product/categoryIds
       */
      export namespace listProductByCategoryIds {
        export type listProductByCategoryIdsBody = Array<number>;
        export type listProductByCategoryIdsOptions = Record<string, any>;
        export type listProductByCategoryIdsResponse = defs.product.Response<
          Array<defs.product.BackendProduct>
        >;
        export type request = (
          body: listProductByCategoryIdsBody,
          options?: listProductByCategoryIdsOptions,
        ) => listProductByCategoryIdsResponse;
      }

      /**
       * 获取文件上传的URL
       * /bo/product/file-upload/url
       */
      export namespace getFileUrl {
        export type getFileUrlParam = {
          /** contentType */
          contentType?: string;
        };
        export type getFileUrlOptions = Record<string, any>;
        export type getFileUrlResponse =
          defs.product.Response<defs.product.S3PreSignInfo>;
        export type request = (
          params: getFileUrlParam,
          options?: getFileUrlOptions,
        ) => getFileUrlResponse;
      }

      /**
       * 批量插入或更新主图
       * /bo/product/image/batchInsertOrEdit
       */
      export namespace batchInsertOrEditImage {
        export type batchInsertOrEditImageBody =
          Array<defs.product.ProductImage>;
        export type batchInsertOrEditImageOptions = Record<string, any>;
        export type batchInsertOrEditImageResponse = defs.product.Response;
        export type request = (
          body: batchInsertOrEditImageBody,
          options?: batchInsertOrEditImageOptions,
        ) => batchInsertOrEditImageResponse;
      }

      /**
       * 删除主图
       * /bo/product/image/delete
       */
      export namespace deleteImage {
        export type deleteImageParam = {
          /** id */
          id: number;
        };
        export type deleteImageOptions = Record<string, any>;
        export type deleteImageResponse = defs.product.Response;
        export type request = (
          params: deleteImageParam,
          options?: deleteImageOptions,
        ) => deleteImageResponse;
      }

      /**
       * 商品主图查询
       * /bo/product/image/query
       */
      export namespace queryImage {
        export type queryImageParam = {
          /** productId */
          productId: number;
        };
        export type queryImageOptions = Record<string, any>;
        export type queryImageResponse = defs.product.Response<
          Array<defs.product.ProductImage>
        >;
        export type request = (
          params: queryImageParam,
          options?: queryImageOptions,
        ) => queryImageResponse;
      }

      /**
       * 修改门店商品信息
       * /bo/product/modify
       */
      export namespace modifyProductInfo {
        export type modifyProductInfoBody = defs.product.ModifyProductInfo;
        export type modifyProductInfoOptions = Record<string, any>;
        export type modifyProductInfoResponse = defs.product.Response;
        export type request = (
          body: modifyProductInfoBody,
          options?: modifyProductInfoOptions,
        ) => modifyProductInfoResponse;
      }

      /**
       * 分页查询商品信息
       * /bo/product/page
       */
      export namespace pageProduct {
        export type pageProductBody = defs.product.BackendProductRequest;
        export type pageProductOptions = Record<string, any>;
        export type pageProductResponse = defs.product.Response<
          defs.product.PageVO<defs.product.BackendProduct>
        >;
        export type request = (
          body: pageProductBody,
          options?: pageProductOptions,
        ) => pageProductResponse;
      }

      /**
       * 查询所有声明
       * /bo/product/policy/all
       */
      export namespace findAll {
        export type findAllOptions = Record<string, any>;
        export type findAllResponse = defs.product.Response<
          Array<defs.product.Policy>
        >;
        export type request = (options?: findAllOptions) => findAllResponse;
      }

      /**
       * 批量新增政策声明
       * /bo/product/policy/batchInsert
       */
      export namespace batchInsert {
        export type batchInsertBody = Array<defs.product.Policy>;
        export type batchInsertOptions = Record<string, any>;
        export type batchInsertResponse = defs.product.Response;
        export type request = (
          body: batchInsertBody,
          options?: batchInsertOptions,
        ) => batchInsertResponse;
      }

      /**
       * 删除声明
       * /bo/product/policy/delete
       */
      export namespace deleteById {
        export type deleteByIdParam = {
          /** id */
          id: number;
        };
        export type deleteByIdOptions = Record<string, any>;
        export type deleteByIdResponse = defs.product.Response;
        export type request = (
          params: deleteByIdParam,
          options?: deleteByIdOptions,
        ) => deleteByIdResponse;
      }

      /**
       * 查询声明
       * /bo/product/policy/query
       */
      export namespace query {
        export type queryParam = {
          /** id */
          id: number;
        };
        export type queryOptions = Record<string, any>;
        export type queryResponse = defs.product.Response<defs.product.Policy>;
        export type request = (
          params: queryParam,
          options?: queryOptions,
        ) => queryResponse;
      }

      /**
       * 更新声明
       * /bo/product/policy/update
       */
      export namespace update {
        export type updateBody = defs.product.Policy;
        export type updateOptions = Record<string, any>;
        export type updateResponse = defs.product.Response;
        export type request = (
          body: updateBody,
          options?: updateOptions,
        ) => updateResponse;
      }

      /**
       * 新建或更新商品详情配置
       * /bo/product/productDetail/insertOrEdit
       */
      export namespace insertOrEditProductDetail {
        export type insertOrEditProductDetailBody = defs.product.ProductDetail;
        export type insertOrEditProductDetailOptions = Record<string, any>;
        export type insertOrEditProductDetailResponse = defs.product.Response;
        export type request = (
          body: insertOrEditProductDetailBody,
          options?: insertOrEditProductDetailOptions,
        ) => insertOrEditProductDetailResponse;
      }

      /**
       * 查询商品详情配置
       * /bo/product/productDetail/query
       */
      export namespace findProductDetail {
        export type findProductDetailParam = {
          /** productId */
          productId: number;
        };
        export type findProductDetailOptions = Record<string, any>;
        export type findProductDetailResponse =
          defs.product.Response<defs.product.ProductDetail>;
        export type request = (
          params: findProductDetailParam,
          options?: findProductDetailOptions,
        ) => findProductDetailResponse;
      }

      /**
       * 下载商品导入错误数据
       * /bo/product/purchaseLimit/failed/download/{fileId}
       */
      export namespace downloadImportPurchaseLimitErrors {
        export type downloadImportPurchaseLimitErrorsPath = {
          /** fileId */
          fileId: number;
        };
        export type downloadImportPurchaseLimitErrorsOptions = Record<
          string,
          any
        >;
        export type downloadImportPurchaseLimitErrorsResponse = any;
        export type request = (
          path: downloadImportPurchaseLimitErrorsPath,
          options?: downloadImportPurchaseLimitErrorsOptions,
        ) => downloadImportPurchaseLimitErrorsResponse;
      }

      /**
       * 新建或编辑商品SEO信息
       * /bo/product/seo/insertOrEdit
       */
      export namespace insertOrEditSeo {
        export type insertOrEditSeoBody = defs.product.ProductSeo;
        export type insertOrEditSeoOptions = Record<string, any>;
        export type insertOrEditSeoResponse = defs.product.Response;
        export type request = (
          body: insertOrEditSeoBody,
          options?: insertOrEditSeoOptions,
        ) => insertOrEditSeoResponse;
      }

      /**
       * 查询商品SEO信息
       * /bo/product/seo/query
       */
      export namespace querySeo {
        export type querySeoParam = {
          /** productId */
          productId: number;
        };
        export type querySeoOptions = Record<string, any>;
        export type querySeoResponse =
          defs.product.Response<defs.product.ProductSeo>;
        export type request = (
          params: querySeoParam,
          options?: querySeoOptions,
        ) => querySeoResponse;
      }

      /**
       * 批量更新门店商品规格信息
       * /bo/product/storeVariant/batchUpdate
       */
      export namespace batchUpdateStoreVariant {
        export type batchUpdateStoreVariantBody =
          Array<defs.product.VariantStoreRequest>;
        export type batchUpdateStoreVariantOptions = Record<string, any>;
        export type batchUpdateStoreVariantResponse = defs.product.Response;
        export type request = (
          body: batchUpdateStoreVariantBody,
          options?: batchUpdateStoreVariantOptions,
        ) => batchUpdateStoreVariantResponse;
      }

      /**
       * 删除门店规格明细
       * /bo/product/storeVariantDetail/delete
       */
      export namespace deleteStoreVariantDetail {
        export type deleteStoreVariantDetailBody =
          defs.product.StoreVariantDetail;
        export type deleteStoreVariantDetailOptions = Record<string, any>;
        export type deleteStoreVariantDetailResponse = defs.product.Response;
        export type request = (
          body: deleteStoreVariantDetailBody,
          options?: deleteStoreVariantDetailOptions,
        ) => deleteStoreVariantDetailResponse;
      }

      /**
       * 下载模板导入限购模板
       * /bo/product/template/limit
       */
      export namespace exportTemplate {
        export type exportTemplateOptions = Record<string, any>;
        export type exportTemplateResponse = defs.product.Response<void>;
        export type request = (
          options?: exportTemplateOptions,
        ) => exportTemplateResponse;
      }

      /**
       * 基本信息设置
       * /bo/product/update
       */
      export namespace updateProduct {
        export type updateProductBody = defs.product.BackendProduct;
        export type updateProductOptions = Record<string, any>;
        export type updateProductResponse = defs.product.Response;
        export type request = (
          body: updateProductBody,
          options?: updateProductOptions,
        ) => updateProductResponse;
      }

      /**
       * 导入门店商品规格
       * /bo/product/variant/import
       */
      export namespace importState {
        export type importStateFormData = FormData;
        export type importStateOptions = Record<string, any>;
        export type importStateResponse =
          defs.product.Response<defs.product.ImportLimitResponse>;
        export type request = (
          formData: importStateFormData,
          options?: importStateOptions,
        ) => importStateResponse;
      }

      /**
       * 查询规格明细
       * /bo/product/variantDetail
       */
      export namespace findVariantDetail {
        export type findVariantDetailParam = {
          /** variantId */
          variantId: string;
        };
        export type findVariantDetailOptions = Record<string, any>;
        export type findVariantDetailResponse =
          defs.product.Response<defs.product.VariantDetail>;
        export type request = (
          params: findVariantDetailParam,
          options?: findVariantDetailOptions,
        ) => findVariantDetailResponse;
      }

      /**
       * 编辑规格明细
       * /bo/product/variantDetail/edit
       */
      export namespace editVariantDetail {
        export type editVariantDetailBody = defs.product.VariantDetail;
        export type editVariantDetailOptions = Record<string, any>;
        export type editVariantDetailResponse = defs.product.Response;
        export type request = (
          body: editVariantDetailBody,
          options?: editVariantDetailOptions,
        ) => editVariantDetailResponse;
      }

      /**
       * 分页查询店铺商品规格
       * /bo/product/variantStore/page
       */
      export namespace pageVariantStore {
        export type pageVariantStoreParam = {
          /** variantId */
          variantId: string;
        };
        export type pageVariantStoreOptions = Record<string, any>;
        export type pageVariantStoreResponse = defs.product.Response<
          Array<defs.product.VariantStoreActivity>
        >;
        export type request = (
          params: pageVariantStoreParam,
          options?: pageVariantStoreOptions,
        ) => pageVariantStoreResponse;
      }

      /**
       * 查询商品规格
       * /bo/product/variants
       */
      export namespace listByProductId {
        export type listByProductIdParam = {
          /** productId */
          productId: number;
        };
        export type listByProductIdOptions = Record<string, any>;
        export type listByProductIdResponse = defs.product.Response<
          Array<defs.product.ProductVariant>
        >;
        export type request = (
          params: listByProductIdParam,
          options?: listByProductIdOptions,
        ) => listByProductIdResponse;
      }
    }

    /**
     * 门店商品管理
     */
    export namespace boStoreProduct {
      /**
       * 导出门店商品列表
       * /bo/storeProduct/exportStoreProductList
       */
      export namespace exportStoreProductList {
        export type exportStoreProductListBody =
          Array<defs.product.StoreProductList>;
        export type exportStoreProductListOptions = Record<string, any>;
        export type exportStoreProductListResponse = any;
        export type request = (
          body: exportStoreProductListBody,
          options?: exportStoreProductListOptions,
        ) => exportStoreProductListResponse;
      }

      /**
       * 查询列表显示字段
       * /bo/storeProduct/query/field
       */
      export namespace queryField {
        export type queryFieldOptions = Record<string, any>;
        export type queryFieldResponse = defs.product.Response<
          Array<defs.product.StoreProductField>
        >;
        export type request = (
          options?: queryFieldOptions,
        ) => queryFieldResponse;
      }

      /**
       * 查询门店商品列表
       * /bo/storeProduct/queryStoreProductList
       */
      export namespace queryStoreProductList {
        export type queryStoreProductListBody =
          defs.product.QueryStoreProductCondition;
        export type queryStoreProductListOptions = Record<string, any>;
        export type queryStoreProductListResponse = defs.product.Response<
          defs.product.PageVO<defs.product.StoreProductList>
        >;
        export type request = (
          body: queryStoreProductListBody,
          options?: queryStoreProductListOptions,
        ) => queryStoreProductListResponse;
      }

      /**
       * 新建或更新显示字段
       * /bo/storeProduct/saveShowFiled
       */
      export namespace saveShowField {
        export type saveShowFieldParam = {
          /** storeProductFields */
          storeProductFields?: Array<defs.product.StoreProductField>;
        };
        export type saveShowFieldOptions = Record<string, any>;
        export type saveShowFieldResponse = defs.product.Response<void>;
        export type request = (
          params: saveShowFieldParam,
          options?: saveShowFieldOptions,
        ) => saveShowFieldResponse;
      }

      /**
       * 批量更新状态门店商品列表
       * /bo/storeProduct/updateStoreProductStatus
       */
      export namespace updateStoreProductStatus {
        export type updateStoreProductStatusBody =
          Array<defs.product.VariantStoreRequest>;
        export type updateStoreProductStatusOptions = Record<string, any>;
        export type updateStoreProductStatusResponse =
          defs.product.Response<void>;
        export type request = (
          body: updateStoreProductStatusBody,
          options?: updateStoreProductStatusOptions,
        ) => updateStoreProductStatusResponse;
      }
    }
  }
}
