class APPWarehouseVo {
  /** address */
  address = '';

  /** contact */
  contact = '';

  /** contactPhone */
  contactPhone = '';

  /** enName */
  enName = '';

  /** id */
  id = undefined;

  /** wmsNo */
  wmsNo = '';

  /** zhChsName */
  zhChsName = '';

  /** zhChtName */
  zhChtName = '';
}

class AppMatchCodeResponse {
  /** articleNumbers */
  articleNumbers = [];

  /** locationNames */
  locationNames = [];

  /** upcs */
  upcs = [];
}

class AppSearchInventoryResponse {
  /** articleNumber */
  articleNumber = undefined;

  /** availableStock */
  availableStock = undefined;

  /** imageURL */
  imageURL = '';

  /** inventoryId */
  inventoryId = undefined;

  /** locationName */
  locationName = '';

  /** productId */
  productId = undefined;

  /** productName */
  productName = '';

  /** salesPrice */
  salesPrice = undefined;

  /** upc */
  upc = '';

  /** variantName */
  variantName = '';
}

class BDLZ {
  /** basketCode */
  basketCode = '';

  /** orderId */
  orderId = '';
}

class BindDetail {
  /** basketNo */
  basketNo = '';

  /** location */
  location = undefined;

  /** orderId */
  orderId = '';
}

class BindInfoVO {
  /** details */
  details = [];

  /** truckNo */
  truckNo = '';
}

class BindTruckDTO {
  /** truckCode */
  truckCode = '';
}

class BoCreateInventoryReceiptVo {
  /** category */
  category = undefined;

  /** id */
  id = undefined;

  /** receipts */
  receipts = [];

  /** wmsId */
  wmsId = undefined;
}

class BoCreateShelfNodeVo {
  /** category */
  category = undefined;

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** parentId */
  parentId = undefined;

  /** remark */
  remark = '';

  /** type */
  type = undefined;

  /** wmsId */
  wmsId = undefined;
}

class BoCreateTruckBasketVo {
  /** count */
  count = undefined;

  /** type */
  type = undefined;

  /** wmsId */
  wmsId = undefined;
}

class BoInventoryReceiptDetailVo {
  /** availableStockChange */
  availableStockChange = undefined;

  /** category */
  category = undefined;

  /** currentAvailableStock */
  currentAvailableStock = undefined;

  /** currentLockStock */
  currentLockStock = undefined;

  /** id */
  id = undefined;

  /** lockStockChange */
  lockStockChange = undefined;

  /** nodeId */
  nodeId = undefined;

  /** nodeName */
  nodeName = '';

  /** productId */
  productId = undefined;

  /** productImage */
  productImage = '';

  /** productNameEn */
  productNameEn = '';

  /** productNameSch */
  productNameSch = '';

  /** productNameTch */
  productNameTch = '';

  /** receiptNo */
  receiptNo = '';

  /** totalStock */
  totalStock = undefined;

  /** upc */
  upc = '';

  /** updatedByName */
  updatedByName = '';

  /** updatedTime */
  updatedTime = '';
}

class BoInventoryReceiptVo {
  /** category */
  category = undefined;

  /** count */
  count = undefined;

  /** id */
  id = undefined;

  /** receiptNo */
  receiptNo = '';

  /** status */
  status = undefined;

  /** updatedByName */
  updatedByName = '';

  /** updatedTime */
  updatedTime = '';

  /** wmsId */
  wmsId = undefined;

  /** wmsName */
  wmsName = '';

  /** wmsNo */
  wmsNo = '';
}

class BoInventoryVO {
  /** articleNumber */
  articleNumber = undefined;

  /** availableStock */
  availableStock = undefined;

  /** id */
  id = undefined;

  /** imageUrl */
  imageUrl = '';

  /** lockStock */
  lockStock = undefined;

  /** nodeId */
  nodeId = undefined;

  /** nodeName */
  nodeName = '';

  /** productId */
  productId = undefined;

  /** productNameEn */
  productNameEn = '';

  /** productNameSch */
  productNameSch = '';

  /** productNameTch */
  productNameTch = '';

  /** rate */
  rate = undefined;

  /** saleableStock */
  saleableStock = undefined;

  /** totalStock */
  totalStock = undefined;

  /** upc */
  upc = '';

  /** wmsId */
  wmsId = undefined;

  /** wmsNo */
  wmsNo = '';
}

class BoShelfNodeDetailVo {
  /** category */
  category = undefined;

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** parentId */
  parentId = undefined;

  /** parentName */
  parentName = '';

  /** remark */
  remark = '';

  /** type */
  type = undefined;

  /** wmsId */
  wmsId = undefined;
}

class BoShelfNodeVo {
  /** id */
  id = undefined;

  /** name */
  name = '';

  /** path */
  path = '';

  /** remark */
  remark = '';

