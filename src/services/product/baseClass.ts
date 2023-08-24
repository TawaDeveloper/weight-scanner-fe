class AttrValue {
  /** id */
  id = undefined;

  /** value */
  value = '';
}

class Attribute {
  /** 属性值 */
  attrValues = [];

  /** 是否多选 */
  chooseStatus = undefined;

  /** 属性ID */
  id = undefined;

  /** 属性名 */
  name = '';

  /** 是否必填 */
  requireStatus = undefined;
}

class AttributeClassify {
  /** attrCount */
  attrCount = undefined;

  /** classifyId */
  classifyId = undefined;

  /** classifyName */
  classifyName = '';

  /** status */
  status = undefined;

  /** updatedBy */
  updatedBy = undefined;

  /** updatedByName */
  updatedByName = '';

  /** updatedTime */
  updatedTime = '';
}

class AttributeClassifyRequest {
  /** classifyName */
  classifyName = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** status */
  status = undefined;
}

class AttributeRequest {
  /** attributeName */
  attributeName = '';

  /** classifyName */
  classifyName = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** status */
  status = undefined;
}

class AttributeValue {
  /** id */
  id = undefined;

  /** sort */
  sort = undefined;

  /** valueEN */
  valueEN = '';

  /** valueSCH */
  valueSCH = '';

  /** valueTCH */
  valueTCH = '';
}

class BackendAttribute {
  /** attributeId */
  attributeId = undefined;

  /** attributeValues */
  attributeValues = [];

  /** choosesStatus */
  choosesStatus = undefined;

  /** classifyId */
  classifyId = undefined;

  /** classifyName */
  classifyName = '';

  /** createdBy */
  createdBy = undefined;

  /** createdByName */
  createdByName = '';

  /** frontShow */
  frontShow = undefined;

  /** name */
  name = '';

  /** nameEN */
  nameEN = '';

  /** nameSCH */
  nameSCH = '';

  /** nameTCH */
  nameTCH = '';

  /** requireStatus */
  requireStatus = undefined;

  /** searchShow */
  searchShow = undefined;

  /** status */
  status = undefined;

  /** updatedBy */
  updatedBy = undefined;

  /** updatedByName */
  updatedByName = '';

  /** updatedTime */
  updatedTime = '';
}

class BackendBrand {
  /** brandId */
  brandId = undefined;

  /** brandNameEN */
  brandNameEN = '';

  /** brandNameSCH */
  brandNameSCH = '';

  /** brandNameTCH */
  brandNameTCH = '';

  /** description */
  description = '';

  /** logo */
  logo = '';

  /** status */
  status = undefined;

  /** updatedByName */
  updatedByName = '';

  /** updatedTime */
  updatedTime = '';
}

class BackendCategory {
  /** icon */
  icon = '';

  /** id */
  id = undefined;

  /** last */
  last = undefined;

  /** level */
  level = undefined;

  /** mchNumber */
  mchNumber = undefined;

  /** name */
  name = '';

  /** parentId */
  parentId = undefined;

  /** parentName */
  parentName = '';

  /** path */
  path = '';

  /** status */
  status = undefined;

  /** surchargeRate */
  surchargeRate = undefined;
}

class BackendProduct {
  /** alcoholic */
  alcoholic = undefined;

  /** articleNumber */
  articleNumber = undefined;

  /** brandId */
  brandId = undefined;

  /** brandNameEN */
  brandNameEN = '';

  /** brandNameSCH */
  brandNameSCH = '';

  /** brandNameTCH */
  brandNameTCH = '';

  /** category */
  category = '';

  /** categoryId */
  categoryId = undefined;

  /** image */
  image = '';

  /** manufacturer */
  manufacturer = '';

  /** productId */
  productId = undefined;

  /** productNameEN */
  productNameEN = '';

  /** productNameSCH */
  productNameSCH = '';

  /** productNameTCH */
  productNameTCH = '';

  /** status */
  status = undefined;

