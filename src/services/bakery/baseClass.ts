class ArticleOption {
  /** 产品编号 */
  articleNumber = '';

  /** 产品名称 */
  description = '';

  /** 主键 */
  id = undefined;
}

class ArticleRefDTO {
  /** 产品 Article Number 列表 */
  articleNumbers = [];

  /** 部门 */
  depId = '';

  /** 门店 id */
  storeId = '';
}

class CategoryOption {
  /** 类别描述 */
  description = '';

  /** 主键 */
  id = undefined;

  /** 类别 ID */
  mch = '';
}

class Content {
  /** 前十二周平均销售额 */
  averageAmountFor12Week = undefined;

  /** 前四周平均销售额 */
  averageAmountFor4Week = undefined;

  /** 上周平均销售额 */
  averageAmountForLastWeek = undefined;

  /** 前十二周平均销售量 */
  averageVolumeFor12Week = undefined;

  /** 前四周平均销售量 */
  averageVolumeFor4Week = undefined;

  /** 上周平均销售量 */
  averageVolumeForLastWeek = undefined;

  /** 部门 */
  department = '';

  /** 门店区域 */
  storeGroup = '';

  /** 门店 ID */
  storeId = '';

  /** 门店名称 */
  storeName = '';
}

class CreateOrderDTO {
  /** 部门 */
  dep = '';

  /** 商品列表 */
  items = [];

  /** 门店 id */
  storeId = '';
}

class CreateOrderItem {
  /** Article Number */
  articleNumber = '';

  /** 日实际订货量 */
  dayActualQuantity = undefined;

  /** 日参考订货量 */
  dayRefQuantity = undefined;

  /** 单品周销售额目标 */
  weekSalesGoal = undefined;
}

class CreateOrderVO {
  /** 订单编号 */
  orderId = '';

  /** PR 编号 */
  pr = '';
}

class EstDeliveredDateVO {
  /** 日期 */
  date = '';

  /** 周几 */
  dayOfWeek = '';
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

class Item {
  /** articleNumber */
  articleNumber = '';

  /** qty */
  qty = undefined;

  /** record_type */
  record_type = '';
}

class LossFactor {
  /** 分类 id（level == 3） */
  categoryId = '';

  /** 损耗系数 */
  lossFactor = undefined;
}

class LossFactorTree {
  /** 子节点列表 */
  children = [];

  /** 节点 id */
  id = '';

  /** 节点层级：1、2、3 */
  level = undefined;

  /** 损耗系数：level == 3 时展示 */
  lossFactor = undefined;

  /** 节点名称 */
  name = '';
}

class NewArticleItem {
  /** Article Number */
  articleNumber = '';

  /** 产品描述（产品名称） */
  description = '';
}

class NewArticlesDTO {
  /** 产品名称 */
  articleName = '';

  /** 部门 ID */
  depId = '';

  /** 第几页 */
  pageNum = undefined;

  /** 每页多少条 */
  pageSize = undefined;

  /** 门店 ID */
  storeId = '';
}

class NewSalesGoalDTO {
  /** 部门 ID */
  depId = '';

  /** 目标值 */
  goal = undefined;

  /** 月份 */
  month = undefined;

  /** 门店 ID */
  storeId = '';

  /** 门店名称 */
  storeName = '';

  /** 年份 */
  year = undefined;
}

class OptionVO {
  /** 子选项列表 */
  children = [];

  /** 选项名称 */
  label = '';

  /** 选项值 */
  value = undefined;
}

class OrderDetailBaseVO {
  /** 订单金额 */
  amount = undefined;

  /** 下单时间 */
  createTime = '';

  /** 下单人 id */
  createUserId = undefined;

  /** 下单人姓名 */
  createUserName = '';

  /** 部门 */
  depName = '';

  /** 预计送达时间 */
  estDeliveredTime = '';

  /** 订单编号 */
  orderId = '';

  /** 产品个数 */
  skuNum = undefined;

  /** 产品数量 */
  skuQuantity = undefined;

  /** 门店 id */
  storeId = '';

  /** 门店名称 */
  storeName = '';

