type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace search {
    export class BrandAggVO {
      /** 品牌ID */
      brandId?: number;

      /** 品牌 */
      brandName?: string;

      /** 命中数量 */
      docCount?: number;

      /** logo */
      logo?: string;
    }

    export class CateAggVO {
      /** 分类ID */
      categoryId?: number;

      /** 分类 */
      categoryName?: string;

      /** 命中数量 */
      docCount?: number;
    }

    export class CooAggVO {
      /** 产地 */
      cooCode?: string;

      /** 命中数量 */
      docCount?: number;
    }

    export class EditStatusHotSearchKeywordRequest {
      /** id */
      idList: Array<number>;

      /** 状态  0:禁用, 1: 启用 */
      status: number;
    }

    export class EditStatusSearchKeywordRequest {
      /** id */
      id: number;

      /** 状态  0:禁用, 1: 启用 */
      status: number;
    }

    export class HotSearchKeywordDTO {
      /** 业务范围(0: 默认 1:8899 2:9988 3:O2O) */
      bizScopeList: Array<number>;

      /** 业务范围(0: 默认 1:8899 2:9988 3:O2O) */
      bizScopeListLable?: Array<string>;

      /** 点击量 */
      clickNum?: number;

      /** id */
      id?: number;

      /** 搜索词-英文 */
      keywordEn: string;

      /** 搜索词-简体中文 */
      keywordSch: string;

      /** 搜索词-繁体 */
      keywordTch: string;

      /** 排序 */
      sort?: number;

      /** 状态 0:禁用, 1: 启用 */
      status: number;

      /** O2O对应的门店组ids */
      storeGroupIdList?: Array<number>;

      /** O2O对应的门店组名称 */
      storeGroupName?: Array<string>;

      /** 更新人姓名 */
      updatedByName?: string;

      /** 更新时间 */
      updatedTime?: string;
    }

    export class Map<T0 = any, T1 = any> {}

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

    export class PageVO<T0 = any> {
      /** hasNextPage */
      hasNextPage?: boolean;

      /** list */
      list?: Array<T0>;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** pages */
      pages?: number;

      /** total */
      total?: number;
    }

    export class PriceAggVO {
      /** 最高价 */
      priceMax?: number;

      /** 最低价 */
      priceMin?: number;
    }

    export class ProductImage {
      /** 路径 */
      path?: string;

      /** 类型：1->主图，2->商品详情图，3->商品标签图，4->视频，5->其它 */
      type?: number;
    }

    export class ProductVO {
      /** 货号编码 */
      articleNumber?: number;

      /** 库存数量 */
      available?: number;

      /** 品牌ID */
      brandId?: number;

      /** 品牌名 */
      brandName?: string;

      /** 品牌名EN */
      brandNameEN?: string;

      /** 品牌名SCH */
      brandNameSCH?: string;

      /** 品牌名TCH */
      brandNameTCH?: string;

      /** 分类 */
      category?: string;

      /** 分类id */
      categoryId?: string;

      /** 前台分类id */
      categoryViewId?: number;

      /** 聚合分类id列表 */
      categoryViewIds?: Array<number>;

      /** 聚合分类名-EN */
      categoryViewNamesEN?: string;

      /** 聚合分类名-EN */
      categoryViewNamesSCH?: string;

      /** 聚合分类名-EN */
      categoryViewNamesTCH?: string;

      /** 一级分类id列表 */
      categoryViewOneIds?: Array<number>;

      /** 产地 */
      cooCode?: string;

      /** 是否有Coupon, Discover */
      coupon?: number;

      /** 是否有crv费用 */
      crv?: number;

      /** crv费用 */
      crvFee?: number;

      /** 收藏数量 */
      favoriteCount?: number;

      /** 分类 */
      image?: string;

      /** 是否在收藏 */
      isFavourite?: boolean;

      /** 商品净重 */
      netWeight?: number;

      /** 净重单位 */
      netWeightUom?: string;

      /** 市场价格 */
      price?: number;

      /** 商品ID */
      productId?: number;

      /** 图片地址 */
      productImage?: defs.search.ProductImage;

      /** 商品名 */
      productName?: string;

      /** 商品名EN */
      productNameEN?: string;

      /** 商品名SCH */
      productNameSCH?: string;

      /** 商品名TCH */
      productNameTCH?: string;

      /** 上架时间 */
      publishTime?: string;

      /** 最大购买限制 */
      purchaseLimit?: number;

      /** 零售价格 */
      retailPrice?: number;

      /** 销量 */
      sale?: number;

      /** 零售价格 */
      salePrice?: number;

      /** 售卖单位 */
      saleUom?: string;

      /** 营销tag */
      tag?: string;

      /** 商品类型 */
      type?: number;

      /** upcID */
      upcId?: string;

      /** 规格ID */
      variantId?: string;

      /** 规格名 */
      variantName?: string;

      /** 规格名EN */
      variantNameEN?: string;

      /** 规格名SCH */
      variantNameSCH?: string;

      /** 规格名TCH */
      variantNameTCH?: string;

      /** 浏览数量 */
      viewCount?: number;

      /** 商品体积 */
      volume?: number;
    }

    export class QueryHotSearchKeywordRequest {
      /** 结束时间 */
      endUpdatedTime?: string;

      /** 关键词 */
      keyword?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 起始时间 */
      startUpdatedTime?: string;

      /** 状态  0:禁用, 1: 启用 */
      status?: number;
    }

    export class QueryKeywordStatRequest {
      /** 关键词 */
      keyword?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 排序字段(user_num:累计搜索用户数; search_num:累计搜索次数; today_search_num:今日搜索次数; yesterday_search_num:昨日搜索次数; last_week_search_num:最近一周搜索次数;  last_week_month_num:最近一月搜索次数)  */
      sort?: string;

      /** 排序类型 asc  desc */
      sortType?: string;
    }

    export class QueryKeywordStatResponse {
      /** id */
      id?: number;

      /** 搜索词 */
      keyword?: string;

      /** 最近一月搜索次数 */
      lastWeekMonthNum?: number;

      /** 最近一周搜索次数 */
      lastWeekSearchNum?: number;

      /** 累计搜索次数 */
      searchNum?: number;

      /** 今日搜索次数 */
      todaySearchNum?: number;

      /** 累计搜索用户数 */
      userNum?: number;

      /** 昨日搜索次数 */
      yesterdaySearchNum?: number;
    }

    export class QuerySearchKeywordRequest {
      /** 关键词 */
      keyword?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 状态  0:禁用, 1: 启用 */
      status?: number;
    }

    export class RecommReqDto {
      /** 前台分类id数组 */
      categoryIds?: Array<number>;

      /** 当前请求页码，从1开始 */
      page?: number;

      /** 分页条数 */
      pageSize?: number;
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

    export class SearchAggrVO {
      /** brands */
      brands?: Array<defs.search.BrandAggVO>;

      /** categories */
      categories?: Array<defs.search.CateAggVO>;

      /** cooCodes */
      cooCodes?: Array<defs.search.CooAggVO>;

      /** prices */
      prices?: defs.search.PriceAggVO;
    }

    export class SearchKeywordDTO {
      /** 创建人姓名 */
      createdByName?: string;

      /** 创建人时间 */
      createdTime?: string;

      /** id */
      id?: number;

      /** 搜索词-英文 */
      keywordEn: string;

      /** 搜索词-简体中文 */
      keywordSch: string;

      /** 搜索词-繁体 */
      keywordTch: string;

      /** 状态 0:禁用, 1: 启用 */
      status: number;

      /** 更新人姓名 */
      updatedByName?: string;

      /** 更新时间 */
      updatedTime?: string;
    }

    export class SearchReqDto {
      /** 是否在售，1 in stock, 0 out of stock, other value ignore */
      availability?: number;

      /** 品牌id数组 */
      brandIds?: Array<number>;

      /** 前台分类id数组 */
      categoryIds?: Array<number>;

      /** 产地列表 */
      cooCodes?: Array<string>;

      /** 是否支持coupon, 用于discover, 0, 1, 非必选项 */
      coupon?: number;

      /** 功能区id,如weekly sale */
      functionId?: number;

      /** 搜索词 */
      keyword?: string;

      /** 当前请求页码，从1开始 */
      page?: number;

      /** 分页条数 */
      pageSize?: number;

      /** 价格，最高 */
      priceMax?: number;

      /** 价格，最低 */
      priceMin?: number;

      /** 排序字段，可选值: default(默认算法排序), sale(销量), retailPrice(价格), _score(评分), review(评价), publishTime(发布时间) */
      sortBy?: string;

      /** 排序方向，默认DESC，接受ASC, DESC  */
      sortOrder?: string;

      /** 专题区id,如top deals */
      themeId?: number;
    }

    export class SearchVO {
      /** Keyword */
      keyword?: string;
    }
  }
}