  /** type */
  type = undefined;

  /** upc */
  upc = '';

  /** updatedTime */
  updatedTime = '';

  /** validityPeriod */
  validityPeriod = undefined;

  /** variantId */
  variantId = '';
}

class BackendProductRequest {
  /** articleNumbers */
  articleNumbers = [];

  /** categoryIds */
  categoryIds = [];

  /** exactMatch */
  exactMatch = false;

  /** fromUpdatedTime */
  fromUpdatedTime = '';

  /** keywords */
  keywords = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** productName */
  productName = '';

  /** sortBy */
  sortBy = '';

  /** sortOrder */
  sortOrder = '';

  /** status */
  status = undefined;

  /** toUpdatedTime */
  toUpdatedTime = '';

  /** upcs */
  upcs = [];
}

class Brand {
  /** 品牌描述 */
  desc = '';

  /** 品牌ID */
  id = undefined;

  /** logo地址 */
  logo = '';

  /** 品牌名 */
  name = '';
}

class BrandRequest {
  /** brandName */
  brandName = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** status */
  status = undefined;
}

class BriefDescStore {
  /** 英文简要描述 */
  briefDescEN = '';

  /** 简体简要描述 */
  briefDescSCH = '';

  /** 繁体简要描述 */
  briefDescTCH = '';

  /** 商品ID */
  productId = undefined;

  /** 门店ID */
  storeId = undefined;
}

class Category {
  /** icon */
  icon = '';

  /** id */
  id = undefined;

  /** last */
  last = undefined;

  /** leaf */
  leaf = undefined;

  /** level */
  level = undefined;

  /** mchNumber */
  mchNumber = undefined;

  /** name */
  name = '';

  /** parentId */
  parentId = undefined;

  /** parentName */
  parentName = '';

  /** path */
  path = '';

  /** sort */
  sort = undefined;

  /** surchargeRate */
  surchargeRate = undefined;
}

class CategoryAttr {
  /** attrId */
  attrId = undefined;

  /** attrNameEN */
  attrNameEN = '';

  /** attrNameSCH */
  attrNameSCH = '';

  /** attrNameTCH */
  attrNameTCH = '';

  /** chooseStatus */
  chooseStatus = undefined;

  /** classifyName */
  classifyName = '';

  /** frontShow */
  frontShow = undefined;

  /** requireStatus */
  requireStatus = undefined;

  /** searchShow */
  searchShow = undefined;

  /** valueCount */
  valueCount = undefined;
}

class CategoryAttrRel {
  /** attributeIds */
  attributeIds = [];

  /** categoryId */
  categoryId = undefined;
}

class CategoryAttrRequest {
  /** attrName */
  attrName = '';

  /** classifyName */
  classifyName = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;
}

class CategoryBrand {
  /** brandId */
  brandId = undefined;

  /** brandNameEN */
  brandNameEN = '';

  /** brandNameSCH */
  brandNameSCH = '';

  /** brandNameTCH */
  brandNameTCH = '';

  /** logo */
  logo = '';
}

class CategoryBrandRel {
  /** brandIds */
  brandIds = [];

  /** categoryId */
  categoryId = undefined;
}

class CategoryDetail {
  /** backendCategory */
  backendCategory = new BackendCategory();

  /** categoryAttrs */
  categoryAttrs = [];

  /** categoryBrands */
  categoryBrands = [];

  /** parentCategoryAttrs */
  parentCategoryAttrs = [];

  /** parentCategoryBrands */
  parentCategoryBrands = [];
}

class CategoryProduct {
  /** 前台分类ID */
  categoryViewId = undefined;

  /** 前台分类名 */
  name = '';

  /** 商品列表 */
  variants = [];
}

class CategoryProductPage {
  /** 前台分类ID */
  categoryViewId = undefined;

  /** 前台分类名 */
  name = '';

  /** 商品列表 */
  variants = new PageInfo();
}

class CategoryProductPageQuery {
  /** 当前页 */
  pageNum = undefined;