  /** 时区 */
  timezone = '';
}

class OrderDetailItem {
  /** Article Number */
  articleNumber = '';

  /** 日实际订货量 */
  dayActualQuantity = undefined;

  /** 日参考订货量 */
  dayRefQuantity = undefined;

  /** 部门名称 */
  depName = '';

  /** 产品描述 - 英文 */
  descriptionEn = '';

  /** 产品描述 - 繁体 */
  descriptionTc = '';

  /** 尺寸大小 */
  packSize = '';

  /** PO */
  po = '';

  /** PR */
  pr = '';

  /** 产品价格 */
  price = undefined;

  /** PO 状态：1-已下单、2-已确认、3-已编辑、4-已取消 */
  status = 'CANCELED';

  /** PO 状态 */
  statusDesc = '';

  /** 门店 ID */
  storeId = '';

  /** 门店名称 */
  storeName = '';

  /** 供应商 */
  supplier = '';

  /** 单品周销售额目标 */
  weekSalesGoal = undefined;
}

class OrderDetailItemDTO {
  /** 订单编号 */
  orderId = '';

  /** 第几页 */
  pageNum = undefined;

  /** 每页多少条 */
  pageSize = undefined;
}

class OrderListExportDTO {
  /** 下单人 */
  createUserName = '';

  /** 部门 */
  dep = '';

  /** 批量导出 - 选中的列表项 */
  exportItems = [];

  /** 下单时间 - 结束时间 */
  maxCreateTime = '';

  /** 下单时间 - 开始时间 */
  minCreateTime = '';

  /** 订单编号 */
  orderId = '';

  /** 第几页 */
  pageNum = undefined;

  /** 每页多少条 */
  pageSize = undefined;

  /** po */
  po = '';

  /** PR */
  pr = '';

  /** 门店 ID */
  storeId = '';
}

class OrderListExportItem {
  /** 订单编号 */
  orderId = '';

  /** PO */
  po = '';
}

class OrderListItem {
  /** 订单金额 */
  amount = undefined;

  /** 下单时间 */
  createTime = '';

  /** 下单人 */
  createUserName = '';

  /** 部门名称 */
  depName = '';

  /** 预计送达时间 */
  estDeliveredTime = '';

  /** 订单编号 */
  orderId = '';

  /** PO */
  po = '';

  /** PR */
  pr = '';

  /** 商品个数 */
  skuNum = undefined;

  /** 商品数量 */
  skuQuantity = undefined;

  /** PO 状态：1-已下单、2-已确认、3-已编辑、4-已取消 */
  status = 'CANCELED';

  /** 门店 ID */
  storeId = '';

  /** 门店名称 */
  storeName = '';

  /** 时区 */
  timezone = '';
}

class OrderListOptionsVO {
  /** 部门列表 */
  deps = [];

  /** 门店列表 */
  stores = [];
}

class OrderListPageDTO {
  /** 下单人 */
  createUserName = '';

  /** 部门 */
  dep = '';

  /** 下单时间 - 结束时间 */
  maxCreateTime = '';

  /** 下单时间 - 开始时间 */
  minCreateTime = '';

  /** 订单编号 */
  orderId = '';

  /** 第几页 */
  pageNum = undefined;

  /** 每页多少条 */
  pageSize = undefined;

  /** po */
  po = '';

  /** PR */
  pr = '';

  /** 门店 ID */
  storeId = '';
}

class OrderNewOptionsVO {
  /** 部门列表 */
  deps = [];

  /** 门店列表 */
  stores = [];
}

class OrderNewRefArticle {
  /** Article Number */
  articleNumber = '';

  /** 日参考订货量 */
  dayRefQuantity = undefined;

  /** 产品描述 */
  description = '';

  /** 规格尺寸 */
  packSize = '';

  /** 产品单价 */
  price = undefined;

  /** 供应商名称 */
  supplierName = '';

  /** 单品周销售额目标 */
  weekSalesGoal = undefined;
}

class PoDetailBaseVO {
  /** PO 单金额 */
  amount = undefined;

