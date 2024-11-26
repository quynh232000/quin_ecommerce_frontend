import { Button, Select } from "@material-tailwind/react";

import { FaStore } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import ProductcartItem from "../../components/items/ProductcartItem";
import Pagination from "../../components/compoment/Pagination";

function OrderPage() {
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="text-2xl text-primary-500">Đơn hàng của bạn</div>
      <div className="flex justify-between gap-8">
        <div className="flex-2 w-50 relative">
          <div className=" absolute top-0 left-0 bottom-0 flex items-center pl-4 text-xl">
            <IoIosSearch />
          </div>
          <input
            type="text"
            className="border focus:border-primary-500 rounded-lg p-2 px-3 pl-12 w-full"
            placeholder="Tìm kiếm.."
          />
        </div>
        <div>
          <Select className=" outline-none" label="Sắp xếp theo">
            <option value="">Sắp xếp theo</option>
          </Select>
        </div>
      </div>
      <div className="border-b flex justify-between mt-5">
        <div className="flex">
          <div className="py-1 px-8 font-bold text-primary-500 border-b-2 border-primary-500 cursor-pointer hover:text-primary-500">
            Tất cả (12)
          </div>
          <div className="py-1 px-8 font-bold text-gray-500 border-b-2 border-transparent cursor-pointer hover:text-primary-500">
            Chờ xử lý
          </div>
          <div className="py-1 px-8 font-bold text-gray-500 border-b-2 border-transparent cursor-pointer hover:text-primary-500">
            Đang vận chuyển
          </div>
          <div className="py-1 px-8 font-bold text-gray-500 border-b-2 border-transparent cursor-pointer hover:text-primary-500">
            Đã giao
          </div>
          <div className="py-1 px-8 font-bold text-gray-500 border-b-2 border-transparent cursor-pointer hover:text-primary-500">
            Đã hủy
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {/* item */}
        <div className="bg-gray-50 p-5">
          <div className="flex flex-1 bg-gray-50 items-center border rounded-t-xl py-1 border-gray-300 px-3">
            <div className="w-50">
              <div className=" flex items-center gap-1">
                <div className="flex items-center gap-2 font-bold">
                  <div className="w-[32px] h-[32px] border rounded-full">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src="https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.ico"
                      alt=""
                    />
                  </div>
                  <Link to={"/shop"}>
                    <h3>Quin Shop</h3>
                  </Link>
                  <div className="ml-3">
                    <Link to={"/shop"}>
                      <div className="flex items-center gap-2 text-sm font-normal border px-2 py-1 hover:bg-primary-50 cursor-pointer bg-white rounded-xl">
                        <FaStore />
                        Xem Shop
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-end items-center gap-2 text-gray-600">
              <div className=" uppercase text-success-500 text-sm font-bold">
                Đặt hàng thành công
              </div>
              <span>|</span>
              <Link to={"/user/order-detail"}>
                <div className="text-sm hover:text-primary-500">
                  Chi tiết đơn hàng
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <ProductcartItem />
            <ProductcartItem />
          </div>
          <div className="border border-dashed border-primary-500">
            <div className="flex text-end items-center border-b border-gray-300">
              <div className="flex-1 border-r border-dashed border-primary-500 p-3 text-gray-600">
                Thành tiền
              </div>
              <div className="w-30 text-xl p-2 px-4 text-warning-500 font-bold">
                245.000đ
              </div>
            </div>
            <div className="flex text-end items-center">
              <div className="flex-1 border-r border-dashed border-primary-500 p-3 text-gray-600">
                Phương thức thanh toán
              </div>
              <div className="w-30  p-2 px-4 ">Thanh toán qua ngân hàng</div>
            </div>
          </div>
          <div className="flex justify-between mt-5 items-center">
            <div className="text-sm text-warning-500">Đánh giá sản phẩm nhận ngay 200 Xu</div>
            <div className="flex items-center justify-end gap-3">
                <Button className="bg-primary-500 normal-case py-2 hover:bg-primary-600">Đánh giá</Button>
                <Button className="border border-gray-300 bg-white text-gray-800 normal-case py-2">Liên hệ người bán</Button>
                <Button className="border border-gray-300 bg-white text-gray-800 normal-case py-2">Mua lại</Button>

            </div>
          </div>
        </div>
         {/* item */}
         <div className="bg-gray-50 p-5">
          <div className="flex flex-1 bg-gray-50 items-center border rounded-t-xl py-1 border-gray-300 px-3">
            <div className="w-50">
              <div className=" flex items-center gap-1">
                <div className="flex items-center gap-2 font-bold">
                  <div className="w-[32px] h-[32px] border rounded-full">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src="https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.ico"
                      alt=""
                    />
                  </div>
                  <Link to={"/shop"}>
                    <h3>Quin Shop</h3>
                  </Link>
                  <div className="ml-3">
                    <Link to={"/shop"}>
                      <div className="flex items-center gap-2 text-sm font-normal border px-2 py-1 hover:bg-primary-50 cursor-pointer bg-white rounded-xl">
                        <FaStore />
                        Xem Shop
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-end items-center gap-2 text-gray-600">
              <div className=" uppercase text-success-500 text-sm font-bold">
                Đặt hàng thành công
              </div>
              <span>|</span>
              <Link to={"/user/order-detail"}>
                <div className="text-sm hover:text-primary-500">
                  Chi tiết đơn hàng
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <ProductcartItem />
            <ProductcartItem />
          </div>
          <div className="border border-dashed border-primary-500">
            <div className="flex text-end items-center border-b border-gray-300">
              <div className="flex-1 border-r border-dashed border-primary-500 p-3 text-gray-600">
                Thành tiền
              </div>
              <div className="w-30 text-xl p-2 px-4 text-warning-500 font-bold">
                245.000đ
              </div>
            </div>
            <div className="flex text-end items-center">
              <div className="flex-1 border-r border-dashed border-primary-500 p-3 text-gray-600">
                Phương thức thanh toán
              </div>
              <div className="w-30  p-2 px-4 ">Thanh toán qua ngân hàng</div>
            </div>
          </div>
          <div className="flex justify-between mt-5 items-center">
            <div className="text-sm text-warning-500">Đánh giá sản phẩm nhận ngay 200 Xu</div>
            <div className="flex items-center justify-end gap-3">
                <Button className="bg-primary-500 normal-case py-2 hover:bg-primary-600">Đánh giá</Button>
                <Button className="border border-gray-300 bg-white text-gray-800 normal-case py-2">Liên hệ người bán</Button>
                <Button className="border border-gray-300 bg-white text-gray-800 normal-case py-2">Mua lại</Button>

            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <Pagination/>
      </div>
    </div>
  );
}

export default OrderPage;