  /** 每页大小 */
  pageSize = undefined;

  /** 前台分类ID */
  viewId = undefined;
}

class CategoryView {
  /** 图标地址 */
  icon = '';

  /** 前台分类ID */
  id = undefined;

  /** 是否末级 0: 否, 1: 是 */
  last = undefined;

  /** 是否叶子节点 0: 否, 1: 是 */
  leaf = undefined;

  /** 分类层级 */
  level = undefined;

  /** 分类名 */
  name = '';

  /** 上级分类ID */
  parentId = undefined;

  /** 上级分类名 */
  parentName = '';
}

class CategoryViewCategory {
  /** categoryId */
  categoryId = undefined;

  /** level */
  level = undefined;

  /** path */
  path = '';
}

class CategoryViewCategoryRel {
  /** categoryIds */
  categoryIds = [];

  /** categoryViewId */
  categoryViewId = undefined;
}

class CategoryViewDetail {
  /** categories */
  categories = [];

  /** categoryView */
  categoryView = new CategoryView();

  /** variants */
  variants = [];
}

class CategoryViewTemplate {
  /** coverageArea */
  coverageArea = [];

  /** defaultStatus */
  defaultStatus = undefined;

  /** deliveryLabel */
  deliveryLabel = undefined;

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** status */
  status = undefined;

  /** storeGroup */
  storeGroup = '';
}

class CategoryViewVariant {
  /** image */
  image = '';

  /** productId */
  productId = undefined;

  /** productName */
  productName = '';

  /** upc */
  upc = '';

  /** variantId */
  variantId = '';
}

class CategoryViewVariantRel {
  /** categoryViewId */
  categoryViewId = undefined;

  /** variantIds */
  variantIds = [];
}

class Comment {
  /** 是否精选评论 */
  chosen = undefined;

  /** 评价日期 */
  commentTime = '';

  /** 评论内容 */
  content = '';

  /** 评论ID */
  id = undefined;

  /** 会员图标 */
  memberIcon = '';

  /** 昵称 */
  nickName = '';

  /** 订单ID */
  orderId = undefined;

  /** 评论图片，多张用;号分隔 */
  pictures = '';

  /** 商品ID */
  productId = undefined;

  /** 是否购买 */
  purchaseStatus = undefined;

  /** 评分 */
  star = undefined;

  /** 店铺ID */
  storeId = undefined;

  /** 规格名 */
  variantName = '';
}

class CommentPageQuery {
  /** 当前页 */
  pageNum = undefined;

  /** 每页大小 */
  pageSize = undefined;

  /** 商品ID */
  productId = undefined;
}

class DiscountProduct {
  /** discount */
  discount = undefined;

  /** functionType */
  functionType = undefined;

  /** image */
  image = '';

  /** productId */
  productId = undefined;

  /** productName */
  productName = '';

  /** upc */
  upc = '';
}

class DragCategory {
  /** category */
  category = new Category();

  /** newParentId */
  newParentId = undefined;

  /** parentCategory */
  parentCategory = new Category();
}

class DragCategoryView {
  /** categoryView */
  categoryView = new CategoryView();

  /** newParentId */
  newParentId = undefined;

  /** parentCategoryView */
  parentCategoryView = new CategoryView();
}

class EditStatusFunctionRequest {
  /** id */
  id = undefined;

  /** 状态  0:禁用, 1: 启用 */
  status = undefined;
}

class FavoriteVariantReq {
  /** 品牌ID */
  brandId = undefined;

  /** 商品ID */
  productId = undefined;

  /** 商品规格所属门店ID */
  storeId = undefined;

  /** 规格ID */
  variantId = '';
}

class FunctionDto {
  /** 点击量 */
  clickNum = undefined;

  /** 指向链接 */
  directionUrl = '';

  /** id */
  id = undefined;

  /** 功能区名称 */
  name = '';

  /** 英文图 url */
  pictureEn = '';