  /** 下单时间 */
  createTime = '';

  /** 下单人 id */
  createUserId = undefined;

  /** 下单人姓名 */
  createUserName = '';

  /** 部门 */
  depName = '';

  /** 预计送达时间 */
  estDeliveredTime = '';

  /** 订单编号 */
  orderId = '';

  /** 编号 */
  po = '';

  /** PR 编号 */
  pr = '';

  /** 产品个数 */
  skuNum = undefined;

  /** 产品数量 */
  skuQuantity = undefined;

  /** PO 状态：1-已下单、2-已确认、3-已编辑、4-已取消 */
  status = 'CANCELED';

  /** 状态 */
  statusDesc = '';

  /** 门店 id */
  storeId = '';

  /** 门店名称 */
  storeName = '';

  /** 时区 */
  timezone = '';
}

class PoDetailItem {
  /** Article Number */
  articleNumber = '';

  /** 日实际订货量 */
  dayActualQuantity = undefined;

  /** 日参考订货量 */
  dayRefQuantity = undefined;

  /** 部门名称 */
  depName = '';

  /** 产品描述 - 英文 */
  descriptionEn = '';

  /** 产品描述 - 繁体 */
  descriptionTc = '';

  /** 尺寸大小 */
  packSize = '';

  /** 产品价格 */
  price = undefined;

  /** 门店 ID */
  storeId = '';

  /** 门店名称 */
  storeName = '';

  /** 供应商 */
  supplier = '';

  /** 单品周销售额目标 */
  weekSalesGoal = undefined;
}

class PoDetailItemDTO {
  /** 订单编号 */
  orderId = '';

  /** 第几页 */
  pageNum = undefined;

  /** 每页多少条 */
  pageSize = undefined;

  /** PO 编号 */
  po = '';
}

class Response {
  /** 状态码：0-成功 */
  code = undefined;

  /** 响应数据 */
  data = new CreateOrderVO();

  /** 状态描述 */
  message = '';

  /** success */
  success = false;
}

class SalesGoalListDTO {
  /** 部门 */
  dep = '';

  /** 月份 */
  month = undefined;

  /** 第几页 */
  pageNum = undefined;

  /** 每页多少条 */
  pageSize = undefined;

  /** 门店 ID */
  storeId = '';

  /** 年份 */
  year = undefined;
}

class SalesGoalListItem {
  /** 部门 ID */
  depId = '';

  /** 部门名称 */
  depName = '';

  /** 目标值 */
  goal = undefined;

  /** id */
  id = undefined;

  /** 月份 */
  month = undefined;

  /** 操作人姓名 */
  optUserName = '';

  /** 门店 ID */
  storeId = '';

  /** 门店名称 */
  storeName = '';

  /** 更新时间 */
  updateTime = '';

  /** 年份 */
  year = undefined;
}

class SalesGoalListOptionVO {
  /** 部门列表 */
  deps = [];

  /** 门店列表 */
  stores = [];

  /** 年份列表（含月份） */
  yearWithMonths = [];
}

class SalesGoalOptLog {
  /** 操作描述 */
  optDesc = '';

  /** 操作人姓名 */
  optUserName = '';

  /** 更新时间 */
  updateTime = '';
}

class SapOrderingDTO {
  /** deptId */
  deptId = '';

  /** items */
  items = [];

  /** storeId */
  storeId = '';
}

class SapPrEntity {
  /** articleNumber */
  articleNumber = '';

  /** changedOn */
  changedOn = '';

  /** createdAt */
  createdAt = '';

  /** creator */
  creator = '';

  /** deleted */
  deleted = undefined;

  /** deletionIndicator */
  deletionIndicator = '';

  /** deliveryDate */
  deliveryDate = '';

  /** desiredVendor */
  desiredVendor = '';

  /** fixedVendor */
  fixedVendor = '';

  /** id */
  id = undefined;

  /** itemNumber */
  itemNumber = '';

  /** mch */
  mch = '';

  /** orderUnitOfMeasure */
  orderUnitOfMeasure = '';

  /** orderedQuantity */
  orderedQuantity = undefined;

