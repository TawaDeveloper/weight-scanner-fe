import * as boInventoryInterface from './boInventory';
import * as boInventoryReceiptInterface from './boInventoryReceipt';
import * as boShelfNodeInterface from './boShelfNode';
import * as boTruckBasketInterface from './boTruckBasket';
import * as boWarehouseInterface from './boWarehouse';

export const warehouse = {
  boInventory: boInventoryInterface,
  boInventoryReceipt: boInventoryReceiptInterface,
  boShelfNode: boShelfNodeInterface,
  boTruckBasket: boTruckBasketInterface,
  boWarehouse: boWarehouseInterface,
};