  /** 简体中文图 url */
  pictureSch = '';

  /** 繁体中文图 url */
  pictureTch = '';

  /** 平台，1：APP，2：WEB */
  platform = undefined;

  /** 发布施时间 */
  releaseTime = '';

  /** 1:即时发布 ,2:定时发布 */
  releaseType = undefined;

  /** 排序 */
  sort = undefined;

  /** 状态  0:禁用, 1: 启用 */
  status = undefined;

  /** 更新姓名 */
  updatedByName = '';

  /** 更新时间 */
  updatedTime = '';
}

class FunctionProduct {
  /** category */
  category = '';

  /** discount */
  discount = undefined;

  /** functionType */
  functionType = undefined;

  /** hits */
  hits = undefined;

  /** image */
  image = '';

  /** productId */
  productId = undefined;

  /** productName */
  productName = '';

  /** sales */
  sales = undefined;

  /** sort */
  sort = undefined;

  /** status */
  status = undefined;

  /** storeId */
  storeId = undefined;

  /** upc */
  upc = '';

  /** updatedByName */
  updatedByName = '';

  /** updatedTime */
  updatedTime = '';

  /** variantId */
  variantId = '';
}

class FunctionProductReq {
  /** functionType */
  functionType = undefined;

  /** orderBy */
  orderBy = undefined;

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** productName */
  productName = '';

  /** status */
  status = undefined;

  /** storeId */
  storeId = undefined;
}

class ImportLimitResponse {
  /** error */
  error = undefined;

  /** fileId */
  fileId = undefined;

  /** success */
  success = undefined;
}

class ImportVariantVO {
  /** failRecords */
  failRecords = undefined;

  /** successRecords */
  successRecords = undefined;

  /** totalRecords */
  totalRecords = undefined;
}

class ModifyProductInfo {
  /** 门店活动价 */
  activityPrice = undefined;

  /** 销售价格 */
  price = undefined;

  /** 商品ID */
  productId = undefined;

  /** 限购数量 */
  purchaseLimit = undefined;

  /** 状态 */
  status = undefined;

  /** 门店ID列表 */
  storeIds = [];

  /** 规格ID */
  variantId = '';
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

class PageVO {
  /** hasNextPage */
  hasNextPage = false;

  /** list */
  list = [];

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** pages */
  pages = undefined;

  /** total */
  total = undefined;
}

class Policy {
  /** 声明ID */
  id = undefined;

  /** 英文声明 */
  statementEN = '';

  /** 简体声明 */
  statementSCH = '';

  /** 繁体声明 */
  statementTCH = '';

  /** 门店分组 */
  storeGroup = '';

  /** 声明类型，1: 注意事项, 2: 免责声明 */
  type = undefined;
}

class Popup {
  /** 区域 */
  areas = [];

  /** 覆盖业务 0:default, 1:当日达, 2:次日达, 3:全美直邮 */
  businesses = [];

  /** 是否有指向 0:无，1:有 */
  directionFlag = undefined;

  /** 指向类型 */
  directionType = undefined;

  /** 指向链接 */
  directionUrl = '';

  /** 点击量 */
  hits = undefined;

  /** 弹窗配置ID */
  id = undefined;

  /** 英文图片 */
  imageEN = '';

  /** 简体中文图片 */
  imageSCH = '';

  /** 繁体中文图片 */
  imageTCH = '';

  /** 弹窗名称 */
  name = '';

  /** 发布时间 */
  releaseTime = '';

  /** 发布类型 1:即时发布 ,2:定时发布 */
  releaseType = undefined;

  /** 显示顺序 */
  sort = undefined;

  /** 状态  0:下架，1:上架 */
  status = undefined;

  /** 更新人 */
  updatedByName = '';

  /** 更新时间 */
  updatedTime = '';
}

class PopupReq {
  /** 弹窗名称 */
  name = '';

  /** 更新时间排序 0：降序，1：升序 */
  orderBy = undefined;

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 状态 */
  status = undefined;
}

class ProductAttr {
  /** attributes */
  attributes = [];

