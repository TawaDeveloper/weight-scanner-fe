type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace backoffice {
    export class ChangeLogDO {
      /** catlog */
      catlog?: string;

      /** content */
      content?: string;

      /** createdTime */
      createdTime?: string;

      /** deleted */
      deleted?: number;

      /** id */
      id?: number;

      /** updatedBy */
      updatedBy?: number;

      /** updatedTime */
      updatedTime?: string;

      /** updatedUsername */
      updatedUsername?: string;
    }

    export class Component {
      /** code */
      code?: string;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** sort */
      sort?: number;

      /** visible */
      visible?: boolean;
    }

    export class ConfigAppVersionDTO {
      /** 描述信息 */
      describeInfo?: string;

      /** 下载地址 */
      downUrl: string;

      /** 是否强制更新(安卓/pda 次参数为必选项) */
      forceUpdate?: boolean;

      /** 更新人(新增/编辑不用传) */
      updatedByName?: string;

      /** 更新时间(新增/编辑不用传) yyyy-MM-dd HH:mm:ss */
      updatedTime?: string;

      /** 版本号 */
      version: string;
    }

    export class ConfigCustomerDto {
      /** Email地址 */
      email: string;

      /** 客服电话 */
      phoneNumber: string;

      /** times */
      times?: Array<defs.backoffice.Times>;
    }

    export class ConfigMemberDto {
      /** 积分有效期(天) */
      integralChangeRate: number;

      /** 积分使用起始值(分) */
      minUseIntegral: number;

      /** 会员升级累计支付金额计算周期(天) */
      payCalculateCycle: number;

      /** 积分有效期(天) */
      pointsValidity: number;
    }

    export class ConfigPlatformFeeDto {
      /** id */
      id?: number;

      /** 平台使用费用比例(%) */
      platformFee: number;

      /** 平台使用固定费用 */
      platformFixedFee: number;

      /** 门店id */
      storeId: number;

      /** 门店名称 */
      storeName: string;
    }

    export class ConfigShoppingCartDto {
      /** 8899 运费配置 */
      fare8899: defs.backoffice.Fare8899;

      /** 9988 运费配置 */
      fare9988: defs.backoffice.Fare9988;

      /**  O2O 运费配置 */
      fareO2O: Array<defs.backoffice.FareO2O>;

      /** 库存提醒阈值 */
      inventoryThreshold: number;

      /** 购物车一次提交商品数量限制 */
      maxSubmitNum: number;
    }

    export class ContentBriefPageQueryDTO {
      /** 分类ID */
      categoryId?: number;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;
    }

    export class ContentCategoryPageQueryDTO {
      /** 分类名称 */
      name?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 状态：1-未启用、2-启用 */
      status?: number;
    }

    export class ContentCategorySaveDTO {
      /** 分类编码（可以是字母+数字） */
      code?: string;

      /** 分类ID; 为 null 时新建, 不为 null 时修改 */
      id?: number;

      /** 分类名称（英文） */
      nameEn?: string;

      /** 分类名称（中文简体） */
      nameZhCn?: string;

      /** 分类名称（中文繁体） */
      nameZhTw?: string;
    }

    export class ContentCategorySimpleVO {
      /** 分类编码 */
      code?: string;

      /** 分类ID */
      id?: number;

      /** 分类名称 */
      name?: string;
    }

    export class ContentCategoryStatusDTO {
      /** 分类ID */
      id?: number;

      /** 状态：1-未启用、2-启用 */
      status?: number;
    }

    export class ContentCategoryVO {
      /** 分类编码 */
      code?: string;

      /** 内容数 */
      contentCount?: number;

      /** 分类ID */
      id?: number;

      /** 分类名称（英文） */
      nameEn?: string;

      /** 分类名称（中文简体） */
      nameZhCn?: string;

      /** 分类名称（中文繁体） */
      nameZhTw?: string;

      /** 状态：1-未启用、2-启用 */
      status?: number;

      /** 状态名称 */
      statusName?: string;

      /** 更新人 */
      updatedBy?: number;

      /** 更新人名称 */
      updatedByName?: string;

      /** 更新时间 */
      updatedTime?: number;
    }

    export class ContentDTO {
      /** 分类ID */
      categoryId?: number;

      /** 内容（英文） */
      contentEn?: string;

      /** 内容（中文简体） */
      contentZhCn?: string;

      /** 内容（中文繁体） */
      contentZhTw?: string;

      /** ID（为null时新增；不为null时更新） */
      id?: number;

      /** 描述（英文） */
      introEn?: string;

      /** 描述（中文简体） */
      introZhCn?: string;

      /** 描述（中文繁体） */
      introZhTw?: string;

      /** 关键词（英文） */
      keywordEn?: string;

      /** 关键词（中文简体） */
      keywordZhCn?: string;

      /** 关键词（中文繁体） */
      keywordZhTw?: string;

      /** 发布时间 */
      publishTime?: number;

      /** 发布类型：1-即时发布、2-定时发布 */
      publishType?: number;

      /** 排序值 */
      sort?: number;

      /** 标题（英文） */
      titleEn?: string;

      /** 标题（中文简体） */
      titleZhCn?: string;

      /** 标题（中文繁体） */
      titleZhTw?: string;
    }

    export class ContentDetailVO {
      /** 分类ID */
      categoryId?: number;

      /** 内容 */
      content?: string;

      /** ID */
      id?: number;

      /** 描述 */
      intro?: string;

      /** 关键词 */
      keyword?: string;

      /** 发布时间 */
      publishTime?: number;

      /** 标题 */
      title?: string;

      /** 更新人 */
      updatedBy?: number;

      /** 更新人名称 */
      updatedByName?: string;
    }

    export class ContentFullVO {
      /** 分类ID */
      categoryId?: number;

      /** 内容（英文） */
      contentEn?: string;

      /** 内容（中文简体） */
      contentZhCn?: string;

      /** 内容（中文繁体） */
      contentZhTw?: string;

      /** ID */
      id?: number;

      /** 描述（英文） */
      introEn?: string;

      /** 描述（中文简体） */
      introZhCn?: string;

      /** 描述（中文繁体） */
      introZhTw?: string;

      /** 关键词（英文） */
      keywordEn?: string;

      /** 关键词（中文简体） */
      keywordZhCn?: string;

      /** 关键词（中文繁体） */
      keywordZhTw?: string;

      /** 发布时间 */
      publishTime?: number;

      /** 发布类型：1-即时发布、2-定时发布 */
      publishType?: number;

      /** 排序值 */
      sort?: number;

      /** 标题（英文） */
      titleEn?: string;

      /** 标题（中文简体） */
      titleZhCn?: string;

      /** 标题（中文繁体） */
      titleZhTw?: string;
    }

    export class ContentIntroVO {
      /** 分类ID */
      categoryId?: number;

      /** ID */
      id?: number;

      /** 描述 */
      intro?: string;

      /** 关键词 */
      keyword?: string;

      /** 发布时间 */
      publishTime?: number;

      /** 排序值 */
      sort?: number;

      /** 标题 */
      title?: string;

      /** 更新人 */
      updatedBy?: number;

      /** 更新人名称 */
      updatedByName?: string;
    }

    export class ContentPageQueryDTO {
      /** 分类ID */
      categoryId?: number;

      /** 创建结束时间 */
      createdTimeEnd?: number;

      /** 创建起始时间 */
      createdTimeStart?: number;

      /** lang */
      lang?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 状态：1-草稿、2-已上架、3-已下架 */
      status?: number;

      /** 标题 */
      title?: string;

      /** 更新结束时间 */
      updatedTimeEnd?: number;

      /** 更新起始时间 */
      updatedTimeStart?: number;
    }

    export class ContentStatusDTO {
      /** ID */
      id?: number;

      /** 状态：2-已上架、3-已下架 */
      status?: number;
    }

    export class ContentVO {
      /** 分类ID */
      categoryId?: number;

      /** 分类名称 */
      categoryName?: string;

      /** 创建时间 */
      createdTime?: number;

      /** ID */
      id?: number;

      /** 发布状态 */
      publishStatusName?: string;

      /** 发布时间 */
      publishTime?: number;

      /** 发布类型：1-即时发布、2-定时发布 */
      publishType?: number;

      /** 排序值 */
      sort?: number;

      /** 状态：1-草稿、2-已上架、3-已下架 */
      status?: number;

      /** 状态名称 */
      statusName?: string;

      /** 标题 */
      title?: string;

      /** 更新人 */
      updatedBy?: number;

      /** 更新人名称 */
      updatedByName?: string;

      /** 更新时间 */
      updatedTime?: number;

      /** 查看次数 */
      viewCount?: number;
    }

    export class CopyUserVO {
      /** 部门 id */
      departmentId?: number;

      /** 邮箱 */
      email?: string;

      /** 手机号 */
      phone?: string;

      /** 角色 id 列表 */
      roleIds?: Array<number>;

      /** 改密周期 */
      updatePwdPeriod?: number;
    }

    export class Department {
      /** 下级部门数 */
      childNum?: number;

      /** 创建时间 */
      createdTime?: string;

      /** id */
      id?: number;

      /** 层级 */
      level?: number;

      /** 部门名称 */
      name?: string;

      /** 英文名称 */
      nameEnUs?: string;

      /** 中文名称 */
      nameZhCn?: string;

      /** 繁体名称 */
      nameZhTw?: string;

      /** 父 id */
      parentId?: number;

      /** 父部门名称 */
      parentName?: string;

      /** 备注 */
      remark?: string;

      /** 更新人 */
      updatedBy?: string;

      /** 更新时间 */
      updatedTime?: string;

      /** 用户数 */
      userNum?: number;
    }

    export class DepartmentDTO {
      /** 英文名称 */
      nameEnUs?: string;

      /** 中文名称 */
      nameZhCn?: string;

      /** 繁体名称 */
      nameZhTw?: string;

      /** 父 id */
      parentId?: number;
    }

    export class DepartmentTreeItem {
      /** 下属部门 */
      children?: Array<defs.backoffice.DepartmentTreeItem>;

      /** id */
      id?: number;

      /** 层级 */
      level?: number;

      /** 名称 */
      name?: string;

      /** 父 id */
      parentId?: number;
    }

    export class DictionaryVO {
      /** Key */
      key?: number;

      /** Value */
      value?: string;
    }

    export class EditConfigAppVersionDTO {
      /** 描述信息 */
      describeInfo?: string;

      /** 下载地址 */
      downUrl: string;

      /** 是否强制更新(安卓/pda 次参数为必选项) */
      forceUpdate?: boolean;

      /** id */
      id: number;

      /** 更新人(新增/编辑不用传) */
      updatedByName?: string;

      /** 更新时间(新增/编辑不用传) yyyy-MM-dd HH:mm:ss */
      updatedTime?: string;

      /** 版本号 */
      version: string;
    }

    export class ExportRoleReq {
      /** 权限id */
      roleIdList?: Array<number>;
    }

    export class Fare8899 {
      /** 2天时效运费 */
      day2fare: number;

      /** fareList */
      fareList?: Array<defs.backoffice.StateFare>;
    }

    export class Fare9988 {
      /** 运费 */
      fare: number;

      /** 免运阈值 */
      freeThreshold: number;
    }

    export class FareO2O {
      /** 运费 */
      fare: number;

      /** 免运阈值 */
      freeThreshold: number;

      /** 门店分组id */
      groupId: number;

      /** 门店分组名称 */
      groupName: string;
    }

    export class FieldOption {
      /** 字段名称 */
      label?: string;

      /** 排序 */
      sort?: number;

      /** 字段 id */
      value?: number;
    }

    export class IPage<T0 = any> {
      /** current */
      current?: number;

      /** pages */
      pages?: number;

      /** records */
      records?: Array<T0>;

      /** size */
      size?: number;

      /** total */
      total?: number;
    }

    export class ListDepartmentDTO {
      /** 部门名称 */
      name?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 父 id */
      parentId?: number;
    }

    export class ListRoleDTO {
      /** name */
      name?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** status */
      status?: number;
    }

    export class ListRoleUserDTO {
      /** account */
      account?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** roleId */
      roleId?: number;
    }

    export class ListUserDTO {
      /** 账号/姓名 */
      accountOrName?: string;

      /** 部门 id */
      departmentId?: number;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;
    }

    export class ListUserRoleDTO {
      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 用户 id */
      userId?: number;
    }

    export class LoginDTO {
      /** 账号 */
      account?: string;

      /** 密码 */
      password?: string;
    }

    export class LoginInfo {
      /** account */
      account?: string;

      /** avatar */
      avatar?: string;

      /** name */
      name?: string;

      /** needResetPwd */
      needResetPwd?: boolean;

      /** token */
      token?: string;
    }

    export class Menu {
      /** children */
      children?: Array<defs.backoffice.Menu>;

      /** code */
      code?: string;

      /** components */
      components?: Array<defs.backoffice.Component>;

      /** id */
      id?: number;

      /** level */
      level?: number;

      /** name */
      name?: string;

      /** type */
      type?: number;
    }

    export class MenuDto {
      /** 应用 id */
      appId: number;

      /** 子菜单 */
      children?: Array<defs.backoffice.MenuDto>;

      /** 控制参数 */
      code?: string;

      /** 当前环境对应的菜单名称 */
      currentName?: string;

      /** 唯一的权限编码 */
      finallyCode?: string;

      /** id */
      id?: number;

      /** 层级 */
      level: number;

      /** 英文名称 */
      nameEnUs?: string;

      /** 中文名称 */
      nameZhCn: string;

      /** 繁体名称 */
      nameZhTw?: string;

      /** 父 id */
      parentId: number;

      /** 排序 */
      sort: number;

      /** 类型：11-菜单、13-接口 */
      type: number;
    }

    export class ModuleAndField {
      /** 接口字段 */
      fieldIds?: Array<number>;

      /** 业务模块 */
      moduleId?: number;
    }

    export class ModuleAndFieldDTO {
      /** fieldIds */
      fieldIds?: Array<number>;

      /** moduleId */
      moduleId?: number;

      /** roleId */
      roleId?: number;
    }

    export class ModuleOption {
      /** 字段列表 */
      fields?: Array<defs.backoffice.FieldOption>;

      /** 模块名称 */
      label?: string;

      /** 排序 */
      sort?: number;

      /** 业务模块 */
      value?: number;
    }

    export class Option {
      /** label */
      label?: string;

      /** value */
      value?: string;
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

    export class Permission {
      /** 操作 */
      components?: Array<defs.backoffice.Component>;

      /** 菜单 */
      menus?: Array<defs.backoffice.Menu>;
    }

    export class PermissionTreeItem {
      /** children */
      children?: Array<defs.backoffice.PermissionTreeItem>;

      /** code */
      code?: string;

      /** id */
      id?: number;

      /** level */
      level?: number;

      /** name */
      name?: string;

      /** parentId */
      parentId?: number;

      /** type */
      type?: number;

      /** typeDesc */
      typeDesc?: string;
    }

    export class ProhibitedWordPageQueryDTO {
      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 违禁词 */
      word?: string;
    }

    export class ProhibitedWordSaveDTO {
      /** ID; 为'null'时新建, 不为'null'时编辑 */
      id?: number;

      /** 违禁词（英文） */
      wordEn?: string;

      /** 违禁词（中文简体） */
      wordZhCn?: string;

      /** 违禁词（中文繁体） */
      wordZhTw?: string;
    }

    export class ProhibitedWordUploadVO {
      /** 上传失败的数据（第一行为表头） */
      errorData?: Array<Array<any>>;

      /** 成功上传的数据条数 */
      successCount?: number;
    }

    export class ProhibitedWordVO {
      /** ID */
      id?: number;

      /** 更新人 */
      updatedBy?: number;

      /** 更新人名称 */
      updatedByName?: string;

      /** 更新时间 */
      updatedTime?: number;

      /** 违禁词（英文） */
      wordEn?: string;

      /** 违禁词（中文简体） */
      wordZhCn?: string;

      /** 违禁词（中文繁体） */
      wordZhTw?: string;
    }

    export class QueryAppVersionRequest {
      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 版本号 */
      version?: string;
    }

    export class RemoveUserDTO {
      /** roleId */
      roleId?: number;

      /** userId */
      userId?: number;
    }

    export class ResetPwdDTO {
      /** id */
      id?: number;

      /** 密码 */
      password?: string;
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

    export class Role {
      /** 角色 id */
      id?: number;

      /** 名称 */
      name?: string;

      /** 状态 */
      status?: number;

      /** 状态描述 */
      statusDesc?: string;

      /** 更新人 */
      updatedBy?: string;

      /** 更新时间 */
      updatedTime?: string;

      /** 关联用户数 */
      userNum?: number;

      /** 有效期截止时间 */
      validEndTime?: string;

      /** 有效期开始时间 */
      validStartTime?: string;

      /** 有效期类型 */
      validTimeType?: number;
    }

    export class RoleDTO {
      /** 名称 */
      name?: string;

      /** 有效期截止时间 */
      validEndTime?: string;

      /** 有效期开始时间 */
      validStartTime?: string;

      /** 有效期类型 */
      validTimeType?: number;
    }

    export class RoleDepDistributeDTO {
      /** 部门 id 列表 */
      departmentIds?: Array<number>;

      /** 是否继承 */
      inherit?: boolean;

      /** 角色 id */
      roleId?: number;
    }

    export class RoleStoreDTO {
      /** roleId */
      roleId?: number;

      /** storeIds */
      storeIds?: Array<number>;
    }

    export class RoleUser {
      /** account */
      account?: string;

      /** departmentName */
      departmentName?: string;

      /** lastLoginTime */
      lastLoginTime?: string;

      /** name */
      name?: string;

      /** userId */
      userId?: number;
    }

    export class RoleWarehouseDTO {
      /** roleId */
      roleId?: number;

      /** warehouseIds */
      warehouseIds?: Array<number>;
    }

    export class S3PreSignInfo {
      /** 上传后的访问地址 */
      key?: string;

      /** 上传 URL，请求方式 PUT */
      url?: string;
    }

    export class SaveOptPermissionDTO {
      /** appId */
      appId?: number;

      /** permissionIds */
      permissionIds?: Array<number>;

      /** roleId */
      roleId?: number;
    }

    export class StateFare {
      /** 运费 */
      fare: number;

      /** 免运阈值 */
      freeThreshold: number;

      /** 州 */
      state: string;
    }

    export class Times {
      /** 服务日期(周一/周二/周三.../周日) */
      day: Array<string>;

      /** 结束时间(格式: 08:00) */
      endTime: string;

      /** 开始时间(格式: 08:00) */
      startTime: string;
    }

    export class UpdateDepartmentDTO {
      /** id */
      id?: number;

      /** 英文名称 */
      nameEnUs?: string;

      /** 中文名称 */
      nameZhCn?: string;

      /** 繁体名称 */
      nameZhTw?: string;
    }

    export class UpdatePwdDTO {
      /** 新密码 */
      newPassword?: string;

      /** 原密码 */
      oldPassword?: string;
    }

    export class UpdateRoleDTO {
      /** id */
      id?: number;

      /** 名称 */
      name?: string;

      /** 有效期截止时间 */
      validEndTime?: string;

      /** 有效期开始时间 */
      validStartTime?: string;

      /** 有效期类型 */
      validTimeType?: number;
    }

    export class UpdateRoleStatusDTO {
      /** id */
      id?: number;

      /** 状态：1-启用、0-禁用 */
      status?: number;
    }

    export class UpdateStatusDTO {
      /** id */
      id?: number;

      /** 状态：1-正常、0-禁用 */
      status?: number;
    }

    export class UpdateUserDTO {
      /** 账号 */
      account?: string;

      /** 所属部门 id */
      departmentId?: number;

      /** 邮箱 */
      email?: string;

      /** id */
      id?: number;

      /** 姓名 */
      name?: string;

      /** 手机号 */
      phone?: string;

      /** 角色 id 列表 */
      roleIds?: Array<number>;

      /** 改密周期 */
      updatePwdPeriod?: number;
    }

    export class UpdateUserRoleValidTimeDTO {
      /** 用户角色 id */
      id?: number;

      /** 有效期截止时间 */
      validEndTime?: string;

      /** 有效期开始时间 */
      validStartTime?: string;

      /** 有效期类型：1-长期、2-短期 */
      validTimeType?: number;
    }

    export class User {
      /** 账号 */
      account?: string;

      /** 创建日期 */
      createdTime?: string;

      /** 部门 id */
      departmentId?: number;

      /** 部门名称 */
      departmentName?: string;

      /** 邮箱 */
      email?: string;

      /** id */
      id?: number;

      /** 姓名 */
      name?: string;

      /** 手机号 */
      phone?: string;

      /** 角色 id 列表 */
      roleIds?: Array<number>;

      /** 状态 */
      status?: number;

      /** 状态描述 */
      statusDesc?: string;

      /** 改密周期 */
      updatePwdPeriod?: number;
    }

    export class UserDTO {
      /** 账号 */
      account?: string;

      /** 所属部门 id */
      departmentId?: number;

      /** 邮箱 */
      email?: string;

      /** 姓名 */
      name?: string;

      /** 密码 */
      password?: string;

      /** 手机号 */
      phone?: string;

      /** 角色 id 列表 */
      roleIds?: Array<number>;

      /** 改密周期 */
      updatePwdPeriod?: number;
    }

    export class UserRole {
      /** 分配时间 */
      createdTime?: string;

      /** id */
      id?: number;

      /** 角色名称 */
      roleName?: string;

      /** 有效期截止时间 */
      validEndTime?: string;

      /** 有效期开始时间 */
      validStartTime?: string;

      /** 有效期类型 */
      validTimeType?: number;

      /** 有效期类型描述 */
      validTimeTypeDesc?: string;
    }

    export class ValidDTO {
      /** phone */
      phone?: string;
    }
  }
}

declare namespace API {
  export namespace backoffice {
    /**
     * 后台管理 - 操作日志
     */
    export namespace boChangeLog {
      /**
       * changlog列表
       * /bo/changlog/list
       */
      export namespace list {
        export type listParam = {
          /** account */
          account?: string;

          /** end */
          end?: string;

          /** page */
          page?: number;

          /** size */
          size?: number;

          /** start */
          start?: string;
        };
        export type listOptions = Record<string, any>;
        export type listResponse = defs.backoffice.Response<
          defs.backoffice.IPage<defs.backoffice.ChangeLogDO>
        >;
        export type request = (
          params: listParam,
          options?: listOptions,
        ) => listResponse;
      }
    }

    /**
     * BO 平台内容发布
     */
    export namespace boContent {
      /**
       * 查询全部的内容分类列表
       * /bo/content/category/list
       */
      export namespace listCategoryEnabled {
        export type listCategoryEnabledOptions = Record<string, any>;
        export type listCategoryEnabledResponse = defs.backoffice.Response<
          Array<defs.backoffice.ContentCategorySimpleVO>
        >;
        export type request = (
          options?: listCategoryEnabledOptions,
        ) => listCategoryEnabledResponse;
      }

      /**
       * 保存草稿（新建/编辑弹窗）
       * /bo/content/draft
       */
      export namespace draft {
        export type draftBody = defs.backoffice.ContentDTO;
        export type draftOptions = Record<string, any>;
        export type draftResponse = defs.backoffice.Response<string>;
        export type request = (
          body: draftBody,
          options?: draftOptions,
        ) => draftResponse;
      }

      /**
       * 获取文件上传的URL
       * /bo/content/file-upload/url
       */
      export namespace getFileUrl {
        export type getFileUrlParam = {
          /** contentType */
          contentType?: string;
        };
        export type getFileUrlOptions = Record<string, any>;
        export type getFileUrlResponse =
          defs.backoffice.Response<defs.backoffice.S3PreSignInfo>;
        export type request = (
          params: getFileUrlParam,
          options?: getFileUrlOptions,
        ) => getFileUrlResponse;
      }

      /**
       * 分页查询
       * /bo/content/page
       */
      export namespace pageQuery {
        export type pageQueryBody = defs.backoffice.ContentPageQueryDTO;
        export type pageQueryOptions = Record<string, any>;
        export type pageQueryResponse = defs.backoffice.Response<
          defs.backoffice.PageInfo<defs.backoffice.ContentVO>
        >;
        export type request = (
          body: pageQueryBody,
          options?: pageQueryOptions,
        ) => pageQueryResponse;
      }

      /**
       * 查询内容发布类型列表
       * /bo/content/publish-type/list
       */
      export namespace listPublishType {
        export type listPublishTypeOptions = Record<string, any>;
        export type listPublishTypeResponse = defs.backoffice.Response<
          Array<defs.backoffice.DictionaryVO>
        >;
        export type request = (
          options?: listPublishTypeOptions,
        ) => listPublishTypeResponse;
      }

      /**
       * 提交（新建/编辑弹窗）
       * /bo/content/save
       */
      export namespace save {
        export type saveBody = defs.backoffice.ContentDTO;
        export type saveOptions = Record<string, any>;
        export type saveResponse = defs.backoffice.Response<string>;
        export type request = (
          body: saveBody,
          options?: saveOptions,
        ) => saveResponse;
      }

      /**
       * 上架下架操作
       * /bo/content/status
       */
      export namespace updateStatus {
        export type updateStatusBody = defs.backoffice.ContentStatusDTO;
        export type updateStatusOptions = Record<string, any>;
        export type updateStatusResponse = defs.backoffice.Response<string>;
        export type request = (
          body: updateStatusBody,
          options?: updateStatusOptions,
        ) => updateStatusResponse;
      }

      /**
       * 查询内容状态列表
       * /bo/content/status/list
       */
      export namespace listStatus {
        export type listStatusOptions = Record<string, any>;
        export type listStatusResponse = defs.backoffice.Response<
          Array<defs.backoffice.DictionaryVO>
        >;
        export type request = (
          options?: listStatusOptions,
        ) => listStatusResponse;
      }

      /**
       * 查询内容明细
       * /bo/content/{id}
       */
      export namespace getById {
        export type getByIdPath = {
          /** id */
          id: number;
        };
        export type getByIdOptions = Record<string, any>;
        export type getByIdResponse =
          defs.backoffice.Response<defs.backoffice.ContentFullVO>;
        export type request = (
          path: getByIdPath,
          options?: getByIdOptions,
        ) => getByIdResponse;
      }
    }

    /**
     * BO 平台内容分类
     */
    export namespace boContentCategory {
      /**
       * 分页查询
       * /bo/content-category/page
       */
      export namespace pageQuery {
        export type pageQueryBody = defs.backoffice.ContentCategoryPageQueryDTO;
        export type pageQueryOptions = Record<string, any>;
        export type pageQueryResponse = defs.backoffice.Response<
          defs.backoffice.PageInfo<defs.backoffice.ContentCategoryVO>
        >;
        export type request = (
          body: pageQueryBody,
          options?: pageQueryOptions,
        ) => pageQueryResponse;
      }

      /**
       * 新建/修改分类
       * /bo/content-category/save
       */
      export namespace save {
        export type saveBody = defs.backoffice.ContentCategorySaveDTO;
        export type saveOptions = Record<string, any>;
        export type saveResponse = defs.backoffice.Response<string>;
        export type request = (
          body: saveBody,
          options?: saveOptions,
        ) => saveResponse;
      }

      /**
       * 修改分类状态
       * /bo/content-category/status
       */
      export namespace updateStatus {
        export type updateStatusBody = defs.backoffice.ContentCategoryStatusDTO;
        export type updateStatusOptions = Record<string, any>;
        export type updateStatusResponse = defs.backoffice.Response<string>;
        export type request = (
          body: updateStatusBody,
          options?: updateStatusOptions,
        ) => updateStatusResponse;
      }

      /**
       * 查询内容分类状态列表
       * /bo/content-category/status/list
       */
      export namespace listStatus {
        export type listStatusOptions = Record<string, any>;
        export type listStatusResponse = defs.backoffice.Response<
          Array<defs.backoffice.DictionaryVO>
        >;
        export type request = (
          options?: listStatusOptions,
        ) => listStatusResponse;
      }
    }

    /**
     * android/ios/pda版本管理
     */
    export namespace configAppVersion {
      /**
       * 新增安卓版本
       * /bo/config/android/version
       */
      export namespace androidAdd {
        export type androidAddBody = defs.backoffice.ConfigAppVersionDTO;
        export type androidAddOptions = Record<string, any>;
        export type androidAddResponse = defs.backoffice.Response<number>;
        export type request = (
          body: androidAddBody,
          options?: androidAddOptions,
        ) => androidAddResponse;
      }

      /**
       * 编辑安卓版本
       * /bo/config/android/version
       */
      export namespace androidUpdate {
        export type androidUpdateBody = defs.backoffice.EditConfigAppVersionDTO;
        export type androidUpdateOptions = Record<string, any>;
        export type androidUpdateResponse = defs.backoffice.Response<boolean>;
        export type request = (
          body: androidUpdateBody,
          options?: androidUpdateOptions,
        ) => androidUpdateResponse;
      }

      /**
       * 查询安卓版本列表
       * /bo/config/android/version/list
       */
      export namespace androidList {
        export type androidListBody = defs.backoffice.QueryAppVersionRequest;
        export type androidListOptions = Record<string, any>;
        export type androidListResponse = defs.backoffice.Response<
          defs.backoffice.PageInfo<defs.backoffice.EditConfigAppVersionDTO>
        >;
        export type request = (
          body: androidListBody,
          options?: androidListOptions,
        ) => androidListResponse;
      }

      /**
       * 新增ios版本
       * /bo/config/ios/version
       */
      export namespace iosAdd {
        export type iosAddBody = defs.backoffice.ConfigAppVersionDTO;
        export type iosAddOptions = Record<string, any>;
        export type iosAddResponse = defs.backoffice.Response<number>;
        export type request = (
          body: iosAddBody,
          options?: iosAddOptions,
        ) => iosAddResponse;
      }

      /**
       * 编辑ios版本
       * /bo/config/ios/version
       */
      export namespace iosUpdate {
        export type iosUpdateBody = defs.backoffice.EditConfigAppVersionDTO;
        export type iosUpdateOptions = Record<string, any>;
        export type iosUpdateResponse = defs.backoffice.Response<boolean>;
        export type request = (
          body: iosUpdateBody,
          options?: iosUpdateOptions,
        ) => iosUpdateResponse;
      }

      /**
       * 查询ios版本列表
       * /bo/config/ios/version/list
       */
      export namespace iosList {
        export type iosListBody = defs.backoffice.QueryAppVersionRequest;
        export type iosListOptions = Record<string, any>;
        export type iosListResponse = defs.backoffice.Response<
          defs.backoffice.PageInfo<defs.backoffice.EditConfigAppVersionDTO>
        >;
        export type request = (
          body: iosListBody,
          options?: iosListOptions,
        ) => iosListResponse;
      }

      /**
       * 新增pda版本
       * /bo/config/pda/version
       */
      export namespace pdaAdd {
        export type pdaAddBody = defs.backoffice.ConfigAppVersionDTO;
        export type pdaAddOptions = Record<string, any>;
        export type pdaAddResponse = defs.backoffice.Response<number>;
        export type request = (
          body: pdaAddBody,
          options?: pdaAddOptions,
        ) => pdaAddResponse;
      }

      /**
       * 编辑pda版本
       * /bo/config/pda/version
       */
      export namespace pdaUpdate {
        export type pdaUpdateBody = defs.backoffice.EditConfigAppVersionDTO;
        export type pdaUpdateOptions = Record<string, any>;
        export type pdaUpdateResponse = defs.backoffice.Response<boolean>;
        export type request = (
          body: pdaUpdateBody,
          options?: pdaUpdateOptions,
        ) => pdaUpdateResponse;
      }

      /**
       * 查询pda版本列表
       * /bo/config/pda/version/list
       */
      export namespace pdaList {
        export type pdaListBody = defs.backoffice.QueryAppVersionRequest;
        export type pdaListOptions = Record<string, any>;
        export type pdaListResponse = defs.backoffice.Response<
          defs.backoffice.PageInfo<defs.backoffice.EditConfigAppVersionDTO>
        >;
        export type request = (
          body: pdaListBody,
          options?: pdaListOptions,
        ) => pdaListResponse;
      }
    }

    /**
     * 客服相关配置
     */
    export namespace configCustomer {
      /**
       * 查询配置
       * /bo/config/customer
       */
      export namespace get {
        export type getOptions = Record<string, any>;
        export type getResponse =
          defs.backoffice.Response<defs.backoffice.ConfigCustomerDto>;
        export type request = (options?: getOptions) => getResponse;
      }

      /**
       * 编辑配置
       * /bo/config/customer
       */
      export namespace update {
        export type updateBody = defs.backoffice.ConfigCustomerDto;
        export type updateOptions = Record<string, any>;
        export type updateResponse = defs.backoffice.Response<boolean>;
        export type request = (
          body: updateBody,
          options?: updateOptions,
        ) => updateResponse;
      }
    }

    /**
     * 会员相关配置
     */
    export namespace configMember {
      /**
       * 查询配置
       * /bo/config/member
       */
      export namespace get {
        export type getOptions = Record<string, any>;
        export type getResponse =
          defs.backoffice.Response<defs.backoffice.ConfigMemberDto>;
        export type request = (options?: getOptions) => getResponse;
      }

      /**
       * 编辑配置
       * /bo/config/member
       */
      export namespace update {
        export type updateBody = defs.backoffice.ConfigMemberDto;
        export type updateOptions = Record<string, any>;
        export type updateResponse = defs.backoffice.Response<boolean>;
        export type request = (
          body: updateBody,
          options?: updateOptions,
        ) => updateResponse;
      }
    }

    /**
     * 平台使用费配置
     */
    export namespace configPlatformFee {
      /**
       * 查询配置
       * /bo/config/platformFee
       */
      export namespace list {
        export type listParam = {
          /** search */
          search?: string;
        };
        export type listOptions = Record<string, any>;
        export type listResponse = defs.backoffice.Response<
          Array<defs.backoffice.ConfigPlatformFeeDto>
        >;
        export type request = (
          params: listParam,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 编辑配置
       * /bo/config/platformFee
       */
      export namespace update {
        export type updateBody = Array<defs.backoffice.ConfigPlatformFeeDto>;
        export type updateOptions = Record<string, any>;
        export type updateResponse = defs.backoffice.Response<boolean>;
        export type request = (
          body: updateBody,
          options?: updateOptions,
        ) => updateResponse;
      }
    }

    /**
     * 购物车相关配置
     */
    export namespace configShoppingCart {
      /**
       * 查询配置
       * /bo/config/shoppingCart
       */
      export namespace get {
        export type getOptions = Record<string, any>;
        export type getResponse =
          defs.backoffice.Response<defs.backoffice.ConfigShoppingCartDto>;
        export type request = (options?: getOptions) => getResponse;
      }

      /**
       * 编辑配置
       * /bo/config/shoppingCart
       */
      export namespace update {
        export type updateBody = defs.backoffice.ConfigShoppingCartDto;
        export type updateOptions = Record<string, any>;
        export type updateResponse = defs.backoffice.Response<boolean>;
        export type request = (
          body: updateBody,
          options?: updateOptions,
        ) => updateResponse;
      }
    }

    /**
     * BO 违禁词管理
     */
    export namespace prohibitedWord {
      /**
       * 删除
       * /bo/prohibited-word/delete/{id}
       */
      export namespace remove {
        export type removePath = {
          /** id */
          id: number;
        };
        export type removeOptions = Record<string, any>;
        export type removeResponse = defs.backoffice.Response<string>;
        export type request = (
          path: removePath,
          options?: removeOptions,
        ) => removeResponse;
      }

      /**
       * 下载违禁词导入模板文件
       * /bo/prohibited-word/download/template-file
       */
      export namespace downloadTemplateFile {
        export type downloadTemplateFileOptions = Record<string, any>;
        export type downloadTemplateFileResponse = any;
        export type request = (
          options?: downloadTemplateFileOptions,
        ) => downloadTemplateFileResponse;
      }

      /**
       * 分页查询
       * /bo/prohibited-word/page
       */
      export namespace pageQuery {
        export type pageQueryBody = defs.backoffice.ProhibitedWordPageQueryDTO;
        export type pageQueryOptions = Record<string, any>;
        export type pageQueryResponse = defs.backoffice.Response<
          defs.backoffice.PageInfo<defs.backoffice.ProhibitedWordVO>
        >;
        export type request = (
          body: pageQueryBody,
          options?: pageQueryOptions,
        ) => pageQueryResponse;
      }

      /**
       * 新建/编辑
       * /bo/prohibited-word/save
       */
      export namespace save {
        export type saveBody = defs.backoffice.ProhibitedWordSaveDTO;
        export type saveOptions = Record<string, any>;
        export type saveResponse = defs.backoffice.Response<string>;
        export type request = (
          body: saveBody,
          options?: saveOptions,
        ) => saveResponse;
      }

      /**
       * 导入违禁词数据
       * /bo/prohibited-word/upload/template-file
       */
      export namespace uploadExcelFile {
        export type uploadExcelFileFormData = FormData;
        export type uploadExcelFileOptions = Record<string, any>;
        export type uploadExcelFileResponse =
          defs.backoffice.Response<defs.backoffice.ProhibitedWordUploadVO>;
        export type request = (
          formData: uploadExcelFileFormData,
          options?: uploadExcelFileOptions,
        ) => uploadExcelFileResponse;
      }
    }

    /**
     * Test Controller
     */
    export namespace test {
      /**
       * testBizExp
       * /test/exp/biz
       */
      export namespace testBizExp {
        export type testBizExpOptions = Record<string, any>;
        export type testBizExpResponse = defs.backoffice.Response;
        export type request = (
          options?: testBizExpOptions,
        ) => testBizExpResponse;
      }

      /**
       * testSatokenExp
       * /test/exp/satoken
       */
      export namespace testSatokenExp {
        export type testSatokenExpOptions = Record<string, any>;
        export type testSatokenExpResponse = defs.backoffice.Response;
        export type request = (
          options?: testSatokenExpOptions,
        ) => testSatokenExpResponse;
      }

      /**
       * testMessage
       * /test/message
       */
      export namespace testMessage {
        export type testMessageOptions = Record<string, any>;
        export type testMessageResponse = defs.backoffice.Response;
        export type request = (
          options?: testMessageOptions,
        ) => testMessageResponse;
      }

      /**
       * testPermission
       * /test/permission
       */
      export namespace testPermission {
        export type testPermissionOptions = Record<string, any>;
        export type testPermissionResponse = defs.backoffice.Response;
        export type request = (
          options?: testPermissionOptions,
        ) => testPermissionResponse;
      }

      /**
       * resNull1
       * /test/res/null/1
       */
      export namespace resNull1 {
        export type resNull1Options = Record<string, any>;
        export type resNull1Response = defs.backoffice.Response;
        export type request = (options?: resNull1Options) => resNull1Response;
      }

      /**
       * resNull2
       * /test/res/null/2
       */
      export namespace resNull2 {
        export type resNull2Options = Record<string, any>;
        export type resNull2Response = defs.backoffice.Response;
        export type request = (options?: resNull2Options) => resNull2Response;
      }

      /**
       * testRole
       * /test/role
       */
      export namespace testRole {
        export type testRoleOptions = Record<string, any>;
        export type testRoleResponse = defs.backoffice.Response;
        export type request = (options?: testRoleOptions) => testRoleResponse;
      }

      /**
       * checkPhone
       * /test/valid
       */
      export namespace checkPhone {
        export type checkPhoneBody = defs.backoffice.ValidDTO;
        export type checkPhoneOptions = Record<string, any>;
        export type checkPhoneResponse = defs.backoffice.Response;
        export type request = (
          body: checkPhoneBody,
          options?: checkPhoneOptions,
        ) => checkPhoneResponse;
      }
    }

    /**
     * 登录权限相关
     */
    export namespace webAdmin {
      /**
       * 登录
       * /bo/admin/login
       */
      export namespace login {
        export type loginBody = defs.backoffice.LoginDTO;
        export type loginOptions = Record<string, any>;
        export type loginResponse =
          defs.backoffice.Response<defs.backoffice.LoginInfo>;
        export type request = (
          body: loginBody,
          options?: loginOptions,
        ) => loginResponse;
      }

      /**
       * 退出
       * /bo/admin/logout
       */
      export namespace logout {
        export type logoutOptions = Record<string, any>;
        export type logoutResponse = defs.backoffice.Response;
        export type request = (options?: logoutOptions) => logoutResponse;
      }

      /**
       * 修改密码
       * /bo/admin/password/update
       */
      export namespace updatePwd {
        export type updatePwdBody = defs.backoffice.UpdatePwdDTO;
        export type updatePwdOptions = Record<string, any>;
        export type updatePwdResponse = defs.backoffice.Response;
        export type request = (
          body: updatePwdBody,
          options?: updatePwdOptions,
        ) => updatePwdResponse;
      }

      /**
       * 查询权限
       * /bo/admin/permission
       */
      export namespace getUserInfo {
        export type getUserInfoOptions = Record<string, any>;
        export type getUserInfoResponse =
          defs.backoffice.Response<defs.backoffice.Permission>;
        export type request = (
          options?: getUserInfoOptions,
        ) => getUserInfoResponse;
      }
    }

    /**
     * 组织架构管理
     */
    export namespace webDepartment {
      /**
       * 删除部门
       * /bo/department/delete
       */
      export namespace deleteDepartment {
        export type deleteDepartmentParam = {
          /** id */
          id: number;
        };
        export type deleteDepartmentOptions = Record<string, any>;
        export type deleteDepartmentResponse = defs.backoffice.Response;
        export type request = (
          params: deleteDepartmentParam,
          options?: deleteDepartmentOptions,
        ) => deleteDepartmentResponse;
      }

      /**
       * 判断能否删除部门
       * /bo/department/delete/check
       */
      export namespace checkDelete {
        export type checkDeleteParam = {
          /** id */
          id: number;
        };
        export type checkDeleteOptions = Record<string, any>;
        export type checkDeleteResponse = defs.backoffice.Response;
        export type request = (
          params: checkDeleteParam,
          options?: checkDeleteOptions,
        ) => checkDeleteResponse;
      }

      /**
       * 查询部门分页列表
       * /bo/department/list/page
       */
      export namespace getDepartmentList {
        export type getDepartmentListBody = defs.backoffice.ListDepartmentDTO;
        export type getDepartmentListOptions = Record<string, any>;
        export type getDepartmentListResponse = defs.backoffice.Response<
          defs.backoffice.PageInfo<defs.backoffice.Department>
        >;
        export type request = (
          body: getDepartmentListBody,
          options?: getDepartmentListOptions,
        ) => getDepartmentListResponse;
      }

      /**
       * 新建部门
       * /bo/department/save
       */
      export namespace saveDepartment {
        export type saveDepartmentBody = defs.backoffice.DepartmentDTO;
        export type saveDepartmentOptions = Record<string, any>;
        export type saveDepartmentResponse = defs.backoffice.Response;
        export type request = (
          body: saveDepartmentBody,
          options?: saveDepartmentOptions,
        ) => saveDepartmentResponse;
      }

      /**
       * 查询部门树
       * /bo/department/tree
       */
      export namespace getDepartmentTree {
        export type getDepartmentTreeOptions = Record<string, any>;
        export type getDepartmentTreeResponse = defs.backoffice.Response<
          Array<defs.backoffice.DepartmentTreeItem>
        >;
        export type request = (
          options?: getDepartmentTreeOptions,
        ) => getDepartmentTreeResponse;
      }

      /**
       * 修改部门
       * /bo/department/update
       */
      export namespace updateDepartment {
        export type updateDepartmentBody = defs.backoffice.UpdateDepartmentDTO;
        export type updateDepartmentOptions = Record<string, any>;
        export type updateDepartmentResponse = defs.backoffice.Response;
        export type request = (
          body: updateDepartmentBody,
          options?: updateDepartmentOptions,
        ) => updateDepartmentResponse;
      }
    }

    /**
     * 菜单管理
     */
    export namespace webMenu {
      /**
       * 新增菜单
       * /bo/menu
       */
      export namespace add {
        export type addBody = defs.backoffice.MenuDto;
        export type addOptions = Record<string, any>;
        export type addResponse = defs.backoffice.Response;
        export type request = (
          body: addBody,
          options?: addOptions,
        ) => addResponse;
      }

      /**
       * 编辑菜单
       * /bo/menu
       */
      export namespace edit {
        export type editBody = defs.backoffice.MenuDto;
        export type editOptions = Record<string, any>;
        export type editResponse = defs.backoffice.Response<number>;
        export type request = (
          body: editBody,
          options?: editOptions,
        ) => editResponse;
      }

      /**
       * 查询菜单列表
       * /bo/menu/tree
       */
      export namespace tree {
        export type treeParam = {
          /** appId */
          appId: number;
        };
        export type treeOptions = Record<string, any>;
        export type treeResponse = defs.backoffice.Response<
          Array<defs.backoffice.MenuDto>
        >;
        export type request = (
          params: treeParam,
          options?: treeOptions,
        ) => treeResponse;
      }

      /**
       * 删除菜单
       * /bo/menu/{id}
       */
      export namespace del {
        export type delPath = {
          /** id */
          id: number;
        };
        export type delOptions = Record<string, any>;
        export type delResponse = defs.backoffice.Response;
        export type request = (
          path: delPath,
          options?: delOptions,
        ) => delResponse;
      }
    }

    /**
     * 角色权限管理
     */
    export namespace webRole {
      /**
       * 操作权限 - 查询应用列表（选项）
       * /bo/role/app/options
       */
      export namespace getAppOptions {
        export type getAppOptionsOptions = Record<string, any>;
        export type getAppOptionsResponse = defs.backoffice.Response<
          Array<defs.backoffice.Option>
        >;
        export type request = (
          options?: getAppOptionsOptions,
        ) => getAppOptionsResponse;
      }

      /**
       * 分配角色
       * /bo/role/assign/department
       */
      export namespace disRoleByDep {
        export type disRoleByDepBody = defs.backoffice.RoleDepDistributeDTO;
        export type disRoleByDepOptions = Record<string, any>;
        export type disRoleByDepResponse = defs.backoffice.Response;
        export type request = (
          body: disRoleByDepBody,
          options?: disRoleByDepOptions,
        ) => disRoleByDepResponse;
      }

      /**
       * 分配角色 - 查询部门列表（选项）
       * /bo/role/assign/department/options
       */
      export namespace getDepartmentOptions {
        export type getDepartmentOptionsOptions = Record<string, any>;
        export type getDepartmentOptionsResponse = defs.backoffice.Response<
          Array<defs.backoffice.DepartmentTreeItem>
        >;
        export type request = (
          options?: getDepartmentOptionsOptions,
        ) => getDepartmentOptionsResponse;
      }

      /**
       * 复制角色
       * /bo/role/assign/{roleId}/copy
       */
      export namespace copy {
        export type copyPath = {
          /** roleId */
          roleId: number;
        };
        export type copyOptions = Record<string, any>;
        export type copyResponse = defs.backoffice.Response;
        export type request = (
          path: copyPath,
          options?: copyOptions,
        ) => copyResponse;
      }

      /**
       * 根据角色查询绑定的部门
       * /bo/role/assign/{roleId}/departments
       */
      export namespace departments {
        export type departmentsPath = {
          /** roleId */
          roleId: number;
        };
        export type departmentsOptions = Record<string, any>;
        export type departmentsResponse =
          defs.backoffice.Response<defs.backoffice.RoleDepDistributeDTO>;
        export type request = (
          path: departmentsPath,
          options?: departmentsOptions,
        ) => departmentsResponse;
      }

      /**
       * 查询角色分页列表
       * /bo/role/list/page
       */
      export namespace getRoleListPage {
        export type getRoleListPageBody = defs.backoffice.ListRoleDTO;
        export type getRoleListPageOptions = Record<string, any>;
        export type getRoleListPageResponse = defs.backoffice.Response<
          defs.backoffice.PageInfo<defs.backoffice.Role>
        >;
        export type request = (
          body: getRoleListPageBody,
          options?: getRoleListPageOptions,
        ) => getRoleListPageResponse;
      }

      /**
       * 数据权限 - 查询角色业务
       * /bo/role/permission/data/bizModule/list
       */
      export namespace getBizModuleList {
        export type getBizModuleListParam = {
          /** roleId */
          roleId: number;
        };
        export type getBizModuleListOptions = Record<string, any>;
        export type getBizModuleListResponse = defs.backoffice.Response<
          Array<defs.backoffice.ModuleAndField>
        >;
        export type request = (
          params: getBizModuleListParam,
          options?: getBizModuleListOptions,
        ) => getBizModuleListResponse;
      }

      /**
       * 数据权限 - 查询业务列表（选项）
       * /bo/role/permission/data/bizModule/options
       */
      export namespace getBizModuleOptions {
        export type getBizModuleOptionsOptions = Record<string, any>;
        export type getBizModuleOptionsResponse = defs.backoffice.Response<
          Array<defs.backoffice.ModuleOption>
        >;
        export type request = (
          options?: getBizModuleOptionsOptions,
        ) => getBizModuleOptionsResponse;
      }

      /**
       * 数据权限 - 保存角色业务
       * /bo/role/permission/data/bizModule/save
       */
      export namespace saveRoleBizModule {
        export type saveRoleBizModuleBody = defs.backoffice.ModuleAndFieldDTO;
        export type saveRoleBizModuleOptions = Record<string, any>;
        export type saveRoleBizModuleResponse = defs.backoffice.Response;
        export type request = (
          body: saveRoleBizModuleBody,
          options?: saveRoleBizModuleOptions,
        ) => saveRoleBizModuleResponse;
      }

      /**
       * 数据权限 - 查询角色门店
       * /bo/role/permission/data/store/list
       */
      export namespace getStoreIds {
        export type getStoreIdsParam = {
          /** roleId */
          roleId: number;
        };
        export type getStoreIdsOptions = Record<string, any>;
        export type getStoreIdsResponse = defs.backoffice.Response<
          Array<number>
        >;
        export type request = (
          params: getStoreIdsParam,
          options?: getStoreIdsOptions,
        ) => getStoreIdsResponse;
      }

      /**
       * 数据权限 - 查询门店列表（选项）
       * /bo/role/permission/data/store/options
       */
      export namespace getStoreOptions {
        export type getStoreOptionsOptions = Record<string, any>;
        export type getStoreOptionsResponse = defs.backoffice.Response<
          Array<defs.backoffice.Option>
        >;
        export type request = (
          options?: getStoreOptionsOptions,
        ) => getStoreOptionsResponse;
      }

      /**
       * 数据权限 - 保存角色门店
       * /bo/role/permission/data/store/save
       */
      export namespace saveRoleStore {
        export type saveRoleStoreBody = defs.backoffice.RoleStoreDTO;
        export type saveRoleStoreOptions = Record<string, any>;
        export type saveRoleStoreResponse = defs.backoffice.Response;
        export type request = (
          body: saveRoleStoreBody,
          options?: saveRoleStoreOptions,
        ) => saveRoleStoreResponse;
      }

      /**
       * 数据权限 - 查询类型列表（选项）
       * /bo/role/permission/data/type/options
       */
      export namespace getDataPermissionTypeOptions {
        export type getDataPermissionTypeOptionsOptions = Record<string, any>;
        export type getDataPermissionTypeOptionsResponse =
          defs.backoffice.Response<Array<defs.backoffice.Option>>;
        export type request = (
          options?: getDataPermissionTypeOptionsOptions,
        ) => getDataPermissionTypeOptionsResponse;
      }

      /**
       * 数据权限 - 查询角色仓库
       * /bo/role/permission/data/warehouse/list
       */
      export namespace getWarehouseIds {
        export type getWarehouseIdsParam = {
          /** roleId */
          roleId: number;
        };
        export type getWarehouseIdsOptions = Record<string, any>;
        export type getWarehouseIdsResponse = defs.backoffice.Response<
          Array<number>
        >;
        export type request = (
          params: getWarehouseIdsParam,
          options?: getWarehouseIdsOptions,
        ) => getWarehouseIdsResponse;
      }

      /**
       * 数据权限 - 查询仓库列表（选项）
       * /bo/role/permission/data/warehouse/options
       */
      export namespace getWarehouseOptions {
        export type getWarehouseOptionsOptions = Record<string, any>;
        export type getWarehouseOptionsResponse = defs.backoffice.Response<
          Array<defs.backoffice.Option>
        >;
        export type request = (
          options?: getWarehouseOptionsOptions,
        ) => getWarehouseOptionsResponse;
      }

      /**
       * 数据权限 - 保存角色仓库
       * /bo/role/permission/data/warehouse/save
       */
      export namespace saveRoleWarehouse {
        export type saveRoleWarehouseBody = defs.backoffice.RoleWarehouseDTO;
        export type saveRoleWarehouseOptions = Record<string, any>;
        export type saveRoleWarehouseResponse = defs.backoffice.Response;
        export type request = (
          body: saveRoleWarehouseBody,
          options?: saveRoleWarehouseOptions,
        ) => saveRoleWarehouseResponse;
      }

      /**
       * 操作权限 - 查询权限列表（选项）
       * /bo/role/permission/operation/options
       */
      export namespace getOperationPermissionOptions {
        export type getOperationPermissionOptionsParam = {
          /** appId */
          appId: number;
        };
        export type getOperationPermissionOptionsOptions = Record<string, any>;
        export type getOperationPermissionOptionsResponse =
          defs.backoffice.Response<Array<defs.backoffice.PermissionTreeItem>>;
        export type request = (
          params: getOperationPermissionOptionsParam,
          options?: getOperationPermissionOptionsOptions,
        ) => getOperationPermissionOptionsResponse;
      }

      /**
       * 操作权限 - 查询角色权限
       * /bo/role/permission/operation/query
       */
      export namespace getOperationPermission {
        export type getOperationPermissionParam = {
          /** appId */
          appId: number;

          /** roleId */
          roleId: number;
        };
        export type getOperationPermissionOptions = Record<string, any>;
        export type getOperationPermissionResponse = defs.backoffice.Response<
          Array<number>
        >;
        export type request = (
          params: getOperationPermissionParam,
          options?: getOperationPermissionOptions,
        ) => getOperationPermissionResponse;
      }

      /**
       * 保存操作权限
       * /bo/role/permission/operation/save
       */
      export namespace saveOperationPermission {
        export type saveOperationPermissionBody =
          defs.backoffice.SaveOptPermissionDTO;
        export type saveOperationPermissionOptions = Record<string, any>;
        export type saveOperationPermissionResponse = defs.backoffice.Response;
        export type request = (
          body: saveOperationPermissionBody,
          options?: saveOperationPermissionOptions,
        ) => saveOperationPermissionResponse;
      }

      /**
       * 查询角色
       * /bo/role/query
       */
      export namespace getRole {
        export type getRoleParam = {
          /** id */
          id: number;
        };
        export type getRoleOptions = Record<string, any>;
        export type getRoleResponse =
          defs.backoffice.Response<defs.backoffice.Role>;
        export type request = (
          params: getRoleParam,
          options?: getRoleOptions,
        ) => getRoleResponse;
      }

      /**
       * 新增角色
       * /bo/role/save
       */
      export namespace saveRole {
        export type saveRoleBody = defs.backoffice.RoleDTO;
        export type saveRoleOptions = Record<string, any>;
        export type saveRoleResponse = defs.backoffice.Response;
        export type request = (
          body: saveRoleBody,
          options?: saveRoleOptions,
        ) => saveRoleResponse;
      }

      /**
       * 导出勾选角色
       * /bo/role/select/export
       */
      export namespace exportSelectRoles {
        export type exportSelectRolesBody = defs.backoffice.ExportRoleReq;
        export type exportSelectRolesOptions = Record<string, any>;
        export type exportSelectRolesResponse = any;
        export type request = (
          body: exportSelectRolesBody,
          options?: exportSelectRolesOptions,
        ) => exportSelectRolesResponse;
      }

      /**
       * 查询角色状态（选项）
       * /bo/role/status/options
       */
      export namespace getRoleStatusOptions {
        export type getRoleStatusOptionsOptions = Record<string, any>;
        export type getRoleStatusOptionsResponse = defs.backoffice.Response<
          Array<defs.backoffice.Option>
        >;
        export type request = (
          options?: getRoleStatusOptionsOptions,
        ) => getRoleStatusOptionsResponse;
      }

      /**
       * 修改角色状态
       * /bo/role/status/update
       */
      export namespace updateRoleStatus {
        export type updateRoleStatusBody = defs.backoffice.UpdateRoleStatusDTO;
        export type updateRoleStatusOptions = Record<string, any>;
        export type updateRoleStatusResponse = defs.backoffice.Response;
        export type request = (
          body: updateRoleStatusBody,
          options?: updateRoleStatusOptions,
        ) => updateRoleStatusResponse;
      }

      /**
       * 导入角色数据
       * /bo/role/template/import
       */
      export namespace importRole {
        export type importRoleFormData = FormData;
        export type importRoleOptions = Record<string, any>;
        export type importRoleResponse = defs.backoffice.Response;
        export type request = (
          formData: importRoleFormData,
          options?: importRoleOptions,
        ) => importRoleResponse;
      }

      /**
       * 修改角色
       * /bo/role/update
       */
      export namespace updateRole {
        export type updateRoleBody = defs.backoffice.UpdateRoleDTO;
        export type updateRoleOptions = Record<string, any>;
        export type updateRoleResponse = defs.backoffice.Response;
        export type request = (
          body: updateRoleBody,
          options?: updateRoleOptions,
        ) => updateRoleResponse;
      }

      /**
       * 关联人员 - 查询用户分页列表
       * /bo/role/user/list/page
       */
      export namespace getUserListPage {
        export type getUserListPageBody = defs.backoffice.ListRoleUserDTO;
        export type getUserListPageOptions = Record<string, any>;
        export type getUserListPageResponse = defs.backoffice.Response<
          defs.backoffice.PageInfo<defs.backoffice.RoleUser>
        >;
        export type request = (
          body: getUserListPageBody,
          options?: getUserListPageOptions,
        ) => getUserListPageResponse;
      }

      /**
       * 关联人员 - 移除用户
       * /bo/role/user/remove
       */
      export namespace removeUser {
        export type removeUserBody = defs.backoffice.RemoveUserDTO;
        export type removeUserOptions = Record<string, any>;
        export type removeUserResponse = defs.backoffice.Response;
        export type request = (
          body: removeUserBody,
          options?: removeUserOptions,
        ) => removeUserResponse;
      }

      /**
       * 查询角色有效期类型（选项）
       * /bo/role/validTimeType/options
       */
      export namespace getValidTimeTypeOptions {
        export type getValidTimeTypeOptionsOptions = Record<string, any>;
        export type getValidTimeTypeOptionsResponse = defs.backoffice.Response<
          Array<defs.backoffice.Option>
        >;
        export type request = (
          options?: getValidTimeTypeOptionsOptions,
        ) => getValidTimeTypeOptionsResponse;
      }
    }

    /**
     * 用户账号管理
     */
    export namespace webUser {
      /**
       * 查询复制用户
       * /bo/user/copy/query
       */
      export namespace copyUser {
        export type copyUserParam = {
          /** id */
          id: number;
        };
        export type copyUserOptions = Record<string, any>;
        export type copyUserResponse =
          defs.backoffice.Response<defs.backoffice.CopyUserVO>;
        export type request = (
          params: copyUserParam,
          options?: copyUserOptions,
        ) => copyUserResponse;
      }

      /**
       * 查询部门列表（选项）
       * /bo/user/department/options
       */
      export namespace getDepartmentOptions {
        export type getDepartmentOptionsOptions = Record<string, any>;
        export type getDepartmentOptionsResponse = defs.backoffice.Response<
          Array<defs.backoffice.DepartmentTreeItem>
        >;
        export type request = (
          options?: getDepartmentOptionsOptions,
        ) => getDepartmentOptionsResponse;
      }

      /**
       * 查询部门树
       * /bo/user/department/tree
       */
      export namespace getDepartmentTree {
        export type getDepartmentTreeOptions = Record<string, any>;
        export type getDepartmentTreeResponse = defs.backoffice.Response<
          Array<defs.backoffice.DepartmentTreeItem>
        >;
        export type request = (
          options?: getDepartmentTreeOptions,
        ) => getDepartmentTreeResponse;
      }

      /**
       * 查询用户分页列表
       * /bo/user/list/page
       */
      export namespace getUserListPage {
        export type getUserListPageBody = defs.backoffice.ListUserDTO;
        export type getUserListPageOptions = Record<string, any>;
        export type getUserListPageResponse = defs.backoffice.Response<
          defs.backoffice.PageInfo<defs.backoffice.User>
        >;
        export type request = (
          body: getUserListPageBody,
          options?: getUserListPageOptions,
        ) => getUserListPageResponse;
      }

      /**
       * 重置用户密码
       * /bo/user/password/reset
       */
      export namespace resetPwd {
        export type resetPwdBody = defs.backoffice.ResetPwdDTO;
        export type resetPwdOptions = Record<string, any>;
        export type resetPwdResponse = defs.backoffice.Response;
        export type request = (
          body: resetPwdBody,
          options?: resetPwdOptions,
        ) => resetPwdResponse;
      }

      /**
       * 查询用户账号
       * /bo/user/query
       */
      export namespace getUser {
        export type getUserParam = {
          /** id */
          id: number;
        };
        export type getUserOptions = Record<string, any>;
        export type getUserResponse =
          defs.backoffice.Response<defs.backoffice.User>;
        export type request = (
          params: getUserParam,
          options?: getUserOptions,
        ) => getUserResponse;
      }

      /**
       * 查看角色分页列表
       * /bo/user/role/list/page
       */
      export namespace getRoleListPage {
        export type getRoleListPageBody = defs.backoffice.ListUserRoleDTO;
        export type getRoleListPageOptions = Record<string, any>;
        export type getRoleListPageResponse = defs.backoffice.Response<
          defs.backoffice.PageInfo<defs.backoffice.UserRole>
        >;
        export type request = (
          body: getRoleListPageBody,
          options?: getRoleListPageOptions,
        ) => getRoleListPageResponse;
      }

      /**
       * 查询角色列表（选项）
       * /bo/user/role/options
       */
      export namespace getRoleOptions {
        export type getRoleOptionsOptions = Record<string, any>;
        export type getRoleOptionsResponse = defs.backoffice.Response<
          Array<defs.backoffice.Option>
        >;
        export type request = (
          options?: getRoleOptionsOptions,
        ) => getRoleOptionsResponse;
      }

      /**
       * 移除用户角色
       * /bo/user/role/remove
       */
      export namespace removeUserRole {
        export type removeUserRoleParam = {
          /** id */
          id: number;
        };
        export type removeUserRoleOptions = Record<string, any>;
        export type removeUserRoleResponse = defs.backoffice.Response;
        export type request = (
          params: removeUserRoleParam,
          options?: removeUserRoleOptions,
        ) => removeUserRoleResponse;
      }

      /**
       * 设置角色有效期
       * /bo/user/role/validTime/update
       */
      export namespace updateUserRoleValidTime {
        export type updateUserRoleValidTimeBody =
          defs.backoffice.UpdateUserRoleValidTimeDTO;
        export type updateUserRoleValidTimeOptions = Record<string, any>;
        export type updateUserRoleValidTimeResponse = defs.backoffice.Response;
        export type request = (
          body: updateUserRoleValidTimeBody,
          options?: updateUserRoleValidTimeOptions,
        ) => updateUserRoleValidTimeResponse;
      }

      /**
       * 查询有效期类型（选项）
       * /bo/user/role/validTimeType/options
       */
      export namespace getRoleValidTimeTypeOptions {
        export type getRoleValidTimeTypeOptionsOptions = Record<string, any>;
        export type getRoleValidTimeTypeOptionsResponse =
          defs.backoffice.Response<Array<defs.backoffice.Option>>;
        export type request = (
          options?: getRoleValidTimeTypeOptionsOptions,
        ) => getRoleValidTimeTypeOptionsResponse;
      }

      /**
       * 新建用户
       * /bo/user/save
       */
      export namespace saveUser {
        export type saveUserBody = defs.backoffice.UserDTO;
        export type saveUserOptions = Record<string, any>;
        export type saveUserResponse = defs.backoffice.Response;
        export type request = (
          body: saveUserBody,
          options?: saveUserOptions,
        ) => saveUserResponse;
      }

      /**
       * 查询用户状态（选项）
       * /bo/user/status/options
       */
      export namespace getUserStatus {
        export type getUserStatusOptions = Record<string, any>;
        export type getUserStatusResponse = defs.backoffice.Response<
          Array<defs.backoffice.Option>
        >;
        export type request = (
          options?: getUserStatusOptions,
        ) => getUserStatusResponse;
      }

      /**
       * 修改用户状态
       * /bo/user/status/update
       */
      export namespace updateUserStatus {
        export type updateUserStatusBody = defs.backoffice.UpdateStatusDTO;
        export type updateUserStatusOptions = Record<string, any>;
        export type updateUserStatusResponse = defs.backoffice.Response;
        export type request = (
          body: updateUserStatusBody,
          options?: updateUserStatusOptions,
        ) => updateUserStatusResponse;
      }

      /**
       * 下载导入模板
       * /bo/user/template/download
       */
      export namespace downloadTemplate {
        export type downloadTemplateOptions = Record<string, any>;
        export type downloadTemplateResponse = any;
        export type request = (
          options?: downloadTemplateOptions,
        ) => downloadTemplateResponse;
      }

      /**
       * 导入用户数据
       * /bo/user/template/import
       */
      export namespace importTemplate {
        export type importTemplateFormData = FormData;
        export type importTemplateOptions = Record<string, any>;
        export type importTemplateResponse = defs.backoffice.Response;
        export type request = (
          formData: importTemplateFormData,
          options?: importTemplateOptions,
        ) => importTemplateResponse;
      }

      /**
       * 编辑用户
       * /bo/user/update
       */
      export namespace updateUser {
        export type updateUserBody = defs.backoffice.UpdateUserDTO;
        export type updateUserOptions = Record<string, any>;
        export type updateUserResponse = defs.backoffice.Response;
        export type request = (
          body: updateUserBody,
          options?: updateUserOptions,
        ) => updateUserResponse;
      }
    }
  }
}