  /** poNumber */
  poNumber = '';

  /** prNumber */
  prNumber = '';

  /** processingState */
  processingState = '';

  /** processingStatus */
  processingStatus = '';

  /** purchasingGroup */
  purchasingGroup = '';

  /** quantity */
  quantity = undefined;

  /** releaseDate */
  releaseDate = '';

  /** requisitionDate */
  requisitionDate = '';

  /** requisitioner */
  requisitioner = '';

  /** shortText */
  shortText = '';

  /** status */
  status = undefined;

  /** storageLocation */
  storageLocation = '';

  /** storeId */
  storeId = '';

  /** supplyingSite */
  supplyingSite = '';

  /** trackingNumber */
  trackingNumber = '';

  /** unitOfMeasure */
  unitOfMeasure = '';

  /** updatedAt */
  updatedAt = '';
}

class SaveLossFactorDTO {
  /** 损耗系数列表 */
  list = [];
}

class StatisticalSalesCategoryReport {
  /** 报表内容 */
  contents = [];

  /** 报表编号 */
  reportId = '';
}

class StatisticalSalesChart {
  /** 销售额 */
  amount = undefined;

  /** 产品 */
  articleNumber = '';

  /** 分类 */
  category = '';

  /** 部门 */
  department = '';

  /** 销售日期 */
  salesDate = '';

  /** 门店 */
  storeId = '';

  /** 销售量 */
  volume = undefined;
}

class StatisticalSalesProductReport {
  /** 报表内容 */
  contents = [];

  /** 报表编号 */
  reportId = '';
}

class StatisticalSalesStoreReport {
  /** 报表内容 */
  contents = [];

  /** 报表编号 */
  reportId = '';
}

class StatisticalSearchConditionVo {
  /** 查询产品编号 */
  articleNumbers = [];

  /** 查询分类 */
  categories = [];

  /** 是否对比去年同期 */
  compareSamePeriod = false;

  /** 查询部门 */
  department = '';

  /** 时间范围结束 */
  endDate = '';

  /** 业务模块 */
  module = '';

  /** 时间范围开始 */
  startDate = '';

  /** 查询门店 */
  storeIds = [];

  /** 查询名称 */
  storeNames = [];
}

class StoreOption {
  /** 主键 */
  id = undefined;

  /** 门店 ID */
  storeId = '';

  /** 门店名称 */
  storeName = '';
}

class UpdateSalesGoalDTO {
  /** 部门 ID */
  dep = '';

  /** 目标值 */
  goal = undefined;

  /** ID */
  id = undefined;

  /** 月份 */
  month = undefined;

  /** 门店 ID */
  storeId = '';

  /** 门店名称 */
  storeName = '';

  /** 年份 */
  year = undefined;
}

export const bakery = {
  ArticleOption,
  ArticleRefDTO,
  CategoryOption,
  Content,
  CreateOrderDTO,
  CreateOrderItem,
  CreateOrderVO,
  EstDeliveredDateVO,
  IPage,
  Item,
  LossFactor,
  LossFactorTree,
  NewArticleItem,
  NewArticlesDTO,
  NewSalesGoalDTO,
  OptionVO,
  OrderDetailBaseVO,
  OrderDetailItem,
  OrderDetailItemDTO,
  OrderListExportDTO,
  OrderListExportItem,
  OrderListItem,
  OrderListOptionsVO,
  OrderListPageDTO,
  OrderNewOptionsVO,
  OrderNewRefArticle,
  PoDetailBaseVO,
  PoDetailItem,
  PoDetailItemDTO,
  Response,
  SalesGoalListDTO,
  SalesGoalListItem,
  SalesGoalListOptionVO,
  SalesGoalOptLog,
  SapOrderingDTO,
  SapPrEntity,
  SaveLossFactorDTO,
  StatisticalSalesCategoryReport,
  StatisticalSalesChart,
  StatisticalSalesProductReport,
  StatisticalSalesStoreReport,
  StatisticalSearchConditionVo,
  StoreOption,
  UpdateSalesGoalDTO,
};
