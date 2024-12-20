import { Link } from "react-router-dom";
import { ICategory } from "../../interfaces/common";
import Img from "../image/Img";
type props ={
  category:ICategory
}
function CateItem({category}:props) {
  return (
    <Link to={'/collection/'+category.slug} className="flex flex-col gap-2 group">
      <div className="bg-primary-50 flex justify-center rounded-3xl py-2 group-hover:shadow-md hover:border-primary-100 border border-transparent">
        <div className="w-[57px] h-[69px]">
          <Img src={category.icon_url} className="w-full h-full object-cover group-hover:scale-95" alt={category.description}/>
        </div>
      </div>
      <div className="text-center line-clamp-2">{category.name}</div>
    </Link>
  );
}

export default CateItem;
