type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace warehouse {
    export class APPWarehouseVo {
      /** address */
      address?: string;

      /** contact */
      contact?: string;

      /** contactPhone */
      contactPhone?: string;

      /** enName */
      enName?: string;

      /** id */
      id?: number;

      /** wmsNo */
      wmsNo?: string;

      /** zhChsName */
      zhChsName?: string;

      /** zhChtName */
      zhChtName?: string;
    }

    export class AppMatchCodeResponse {
      /** articleNumbers */
      articleNumbers?: Array<number>;

      /** locationNames */
      locationNames?: Array<string>;

      /** upcs */
      upcs?: Array<string>;
    }

    export class AppSearchInventoryResponse {
      /** articleNumber */
      articleNumber?: number;

      /** availableStock */
      availableStock?: number;

      /** imageURL */
      imageURL?: string;

      /** inventoryId */
      inventoryId?: number;

      /** locationName */
      locationName?: string;

      /** productId */
      productId?: number;

      /** productName */
      productName?: string;

      /** salesPrice */
      salesPrice?: number;

      /** upc */
      upc?: string;

      /** variantName */
      variantName?: string;
    }

    export class BDLZ {
      /** basketCode */
      basketCode?: string;

      /** orderId */
      orderId?: string;
    }

    export class BindDetail {
      /** basketNo */
      basketNo?: string;

      /** location */
      location?: number;

      /** orderId */
      orderId?: string;
    }

    export class BindInfoVO {
      /** details */
      details?: Array<defs.warehouse.BindDetail>;

      /** truckNo */
      truckNo?: string;
    }

    export class BindTruckDTO {
      /** truckCode */
      truckCode?: string;
    }

    export class BoCreateInventoryReceiptVo {
      /** category */
      category?: number;

      /** id */
      id?: number;

      /** receipts */
      receipts?: Array<defs.warehouse.Receipt>;

      /** wmsId */
      wmsId?: number;
    }

    export class BoCreateShelfNodeVo {
      /** category */
      category?: number;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** parentId */
      parentId?: number;

      /** remark */
      remark?: string;

      /** type */
      type?: number;

      /** wmsId */
      wmsId?: number;
    }

    export class BoCreateTruckBasketVo {
      /** count */
      count?: number;

      /** type */
      type?: number;

      /** wmsId */
      wmsId?: number;
    }

    export class BoInventoryReceiptDetailVo {
      /** availableStockChange */
      availableStockChange?: number;

      /** category */
      category?: number;

      /** currentAvailableStock */
      currentAvailableStock?: number;

      /** currentLockStock */
      currentLockStock?: number;

      /** id */
      id?: number;

      /** lockStockChange */
      lockStockChange?: number;

      /** nodeId */
      nodeId?: number;

      /** nodeName */
      nodeName?: string;

      /** productId */
      productId?: number;

      /** productImage */
      productImage?: string;

      /** productNameEn */
      productNameEn?: string;

      /** productNameSch */
      productNameSch?: string;

      /** productNameTch */
      productNameTch?: string;

      /** receiptNo */
      receiptNo?: string;

      /** totalStock */
      totalStock?: number;

      /** upc */
      upc?: string;

      /** updatedByName */
      updatedByName?: string;

      /** updatedTime */
      updatedTime?: string;
    }

    export class BoInventoryReceiptVo {
      /** category */
      category?: number;

      /** count */
      count?: number;

      /** id */
      id?: number;

      /** receiptNo */
      receiptNo?: string;

      /** status */
      status?: number;

      /** updatedByName */
      updatedByName?: string;

      /** updatedTime */
      updatedTime?: string;

      /** wmsId */
      wmsId?: number;

      /** wmsName */
      wmsName?: string;

      /** wmsNo */
      wmsNo?: string;
    }

    export class BoInventoryVO {
      /** articleNumber */
      articleNumber?: number;

      /** availableStock */
      availableStock?: number;

      /** id */
      id?: number;

      /** imageUrl */
      imageUrl?: string;

      /** lockStock */
      lockStock?: number;

      /** nodeId */
      nodeId?: number;

      /** nodeName */
      nodeName?: string;

      /** productId */
      productId?: number;

      /** productNameEn */
      productNameEn?: string;

      /** productNameSch */
      productNameSch?: string;

      /** productNameTch */
      productNameTch?: string;

      /** rate */
      rate?: number;

      /** saleableStock */
      saleableStock?: number;

      /** totalStock */
      totalStock?: number;

      /** upc */
      upc?: string;

      /** wmsId */
      wmsId?: number;

      /** wmsNo */
      wmsNo?: string;
    }

    export class BoShelfNodeDetailVo {
      /** category */
      category?: number;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** parentId */
      parentId?: number;

      /** parentName */
      parentName?: string;

      /** remark */
      remark?: string;

      /** type */
      type?: number;

      /** wmsId */
      wmsId?: number;
    }

    export class BoShelfNodeVo {
      /** id */
      id?: number;

      /** name */
      name?: string;

      /** path */
      path?: string;

      /** remark */
      remark?: string;

      /** type */
      type?: number;

      /** updatedByName */
      updatedByName?: string;

      /** updatedTime */
      updatedTime?: string;
    }

    export class BoShelfTreeViewVo {
      /** id */
      id?: number;

      /** name */
      name?: string;

      /** subTreeNodes */
      subTreeNodes?: Array<defs.warehouse.BoShelfTreeViewVo>;

      /** wmsId */
      wmsId?: number;
    }

    export class BoTruckBasketVo {
      /** id */
      id?: number;

      /** nameNo */
      nameNo?: string;

      /** type */
      type?: number;

      /** updatedByName */
      updatedByName?: string;

      /** updatedTime */
      updatedTime?: string;

      /** wmsId */
      wmsId?: number;

      /** wmsName */
      wmsName?: string;
    }

    export class BoUpdateShelfNodeSequenceVo {
      /** rules */
      rules?: Array<defs.warehouse.Rule>;
    }

    export class BoWarehouseVo {
      /** address */
      address?: string;

      /** contact */
      contact?: string;

      /** contactPhone */
      contactPhone?: string;

      /** enName */
      enName?: string;

      /** id */
      id?: number;

      /** status */
      status?: number;

      /** updatedByName */
      updatedByName?: string;

      /** updatedTime */
      updatedTime?: string;

      /** wmsNo */
      wmsNo?: string;

      /** zhChsName */
      zhChsName?: string;

      /** zhChtName */
      zhChtName?: string;
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

    export class JBLZ {
      /** location */
      location?: number;
    }

    export class JHDXQ {
      /** areaCode */
      areaCode?: string;

      /** basketNo */
      basketNo?: string;

      /** orderInfo */
      orderInfo?: defs.warehouse.PickingMainOrderDO;

      /** productList */
      productList?: Array<defs.warehouse.PickingSubOrderDO>;

      /** shelfCode */
      shelfCode?: string;
    }

    export class LocationInfoDetail {
      /** 篮子位置 */
      basketNo?: string;

      /** 数量 */
      quantity?: number;

      /** 重量 */
      weight?: number;
    }

    export class LocationInfoVO {
      /** 可放置的篮子位置 key:篮子位置 value:LocationInfoDetail */
      locationMap?: ObjectMap<any, defs.warehouse.LocationInfoDetail>;

      /** 商品信息 */
      productInfo?: defs.warehouse.PickingSubOrderDO;

      /** 需要放入数量 */
      quantity?: number;

      /** 需要放入重量 */
      weight?: number;
    }

    export class OrderLab {
      /** barTag */
      barTag?: string;

      /** barcode */
      barcode?: string;
    }

    export class PackageOrderRequestVo {
      /** height */
      height?: number;

      /** length */
      length?: number;

      /** numberOfFreshPackage */
      numberOfFreshPackage?: number;

      /** numberOfFrozenPackage */
      numberOfFrozenPackage?: number;

      /** numberOfPantryPackage */
      numberOfPantryPackage?: number;

      /** orderId */
      orderId?: string;

      /** unitType */
      unitType?: string;

      /** weight */
      weight?: number;

      /** width */
      width?: number;
    }

    export class PackageOrderResponseVo {
      /** customerName */
      customerName?: string;

      /** deliveryStartTime */
      deliveryStartTime?: number;

      /** deliveryType */
      deliveryType?: number;

      /** labelURLs */
      labelURLs?: Array<string>;

      /** numberOfFreshPackage */
      numberOfFreshPackage?: number;

      /** numberOfFrozenPackage */
      numberOfFrozenPackage?: number;

      /** numberOfPantryPackage */
      numberOfPantryPackage?: number;

      /** orderId */
      orderId?: string;

      /** orderLabs */
      orderLabs?: Array<defs.warehouse.OrderLab>;
    }

    export class PickingMainOrderDO {
      /** batchId */
      batchId?: string;

      /** createdTime */
      createdTime?: string;

      /** deleted */
      deleted?: number;

      /** deliveryId */
      deliveryId?: number;

      /** 配送供应商：0. 无 1. 自提 2. Doordash 3. Uber 4. Fedex */
      deliveryProvider?: number;

      /** 配送类型：0. 无 1. 自提 2. 当日达 3. 直邮 4. 自营配送 */
      deliveryType?: number;

      /** deliveryTypeDesc */
      deliveryTypeDesc?: string;

      /** dueDateTime */
      dueDateTime?: defs.warehouse.Timestamp;

      /** 快递类型：1. 普通快递 2. 加急快递 */
      expressType?: number;

      /** height */
      height?: number;

      /** id */
      id?: number;

      /** length */
      length?: number;

      /** numberOfFreshPackage */
      numberOfFreshPackage?: number;

      /** numberOfFrozenPackage */
      numberOfFrozenPackage?: number;

      /** numberOfPantryPackage */
      numberOfPantryPackage?: number;

      /** numberOfProduct */
      numberOfProduct?: number;

      /** numberOfProductCategory */
      numberOfProductCategory?: number;

      /** orderCreatedTime */
      orderCreatedTime?: defs.warehouse.Timestamp;

      /** orderId */
      orderId?: string;

      /** packageTs */
      packageTs?: number;

      /** packageUnitType */
      packageUnitType?: string;

      /** phoneNumber */
      phoneNumber?: string;

      /** pickNumberOfProduct */
      pickNumberOfProduct?: number;

      /** pickNumberOfProductCategory */
      pickNumberOfProductCategory?: number;

      /** pickUserId */
      pickUserId?: number;

      /** pickUserName */
      pickUserName?: string;

      /** remark */
      remark?: string;

      /** selfPickupCode */
      selfPickupCode?: string;

      /** selfPickupStatus */
      selfPickupStatus?: 'NA' | 'NOT_COMPLETE' | 'COMPLETE';

      /** status */
      status?: number;

      /** storeId */
      storeId?: number;

      /** updatedBy */
      updatedBy?: number;

      /** updatedTime */
      updatedTime?: string;

      /** weight */
      weight?: number;

      /** width */
      width?: number;
    }

    export class PickingSubOrderDO {
      /** articleNumber */
      articleNumber?: number;

      /** basketNo */
      basketNo?: string;

      /** createdTime */
      createdTime?: string;

      /** deleted */
      deleted?: number;

      /** id */
      id?: number;

      /** netWeight */
      netWeight?: number;

      /** netWeightUom */
      netWeightUom?: string;

      /** numberOfNetWeight */
      numberOfNetWeight?: number;

      /** numberOfPickingQuantity */
      numberOfPickingQuantity?: number;

      /** orderId */
      orderId?: string;

      /** productId */
      productId?: number;

      /** productMainPic */
      productMainPic?: string;

      /** productNameEn */
      productNameEn?: string;

      /** productNameSch */
      productNameSch?: string;

      /** productNameTch */
      productNameTch?: string;

      /** productType */
      productType?: number;

      /** quantity */
      quantity?: number;

      /** salePrice */
      salePrice?: number;

      /** shelfNodeNames */
      shelfNodeNames?: Array<string>;

      /** upc */
      upc?: string;

      /** updatedBy */
      updatedBy?: number;

      /** updatedTime */
      updatedTime?: string;

      /** variantId */
      variantId?: string;

      /** variantName */
      variantName?: string;
    }

    export class Receipt {
      /** count */
      count?: number;

      /** nodeName */
      nodeName?: string;

      /** productId */
      productId?: number;

      /** upc */
      upc?: string;
    }

    export class RemoveFromBasketDTO {
      /** location */
      location?: number;

      /** quantity */
      quantity?: number;

      /** upc */
      upc?: string;
    }

    export class RemoveProdcut {
      /** 需要移出的map 位置-> 数量 */
      locationToQuantityMap?: ObjectMap<any, number>;

      /** 商品信息 */
      product?: defs.warehouse.PickingSubOrderDO;

      /** 需要移出总数量 */
      quantity?: number;
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

    export class Rule {
      /** id */
      id?: number;

      /** sequence */
      sequence?: number;
    }

    export class SPFDLZL {
      /** basketNo */
      basketNo?: string;

      /** quantity */
      quantity?: number;

      /** upc */
      upc?: string;

      /** weight */
      weight?: number;
    }

    export class ShelveProductVo {
      /** count */
      count?: number;

      /** productId */
      productId?: number;

      /** upc */
      upc?: string;
    }

    export class SubmitDTO {
      /** 存货区barcode */
      areaCode?: string;

      /** 篮子编码 */
      basketNo?: string;
    }

    export class TJJH {
      /** 是否需要移出商品 */
      needRemove?: boolean;

      /** 移出商品列表 upc-> 移出商品信息 */
      removeProdcutMap?: ObjectMap<any, defs.warehouse.RemoveProdcut>;
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
  export namespace warehouse {
    /**
     * 后台管理 - 商品库存管理
     */
    export namespace boInventory {
      /**
        * 查看明细
查询库存变动明细
        * /bo/inventory/detail/{id}
        */
      export namespace detail {
        export type detailParam = {
          /** page */
          page?: number;

          /** size */
          size?: number;
        };
        export type detailPath = {
          /** id */
          id: number;
        };
        export type detailOptions = Record<string, any>;
        export type detailResponse = defs.warehouse.Response<
          defs.warehouse.IPage<defs.warehouse.BoInventoryReceiptDetailVo>
        >;
        export type request = (
          params: detailParam,
          path: detailPath,
          options?: detailOptions,
        ) => detailResponse;
      }

      /**
        * 下载商品库存模板
下载导入模板，后续上传文件时应该以这个模板为基础
        * /bo/inventory/download/inventory
        */
      export namespace downloadInventory {
        export type downloadInventoryOptions = Record<string, any>;
        export type downloadInventoryResponse = any;
        export type request = (
          options?: downloadInventoryOptions,
        ) => downloadInventoryResponse;
      }

      /**
        * 导入商品库存
导入商品和库存信息
        * /bo/inventory/import/inventory
        */
      export namespace importInventory {
        export type importInventoryFormData = FormData;
        export type importInventoryOptions = Record<string, any>;
        export type importInventoryResponse =
          defs.warehouse.Response<ObjectMap>;
        export type request = (
          formData: importInventoryFormData,
          options?: importInventoryOptions,
        ) => importInventoryResponse;
      }

      /**
        * 库存列表
按仓库编号、位置编码升序排列，支持翻页
        * /bo/inventory/list
        */
      export namespace list {
        export type listParam = {
          /** articleNumber */
          articleNumber?: number;

          /** locationNo */
          locationNo?: string;

          /** page */
          page?: number;

          /** productName */
          productName?: string;

          /** size */
          size?: number;

          /** upc */
          upc?: string;

          /** wmsId */
          wmsId?: number;
        };
        export type listOptions = Record<string, any>;
        export type listResponse = defs.warehouse.Response<
          defs.warehouse.IPage<defs.warehouse.BoInventoryVO>
        >;
        export type request = (
          params: listParam,
          options?: listOptions,
        ) => listResponse;
      }
    }

    /**
     * 后台管理 - 出入库管理
     */
    export namespace boInventoryReceipt {
      /**
       * 新建出入库单之前的检查
       * /bo/inventoryReceipt/beforeCheck
       */
      export namespace beforeCheck {
        export type beforeCheckParam = {
          /** category */
          category: number;

          /** count */
          count: number;

          /** nodeName */
          nodeName: string;

          /** productId */
          productId: number;

          /** wmsId */
          wmsId: number;
        };
        export type beforeCheckOptions = Record<string, any>;
        export type beforeCheckResponse = defs.warehouse.Response<void>;
        export type request = (
          params: beforeCheckParam,
          options?: beforeCheckOptions,
        ) => beforeCheckResponse;
      }

      /**
       * 增加或修改出入库单据
       * /bo/inventoryReceipt/createOrUpdate
       */
      export namespace createOrUpdate {
        export type createOrUpdateBody =
          defs.warehouse.BoCreateInventoryReceiptVo;
        export type createOrUpdateOptions = Record<string, any>;
        export type createOrUpdateResponse = defs.warehouse.Response<void>;
        export type request = (
          body: createOrUpdateBody,
          options?: createOrUpdateOptions,
        ) => createOrUpdateResponse;
      }

      /**
       * 查询出入库单据详情
       * /bo/inventoryReceipt/detail/{id}
       */
      export namespace detail {
        export type detailParam = {
          /** page */
          page?: number;

          /** size */
          size?: number;
        };
        export type detailPath = {
          /** id */
          id: number;
        };
        export type detailOptions = Record<string, any>;
        export type detailResponse = defs.warehouse.Response<
          defs.warehouse.IPage<defs.warehouse.BoInventoryReceiptDetailVo>
        >;
        export type request = (
          params: detailParam,
          path: detailPath,
          options?: detailOptions,
        ) => detailResponse;
      }

      /**
       * 查询出入库单据
       * /bo/inventoryReceipt/list
       */
      export namespace list {
        export type listParam = {
          /** category */
          category: number;

          /** endTime */
          endTime?: string;

          /** locationNo */
          locationNo?: string;

          /** page */
          page?: number;

          /** productName */
          productName?: string;

          /** receiptNo */
          receiptNo?: string;

          /** size */
          size?: number;

          /** startTime */
          startTime?: string;

          /** upc */
          upc?: string;

          /** userName */
          userName?: string;

          /** wmsId */
          wmsId?: number;
        };
        export type listOptions = Record<string, any>;
        export type listResponse = defs.warehouse.Response<
          defs.warehouse.IPage<defs.warehouse.BoInventoryReceiptVo>
        >;
        export type request = (
          params: listParam,
          options?: listOptions,
        ) => listResponse;
      }
    }

    /**
     * 后台管理 - 货架|存货管理
     */
    export namespace boShelfNode {
      /**
        * 删除记录
当前节点存在子节点或当前节点存在商品库存时无法删除
        * /bo/shelfNode/delete/{id}
        */
      export namespace remove {
        export type removePath = {
          /** id */
          id: number;
        };
        export type removeOptions = Record<string, any>;
        export type removeResponse = defs.warehouse.Response<void>;
        export type request = (
          path: removePath,
          options?: removeOptions,
        ) => removeResponse;
      }

      /**
        * 查询详情
查询货架和存货位的节点和位置
        * /bo/shelfNode/detail/{id}
        */
      export namespace detail {
        export type detailPath = {
          /** id */
          id: number;
        };
        export type detailOptions = Record<string, any>;
        export type detailResponse =
          defs.warehouse.Response<defs.warehouse.BoShelfNodeDetailVo>;
        export type request = (
          path: detailPath,
          options?: detailOptions,
        ) => detailResponse;
      }

      /**
        * 下载存货位模板
下载 CSV 格式的导入模板，后续上传文件时应该以这个模板为基础
        * /bo/shelfNode/download/shelfLocation
        */
      export namespace downloadShelfLocation {
        export type downloadShelfLocationOptions = Record<string, any>;
        export type downloadShelfLocationResponse = any;
        export type request = (
          options?: downloadShelfLocationOptions,
        ) => downloadShelfLocationResponse;
      }

      /**
        * 下载货架模板
下载 CSV 格式的导入模板，后续上传文件时应该以这个模板为基础
        * /bo/shelfNode/download/shelfNode
        */
      export namespace downloadShelfNode {
        export type downloadShelfNodeOptions = Record<string, any>;
        export type downloadShelfNodeResponse = any;
        export type request = (
          options?: downloadShelfNodeOptions,
        ) => downloadShelfNodeResponse;
      }

      /**
        * 导入存货位
导入存货位，会返回导出成功和导入失败的数据
        * /bo/shelfNode/import/shelfLocation
        */
      export namespace importShelfLocation {
        export type importShelfLocationParam = {
          /** warehouseId */
          warehouseId: number;
        };
        export type importShelfLocationFormData = FormData;
        export type importShelfLocationOptions = Record<string, any>;
        export type importShelfLocationResponse =
          defs.warehouse.Response<ObjectMap>;
        export type request = (
          params: importShelfLocationParam,
          formData: importShelfLocationFormData,
          options?: importShelfLocationOptions,
        ) => importShelfLocationResponse;
      }

      /**
        * 导入货架
导入货架，会返回导出成功和导入失败的数据
        * /bo/shelfNode/import/shelfNode
        */
      export namespace importShelfNode {
        export type importShelfNodeParam = {
          /** warehouseId */
          warehouseId: number;
        };
        export type importShelfNodeFormData = FormData;
        export type importShelfNodeOptions = Record<string, any>;
        export type importShelfNodeResponse =
          defs.warehouse.Response<ObjectMap>;
        export type request = (
          params: importShelfNodeParam,
          formData: importShelfNodeFormData,
          options?: importShelfNodeOptions,
        ) => importShelfNodeResponse;
      }

      /**
        * 货架和存货位列表
查询货架或者存货位列表，需要传递仓库 ID 和节点 ID，支持按照位置编码或节点名称进行模糊查询，支持分页
        * /bo/shelfNode/list
        */
      export namespace list {
        export type listParam = {
          /** name */
          name?: string;

          /** nodeCategory */
          nodeCategory: number;

          /** nodeId */
          nodeId?: number;

          /** page */
          page?: number;

          /** size */
          size?: number;

          /** status */
          status?: number;

          /** wmsId */
          wmsId?: number;
        };
        export type listOptions = Record<string, any>;
        export type listResponse = defs.warehouse.Response<
          defs.warehouse.IPage<defs.warehouse.BoShelfNodeVo>
        >;
        export type request = (
          params: listParam,
          options?: listOptions,
        ) => listResponse;
      }

      /**
        * 添加或更新记录
新增或更新货架和存货位的节点和位置
        * /bo/shelfNode/saveOrUpdate
        */
      export namespace saveOrUpdate {
        export type saveOrUpdateBody = defs.warehouse.BoCreateShelfNodeVo;
        export type saveOrUpdateOptions = Record<string, any>;
        export type saveOrUpdateResponse = defs.warehouse.Response<void>;
        export type request = (
          body: saveOrUpdateBody,
          options?: saveOrUpdateOptions,
        ) => saveOrUpdateResponse;
      }

      /**
        * 树形结构
查询货架和存货位的属性结构
        * /bo/shelfNode/treeView
        */
      export namespace treeView {
        export type treeViewParam = {
          /** category */
          category: number;

          /** parentId */
          parentId?: number;
        };
        export type treeViewOptions = Record<string, any>;
        export type treeViewResponse = defs.warehouse.Response<
          Array<defs.warehouse.BoShelfTreeViewVo>
        >;
        export type request = (
          params: treeViewParam,
          options?: treeViewOptions,
        ) => treeViewResponse;
      }

      /**
        * 更新排序
更新各级节点的排序
        * /bo/shelfNode/updateSequence
        */
      export namespace updateSequence {
        export type updateSequenceBody =
          defs.warehouse.BoUpdateShelfNodeSequenceVo;
        export type updateSequenceOptions = Record<string, any>;
        export type updateSequenceResponse = defs.warehouse.Response<void>;
        export type request = (
          body: updateSequenceBody,
          options?: updateSequenceOptions,
        ) => updateSequenceResponse;
      }
    }

    /**
     * 后台管理 - 拣货篮子管理
     */
    export namespace boTruckBasket {
      /**
       * 新增拣货车或者篮子
       * /bo/truckBasket/create
       */
      export namespace create {
        export type createBody = defs.warehouse.BoCreateTruckBasketVo;
        export type createOptions = Record<string, any>;
        export type createResponse = defs.warehouse.Response<void>;
        export type request = (
          body: createBody,
          options?: createOptions,
        ) => createResponse;
      }

      /**
       * 删除拣货车或者篮子
       * /bo/truckBasket/delete/{id}
       */
      export namespace remove {
        export type removePath = {
          /** id */
          id: number;
        };
        export type removeOptions = Record<string, any>;
        export type removeResponse = defs.warehouse.Response<void>;
        export type request = (
          path: removePath,
          options?: removeOptions,
        ) => removeResponse;
      }

      /**
        * 拣货车或者篮子列表
查询拣货车或篮子列表
        * /bo/truckBasket/list
        */
      export namespace list {
        export type listParam = {
          /** nameNo */
          nameNo?: string;

          /** page */
          page?: number;

          /** size */
          size?: number;

          /** status */
          status?: number;

          /** type */
          type?: number;

          /** wmsId */
          wmsId?: number;
        };
        export type listOptions = Record<string, any>;
        export type listResponse = defs.warehouse.Response<
          defs.warehouse.IPage<defs.warehouse.BoTruckBasketVo>
        >;
        export type request = (
          params: listParam,
          options?: listOptions,
        ) => listResponse;
      }
    }

    /**
     * 后台管理 - 仓库管理
     */
    export namespace boWarehouse {
      /**
        * 新增仓库
新建仓库时仓库编号要唯一，仓库名称支持不同语言的输入。仓库状态分为启用和禁用，禁用状态下其它的模块无法查询
        * /bo/warehouse/create
        */
      export namespace create {
        export type createBody = defs.warehouse.BoWarehouseVo;
        export type createOptions = Record<string, any>;
        export type createResponse = defs.warehouse.Response<void>;
        export type request = (
          body: createBody,
          options?: createOptions,
        ) => createResponse;
      }

      /**
        * 仓库列表
按仓库编号升序排列，支持按仓库名称模糊查询，按仓库编号精确查询，支持翻页。
        * /bo/warehouse/list
        */
      export namespace list {
        export type listParam = {
          /** name */
          name?: string;

          /** page */
          page?: number;

          /** size */
          size?: number;

          /** wmsNo */
          wmsNo?: string;
        };
        export type listOptions = Record<string, any>;
        export type listResponse = defs.warehouse.Response<
          defs.warehouse.IPage<defs.warehouse.BoWarehouseVo>
        >;
        export type request = (
          params: listParam,
          options?: listOptions,
        ) => listResponse;
      }

      /**
       * 启用或禁用仓库
       * /bo/warehouse/status/{id}
       */
      export namespace status {
        export type statusPath = {
          /** id */
          id: number;
        };
        export type statusOptions = Record<string, any>;
        export type statusResponse = defs.warehouse.Response<void>;
        export type request = (
          path: statusPath,
          options?: statusOptions,
        ) => statusResponse;
      }

      /**
        * 更新仓库
更新仓库时仓库编号要唯一，仓库名称支持不同语言的输入。仓库状态分为启用和禁用，禁用状态下其它的模块无法查询
        * /bo/warehouse/update
        */
      export namespace update {
        export type updateBody = defs.warehouse.BoWarehouseVo;
        export type updateOptions = Record<string, any>;
        export type updateResponse = defs.warehouse.Response<void>;
        export type request = (
          body: updateBody,
          options?: updateOptions,
        ) => updateResponse;
      }
    }
  }
}
