import { FaArrowLeftLong } from "react-icons/fa6";
import TrackingItem from "../../components/items/TrackingItem";
import { Button } from "@material-tailwind/react";
import ProductcartItem from "../../components/items/ProductcartItem";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

function OrderDetailPage() {
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-600 hover:text-primary-500 cursor-pointer">
          <FaArrowLeftLong />
          Trở lại
        </div>
        <div className="flex-1 flex justify-end items-center gap-2 text-gray-600">
          <div className=" uppercase text-success-500 text-sm font-bold">
            Đặt hàng thành công
          </div>
          <span>|</span>
          <div className="text-sm hover:text-primary-500">Mã: QUIN1234</div>
        </div>
      </div>
      <div className="border-b border-dashed border-primary-500">
        <div className="grid grid-cols-5 pb-20 pt-5">
          <div className="flex flex-col gap-2  items-center relative">
            <TrackingItem />
            <div className="text-gray-600 absolute bottom-[-50%]">
              Đã đặt đơn hàng
            </div>
            <div className=" absolute w-50 h-[2px] bg-green-500 top-[50%] translate-y-[-50%] left-[75%]"></div>
          </div>
          <div className="flex flex-col gap-2  items-center relative">
            <TrackingItem />
            <div className="text-gray-600 absolute bottom-[-50%]">
              Đã đặt đơn hàng
            </div>
            <div className=" absolute w-50 h-[2px] bg-gray-500 top-[50%] translate-y-[-50%] left-[75%]"></div>
          </div>
          <div className="flex flex-col gap-2  items-center relative">
            <TrackingItem />
            <div className="text-gray-600 absolute bottom-[-50%]">
              Đã đặt đơn hàng
            </div>
            <div className=" absolute w-50 h-[2px] bg-gray-500 top-[50%] translate-y-[-50%] left-[75%]"></div>
          </div>
          <div className="flex flex-col gap-2  items-center relative">
            <TrackingItem />
            <div className="text-gray-600 absolute bottom-[-50%]">
              Đã đặt đơn hàng
            </div>
            <div className=" absolute w-50 h-[2px] bg-gray-500 top-[50%] translate-y-[-50%] left-[75%]"></div>
          </div>
          <div className="flex flex-col gap-2  items-center relative">
            <TrackingItem />
            <div className="text-gray-600 absolute bottom-[-50%]">
              Đã đặt đơn hàng
            </div>
            {/* <div className=" absolute w-50 h-[2px] bg-green-500 top-[50%] translate-y-[-50%] left-[75%]">
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold">Thông tin đơn hàng</div>
        <div className="py-4 flex flex-col gap-2">
          <div className="flex items-center">
            <div className="w-15 text-gray-600">Tên người nhận </div>
            <div>Võ Thị Hồng Nhung</div>
          </div>
          <div className="flex items-center">
            <div className="w-15 text-gray-600">Số điện thoại </div>
            <div>096745456</div>
          </div>
          <div className="flex items-center">
            <div className="w-15 text-gray-600">Địa chỉ</div>
            <div>11 đường số 9, phường Linh Xuân, Tp.Thủ Đức, Tp.HCM</div>
          </div>
          <div className="flex items-center">
            <div className="w-15 text-gray-600">Ghi chú </div>
            <div>Nằm cạnh bên karaoke Thị Mầu</div>
          </div>
        </div>
      </div>

      <div>
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
                Tổng tiền tiền
              </div>
              <div className="w-30  p-2 px-4 ">
                245.000đ
              </div>
            </div>
            <div className="flex text-end items-center border-b border-gray-300">
              <div className="flex-1 border-r border-dashed border-primary-500 p-3 text-gray-600">
                Phí vận chuyển
              </div>
              <div className="w-30  p-2 px-4 ">
                245.000đ
              </div>
            </div>
            <div className="flex text-end items-center border-b border-gray-300">
              <div className="flex-1 border-r border-dashed border-primary-500 p-3 text-gray-600">
                Voucher Shop
              </div>
              <div className="w-30 p-2 px-4 text-success-500">
                -245.000đ
              </div>
            </div>
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
            <div className="text-sm text-warning-500">
              Đánh giá sản phẩm nhận ngay 200 Xu
            </div>
            <div className="flex items-center justify-end gap-3">
              <Button className="bg-primary-500 normal-case py-2 hover:bg-primary-600">
                Đánh giá
              </Button>
              <Button className="border border-gray-300 bg-white text-gray-800 normal-case py-2">
                Liên hệ người bán
              </Button>
              <Button className="border border-gray-300 bg-white text-gray-800 normal-case py-2">
                Mua lại
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailPage;
