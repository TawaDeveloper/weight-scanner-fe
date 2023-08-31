type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace bakery {
    export class ArticleRefDTO {
      /** 产品 Article Number 列表 */
      articleNumbers?: Array<string>;

      /** 部门 */
      dep?: string;

      /** 门店 id */
      storeId?: string;
    }

    export class CategoryOption {
      /** 类别描述 */
      description?: string;

      /** 类别 ID */
      id?: number;
    }

    export class CreateOrderDTO {
      /** 部门 */
      dep?: string;

      /** 门店 id */
      storeId?: string;
    }

    export class CreateUserDTO {
      /** 密码 */
      password?: string;

      /** 账号 */
      username?: string;
    }

    export class DDXX {
      /** articleNumber */
      articleNumber?: string;

      /** blocked */
      blocked?: string;

      /** changedOn */
      changedOn?: string;

      /** createdAt */
      createdAt?: defs.bakery.Timestamp;

      /** creator */
      creator?: string;

      /** deleted */
      deleted?: boolean;

      /** deletionIndicator */
      deletionIndicator?: string;

      /** deliveryDate */
      deliveryDate?: string;

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

      /** poNumber */
      poNumber?: string;

      /** prNumber */
      prNumber?: string;

      /** processingState */
      processingState?: string;

      /** processingStatus */
      processingStatus?: string;

      /** quantity */
      quantity?: number;

      /** releaseDate */
      releaseDate?: string;

      /** requisitionDate */
      requisitionDate?: string;

      /** requisitioner */
      requisitioner?: string;

      /** storeId */
      storeId?: string;

      /** updatedAt */
      updatedAt?: defs.bakery.Timestamp;
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

    export class LoginDTO {
      /** 密码 */
      password?: string;

      /** 账号 */
      username?: string;
    }

    export class LoginVO {
      /** 用户标识（账号） */
      identifier?: string;

      /** 会话 token */
      token?: string;

      /** 用户 ID */
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

    export class MDXX {
      /** 主键 */
      id?: number;

      /** 门店 ID */
      storeId?: string;

      /** 门店名称 */
      storeName?: string;
    }

    export class OptionVO {
      /** 选项名称 */
      label?: string;

      /** 选项值 */
      value?: object;
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
      dep?: string;

      /** 预计送达时间 */
      estDeliveredTime?: string;

      /** 订单 id */
      orderId?: string;

      /** 产品个数 */
      skuNum?: number;

      /** 产品数量 */
      skuQuantity?: number;

      /** 状态描述 */
      statusDesc?: string;

      /** 门店 id */
      storeId?: string;

      /** 门店名称 */
      storeName?: string;
    }

    export class OrderDetailItem {}

    export class OrderDetailItemDTO {
      /** 订单 id */
      orderId?: string;

      /** 第几页 */
      pageNum?: number;

      /** 每页多少条 */
      pageSize?: number;
    }

    export class OrderItem {
      /** articleNumber */
      articleNumber?: string;

      /** qty */
      qty?: number;

      /** record_type */
      record_type?: string;
    }

    export class OrderListExportDTO {
      /** 下单人 */
      createUserName?: string;

      /** 部门 */
      dep?: string;

      /** 订单编号 */
      id?: string;

      /** 批量导出 - 选中的 id */
      ids?: Array<string>;

      /** 下单时间 - 结束时间 */
      maxCreateTime?: string;

      /** 下单时间 - 开始时间 */
      minCreateTime?: string;

      /** 第几页 */
      pageNum?: number;

      /** 每页多少条 */
      pageSize?: number;

      /** 区域 */
      storeGroup?: string;

      /** 门店 ID */
      storeId?: string;

      /** 门店名称 */
      storeName?: string;
    }

    export class OrderListItem {
      /** 订单金额 */
      amount?: number;

      /** 下单时间 */
      createTime?: string;

      /** 下单人 */
      createUserName?: string;

      /** 部门 */
      dep?: string;

      /** 预计送达时间 */
      estDeliveredTime?: string;

      /** PR 编号 */
      id?: string;

      /** PO 编号 */
      sapPo?: string;

      /** 商品个数 */
      skuNum?: number;

      /** 商品数量 */
      skuQuantity?: number;

      /** 订单状态：1-已下单、2-已确认、3-已编辑、4-已取消 */
      status?: 'CANCELED' | 'CONFIRMED' | 'INIT' | 'ORDERED' | 'UPDATED';

      /** 区域 */
      storeGroup?: string;

      /** 门店 ID */
      storeId?: string;

      /** 门店名称 */
      storeName?: string;
    }

    export class OrderListOptionsVO {
      /** 部门列表 */
      deps?: Array<defs.bakery.OptionVO>;

      /** 区域列表 */
      storeGroups?: Array<defs.bakery.OptionVO>;
    }

    export class OrderListPageDTO {
      /** 下单人 */
      createUserName?: string;

      /** 部门 */
      dep?: string;

      /** 订单编号 */
      id?: string;

      /** 下单时间 - 结束时间 */
      maxCreateTime?: string;

      /** 下单时间 - 开始时间 */
      minCreateTime?: string;

      /** 第几页 */
      pageNum?: number;

      /** 每页多少条 */
      pageSize?: number;

      /** 区域 */
      storeGroup?: string;

      /** 门店 ID */
      storeId?: string;

      /** 门店名称 */
      storeName?: string;
    }

    export class OrderNewArticlesVO {}

    export class OrderNewOptionsVO {
      /** 部门列表 */
      deps?: Array<defs.bakery.OptionVO>;

      /** 门店列表 */
      stores?: Array<defs.bakery.OptionVO>;
    }

    export class OrderNewRefArticle {}

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

    export class SAPMchEntity {
      /** createdAt */
      createdAt?: defs.bakery.Timestamp;

      /** deleted */
      deleted?: boolean;

      /** id */
      id?: number;

      /** lossFactor */
      lossFactor?: number;

      /** mch */
      mch?: string;

      /** mchClass */
      mchClass?: string;

      /** mchClassDescription */
      mchClassDescription?: string;

      /** mchCnDescription */
      mchCnDescription?: string;

      /** mchDepartment */
      mchDepartment?: string;

      /** mchDepartmentDescription */
      mchDepartmentDescription?: string;

      /** mchDescription */
      mchDescription?: string;

      /** mchDivision */
      mchDivision?: string;

      /** mchDivisionDescription */
      mchDivisionDescription?: string;

      /** updatedAt */
      updatedAt?: defs.bakery.Timestamp;
    }

    export class SapOrderingDTO {
      /** customerId */
      customerId?: string;

      /** deptId */
      deptId?: string;

      /** items */
      items: Array<defs.bakery.OrderItem>;

      /** storeId */
      storeId?: string;
    }

    export class SaveLossFactorDTO {
      /** 损耗系数列表 */
      list?: Array<defs.bakery.LossFactor>;
    }

    export class StatisticalSalesProductReport {
      /** 报表内容 */
      contents?: Array<defs.bakery.Content>;

      /** 报表编号 */
      reportId?: string;
    }

    export class StatisticsStoreReport {
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

    export class StatisticsStoreSales {
      /** 销售额 */
      amount?: number;

      /** 产品 */
      articleNumber?: string;

      /** 部门 */
      department?: string;

      /** 销售日期 */
      salesDate?: string;

      /** 门店 */
      storeId?: string;

      /** 销售量 */
      volume?: number;
    }

    export class StoreGroupOption {
      /** 门店分组名称 */
      storeGroupName?: string;

      /** 分组下的门店列表 */
      stores?: Array<defs.bakery.MDXX>;
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
  }
}

declare namespace API {
  export namespace bakery {
    /**
     * 登陆权限
     */
    export namespace admin {
      /**
       * 创建用户
       * /hot-deli-bakery/admin/user/create
       */
      export namespace createUser {
        export type createUserBody = defs.bakery.CreateUserDTO;
        export type createUserOptions = Record<string, any>;
        export type createUserResponse = defs.bakery.Response<number>;
        export type request = (
          body: createUserBody,
          options?: createUserOptions,
        ) => createUserResponse;
      }

      /**
       * 用户登陆
       * /hot-deli-bakery/admin/user/login
       */
      export namespace login {
        export type loginBody = defs.bakery.LoginDTO;
        export type loginOptions = Record<string, any>;
        export type loginResponse = defs.bakery.Response<defs.bakery.LoginVO>;
        export type request = (
          body: loginBody,
          options?: loginOptions,
        ) => loginResponse;
      }

      /**
       * 测试登陆
       * /hot-deli-bakery/admin/user/login/check
       */
      export namespace checkLogin {
        export type checkLoginOptions = Record<string, any>;
        export type checkLoginResponse =
          defs.bakery.Response<defs.bakery.LoginVO>;
        export type request = (
          options?: checkLoginOptions,
        ) => checkLoginResponse;
      }
    }

    /**
     * 损耗系数
     */
    export namespace lossFactor {
      /**
       * 保存
       * /hot-deli-bakery/loss/factor/save
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
       * /hot-deli-bakery/loss/factor/tree
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
       * /hot-deli-bakery/order/detail/base
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
       * /hot-deli-bakery/order/detail/items/page
       */
      export namespace getOrderDetailItems {
        export type getOrderDetailItemsBody = defs.bakery.OrderDetailItemDTO;
        export type getOrderDetailItemsOptions = Record<string, any>;
        export type getOrderDetailItemsResponse = defs.bakery.Response<
          defs.bakery.IPage<defs.bakery.OrderDetailItem>
        >;
        export type request = (
          body: getOrderDetailItemsBody,
          options?: getOrderDetailItemsOptions,
        ) => getOrderDetailItemsResponse;
      }

      /**
       * 订单列表 - 批量导出
       * /hot-deli-bakery/order/list/export
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
       * /hot-deli-bakery/order/list/options
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
       * /hot-deli-bakery/order/list/page
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
       * 新建订单 - 查询产品分类
       * /hot-deli-bakery/order/new/articles
       */
      export namespace getNewArticles {
        export type getNewArticlesParam = {
          /** dep */
          dep: string;

          /** storeId */
          storeId: string;
        };
        export type getNewArticlesOptions = Record<string, any>;
        export type getNewArticlesResponse =
          defs.bakery.Response<defs.bakery.OrderNewArticlesVO>;
        export type request = (
          params: getNewArticlesParam,
          options?: getNewArticlesOptions,
        ) => getNewArticlesResponse;
      }

      /**
       * 新建订单 - 提交订单
       * /hot-deli-bakery/order/new/create
       */
      export namespace createOrder {
        export type createOrderBody = defs.bakery.CreateOrderDTO;
        export type createOrderOptions = Record<string, any>;
        export type createOrderResponse = defs.bakery.Response<string>;
        export type request = (
          body: createOrderBody,
          options?: createOrderOptions,
        ) => createOrderResponse;
      }

      /**
       * 新建订单 - 查询预计送达时间
       * /hot-deli-bakery/order/new/estDeliveredTime
       */
      export namespace getNewEstDeliveredTime {
        export type getNewEstDeliveredTimeParam = {
          /** storeId */
          storeId: string;
        };
        export type getNewEstDeliveredTimeOptions = Record<string, any>;
        export type getNewEstDeliveredTimeResponse =
          defs.bakery.Response<string>;
        export type request = (
          params: getNewEstDeliveredTimeParam,
          options?: getNewEstDeliveredTimeOptions,
        ) => getNewEstDeliveredTimeResponse;
      }

      /**
       * 新建订单 - 查询条件选项
       * /hot-deli-bakery/order/new/options
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
       * /hot-deli-bakery/order/new/ref/article
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
       * /hot-deli-bakery/order/new/ref/articles
       */
      export namespace getNewRefArticles {
        export type getNewRefArticlesParam = {
          /** dep */
          dep: string;

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
    }

    /**
     * Sap Controller
     */
    export namespace sap {
      /**
       * getMch
       * /hot-deli-bakery/sap/get_mch
       */
      export namespace getMch {
        export type getMchOptions = Record<string, any>;
        export type getMchResponse = Array<defs.bakery.SAPMchEntity>;
        export type request = (options?: getMchOptions) => getMchResponse;
      }

      /**
       * getPrTest
       * /hot-deli-bakery/sap/get_pr_test
       */
      export namespace getPrTest {
        export type getPrTestOptions = Record<string, any>;
        export type getPrTestResponse = Array<defs.bakery.DDXX>;
        export type request = (options?: getPrTestOptions) => getPrTestResponse;
      }

      /**
       * 获取sales data
       * /hot-deli-bakery/sap/get_sales
       */
      export namespace getSalesSAP {
        export type getSalesSAPOptions = Record<string, any>;
        export type getSalesSAPResponse = ObjectMap<any, object>;
        export type request = (
          options?: getSalesSAPOptions,
        ) => getSalesSAPResponse;
      }

      /**
       * 获取store data
       * /hot-deli-bakery/sap/get_store
       */
      export namespace getStoreSAP {
        export type getStoreSAPOptions = Record<string, any>;
        export type getStoreSAPResponse = ObjectMap<any, object>;
        export type request = (
          options?: getStoreSAPOptions,
        ) => getStoreSAPResponse;
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
       * postMch
       * /hot-deli-bakery/sap/post_mch
       */
      export namespace postMch {
        export type postMchOptions = Record<string, any>;
        export type postMchResponse = boolean;
        export type request = (options?: postMchOptions) => postMchResponse;
      }

      /**
       * 提交订单测试接口
       * /hot-deli-bakery/sap/post_order
       */
      export namespace postOrderTest {
        export type postOrderTestBody = defs.bakery.SapOrderingDTO;
        export type postOrderTestOptions = Record<string, any>;
        export type postOrderTestResponse = ObjectMap<any, object>;
        export type request = (
          body: postOrderTestBody,
          options?: postOrderTestOptions,
        ) => postOrderTestResponse;
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
       * postSalesSAP
       * /hot-deli-bakery/sap/post_sales
       */
      export namespace postSalesSAP {
        export type postSalesSAPOptions = Record<string, any>;
        export type postSalesSAPResponse = boolean;
        export type request = (
          options?: postSalesSAPOptions,
        ) => postSalesSAPResponse;
      }

      /**
       * postStoreSAP
       * /hot-deli-bakery/sap/post_store
       */
      export namespace postStoreSAP {
        export type postStoreSAPOptions = Record<string, any>;
        export type postStoreSAPResponse = ObjectMap<any, object>;
        export type request = (
          options?: postStoreSAPOptions,
        ) => postStoreSAPResponse;
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
     * 销量报表 - 通用查询
     */
    export namespace statisticsCommon {
      /**
       * export
       * /hot-deli-bakery/api/statistics/category/sales/export/{viewId}
       */
      export namespace exporting {
        export type exportingPath = {
          /** viewId */
          viewId: string;
        };
        export type exportingOptions = Record<string, any>;
        export type exportingResponse = defs.bakery.Response<ObjectMap>;
        export type request = (
          path: exportingPath,
          options?: exportingOptions,
        ) => exportingResponse;
      }

      /**
       * list
       * /hot-deli-bakery/api/statistics/category/sales/list
       */
      export namespace list {
        export type listParam = {
          /** categories */
          categories?: Array<string>;

          /** compareSamePeriod */
          compareSamePeriod?: boolean;

          /** departmentId */
          departmentId: number;

          /** endDate */
          endDate: string;

          /** rememberMe */
          rememberMe?: boolean;

          /** startDate */
          startDate: string;

          /** storeId */
          storeId?: number;

          /** storeName */
          storeName?: string;

          /** viewBy */
          viewBy: 'DAY' | 'WEEK' | 'YEAR';
        };
        export type listOptions = Record<string, any>;
        export type listResponse = defs.bakery.Response<ObjectMap>;
        export type request = (
          params: listParam,
          options?: listOptions,
        ) => listResponse;
      }

      /**
        * 查询产品
查询产品用于下拉列表
        * /hot-deli-bakery/api/statistics/common/articles
        */
      export namespace articles {
        export type articlesParam = {
          /** page */
          page: number;

          /** size */
          size: number;
        };
        export type articlesOptions = Record<string, any>;
        export type articlesResponse = defs.bakery.Response<string>;
        export type request = (
          params: articlesParam,
          options?: articlesOptions,
        ) => articlesResponse;
      }

      /**
        * 查询类别
查询类别用于下拉列表
        * /hot-deli-bakery/api/statistics/common/categories
        */
      export namespace categories {
        export type categoriesParam = {
          /** keyword */
          keyword?: string;

          /** page */
          page?: number;

          /** size */
          size?: number;
        };
        export type categoriesOptions = Record<string, any>;
        export type categoriesResponse = defs.bakery.Response<
          defs.bakery.IPage<defs.bakery.CategoryOption>
        >;
        export type request = (
          params: categoriesParam,
          options?: categoriesOptions,
        ) => categoriesResponse;
      }

      /**
        * 查询部门
查询部门用于下拉列表
        * /hot-deli-bakery/api/statistics/common/departments
        */
      export namespace departments {
        export type departmentsOptions = Record<string, any>;
        export type departmentsResponse = defs.bakery.Response<Set<string>>;
        export type request = (
          options?: departmentsOptions,
        ) => departmentsResponse;
      }

      /**
       * 获取用户记住的赛选条件
       * /hot-deli-bakery/api/statistics/common/remember
       */
      export namespace findRemember {
        export type findRememberParam = {
          /** category */
          category: string;
        };
        export type findRememberOptions = Record<string, any>;
        export type findRememberResponse = defs.bakery.Response<ObjectMap>;
        export type request = (
          params: findRememberParam,
          options?: findRememberOptions,
        ) => findRememberResponse;
      }

      /**
       * 保存用户记住的赛选条件
       * /hot-deli-bakery/api/statistics/common/remember
       */
      export namespace saveRemember {
        export type saveRememberParam = {
          /** category */
          category: string;
        };
        export type saveRememberOptions = Record<string, any>;
        export type saveRememberResponse = defs.bakery.Response<ObjectMap>;
        export type request = (
          params: saveRememberParam,
          options?: saveRememberOptions,
        ) => saveRememberResponse;
      }

      /**
        * 查询门店
查询门店名称用于下拉列表
        * /hot-deli-bakery/api/statistics/common/stores
        */
      export namespace stores {
        export type storesParam = {
          /** keyword */
          keyword?: string;
        };
        export type storesOptions = Record<string, any>;
        export type storesResponse = defs.bakery.Response<
          Array<defs.bakery.StoreGroupOption>
        >;
        export type request = (
          params: storesParam,
          options?: storesOptions,
        ) => storesResponse;
      }
    }

    /**
     * Statistics Product Sales Controller
     */
    export namespace statisticsProductSales {
      /**
       * export
       * /hot-deli-bakery/api/statistics/product/sales/export/{viewId}
       */
      export namespace exporting {
        export type exportingPath = {
          /** viewId */
          viewId: string;
        };
        export type exportingOptions = Record<string, any>;
        export type exportingResponse = defs.bakery.Response<ObjectMap>;
        export type request = (
          path: exportingPath,
          options?: exportingOptions,
        ) => exportingResponse;
      }

      /**
       * list
       * /hot-deli-bakery/api/statistics/product/sales/list
       */
      export namespace list {
        export type listParam = {
          /** categories */
          categories?: Array<string>;

          /** compareSamePeriod */
          compareSamePeriod?: boolean;

          /** departmentId */
          departmentId: number;

          /** endDate */
          endDate: string;

          /** productIds */
          productIds?: Array<number>;

          /** rememberMe */
          rememberMe?: boolean;

          /** startDate */
          startDate: string;

          /** storeIds */
          storeIds?: Array<number>;

          /** storeNames */
          storeNames?: Array<string>;

          /** viewBy */
          viewBy: string;
        };
        export type listOptions = Record<string, any>;
        export type listResponse = defs.bakery.Response<ObjectMap>;
        export type request = (
          params: listParam,
          options?: listOptions,
        ) => listResponse;
      }
    }

    /**
     * 销量报表 - 门店销量统计
     */
    export namespace statisticsStoreSales {
      /**
        * 销售量 & 销售额图表
销售量 & 销售额图表
        * /hot-deli-bakery/api/statistics/store/sales/chart
        */
      export namespace chart {
        export type chartParam = {
          /** articleNumbers */
          articleNumbers?: Array<string>;

          /** compareSamePeriod */
          compareSamePeriod?: boolean;

          /** department */
          department: string;

          /** endDate */
          endDate: number;

          /** startDate */
          startDate: number;

          /** storeIds */
          storeIds?: Array<string>;

          /** viewBy */
          viewBy: string;
        };
        export type chartOptions = Record<string, any>;
        export type chartResponse = defs.bakery.Response<
          Array<defs.bakery.StatisticsStoreSales>
        >;
        export type request = (
          params: chartParam,
          options?: chartOptions,
        ) => chartResponse;
      }

      /**
       * export
       * /hot-deli-bakery/api/statistics/store/sales/export/{viewId}
       */
      export namespace exporting {
        export type exportingPath = {
          /** viewId */
          viewId: string;
        };
        export type exportingOptions = Record<string, any>;
        export type exportingResponse = defs.bakery.Response<ObjectMap>;
        export type request = (
          path: exportingPath,
          options?: exportingOptions,
        ) => exportingResponse;
      }

      /**
        * 销量 & 销售额报表
销量 & 销售额报表
        * /hot-deli-bakery/api/statistics/store/sales/report
        */
      export namespace report {
        export type reportParam = {
          /** articleNumbers */
          articleNumbers?: Array<number>;

          /** department */
          department: string;

          /** storeIds */
          storeIds?: Array<number>;
        };
        export type reportOptions = Record<string, any>;
        export type reportResponse = defs.bakery.Response<
          Array<defs.bakery.StatisticsStoreReport>
        >;
        export type request = (
          params: reportParam,
          options?: reportOptions,
        ) => reportResponse;
      }
    }
  }
}
