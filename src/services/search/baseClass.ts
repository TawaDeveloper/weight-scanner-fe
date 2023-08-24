class BrandAggVO {
  /** 品牌ID */
  brandId = undefined;

  /** 品牌 */
  brandName = '';

  /** 命中数量 */
  docCount = undefined;

  /** logo */
  logo = '';
}

class CateAggVO {
  /** 分类ID */
  categoryId = undefined;

  /** 分类 */
  categoryName = '';

  /** 命中数量 */
  docCount = undefined;
}

class CooAggVO {
  /** 产地 */
  cooCode = '';

  /** 命中数量 */
  docCount = undefined;
}

class EditStatusHotSearchKeywordRequest {
  /** id */
  idList = [];

  /** 状态  0:禁用, 1: 启用 */
  status = undefined;
}

class EditStatusSearchKeywordRequest {
  /** id */
  id = undefined;

  /** 状态  0:禁用, 1: 启用 */
  status = undefined;
}

class HotSearchKeywordDTO {
  /** 业务范围(0: 默认 1:8899 2:9988 3:O2O) */
  bizScopeList = [];

  /** 业务范围(0: 默认 1:8899 2:9988 3:O2O) */
  bizScopeListLable = [];

  /** 点击量 */
  clickNum = undefined;

  /** id */
  id = undefined;

  /** 搜索词-英文 */
  keywordEn = '';

  /** 搜索词-简体中文 */
  keywordSch = '';

  /** 搜索词-繁体 */
  keywordTch = '';

  /** 排序 */
  sort = undefined;

  /** 状态 0:禁用, 1: 启用 */
  status = undefined;

  /** O2O对应的门店组ids */
  storeGroupIdList = [];

  /** O2O对应的门店组名称 */
  storeGroupName = [];

  /** 更新人姓名 */
  updatedByName = '';

  /** 更新时间 */
  updatedTime = '';
}

class Map {}

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

class PriceAggVO {
  /** 最高价 */
  priceMax = undefined;

  /** 最低价 */
  priceMin = undefined;
}

class ProductImage {
  /** 路径 */
  path = '';

  /** 类型：1->主图，2->商品详情图，3->商品标签图，4->视频，5->其它 */
  type = undefined;
}

class ProductVO {
  /** 货号编码 */
  articleNumber = undefined;

  /** 库存数量 */
  available = undefined;

  /** 品牌ID */
  brandId = undefined;

  /** 品牌名 */
  brandName = '';

  /** 品牌名EN */
  brandNameEN = '';

  /** 品牌名SCH */
  brandNameSCH = '';

  /** 品牌名TCH */
  brandNameTCH = '';

  /** 分类 */
  category = '';

  /** 分类id */
  categoryId = '';

  /** 前台分类id */
  categoryViewId = undefined;

  /** 聚合分类id列表 */
  categoryViewIds = [];

  /** 聚合分类名-EN */
  categoryViewNamesEN = '';

  /** 聚合分类名-EN */
  categoryViewNamesSCH = '';

  /** 聚合分类名-EN */
  categoryViewNamesTCH = '';

  /** 一级分类id列表 */
  categoryViewOneIds = [];

  /** 产地 */
  cooCode = '';

  /** 是否有Coupon, Discover */
  coupon = undefined;

  /** 是否有crv费用 */
  crv = undefined;

  /** crv费用 */
  crvFee = undefined;

  /** 收藏数量 */
  favoriteCount = undefined;

  /** 分类 */
  image = '';

  /** 是否在收藏 */
  isFavourite = false;

  /** 商品净重 */
  netWeight = undefined;

  /** 净重单位 */
  netWeightUom = '';

  /** 市场价格 */
  price = undefined;

  /** 商品ID */
  productId = undefined;

  /** 图片地址 */
  productImage = new ProductImage();

  /** 商品名 */
  productName = '';

  /** 商品名EN */
  productNameEN = '';

  /** 商品名SCH */
  productNameSCH = '';

  /** 商品名TCH */
  productNameTCH = '';

  /** 上架时间 */
  publishTime = '';

  /** 最大购买限制 */
  purchaseLimit = undefined;

  /** 零售价格 */
  retailPrice = undefined;

  /** 销量 */
  sale = undefined;

  /** 零售价格 */
  salePrice = undefined;

  /** 售卖单位 */
  saleUom = '';

  /** 营销tag */
  tag = '';

  /** 商品类型 */
  type = undefined;

  /** upcID */
  upcId = '';

  /** 规格ID */
  variantId = '';

  /** 规格名 */
  variantName = '';

  /** 规格名EN */
  variantNameEN = '';

