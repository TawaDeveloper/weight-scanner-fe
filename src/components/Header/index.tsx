import AreaIcon from '@/assets/area.png';
import ShopIcon from '@/assets/shop.png';
import DepartmentIcon from '@/assets/department.png';

import './index.less';
import { t } from 'i18next';
import { useRequest } from 'ahooks';
import { bakeryAPI } from '@/services';
const Header = () => {
  const { data } = useRequest(bakeryAPI.account.userInfo.request);
    return <div className="header">
    <div className="item">
      <div className="flex">
        <img src={AreaIcon} className="icon" alt="" />
        {t<string>(`pages.orderList.title0132`)}
      </div>
      <div className="value">{data && data.data && data?.data?.areaNameList ? data?.data?.areaNameList.slice(0, 3).toString() : '--'}</div>
    </div>
    <div className="item">
      <div className="flex">
        <img src={ShopIcon} className="icon" alt="" />
        {t<string>(`pages.orderList.title0089`)}
      </div>
      <div className="value">{data && data.data && data?.data?.storeNameList ? data?.data?.storeNameList.slice(0, 3).toString() : '--'}</div>
    </div>
    <div className="item">
      <div className="flex">
        <img src={DepartmentIcon} className="icon" alt="" />
        {t<string>(`pages.orderList.title0090`)}
      </div>
      <div className="value">{data && data.data && data?.data?.departmentNameList ? data?.data?.departmentNameList.slice(0, 3).toString() : '--'}</div>
    </div>
  </div>
}
export default Header;
