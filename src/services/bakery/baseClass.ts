class ArticleRefDTO {
  /** 产品 Article Number 列表 */
  articleNumbers = [];

  /** 部门 */
  dep = '';

  /** 门店 id */
  storeId = '';
}

class CategoryOption {
  /** 类别描述 */
  description = '';

  /** 类别 ID */
  id = undefined;
}

class CreateOrderDTO {
  /** 部门 */
  dep = '';

  /** 门店 id */
  storeId = '';
}

class CreateUserDTO {
  /** 密码 */
  password = '';

  /** 账号 */
  username = '';
}

class DDXX {
  /** articleNumber */
  articleNumber = '';

  /** blocked */
  blocked = '';

  /** changedOn */
  changedOn = '';

  /** createdAt */
  createdAt = new Timestamp();

  /** creator */
  creator = '';

  /** deleted */
  deleted = false;

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
  itemNumber = undefined;

  /** mch */
  mch = '';

  /** poNumber */
  poNumber = '';

  /** prNumber */
  prNumber = '';

  /** processingState */
  processingState = '';

  /** processingStatus */
  processingStatus = '';

  /** quantity */
  quantity = undefined;

  /** releaseDate */
  releaseDate = '';

  /** requisitionDate */
  requisitionDate = '';

  /** requisitioner */
  requisitioner = '';

  /** storeId */
  storeId = '';

  /** updatedAt */
  updatedAt = new Timestamp();
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

class LoginDTO {
  /** 密码 */
  password = '';

  /** 账号 */
  username = '';
}

class LoginVO {
  /** 用户标识（账号） */
  identifier = '';

  /** 会话 token */
  token = '';

  /** 用户 ID */
  userId = undefined;
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

class MDXX {
  /** 主键 */
  id = undefined;

  /** 门店 ID */
  storeId = '';

  /** 门店名称 */
  storeName = '';
}

class OptionVO {
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
  dep = '';

  /** 预计送达时间 */
  estDeliveredTime = '';

  /** 订单 id */
  orderId = '';

  /** 产品个数 */
  skuNum = undefined;

  /** 产品数量 */
  skuQuantity = undefined;

  /** 状态描述 */
  statusDesc = '';

  /** 门店 id */
  storeId = '';

  /** 门店名称 */
  storeName = '';
}

class OrderDetailItem {}

class OrderDetailItemDTO {
  /** 订单 id */
  orderId = '';

  /** 第几页 */
  pageNum = undefined;

  /** 每页多少条 */
  pageSize = undefined;
}

class OrderItem {
  /** articleNumber */
  articleNumber = '';

  /** qty */
  qty = undefined;

  /** record_type */
  record_type = '';
}

class OrderListExportDTO {
  /** 下单人 */
  createUserName = '';

  /** 部门 */
  dep = '';

  /** 订单编号 */
  id = '';

  /** 批量导出 - 选中的 id */
  ids = [];

  /** 下单时间 - 结束时间 */
  maxCreateTime = '';

  /** 下单时间 - 开始时间 */
  minCreateTime = '';

  /** 第几页 */
  pageNum = undefined;

  /** 每页多少条 */
  pageSize = undefined;

  /** 区域 */
  storeGroup = '';

  /** 门店 ID */
  storeId = '';

  /** 门店名称 */
  storeName = '';
}

class OrderListItem {
  /** 订单金额 */
  amount = undefined;

  /** 下单时间 */
  createTime = '';

  /** 下单人 */
  createUserName = '';

  /** 部门 */
  dep = '';

  /** 预计送达时间 */
  estDeliveredTime = '';

  /** PR 编号 */
  id = '';

  /** PO 编号 */
  sapPo = '';

  /** 商品个数 */
  skuNum = undefined;

  /** 商品数量 */
  skuQuantity = undefined;

  /** 订单状态：1-已下单、2-已确认、3-已编辑、4-已取消 */
  status = 'CANCELED';

  /** 区域 */
  storeGroup = '';

  /** 门店 ID */
  storeId = '';

