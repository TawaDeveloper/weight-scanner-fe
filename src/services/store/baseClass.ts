class AddressDetail {
  /** city */
  city = '';

  /** houseNo */
  houseNo = '';

  /** nation */
  nation = '';

  /** state */
  state = '';

  /** street */
  street = '';

  /** zipcode */
  zipcode = '';
}

class BannerDto {
  /** 覆盖业务 0:default, 1:当日达, 2:次日达, 3:全美直邮 */
  business = [];

  /** 指向类型 1:分类, 2:商品, 3:自定义页面, 4:无指向 */
  directionType = undefined;

  /** 指向类型链接 */
  directionUrl = '';

  /** 点击量 */
  hits = undefined;

  /** id */
  id = undefined;

  /** 英文图片url */
  imageEn = '';

  /** 简体中文url */
  imageSch = '';

  /** 繁体图片url */
  imageTch = '';

  /** 功能区名称 */
  name = '';

  /** 发布时间 */
  releaseTime = '';

  /** 发布类型 1:及时发布  2:定时发布  */
  releaseType = undefined;

  /** 排序 */
  sort = undefined;

  /** 状态  0:禁用, 1: 启用 */
  status = undefined;

  /** O2O区域 */
  storeGroups = [];

  /** 平台，1：APP，2：WEB，3：WEB_TOP */
  type = undefined;

  /** 更新人姓名 */
  updatedByName = '';

  /** 更新时间 */
  updatedTime = '';
}

class BannerXX {
  /** 指向类型，1:category, 2:product, 3:customize */
  directionType = undefined;

  /** 指向链接 */
  directionUrl = '';

  /** bannerId */
  id = undefined;

  /** image */
  image = '';

  /** Banner name */
  name = '';
}

class BoGoogleMapValidateVo {
  /** addressDetail */
  addressDetail = new AddressDetail();

  /** formattedAddress */
  formattedAddress = '';

  /** latitude */
  latitude = '';

  /** longitude */
  longitude = '';
}

class BoGroupVo {
  /** id */
  id = undefined;

  /** name */
  name = '';

  /** status */
  status = undefined;

  /** storeCount */
  storeCount = undefined;

  /** stores */
  stores = [];

  /** type */
  type = undefined;

  /** updatedByName */
  updatedByName = '';

  /** updatedTime */
  updatedTime = '';
}

class BoSelectStoreCondition {
  /** address */
  address = '';

  /** groupId */
  groupId = [];

  /** name */
  name = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** status */
  status = undefined;

  /** storeId */
  storeId = undefined;

  /** storeNature */
  storeNature = undefined;

  /** storeType */
  storeType = undefined;
}

class BoStoreActivityDetailVo {
  /** activityEndTime */
  activityEndTime = '';

  /** activityId */
  activityId = undefined;

  /** activityName */
  activityName = '';

  /** activityStartTime */
  activityStartTime = '';

  /** id */
  id = undefined;

  /** image */
  image = '';

  /** releaseTime */
  releaseTime = '';

  /** releaseType */
  releaseType = undefined;

  /** storeName */
  storeName = '';
}

class BoStoreActivityVo {
  /** activityEndTime */
  activityEndTime = '';

  /** activityName */
  activityName = '';

  /** activityStartTime */
  activityStartTime = '';

  /** id */
  id = undefined;

  /** status */
  status = undefined;

  /** storeGroupId */
  storeGroupId = undefined;

  /** storeGroupName */
  storeGroupName = '';

  /** storeId */
  storeId = undefined;

  /** storeName */
  storeName = '';

  /** updateByName */
  updateByName = '';

  /** updatedTime */
  updatedTime = '';
}

class BoStoreDeliveryDetailVo {
  /** storeDeliveryDirectMail */
  storeDeliveryDirectMail = new BoStoreDeliveryDirectMailVo();

  /** storeDeliveryNextDay */
  storeDeliveryNextDay = new BoStoreDeliveryNextDayVo();

  /** storeDeliverySameDay */
  storeDeliverySameDay = new BoStoreDeliverySameDayVo();
}

class BoStoreDeliveryDirectMailVo {
  /** states */
  states = [];

