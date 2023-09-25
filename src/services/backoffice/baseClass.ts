class ChangeLogDO {
  /** catlog */
  catlog = '';

  /** content */
  content = '';

  /** createdTime */
  createdTime = '';

  /** deleted */
  deleted = undefined;

  /** id */
  id = undefined;

  /** updatedBy */
  updatedBy = undefined;

  /** updatedTime */
  updatedTime = '';

  /** updatedUsername */
  updatedUsername = '';
}

class Component {
  /** code */
  code = '';

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** sort */
  sort = undefined;

  /** visible */
  visible = false;
}

class ConfigAppVersionDTO {
  /** 描述信息 */
  describeInfo = '';

  /** 下载地址 */
  downUrl = '';

  /** 是否强制更新(安卓/pda 次参数为必选项) */
  forceUpdate = false;

  /** 更新人(新增/编辑不用传) */
  updatedByName = '';

  /** 更新时间(新增/编辑不用传) yyyy-MM-dd HH:mm:ss */
  updatedTime = '';

  /** 版本号 */
  version = '';
}

class ConfigCustomerDto {
  /** Email地址 */
  email = '';

  /** 客服电话 */
  phoneNumber = '';

  /** times */
  times = [];
}

class ConfigMemberDto {
  /** 积分有效期(天) */
  integralChangeRate = undefined;

  /** 积分使用起始值(分) */
  minUseIntegral = undefined;

  /** 会员升级累计支付金额计算周期(天) */
  payCalculateCycle = undefined;

  /** 积分有效期(天) */
  pointsValidity = undefined;
}

class ConfigPlatformFeeDto {
  /** id */
  id = undefined;

  /** 平台使用费用比例(%) */
  platformFee = undefined;

  /** 平台使用固定费用 */
  platformFixedFee = undefined;

  /** 门店id */
  storeId = undefined;

  /** 门店名称 */
  storeName = '';
}

class ConfigShoppingCartDto {
  /** 8899 运费配置 */
  fare8899 = new Fare8899();

  /** 9988 运费配置 */
  fare9988 = new Fare9988();

  /**  O2O 运费配置 */
  fareO2O = [];

  /** 库存提醒阈值 */
  inventoryThreshold = undefined;

  /** 购物车一次提交商品数量限制 */
  maxSubmitNum = undefined;
}

class ContentBriefPageQueryDTO {
  /** 分类ID */
  categoryId = undefined;

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;
}

class ContentCategoryPageQueryDTO {
  /** 分类名称 */
  name = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 状态：1-未启用、2-启用 */
  status = undefined;
}

class ContentCategorySaveDTO {
  /** 分类编码（可以是字母+数字） */
  code = '';

  /** 分类ID; 为 null 时新建, 不为 null 时修改 */
  id = undefined;

  /** 分类名称（英文） */
  nameEn = '';

  /** 分类名称（中文简体） */
  nameZhCn = '';

  /** 分类名称（中文繁体） */
  nameZhTw = '';
}

class ContentCategorySimpleVO {
  /** 分类编码 */
  code = '';

  /** 分类ID */
  id = undefined;

  /** 分类名称 */
  name = '';
}

class ContentCategoryStatusDTO {
  /** 分类ID */
  id = undefined;

  /** 状态：1-未启用、2-启用 */
  status = undefined;
}

class ContentCategoryVO {
  /** 分类编码 */
  code = '';

  /** 内容数 */
  contentCount = undefined;

  /** 分类ID */
  id = undefined;

  /** 分类名称（英文） */
  nameEn = '';

  /** 分类名称（中文简体） */
  nameZhCn = '';

  /** 分类名称（中文繁体） */
  nameZhTw = '';

  /** 状态：1-未启用、2-启用 */
  status = undefined;

  /** 状态名称 */
  statusName = '';

  /** 更新人 */
  updatedBy = undefined;

  /** 更新人名称 */
  updatedByName = '';

