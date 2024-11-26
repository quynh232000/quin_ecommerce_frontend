import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import i_cash from "../assets/images/payment/cash.png";
import i_vnpay from "../assets/images/payment/vnpay.png";
import i_mb from "../assets/images/payment/mb.png";
import { MdOutlineDiscount } from "react-icons/md";
import { Button, Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import VoucherItem from "../components/items/VoucherItem";
import { FaCoins } from "react-icons/fa";
import ProductcartItem from "../components/items/ProductcartItem";

function CheckoutPage() {
  return (
    <div className="w-content m-auto flex flex-col gap-[40px] py-[40px]">
      <div className="border rounded-lg p-5 py-7 shadow-md flex flex-col gap-3 relative overflow-hidden ">
        <div className="bg-custom-repeating-gradient bg-custom-x bg-custom-size h-[3px] absolute top-0 left-0 right-0"></div>
        <div className="flex items-center gap-2">
          <IoLocationOutline className="text-xl text-primary-500" />
          <span className="font-bold text-primary-500">Địa chỉ nhận hàng</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div>Nguyễn Thị Hằng Nga - 0357703500</div>
            <span className="text-gray-300">|</span>
            <div className="text-gray-600">
              Xã Thái Sơn - Huyện Bảo Lâm - Tỉnh Cao Bằng
            </div>
            <div className="text-sm border border-primary-500 bg-primary-50 rounded-full px-2 text-primary-500">
              Mặc định
            </div>
          </div>
          <div>
            <Link to={"/profile/address"}>
              <div className="text-warning-500 font-bold text-sm cursor-pointer hover:accent-warning-700">
                Thay đổi
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <div className=" flex-1 flex flex-col gap-5">
          <div>
            <div className="flex   font-bold text-gray-600 border py-3 px-8 rounded-lg">
              <div className="w-60">
                <div className="font-bold text-gray-600">
                  Tất cả (2 sản phẩm)
                </div>
              </div>
              <div className="flex-1 grid grid-cols-12">
                <div className="col-span-4 text-center">Giá</div>
                <div className="col-span-4 text-center">Số lượng</div>
                <div className="col-span-4 text-end">Tổng tiền</div>
              </div>
            </div>
          </div>
          {/* shop */}
          <div className="flex flex-col gap-2 border rounded-lg shadow-sm">
            <div className="flex flex-1 bg-gray-50 items-center border-b rounded-t-lg py-1 px-3">
              <div className="">
                <div className=" flex items-center gap-1">
                  <div className="flex items-center gap-2 font-bold">
                    <div className="w-[32px] h-[32px] border rounded-full">
                      <img
                        className="w-full h-full rounded-full object-cover"
                        src="https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.ico"
                        alt=""
                      />
                    </div>
                    <Link to={"#"}>
                      <h3>Quin Shop</h3>
                    </Link>
                    <div className="text-gray-600 font-normal ml-2">
                      (5 sản phẩm)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4 px-3">
              <ProductcartItem />
              <ProductcartItem />
              <ProductcartItem />
            </div>
            <div className="bg-primary-50 border-t p-5 border-dashed border-primary-500 flex gap-5">
              <div className="w-40 border-r border-dashed border-primary-500 pr-5">
                <label htmlFor="">Lời nhắn:</label>
                <div>
                  <textarea
                    className="w-full border rounded-sm p-2"
                    rows={3}
                    name=""
                    placeholder="Lưu ý cho người bán.."
                    id=""
                  ></textarea>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2 border-b border-dashed border-primary-500 h-fit pb-3">
                <div className="flex items-center justify-between">
                  <div className="text-gray-700">Voucher Shop:</div>
                  <div className="text-success-500">-50.000d</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-gray-700">Phí vận chuyển:</div>
                  <div className="text-warning-500">32.000d</div>
                </div>
                <div className="flex justify-end items-center border-t border-dashed border-primary-500 pt-3">
                  <div>Tổng số tiền (2 sản phẩm):</div>
                  <div className="pl-5 text-center text-primary-500 font-bold text-xl">
                    560.000đ
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* shop */}
          <div className="flex flex-col gap-2 border rounded-lg shadow-sm">
            <div className="flex flex-1 bg-gray-50 items-center border-b rounded-t-lg py-1 px-3">
              <div className="">
                <div className=" flex items-center gap-1">
                  <div className="flex items-center gap-2 font-bold">
                    <div className="w-[32px] h-[32px] border rounded-full">
                      <img
                        className="w-full h-full rounded-full object-cover"
                        src="https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.ico"
                        alt=""
                      />
                    </div>
                    <Link to={"#"}>
                      <h3>Quin Shop</h3>
                    </Link>
                    <div className="text-gray-600 font-normal ml-2">
                      (5 sản phẩm)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4 px-3">
              <ProductcartItem />
              <ProductcartItem />
            </div>
            <div className="bg-primary-50 border-t p-5 border-dashed border-primary-500 flex gap-5">
              <div className="w-40 border-r border-dashed border-primary-500 pr-5">
                <label htmlFor="">Lời nhắn:</label>
                <div>
                  <textarea
                    className="w-full border rounded-sm p-2"
                    rows={3}
                    name=""
                    placeholder="Lưu ý cho người bán.."
                    id=""
                  ></textarea>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2 border-b border-dashed border-primary-500 h-fit pb-3">
                <div className="flex items-center justify-between">
                  <div className="text-gray-700">Voucher Shop:</div>
                  <div className="text-success-500">-50.000d</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-gray-700">Phí vận chuyển:</div>
                  <div className="text-warning-500">32.000d</div>
                </div>
                <div className="flex justify-end items-center border-t border-dashed border-primary-500 pt-3">
                  <div>Tổng số tiền (2 sản phẩm):</div>
                  <div className="pl-5 text-center text-primary-500 font-bold text-xl">
                    560.000đ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border rounded-lg shadow-sm p-5 w-35 flex flex-col gap-2 h-fit">
          <div>
            <div className="text-gray-700 font-bold">
              Phương thức thanh toán
            </div>
            <div className="flex flex-col gap-2 py-2">
              <div className="flex items-center gap-2 text-gray-500 p-2 border rounded-lg hover:shadow-sm cursor-pointer hover:border-primary-500 hover:text-primary-500 hover:bg-primary-50">
                <div className="w-[28px] h-[28px] flex items-center">
                  <img src={i_cash} alt="" className="w-full object-cover" />
                </div>
                <div>Thanh toán khi nhận hàng</div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 p-2 border rounded-lg hover:shadow-sm cursor-pointer hover:border-primary-500 hover:text-primary-500 hover:bg-primary-50">
                <div className="w-[28px] h-[28px] flex items-center">
                  <img src={i_vnpay} alt="" className="w-full object-cover" />
                </div>
                <div>Thanh toán VNPAY</div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 p-2 border rounded-lg hover:shadow-sm cursor-pointer hover:border-primary-500 hover:text-primary-500 hover:bg-primary-50">
                <div className="w-[28px] h-[28px] flex items-center">
                  <img src={i_mb} alt="" className="w-full object-cover" />
                </div>
                <div>Thanh toán ngân hàng</div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="text-gray-700 font-bold flex items-center gap-2">
                <MdOutlineDiscount className="text-primary-500" /> Quin Voucher
              </div>
              <div className="text-warning-500 text-sm font-bold">
                <Menu placement="bottom-end">
                  <MenuHandler>
                    <Button className="bg-whiht text-warning-500 normal-case shadow-none hover:shadow-none">
                      Chọn Voucher
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    <div className="min-w-[360px] flex flex-col gap-2 h-[360px] overflow-y-scroll scrollbar_custom">
                      <VoucherItem />
                      <VoucherItem />
                      <VoucherItem />
                      <VoucherItem />
                      <VoucherItem />
                    </div>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <div className="text-gray-700 font-bold flex items-center gap-2">
                <FaCoins className="text-primary-500" /> Quin Xu
              </div>
              <div className="text-gray-500">Không thể sử dụng</div>
            </div>
            <div className="flex gap-2 items-center my-2">
              <div className="border rounded-lg  flex-1">
                <input
                  type="text"
                  placeholder="0"
                  className="w-full p-2 px-3 rounded-lg"
                />
              </div>
              <Button className=" normal-case bg-gray-500">Áp dụng</Button>
            </div>
          </div>
          <div className="border-t py-5 flex flex-col gap-2">
            <div className="flex justify-between items-center  ">
              <div className="text-gray-600">Tổng tiền hàng</div>
              <div>1.200.000đ</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-gray-600">Tổng phí vận chuyển</div>
              <div>200.000đ</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-gray-600">Tổng Voucher giảm</div>
              <div>10.000đ</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-gray-600">Tổng Xu áp dụng</div>
              <div>5.000đ</div>
            </div>

            <div className="flex justify-between items-center mt-5">
              <div className="text-gray-600">Tổng thanh toán</div>
              <div className="text-3xl  text-primary-500">2.600.000đ</div>
            </div>
          </div>
          <div className="border-t pt-5">
            <Link to={"/payment"}>
              <Button className="w-full bg-primary-500 normal-case text-sm hover:bg-primary-600">
                Đặt hàng
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
