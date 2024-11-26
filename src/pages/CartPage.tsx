import { Button, Checkbox } from "@material-tailwind/react";
import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { LuMinus, LuPlus } from "react-icons/lu";
import { MdOutlineDiscount } from "react-icons/md";

function CartPage() {
  return (
    <div className="w-content m-auto flex flex-col gap-[40px] py-[40px]">
      <div className="flex   font-bold text-gray-600 border py-3 px-8 rounded-lg">
        <div className="w-50">
          <div className="font-bold text-gray-600">Tất cả (2 sản phẩm)</div>
        </div>
        <div className="flex-1 grid grid-cols-12">
          <div className="col-span-3 text-center">Giá</div>
          <div className="col-span-4 text-center">Số lượng</div>
          <div className="col-span-3 text-center">Tổng tiền</div>
          <div className="col-span-2 text-end ">Xóa</div>
        </div>
      </div>
      <div className="flex flex-col gap-5   border py-3 px-4 rounded-lg">
        {/* shop */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-1 bg-gray-50 items-center border rounded-t-xl px-3">
            <div className="w-50">
              <div className=" flex items-center gap-1">
                <div>
                  <Checkbox className="pl-0 ml-0" crossOrigin={1} />
                </div>
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
                </div>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-12">
              {/* <div className="col-span-3">Giá</div>
            <div className="col-span-4">Số lượng</div>
            <div className="col-span-3">Tổng tiền</div> */}
              <div className="col-span-12 flex justify-end text-gray-600">
                <FaTrashCan />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-1  items-center  px-3">
              <div className="w-50">
                <div className=" flex items-center gap-1">
                  <div>
                    <Checkbox className="pl-0 ml-0" crossOrigin={1} />
                  </div>
                  <div className="flex items-center ">
                    <div className="w-[90px] h-[90px] border rounded-lg p-1">
                      <img
                        className="w-full h-full object-cover rounded-lg"
                        src="https://lamia.com.vn/storage/vest/322701978-5343207062449814-8945956417939669422-n-1554088121696206.jpg"
                        alt=""
                      />
                    </div>
                    <Link to={"/detail"} className="flex-1 px-4">
                      <h2 className="line-clamp-2 hover:text-primary-500">
                        Điện thoại Iphone 15 Pro mới ra mắt với cam đa chiều
                        sang trọng, hứa hẹn bùng nổ
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-12 items-center">
                <div className="col-span-3 text-gray-600 font-bold text-center">
                  100.000d
                </div>
                <div className="col-span-4 flex items-center justify-center">
                  <div>
                    <div className="flex items-center border border-gray-300">
                      <button className="p-2 hover:bg-primary-100 border-r border-gray-300">
                        <LuMinus />
                      </button>
                      <div className="w-[74px] h-full ">
                        <input
                          type="text"
                          className="w-full text-center   h-full "
                          value={1}
                          min={1}
                        />
                      </div>
                      <button className="p-2 hover:bg-primary-100 border-l border-gray-300">
                        <LuPlus />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 text-center text-primary-500 font-bold">
                  100.000d
                </div>
                <div className="col-span-2 flex justify-end text-gray-600">
                  <FaTrashCan />
                </div>
              </div>
            </div>
            <div className="flex flex-1  items-center  px-3">
              <div className="w-50">
                <div className=" flex items-center gap-1">
                  <div>
                    <Checkbox className="pl-0 ml-0" crossOrigin={1} />
                  </div>
                  <div className="flex items-center ">
                    <div className="w-[90px] h-[90px] border rounded-lg p-1">
                      <img
                        className="w-full h-full object-cover rounded-lg"
                        src="https://lamia.com.vn/storage/vest/322701978-5343207062449814-8945956417939669422-n-1554088121696206.jpg"
                        alt=""
                      />
                    </div>
                    <Link to={"/detail"} className="flex-1 px-4">
                      <h2 className="line-clamp-2 hover:text-primary-500">
                        Điện thoại Iphone 15 Pro mới ra mắt với cam đa chiều
                        sang trọng, hứa hẹn bùng nổ
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-12 items-center">
                <div className="col-span-3 text-gray-600 font-bold text-center">
                  100.000d
                </div>
                <div className="col-span-4 flex items-center justify-center">
                  <div>
                    <div className="flex items-center border border-gray-300">
                      <button className="p-2 hover:bg-primary-100 border-r border-gray-300">
                        <LuMinus />
                      </button>
                      <div className="w-[74px] h-full ">
                        <input
                          type="text"
                          className="w-full text-center   h-full "
                          value={1}
                          min={1}
                        />
                      </div>
                      <button className="p-2 hover:bg-primary-100 border-l border-gray-300">
                        <LuPlus />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 text-center text-primary-500 font-bold">
                  100.000d
                </div>
                <div className="col-span-2 flex justify-end text-gray-600">
                  <FaTrashCan />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-warning-500 border-t border-b py-3">
            <MdOutlineDiscount />
            <div>Thêm mã giảm giá của shop</div>
          </div>
        </div>
        {/* shop */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-1 bg-gray-50 items-center border rounded-t-xl px-3">
            <div className="w-50">
              <div className=" flex items-center gap-1">
                <div>
                  <Checkbox className="pl-0 ml-0" crossOrigin={1} />
                </div>
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
                </div>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-12">
              {/* <div className="col-span-3">Giá</div>
            <div className="col-span-4">Số lượng</div>
            <div className="col-span-3">Tổng tiền</div> */}
              <div className="col-span-12 flex justify-end text-gray-600">
                <FaTrashCan />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-1  items-center  px-3">
              <div className="w-50">
                <div className=" flex items-center gap-1">
                  <div>
                    <Checkbox className="pl-0 ml-0" crossOrigin={1} />
                  </div>
                  <div className="flex items-center ">
                    <div className="w-[90px] h-[90px] border rounded-lg p-1">
                      <img
                        className="w-full h-full object-cover rounded-lg"
                        src="https://lamia.com.vn/storage/vest/322701978-5343207062449814-8945956417939669422-n-1554088121696206.jpg"
                        alt=""
                      />
                    </div>
                    <Link to={"/detail"} className="flex-1 px-4">
                      <h2 className="line-clamp-2 hover:text-primary-500">
                        Điện thoại Iphone 15 Pro mới ra mắt với cam đa chiều
                        sang trọng, hứa hẹn bùng nổ
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-12 items-center">
                <div className="col-span-3 text-gray-600 font-bold text-center">
                  100.000d
                </div>
                <div className="col-span-4 flex items-center justify-center">
                  <div>
                    <div className="flex items-center border border-gray-300">
                      <button className="p-2 hover:bg-primary-100 border-r border-gray-300">
                        <LuMinus />
                      </button>
                      <div className="w-[74px] h-full ">
                        <input
                          type="text"
                          className="w-full text-center   h-full "
                          value={1}
                          min={1}
                        />
                      </div>
                      <button className="p-2 hover:bg-primary-100 border-l border-gray-300">
                        <LuPlus />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 text-center text-primary-500 font-bold">
                  100.000d
                </div>
                <div className="col-span-2 flex justify-end text-gray-600">
                  <FaTrashCan />
                </div>
              </div>
            </div>
            <div className="flex flex-1  items-center  px-3">
              <div className="w-50">
                <div className=" flex items-center gap-1">
                  <div>
                    <Checkbox className="pl-0 ml-0" crossOrigin={1} />
                  </div>
                  <div className="flex items-center ">
                    <div className="w-[90px] h-[90px] border rounded-lg p-1">
                      <img
                        className="w-full h-full object-cover rounded-lg"
                        src="https://lamia.com.vn/storage/vest/322701978-5343207062449814-8945956417939669422-n-1554088121696206.jpg"
                        alt=""
                      />
                    </div>
                    <Link to={"/detail"} className="flex-1 px-4">
                      <h2 className="line-clamp-2 hover:text-primary-500">
                        Điện thoại Iphone 15 Pro mới ra mắt với cam đa chiều
                        sang trọng, hứa hẹn bùng nổ
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-12 items-center">
                <div className="col-span-3 text-gray-600 font-bold text-center">
                  100.000d
                </div>
                <div className="col-span-4 flex items-center justify-center">
                  <div>
                    <div className="flex items-center border border-gray-300">
                      <button className="p-2 hover:bg-primary-100 border-r border-gray-300">
                        <LuMinus />
                      </button>
                      <div className="w-[74px] h-full ">
                        <input
                          type="text"
                          className="w-full text-center   h-full "
                          value={1}
                          min={1}
                        />
                      </div>
                      <button className="p-2 hover:bg-primary-100 border-l border-gray-300">
                        <LuPlus />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 text-center text-primary-500 font-bold">
                  100.000d
                </div>
                <div className="col-span-2 flex justify-end text-gray-600">
                  <FaTrashCan />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-warning-500 border-t border-b py-3">
            <MdOutlineDiscount />
            <div>Thêm mã giảm giá của shop</div>
          </div>
        </div>
        {/* total */}
        <div className="flex">
          <div className="text-gray-600 flex-1 font-bold">Tổng tiền</div>
          <div className="w-40">
            <div className="flex flex-col gap-2 border-b pb-3 mb-3">
              <div className="flex justify-between items-center">
                <div className="text-gray-600">Tạm tính</div>
                <div className="font-bold text-gray-600">200.000d</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-gray-600">Giảm giá của Shop</div>
                <div className="font-bold text-warning-500">-100.000d</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="font-bold">Tổng tiền</div>
                <div className="text-primary-500 font-bold text-lg">300.000d</div>
            </div>
           <div className="mt-5">
           <Link to={"/checkout"} className="">
                <Button className="w-full bg-primary-500 hover:bg-primary-600">
                    Mua hàng
                </Button>
            </Link>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