  /** 更新时间 */
  updatedTime = undefined;
}

class ContentDTO {
  /** 分类ID */
  categoryId = undefined;

  /** 内容（英文） */
  contentEn = '';

  /** 内容（中文简体） */
  contentZhCn = '';

  /** 内容（中文繁体） */
  contentZhTw = '';

  /** ID（为null时新增；不为null时更新） */
  id = undefined;

  /** 描述（英文） */
  introEn = '';

  /** 描述（中文简体） */
  introZhCn = '';

  /** 描述（中文繁体） */
  introZhTw = '';

  /** 关键词（英文） */
  keywordEn = '';

  /** 关键词（中文简体） */
  keywordZhCn = '';

  /** 关键词（中文繁体） */
  keywordZhTw = '';

  /** 发布时间 */
  publishTime = undefined;

  /** 发布类型：1-即时发布、2-定时发布 */
  publishType = undefined;

  /** 排序值 */
  sort = undefined;

  /** 标题（英文） */
  titleEn = '';

  /** 标题（中文简体） */
  titleZhCn = '';

  /** 标题（中文繁体） */
  titleZhTw = '';
}

class ContentDetailVO {
  /** 分类ID */
  categoryId = undefined;

  /** 内容 */
  content = '';

  /** ID */
  id = undefined;

  /** 描述 */
  intro = '';

  /** 关键词 */
  keyword = '';

  /** 发布时间 */
  publishTime = undefined;

  /** 标题 */
  title = '';

  /** 更新人 */
  updatedBy = undefined;

  /** 更新人名称 */
  updatedByName = '';
}

class ContentFullVO {
  /** 分类ID */
  categoryId = undefined;

  /** 内容（英文） */
  contentEn = '';

  /** 内容（中文简体） */
  contentZhCn = '';

  /** 内容（中文繁体） */
  contentZhTw = '';

  /** ID */
  id = undefined;

  /** 描述（英文） */
  introEn = '';

  /** 描述（中文简体） */
  introZhCn = '';

  /** 描述（中文繁体） */
  introZhTw = '';

  /** 关键词（英文） */
  keywordEn = '';

  /** 关键词（中文简体） */
  keywordZhCn = '';

  /** 关键词（中文繁体） */
  keywordZhTw = '';

  /** 发布时间 */
  publishTime = undefined;

  /** 发布类型：1-即时发布、2-定时发布 */
  publishType = undefined;

  /** 排序值 */
  sort = undefined;

  /** 标题（英文） */
  titleEn = '';

  /** 标题（中文简体） */
  titleZhCn = '';

  /** 标题（中文繁体） */
  titleZhTw = '';
}

class ContentIntroVO {
  /** 分类ID */
  categoryId = undefined;

  /** ID */
  id = undefined;

  /** 描述 */
  intro = '';

  /** 关键词 */
  keyword = '';

  /** 发布时间 */
  publishTime = undefined;

  /** 排序值 */
  sort = undefined;

  /** 标题 */
  title = '';

  /** 更新人 */
  updatedBy = undefined;

  /** 更新人名称 */
  updatedByName = '';
}

class ContentPageQueryDTO {
  /** 分类ID */
  categoryId = undefined;

  /** 创建结束时间 */
  createdTimeEnd = undefined;

  /** 创建起始时间 */
  createdTimeStart = undefined;

  /** lang */
  lang = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 状态：1-草稿、2-已上架、3-已下架 */
  status = undefined;

  /** 标题 */
  title = '';

  /** 更新结束时间 */
  updatedTimeEnd = undefined;

  /** 更新起始时间 */
  updatedTimeStart = undefined;
}

class ContentStatusDTO {
  /** ID */
  id = undefined;

  /** 状态：2-已上架、3-已下架 */
  status = undefined;
}

class ContentVO {
  /** 分类ID */
  categoryId = undefined;

  /** 分类名称 */
  categoryName = '';

