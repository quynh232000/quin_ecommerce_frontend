import { CiBellOn, CiEdit, CiHeart, CiLock, CiLogout } from "react-icons/ci";
import i_profile_xu from "../../assets/images/profile_xu.png";
import {
  MdChevronRight,
  MdOutlineDiscount,
  MdOutlineLocationOn,
} from "react-icons/md";
import { FaCoins, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoBagHandleOutline, IoHelpCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
const dataNavs = [
  { id: 1, title: "Hồ sơ", url: "/user/profile", icon: <FaRegUser /> },
  { id: 2, title: "Đổi mật khẩu", url: "/user/password", icon: <CiLock /> },
  {
    id: 3,
    title: "Địa chỉ",
    url: "/user/address",
    icon: <MdOutlineLocationOn />,
  },
  {
    id: 7,
    title: "Đơn hàng",
    url: "/user/order",
    icon: <IoBagHandleOutline />,
  },
  { id: 4, title: "Thông báo", url: "/user/notifications", icon: <CiBellOn /> },
  {
    id: 5,
    title: "Sản phẩm yêu thích",
    url: "/user/favourite",
    icon: <CiHeart />,
  },
  {
    id: 6,
    title: "Kho voucher",
    url: "/user/voucher",
    icon: <MdOutlineDiscount />,
  },
  {
    id: 10,
    title: "Quin Xu",
    url: "/user/coins",
    icon: <FaCoins />,
  },
  { id: 8, title: "Hỗ trợ", url: "/user/help", icon: <IoHelpCircleOutline /> },
  { id: 9, title: "Đăng xuất", url: "/user/logout", icon: <CiLogout /> },
];
function ProfileSidebar() {
    const [navActive ,setNavActive] = useState(1)
    const {user} = useSelector((state:RootState)=> state.authReducer)
  return (
    <div className="">
      <div className="p-5 flex gap-2 ">
        <div className="w-[52px] h-[52px]">
          <img
            className="w-full h-full rounded-full object-cover"
            src={user.avatar_url??"https://img.freepik.com/free-vector/cute-kid-girl-holding-bubble-milk-tea-hand-drawn-cartoon-character-illustration_56104-1857.jpg"}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="font-bold">{user.full_name}</div>
          <Link to={'/user/profile'} className="flex items-center gap-2 text-primary-500 hover:text-primary-600">
            <CiEdit className="text-xl" />
            <div>Chỉnh sửa</div>
          </Link>
        </div>
      </div>
      <div className="flex bg-primary-50 justify-between p-3">
        <div className="flex flex-col justify-between">
          <div className="font-bold text-gray-900">Xu của bạn</div>
          <div>
            <div className="font-bold text-xl text-primary-500">{user.total_coin ??0}</div>
          </div>
          <Link to={"/user/coins"} className="flex items-center gap-2 text-sm text-primary-500">
            Xem chi tiết <MdChevronRight />
          </Link>
        </div>
        <div>
          <img className="w-[112px] object-cover" src={i_profile_xu} alt="" />
        </div>
      </div>
      <div className="flex flex-col  py-4">
       
        {dataNavs.map((item) => {
          return (
            <Link   key={item.id} to={item.url} onClick={()=>setNavActive(item.id)}>
              <div
              
                className={`flex items-center gap-2 
                     px-4 py-2 border-l-4  hover:border-primary-500  
                  hover:bg-primary-100 hover:text-primary-500 `+ (item.id ==navActive ?' border-primary-500 bg-primary-100 text-primary-500':' border-transparent')}
              >
                <div className="text-xl">{item.icon}</div>
                <div>{item.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileSidebar;
