import { Button } from "@material-tailwind/react";
import { FaLocationDot } from "react-icons/fa6";

function AddressItem() {
  return (
    <div className="py-5 border-b flex justify-between ">
      <div className="flex flex-col gap-2">
        <div className="flex gap-5 items-center">
          <div className="font-bold">Nguyễn Thị Hằng Nga</div>
          <span className="text-gray-500">|</span>
          <div className="text-gray-600">0923042234</div>
          <div className="border-primary-500 bg-primary-50 border px-3 text-sm rounded-lg text-primary-500 py-1">
            Mặc định
          </div>
        </div>
        <div className="flex items-center gap-5 text-gray-700">
            <div><FaLocationDot /></div>
            <div>
                <div>Số 65, Đường Vận Hành Suối Nhum</div>
                <div>Phường Linh Trung, Thành phố Thủ Đức, TP.Hồ Chí Minh</div>
            </div>
        </div>
      </div>
      <div className="flex justify-around flex-col">
        <div className="flex gap-2 items-center text-gray-600 text-sm cursor-pointer">
            <div className="text-warning-500">Chỉnh sửa</div>
            <div>|</div>
            <div>Xóa</div>
        </div>
        <div>
            <Button className=" normal-case border-primary-500 bg-primary-50 text-primary-500 py-2 px-4 border hover:bg-primary-100">Đặt làm mặc định</Button>
        </div>
      </div>
    </div>
  );
}

export default AddressItem;