  /** 创建时间 */
  createdTime = undefined;

  /** ID */
  id = undefined;

  /** 发布状态 */
  publishStatusName = '';

  /** 发布时间 */
  publishTime = undefined;

  /** 发布类型：1-即时发布、2-定时发布 */
  publishType = undefined;

  /** 排序值 */
  sort = undefined;

  /** 状态：1-草稿、2-已上架、3-已下架 */
  status = undefined;

  /** 状态名称 */
  statusName = '';

  /** 标题 */
  title = '';

  /** 更新人 */
  updatedBy = undefined;

  /** 更新人名称 */
  updatedByName = '';

  /** 更新时间 */
  updatedTime = undefined;

  /** 查看次数 */
  viewCount = undefined;
}

class CopyUserVO {
  /** 部门 id */
  departmentId = undefined;

  /** 邮箱 */
  email = '';

  /** 手机号 */
  phone = '';

  /** 角色 id 列表 */
  roleIds = [];

  /** 改密周期 */
  updatePwdPeriod = undefined;
}

class Department {
  /** 下级部门数 */
  childNum = undefined;

  /** 创建时间 */
  createdTime = '';

  /** id */
  id = undefined;

  /** 层级 */
  level = undefined;

  /** 部门名称 */
  name = '';

  /** 英文名称 */
  nameEnUs = '';

  /** 中文名称 */
  nameZhCn = '';

  /** 繁体名称 */
  nameZhTw = '';

  /** 父 id */
  parentId = undefined;

  /** 父部门名称 */
  parentName = '';

  /** 备注 */
  remark = '';

  /** 更新人 */
  updatedBy = '';

  /** 更新时间 */
  updatedTime = '';

  /** 用户数 */
  userNum = undefined;
}

class DepartmentDTO {
  /** 英文名称 */
  nameEnUs = '';

  /** 中文名称 */
  nameZhCn = '';

  /** 繁体名称 */
  nameZhTw = '';

  /** 父 id */
  parentId = undefined;
}

class DepartmentTreeItem {
  /** 下属部门 */
  children = [];

  /** id */
  id = undefined;

  /** 层级 */
  level = undefined;

  /** 名称 */
  name = '';

  /** 父 id */
  parentId = undefined;
}

class DictionaryVO {
  /** Key */
  key = undefined;

  /** Value */
  value = '';
}

class EditConfigAppVersionDTO {
  /** 描述信息 */
  describeInfo = '';

  /** 下载地址 */
  downUrl = '';

  /** 是否强制更新(安卓/pda 次参数为必选项) */
  forceUpdate = false;

  /** id */
  id = undefined;

  /** 更新人(新增/编辑不用传) */
  updatedByName = '';

  /** 更新时间(新增/编辑不用传) yyyy-MM-dd HH:mm:ss */
  updatedTime = '';

  /** 版本号 */
  version = '';
}

class ExportRoleReq {
  /** 权限id */
  roleIdList = [];
}

class Fare8899 {
  /** 2天时效运费 */
  day2fare = undefined;

  /** fareList */
  fareList = [];
}

class Fare9988 {
  /** 运费 */
  fare = undefined;

  /** 免运阈值 */
  freeThreshold = undefined;
}

class FareO2O {
  /** 运费 */
  fare = undefined;

  /** 免运阈值 */
  freeThreshold = undefined;

  /** 门店分组id */
  groupId = undefined;

  /** 门店分组名称 */
  groupName = '';
}

class FieldOption {
  /** 字段名称 */
  label = '';

  /** 排序 */
  sort = undefined;

  /** 字段 id */
  value = undefined;
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

class ListDepartmentDTO {
  /** 部门名称 */
  name = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 父 id */
  parentId = undefined;
}

class ListRoleDTO {
  /** name */
  name = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** status */
  status = undefined;
}

class ListRoleUserDTO {
  /** account */
  account = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** roleId */
  roleId = undefined;
}

class ListUserDTO {
  /** 账号/姓名 */
  accountOrName = '';

