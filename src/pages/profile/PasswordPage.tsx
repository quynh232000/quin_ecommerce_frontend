import { FaArrowLeftLong } from "react-icons/fa6";
import i_lock from "../../assets/images/lock.png";
import { FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import { ChangeEvent, useState } from "react";
import { MFormChangePassword } from "../../models/AppModel";
import { SChangePassword } from "../../services/AppService";
import { ICustomData } from "../../interfaces/common";
function PasswordPage() {
  const [showPass, setShowPass] = useState({
    old: false,
    new: false,
    confirm: false,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ICustomData|null>(null)
  const [data, setData] = useState<MFormChangePassword>(
    new MFormChangePassword()
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = () => {
    setResult(null)
    setLoading(true);
    SChangePassword(data).then(res=>{
      setLoading(false)
      setResult(res)
      if(res.status){
        setData(new MFormChangePassword())
      }
    })
  };
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
                type={!showPass.old ? "password" : "text"}
                className="w-full border p-2 rounded-lg px-8"
                placeholder="Mật khẩu cũ"
                name="password_old"
                value={data.password_old}
                onChange={handleChange}
              />
              <div
                onClick={() => setShowPass({ ...showPass, old: !showPass.old })}
                className=" cursor-pointer absolute top-0 right-0 bottom-0 flex items-center pr-2 text-gray-600"
              >
                {showPass.old ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>
            <div className=" w-full relative">
              <div className=" absolute top-0 left-0 bottom-0 flex items-center pl-2 text-gray-600">
                <FaLock />
              </div>
              <input
                type={!showPass.new ? "password" : "text"}
                className="w-full border p-2 rounded-lg px-8"
                placeholder="Mật khẩu mới"
                name="password_new"
                value={data.password_new}
                onChange={handleChange}
              />
              <div
                onClick={() => setShowPass({ ...showPass, new: !showPass.new })}
                className=" absolute top-0 right-0 bottom-0 flex items-center pr-2 text-gray-600"
              >
                {!showPass.new ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            <div className=" w-full relative">
              <div className=" absolute top-0 left-0 bottom-0 flex items-center pl-2 text-gray-600">
                <FaLock />
              </div>
              <input
                type={!showPass.confirm ? "password" : "text"}
                className="w-full border p-2 rounded-lg px-8"
                placeholder="Xác nhận mật khẩu"
                name="password_confirm"
                value={data.password_confirm}
                onChange={handleChange}
              />
              <div
                onClick={() =>
                  setShowPass({ ...showPass, confirm: !showPass.confirm })
                }
                className=" absolute top-0 right-0 bottom-0 flex items-center pr-2 text-gray-600"
              >
                {!showPass.confirm ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
          </div>
          <div className="w-full">
            {result &&
            <div className={" text-left "+(result.status==true ?"text-success-500":'text-danger-500')}>{result.message}</div>}
          </div>
          <div className="w-full mt-5">
            {loading ? (
              <Button
                disabled
                className="bg-primary-500 px-8 normal-case w-full"
              >
                Thay đổi
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="bg-primary-500 px-8 normal-case w-full"
              >
                Thay đổi
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordPage;
