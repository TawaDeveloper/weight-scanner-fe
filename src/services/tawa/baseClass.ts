class AddRoleRequest {
  /** 应用id */
  applicationId = undefined;

  /** 编码 */
  code = '';

  /** 角色名 */
  name = '';

  /** 结束有效期 */
  validEndTime = '';

  /** 开始有效期 */
  validStartTime = '';
}

class EditRoleRequest {
  /** 应用id */
  applicationId = undefined;

  /** 编码 */
  code = '';

  /** id */
  id = undefined;

  /** 角色名 */
  name = '';

  /** 结束有效期 */
  validEndTime = '';

  /** 开始有效期 */
  validStartTime = '';
}

class LoginUserInfo {
  /** 账号 */
  account = '';

  /** 头像 */
  avatar = '';

  /** 邮箱 */
  email = '';

  /** google SSO token */
  googleToken = '';

  /** 登录方式 */
  loginType = 'GOOGLE_SSO';

  /** 用户名 */
  name = '';

  /** 是否需要重置密码 */
  needResetPwd = false;

  /** 觉色列表 */
  roles = [];

  /** 账号登录 token(jwt) */
  token = '';

  /** 用户id */
  userId = undefined;
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

class PageRoleRequest {
  /** 应用code */
  applicationCode = '';

  /** 用户id, 如果列表有值, 根据列表id内容导出 */
  idList = [];

  /** 角色名称 */
  name = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 状态：ENABLE-启用、DISABLE-禁用 */
  status = 'ENABLE';
}

class PageRoleResponse {
  /** 应用id */
  applicationId = undefined;

  /** 应用名 */
  applicationName = '';

  /** 编码 */
  code = '';

  /** id */
  id = undefined;

  /** 角色名 */
  name = '';

  /** 状态：ENABLE-启用、DISABLE-禁用 */
  status = 'ENABLE';

  /** 更新人 */
  updatedBy = undefined;

  /** 更新人姓名 */
  updatedByName = '';

  /** 更新时间 */
  updatedTime = '';

  /** 用户数 */
  userNum = undefined;

  /** 结束有效期 */
  validEndTime = '';

  /** 开始有效期 */
  validStartTime = '';
}

class PageRuleUserRequest {
  /** 账号 */
  account = '';

  /** pageNum */
  pageNum = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 角色id */
  roleId = undefined;
}

class PageRuleUserResponse {
  /** 账户 */
  account = '';

  /** 最后登录时间 */
  lastLoginTime = '';

  /** 姓名 */
  name = '';

  /** 角色 id */
  roleId = undefined;

  /** 用户 id */
  userId = undefined;
}

class QueryRoleOption {
  /** 应用id */
  applicationId = undefined;

  /** 应用名 */
  applicationName = '';

  /** 角色列表 */
  roles = [];
}

class RemoveUserRequest {
  /** 角色id */
  roleId = undefined;

  /** 用户ID */
  userId = undefined;
}

class Response {
  /** 状态码：0-成功 */
  code = undefined;

  /** 响应数据 */
  data = new LoginUserInfo();

  /** 状态描述 */
  message = '';

  /** success */
  success = false;
}

export const tawa = {
  AddRoleRequest,
  EditRoleRequest,
  LoginUserInfo,
  PageInfo,
  PageRoleRequest,
  PageRoleResponse,
  PageRuleUserRequest,
  PageRuleUserResponse,
  QueryRoleOption,
  RemoveUserRequest,
  Response,
};
