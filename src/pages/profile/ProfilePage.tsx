import { Button } from "@material-tailwind/react";
import { MdEditSquare } from "react-icons/md";

function ProfilePage() {
  return (
    <div className="p-5">
      <div className="text-2xl text-primary-500">Hồ sơ của tôi</div>
      <div className="flex flex-col items-center py-5 gap-3">
        <div className="w-[100px] h-[100px]">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://i.pinimg.com/736x/b0/28/09/b028096d34128a39b8f90ef834307f0e.jpg"
            alt=""
          />
        </div>

        <input type="file" hidden id="avatar" />
        <label
          htmlFor="avatar"
          className="flex items-center gap-2 text-primary-500 hover:text-primary-600 cursor-pointer"
        >
          <MdEditSquare />
          <div>Chỉnh sửa</div>
        </label>
      </div>
      <div className="py-5">
        <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-bold text-gray-600">Email</label>
                <input type="text" placeholder="Email" className="border p-2 rounded-lg focus:border-primary-500" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-bold text-gray-600">Họ & Tên</label>
                <input type="text" placeholder="Nguyen van a" className="border p-2 rounded-lg focus:border-primary-500" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-bold text-gray-600">Số điện thoại</label>
                <input type="text" placeholder="095675756" className="border p-2 rounded-lg focus:border-primary-500" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-bold text-gray-600">Địa chỉ</label>
                <input type="text" placeholder="Q12, Tp.HCM" className="border p-2 rounded-lg focus:border-primary-500" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-bold text-gray-600">Ngày sinh</label>
                <input type="date" placeholder="Q12, Tp.HCM" className="border p-2 rounded-lg focus:border-primary-500" />
            </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 normal-case">
        <Button className="bg-primary-500 px-12">Cập nhật</Button>
      </div>
    </div>
  );
}

export default ProfilePage;