  /** productId */
  productId = undefined;
}

class ProductDetail {
  /** 货号编码 */
  articleNumber = undefined;

  /** 属性信息 */
  attributes = [];

  /** 平均星级 */
  avgStar = undefined;

  /** 后台分类路径 */
  backendCategory = [];

  /** 后台分类ID */
  backendCategoryId = undefined;

  /** 后台分类路径 */
  backendCategoryPathId = [];

  /** 品牌信息 */
  brand = new Brand();

  /** 简要描述 */
  briefDesc = '';

  /** 评论总数 */
  commentCount = undefined;

  /** 商品评论列表 */
  comments = [];

  /** 详细描述 */
  detailDesc = '';

  /** 商品ID */
  productId = undefined;

  /** 图片列表 */
  productImages = [];

  /** 商品名 */
  productName = '';

  /** 备注 */
  remark = '';

  /** 规格信息 */
  variants = [];
}

class ProductImage {
  /** ID */
  id = undefined;

  /** 图片或视频地址 */
  path = '';

  /** 商品ID */
  productId = undefined;

  /** 类型：1->主图，2->商品详情图，3->商品标签图，4->视频，5->其它 */
  type = undefined;
}

class ProductSeo {
  /** 英文描述 */
  descriptionEN = '';

  /** 简体描述 */
  descriptionSCH = '';

  /** 繁体描述 */
  descriptionTCH = '';

  /** 商品SEO ID */
  id = undefined;

  /** 英文关键词 */
  keywordsEN = '';

  /** 简体关键词 */
  keywordsSCH = '';

  /** 繁体关键词 */
  keywordsTCH = '';

  /** 商品ID */
  productId = undefined;

  /** 英文标题 */
  titleEN = '';

  /** 简体标题 */
  titleSCH = '';

  /** 繁体标题 */
  titleTCH = '';
}

class ProductVariant {
  /** 图片 */
  image = '';

  /** mainUpc */
  mainUpc = '';

  /** 商品ID */
  productId = undefined;

  /** 状态 */
  status = undefined;

  /** 规格ID */
  variantId = '';

  /** 规格英文名 */
  variantNameEN = '';

  /** 规格简体名 */
  variantNameSCH = '';

  /** 规格繁体名 */
  variantNameTCH = '';
}

class QueryFunctionRequest {
  /** 功能区名称 */
  name = '';

  /** 更新时间排序，0：降序，1：升序 */
  orderBy = undefined;

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 平台，1：APP，2：WEB */
  platform = undefined;

  /** 状态  0:禁用, 1: 启用 */
  status = undefined;
}

class QueryStoreProductCondition {
  /** articleNumbers */
  articleNumbers = [];

  /** categoryIds */
  categoryIds = [];

  /** endUpdatedTime */
  endUpdatedTime = '';

  /** lang */
  lang = '';

  /** locationId */
  locationId = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** productName */
  productName = '';

  /** startUpdatedTime */
  startUpdatedTime = '';

  /** status */
  status = undefined;

  /** storeIds */
  storeIds = [];

  /** upcs */
  upcs = [];

  /** wmsId */
  wmsId = undefined;
}

class QueryThemeRequest {
  /** 专题区名称 */
  name = '';

  /** 更新时间排序 0：降序，1：升序 */
  orderBy = undefined;

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 状态  0:已下架, 1: 已上架 */
  status = undefined;
}

class Response {
  /** 状态码：0-成功 */
  code = undefined;

  /** 响应数据 */
  data = new CategoryDetail();

  /** 状态描述 */
  message = '';

  /** success */
  success = false;
}

class RestockNoticeRequest {
  /** 商品 ID */
  productId = undefined;
}

class S3PreSignInfo {
  /** 上传后的访问地址 */
  key = '';

  /** 上传 URL，请求方式 PUT */
  url = '';
}

class StoreProductField {
  /** 英文字段名 */
  fieldEn = '';