  /** type */
  type = undefined;

  /** updatedByName */
  updatedByName = '';

  /** updatedTime */
  updatedTime = '';
}

class BoShelfTreeViewVo {
  /** id */
  id = undefined;

  /** name */
  name = '';

  /** subTreeNodes */
  subTreeNodes = [];

  /** wmsId */
  wmsId = undefined;
}

class BoTruckBasketVo {
  /** id */
  id = undefined;

  /** nameNo */
  nameNo = '';

  /** type */
  type = undefined;

  /** updatedByName */
  updatedByName = '';

  /** updatedTime */
  updatedTime = '';

  /** wmsId */
  wmsId = undefined;

  /** wmsName */
  wmsName = '';
}

class BoUpdateShelfNodeSequenceVo {
  /** rules */
  rules = [];
}

class BoWarehouseVo {
  /** address */
  address = '';

  /** contact */
  contact = '';

  /** contactPhone */
  contactPhone = '';

  /** enName */
  enName = '';

  /** id */
  id = undefined;

  /** status */
  status = undefined;

  /** updatedByName */
  updatedByName = '';

  /** updatedTime */
  updatedTime = '';

  /** wmsNo */
  wmsNo = '';

  /** zhChsName */
  zhChsName = '';

  /** zhChtName */
  zhChtName = '';
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

class JBLZ {
  /** location */
  location = undefined;
}

class JHDXQ {
  /** areaCode */
  areaCode = '';

  /** basketNo */
  basketNo = '';

  /** orderInfo */
  orderInfo = new PickingMainOrderDO();

  /** productList */
  productList = [];

  /** shelfCode */
  shelfCode = '';
}

class LocationInfoDetail {
  /** 篮子位置 */
  basketNo = '';

  /** 数量 */
  quantity = undefined;

  /** 重量 */
  weight = undefined;
}

class LocationInfoVO {
  /** 可放置的篮子位置 key:篮子位置 value:LocationInfoDetail */
  locationMap = undefined;

  /** 商品信息 */
  productInfo = new PickingSubOrderDO();

  /** 需要放入数量 */
  quantity = undefined;

  /** 需要放入重量 */
  weight = undefined;
}

class OrderLab {
  /** barTag */
  barTag = '';

  /** barcode */
  barcode = '';
}

class PackageOrderRequestVo {
  /** height */
  height = undefined;

  /** length */
  length = undefined;

  /** numberOfFreshPackage */
  numberOfFreshPackage = undefined;

  /** numberOfFrozenPackage */
  numberOfFrozenPackage = undefined;

  /** numberOfPantryPackage */
  numberOfPantryPackage = undefined;

  /** orderId */
  orderId = '';

  /** unitType */
  unitType = '';

  /** weight */
  weight = undefined;

  /** width */
  width = undefined;
}

class PackageOrderResponseVo {
  /** customerName */
  customerName = '';

  /** deliveryStartTime */
  deliveryStartTime = undefined;

  /** deliveryType */
  deliveryType = undefined;

  /** labelURLs */
  labelURLs = [];

  /** numberOfFreshPackage */
  numberOfFreshPackage = undefined;

  /** numberOfFrozenPackage */
  numberOfFrozenPackage = undefined;

  /** numberOfPantryPackage */
  numberOfPantryPackage = undefined;

  /** orderId */
  orderId = '';

  /** orderLabs */
  orderLabs = [];
}

class PickingMainOrderDO {
  /** batchId */
  batchId = '';

  /** createdTime */
  createdTime = '';

  /** deleted */
  deleted = undefined;

  /** deliveryId */
  deliveryId = undefined;

  /** 配送供应商：0. 无 1. 自提 2. Doordash 3. Uber 4. Fedex */
  deliveryProvider = undefined;

  /** 配送类型：0. 无 1. 自提 2. 当日达 3. 直邮 4. 自营配送 */
  deliveryType = undefined;

  /** deliveryTypeDesc */
  deliveryTypeDesc = '';

  /** dueDateTime */
  dueDateTime = new Timestamp();

  /** 快递类型：1. 普通快递 2. 加急快递 */
  expressType = undefined;

  /** height */
  height = undefined;

  /** id */
  id = undefined;

  /** length */
  length = undefined;

  /** numberOfFreshPackage */
  numberOfFreshPackage = undefined;

  /** numberOfFrozenPackage */
  numberOfFrozenPackage = undefined;

  /** numberOfPantryPackage */
  numberOfPantryPackage = undefined;

  /** numberOfProduct */
  numberOfProduct = undefined;

  /** numberOfProductCategory */
  numberOfProductCategory = undefined;

  /** orderCreatedTime */
  orderCreatedTime = new Timestamp();

  /** orderId */
  orderId = '';

  /** packageTs */
  packageTs = undefined;

