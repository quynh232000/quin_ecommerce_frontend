import { Link } from "react-router-dom";

function ProductFind() {
  return (
    <div className="rounded-xl overflow-hidden">
      <div className="flex justify-center relative ">
        <div className=" absolute top-0 left-0 bg-secondary-500 text-[12px]  px-4 py-0 font-bold text-white rounded-br-xl">
          TOP
        </div>
        <div className="w-full h-[188px]">
          <img
            className="w-full object-cover h-full"
            src="https://germe.vn/wp-content/uploads/2024/05/5.png"
            alt=""
          />
        </div>
      </div>
      <div className="text-center bg-gray-300 text-sm py-1">
        Đã bán 12.7k / tháng
      </div>
      <Link to={"/detail"}>
        <h2 className=" line-clamp-2 mt-2 hover:text-primary-500">
          Váy nữ Lyla Dress -Thời trang nữ năng động Style
        </h2>
      </Link>
    </div>
  );
}

export default ProductFind;
