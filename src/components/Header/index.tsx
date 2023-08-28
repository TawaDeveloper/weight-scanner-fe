import AreaIcon from '@/assets/area.png';
import ShopIcon from '@/assets/shop.png';
import DepartmentIcon from '@/assets/department.png';
import StaffIcon from '@/assets/staff.png';

import './index.less';
const Header = () => {
    return <div className="header">
    <div className="item">
      <div className="flex">
        <img src={AreaIcon} className="icon" alt="" />
        区域
      </div>
      <div className="value">区域名称</div>
    </div>
    <div className="item">
      <div className="flex">
        <img src={ShopIcon} className="icon" alt="" />
        门店
      </div>
      <div className="value">门店名称</div>
    </div>
    <div className="item">
      <div className="flex">
        <img src={DepartmentIcon} className="icon" alt="" />
        部门
      </div>
      <div className="value">部门名称</div>
    </div>
    <div className="item">
      <div className="flex">
        <img src={StaffIcon} className="icon" alt="" />
        员工
      </div>
      <div className="value">员工名称</div>
    </div>
  </div>
}
export default Header;