declare namespace API {
  export namespace search {
    /**
     * 热搜词配置
     */
    export namespace hotSearchKeyword {
      /**
       * 新增配置
       * /bo/hotSearchKeyword
       */
      export namespace add {
        export type addBody = defs.search.HotSearchKeywordDTO;
        export type addOptions = Record<string, any>;
        export type addResponse = defs.search.Response<number>;
        export type request = (
          body: addBody,
          options?: addOptions,
        ) => addResponse;
      }

      /**
       * 编辑配置
       * /bo/hotSearchKeyword
       */
      export namespace edit {
        export type editBody = defs.search.HotSearchKeywordDTO;
        export type editOptions = Record<string, any>;
        export type editResponse = defs.search.Response;
        export type request = (
          body: editBody,
          options?: editOptions,
        ) => editResponse;
      }

      /**
       * 编辑状态
       * /bo/hotSearchKeyword/editStatus
       */
      export namespace editStatus {
        export type editStatusBody =
          defs.search.EditStatusHotSearchKeywordRequest;
        export type editStatusOptions = Record<string, any>;
        export type editStatusResponse = defs.search.Response;
        export type request = (
          body: editStatusBody,
          options?: editStatusOptions,
        ) => editStatusResponse;
      }

      /**
       * 热搜词配置列表
       * /bo/hotSearchKeyword/list
       */
      export namespace list {
        export type listBody = defs.search.QueryHotSearchKeywordRequest;
        export type listOptions = Record<string, any>;
        export type listResponse = defs.search.Response<
          defs.search.PageInfo<defs.search.HotSearchKeywordDTO>
        >;
        export type request = (
          body: listBody,
          options?: listOptions,
        ) => listResponse;
      }
    }

