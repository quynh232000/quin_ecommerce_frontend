import { Button, Rating } from "@material-tailwind/react";
import { CiCamera } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import ReviewItem from "../items/ReviewItem";
import Pagination from "./Pagination";

function ProductReview() {
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-gray-50 p-5 rounded-lg flex gap-5">
        <div className="w-20 flex flex-col items-center justify-center gap-4">
          <div className="flex gap-2 text-4xl  text-gray-600">
            <div className="text-warning-500">4.0 /</div>
            <div>5</div>
          </div>
          <div>
            <Rating className="text-warning-500 text-3xl" value={4} />
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg border p-5">
          <div className="border-b relative">
            <textarea
              placeholder="Đánh giá của bạn"
              rows={4}
              name=""
              className="w-full"
              id=""
            ></textarea>
            <button className="bg-primary-500 text-white px-5 py-2 text-sm hover:bg-primary-600 hover:shadow-md absolute top-0 right-0 rounded-lg">
              Gửi đánh giá
            </button>
          </div>
          <div className="flex gap-3 mt-5">
            <Button className="flex items-center gap-2 py-2 px-3 text-sm normal-case font-normal bg-white text-gray-900 border hover:bg-primary-50 hover:text-primary-500">
              <CiCamera className="text-xl" />
              Thêm hình ảnh
            </Button>
            <Button className="flex items-center gap-2 py-2 px-3 text-sm normal-case font-normal bg-white text-gray-900 border hover:bg-primary-50 hover:text-primary-500">
              <IoVideocamOutline className="text-xl" />
              Thêm video
            </Button>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-5">
            <ReviewItem/>
            <ReviewItem/>
            <ReviewItem/>
            <ReviewItem/>
      </div>
      <div className="flex justify-end mt-5">
        <Pagination/>
      </div>
    </div>
  );
}

export default ProductReview;
