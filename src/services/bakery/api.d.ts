type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace bakery {
    export class AddOptRolePermissionDto {
      /** 权限列表 */
      referIds: Array<number>;

      /** 角色ID */
      roleId: number;
    }

    export class AddPermissionDto {
      /** 英文名称 */
      nameEnUs: string;

      /** 中文名称 */
      nameZhCn: string;

      /** 繁体名称 */
      nameZhTw: string;

      /** 父 id */
      parentId: number;

      /** 排序 */
      sort?: number;

      /** MENU=菜单;COMPONENT=组件;API=接口;STORE=门店;WAREHOUSE=仓库;BIZ_MODULE=业务模块;API_FIELD=接口字段 */
      type:
        | 'API'
        | 'API_FIELD'
        | 'BIZ_MODULE'
        | 'COMPONENT'
        | 'MENU'
        | 'STORE'
        | 'WAREHOUSE';
    }

    export class AddRolePermissionDto {
      /** 权限列表 */
      referIds: Array<string>;

      /** 角色ID */
      roleId: number;
    }

    export class ArticleOption {
      /** 产品编号 */
      articleNumber?: string;

      /** 产品名称 */
      description?: string;

      /** 主键 */
      id?: number;
    }

    export class ArticleRefDTO {
      /** 产品 Article Number 列表 */
      articleNumbers?: Array<string>;

      /** 部门 */
      depId?: string;

      /** 门店 id */
      storeId?: string;
    }

    export class CategoryOption {
      /** 类别描述 */
      description?: string;

      /** 主键 */
      id?: number;

      /** 类别 ID */
      mch?: string;
    }

    export class Content {
      /** 前十二周平均销售额 */
      averageAmountFor12Week?: number;

      /** 前四周平均销售额 */
      averageAmountFor4Week?: number;

      /** 上周平均销售额 */
      averageAmountForLastWeek?: number;

      /** 前十二周平均销售量 */
      averageVolumeFor12Week?: number;

      /** 前四周平均销售量 */
      averageVolumeFor4Week?: number;

      /** 上周平均销售量 */
      averageVolumeForLastWeek?: number;

      /** 部门 */
      department?: string;

      /** 门店区域 */
      storeGroup?: string;

      /** 门店 ID */
      storeId?: string;

      /** 门店名称 */
      storeName?: string;
    }

    export class CreateOrderDTO {
      /** 部门 */
      dep?: string;

      /** 商品列表 */
      items?: Array<defs.bakery.CreateOrderItem>;

      /** 门店 id */
      storeId?: string;
    }

    export class CreateOrderItem {
      /** Article Number */
      articleNumber?: string;

      /** 日实际订货量 */
      dayActualQuantity?: number;

      /** 日参考订货量 */
      dayRefQuantity?: number;

      /** 单品周销售额目标 */
      weekSalesGoal?: number;
    }

    export class CreateOrderVO {
      /** 拦截的商品 article number */
      failedArticleNumbers?: Array<string>;

      /** 订单编号 */
      orderId?: string;

      /** PR 编号 */
      pr?: string;

      /** 下单结果：1-全部成功、2-部分成功、3-全部失败 */
      result?: number;
    }

    export class EditPermissionDto {
      /** id */
      id: number;

      /** 英文名称 */
      nameEnUs: string;

      /** 中文名称 */
      nameZhCn: string;

      /** 繁体名称 */
      nameZhTw: string;

      /** 父 id */
      parentId: number;

      /** 排序 */
      sort?: number;

      /** MENU=菜单;COMPONENT=组件;API=接口;STORE=门店;WAREHOUSE=仓库;BIZ_MODULE=业务模块;API_FIELD=接口字段 */
      type:
        | 'API'
        | 'API_FIELD'
        | 'BIZ_MODULE'
        | 'COMPONENT'
        | 'MENU'
        | 'STORE'
        | 'WAREHOUSE';
    }

    export class EstDeliveredDateVO {
      /** 日期 */
      date?: string;

      /** 周几 */
      dayOfWeek?: string;
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
      loginType?: 'ACCOUNT' | 'GOOGLE_SSO';

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

    export class LossFactor {
      /** 分类 id（level == 3） */
      categoryId?: string;

      /** 损耗系数 */
      lossFactor?: number;
    }

    export class LossFactorTree {
      /** 子节点列表 */
      children?: Array<defs.bakery.LossFactorTree>;

      /** 节点 id */
      id?: string;

      /** 节点层级：1、2、3 */
      level?: number;

      /** 损耗系数：level == 3 时展示 */
      lossFactor?: number;

      /** 节点名称 */
      name?: string;
    }

    export class NewArticleItem {
      /** Article Number */
      articleNumber?: string;

      /** 产品描述（英语） */
      descriptionEn?: string;
      description?: string;

      /** 产品描述（繁体） */
      descriptionTc?: string;
    }

    export class NewArticlesDTO {
      /** 产品名称（搜索关键字） */
      articleName?: string;

      /** 部门 ID */
      depId: string;

      /** 第几页 */
      pageNum?: number;

      /** 每页多少条 */
      pageSize?: number;

      /** 门店 ID */
      storeId: string;
    }

    export class NewSalesGoalDTO {
      /** 部门 ID */
      depId?: string;

      /** 目标值 */
      goal?: number;

      /** 月份 */
      month?: number;

      /** 门店 ID */
      storeId?: string;

      /** 门店名称 */
      storeName?: string;

      /** 年份 */
      year?: number;
    }

    export class OptionVO {
      /** 子选项列表 */
      children?: Array<defs.bakery.OptionVO>;

      /** 选项名称 */
      label?: string;

      /** 选项值 */
      value?: object;
    }

    export class OrderArticleEntity {
      /** articleNumber */
      articleNumber?: string;

      /** cnDescription */
      cnDescription?: string;

      /** createdAt */
      createdAt?: string;

      /** deleted */
      deleted?: number;

      /** dep */
      dep?: string;

      /** enDescription */
      enDescription?: string;

      /** id */
      id?: number;

      /** mch */
      mch?: string;

      /** note */
      note?: string;

      /** packSize */
      packSize?: string;

      /** price */
      price?: number;

      /** uom */
      uom?: string;

      /** updatedAt */
      updatedAt?: string;

      /** vendorName */
      vendorName?: string;
    }

    export class OrderDetailBaseVO {
      /** 订单金额 */
      amount?: number;

      /** 下单时间 */
      createTime?: string;

      /** 下单人 id */
      createUserId?: number;

      /** 下单人姓名 */
      createUserName?: string;

      /** 部门 */
      depName?: string;

      /** 预计送达时间 */
      estDeliveredTime?: string;

      /** 订单编号 */
      orderId?: string;

      /** 产品个数 */
      skuNum?: number;

      /** 产品数量 */
      skuQuantity?: number;

      /** 门店 id */
      storeId?: string;

      /** 门店名称 */
      storeName?: string;

      /** 时区 */
      timezone?: string;
    }

    export class OrderDetailItem {
      /** Article Number */
      articleNumber?: string;

      /** 日实际订货量 */
      dayActualQuantity?: number;

      /** 日参考订货量 */
      dayRefQuantity?: number;

      /** 部门名称 */
      depName?: string;

      /** 产品描述 - 英文 */
      descriptionEn?: string;

      /** 产品描述 - 繁体 */
      descriptionTc?: string;

      /** 尺寸大小 */
      packSize?: string;

      /** PO */
      po?: string;

      /** PR */
      pr?: string;

      /** 产品价格 */
      price?: number;

      /** PO 状态：1-已下单、2-已确认、3-已编辑、4-已取消 */
      status?: 'CANCELED' | 'CONFIRMED' | 'INIT' | 'ORDERED' | 'UPDATED';

      /** PO 状态 */
      statusDesc?: string;

      /** 门店 ID */
      storeId?: string;

      /** 门店名称 */
      storeName?: string;

      /** 供应商 */
      supplier?: string;

      /** 单品周销售额目标 */
      weekSalesGoal?: number;
    }

    export class OrderDetailItemDTO {
      /** 订单编号 */
      orderId: string;

      /** 第几页 */
      pageNum?: number;

      /** 每页多少条 */
      pageSize?: number;
    }

    export class OrderListExportDTO {
      /** 下单人 */
      createUserName?: string;

      /** 部门 */
      dep?: string;

      /** 批量导出 - 选中的列表项 */
      exportItems?: Array<defs.bakery.OrderListExportItem>;

      /** 下单时间 - 结束时间 */
      maxCreateTime?: string;

      /** 下单时间 - 开始时间 */
      minCreateTime?: string;

      /** 订单编号 */
      orderId?: string;

      /** 第几页 */
      pageNum?: number;

      /** 每页多少条 */
      pageSize?: number;

      /** po */
      po?: string;

      /** PR */
      pr?: string;

      /** 门店 ID */
      storeId?: string;
    }

    export class OrderListExportItem {
      /** 订单编号 */
      orderId: string;

      /** PO */
      po?: string;
    }

    export class OrderListItem {
      /** 订单金额 */
      amount?: number;

      /** 下单时间 */
      createTime?: string;

      /** 下单人 */
      createUserName?: string;

      /** 部门名称 */
      depName?: string;

      /** 预计送达时间 */
      estDeliveredTime?: string;

      /** 订单编号 */
      orderId?: string;

      /** PO */
      po?: string;

      /** PR */
      pr?: string;

      /** 商品个数 */
      skuNum?: number;

      /** 商品数量 */
      skuQuantity?: number;

      /** PO 状态：1-已下单、2-已确认、3-已编辑、4-已取消 */
      status?: 'CANCELED' | 'CONFIRMED' | 'INIT' | 'ORDERED' | 'UPDATED';

      /** 门店 ID */
      storeId?: string;

      /** 门店名称 */
      storeName?: string;

      /** 时区 */
      timezone?: string;
    }

    export class OrderListOptionsVO {
      /** 部门列表 */
      deps?: Array<defs.bakery.OptionVO>;

      /** 门店列表 */
      stores?: Array<defs.bakery.OptionVO>;
    }

    export class OrderListPageDTO {
      /** 下单人 */
      createUserName?: string;

      /** 部门 */
      dep?: string;

      /** 下单时间 - 结束时间 */
      maxCreateTime?: string;

      /** 下单时间 - 开始时间 */
      minCreateTime?: string;

      /** 订单编号 */
      orderId?: string;

      /** 第几页 */
      pageNum?: number;

      /** 每页多少条 */
      pageSize?: number;

      /** po */
      po?: string;

      /** PR */
      pr?: string;

      /** 门店 ID */
      storeId?: string;
    }

    export class OrderNewOptionsVO {
      /** 部门列表 */
      deps?: Array<defs.bakery.OptionVO>;

      /** 门店列表 */
      stores?: Array<defs.bakery.OptionVO>;
    }

    export class OrderNewRefArticle {
      /** Article Number */
      articleNumber?: string;

      /** 日参考订货量 */
      dayRefQuantity?: number;

      /** 产品描述 - 英文 */
      descriptionEn?: string;

      /** 产品描述 - 繁体 */
      descriptionTc?: string;

      /** 上次订货量 */
      lastQt?: number;

      /** 规格尺寸 */
      packSize?: string;

      /** 产品单价 */
      price?: number;

      /** 供应商名称 */
      supplierName?: string;

      /** 单品周销售额目标 */
      weekSalesGoal?: number;
      actualOrderQuantity?: number;
    }

    export class PermissionVo {
      /** 儿子节点 */
      children?: Array<defs.bakery.PermissionVo>;

      /** 编码 */
      code?: string;

      /** id */
      id?: number;

      /** 层级 */
      level?: number;

      /** 名称 */
      name?: string;

      /** 父 id */
      parentId?: number;

      /** 排序 */
      sort?: number;

      /** MENU=菜单;COMPONENT=组件;API=接口;STORE=门店;WAREHOUSE=仓库;BIZ_MODULE=业务模块;API_FIELD=接口字段 */
      type?:
        | 'API'
        | 'API_FIELD'
        | 'BIZ_MODULE'
        | 'COMPONENT'
        | 'MENU'
        | 'STORE'
        | 'WAREHOUSE';
    }

    export class PoDetailBaseVO {
      /** PO 单金额 */
      amount?: number;

      /** 下单时间 */
      createTime?: string;

      /** 下单人 id */
      createUserId?: number;

      /** 下单人姓名 */
      createUserName?: string;

      /** 部门 */
      depName?: string;

      /** 预计送达时间 */
      estDeliveredTime?: string;

      /** 订单编号 */
      orderId?: string;

      /** 编号 */
      po?: string;

      /** PR 编号 */
      pr?: string;

      /** 产品个数 */
      skuNum?: number;

      /** 产品数量 */
      skuQuantity?: number;

      /** PO 状态：1-已下单、2-已确认、3-已编辑、4-已取消 */
      status?: 'CANCELED' | 'CONFIRMED' | 'INIT' | 'ORDERED' | 'UPDATED';

      /** 状态 */
      statusDesc?: string;

      /** 门店 id */
      storeId?: string;

      /** 门店名称 */
      storeName?: string;

      /** 时区 */
      timezone?: string;
    }

    export class PoDetailItem {
      /** Article Number */
      articleNumber?: string;

      /** 日实际订货量 */
      dayActualQuantity?: number;

      /** 日参考订货量 */
      dayRefQuantity?: number;

      /** 部门名称 */
      depName?: string;

      /** 产品描述 - 英文 */
      descriptionEn?: string;

      /** 产品描述 - 繁体 */
      descriptionTc?: string;

      /** 尺寸大小 */
      packSize?: string;

      /** 产品价格 */
      price?: number;

      /** 门店 ID */
      storeId?: string;

      /** 门店名称 */
      storeName?: string;

      /** 供应商 */
      supplier?: string;

      /** 单品周销售额目标 */
      weekSalesGoal?: number;
    }

    export class PoDetailItemDTO {
      /** 订单编号 */
      orderId: string;

      /** 第几页 */
      pageNum?: number;

      /** 每页多少条 */
      pageSize?: number;

      /** PO 编号 */
      po: string;
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

    export class SalesGoalListDTO {
      /** 部门 */
      dep?: string;

      /** 月份 */
      month?: number;

      /** 第几页 */
      pageNum?: number;

      /** 每页多少条 */
      pageSize?: number;

      /** 门店 ID */
      storeId?: string;

      /** 年份 */
      year?: number;
    }

    export class SalesGoalListItem {
      /** 部门 ID */
      depId?: string;

      /** 部门名称 */
      depName?: string;

      /** 目标值 */
      goal?: number;

      /** id */
      id?: number;

      /** 月份 */
      month?: number;

      /** 操作人姓名 */
      optUserName?: string;

      /** 门店 ID */
      storeId?: string;

      /** 门店名称 */
      storeName?: string;

      /** 更新时间 */
      updateTime?: string;

      /** 年份 */
      year?: number;
    }

    export class SalesGoalListOptionVO {
      /** 部门列表 */
      deps?: Array<defs.bakery.OptionVO>;

      /** 门店列表 */
      stores?: Array<defs.bakery.OptionVO>;

      /** 年份列表（含月份） */
      yearWithMonths?: Array<defs.bakery.OptionVO>;
    }

    export class SalesGoalOptLog {
      /** 操作描述 */
      optDesc?: string;

      /** 操作人姓名 */
      optUserName?: string;

      /** 更新时间 */
      updateTime?: string;
    }

    export class SapPrEntity {
      /** articleNumber */
      articleNumber?: string;

      /** changedOn */
      changedOn?: defs.bakery.Timestamp;

      /** createdAt */
      createdAt?: string;

      /** creator */
      creator?: string;

      /** deleted */
      deleted?: number;

      /** deletionIndicator */
      deletionIndicator?: string;

      /** deliveryDate */
      deliveryDate?: defs.bakery.Timestamp;

      /** desiredVendor */
      desiredVendor?: string;

      /** fixedVendor */
      fixedVendor?: string;

      /** id */
      id?: number;

      /** itemNumber */
      itemNumber?: number;

      /** mch */
      mch?: string;

      /** orderUnitOfMeasure */
      orderUnitOfMeasure?: string;

      /** orderedQuantity */
      orderedQuantity?: number;

      /** poNumber */
      poNumber?: string;

      /** prNumber */
      prNumber?: string;

      /** processingState */
      processingState?: string;

      /** processingStatus */
      processingStatus?: string;

      /** purchasingGroup */
      purchasingGroup?: string;

      /** quantity */
      quantity?: number;

      /** releaseDate */
      releaseDate?: defs.bakery.Timestamp;

      /** requisitionDate */
      requisitionDate?: defs.bakery.Timestamp;

      /** requisitioner */
      requisitioner?: string;

      /** shortText */
      shortText?: string;

      /** status */
      status?: number;

      /** storageLocation */
      storageLocation?: string;

      /** storeId */
      storeId?: string;

      /** supplyingSite */
      supplyingSite?: string;

      /** trackingNumber */
      trackingNumber?: string;

      /** unitOfMeasure */
      unitOfMeasure?: string;

      /** updatedAt */
      updatedAt?: string;
    }

    export class SaveLossFactorDTO {
      /** 损耗系数列表 */
      list?: Array<defs.bakery.LossFactor>;
    }

    export class StatisticalSalesCategoryReport {
      /** 报表内容 */
      contents?: Array<defs.bakery.Content>;

      /** 报表编号 */
      reportId?: string;
    }

    export class StatisticalSalesChart {
      /** 销售额 */
      amount?: number;

      /** 产品名称 */
      articleName?: string;

      /** 产品 */
      articleNumber?: string;

      /** 分类 */
      category?: string;

      /** 分类名称 */
      categoryName?: string;

      /** 部门 */
      department?: string;

      /** 部门名称 */
      departmentName?: string;

      /** 销售日期 */
      salesDate?: string;

      /** 门店 */
      storeId?: string;

      /** 门店名称 */
      storeName?: string;

      /** 销售量 */
      volume?: number;
    }

    export class StatisticalSalesProductReport {
      /** 报表内容 */
      contents?: Array<defs.bakery.Content>;

      /** 报表编号 */
      reportId?: string;
    }

    export class StatisticalSalesStoreReport {
      /** 报表内容 */
      contents?: Array<defs.bakery.Content>;

      /** 报表编号 */
      reportId?: string;
    }

    export class StatisticalSearchConditionVo {
      /** 查询产品编号 */
      articleNumbers?: Array<string>;

      /** 查询分类 */
      categories?: Array<string>;

      /** 是否对比去年同期 */
      compareSamePeriod?: boolean;

      /** 查询部门 */
      department?: string;

      /** 时间范围结束 */
      endDate?: string;

      /** 业务模块 */
      module?: string;

      /** 时间范围开始 */
      startDate?: string;

      /** 查询门店 */
      storeIds?: Array<string>;

      /** 查询名称 */
      storeNames?: Array<string>;
    }

    export class StoreOption {
      /** 主键 */
      id?: number;

      /** 门店 ID */
      storeId?: string;

      /** 门店名称 */
      storeName?: string;
    }

    export class Timestamp {
      /** date */
      date?: number;

      /** day */
      day?: number;

      /** hours */
      hours?: number;

      /** minutes */
      minutes?: number;

      /** month */
      month?: number;

      /** nanos */
      nanos?: number;

      /** seconds */
      seconds?: number;

      /** time */
      time?: number;

      /** timezoneOffset */
      timezoneOffset?: number;

      /** year */
      year?: number;
    }

    export class UpdateSalesGoalDTO {
      /** 部门 ID */
      dep?: string;

      /** 目标值 */
      goal?: number;

      /** ID */
      id?: number;

      /** 月份 */
      month?: number;

      /** 门店 ID */
      storeId?: string;

      /** 门店名称 */
      storeName?: string;

      /** 年份 */
      year?: number;
    }
  }
}

declare namespace API {
  export namespace bakery {
    /**
     * 授权相关接口
     */
    export namespace account {
      /**
       * 获取用户操作权限
       * /hot-deli-bakery/admin/permission
       */
      export namespace permission {
        export type permissionOptions = Record<string, any>;
        export type permissionResponse = defs.bakery.Response<
          Array<defs.bakery.PermissionVo>
        >;
        export type request = (
          options?: permissionOptions,
        ) => permissionResponse;
      }

      /**
       * 获取/验证用户信息
       * /hot-deli-bakery/admin/user-info
       */
      export namespace userInfo {
        export type userInfoOptions = Record<string, any>;
        export type userInfoResponse =
          defs.bakery.Response<defs.bakery.LoginUserInfo>;
        export type request = (options?: userInfoOptions) => userInfoResponse;
      }
    }

    /**
     * 损耗系数
     */
    export namespace lossFactor {
      /**
       * 保存
       * /hot-deli-bakery/api/loss/factor/save
       */
      export namespace saveLossFactor {
        export type saveLossFactorBody = defs.bakery.SaveLossFactorDTO;
        export type saveLossFactorOptions = Record<string, any>;
        export type saveLossFactorResponse = defs.bakery.Response<void>;
        export type request = (
          body: saveLossFactorBody,
          options?: saveLossFactorOptions,
        ) => saveLossFactorResponse;
      }

      /**
       * 查询
       * /hot-deli-bakery/api/loss/factor/tree
       */
      export namespace getLossFactorTree {
        export type getLossFactorTreeOptions = Record<string, any>;
        export type getLossFactorTreeResponse = defs.bakery.Response<
          Array<defs.bakery.LossFactorTree>
        >;
        export type request = (
          options?: getLossFactorTreeOptions,
        ) => getLossFactorTreeResponse;
      }
    }

    /**
     * 订单管理
     */
    export namespace order {
      /**
       * 订单详情 - 查询基础信息
       * /hot-deli-bakery/api/order/detail/base
       */
      export namespace getOrderBaseInfo {
        export type getOrderBaseInfoParam = {
          /** orderId */
          orderId: string;
        };
        export type getOrderBaseInfoOptions = Record<string, any>;
        export type getOrderBaseInfoResponse =
          defs.bakery.Response<defs.bakery.OrderDetailBaseVO>;
        export type request = (
          params: getOrderBaseInfoParam,
          options?: getOrderBaseInfoOptions,
        ) => getOrderBaseInfoResponse;
      }

      /**
       * 订单详情 - 分页查询商品
       * /hot-deli-bakery/api/order/detail/items/page
       */
      export namespace getOrderDetailItemsForPage {
        export type getOrderDetailItemsForPageBody =
          defs.bakery.OrderDetailItemDTO;
        export type getOrderDetailItemsForPageOptions = Record<string, any>;
        export type getOrderDetailItemsForPageResponse = defs.bakery.Response<
          defs.bakery.IPage<defs.bakery.OrderDetailItem>
        >;
        export type request = (
          body: getOrderDetailItemsForPageBody,
          options?: getOrderDetailItemsForPageOptions,
        ) => getOrderDetailItemsForPageResponse;
      }

      /**
       * 订单列表 - 批量导出
       * /hot-deli-bakery/api/order/list/export
       */
      export namespace exportOrderList {
        export type exportOrderListBody = defs.bakery.OrderListExportDTO;
        export type exportOrderListOptions = Record<string, any>;
        export type exportOrderListResponse = any;
        export type request = (
          body: exportOrderListBody,
          options?: exportOrderListOptions,
        ) => exportOrderListResponse;
      }

      /**
       * 订单列表 - 查询条件选项
       * /hot-deli-bakery/api/order/list/options
       */
      export namespace getListOptions {
        export type getListOptionsOptions = Record<string, any>;
        export type getListOptionsResponse =
          defs.bakery.Response<defs.bakery.OrderListOptionsVO>;
        export type request = (
          options?: getListOptionsOptions,
        ) => getListOptionsResponse;
      }

      /**
       * 订单列表 - 分页查询
       * /hot-deli-bakery/api/order/list/page
       */
      export namespace getOrderListForPage {
        export type getOrderListForPageBody = defs.bakery.OrderListPageDTO;
        export type getOrderListForPageOptions = Record<string, any>;
        export type getOrderListForPageResponse = defs.bakery.Response<
          defs.bakery.IPage<defs.bakery.OrderListItem>
        >;
        export type request = (
          body: getOrderListForPageBody,
          options?: getOrderListForPageOptions,
        ) => getOrderListForPageResponse;
      }

      /**
       * 新建订单 - 查询产品列表
       * /hot-deli-bakery/api/order/new/articles/page
       */
      export namespace getNewArticles {
        export type getNewArticlesBody = defs.bakery.NewArticlesDTO;
        export type getNewArticlesOptions = Record<string, any>;
        export type getNewArticlesResponse = defs.bakery.Response<
          defs.bakery.IPage<defs.bakery.NewArticleItem>
        >;
        export type request = (
          body: getNewArticlesBody,
          options?: getNewArticlesOptions,
        ) => getNewArticlesResponse;
      }

      /**
       * 新建订单 - 提交订单
       * /hot-deli-bakery/api/order/new/create
       */
      export namespace createOrder {
        export type createOrderBody = defs.bakery.CreateOrderDTO;
        export type createOrderOptions = Record<string, any>;
        export type createOrderResponse =
          defs.bakery.Response<defs.bakery.CreateOrderVO>;
        export type request = (
          body: createOrderBody,
          options?: createOrderOptions,
        ) => createOrderResponse;
      }

      /**
       * 新建订单 - 查询预计送达时间
       * /hot-deli-bakery/api/order/new/estDeliveredTime
       */
      export namespace getNewEstDeliveredDate {
        export type getNewEstDeliveredDateParam = {
          /** storeId */
          storeId: string;
        };
        export type getNewEstDeliveredDateOptions = Record<string, any>;
        export type getNewEstDeliveredDateResponse =
          defs.bakery.Response<defs.bakery.EstDeliveredDateVO>;
        export type request = (
          params: getNewEstDeliveredDateParam,
          options?: getNewEstDeliveredDateOptions,
        ) => getNewEstDeliveredDateResponse;
      }

      /**
       * 新建订单 - 查询条件选项
       * /hot-deli-bakery/api/order/new/options
       */
      export namespace getNewOptions {
        export type getNewOptionsOptions = Record<string, any>;
        export type getNewOptionsResponse =
          defs.bakery.Response<defs.bakery.OrderNewOptionsVO>;
        export type request = (
          options?: getNewOptionsOptions,
        ) => getNewOptionsResponse;
      }

      /**
       * 新建订单 - 查询添加产品
       * /hot-deli-bakery/api/order/new/ref/article
       */
      export namespace getNewRefArticle {
        export type getNewRefArticleBody = defs.bakery.ArticleRefDTO;
        export type getNewRefArticleOptions = Record<string, any>;
        export type getNewRefArticleResponse = defs.bakery.Response<
          Array<defs.bakery.OrderNewRefArticle>
        >;
        export type request = (
          body: getNewRefArticleBody,
          options?: getNewRefArticleOptions,
        ) => getNewRefArticleResponse;
      }

      /**
       * 新建订单 - 查询参考产品
       * /hot-deli-bakery/api/order/new/ref/articles
       */
      export namespace getNewRefArticles {
        export type getNewRefArticlesParam = {
          /** depId */
          depId: string;

          /** storeId */
          storeId: string;
        };
        export type getNewRefArticlesOptions = Record<string, any>;
        export type getNewRefArticlesResponse = defs.bakery.Response<
          Array<defs.bakery.OrderNewRefArticle>
        >;
        export type request = (
          params: getNewRefArticlesParam,
          options?: getNewRefArticlesOptions,
        ) => getNewRefArticlesResponse;
      }

      /**
       * PO 单详情 - 查询基础信息
       * /hot-deli-bakery/api/order/po/detail/base
       */
      export namespace getPoBaseInfo {
        export type getPoBaseInfoParam = {
          /** orderId */
          orderId: string;

          /** po */
          po: string;
        };
        export type getPoBaseInfoOptions = Record<string, any>;
        export type getPoBaseInfoResponse =
          defs.bakery.Response<defs.bakery.PoDetailBaseVO>;
        export type request = (
          params: getPoBaseInfoParam,
          options?: getPoBaseInfoOptions,
        ) => getPoBaseInfoResponse;
      }

      /**
       * PO 单详情 - 分页查询商品
       * /hot-deli-bakery/api/order/po/detail/items/page
       */
      export namespace getPoDetailItemsForPage {
        export type getPoDetailItemsForPageBody = defs.bakery.PoDetailItemDTO;
        export type getPoDetailItemsForPageOptions = Record<string, any>;
        export type getPoDetailItemsForPageResponse = defs.bakery.Response<
          defs.bakery.IPage<defs.bakery.PoDetailItem>
        >;
        export type request = (
          body: getPoDetailItemsForPageBody,
          options?: getPoDetailItemsForPageOptions,
        ) => getPoDetailItemsForPageResponse;
      }
    }

    /**
     * 权限管理
     */
    export namespace permission {
      /**
       * 新建权限
       * /hot-deli-bakery/api/permissions
       */
      export namespace savePermissions {
        export type savePermissionsBody = defs.bakery.AddPermissionDto;
        export type savePermissionsOptions = Record<string, any>;
        export type savePermissionsResponse = defs.bakery.Response<number>;
        export type request = (
          body: savePermissionsBody,
          options?: savePermissionsOptions,
        ) => savePermissionsResponse;
      }

      /**
       * 修改权限
       * /hot-deli-bakery/api/permissions
       */
      export namespace updatePermissions {
        export type updatePermissionsBody = defs.bakery.EditPermissionDto;
        export type updatePermissionsOptions = Record<string, any>;
        export type updatePermissionsResponse = defs.bakery.Response<boolean>;
        export type request = (
          body: updatePermissionsBody,
          options?: updatePermissionsOptions,
        ) => updatePermissionsResponse;
      }

      /**
       * 编辑操作权限
       * /hot-deli-bakery/api/permissions/opt
       */
      export namespace saveOperationPermissions {
        export type saveOperationPermissionsBody =
          defs.bakery.AddOptRolePermissionDto;
        export type saveOperationPermissionsOptions = Record<string, any>;
        export type saveOperationPermissionsResponse =
          defs.bakery.Response<boolean>;
        export type request = (
          body: saveOperationPermissionsBody,
          options?: saveOperationPermissionsOptions,
        ) => saveOperationPermissionsResponse;
      }

      /**
       * 查询所有操作权限(选项)
       * /hot-deli-bakery/api/permissions/opt/option
       */
      export namespace optPermissionOption {
        export type optPermissionOptionOptions = Record<string, any>;
        export type optPermissionOptionResponse = defs.bakery.Response<
          Array<defs.bakery.PermissionVo>
        >;
        export type request = (
          options?: optPermissionOptionOptions,
        ) => optPermissionOptionResponse;
      }

      /**
       * 查询操作权限
       * /hot-deli-bakery/api/permissions/opt/{roleId}
       */
      export namespace listOperationPermissions {
        export type listOperationPermissionsPath = {
          /** roleId */
          roleId: number;
        };
        export type listOperationPermissionsOptions = Record<string, any>;
        export type listOperationPermissionsResponse = defs.bakery.Response<
          Array<number>
        >;
        export type request = (
          path: listOperationPermissionsPath,
          options?: listOperationPermissionsOptions,
        ) => listOperationPermissionsResponse;
      }

      /**
       * 编辑门店数据权限
       * /hot-deli-bakery/api/permissions/store
       */
      export namespace saveStorePermissions {
        export type saveStorePermissionsBody = defs.bakery.AddRolePermissionDto;
        export type saveStorePermissionsOptions = Record<string, any>;
        export type saveStorePermissionsResponse =
          defs.bakery.Response<boolean>;
        export type request = (
          body: saveStorePermissionsBody,
          options?: saveStorePermissionsOptions,
        ) => saveStorePermissionsResponse;
      }

      /**
       * 查询所有门店数据权限(选项)
       * /hot-deli-bakery/api/permissions/store/option
       */
      export namespace dataPermissionOption {
        export type dataPermissionOptionOptions = Record<string, any>;
        export type dataPermissionOptionResponse = defs.bakery.Response<
          Array<defs.bakery.OptionVO>
        >;
        export type request = (
          options?: dataPermissionOptionOptions,
        ) => dataPermissionOptionResponse;
      }

      /**
       * 查询门店数据权限
       * /hot-deli-bakery/api/permissions/store/{roleId}
       */
      export namespace listStorePermissions {
        export type listStorePermissionsPath = {
          /** roleId */
          roleId: number;
        };
        export type listStorePermissionsOptions = Record<string, any>;
        export type listStorePermissionsResponse = defs.bakery.Response<
          Array<string>
        >;
        export type request = (
          path: listStorePermissionsPath,
          options?: listStorePermissionsOptions,
        ) => listStorePermissionsResponse;
      }

      /**
       * 删除权限
       * /hot-deli-bakery/api/permissions/{id}
       */
      export namespace deletePermissions {
        export type deletePermissionsPath = {
          /** id */
          id: number;
        };
        export type deletePermissionsOptions = Record<string, any>;
        export type deletePermissionsResponse = defs.bakery.Response<boolean>;
        export type request = (
          path: deletePermissionsPath,
          options?: deletePermissionsOptions,
        ) => deletePermissionsResponse;
      }
    }

    /**
     * 销售目标
     */
    export namespace salesGoal {
      /**
       * 批量导入
       * /hot-deli-bakery/api/sales/goal/batch/import
       */
      export namespace batchImport {
        export type batchImportFormData = FormData;
        export type batchImportOptions = Record<string, any>;
        export type batchImportResponse = defs.bakery.Response<void>;
        export type request = (
          formData: batchImportFormData,
          options?: batchImportOptions,
        ) => batchImportResponse;
      }

      /**
       * 新建目标
       * /hot-deli-bakery/api/sales/goal/create
       */
      export namespace createSalesGoal {
        export type createSalesGoalBody = defs.bakery.NewSalesGoalDTO;
        export type createSalesGoalOptions = Record<string, any>;
        export type createSalesGoalResponse = defs.bakery.Response<void>;
        export type request = (
          body: createSalesGoalBody,
          options?: createSalesGoalOptions,
        ) => createSalesGoalResponse;
      }

      /**
       * 查询条件选项
       * /hot-deli-bakery/api/sales/goal/list/options
       */
      export namespace getListOptions {
        export type getListOptionsOptions = Record<string, any>;
        export type getListOptionsResponse =
          defs.bakery.Response<defs.bakery.SalesGoalListOptionVO>;
        export type request = (
          options?: getListOptionsOptions,
        ) => getListOptionsResponse;
      }

      /**
       * 分页查询
       * /hot-deli-bakery/api/sales/goal/list/page
       */
      export namespace getSalesGoalForPage {
        export type getSalesGoalForPageBody = defs.bakery.SalesGoalListDTO;
        export type getSalesGoalForPageOptions = Record<string, any>;
        export type getSalesGoalForPageResponse = defs.bakery.Response<
          defs.bakery.IPage<defs.bakery.SalesGoalListItem>
        >;
        export type request = (
          body: getSalesGoalForPageBody,
          options?: getSalesGoalForPageOptions,
        ) => getSalesGoalForPageResponse;
      }

      /**
       * 查询操作日志
       * /hot-deli-bakery/api/sales/goal/opt/logs
       */
      export namespace getSalesGoalOptLogs {
        export type getSalesGoalOptLogsParam = {
          /** id */
          id: number;
        };
        export type getSalesGoalOptLogsOptions = Record<string, any>;
        export type getSalesGoalOptLogsResponse = defs.bakery.Response<
          Array<defs.bakery.SalesGoalOptLog>
        >;
        export type request = (
          params: getSalesGoalOptLogsParam,
          options?: getSalesGoalOptLogsOptions,
        ) => getSalesGoalOptLogsResponse;
      }

      /**
       * 模版下载
       * /hot-deli-bakery/api/sales/goal/template/download
       */
      export namespace downloadTemplate {
        export type downloadTemplateOptions = Record<string, any>;
        export type downloadTemplateResponse = any;
        export type request = (
          options?: downloadTemplateOptions,
        ) => downloadTemplateResponse;
      }

      /**
       * 编辑目标
       * /hot-deli-bakery/api/sales/goal/update
       */
      export namespace updateSalesGoal {
        export type updateSalesGoalBody = defs.bakery.UpdateSalesGoalDTO;
        export type updateSalesGoalOptions = Record<string, any>;
        export type updateSalesGoalResponse = defs.bakery.Response<void>;
        export type request = (
          body: updateSalesGoalBody,
          options?: updateSalesGoalOptions,
        ) => updateSalesGoalResponse;
      }
    }

    /**
     * Sap Controller
     */
    export namespace sap {
      /**
       * getExcel
       * /hot-deli-bakery/sap/get_excel
       */
      export namespace getExcel {
        export type getExcelOptions = Record<string, any>;
        export type getExcelResponse = defs.bakery.Response<
          Array<defs.bakery.OrderArticleEntity>
        >;
        export type request = (options?: getExcelOptions) => getExcelResponse;
      }

      /**
       * getPrTest
       * /hot-deli-bakery/sap/get_pr_test
       */
      export namespace getPrTest {
        export type getPrTestOptions = Record<string, any>;
        export type getPrTestResponse = Array<defs.bakery.SapPrEntity>;
        export type request = (options?: getPrTestOptions) => getPrTestResponse;
      }

      /**
       * 上传所有訂單相關数据
       * /hot-deli-bakery/sap/initialize_database
       */
      export namespace initializeOrderData {
        export type initializeOrderDataOptions = Record<string, any>;
        export type initializeOrderDataResponse = defs.bakery.Response<boolean>;
        export type request = (
          options?: initializeOrderDataOptions,
        ) => initializeOrderDataResponse;
      }

      /**
       * postAllArticleByRange
       * /hot-deli-bakery/sap/post_article_byrange
       */
      export namespace postAllArticleByRange {
        export type postAllArticleByRangeOptions = Record<string, any>;
        export type postAllArticleByRangeResponse = boolean;
        export type request = (
          options?: postAllArticleByRangeOptions,
        ) => postAllArticleByRangeResponse;
      }

      /**
       * postExcel
       * /hot-deli-bakery/sap/post_excel
       */
      export namespace postExcel {
        export type postExcelOptions = Record<string, any>;
        export type postExcelResponse = defs.bakery.Response<boolean>;
        export type request = (options?: postExcelOptions) => postExcelResponse;
      }

      /**
       * postMch
       * /hot-deli-bakery/sap/post_mch
       */
      export namespace postMch {
        export type postMchOptions = Record<string, any>;
        export type postMchResponse = boolean;
        export type request = (options?: postMchOptions) => postMchResponse;
      }

      /**
       * postPr
       * /hot-deli-bakery/sap/post_pr_by_store
       */
      export namespace postPr {
        export type postPrOptions = Record<string, any>;
        export type postPrResponse = boolean;
        export type request = (options?: postPrOptions) => postPrResponse;
      }

      /**
       * 上传所有销售数据
       * /hot-deli-bakery/sap/post_sales_data
       */
      export namespace initializeSalesData {
        export type initializeSalesDataOptions = Record<string, any>;
        export type initializeSalesDataResponse = defs.bakery.Response<boolean>;
        export type request = (
          options?: initializeSalesDataOptions,
        ) => initializeSalesDataResponse;
      }

      /**
       * postStoreSAP
       * /hot-deli-bakery/sap/post_store
       */
      export namespace postStoreSAP {
        export type postStoreSAPOptions = Record<string, any>;
        export type postStoreSAPResponse = defs.bakery.Response<ObjectMap>;
        export type request = (
          options?: postStoreSAPOptions,
        ) => postStoreSAPResponse;
      }

      /**
       * testConnection
       * /hot-deli-bakery/sap/test_connection
       */
      export namespace testConnection {
        export type testConnectionOptions = Record<string, any>;
        export type testConnectionResponse = string;
        export type request = (
          options?: testConnectionOptions,
        ) => testConnectionResponse;
      }

      /**
       * postSalesPrice
       * /hot-deli-bakery/sap/update_sales_price
       */
      export namespace postSalesPrice {
        export type postSalesPriceOptions = Record<string, any>;
        export type postSalesPriceResponse = any;
        export type request = (
          options?: postSalesPriceOptions,
        ) => postSalesPriceResponse;
      }
    }

    /**
     * 销量报表 - 通用查询
     */
    export namespace statisticalCommon {
      /**
        * 查询产品
查询产品用于下拉列表
        * /hot-deli-bakery/api/statistical/common/articles
        */
      export namespace articles {
        export type articlesParam = {
          /** department */
          department?: string;

          /** keyword */
          keyword?: string;

          /** page */
          page: number;

          /** size */
          size: number;
        };
        export type articlesOptions = Record<string, any>;
        export type articlesResponse = defs.bakery.Response<
          defs.bakery.IPage<defs.bakery.ArticleOption>
        >;
        export type request = (
          params: articlesParam,
          options?: articlesOptions,
        ) => articlesResponse;
      }

      /**
        * 查询类别
查询类别用于下拉列表
        * /hot-deli-bakery/api/statistical/common/categories
        */
      export namespace categories {
        export type categoriesParam = {
          /** department */
          department?: string;

          /** keyword */
          keyword?: string;
        };
        export type categoriesOptions = Record<string, any>;
        export type categoriesResponse = defs.bakery.Response<
          Array<defs.bakery.CategoryOption>
        >;
        export type request = (
          params: categoriesParam,
          options?: categoriesOptions,
        ) => categoriesResponse;
      }

      /**
        * 销售量 & 销售额图表
销售量 & 销售额图表
        * /hot-deli-bakery/api/statistical/common/chart
        */
      export namespace chart {
        export type chartParam = {
          /** articleNumbers */
          articleNumbers?: Array<string>;

          /** categories */
          categories?: Array<string>;

          /** compareSamePeriod */
          compareSamePeriod?: boolean;

          /** department */
          department: string;

          /** endDate */
          endDate: number;

          /** module */
          module: string;

          /** startDate */
          startDate: number;

          /** storeIds */
          storeIds?: Array<string>;

          /** storeNames */
          storeNames?: Array<string>;

          /** viewBy */
          viewBy: string;
        };
        export type chartOptions = Record<string, any>;
        export type chartResponse = defs.bakery.Response<
          Array<defs.bakery.StatisticalSalesChart>
        >;
        export type request = (
          params: chartParam,
          options?: chartOptions,
        ) => chartResponse;
      }

      /**
        * 查询部门
查询部门用于下拉列表
        * /hot-deli-bakery/api/statistical/common/departments
        */
      export namespace departments {
        export type departmentsOptions = Record<string, any>;
        export type departmentsResponse = defs.bakery.Response<Set<string>>;
        export type request = (
          options?: departmentsOptions,
        ) => departmentsResponse;
      }

      /**
        * 销量 & 销售额报表导出
销量 & 销售额报表导出
        * /hot-deli-bakery/api/statistical/common/export/{module}/{reportId}
        */
      export namespace exporting {
        export type exportingPath = {
          /** module */
          module: string;
        };
        export type exportingOptions = Record<string, any>;
        export type exportingResponse = any;
        export type request = (
          path: exportingPath,
          options?: exportingOptions,
        ) => exportingResponse;
      }

      /**
       * 获取用户记住的筛选条件
       * /hot-deli-bakery/api/statistical/common/remember
       */
      export namespace findRemember {
        export type findRememberParam = {
          /** module */
          module: string;
        };
        export type findRememberOptions = Record<string, any>;
        export type findRememberResponse = defs.bakery.Response<ObjectMap>;
        export type request = (
          params: findRememberParam,
          options?: findRememberOptions,
        ) => findRememberResponse;
      }

      /**
       * 保存用户记住的筛选条件
       * /hot-deli-bakery/api/statistical/common/remember
       */
      export namespace saveRemember {
        export type saveRememberBody = defs.bakery.StatisticalSearchConditionVo;
        export type saveRememberOptions = Record<string, any>;
        export type saveRememberResponse = defs.bakery.Response<boolean>;
        export type request = (
          body: saveRememberBody,
          options?: saveRememberOptions,
        ) => saveRememberResponse;
      }

      /**
        * 查询门店
查询门店用于下拉列表
        * /hot-deli-bakery/api/statistical/common/stores
        */
      export namespace stores {
        export type storesParam = {
          /** keyword */
          keyword?: string;
        };
        export type storesOptions = Record<string, any>;
        export type storesResponse = defs.bakery.Response<
          Array<defs.bakery.StoreOption>
        >;
        export type request = (
          params: storesParam,
          options?: storesOptions,
        ) => storesResponse;
      }
    }

    /**
     * 销量报表 - 分类销量统计
     */
    export namespace statisticalSalesCategory {
      /**
        * 销量 & 销售额报表
销量 & 销售额报表
        * /hot-deli-bakery/api/statistical/sales/category/report
        */
      export namespace report {
        export type reportParam = {
          /** categories */
          categories?: Array<string>;

          /** department */
          department: string;

          /** storeIds */
          storeIds?: Array<string>;

          /** storeNames */
          storeNames?: Array<string>;
        };
        export type reportOptions = Record<string, any>;
        export type reportResponse =
          defs.bakery.Response<defs.bakery.StatisticalSalesCategoryReport>;
        export type request = (
          params: reportParam,
          options?: reportOptions,
        ) => reportResponse;
      }
    }

    /**
     * 销量报表 - 产品销量统计
     */
    export namespace statisticalSalesProduct {
      /**
        * 销量 & 销售额报表
销量 & 销售额报表
        * /hot-deli-bakery/api/statistical/sales/product/report
        */
      export namespace report {
        export type reportParam = {
          /** articleNumbers */
          articleNumbers?: Array<string>;

          /** department */
          department: string;

          /** storeIds */
          storeIds?: Array<string>;
        };
        export type reportOptions = Record<string, any>;
        export type reportResponse =
          defs.bakery.Response<defs.bakery.StatisticalSalesProductReport>;
        export type request = (
          params: reportParam,
          options?: reportOptions,
        ) => reportResponse;
      }
    }

    /**
     * 销量报表 - 门店销量统计
     */
    export namespace statisticalSalesStore {
      /**
        * 销量 & 销售额报表
销量 & 销售额报表
        * /hot-deli-bakery/api/statistical/sales/store/report
        */
      export namespace report {
        export type reportParam = {
          /** articleNumbers */
          articleNumbers?: Array<string>;

          /** department */
          department: string;

          /** storeIds */
          storeIds?: Array<string>;
        };
        export type reportOptions = Record<string, any>;
        export type reportResponse =
          defs.bakery.Response<defs.bakery.StatisticalSalesStoreReport>;
        export type request = (
          params: reportParam,
          options?: reportOptions,
        ) => reportResponse;
      }
    }

    /**
     * Test Controller
     */
    export namespace test {
      /**
       * msg
       * /hot-deli-bakery/test/msg
       */
      export namespace msg {
        export type msgParam = {
          /** name */
          name: string;
        };
        export type msgOptions = Record<string, any>;
        export type msgResponse = defs.bakery.Response;
        export type request = (
          params: msgParam,
          options?: msgOptions,
        ) => msgResponse;
      }
    }
  }
}