  /** storeId */
  storeId = undefined;

  /** type */
  type = undefined;

  /** zipCodes */
  zipCodes = [];
}

class BoStoreDeliveryNextDayVo {
  /** storeId */
  storeId = undefined;

  /** type */
  type = undefined;

  /** zipCodes */
  zipCodes = [];
}

class BoStoreDeliverySameDayVo {
  /** bypassTollRoad */
  bypassTollRoad = false;

  /** flashDistance */
  flashDistance = undefined;

  /** pickupDistance */
  pickupDistance = undefined;

  /** storeId */
  storeId = undefined;

  /** type */
  type = undefined;

  /** zipCodes */
  zipCodes = [];
}

class BoStoreDetailVo {
  /** address */
  address = '';

  /** availableDays */
  availableDays = undefined;

  /** city */
  city = '';

  /** companyCode */
  companyCode = '';

  /** deliveryProvider */
  deliveryProvider = undefined;

  /** deliveryTime */
  deliveryTime = undefined;

  /** email */
  email = '';

  /** faxNumber */
  faxNumber = '';

  /** flashDistance */
  flashDistance = undefined;

  /** groupId */
  groupId = undefined;

  /** groupName */
  groupName = '';

  /** houseNo */
  houseNo = '';

  /** id */
  id = undefined;

  /** latitude */
  latitude = '';

  /** limitRules */
  limitRules = [];

  /** logo */
  logo = '';

  /** longitude */
  longitude = '';

  /** nation */
  nation = '';

  /** orderLimit */
  orderLimit = undefined;

  /** pickingTime */
  pickingTime = undefined;

  /** pickupDistance */
  pickupDistance = undefined;

  /** serviceFee */
  serviceFee = undefined;

  /** state */
  state = '';

  /** storeBusinessTimes */
  storeBusinessTimes = [];

  /** storeDeliverTimes */
  storeDeliverTimes = [];

  /** storeDeliveryExcludeZipCodes */
  storeDeliveryExcludeZipCodes = [];

  /** storeName */
  storeName = '';

  /** storeNature */
  storeNature = undefined;

  /** storeNumber */
  storeNumber = undefined;

  /** storeType */
  storeType = undefined;

  /** street */
  street = '';

  /** telephone */
  telephone = '';

  /** timeZone */
  timeZone = '';

  /** warehouse */
  warehouse = new Warehouse();

  /** zipcode */
  zipcode = '';
}

class BoStoreIntroductionVo {
  /** id */
  id = undefined;

  /** instruction */
  instruction = '';

  /** storeId */
  storeId = undefined;

  /** storeName */
  storeName = '';

  /** updateByName */
  updateByName = '';

  /** updatedTime */
  updatedTime = '';
}

class BoStoreVo {
  /** address */
  address = '';

  /** availableDays */
  availableDays = undefined;

  /** city */
  city = '';

  /** companyCode */
  companyCode = '';

  /** createdByName */
  createdByName = '';

  /** deadlineHour */
  deadlineHour = undefined;

  /** deadlineMinute */
  deadlineMinute = undefined;

  /** deliveryProvider */
  deliveryProvider = undefined;

  /** deliveryTime */
  deliveryTime = undefined;

  /** email */
  email = '';

  /** faxNumber */
  faxNumber = '';

  /** groupId */
  groupId = undefined;

  /** groupName */
  groupName = '';

  /** houseNo */
  houseNo = '';

  /** id */
  id = undefined;

  /** latitude */
  latitude = '';

  /** limitRules */
  limitRules = [];

  /** logo */
  logo = '';

  /** longitude */
  longitude = '';

  /** nation */
  nation = '';

  /** orderLimit */
  orderLimit = undefined;

  /** pickingTime */
  pickingTime = undefined;

  /** serviceFee */
  serviceFee = undefined;

  /** state */
  state = '';

  /** status */
  status = undefined;

  /** storeBusinessTimes */
  storeBusinessTimes = [];

  /** storeDeliverTimes */
  storeDeliverTimes = [];

  /** storeName */
  storeName = '';

  /** storeNature */
  storeNature = undefined;

  /** storeNumber */
  storeNumber = undefined;

