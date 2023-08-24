type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace store {
    export class AddressDetail {
      /** city */
      city?: string;

      /** houseNo */
      houseNo?: string;

      /** nation */
      nation?: string;

      /** state */
      state?: string;

      /** street */
      street?: string;

      /** zipcode */
      zipcode?: string;
    }

    export class BannerDto {
      /** 覆盖业务 0:default, 1:当日达, 2:次日达, 3:全美直邮 */
      business: Array<number>;

      /** 指向类型 1:分类, 2:商品, 3:自定义页面, 4:无指向 */
      directionType: number;

      /** 指向类型链接 */
      directionUrl?: string;

      /** 点击量 */
      hits?: number;

      /** id */
      id?: number;

      /** 英文图片url */
      imageEn: string;

      /** 简体中文url */
      imageSch: string;

      /** 繁体图片url */
      imageTch: string;

      /** 功能区名称 */
      name: string;

      /** 发布时间 */
      releaseTime?: string;

      /** 发布类型 1:及时发布  2:定时发布  */
      releaseType: number;

      /** 排序 */
      sort?: number;

      /** 状态  0:禁用, 1: 启用 */
      status: number;

      /** O2O区域 */
      storeGroups?: Array<string>;

      /** 平台，1：APP，2：WEB，3：WEB_TOP */
      type?: number;

      /** 更新人姓名 */
      updatedByName?: string;

      /** 更新时间 */
      updatedTime?: string;
    }

    export class BannerXX {
      /** 指向类型，1:category, 2:product, 3:customize */
      directionType: number;

      /** 指向链接 */
      directionUrl: string;

      /** bannerId */
      id: number;

      /** image */
      image: string;

      /** Banner name */
      name: string;
    }

    export class BoGoogleMapValidateVo {
      /** addressDetail */
      addressDetail?: defs.store.AddressDetail;

      /** formattedAddress */
      formattedAddress?: string;

      /** latitude */
      latitude?: string;

      /** longitude */
      longitude?: string;
    }

    export class BoGroupVo {
      /** id */
      id?: number;

      /** name */
      name?: string;

      /** status */
      status?: number;

      /** storeCount */
      storeCount?: number;

      /** stores */
      stores?: Array<defs.store.BoStoreVo>;

      /** type */
      type?: number;

      /** updatedByName */
      updatedByName?: string;

      /** updatedTime */
      updatedTime?: string;
    }

    export class BoSelectStoreCondition {
      /** address */
      address?: string;

      /** groupId */
      groupId?: Array<number>;

      /** name */
      name?: string;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** status */
      status?: number;

      /** storeId */
      storeId?: number;

      /** storeNature */
      storeNature?: number;

      /** storeType */
      storeType?: number;
    }

    export class BoStoreActivityDetailVo {
      /** activityEndTime */
      activityEndTime?: string;

      /** activityId */
      activityId?: number;

      /** activityName */
      activityName?: string;

      /** activityStartTime */
      activityStartTime?: string;

      /** id */
      id?: number;

      /** image */
      image?: string;

      /** releaseTime */
      releaseTime?: string;

      /** releaseType */
      releaseType?: number;

      /** storeName */
      storeName?: string;
    }

    export class BoStoreActivityVo {
      /** activityEndTime */
      activityEndTime?: string;

      /** activityName */
      activityName?: string;

      /** activityStartTime */
      activityStartTime?: string;

      /** id */
      id?: number;

      /** status */
      status?: number;

      /** storeGroupId */
      storeGroupId?: number;

      /** storeGroupName */
      storeGroupName?: string;

      /** storeId */
      storeId?: number;

      /** storeName */
      storeName?: string;

      /** updateByName */
      updateByName?: string;

      /** updatedTime */
      updatedTime?: string;
    }

    export class BoStoreDeliveryDetailVo {
      /** storeDeliveryDirectMail */
      storeDeliveryDirectMail?: defs.store.BoStoreDeliveryDirectMailVo;

      /** storeDeliveryNextDay */
      storeDeliveryNextDay?: defs.store.BoStoreDeliveryNextDayVo;

      /** storeDeliverySameDay */
      storeDeliverySameDay?: defs.store.BoStoreDeliverySameDayVo;
    }

    export class BoStoreDeliveryDirectMailVo {
      /** states */
      states?: Array<string>;

      /** storeId */
      storeId?: number;

      /** type */
      type?: number;

      /** zipCodes */
      zipCodes?: Array<string>;
    }

    export class BoStoreDeliveryNextDayVo {
      /** storeId */
      storeId?: number;

      /** type */
      type?: number;

      /** zipCodes */
      zipCodes?: Array<string>;
    }

    export class BoStoreDeliverySameDayVo {
      /** bypassTollRoad */
      bypassTollRoad?: boolean;

      /** flashDistance */
      flashDistance?: number;

      /** pickupDistance */
      pickupDistance?: number;

      /** storeId */
      storeId?: number;

      /** type */
      type?: number;

      /** zipCodes */
      zipCodes?: Array<string>;
    }

    export class BoStoreDetailVo {
      /** address */
      address?: string;

      /** availableDays */
      availableDays?: number;

      /** city */
      city?: string;

      /** companyCode */
      companyCode?: string;

      /** deliveryProvider */
      deliveryProvider?: number;

      /** deliveryTime */
      deliveryTime?: number;

      /** email */
      email?: string;

      /** faxNumber */
      faxNumber?: string;

      /** flashDistance */
      flashDistance?: number;

      /** groupId */
      groupId?: number;

      /** groupName */
      groupName?: string;

      /** houseNo */
      houseNo?: string;

      /** id */
      id?: number;

      /** latitude */
      latitude?: string;

      /** limitRules */
      limitRules?: Array<defs.store.LimitRule>;

      /** logo */
      logo?: string;

      /** longitude */
      longitude?: string;

      /** nation */
      nation?: string;

      /** orderLimit */
      orderLimit?: number;

      /** pickingTime */
      pickingTime?: number;

      /** pickupDistance */
      pickupDistance?: number;

      /** serviceFee */
      serviceFee?: number;

      /** state */
      state?: string;

      /** storeBusinessTimes */
      storeBusinessTimes?: Array<defs.store.StoreTimeGroup>;

      /** storeDeliverTimes */
      storeDeliverTimes?: Array<defs.store.StoreTimeGroup>;

      /** storeDeliveryExcludeZipCodes */
      storeDeliveryExcludeZipCodes?: Array<string>;

      /** storeName */
      storeName?: string;

      /** storeNature */
      storeNature?: number;

      /** storeNumber */
      storeNumber?: number;

      /** storeType */
      storeType?: number;

      /** street */
      street?: string;

      /** telephone */
      telephone?: string;

      /** timeZone */
      timeZone?: string;

      /** warehouse */
      warehouse?: defs.store.Warehouse;

      /** zipcode */
      zipcode?: string;
    }

    export class BoStoreIntroductionVo {
      /** id */
      id?: number;

      /** instruction */
      instruction?: string;

      /** storeId */
      storeId?: number;

      /** storeName */
      storeName?: string;

      /** updateByName */
      updateByName?: string;

      /** updatedTime */
      updatedTime?: string;
    }

    export class BoStoreVo {
      /** address */
      address?: string;

      /** availableDays */
      availableDays?: number;

      /** city */
      city?: string;

      /** companyCode */
      companyCode?: string;

      /** createdByName */
      createdByName?: string;

      /** deadlineHour */
      deadlineHour?: number;

      /** deadlineMinute */
      deadlineMinute?: number;

      /** deliveryProvider */
      deliveryProvider?: number;

      /** deliveryTime */
      deliveryTime?: number;

      /** email */
      email?: string;

      /** faxNumber */
      faxNumber?: string;

      /** groupId */
      groupId?: number;

      /** groupName */
      groupName?: string;

      /** houseNo */
      houseNo?: string;

      /** id */
      id?: number;

      /** latitude */
      latitude?: string;

      /** limitRules */
      limitRules?: Array<defs.store.LimitRule>;

      /** logo */
      logo?: string;

      /** longitude */
      longitude?: string;

      /** nation */
      nation?: string;

      /** orderLimit */
      orderLimit?: number;

      /** pickingTime */
      pickingTime?: number;

      /** serviceFee */
      serviceFee?: number;

      /** state */
      state?: string;

      /** status */
      status?: number;

      /** storeBusinessTimes */
      storeBusinessTimes?: Array<defs.store.StoreTimeGroup>;

      /** storeDeliverTimes */
      storeDeliverTimes?: Array<defs.store.StoreTimeGroup>;

      /** storeName */
      storeName?: string;

      /** storeNature */
      storeNature?: number;

      /** storeNumber */
      storeNumber?: number;

      /** storeType */
      storeType?: number;

      /** street */
      street?: string;

      /** telephone */
      telephone?: string;

      /** timeZone */
      timeZone?: string;

      /** updateByName */
      updateByName?: string;

      /** warehouseId */
      warehouseId?: number;

      /** zipcode */
      zipcode?: string;
    }

    export class BusinessTime {
      /** 星期几 */
      dayOfWeeks?: string;

      /** 结束营业时间 */
      endTime?: string;

      /** 开始营业时间 */
      startTime?: string;
    }

    export class ChangeStoreDTO {
      /** 配送类型 */
      deliveryType?: number;

      /** 纬度 */
      latitude?: number;

      /** 经度 */
      longitude?: number;

      /** 州 */
      state?: string;

      /** 门店ID */
      storeId?: number;

      /** 邮编 */
      zipCode?: string;
    }

    export class ChangeStoreVO {
      /** 配送列表 */
      deliveryTypes?: Array<defs.store.DeliveryType>;

      /** 是否保持原来的门店 */
      hold?: boolean;

      /** 类型：0-未开通服务，1-配送列表 */
      type?: number;
    }

    export class CreateOrUpdateGroupVo {
      /** id */
      id?: number;

      /** name */
      name?: string;

      /** status */
      status?: number;

      /** type */
      type?: number;
    }

    export class DeliveryTimeVO {
      /** 日期 */
      date?: string;

      /** 周几 */
      day?: string;

      /** 是否为空，都不可用 */
      full?: boolean;

      /** 时间段集合 */
      timeList?: Array<defs.store.PeriodTime>;
    }

    export class DeliveryType {
      /** 门店列表（type=3时默认选中第一个门店） */
      stores?: Array<defs.store.Store>;

      /** 配送类型：1-自提、2-闪送、3-全美直邮 */
      type?: number;

      /** 类型描述 */
      typeDesc?: string;

      /** 类型名称 */
      typeName?: string;
    }

    export class DeliveryTypeItem {
      /** 类型 */
      type?: number;

      /** 描述 */
      typeDesc?: string;

      /** 名称 */
      typeName?: string;
    }

    export class GroupVo {
      /** id */
      id?: number;

      /** name */
      name?: string;
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

    export class ImportZipCodeResult {
      /** failedRow */
      failedRow?: number;

      /** failedZipCodes */
      failedZipCodes?: Array<string>;

      /** successRow */
      successRow?: number;
    }

    export class LimitRule {
      /** dayOfWeeks */
      dayOfWeeks?: Array<number>;

      /** details */
      details?: Array<defs.store.LimitRuleDetail>;
    }

    export class LimitRuleDetail {
      /** count */
      count?: number;

      /** timePeriod */
      timePeriod?: string;
    }

    export class ListBannerDTO {
      /** 类型，1：APP，2：WEB，3：WEB_TOP */
      types?: Array<number>;

      /** 邮编 */
      zipCode?: string;
    }

    export class ListDeliveryTypeDTO {
      /** 州 */
      state?: string;

      /** 邮编 */
      zipCode?: string;
    }

    export class ListNearbyStoreDTO {
      /** 纬度 */
      latitude?: number;

      /** 经度 */
      longitude?: number;

      /** 州 */
      state?: string;

      /** 邮编 */
      zipCode?: string;
    }

    export class ListStoreDTO {
      /** 配送方式 */
      deliveryType?: number;

      /** 纬度 */
      latitude?: number;

      /** 经度 */
      longitude?: number;

      /** 州 */
      state?: string;

      /** 邮编 */
      zipCode?: string;
    }

    export class Map<T0 = any, T1 = any> {}

    export class NearbyDeliveryTypeVO {
      /** 配送列表 */
      deliveryTypes?: Array<defs.store.DeliveryType>;

      /** 类型：0-未开通服务，1-配送列表 */
      type?: number;
    }

    export class NearbyStoreDTO {
      /** 地址 */
      address?: string;

      /** 纬度 */
      latitude?: number;

      /** 经度 */
      longitude?: number;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 范围之内,单位/英里 */
      within?: number;

      /** 邮编 */
      zipCode?: string;
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

    export class PeriodTime {
      /** 是否可用 */
      available?: boolean;

      /** 配送时间段 */
      time?: string;
    }

    export class QueryBannerRequest {
      /** banner名称 */
      name?: string;

      /** 更新时间排序 0:降序, 1:升序 */
      orderBy?: number;

      /** pageNum */
      pageNum?: number;

      /** pageSize */
      pageSize?: number;

      /** 状态  0:禁用, 1: 启用 */
      status?: number;

      /** 类型，1：APP，2：WEB，3：WEB_TOP */
      type?: number;
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

    export class SelectStoreAndGroupCondition {
      /** authFilter */
      authFilter?: boolean;

      /** condition */
      condition?: string;
    }

    export class State {
      /** id */
      id?: number;

      /** name */
      name?: string;

      /** state */
      state?: string;
    }

    export class Store {
      /** 门店地址 */
      address?: string;

      /** 营业时间列表 */
      businessTimeList?: Array<defs.store.BusinessTime>;

      /** 城市 */
      city?: string;

      /** 公司编码 */
      companyCode?: string;

      /** 配送提供商code */
      deliveryProviderCode?: number;

      /** 配送提供商名字 */
      deliveryProviderName?: string;

      /** 距离 */
      distance?: number;

      /** 距离单位 */
      distanceUnit?: string;

      /** 电子邮箱 */
      email?: string;

      /** 传真 */
      faxNumber?: string;

      /** 门牌号 */
      houseNo?: string;

      /** id */
      id?: number;

      /** 门店信息介绍 */
      instruction?: string;

      /** 纬度 */
      latitude?: string;

      /** logo */
      logo?: string;

      /** 经度 */
      longitude?: string;

      /** 名称 */
      name?: string;

      /** 服务费 */
      serviceFee?: number;

      /** 州 */
      state?: string;

      /** 门店性质 1-当日达，2-次日达，3-全美直邮 */
      storeNature?: number;

      /** 门店编号 */
      storeNumber?: number;

      /** 门店类型 1-实体店，2-虚拟店 */
      storeType?: number;

      /** 街道 */
      street?: string;

      /** 联系电话 */
      telephone?: string;

      /** 门店时区 */
      timeZone?: string;

      /** 邮政编码 */
      zipCode?: string;
    }

    export class StoreActivity {
      /** 活动日期 */
      date: string;

      /** 门店活动ID */
      id: number;

      /** 活动图片text */
      imageText?: string;

      /** 活动图片URL */
      imageUrl: string;

      /** 活动标题 */
      name: string;
    }

    export class StoreAd {
      /** 门店地址 */
      address?: string;

      /** 门店ID */
      id: number;

      /** 门店名称 */
      name: string;

      /** 门店活动信息列表 */
      storeActivities?: Array<defs.store.StoreActivity>;
    }

    export class StoreDetail {
      /** address */
      address?: string;

      /** availableDays */
      availableDays?: number;

      /** city */
      city?: string;

      /** companyCode */
      companyCode?: string;

      /** createdByName */
      createdByName?: string;

      /** deliveryProvider */
      deliveryProvider?: number;

      /** deliveryTime */
      deliveryTime?: number;

      /** email */
      email?: string;

      /** faxNumber */
      faxNumber?: string;

      /** groupId */
      groupId?: number;

      /** groupName */
      groupName?: string;

      /** houseNo */
      houseNo?: string;

      /** id */
      id?: number;

      /** latitude */
      latitude?: string;

      /** logo */
      logo?: string;

      /** longitude */
      longitude?: string;

      /** nation */
      nation?: string;

      /** orderLimit */
      orderLimit?: number;

      /** orderLimitTemplateId */
      orderLimitTemplateId?: number;

      /** pickingTime */
      pickingTime?: number;

      /** serviceFee */
      serviceFee?: number;

      /** state */
      state?: string;

      /** status */
      status?: number;

      /** storeName */
      storeName?: string;

      /** storeNature */
      storeNature?: number;

      /** storeNumber */
      storeNumber?: number;

      /** storeType */
      storeType?: number;

      /** street */
      street?: string;

      /** telephone */
      telephone?: string;

      /** timeZone */
      timeZone?: string;

      /** updateByName */
      updateByName?: string;

      /** zipcode */
      zipcode?: string;
    }

    export class StoreGroupAndNature {
      /** storeGroups */
      storeGroups?: Array<string>;

      /** storeNatures */
      storeNatures?: Array<number>;
    }

    export class StoreInfo {
      /** 门店地址 */
      address?: string;

      /** 营业时间列表 */
      businessTimeList?: Array<defs.store.BusinessTime>;

      /** 距离, 单位/英里 */
      distance?: number;

      /** 电子邮箱 */
      email?: string;

      /** 传真 */
      faxNumber?: string;

      /** 全称州名 */
      fullState?: string;

      /** 门店ID */
      id?: number;

      /** 门店信息介绍 */
      instruction?: string;

      /** 纬度 */
      latitude?: string;

      /** 经度 */
      longitude?: string;

      /** 门店名称 */
      name?: string;

      /** 州名 */
      state?: string;

      /** 门店性质 1-当日达、2-次日达、3-全美直邮 */
      storeNature?: number;

      /** 门店类型 1-实体门店，2-虚拟门店 */
      storeType?: number;

      /** 联系电话 */
      telephone?: string;

      /** 邮政编码 */
      zipCode?: string;
    }

    export class StoreResponse {
      /** city */
      city?: string;

      /** companyCode */
      companyCode?: string;

      /** deliveryProviderCode */
      deliveryProviderCode?: number;

      /** deliveryProviderName */
      deliveryProviderName?: string;

      /** groupId */
      groupId?: number;

      /** groupName */
      groupName?: string;

      /** houseNo */
      houseNo?: string;

      /** id */
      id?: number;

      /** latitude */
      latitude?: number;

      /** logo */
      logo?: string;

      /** longitude */
      longitude?: number;

      /** name */
      name?: string;

      /** serviceFee */
      serviceFee?: number;

      /** state */
      state?: string;

      /** storeNature */
      storeNature?: number;

      /** storeNumber */
      storeNumber?: number;

      /** storeType */
      storeType?: number;

      /** street */
      street?: string;

      /** telephone */
      telephone?: string;

      /** timeZone */
      timeZone?: string;

      /** zipCode */
      zipCode?: string;
    }

    export class StoreTimeGroup {
      /** endHour */
      endHour?: number;

      /** endMinute */
      endMinute?: number;

      /** startHour */
      startHour?: number;

      /** startMinute */
      startMinute?: number;

      /** week */
      week?: Array<number>;
    }

    export class UpdateBannerRequest {
      /** banner ID */
      id?: string;

      /** 状态  0:禁用, 1: 启用 */
      status?: number;

      /** 台，1：APP，2：WEB，3：WEB_TOP */
      type?: number;
    }

    export class UserRegistrationDTO {
      /** 邮箱 */
      email?: string;

      /** 邮编 */
      zipCode?: string;
    }

    export class Warehouse {
      /** id */
      id?: number;

      /** name */
      name?: string;
    }

    export class WebBannerXX {
      /** banners */
      banners?: Array<defs.store.BannerXX>;

      /** 类型，1：APP，2：WEB，3：WEB_TOP */
      type?: number;
    }
  }
}

declare namespace API {
  export namespace store {
    /**
     * 后台管理 - Banner 配置
     */
    export namespace boBanner {
      /**
       * 新增或编辑
       * /bo/banner/createOrEdit
       */
      export namespace createOrEdit {
        export type createOrEditBody = defs.store.BannerDto;
        export type createOrEditOptions = Record<string, any>;
        export type createOrEditResponse = defs.store.Response;
        export type request = (
          body: createOrEditBody,
          options?: createOrEditOptions,
        ) => createOrEditResponse;
      }

      /**
       * 配置列表
       * /bo/banner/list
       */
      export namespace list {
        export type listBody = defs.store.QueryBannerRequest;
        export type listOptions = Record<string, any>;
        export type listResponse = defs.store.Response<
          defs.store.PageInfo<defs.store.BannerDto>
        >;
        export type request = (
          body: listBody,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 修改状态
       * /bo/banner/modifyStatus
       */
      export namespace modifyStatus {
        export type modifyStatusBody = defs.store.UpdateBannerRequest;
        export type modifyStatusOptions = Record<string, any>;
        export type modifyStatusResponse = defs.store.Response;
        export type request = (
          body: modifyStatusBody,
          options?: modifyStatusOptions,
        ) => modifyStatusResponse;
      }
    }

    /**
     * 后台管理 - 文件管理
     */
    export namespace boFile {
      /**
       * 上传文件到 S3
       * /bo/file/upload
       */
      export namespace upload {
        export type uploadFormData = FormData;
        export type uploadOptions = Record<string, any>;
        export type uploadResponse = defs.store.Response<string>;
        export type request = (
          formData: uploadFormData,
          options?: uploadOptions,
        ) => uploadResponse;
      }
    }

    /**
     * 后台管理 - 谷歌地图服务
     */
    export namespace boGoogleMap {
      /**
       * 校验地址
       * /bo/google/map/validate
       */
      export namespace validate {
        export type validateParam = {
          /** address */
          address: string;
        };
        export type validateOptions = Record<string, any>;
        export type validateResponse =
          defs.store.Response<defs.store.BoGoogleMapValidateVo>;
        export type request = (
          params: validateParam,
          options?: validateOptions,
        ) => validateResponse;
      }
    }

    /**
     * 后台管理 - 门店分组管理
     */
    export namespace boGroup {
      /**
       * 新增分组
       * /bo/smsGroup/create
       */
      export namespace create {
        export type createBody = defs.store.CreateOrUpdateGroupVo;
        export type createOptions = Record<string, any>;
        export type createResponse = defs.store.Response<void>;
        export type request = (
          body: createBody,
          options?: createOptions,
        ) => createResponse;
      }

      /**
       * 查询分组列表
       * /bo/smsGroup/list
       */
      export namespace list {
        export type listParam = {
          /** name */
          name?: string;

          /** page */
          page?: number;

          /** size */
          size?: number;

          /** status */
          status?: number;

          /** type */
          type?: number;
        };
        export type listOptions = Record<string, any>;
        export type listResponse = defs.store.Response<
          defs.store.IPage<defs.store.BoGroupVo>
        >;
        export type request = (
          params: listParam,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 获取O2O区域
       * /bo/smsGroup/o2o
       */
      export namespace selectO2OGroups {
        export type selectO2OGroupsOptions = Record<string, any>;
        export type selectO2OGroupsResponse = defs.store.Response<
          Array<string>
        >;
        export type request = (
          options?: selectO2OGroupsOptions,
        ) => selectO2OGroupsResponse;
      }

      /**
       * 获取O2O分组区域
       * /bo/smsGroup/o2o/group
       */
      export namespace selectO2OGroupArea {
        export type selectO2OGroupAreaOptions = Record<string, any>;
        export type selectO2OGroupAreaResponse = defs.store.Response<
          Array<defs.store.GroupVo>
        >;
        export type request = (
          options?: selectO2OGroupAreaOptions,
        ) => selectO2OGroupAreaResponse;
      }

      /**
       * 更新分组
       * /bo/smsGroup/update
       */
      export namespace update {
        export type updateBody = defs.store.CreateOrUpdateGroupVo;
        export type updateOptions = Record<string, any>;
        export type updateResponse = defs.store.Response<void>;
        export type request = (
          body: updateBody,
          options?: updateOptions,
        ) => updateResponse;
      }

      /**
       * 根据 ID 查询分组
       * /bo/smsGroup/{id}
       */
      export namespace findById {
        export type findByIdPath = {
          /** id */
          id: number;
        };
        export type findByIdOptions = Record<string, any>;
        export type findByIdResponse =
          defs.store.Response<defs.store.BoGroupVo>;
        export type request = (
          path: findByIdPath,
          options?: findByIdOptions,
        ) => findByIdResponse;
      }
    }

    /**
     * 后台管理 - 门店管理
     */
    export namespace boStore {
      /**
       * 查询所有门店
       * /bo/store/all
       */
      export namespace findAllStore {
        export type findAllStoreOptions = Record<string, any>;
        export type findAllStoreResponse = defs.store.Response<
          Array<defs.store.StoreResponse>
        >;
        export type request = (
          options?: findAllStoreOptions,
        ) => findAllStoreResponse;
      }

      /**
       * 新增门店
       * /bo/store/create
       */
      export namespace create {
        export type createBody = defs.store.BoStoreVo;
        export type createOptions = Record<string, any>;
        export type createResponse = defs.store.Response<number>;
        export type request = (
          body: createBody,
          options?: createOptions,
        ) => createResponse;
      }

      /**
       * 门店详情
       * /bo/store/detail/{id}
       */
      export namespace detail {
        export type detailPath = {
          /** id */
          id: number;
        };
        export type detailOptions = Record<string, any>;
        export type detailResponse =
          defs.store.Response<defs.store.BoStoreDetailVo>;
        export type request = (
          path: detailPath,
          options?: detailOptions,
        ) => detailResponse;
      }

      /**
       * 查询门店区域及范围
       * /bo/store/groupNature
       */
      export namespace findStoreGroupAndNature {
        export type findStoreGroupAndNatureOptions = Record<string, any>;
        export type findStoreGroupAndNatureResponse =
          defs.store.Response<defs.store.StoreGroupAndNature>;
        export type request = (
          options?: findStoreGroupAndNatureOptions,
        ) => findStoreGroupAndNatureResponse;
      }

      /**
       * 查询门店列表
       * /bo/store/list
       */
      export namespace list {
        export type listBody = defs.store.BoSelectStoreCondition;
        export type listOptions = Record<string, any>;
        export type listResponse = defs.store.Response<
          defs.store.IPage<defs.store.BoStoreVo>
        >;
        export type request = (
          body: listBody,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 查询州列表
       * /bo/store/state/list
       */
      export namespace statsList {
        export type statsListOptions = Record<string, any>;
        export type statsListResponse = defs.store.Response<
          Array<defs.store.State>
        >;
        export type request = (options?: statsListOptions) => statsListResponse;
      }

      /**
       * 启用或禁用门店
       * /bo/store/status
       */
      export namespace status {
        export type statusParam = {
          /** id */
          id: number;

          /** status */
          status: number;
        };
        export type statusOptions = Record<string, any>;
        export type statusResponse = defs.store.Response<void>;
        export type request = (
          params: statusParam,
          options?: statusOptions,
        ) => statusResponse;
      }

      /**
       * 查询门店和门店分组列表
       * /bo/store/storeAndGroup/list
       */
      export namespace storeAndGroupList {
        export type storeAndGroupListBody =
          defs.store.SelectStoreAndGroupCondition;
        export type storeAndGroupListOptions = Record<string, any>;
        export type storeAndGroupListResponse = defs.store.Response<
          Array<defs.store.StoreDetail>
        >;
        export type request = (
          body: storeAndGroupListBody,
          options?: storeAndGroupListOptions,
        ) => storeAndGroupListResponse;
      }

      /**
       * 时区列表
       * /bo/store/timeZone
       */
      export namespace timeZone {
        export type timeZoneOptions = Record<string, any>;
        export type timeZoneResponse = defs.store.Response<Array<string>>;
        export type request = (options?: timeZoneOptions) => timeZoneResponse;
      }

      /**
       * 更新门店
       * /bo/store/update
       */
      export namespace update {
        export type updateBody = defs.store.BoStoreVo;
        export type updateOptions = Record<string, any>;
        export type updateResponse = defs.store.Response<void>;
        export type request = (
          body: updateBody,
          options?: updateOptions,
        ) => updateResponse;
      }
    }

    /**
     * 后台管理 - 门店营销管理
     */
    export namespace boStoreActivity {
      /**
       * 活动详情
       * /bo/store/activity/detail/{id}
       */
      export namespace detail {
        export type detailPath = {
          /** id */
          id: number;
        };
        export type detailOptions = Record<string, any>;
        export type detailResponse =
          defs.store.Response<defs.store.BoStoreActivityDetailVo>;
        export type request = (
          path: detailPath,
          options?: detailOptions,
        ) => detailResponse;
      }

      /**
       * 查询活动列表
       * /bo/store/activity/list
       */
      export namespace list {
        export type listParam = {
          /** activityEndTime */
          activityEndTime?: string;

          /** activityName */
          activityName?: string;

          /** activityStartTime */
          activityStartTime?: string;

          /** pageNum */
          pageNum?: number;

          /** pageSize */
          pageSize?: number;

          /** smsGroupId */
          smsGroupId?: number;

          /** storeId */
          storeId?: number;

          /** storeName */
          storeName?: string;
        };
        export type listOptions = Record<string, any>;
        export type listResponse = defs.store.Response<
          defs.store.IPage<defs.store.BoStoreActivityVo>
        >;
        export type request = (
          params: listParam,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 保存或更新活动
       * /bo/store/activity/saveOrUpdate
       */
      export namespace saveOrUpdate {
        export type saveOrUpdateParam = {
          /** activityEndTime */
          activityEndTime: string;

          /** activityName */
          activityName: string;

          /** activityStartTime */
          activityStartTime: string;

          /** id */
          id?: number;

          /** image */
          image: string;

          /** releaseTime */
          releaseTime: string;

          /** releaseType */
          releaseType: number;

          /** smsGroupId */
          smsGroupId?: number;

          /** storeIds */
          storeIds?: string;

          /** type */
          type?: number;
        };
        export type saveOrUpdateFormData = FormData;
        export type saveOrUpdateOptions = Record<string, any>;
        export type saveOrUpdateResponse = defs.store.Response<void>;
        export type request = (
          params: saveOrUpdateParam,
          formData: saveOrUpdateFormData,
          options?: saveOrUpdateOptions,
        ) => saveOrUpdateResponse;
      }

      /**
       * 上架或下架活动
       * /bo/store/activity/status
       */
      export namespace status {
        export type statusParam = {
          /** id */
          id: number;
        };
        export type statusOptions = Record<string, any>;
        export type statusResponse = defs.store.Response<void>;
        export type request = (
          params: statusParam,
          options?: statusOptions,
        ) => statusResponse;
      }

      /**
        * 下载模板
下载 XLSX 格式的导入模板，后续上传文件时应该以这个模板为基础
        * /bo/store/activity/template/imageText
        */
      export namespace downloadTemplate {
        export type downloadTemplateOptions = Record<string, any>;
        export type downloadTemplateResponse = any;
        export type request = (
          options?: downloadTemplateOptions,
        ) => downloadTemplateResponse;
      }
    }

    /**
     * 后台管理 - 门店配送管理
     */
    export namespace boStoreDelivery {
      /**
       * 添加或更新全美直邮配送设置
       * /bo/store/delivery/directMail/save
       */
      export namespace saveDirectMail {
        export type saveDirectMailParam = {
          /** states */
          states: Array<string>;

          /** storeId */
          storeId: number;

          /** zipCodes */
          zipCodes: Array<string>;
        };
        export type saveDirectMailFormData = FormData;
        export type saveDirectMailOptions = Record<string, any>;
        export type saveDirectMailResponse =
          defs.store.Response<defs.store.ImportZipCodeResult>;
        export type request = (
          params: saveDirectMailParam,
          formData: saveDirectMailFormData,
          options?: saveDirectMailOptions,
        ) => saveDirectMailResponse;
      }

      /**
       * 添加或更新次日达配送设置
       * /bo/store/delivery/nextDay/save
       */
      export namespace saveNextDay {
        export type saveNextDayParam = {
          /** storeId */
          storeId: number;

          /** zipCodes */
          zipCodes: Array<string>;
        };
        export type saveNextDayFormData = FormData;
        export type saveNextDayOptions = Record<string, any>;
        export type saveNextDayResponse =
          defs.store.Response<defs.store.ImportZipCodeResult>;
        export type request = (
          params: saveNextDayParam,
          formData: saveNextDayFormData,
          options?: saveNextDayOptions,
        ) => saveNextDayResponse;
      }

      /**
       * 添加或更新当日达配送设置
       * /bo/store/delivery/sameDay/save
       */
      export namespace saveSameDay {
        export type saveSameDayParam = {
          /** bypassTollRoad */
          bypassTollRoad: boolean;

          /** flashDistance */
          flashDistance: number;

          /** pickupDistance */
          pickupDistance: number;

          /** storeId */
          storeId: number;

          /** zipCodes */
          zipCodes: Array<string>;
        };
        export type saveSameDayFormData = FormData;
        export type saveSameDayOptions = Record<string, any>;
        export type saveSameDayResponse =
          defs.store.Response<defs.store.ImportZipCodeResult>;
        export type request = (
          params: saveSameDayParam,
          formData: saveSameDayFormData,
          options?: saveSameDayOptions,
        ) => saveSameDayResponse;
      }

      /**
        * 下载 ZipCode 模板
下载 XLSX 格式的导入模板，后续上传文件时应该以这个模板为基础
        * /bo/store/delivery/template/zipCode
        */
      export namespace downloadTemplate {
        export type downloadTemplateOptions = Record<string, any>;
        export type downloadTemplateResponse = any;
        export type request = (
          options?: downloadTemplateOptions,
        ) => downloadTemplateResponse;
      }

      /**
       * 移除 ZipCode 设置
       * /bo/store/delivery/zipCode/delete
       */
      export namespace zipCodeDelete {
        export type zipCodeDeleteParam = {
          /** storeId */
          storeId: number;

          /** zipCodes */
          zipCodes: Array<string>;
        };
        export type zipCodeDeleteOptions = Record<string, any>;
        export type zipCodeDeleteResponse = defs.store.Response<void>;
        export type request = (
          params: zipCodeDeleteParam,
          options?: zipCodeDeleteOptions,
        ) => zipCodeDeleteResponse;
      }

      /**
       * 查询 ZipCode 列表
       * /bo/store/delivery/zipCode/list
       */
      export namespace zipCodeList {
        export type zipCodeListParam = {
          /** storeId */
          storeId: number;

          /** zipCode */
          zipCode?: string;
        };
        export type zipCodeListOptions = Record<string, any>;
        export type zipCodeListResponse = defs.store.Response<Set<string>>;
        export type request = (
          params: zipCodeListParam,
          options?: zipCodeListOptions,
        ) => zipCodeListResponse;
      }

      /**
       * 查询门店配送设置
       * /bo/store/delivery/{storeId}
       */
      export namespace detail {
        export type detailPath = {
          /** storeId */
          storeId: number;
        };
        export type detailOptions = Record<string, any>;
        export type detailResponse =
          defs.store.Response<defs.store.BoStoreDeliveryDetailVo>;
        export type request = (
          path: detailPath,
          options?: detailOptions,
        ) => detailResponse;
      }
    }

    /**
     * 后台管理 - 门店介绍
     */
    export namespace boStoreIntroduction {
      /**
       * 查询门店介绍
       * /bo/store/introduction/list
       */
      export namespace list {
        export type listParam = {
          /** pageNum */
          pageNum?: number;

          /** pageSize */
          pageSize?: number;

          /** storeId */
          storeId?: number;

          /** storeName */
          storeName?: string;
        };
        export type listOptions = Record<string, any>;
        export type listResponse = defs.store.Response<
          defs.store.IPage<defs.store.BoStoreIntroductionVo>
        >;
        export type request = (
          params: listParam,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 修改门店介绍
       * /bo/store/introduction/update
       */
      export namespace update {
        export type updateBody = defs.store.BoStoreIntroductionVo;
        export type updateOptions = Record<string, any>;
        export type updateResponse = defs.store.Response<void>;
        export type request = (
          body: updateBody,
          options?: updateOptions,
        ) => updateResponse;
      }
    }

    /**
     * 后台管理 - ZipCode 管理
     */
    export namespace boZipCode {
      /**
       * 导入 zip_detail excel
       * /bo/zipcode/state/import
       */
      export namespace importState {
        export type importStateFormData = FormData;
        export type importStateOptions = Record<string, any>;
        export type importStateResponse = defs.store.Response;
        export type request = (
          formData: importStateFormData,
          options?: importStateOptions,
        ) => importStateResponse;
      }
    }
  }
}
