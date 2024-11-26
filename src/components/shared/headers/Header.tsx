import { FaRegBell, FaRegUser, FaStore } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { MdKeyboardVoice, MdOutlineShoppingCart } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo-new.png";
import { RootState } from "../../../redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowRightLong, FaRegCircleQuestion } from "react-icons/fa6";
import i_avatar from "../../../assets/icons/avatar.png";
import { AiOutlineMenu } from "react-icons/ai";

import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { clearCart } from "../../../redux/reducers/appReducer";
import { FormEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { language } from "../../../i18n/i18n";
import CateHeader from "../../compoment/CateHeader";
import ModalSideBar from "../../compoment/ModalSideBar";
import { PiPaintBrushHouseholdThin } from "react-icons/pi";
function Header() {
  const { t, i18n } = useTranslation();
  const auth = useSelector((state: RootState) => state.authReducer);
  const { cart } = useSelector((state: RootState) => state.appReducer);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("USER_TOKEN");
    localStorage.removeItem("CURRENT_USER");
    localStorage.removeItem("IS_LOGIN");
    dispatch(clearCart());
    window.location.reload();
  };
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSubmitSearch = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  };
  const handleChangeLanguage = (value: string) => {
    localStorage.setItem("language", value);
    i18n.changeLanguage(value);
    setCurrent_lang(value);
  };
  const [current_lang, setCurrent_lang] = useState("vi");
  useEffect(() => {
    const current_language = localStorage.getItem("language") ?? "vi";
    setCurrent_lang(current_language);
  }, []);
  return (
    <div className="h-header w-full z-[99]">
      <div className=" fixed top-0 left-0 right-0 bg-white z-10">
        <div className="bg-primary-500 text-white">
          <div className="xl:w-content w-full px-5 xl:px-0 mx-auto flex justify-between py-2 text-[14px]">
            <div className="flex gap-4">
              <Menu>
                <MenuHandler>
                  <Link to={"#"} className="flex gap-2 items-center">
                    <TbWorldCode className="text-lg" />
                    <span>{t("header.language")}:</span>
                    <span>
                      {language.find((i) => i.value == current_lang)?.label}
                    </span>
                  </Link>
                </MenuHandler>
                <MenuList>
                  {language.map((item) => {
                    return (
                      <MenuItem
                        key={item.value}
                        onClick={() => handleChangeLanguage(item.value)}
                      >
                        {item.label}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
              <div className="flex border-l pl-4 gap-2 items-center cursor-pointer">
                <FaRegCircleQuestion />
                <div>Hỗ trợ</div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div>Về chúng tôi</div>
              <div>Tin tức</div>
              <div>Liên hệ</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <FaStore />
                  <span>Cửa hàng của bạn</span>
                </div>
                <div className=" border-l pl-4">
                  <div className="flex items-center gap-2 bg-white text-primary-500 px-2 rounded-lg py-1">
                    {/* <MdLightMode /> */}
                    <PiPaintBrushHouseholdThin />
                    <span>Giao diện</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-gray-100 shadow-sm">
          <div className="xl:w-content w-full xl:px-0 px-5 m-auto flex justify-between items-center gap-8 ">
            <div className="flex items-center py-3 gap-5">
              <Link to={"/"} className="w-[91px]">
                <img className="w-full h-full" src={logo} alt="" />
              </Link>
              <div className=" hidden md:block">
                <CateHeader />
              </div>
            </div>
            <form
              onSubmit={handleSubmitSearch}
              className=" border rounded-xl border-gray-300  px-2 py-1 flex-1 hidden xl:flex  items-center bg-white "
            >
              <button type="submit">
                <IoSearchOutline className="text-[20px] text-primary-900" />
              </button>
              <input
                type="text"
                name="search"
                placeholder={t("header.search")}
                className="flex-1 px-2 py-1"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">
                <MdKeyboardVoice className="text-[20px] text-primary-500" />
              </button>
            </form>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 cursor-pointer text-primary-900 hover:text-primary-500 xl:hidden">
                <IoSearchOutline className="text-[20px] text-primary-900 hover:text-primary-500" />
                <div>{t("header.search")}</div>
              </div>
              <div className=" gap-3 hidden lg:flex">
                <Link
                  to={"#"}
                  className="flex gap-1 items-center text-primary-900 hover:text-primary-500"
                >
                  <div>
                    <FaRegBell className="text-[20px]" />
                  </div>
                  <span>{t("header.notification")}</span>
                </Link>
                <Link
                  to={"/cart"}
                  className="flex gap-1 items-center text-primary-900 hover:text-primary-500"
                >
                  <div className=" relative">
                    <MdOutlineShoppingCart className="text-[20px]" />
                    {cart && cart.length > 0 && (
                      <span className=" top-[-13px] right-[-8px] absolute bg-red-500 w-[20px] h-[20px] flex justify-center items-center rounded-full text-white text-sm">
                        {cart.length}
                      </span>
                    )}
                  </div>
                  <span>Giỏ hàng</span>
                </Link>
              </div>
              <div
                onClick={() => setIsOpenSidebar(!isOpenSidebar)}
                className="flex items-center text-3xl hover:text-primary-500 cursor-pointer lg:hidden"
              >
                <AiOutlineMenu />
              </div>
              <ModalSideBar
                isOpenSidebar={isOpenSidebar}
                setIsOpenSidebar={setIsOpenSidebar}
              />
              {auth.isLogin ? (
                <div className=" hidden gap-4 md:flex">
                  <Link
                    to={"/account/@" + auth.user.username + "/courses"}
                    className="flex gap-1 items-center  hover:text-primary-500 py-1 px-3 border border-primary-500 rounded-lg text-primary-500 hover:bg-primary-50"
                  >
                    <FaArrowRightLong />
                    <span>{t("header.learning")}</span>
                  </Link>

                  <Menu placement="bottom-end">
                    <MenuHandler>
                      <div className="flex items-center cursor-pointer">
                        <div className="w-[32px] h-[32px] rounded-full border shadow-sm ">
                          <img
                            className="w-full h-full rounded-full object-cover"
                            src={auth.user.avatar_url ?? i_avatar}
                            alt=""
                          />
                        </div>
                      </div>
                    </MenuHandler>
                    <MenuList>
                      <MenuItem>
                        <Link
                          to={"/account/@" + auth.user.username}
                          className="flex gap-2 items-center w-full"
                        >
                          <div className="w-[52px] h-[52px] border rounded-full">
                            <img
                              src={auth.user.avatar_url ?? i_avatar}
                              alt=""
                              className="rounded-full w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <div className="font-bold text-primary-500">
                              {auth.user.first_name + " " + auth.user.last_name}
                            </div>
                            <div className="text-sm mt-1">
                              @{auth.user.username}
                            </div>
                          </div>
                        </Link>
                      </MenuItem>
                      <MenuItem className="border-t border-b mt-2 p-0">
                        <Link
                          to={"/account/@" + auth.user.username}
                          className="w-full  block p-2"
                        >
                          {t("header.profile")}
                        </Link>
                      </MenuItem>
                      <MenuItem className="w-full p-0">
                        <Link className=" block p-2" to={"/blog/create"}>
                          {t("header.add_blog")}
                        </Link>
                      </MenuItem>
                      <MenuItem className="w-full p-0">
                        <Link className="block p-2" to={"/me/my-blogs"}>
                          {t("header.my_blog")}
                        </Link>
                      </MenuItem>
                      <MenuItem className="w-full p-0">
                        <Link className="block p-2" to={"/me/bookmark"}>
                          {t("header.save_blog")}
                        </Link>
                      </MenuItem>
                      <MenuItem className="w-full p-0">
                        <Link className="block p-2" to={"/settings"}>
                          {t("header.setting")}
                        </Link>
                      </MenuItem>
                      <MenuItem className="border-t w-full p-0">
                        <div
                          className="flex font-bold gap-2 items-center  p-2"
                          onClick={handleLogout}
                        >
                          <SlLogout />
                          {t("header.logout")}
                        </div>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              ) : (
                <div className="md:flex hidden gap-3">
                  <Menu>
                    <MenuHandler>
                      <button className="flex gap-1 items-center text-primary-900  py-1 px-3 rounded-lg">
                        <div>
                          <FaRegUser className="text-[20px]" />
                        </div>
                        <span>Tài khoản</span>
                      </button>
                    </MenuHandler>
                    <MenuList>
                      <MenuItem>
                        <Link className="" to={"/user/profile"}>
                          <div>Hồ sơ</div>
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link className="" to={"/register"}>
                          <div>Đăng ký</div>
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link className="" to={"/login"}>
                          <div>Đăng nhập</div>
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
