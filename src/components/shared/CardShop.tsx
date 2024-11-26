import { Button } from "@material-tailwind/react";
import { FaPlus, FaStoreAlt } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { Link } from "react-router-dom";

function CardShop() {
  return (
    <div className="flex border rounded-lg p-5 px-[24px]">
      <div className="w-40 border-r flex gap-5">
        <div className="w-[168px] h-[168px] relative">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://cdn.hpdecor.vn/wp-content/uploads/2022/04/shop-my-pham-25m2-01.jpg"
            alt=""
          />
          <div className=" absolute top-[85%] flex justify-center left-0 right-0 px-5">
            <button className="w-full text-center bg-primary-500 text-white px-2 py-1 rounded-md flex justify-center items-center gap-1">
            <FaPlus /> Theo dõi
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-col gap-2">
          <div>
            <h3 className=" uppercase  font-bold text-xl">QUINSHOP</h3>
            <div className="flex gap-2 items-center">
              <div className="w-[10px] h-[10px] rounded-full bg-success-500"></div>
              <span className="text-gray-500 text-sm">Đang hoạt động</span>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <Button className="flex items-center gap-2 bg-primary-50 text-primary-500 border-primary-500 border px-4 rounded-full py-2">
              <IoIosChatbubbles className="text-xl" />
              <span>Chat ngay</span>
            </Button>

            <Link to={"/shop"}>
            <Button className="flex items-center gap-2 bg-primary-50 text-gray-500 border-gray-500 border px-4 rounded-full py-2">
              <FaStoreAlt className="text-xl" />
              <span>Xem Shop</span>
            </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-around">
        <div className="grid grid-cols-3 gap-8">
          <div className="flex justify-between px-2">
            <div>Đánh giá</div>
            <div className="text-warning-500">234</div>
          </div>
          <div className="flex justify-between px-2">
            <div>Số lượng đã bán</div>
            <div className="text-warning-500">234</div>
          </div>
          <div className="flex justify-between px-2">
            <div>Voucher giảm giá</div>
            <div className="text-warning-500">234</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex justify-between px-2">
            <div>Người theo dõi</div>
            <div className="text-warning-500">234</div>
          </div>
          <div className="flex justify-between px-2">
            <div>Sản phẩm</div>
            <div className="text-warning-500">234</div>
          </div>
          <div className="flex justify-between px-2">
            <div>Tham gia</div>
            <div className="text-warning-500">234</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardShop;
