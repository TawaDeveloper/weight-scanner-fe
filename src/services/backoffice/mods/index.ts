import * as boChangeLogInterface from './boChangeLog';
import * as boContentInterface from './boContent';
import * as boContentCategoryInterface from './boContentCategory';
import * as configAppVersionInterface from './configAppVersion';
import * as configCustomerInterface from './configCustomer';
import * as configMemberInterface from './configMember';
import * as configPlatformFeeInterface from './configPlatformFee';
import * as configShoppingCartInterface from './configShoppingCart';
import * as prohibitedWordInterface from './prohibitedWord';
import * as testInterface from './test';
import * as webAdminInterface from './webAdmin';
import * as webDepartmentInterface from './webDepartment';
import * as webMenuInterface from './webMenu';
import * as webRoleInterface from './webRole';
import * as webUserInterface from './webUser';

export const backoffice = {
  boChangeLog: boChangeLogInterface,
  boContent: boContentInterface,
  boContentCategory: boContentCategoryInterface,
  configAppVersion: configAppVersionInterface,
  configCustomer: configCustomerInterface,
  configMember: configMemberInterface,
  configPlatformFee: configPlatformFeeInterface,
  configShoppingCart: configShoppingCartInterface,
  prohibitedWord: prohibitedWordInterface,
  test: testInterface,
  webAdmin: webAdminInterface,
  webDepartment: webDepartmentInterface,
  webMenu: webMenuInterface,
  webRole: webRoleInterface,
  webUser: webUserInterface,
};