  /** storeType */
  storeType = undefined;

  /** street */
  street = '';

  /** telephone */
  telephone = '';

  /** timeZone */
  timeZone = '';

  /** updateByName */
  updateByName = '';

  /** warehouseId */
  warehouseId = undefined;

  /** zipcode */
  zipcode = '';
}

class BusinessTime {
  /** 星期几 */
  dayOfWeeks = '';

  /** 结束营业时间 */
  endTime = '';

  /** 开始营业时间 */
  startTime = '';
}

class ChangeStoreDTO {
  /** 配送类型 */
  deliveryType = undefined;

  /** 纬度 */
  latitude = undefined;

  /** 经度 */
  longitude = undefined;

  /** 州 */
  state = '';

  /** 门店ID */
  storeId = undefined;

  /** 邮编 */
  zipCode = '';
}

class ChangeStoreVO {
  /** 配送列表 */
  deliveryTypes = [];

  /** 是否保持原来的门店 */
  hold = false;

  /** 类型：0-未开通服务，1-配送列表 */
  type = undefined;
}

class CreateOrUpdateGroupVo {
  /** id */
  id = undefined;

  /** name */
  name = '';

  /** status */
  status = undefined;

  /** type */
  type = undefined;
}

class DeliveryTimeVO {
  /** 日期 */
  date = '';

  /** 周几 */
  day = '';

  /** 是否为空，都不可用 */
  full = false;

  /** 时间段集合 */
  timeList = [];
}

class DeliveryType {
  /** 门店列表（type=3时默认选中第一个门店） */
  stores = [];

  /** 配送类型：1-自提、2-闪送、3-全美直邮 */
  type = undefined;

  /** 类型描述 */
  typeDesc = '';

  /** 类型名称 */
  typeName = '';
}

class DeliveryTypeItem {
  /** 类型 */
  type = undefined;

  /** 描述 */
  typeDesc = '';

  /** 名称 */
  typeName = '';
}

class GroupVo {
  /** id */
  id = undefined;

  /** name */
  name = '';
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

class ImportZipCodeResult {
  /** failedRow */
  failedRow = undefined;

  /** failedZipCodes */
  failedZipCodes = [];

  /** successRow */
  successRow = undefined;
}

class LimitRule {
  /** dayOfWeeks */
  dayOfWeeks = [];

  /** details */
  details = [];
}

class LimitRuleDetail {
  /** count */
  count = undefined;

  /** timePeriod */
  timePeriod = '';
}

class ListBannerDTO {
  /** 类型，1：APP，2：WEB，3：WEB_TOP */
  types = [];

  /** 邮编 */
  zipCode = '';
}

class ListDeliveryTypeDTO {
  /** 州 */
  state = '';

  /** 邮编 */
  zipCode = '';
}

class ListNearbyStoreDTO {
  /** 纬度 */
  latitude = undefined;

  /** 经度 */
  longitude = undefined;

  /** 州 */
  state = '';

  /** 邮编 */
  zipCode = '';
}

class ListStoreDTO {
  /** 配送方式 */
  deliveryType = undefined;

  /** 纬度 */
  latitude = undefined;

  /** 经度 */
  longitude = undefined;

  /** 州 */
  state = '';

  /** 邮编 */
  zipCode = '';
}

class Map {}

class NearbyDeliveryTypeVO {
  /** 配送列表 */
  deliveryTypes = [];

  /** 类型：0-未开通服务，1-配送列表 */
  type = undefined;
}

class NearbyStoreDTO {
  /** 地址 */
  address = '';

  /** 纬度 */
  latitude = undefined;

  /** 经度 */
  longitude = undefined;

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 范围之内,单位/英里 */
  within = undefined;

  /** 邮编 */
  zipCode = '';
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

class PeriodTime {
  /** 是否可用 */
  available = false;

  /** 配送时间段 */
  time = '';
}

class QueryBannerRequest {
  /** banner名称 */
  name = '';

  /** 更新时间排序 0:降序, 1:升序 */
  orderBy = undefined;

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 状态  0:禁用, 1: 启用 */
  status = undefined;