  /** 简体字段名 */
  fieldSch = '';

  /** 繁体字段名 */
  fieldTch = '';

  /** 显示状态 */
  showStatus = undefined;
}

class StoreProductList {
  /** 是否含酒精：0‐>否；1‐>是 */
  alcoholic = undefined;

  /** 可用库存 */
  availableStock = undefined;

  /** 所属后台分类 */
  backendCategoryPath = '';

  /** 品牌ID */
  brandId = undefined;

  /** 商品品牌 */
  brandName = '';

  /** 英文简要描述 */
  briefDescEn = '';

  /** 简体简要描述 */
  briefDescSch = '';

  /** 繁体简要描述 */
  briefDescTch = '';

  /** 所属前台分类 */
  categoryViewPath = [];

  /** 当前售价 */
  currentPrice = undefined;

  /** 英文详细描述 */
  detailDescEn = '';

  /** 简体详细描述 */
  detailDescSch = '';

  /** 繁体详细描述 */
  detailDescTch = '';

  /** 锁定库存 */
  lockStock = undefined;

  /** MCH NUMBER */
  mchNumber = undefined;

  /** 商家ID */
  merchantId = undefined;

  /** 商家名称 */
  merchantName = '';

  /** 商品净重 */
  netWeight = undefined;

  /** 净重单位 */
  netWeightUom = '';

  /** 线上活动价 */
  onlinePrice = undefined;

  /** 商品售价 */
  price = undefined;

  /** 产品后台分类ID */
  productCategoryId = undefined;

  /** 商品ID */
  productId = undefined;

  /** 商品主图 */
  productImageUrl = '';

  /** 商品英文名称 */
  productNameEn = '';

  /** 商品中文简体名称 */
  productNameSch = '';

  /** 商品中文繁体名称 */
  productNameTch = '';

  /** 商品视频 */
  productVideoUrl = '';

  /** 促销区间 */
  promotionScope = '';

  /** 促销类型：1. 直降 2. 买赠 3. 第X件折扣 */
  promotionType = undefined;

  /** 门店活动价 */
  salePrice = undefined;

  /** 销售单位 */
  saleUom = '';

  /** 可售库存 = 可用库存*比例 */
  saleableStock = undefined;

  /** 商品upc状态 0：禁用，1：启用 */
  status = undefined;

  /** 门店ID */
  storeId = undefined;

  /** 门店名称 */
  storeName = '';

  /** 总库存库存 = 锁定库存+锁定库存 */
  totalStock = undefined;

  /** 商品类型 1: 标准商品, 2: 称重商品 */
  type = undefined;

  /** upc */
  upc = '';

  /** upc缩略图 */
  upcImageUrl = '';

  /** 更新人ID */
  updatedBy = undefined;

  /** 更新人名称 */
  updatedByName = '';

  /** 更新时间 */
  updatedTime = '';

  /** variantId */
  variantId = '';

  /** 位置编码 */
  wmsLocation = '';

  /** 仓库名称 */
  wmsName = '';
}

class StoreVariantDetail {
  /** netWeight */
  netWeight = undefined;

  /** netWeightUom */
  netWeightUom = '';

  /** price */
  price = undefined;

  /** saleUom */
  saleUom = '';

  /** storeId */
  storeId = undefined;

  /** variantId */
  variantId = '';
}

class TemplateRequest {
  /** name */
  name = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;
}

class Theme {
  /** O2O区域 */
  areas = [];

  /** 覆盖业务，0:默认 1:当日达(O2O) 2:次日达(9988) 3:全美直邮(8899) */
  businessTypes = [];

  /** 专题ID */
  id = undefined;

  /** 发布时间 */
  releaseTime = '';

  /** 发布类型 1:及时发布  2:定时发布 */
  releaseType = undefined;

  /** 排序值 */
  sort = undefined;

  /** 状态 0:已下架, 1:已上架 */
  status = undefined;

