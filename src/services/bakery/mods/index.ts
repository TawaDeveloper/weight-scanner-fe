import * as lossFactorInterface from './lossFactor';
import * as orderInterface from './order';
import * as salesGoalInterface from './salesGoal';
import * as sapInterface from './sap';
import * as statisticalCommonInterface from './statisticalCommon';
import * as statisticalSalesCategoryInterface from './statisticalSalesCategory';
import * as statisticalSalesProductInterface from './statisticalSalesProduct';
import * as statisticalSalesStoreInterface from './statisticalSalesStore';
import * as accountInterface from './account';

export const bakery = {
  lossFactor: lossFactorInterface,
  order: orderInterface,
  salesGoal: salesGoalInterface,
  sap: sapInterface,
  statisticalCommon: statisticalCommonInterface,
  statisticalSalesCategory: statisticalSalesCategoryInterface,
  statisticalSalesProduct: statisticalSalesProductInterface,
  statisticalSalesStore: statisticalSalesStoreInterface,
  account: accountInterface,
};