  /** 部门 id */
  departmentId = undefined;

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;
}

class ListUserRoleDTO {
  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 用户 id */
  userId = undefined;
}

class LoginDTO {
  /** 账号 */
  account = '';

  /** 密码 */
  password = '';
}

class LoginInfo {
  /** account */
  account = '';

  /** avatar */
  avatar = '';

  /** name */
  name = '';

  /** needResetPwd */
  needResetPwd = false;

  /** token */
  token = '';
}

class Menu {
  /** children */
  children = [];

  /** code */
  code = '';

  /** components */
  components = [];

  /** id */
  id = undefined;

  /** level */
  level = undefined;

  /** name */
  name = '';

  /** type */
  type = undefined;
}

class MenuDto {
  /** 应用 id */
  appId = undefined;

  /** 子菜单 */
  children = [];

  /** 控制参数 */
  code = '';

  /** 当前环境对应的菜单名称 */
  currentName = '';

  /** 唯一的权限编码 */
  finallyCode = '';

  /** id */
  id = undefined;

  /** 层级 */
  level = undefined;

  /** 英文名称 */
  nameEnUs = '';

  /** 中文名称 */
  nameZhCn = '';

  /** 繁体名称 */
  nameZhTw = '';

  /** 父 id */
  parentId = undefined;

  /** 排序 */
  sort = undefined;

  /** 类型：11-菜单、13-接口 */
  type = undefined;
}

class ModuleAndField {
  /** 接口字段 */
  fieldIds = [];

  /** 业务模块 */
  moduleId = undefined;
}

class ModuleAndFieldDTO {
  /** fieldIds */
  fieldIds = [];

  /** moduleId */
  moduleId = undefined;

  /** roleId */
  roleId = undefined;
}

class ModuleOption {
  /** 字段列表 */
  fields = [];

  /** 模块名称 */
  label = '';

  /** 排序 */
  sort = undefined;

  /** 业务模块 */
  value = undefined;
}

class Option {
  /** label */
  label = '';

  /** value */
  value = undefined;
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

class Permission {
  /** 操作 */
  components = [];

  /** 菜单 */
  menus = [];
}

class PermissionTreeItem {
  /** children */
  children = [];

  /** code */
  code = '';

  /** id */
  id = undefined;

  /** level */
  level = undefined;

  /** name */
  name = '';

  /** parentId */
  parentId = undefined;

  /** type */
  type = undefined;

  /** typeDesc */
  typeDesc = '';
}

class ProhibitedWordPageQueryDTO {
  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 违禁词 */
  word = '';
}

class ProhibitedWordSaveDTO {
  /** ID; 为'null'时新建, 不为'null'时编辑 */
  id = undefined;

  /** 违禁词（英文） */
  wordEn = '';

  /** 违禁词（中文简体） */
  wordZhCn = '';

  /** 违禁词（中文繁体） */
  wordZhTw = '';
}

class ProhibitedWordUploadVO {
  /** 上传失败的数据（第一行为表头） */
  errorData = [];

  /** 成功上传的数据条数 */
  successCount = undefined;
}

class ProhibitedWordVO {
  /** ID */
  id = undefined;

  /** 更新人 */
  updatedBy = undefined;

  /** 更新人名称 */
  updatedByName = '';

  /** 更新时间 */
  updatedTime = undefined;

  /** 违禁词（英文） */
  wordEn = '';

  /** 违禁词（中文简体） */
  wordZhCn = '';

  /** 违禁词（中文繁体） */
  wordZhTw = '';
}

class QueryAppVersionRequest {
  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 版本号 */
  version = '';
}

class RemoveUserDTO {
  /** roleId */
  roleId = undefined;

  /** userId */
  userId = undefined;
}

class ResetPwdDTO {
  /** id */
  id = undefined;

