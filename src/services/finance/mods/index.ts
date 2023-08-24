import * as paymentInterface from './payment';
import * as settlementConfigInterface from './settlementConfig';
import * as settlementOrderInterface from './settlementOrder';
import * as settlementTaskInterface from './settlementTask';
import * as settlementTaskItemInterface from './settlementTaskItem';
import * as utilInterface from './util';

export const finance = {
  payment: paymentInterface,
  settlementConfig: settlementConfigInterface,
  settlementOrder: settlementOrderInterface,
  settlementTask: settlementTaskInterface,
  settlementTaskItem: settlementTaskItemInterface,
  util: utilInterface,
};