  /** 门店名称 */
  storeName = '';
}

class OrderListOptionsVO {
  /** 部门列表 */
  deps = [];

  /** 区域列表 */
  storeGroups = [];
}

class OrderListPageDTO {
  /** 下单人 */
  createUserName = '';

  /** 部门 */
  dep = '';

  /** 订单编号 */
  id = '';

  /** 下单时间 - 结束时间 */
  maxCreateTime = '';

  /** 下单时间 - 开始时间 */
  minCreateTime = '';

  /** 第几页 */
  pageNum = undefined;

  /** 每页多少条 */
  pageSize = undefined;

  /** 区域 */
  storeGroup = '';

  /** 门店 ID */
  storeId = '';

  /** 门店名称 */
  storeName = '';
}

class OrderNewArticlesVO {}

class OrderNewOptionsVO {
  /** 部门列表 */
  deps = [];

  /** 门店列表 */
  stores = [];
}

class OrderNewRefArticle {}

class Response {
  /** 状态码：0-成功 */
  code = undefined;

  /** 响应数据 */
  data = new IPage();

  /** 状态描述 */
  message = '';

  /** success */
  success = false;
}

class SAPMchEntity {
  /** createdAt */
  createdAt = new Timestamp();

  /** deleted */
  deleted = false;

  /** id */
  id = undefined;

  /** lossFactor */
  lossFactor = undefined;

  /** mch */
  mch = '';

  /** mchClass */
  mchClass = '';

  /** mchClassDescription */
  mchClassDescription = '';

  /** mchCnDescription */
  mchCnDescription = '';

  /** mchDepartment */
  mchDepartment = '';

  /** mchDepartmentDescription */
  mchDepartmentDescription = '';

  /** mchDescription */
  mchDescription = '';

  /** mchDivision */
  mchDivision = '';

  /** mchDivisionDescription */
  mchDivisionDescription = '';

  /** updatedAt */
  updatedAt = new Timestamp();
}

class SapOrderingDTO {
  /** customerId */
  customerId = '';

  /** deptId */
  deptId = '';

  /** items */
  items = [];

  /** storeId */
  storeId = '';
}

class SaveLossFactorDTO {
  /** 损耗系数列表 */
  list = [];
}

class StatisticsStoreReport {
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

class StatisticsStoreSales {
  /** 销售额 */
  amount = undefined;

  /** 产品 */
  articleNumber = '';

  /** 部门 */
  department = '';

  /** 销售日期 */
  salesDate = '';

  /** 门店 */
  storeId = '';

  /** 销售量 */
  volume = undefined;
}

class StoreGroupOption {
  /** 门店分组名称 */
  storeGroupName = '';

  /** 分组下的门店列表 */
  stores = [];
}

class Timestamp {
  /** date */
  date = undefined;

  /** day */
  day = undefined;

  /** hours */
  hours = undefined;

  /** minutes */
  minutes = undefined;

  /** month */
  month = undefined;

  /** nanos */
  nanos = undefined;

  /** seconds */
  seconds = undefined;

  /** time */
  time = undefined;

  /** timezoneOffset */
  timezoneOffset = undefined;

  /** year */
  year = undefined;
}

export const bakery = {
  ArticleRefDTO,
  CategoryOption,
  CreateOrderDTO,
  CreateUserDTO,
  DDXX,
  IPage,
  LoginDTO,
  LoginVO,
  LossFactor,
  LossFactorTree,
  MDXX,
  OptionVO,
  OrderDetailBaseVO,
  OrderDetailItem,
  OrderDetailItemDTO,
  OrderItem,
  OrderListExportDTO,
  OrderListItem,
  OrderListOptionsVO,
  OrderListPageDTO,
  OrderNewArticlesVO,
  OrderNewOptionsVO,
  OrderNewRefArticle,
  Response,
  SAPMchEntity,
  SapOrderingDTO,
  SaveLossFactorDTO,
  StatisticsStoreReport,
  StatisticsStoreSales,
  StoreGroupOption,
  Timestamp,
};