  /** 密码 */
  password = '';
}

class Response {
  /** 状态码：0-成功 */
  code = undefined;

  /** 响应数据 */
  data = new ConfigCustomerDto();

  /** 状态描述 */
  message = '';

  /** success */
  success = false;
}

class Role {
  /** 角色 id */
  id = undefined;

  /** 名称 */
  name = '';

  /** 状态 */
  status = undefined;

  /** 状态描述 */
  statusDesc = '';

  /** 更新人 */
  updatedBy = '';

  /** 更新时间 */
  updatedTime = '';

  /** 关联用户数 */
  userNum = undefined;

  /** 有效期截止时间 */
  validEndTime = '';

  /** 有效期开始时间 */
  validStartTime = '';

  /** 有效期类型 */
  validTimeType = undefined;
}

class RoleDTO {
  /** 名称 */
  name = '';

  /** 有效期截止时间 */
  validEndTime = '';

  /** 有效期开始时间 */
  validStartTime = '';

  /** 有效期类型 */
  validTimeType = undefined;
}

class RoleDepDistributeDTO {
  /** 部门 id 列表 */
  departmentIds = [];

  /** 是否继承 */
  inherit = false;

  /** 角色 id */
  roleId = undefined;
}

class RoleStoreDTO {
  /** roleId */
  roleId = undefined;

  /** storeIds */
  storeIds = [];
}

class RoleUser {
  /** account */
  account = '';

  /** departmentName */
  departmentName = '';

  /** lastLoginTime */
  lastLoginTime = '';

  /** name */
  name = '';

  /** userId */
  userId = undefined;
}

class RoleWarehouseDTO {
  /** roleId */
  roleId = undefined;

  /** warehouseIds */
  warehouseIds = [];
}

class S3PreSignInfo {
  /** 上传后的访问地址 */
  key = '';

  /** 上传 URL，请求方式 PUT */
  url = '';
}

class SaveOptPermissionDTO {
  /** appId */
  appId = undefined;

  /** permissionIds */
  permissionIds = [];

  /** roleId */
  roleId = undefined;
}

class StateFare {
  /** 运费 */
  fare = undefined;

  /** 免运阈值 */
  freeThreshold = undefined;

  /** 州 */
  state = '';
}

class Times {
  /** 服务日期(周一/周二/周三.../周日) */
  day = [];

  /** 结束时间(格式: 08:00) */
  endTime = '';

  /** 开始时间(格式: 08:00) */
  startTime = '';
}

class UpdateDepartmentDTO {
  /** id */
  id = undefined;

  /** 英文名称 */
  nameEnUs = '';

  /** 中文名称 */
  nameZhCn = '';

  /** 繁体名称 */
  nameZhTw = '';
}

class UpdatePwdDTO {
  /** 新密码 */
  newPassword = '';

  /** 原密码 */
  oldPassword = '';
}

class UpdateRoleDTO {
  /** id */
  id = undefined;

  /** 名称 */
  name = '';

  /** 有效期截止时间 */
  validEndTime = '';

  /** 有效期开始时间 */
  validStartTime = '';

  /** 有效期类型 */
  validTimeType = undefined;
}

class UpdateRoleStatusDTO {
  /** id */
  id = undefined;

  /** 状态：1-启用、0-禁用 */
  status = undefined;
}

class UpdateStatusDTO {
  /** id */
  id = undefined;

  /** 状态：1-正常、0-禁用 */
  status = undefined;
}

class UpdateUserDTO {
  /** 账号 */
  account = '';

  /** 所属部门 id */
  departmentId = undefined;

  /** 邮箱 */
  email = '';

  /** id */
  id = undefined;

  /** 姓名 */
  name = '';

  /** 手机号 */
  phone = '';

  /** 角色 id 列表 */
  roleIds = [];

  /** 改密周期 */
  updatePwdPeriod = undefined;
}

class UpdateUserRoleValidTimeDTO {
  /** 用户角色 id */
  id = undefined;

