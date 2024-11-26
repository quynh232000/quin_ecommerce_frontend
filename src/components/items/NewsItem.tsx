import { Link } from "react-router-dom";

function NewsItem() {
  return (
    <div className="border rounded-lg p-2">
      <div className="h-[188px]">
        <img
          className="rounded-t-lg w-full h-full object-cover"
          src="https://digitalvn.vn/wp-content/uploads/2021/08/cong-nghe-4_0.jpg"
          alt=""
        />
      </div>
      <Link to={"#"} >
        <h2 className="mt-3 hover:text-primary-500">Laptop Hp full màn hình chơi game siêu mượt dành cho sinh viên</h2>
      </Link>
    </div>
  );
}

export default NewsItem;