  /** packageUnitType */
  packageUnitType = '';

  /** phoneNumber */
  phoneNumber = '';

  /** pickNumberOfProduct */
  pickNumberOfProduct = undefined;

  /** pickNumberOfProductCategory */
  pickNumberOfProductCategory = undefined;

  /** pickUserId */
  pickUserId = undefined;

  /** pickUserName */
  pickUserName = '';

  /** remark */
  remark = '';

  /** selfPickupCode */
  selfPickupCode = '';

  /** selfPickupStatus */
  selfPickupStatus = 'NA';

  /** status */
  status = undefined;

  /** storeId */
  storeId = undefined;

  /** updatedBy */
  updatedBy = undefined;

  /** updatedTime */
  updatedTime = '';

  /** weight */
  weight = undefined;

  /** width */
  width = undefined;
}

class PickingSubOrderDO {
  /** articleNumber */
  articleNumber = undefined;

  /** basketNo */
  basketNo = '';

  /** createdTime */
  createdTime = '';

  /** deleted */
  deleted = undefined;

  /** id */
  id = undefined;

  /** netWeight */
  netWeight = undefined;

  /** netWeightUom */
  netWeightUom = '';

  /** numberOfNetWeight */
  numberOfNetWeight = undefined;

  /** numberOfPickingQuantity */
  numberOfPickingQuantity = undefined;

  /** orderId */
  orderId = '';

  /** productId */
  productId = undefined;

  /** productMainPic */
  productMainPic = '';

  /** productNameEn */
  productNameEn = '';

  /** productNameSch */
  productNameSch = '';

  /** productNameTch */
  productNameTch = '';

  /** productType */
  productType = undefined;

  /** quantity */
  quantity = undefined;

  /** salePrice */
  salePrice = undefined;

  /** shelfNodeNames */
  shelfNodeNames = [];

  /** upc */
  upc = '';

  /** updatedBy */
  updatedBy = undefined;

  /** updatedTime */
  updatedTime = '';

  /** variantId */
  variantId = '';

  /** variantName */
  variantName = '';
}

class Receipt {
  /** count */
  count = undefined;

  /** nodeName */
  nodeName = '';

  /** productId */
  productId = undefined;

  /** upc */
  upc = '';
}

class RemoveFromBasketDTO {
  /** location */
  location = undefined;

  /** quantity */
  quantity = undefined;

  /** upc */
  upc = '';
}

class RemoveProdcut {
  /** 需要移出的map 位置-> 数量 */
  locationToQuantityMap = undefined;

  /** 商品信息 */
  product = new PickingSubOrderDO();

  /** 需要移出总数量 */
  quantity = undefined;
}

class Response {
  /** 状态码：0-成功 */
  code = undefined;

  /** 响应数据 */
  data = new AppMatchCodeResponse();

  /** 状态描述 */
  message = '';

  /** success */
  success = false;
}

class Rule {
  /** id */
  id = undefined;

  /** sequence */
  sequence = undefined;
}

class SPFDLZL {
  /** basketNo */
  basketNo = '';

  /** quantity */
  quantity = undefined;

  /** upc */
  upc = '';

  /** weight */
  weight = undefined;
}

class ShelveProductVo {
  /** count */
  count = undefined;

  /** productId */
  productId = undefined;

  /** upc */
  upc = '';
}

class SubmitDTO {
  /** 存货区barcode */
  areaCode = '';

  /** 篮子编码 */
  basketNo = '';
}

class TJJH {
  /** 是否需要移出商品 */
  needRemove = false;

  /** 移出商品列表 upc-> 移出商品信息 */
  removeProdcutMap = undefined;
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

export const warehouse = {
  APPWarehouseVo,
  AppMatchCodeResponse,
  AppSearchInventoryResponse,
  BDLZ,
  BindDetail,
  BindInfoVO,
  BindTruckDTO,
  BoCreateInventoryReceiptVo,
  BoCreateShelfNodeVo,
  BoCreateTruckBasketVo,
  BoInventoryReceiptDetailVo,
  BoInventoryReceiptVo,
  BoInventoryVO,
  BoShelfNodeDetailVo,
  BoShelfNodeVo,
  BoShelfTreeViewVo,
  BoTruckBasketVo,
  BoUpdateShelfNodeSequenceVo,
  BoWarehouseVo,
  IPage,
  JBLZ,
  JHDXQ,
  LocationInfoDetail,
  LocationInfoVO,
  OrderLab,
  PackageOrderRequestVo,
  PackageOrderResponseVo,
  PickingMainOrderDO,
  PickingSubOrderDO,
  Receipt,
  RemoveFromBasketDTO,
  RemoveProdcut,
  Response,
  Rule,
  SPFDLZL,
  ShelveProductVo,
  SubmitDTO,
  TJJH,
  Timestamp,
};
