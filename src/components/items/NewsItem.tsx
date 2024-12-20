import { Link } from "react-router-dom";
import { IPost } from "../../interfaces/common";
type props={
  post:IPost
}
function NewsItem({post}:props) {
  return (
    <div className="border rounded-lg p-2">
      <div className="h-[188px]">
        <img
          className="rounded-t-lg w-full h-full object-cover"
          src={post.thumbnail}
          alt=""
        />
      </div>
      <Link to={"/blog/"+post.slug} >
        <h2 className="mt-3 hover:text-primary-500">{post.title}</h2>
      </Link>
    </div>
  );
}

export default NewsItem;