  /** 专题英文名称 */
  themeNameEN = '';

  /** 专题简体名称 */
  themeNameSCH = '';

  /** 专题繁体名称 */
  themeNameTCH = '';

  /** 更新人 */
  updatedByName = '';

  /** 更新时间 */
  updatedTime = '';

  /** 商品数 */
  variantCount = undefined;
}

class ThemeAndFunction {
  /** 功能区类型，1：每周特价，2：新品发售，3：人气热卖，4：食谱 */
  functionType = undefined;

  /** 列表ID */
  id = undefined;

  /** 名称 */
  name = '';

  /** 功能区图片 */
  picture = '';

  /** 排序 */
  sort = undefined;

  /** 专题区类型，1：自定义专题列表，2：常买商品专题，3：附近商品专题 */
  themeType = undefined;

  /** 功能区跳转链接 */
  url = '';

  /** 商品列表 */
  variants = [];
}

class ThemeProduct {
  /** 后台分类 */
  category = '';

  /** 折扣 */
  discount = undefined;

  /** 点击量 */
  hits = undefined;

  /** 缩略图 */
  image = '';

  /** 商品ID */
  productId = undefined;

  /** 商品名 */
  productName = '';

  /** 销量 */
  sales = undefined;

  /** 排序值 */
  sort = undefined;

  /** 专题区ID */
  themeId = undefined;

  /** UPC */
  upc = '';

  /** 规格ID */
  variantId = '';
}

class UpcRequest {
  /** articleNumber */
  articleNumber = undefined;

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** upc */
  upc = '';
}

class UpdateFunctionProduct {
  /** functionType */
  functionType = undefined;

  /** productId */
  productId = undefined;

  /** sort */
  sort = undefined;

  /** status */
  status = undefined;

  /** storeId */
  storeId = undefined;

  /** variantId */
  variantId = '';
}

class Variant {
  /** 货号编码 */
  articleNumber = undefined;

  /** 库存数量 */
  available = undefined;

  /** 品牌ID */
  brandId = undefined;

  /** 品牌名 */
  brandName = '';

  /** 产地 */
  cooCode = '';

  /** 是否有crv费用 */
  crv = undefined;

  /** crv费用 */
  crvFee = undefined;

  /** 是否收藏 */
  favorite = false;

  /** 收藏时间 */
  favoriteTime = '';

  /** 图片地址 */
  image = '';

  /** 商品净重 */
  netWeight = undefined;

  /** 净重单位 */
  netWeightUom = '';

  /** 市场价格 */
  price = undefined;

  /** 商品ID */
  productId = undefined;

  /** 商品名 */
  productName = '';

  /** 最大购买限制 */
  purchaseLimit = undefined;

  /** 零售价格 */
  retailPrice = undefined;

  /** 销量 */
  sale = undefined;

  /** 销售价格 */
  salePrice = undefined;

  /** 售卖单位 */
  saleUom = '';

  /** 标准重量，单位磅 */
  standardWeight = undefined;

  /** 门店ID */
  storeId = undefined;

  /** 促销标签 */
  tag = '';

  /** 商品类型 */
  type = undefined;

  /** upcID */
  upcId = '';

  /** 规格ID */
  variantId = '';

  /** 规格名 */
  variantName = '';

  /** 商品体积 */
  volume = undefined;
}

class VariantDetail {
  /** cooCode */
  cooCode = '';

  /** defaultNetWeight */
  defaultNetWeight = undefined;

  /** defaultNetWeightUom */
  defaultNetWeightUom = '';

  /** defaultPrice */
  defaultPrice = undefined;

  /** defaultSaleUom */
  defaultSaleUom = '';

  /** image */
  image = '';

  /** mainUpc */
  mainUpc = '';

  /** productId */
  productId = undefined;

  /** storeVariantDetails */
  storeVariantDetails = [];

  /** type */
  type = undefined;

  /** variantId */
  variantId = '';

  /** variantNameEN */
  variantNameEN = '';

