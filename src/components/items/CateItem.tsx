import { Link } from "react-router-dom";
import i_cate from "../../assets/images/cate_vay.png";
function CateItem() {
  return (
    <Link to={'/collection'} className="flex flex-col gap-2 group">
      <div className="bg-primary-50 flex justify-center rounded-3xl py-2 group-hover:shadow-md hover:border-primary-100 border border-transparent">
        <div className="w-[57px] h-[69px]">
          <img className="w-full h-full object-cover group-hover:scale-95" src={i_cate} alt="" />
        </div>
      </div>
      <div className="text-center line-clamp-2">Thời trang cho nữ</div>
    </Link>
  );
}

export default CateItem;