  /** 类型，1：APP，2：WEB，3：WEB_TOP */
  type = undefined;
}

class Response {
  /** 状态码：0-成功 */
  code = undefined;

  /** 响应数据 */
  data = new BoGoogleMapValidateVo();

  /** 状态描述 */
  message = '';

  /** success */
  success = false;
}

class SelectStoreAndGroupCondition {
  /** authFilter */
  authFilter = false;

  /** condition */
  condition = '';
}

class State {
  /** id */
  id = undefined;

  /** name */
  name = '';

  /** state */
  state = '';
}

class Store {
  /** 门店地址 */
  address = '';

  /** 营业时间列表 */
  businessTimeList = [];

  /** 城市 */
  city = '';

  /** 公司编码 */
  companyCode = '';

  /** 配送提供商code */
  deliveryProviderCode = undefined;

  /** 配送提供商名字 */
  deliveryProviderName = '';

  /** 距离 */
  distance = undefined;

  /** 距离单位 */
  distanceUnit = '';

  /** 电子邮箱 */
  email = '';

  /** 传真 */
  faxNumber = '';

  /** 门牌号 */
  houseNo = '';

  /** id */
  id = undefined;

  /** 门店信息介绍 */
  instruction = '';

  /** 纬度 */
  latitude = '';

  /** logo */
  logo = '';

  /** 经度 */
  longitude = '';

  /** 名称 */
  name = '';

  /** 服务费 */
  serviceFee = undefined;

  /** 州 */
  state = '';

  /** 门店性质 1-当日达，2-次日达，3-全美直邮 */
  storeNature = undefined;

  /** 门店编号 */
  storeNumber = undefined;

  /** 门店类型 1-实体店，2-虚拟店 */
  storeType = undefined;

  /** 街道 */
  street = '';

  /** 联系电话 */
  telephone = '';

  /** 门店时区 */
  timeZone = '';

  /** 邮政编码 */
  zipCode = '';
}

class StoreActivity {
  /** 活动日期 */
  date = '';

  /** 门店活动ID */
  id = undefined;

  /** 活动图片text */
  imageText = '';

  /** 活动图片URL */
  imageUrl = '';

  /** 活动标题 */
  name = '';
}

class StoreAd {
  /** 门店地址 */
  address = '';

  /** 门店ID */
  id = undefined;

  /** 门店名称 */
  name = '';

  /** 门店活动信息列表 */
  storeActivities = [];
}

class StoreDetail {
  /** address */
  address = '';

  /** availableDays */
  availableDays = undefined;

  /** city */
  city = '';

  /** companyCode */
  companyCode = '';

  /** createdByName */
  createdByName = '';

  /** deliveryProvider */
  deliveryProvider = undefined;

  /** deliveryTime */
  deliveryTime = undefined;

  /** email */
  email = '';

  /** faxNumber */
  faxNumber = '';

  /** groupId */
  groupId = undefined;

  /** groupName */
  groupName = '';

  /** houseNo */
  houseNo = '';

  /** id */
  id = undefined;

  /** latitude */
  latitude = '';

  /** logo */
  logo = '';

  /** longitude */
  longitude = '';

  /** nation */
  nation = '';

  /** orderLimit */
  orderLimit = undefined;

  /** orderLimitTemplateId */
  orderLimitTemplateId = undefined;

  /** pickingTime */
  pickingTime = undefined;

  /** serviceFee */
  serviceFee = undefined;

  /** state */
  state = '';

  /** status */
  status = undefined;

  /** storeName */
  storeName = '';

  /** storeNature */
  storeNature = undefined;

  /** storeNumber */
  storeNumber = undefined;

  /** storeType */
  storeType = undefined;

  /** street */
  street = '';

  /** telephone */
  telephone = '';

  /** timeZone */
  timeZone = '';

  /** updateByName */
  updateByName = '';

  /** zipcode */
  zipcode = '';
}

class StoreGroupAndNature {
  /** storeGroups */
  storeGroups = [];

  /** storeNatures */
  storeNatures = [];
}

class StoreInfo {
  /** 门店地址 */
  address = '';

  /** 营业时间列表 */
  businessTimeList = [];

