import * as boOrderInterface from './boOrder';
import * as boRefundInterface from './boRefund';
import * as boReviewInterface from './boReview';
import * as boSettlementReportInterface from './boSettlementReport';
import * as orderTestInterface from './orderTest';
import * as rcpRecipeInterface from './rcpRecipe';
import * as rcpRecipeCategoryInterface from './rcpRecipeCategory';

export const order = {
  boOrder: boOrderInterface,
  boRefund: boRefundInterface,
  boReview: boReviewInterface,
  boSettlementReport: boSettlementReportInterface,
  orderTest: orderTestInterface,
  rcpRecipe: rcpRecipeInterface,
  rcpRecipeCategory: rcpRecipeCategoryInterface,
};