  /** 有效期截止时间 */
  validEndTime = '';

  /** 有效期开始时间 */
  validStartTime = '';

  /** 有效期类型：1-长期、2-短期 */
  validTimeType = undefined;
}

class User {
  /** 账号 */
  account = '';

  /** 创建日期 */
  createdTime = '';

  /** 部门 id */
  departmentId = undefined;

  /** 部门名称 */
  departmentName = '';

  /** 邮箱 */
  email = '';

  /** id */
  id = undefined;

  /** 姓名 */
  name = '';

  /** 手机号 */
  phone = '';

  /** 角色 id 列表 */
  roleIds = [];

  /** 状态 */
  status = undefined;

  /** 状态描述 */
  statusDesc = '';

  /** 改密周期 */
  updatePwdPeriod = undefined;
}

class UserDTO {
  /** 账号 */
  account = '';

  /** 所属部门 id */
  departmentId = undefined;

  /** 邮箱 */
  email = '';

  /** 姓名 */
  name = '';

  /** 密码 */
  password = '';

  /** 手机号 */
  phone = '';

  /** 角色 id 列表 */
  roleIds = [];

  /** 改密周期 */
  updatePwdPeriod = undefined;
}

class UserRole {
  /** 分配时间 */
  createdTime = '';

  /** id */
  id = undefined;

  /** 角色名称 */
  roleName = '';

  /** 有效期截止时间 */
  validEndTime = '';

  /** 有效期开始时间 */
  validStartTime = '';

  /** 有效期类型 */
  validTimeType = undefined;

  /** 有效期类型描述 */
  validTimeTypeDesc = '';
}

class ValidDTO {
  /** phone */
  phone = '';
}

export const backoffice = {
  ChangeLogDO,
  Component,
  ConfigAppVersionDTO,
  ConfigCustomerDto,
  ConfigMemberDto,
  ConfigPlatformFeeDto,
  ConfigShoppingCartDto,
  ContentBriefPageQueryDTO,
  ContentCategoryPageQueryDTO,
  ContentCategorySaveDTO,
  ContentCategorySimpleVO,
  ContentCategoryStatusDTO,
  ContentCategoryVO,
  ContentDTO,
  ContentDetailVO,
  ContentFullVO,
  ContentIntroVO,
  ContentPageQueryDTO,
  ContentStatusDTO,
  ContentVO,
  CopyUserVO,
  Department,
  DepartmentDTO,
  DepartmentTreeItem,
  DictionaryVO,
  EditConfigAppVersionDTO,
  ExportRoleReq,
  Fare8899,
  Fare9988,
  FareO2O,
  FieldOption,
  IPage,
  ListDepartmentDTO,
  ListRoleDTO,
  ListRoleUserDTO,
  ListUserDTO,
  ListUserRoleDTO,
  LoginDTO,
  LoginInfo,
  Menu,
  MenuDto,
  ModuleAndField,
  ModuleAndFieldDTO,
  ModuleOption,
  Option,
  PageInfo,
  Permission,
  PermissionTreeItem,
  ProhibitedWordPageQueryDTO,
  ProhibitedWordSaveDTO,
  ProhibitedWordUploadVO,
  ProhibitedWordVO,
  QueryAppVersionRequest,
  RemoveUserDTO,
  ResetPwdDTO,
  Response,
  Role,
  RoleDTO,
  RoleDepDistributeDTO,
  RoleStoreDTO,
  RoleUser,
  RoleWarehouseDTO,
  S3PreSignInfo,
  SaveOptPermissionDTO,
  StateFare,
  Times,
  UpdateDepartmentDTO,
  UpdatePwdDTO,
  UpdateRoleDTO,
  UpdateRoleStatusDTO,
  UpdateStatusDTO,
  UpdateUserDTO,
  UpdateUserRoleValidTimeDTO,
  User,
  UserDTO,
  UserRole,
  ValidDTO,
};