    /**
     * 热搜词统计接口
     */
    export namespace keywordSearchStat {
      /**
       * 导出数据
       * /bo/keyword/stat/download
       */
      export namespace download {
        export type downloadOptions = Record<string, any>;
        export type downloadResponse = any;
        export type request = (options?: downloadOptions) => downloadResponse;
      }

      /**
       * 执行统计任务
       * /bo/keyword/stat/execStatJob
       */
      export namespace stat {
        export type statOptions = Record<string, any>;
        export type statResponse = defs.search.Response;
        export type request = (options?: statOptions) => statResponse;
      }

      /**
       * 统计列表
       * /bo/keyword/stat/list
       */
      export namespace list {
        export type listBody = defs.search.QueryKeywordStatRequest;
        export type listOptions = Record<string, any>;
        export type listResponse = defs.search.Response<
          defs.search.PageInfo<defs.search.QueryKeywordStatResponse>
        >;
        export type request = (
          body: listBody,
          options?: listOptions,
        ) => listResponse;
      }
    }

    /**
     * 搜索词配置
     */
    export namespace searchKeyword {
      /**
       * 新增配置
       * /bo/searchKeyword
       */
      export namespace add {
        export type addBody = defs.search.SearchKeywordDTO;
        export type addOptions = Record<string, any>;
        export type addResponse = defs.search.Response<number>;
        export type request = (
          body: addBody,
          options?: addOptions,
        ) => addResponse;
      }

      /**
       * 编辑配置
       * /bo/searchKeyword
       */
      export namespace edit {
        export type editBody = defs.search.SearchKeywordDTO;
        export type editOptions = Record<string, any>;
        export type editResponse = defs.search.Response<boolean>;
        export type request = (
          body: editBody,
          options?: editOptions,
        ) => editResponse;
      }

      /**
       * 编辑状态
       * /bo/searchKeyword/editStatus
       */
      export namespace editStatus {
        export type editStatusBody = defs.search.EditStatusSearchKeywordRequest;
        export type editStatusOptions = Record<string, any>;
        export type editStatusResponse = defs.search.Response<boolean>;
        export type request = (
          body: editStatusBody,
          options?: editStatusOptions,
        ) => editStatusResponse;
      }

      /**
       * 热搜词配置列表
       * /bo/searchKeyword/list
       */
      export namespace list {
        export type listBody = defs.search.QuerySearchKeywordRequest;
        export type listOptions = Record<string, any>;
        export type listResponse = defs.search.Response<
          defs.search.PageInfo<defs.search.SearchKeywordDTO>
        >;
        export type request = (
          body: listBody,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 模板下载
       * /bo/searchKeyword/template
       */
      export namespace template {
        export type templateOptions = Record<string, any>;
        export type templateResponse = any;
        export type request = (options?: templateOptions) => templateResponse;
      }

      /**
       * 模板上传
       * /bo/searchKeyword/upload
       */
      export namespace upload {
        export type uploadFormData = FormData;
        export type uploadOptions = Record<string, any>;
        export type uploadResponse = defs.search.Response;
        export type request = (
          formData: uploadFormData,
          options?: uploadOptions,
        ) => uploadResponse;
      }
    }
  }
}
