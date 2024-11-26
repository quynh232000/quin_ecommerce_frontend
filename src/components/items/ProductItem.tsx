import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductItem() {
  return (
    <div className="bg-white rounded-xl overflow-hidden hover:shadow-md group relative border ">
      <div className=" absolute top-0 left-0 bg-secondary-500 text-sm text-white font-bold px-4 rounded-br-xl py-1 z-10">-30%</div>
      <Link to={"/detail"} className="flex justify-center py-3">
        <div className="w-[212px] h-[160px]">
          <img
            className="w-full h-full object-contain group-hover:scale-[1.02] transition-all"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvgwqs-rwDYOH3yT5CSj_euhGprQ39XwAkA&s"
            alt=""
          />
        </div>
      </Link>
      <div className="p-3 flex flex-col gap-1">
        <div className="text-gray-600">Điện thoại</div>
        <Link to={"/detail"}>
          <h2 className=" line-clamp-2 my-1 font-medium hover:text-primary-500 cursor-pointer">
            Laptop Hp full màn hình chơi game siêu mượt dành cho sinh viên
          </h2>
        </Link>
        <div className="text-primary-500 font-bold text-xl">19.000.000đ</div>
        <div className="flex justify-between items-center">
          <div>
            <del className="text-gray-500 font-bold">23.000.000đ</del>
          </div>
          <div className="text-success-500 text-sm">Giảm: 235.000đ</div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-1">
            <div className="text-warning-500">
              <FaStar />
            </div>
            <span>(5.0)</span>
          </div>
          <div>Đã bán: 1.7k</div>
        </div>
        {/* <div className="flex gap-2 mt-5">
          <button className="border border-primary-500 text-primary-500 rounded-lg py-2 px-5 hover:bg-primary-50">
            <FaCartPlus />
          </button>
          <button className="bg-primary-500 flex-1 text-white rounded-lg hover:bg-primary-600">
            Mua ngay
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default ProductItem;