  /** 规格名SCH */
  variantNameSCH = '';

  /** 规格名TCH */
  variantNameTCH = '';

  /** 浏览数量 */
  viewCount = undefined;

  /** 商品体积 */
  volume = undefined;
}

class QueryHotSearchKeywordRequest {
  /** 结束时间 */
  endUpdatedTime = '';

  /** 关键词 */
  keyword = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 起始时间 */
  startUpdatedTime = '';

  /** 状态  0:禁用, 1: 启用 */
  status = undefined;
}

class QueryKeywordStatRequest {
  /** 关键词 */
  keyword = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 排序字段(user_num:累计搜索用户数; search_num:累计搜索次数; today_search_num:今日搜索次数; yesterday_search_num:昨日搜索次数; last_week_search_num:最近一周搜索次数;  last_week_month_num:最近一月搜索次数)  */
  sort = '';

  /** 排序类型 asc  desc */
  sortType = '';
}

class QueryKeywordStatResponse {
  /** id */
  id = undefined;

  /** 搜索词 */
  keyword = '';

  /** 最近一月搜索次数 */
  lastWeekMonthNum = undefined;

  /** 最近一周搜索次数 */
  lastWeekSearchNum = undefined;

  /** 累计搜索次数 */
  searchNum = undefined;

  /** 今日搜索次数 */
  todaySearchNum = undefined;

  /** 累计搜索用户数 */
  userNum = undefined;

  /** 昨日搜索次数 */
  yesterdaySearchNum = undefined;
}

class QuerySearchKeywordRequest {
  /** 关键词 */
  keyword = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 状态  0:禁用, 1: 启用 */
  status = undefined;
}

class RecommReqDto {
  /** 前台分类id数组 */
  categoryIds = [];

  /** 当前请求页码，从1开始 */
  page = undefined;

  /** 分页条数 */
  pageSize = undefined;
}

class Response {
  /** 状态码：0-成功 */
  code = undefined;

  /** 响应数据 */
  data = undefined;

  /** 状态描述 */
  message = '';

  /** success */
  success = false;
}

class SearchAggrVO {
  /** brands */
  brands = [];

  /** categories */
  categories = [];

  /** cooCodes */
  cooCodes = [];

  /** prices */
  prices = new PriceAggVO();
}

class SearchKeywordDTO {
  /** 创建人姓名 */
  createdByName = '';

  /** 创建人时间 */
  createdTime = '';

  /** id */
  id = undefined;

  /** 搜索词-英文 */
  keywordEn = '';

  /** 搜索词-简体中文 */
  keywordSch = '';

  /** 搜索词-繁体 */
  keywordTch = '';

  /** 状态 0:禁用, 1: 启用 */
  status = undefined;

  /** 更新人姓名 */
  updatedByName = '';

  /** 更新时间 */
  updatedTime = '';
}

class SearchReqDto {
  /** 是否在售，1 in stock, 0 out of stock, other value ignore */
  availability = undefined;

  /** 品牌id数组 */
  brandIds = [];

  /** 前台分类id数组 */
  categoryIds = [];

  /** 产地列表 */
  cooCodes = [];

  /** 是否支持coupon, 用于discover, 0, 1, 非必选项 */
  coupon = undefined;

  /** 功能区id,如weekly sale */
  functionId = undefined;

  /** 搜索词 */
  keyword = '';

  /** 当前请求页码，从1开始 */
  page = undefined;

  /** 分页条数 */
  pageSize = undefined;

  /** 价格，最高 */
  priceMax = undefined;

  /** 价格，最低 */
  priceMin = undefined;

  /** 排序字段，可选值: default(默认算法排序), sale(销量), retailPrice(价格), _score(评分), review(评价), publishTime(发布时间) */
  sortBy = '';

  /** 排序方向，默认DESC，接受ASC, DESC  */
  sortOrder = '';

  /** 专题区id,如top deals */
  themeId = undefined;
}

class SearchVO {
  /** Keyword */
  keyword = '';
}

export const search = {
  BrandAggVO,
  CateAggVO,
  CooAggVO,
  EditStatusHotSearchKeywordRequest,
  EditStatusSearchKeywordRequest,
  HotSearchKeywordDTO,
  Map,
  PageInfo,
  PageVO,
  PriceAggVO,
  ProductImage,
  ProductVO,
  QueryHotSearchKeywordRequest,
  QueryKeywordStatRequest,
  QueryKeywordStatResponse,
  QuerySearchKeywordRequest,
  RecommReqDto,
  Response,
  SearchAggrVO,
  SearchKeywordDTO,
  SearchReqDto,
  SearchVO,
};
