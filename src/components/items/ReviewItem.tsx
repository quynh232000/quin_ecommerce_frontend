import { AiFillLike } from "react-icons/ai";
import RatingStar from "../compoment/RatingStar";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

function ReviewItem() {
  return (
    <div className=" flex flex-col gap-3 border-b py-4">
      <div className="flex gap-2">
        <div className="w-[40px] h-[40px]">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://down-vn.img.susercontent.com/file/vn-11134233-7qukw-lhxg1xfo8ex14e_tn"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className=" font-bold">Vũ Thị Thu Trang</div>
          <div className="flex items-center gap-5">
            <div>
              <RatingStar />
            </div>
            <div className="text-sm text-gray-500">17/12/2024</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p>
            Khóa học này được chọn vào Udemy Vietnamese Private Collection - Bộ
            Sưu Tập Khóa Học Được Tuyển Chọn Dành Cho Các Doanh Nghiệp Việt Nam.
            Thêm bài 85: Cách tự động đánh giá hiệu suất của nhiều Model Machine
            Learning cùng lúc Thêm bài 86: Chia sẻ tài liệu:
          </p>
        </div>
        <div className="flex gap-2 my-2">
          <div className="w-[82px] h-[82px]">
            <img
              className="w-full h-full object-cover"
              src="https://down-vn.img.susercontent.com/file/vn-11134103-7r98o-lsf3klog8s614f.webp"
              alt=""
            />
          </div>
          <div className="w-[82px] h-[82px]">
            <img
              className="w-full h-full object-cover"
              src="https://down-vn.img.susercontent.com/file/vn-11134103-7r98o-lsf3klog8s614f.webp"
              alt=""
            />
          </div>
          <div className="w-[82px] h-[82px]">
            <img
              className="w-full h-full object-cover"
              src="https://down-vn.img.susercontent.com/file/vn-11134103-7r98o-lsf3klog8s614f.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-4">
        <div className="font-bold text-gray-700">Phản hồi của shop</div>
        <div>
          <p>
            Khóa học này được chọn vào Udemy Vietnamese Private Collection - Bộ
            Sưu Tập Khóa Học Được Tuyển Chọn Dành Cho Các Doanh Nghiệp Việt Nam.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-xl text-gray-600 hover:text-primary-500 cursor-pointer">
            <AiFillLike />
          </div>
          <span>5</span>
        </div>
        <div>
          <Menu >
            <MenuHandler>
              <Button className="bg-white shadow-none text-gray-600 text-xl hover:shadow-none">
                <BsThreeDotsVertical />
              </Button>
            </MenuHandler>
            <MenuList className="w-fit text-center">
              <MenuItem className="text-center">Báo cáo</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
