import { FaArrowLeftLong } from "react-icons/fa6";
import i_lock from "../../assets/images/lock.png";
import { FaLock, FaRegEye } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
function PasswordPage() {
  return (
    <div className="p-5 relative">
      <div className=" absolute top-2 left-2 px-5 mt-2">
        <FaArrowLeftLong className="text-primary-500 text-xl" />
      </div>
      <div className="flex justify-center text-2xl text-primary-500">
        Đổi mật khẩu
      </div>
      <div className="flex justify-center py-8">
        <div className="w-[390px] flex flex-col items-center gap-2">
          <div>
            <img src={i_lock} alt="" />
          </div>
          <div>Vui lòng nhập mật khẩu để xác minh</div>

          <div className="flex flex-col gap-4 py-5 w-full ">
            <div className=" w-full relative">
              <div className=" absolute top-0 left-0 bottom-0 flex items-center pl-2 text-gray-600">
                <FaLock />
              </div>
              <input
                type="password"
                className="w-full border p-2 rounded-lg px-8"
                placeholder="Mật khẩu cũ"
              />
              <div className=" absolute top-0 right-0 bottom-0 flex items-center pr-2 text-gray-600">
                <FaRegEye />
                {/* <FaRegEyeSlash /> */}
              </div>
            </div>
            <div className=" w-full relative">
              <div className=" absolute top-0 left-0 bottom-0 flex items-center pl-2 text-gray-600">
                <FaLock />
              </div>
              <input
                type="password"
                className="w-full border p-2 rounded-lg px-8"
                placeholder="Mật khẩu mới"
              />
              <div className=" absolute top-0 right-0 bottom-0 flex items-center pr-2 text-gray-600">
                <FaRegEye />
                {/* <FaRegEyeSlash /> */}
              </div>
            </div>
          </div>
          <div className="w-full mt-5">
            <Button className="bg-primary-500 px-8 normal-case w-full">Thay đổi</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordPage;