  /** variantNameSCH */
  variantNameSCH = '';

  /** variantNameTCH */
  variantNameTCH = '';

  /** variantSize */
  variantSize = new VariantSize();
}

class VariantSize {
  /** 高度 */
  high = undefined;

  /** id */
  id = undefined;

  /** 长度 */
  length = undefined;

  /** 是否打包 */
  packFlag = undefined;

  /** 打包高度 */
  packHigh = undefined;

  /** 打包长度 */
  packLength = undefined;

  /** 装箱数量 */
  packQuantity = undefined;

  /** 打包重量 */
  packWeight = undefined;

  /** 打包重量单位 */
  packWeightUom = '';

  /** 打包宽度 */
  packWidth = undefined;

  /** variantId */
  variantId = '';

  /** 重量 */
  weight = undefined;

  /** 重量单位 */
  weightUom = '';

  /** 宽度 */
  width = undefined;
}

class VariantStoreActivity {
  /** availableStock */
  availableStock = undefined;

  /** discount */
  discount = undefined;

  /** lockStock */
  lockStock = undefined;

  /** onlineActivityPrice */
  onlineActivityPrice = undefined;

  /** price */
  price = undefined;

  /** purchaseLimit */
  purchaseLimit = undefined;

  /** salePrice */
  salePrice = undefined;

  /** sellableStock */
  sellableStock = undefined;

  /** status */
  status = undefined;

  /** storeActivityPrice */
  storeActivityPrice = undefined;

  /** storeGroup */
  storeGroup = '';

  /** storeId */
  storeId = undefined;

  /** storeName */
  storeName = '';

  /** totalStock */
  totalStock = undefined;

  /** updatedByName */
  updatedByName = '';

  /** updatedTime */
  updatedTime = '';
}

class VariantStoreRequest {
  /** purchaseLimit */
  purchaseLimit = undefined;

  /** salePrice */
  salePrice = undefined;

  /** status */
  status = undefined;

  /** storeId */
  storeId = undefined;

  /** variantId */
  variantId = '';
}

export const product = {
  AttrValue,
  Attribute,
  AttributeClassify,
  AttributeClassifyRequest,
  AttributeRequest,
  AttributeValue,
  BackendAttribute,
  BackendBrand,
  BackendCategory,
  BackendProduct,
  BackendProductRequest,
  Brand,
  BrandRequest,
  BriefDescStore,
  Category,
  CategoryAttr,
  CategoryAttrRel,
  CategoryAttrRequest,
  CategoryBrand,
  CategoryBrandRel,
  CategoryDetail,
  CategoryProduct,
  CategoryProductPage,
  CategoryProductPageQuery,
  CategoryView,
  CategoryViewCategory,
  CategoryViewCategoryRel,
  CategoryViewDetail,
  CategoryViewTemplate,
  CategoryViewVariant,
  CategoryViewVariantRel,
  Comment,
  CommentPageQuery,
  DiscountProduct,
  DragCategory,
  DragCategoryView,
  EditStatusFunctionRequest,
  FavoriteVariantReq,
  FunctionDto,
  FunctionProduct,
  FunctionProductReq,
  ImportLimitResponse,
  ImportVariantVO,
  ModifyProductInfo,
  PageInfo,
  PageVO,
  Policy,
  Popup,
  PopupReq,
  ProductAttr,
  ProductDetail,
  ProductImage,
  ProductSeo,
  ProductVariant,
  QueryFunctionRequest,
  QueryStoreProductCondition,
  QueryThemeRequest,
  Response,
  RestockNoticeRequest,
  S3PreSignInfo,
  StoreProductField,
  StoreProductList,
  StoreVariantDetail,
  TemplateRequest,
  Theme,
  ThemeAndFunction,
  ThemeProduct,
  UpcRequest,
  UpdateFunctionProduct,
  Variant,
  VariantDetail,
  VariantSize,
  VariantStoreActivity,
  VariantStoreRequest,
};