  /** 距离, 单位/英里 */
  distance = undefined;

  /** 电子邮箱 */
  email = '';

  /** 传真 */
  faxNumber = '';

  /** 全称州名 */
  fullState = '';

  /** 门店ID */
  id = undefined;

  /** 门店信息介绍 */
  instruction = '';

  /** 纬度 */
  latitude = '';

  /** 经度 */
  longitude = '';

  /** 门店名称 */
  name = '';

  /** 州名 */
  state = '';

  /** 门店性质 1-当日达、2-次日达、3-全美直邮 */
  storeNature = undefined;

  /** 门店类型 1-实体门店，2-虚拟门店 */
  storeType = undefined;

  /** 联系电话 */
  telephone = '';

  /** 邮政编码 */
  zipCode = '';
}

class StoreResponse {
  /** city */
  city = '';

  /** companyCode */
  companyCode = '';

  /** deliveryProviderCode */
  deliveryProviderCode = undefined;

  /** deliveryProviderName */
  deliveryProviderName = '';

  /** groupId */
  groupId = undefined;

  /** groupName */
  groupName = '';

  /** houseNo */
  houseNo = '';

  /** id */
  id = undefined;

  /** latitude */
  latitude = undefined;

  /** logo */
  logo = '';

  /** longitude */
  longitude = undefined;

  /** name */
  name = '';

  /** serviceFee */
  serviceFee = undefined;

  /** state */
  state = '';

  /** storeNature */
  storeNature = undefined;

  /** storeNumber */
  storeNumber = undefined;

  /** storeType */
  storeType = undefined;

  /** street */
  street = '';

  /** telephone */
  telephone = '';

  /** timeZone */
  timeZone = '';

  /** zipCode */
  zipCode = '';
}

class StoreTimeGroup {
  /** endHour */
  endHour = undefined;

  /** endMinute */
  endMinute = undefined;

  /** startHour */
  startHour = undefined;

  /** startMinute */
  startMinute = undefined;

  /** week */
  week = [];
}

class UpdateBannerRequest {
  /** banner ID */
  id = '';

  /** 状态  0:禁用, 1: 启用 */
  status = undefined;

  /** 台，1：APP，2：WEB，3：WEB_TOP */
  type = undefined;
}

class UserRegistrationDTO {
  /** 邮箱 */
  email = '';

  /** 邮编 */
  zipCode = '';
}

class Warehouse {
  /** id */
  id = undefined;

  /** name */
  name = '';
}

class WebBannerXX {
  /** banners */
  banners = [];

  /** 类型，1：APP，2：WEB，3：WEB_TOP */
  type = undefined;
}

export const store = {
  AddressDetail,
  BannerDto,
  BannerXX,
  BoGoogleMapValidateVo,
  BoGroupVo,
  BoSelectStoreCondition,
  BoStoreActivityDetailVo,
  BoStoreActivityVo,
  BoStoreDeliveryDetailVo,
  BoStoreDeliveryDirectMailVo,
  BoStoreDeliveryNextDayVo,
  BoStoreDeliverySameDayVo,
  BoStoreDetailVo,
  BoStoreIntroductionVo,
  BoStoreVo,
  BusinessTime,
  ChangeStoreDTO,
  ChangeStoreVO,
  CreateOrUpdateGroupVo,
  DeliveryTimeVO,
  DeliveryType,
  DeliveryTypeItem,
  GroupVo,
  IPage,
  ImportZipCodeResult,
  LimitRule,
  LimitRuleDetail,
  ListBannerDTO,
  ListDeliveryTypeDTO,
  ListNearbyStoreDTO,
  ListStoreDTO,
  Map,
  NearbyDeliveryTypeVO,
  NearbyStoreDTO,
  PageInfo,
  PageVO,
  PeriodTime,
  QueryBannerRequest,
  Response,
  SelectStoreAndGroupCondition,
  State,
  Store,
  StoreActivity,
  StoreAd,
  StoreDetail,
  StoreGroupAndNature,
  StoreInfo,
  StoreResponse,
  StoreTimeGroup,
  UpdateBannerRequest,
  UserRegistrationDTO,
  Warehouse,
  WebBannerXX,
};
