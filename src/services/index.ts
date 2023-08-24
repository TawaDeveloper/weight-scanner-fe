import { order } from './order';
import { backoffice } from './backoffice';
import { account } from './account';
import { promotion } from './promotion';
import { product } from './product';
import { store } from './store';
import { search } from './search';
import { warehouse } from './warehouse';
import { message } from './message';
import { finance } from './finance';

export const orderAPI = order;
export const backofficeAPI = backoffice;
export const accountAPI = account;
export const promotionAPI = promotion;
export const productAPI = product;
export const storeAPI = store;
export const searchAPI = search;
export const warehouseAPI = warehouse;
export const messageAPI = message;
export const financeAPI = finance;

export default {
  order,
  backoffice,
  account,
  promotion,
  product,
  store,
  search,
  warehouse,
  message,
  finance,
};
