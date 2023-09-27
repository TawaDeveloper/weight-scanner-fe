type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace tawa {
    export class AddRoleRequest {
      /** 应用id */
      applicationId: number;

      /** 编码 */
      code: string;

      /** 角色名 */
      name: string;

      /** 结束有效期 */
      validEndTime: string;

      /** 开始有效期 */
      validStartTime: string;
    }

    export class EditRoleRequest {
      /** 应用id */
      applicationId: number;

      /** 编码 */
      code: string;

      /** id */
      id: number;

      /** 角色名 */
      name: string;

      /** 结束有效期 */
      validEndTime: string;

      /** 开始有效期 */
      validStartTime: string;
    }

    export class LoginUserInfo {
      /** 账号 */
      account?: string;

      /** 头像 */
      avatar?: string;

      /** 邮箱 */
      email?: string;

      /** google SSO token */
      googleToken?: string;

      /** 登录方式 */
      loginType?: 'GOOGLE_SSO' | 'ACCOUNT';

      /** 用户名 */
      name?: string;

      /** 是否需要重置密码 */
      needResetPwd?: boolean;

      /** 觉色列表 */
      roles?: Array<number>;

      /** 账号登录 token(jwt) */
      token?: string;

      /** 用户id */
      userId?: number;
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

    export class PageRoleRequest {
      /** 应用code */
      applicationCode?: string;

      /** 用户id, 如果列表有值, 根据列表id内容导出 */
      idList?: Array<number>;

      /** 角色名称 */
      name?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 状态：ENABLE-启用、DISABLE-禁用 */
      status?: 'ENABLE' | 'DISABLE';
    }

    export class PageRoleResponse {
      /** 应用id */
      applicationId?: number;

      /** 应用名 */
      applicationName?: string;

      /** 编码 */
      code?: string;

      /** id */
      id?: number;

      /** 角色名 */
      name?: string;

      /** 状态：ENABLE-启用、DISABLE-禁用 */
      status?: 'ENABLE' | 'DISABLE';

      /** 更新人 */
      updatedBy?: number;

      /** 更新人姓名 */
      updatedByName?: string;

      /** 更新时间 */
      updatedTime?: string;

      /** 用户数 */
      userNum?: number;

      /** 结束有效期 */
      validEndTime?: string;

      /** 开始有效期 */
      validStartTime?: string;
    }

    export class PageRuleUserRequest {
      /** 账号 */
      account?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 角色id */
      roleId: number;
    }

    export class PageRuleUserResponse {
      /** 账户 */
      account?: string;

      /** 最后登录时间 */
      lastLoginTime?: string;

      /** 姓名 */
      name?: string;

      /** 角色 id */
      roleId?: number;

      /** 用户 id */
      userId?: number;
    }

    export class QueryRoleOption {
      /** 应用id */
      applicationId?: number;

      /** 应用名 */
      applicationName?: string;

      /** 角色列表 */
      roles?: Array<defs.tawa.RoleOption>;
    }

    export class RemoveUserRequest {
      /** 角色id */
      roleId: number;

      /** 用户ID */
      userId: number;
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
  }
}

declare namespace API {
  export namespace tawa {
    /**
     * 角色接口
     */
    export namespace permRole {
      /**
       * 新增角色
       * /perm/roles
       */
      export namespace saveRole {
        export type saveRoleBody = defs.tawa.AddRoleRequest;
        export type saveRoleOptions = Record<string, any>;
        export type saveRoleResponse = defs.tawa.Response<number>;
        export type request = (
          body: saveRoleBody,
          options?: saveRoleOptions,
        ) => saveRoleResponse;
      }

      /**
       * 编辑角色
       * /perm/roles
       */
      export namespace editRole {
        export type editRoleBody = defs.tawa.EditRoleRequest;
        export type editRoleOptions = Record<string, any>;
        export type editRoleResponse = defs.tawa.Response<boolean>;
        export type request = (
          body: editRoleBody,
          options?: editRoleOptions,
        ) => editRoleResponse;
      }

      /**
       * 导出
       * /perm/roles/export
       */
      export namespace exporting {
        export type exportingBody = defs.tawa.PageRoleRequest;
        export type exportingOptions = Record<string, any>;
        export type exportingResponse = any;
        export type request = (
          body: exportingBody,
          options?: exportingOptions,
        ) => exportingResponse;
      }

      /**
       * 角色分页列表
       * /perm/roles/list
       */
      export namespace list {
        export type listBody = defs.tawa.PageRoleRequest;
        export type listOptions = Record<string, any>;
        export type listResponse = defs.tawa.Response<
          defs.tawa.PageInfo<defs.tawa.PageRoleResponse>
        >;
        export type request = (
          body: listBody,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 查询所有的角色选项
       * /perm/roles/options
       */
      export namespace options {
        export type optionsParam = {
          /** 角色名 */
          name?: string;
        };
        export type optionsOptions = Record<string, any>;
        export type optionsResponse = defs.tawa.Response<
          Array<defs.tawa.QueryRoleOption>
        >;
        export type request = (
          params: optionsParam,
          options?: optionsOptions,
        ) => optionsResponse;
      }

      /**
       * 关联人员 - 移除用户
       * /perm/roles/user/remove
       */
      export namespace removeUser {
        export type removeUserBody = defs.tawa.RemoveUserRequest;
        export type removeUserOptions = Record<string, any>;
        export type removeUserResponse = defs.tawa.Response<boolean>;
        export type request = (
          body: removeUserBody,
          options?: removeUserOptions,
        ) => removeUserResponse;
      }

      /**
       * 查询关联人员
       * /perm/roles/users
       */
      export namespace userPage {
        export type userPageBody = defs.tawa.PageRuleUserRequest;
        export type userPageOptions = Record<string, any>;
        export type userPageResponse = defs.tawa.Response<
          defs.tawa.PageInfo<defs.tawa.PageRuleUserResponse>
        >;
        export type request = (
          body: userPageBody,
          options?: userPageOptions,
        ) => userPageResponse;
      }

      /**
       * 查询关联人员-excel导出
       * /perm/roles/users/export
       */
      export namespace userExport {
        export type userExportBody = defs.tawa.PageRuleUserRequest;
        export type userExportOptions = Record<string, any>;
        export type userExportResponse = any;
        export type request = (
          body: userExportBody,
          options?: userExportOptions,
        ) => userExportResponse;
      }

      /**
       * 编辑状态
       * /perm/roles/{id}/{status}
       */
      export namespace editStatus {
        export type editStatusPath = {
          /** id */
          id: string;
        };
        export type editStatusOptions = Record<string, any>;
        export type editStatusResponse = defs.tawa.Response<boolean>;
        export type request = (
          path: editStatusPath,
          options?: editStatusOptions,
        ) => editStatusResponse;
      }
    }
  }
}
