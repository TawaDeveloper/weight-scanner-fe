import * as adminInterface from './admin';
import * as lossFactorInterface from './lossFactor';
import * as orderInterface from './order';
import * as sapInterface from './sap';
import * as statisticsCommonInterface from './statisticsCommon';
import * as statisticsProductSalesInterface from './statisticsProductSales';
import * as statisticsStoreSalesInterface from './statisticsStoreSales';

export const bakery = {
  admin: adminInterface,
  lossFactor: lossFactorInterface,
  order: orderInterface,
  sap: sapInterface,
  statisticsCommon: statisticsCommonInterface,
  statisticsProductSales: statisticsProductSalesInterface,
  statisticsStoreSales: statisticsStoreSalesInterface,
};
