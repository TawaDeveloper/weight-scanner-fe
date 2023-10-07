import * as accountInterface from './account';
import * as lossFactorInterface from './lossFactor';
import * as orderInterface from './order';
import * as permissionInterface from './permission';
import * as salesGoalInterface from './salesGoal';
import * as sapInterface from './sap';
import * as statisticalCommonInterface from './statisticalCommon';
import * as statisticalSalesCategoryInterface from './statisticalSalesCategory';
import * as statisticalSalesProductInterface from './statisticalSalesProduct';
import * as statisticalSalesStoreInterface from './statisticalSalesStore';
import * as testInterface from './test';

export const bakery = {
  account: accountInterface,
  lossFactor: lossFactorInterface,
  order: orderInterface,
  permission: permissionInterface,
  salesGoal: salesGoalInterface,
  sap: sapInterface,
  statisticalCommon: statisticalCommonInterface,
  statisticalSalesCategory: statisticalSalesCategoryInterface,
  statisticalSalesProduct: statisticalSalesProductInterface,
  statisticalSalesStore: statisticalSalesStoreInterface,
  test: testInterface,
};
