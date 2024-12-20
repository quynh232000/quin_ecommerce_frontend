import { Button } from "@material-tailwind/react";
import { MdEditSquare } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { ChangeEvent, useState } from "react";
import { MFormProfile } from "../../models/AppModel";
import { SUserUpdate } from "../../services/AppService";
import { setUser } from "../../redux/reducers/authReducer";
import { IToastMessage } from "../../interfaces/common";
import ToastMessage from "../../components/compoment/ToastMessage";

function ProfilePage() {
  const { user } = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState<MFormProfile>({
    full_name: user.full_name,
    phone_number: user.phone_number,
    address: user.address,
    birthday: user.birthday,
    bio: user.bio,
  });
  const [avatar, setAvatar] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(user.avatar_url);
  const [loading, setLoading] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<IToastMessage | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview("");
    }
  };
  const handleSubmit = () => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key as keyof MFormProfile] + "");
    });
    if (avatar) {
      formData.append("avatar_url", avatar, avatar.name);
    }
    SUserUpdate(formData).then((res) => {
      setLoading(true);
      setToastMessage(null);
      if (res.status) {
        dispatch(setUser(res.data));
        setLoading(false);
      }
      setToastMessage(res);
    });
  };
  return (
    <div className="p-5">
      {toastMessage && <ToastMessage {...toastMessage} />}
      <div className="text-2xl text-primary-500">Hồ sơ của tôi</div>
      <div className="flex flex-col items-center py-5 gap-3">
        <label htmlFor="avatar" className="w-[100px] h-[100px]">
          <img
            className="w-full h-full object-cover rounded-full border shadow-md"
            src={
              imagePreview ??
              "https://i.pinimg.com/736x/b0/28/09/b028096d34128a39b8f90ef834307f0e.jpg"
            }
            alt=""
          />
        </label>

        <input onChange={handleFileChange} type="file" hidden id="avatar" />
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
            <label htmlFor="" className="font-bold text-gray-600">
              Email
            </label>
            <input
              type="text"
              defaultValue={user.email}
              readOnly
              placeholder="Email"
              className="border bg-gray-100 p-2 rounded-lg "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-bold text-gray-600">
              Họ & Tên
            </label>
            <input
              type="text"
              name="full_name"
              defaultValue={data.full_name}
              placeholder="Nguyen van a"
              onChange={handleChange}
              className="border p-2 rounded-lg focus:border-primary-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-bold text-gray-600">
              Số điện thoại
            </label>
            <input
              name="phone_number"
              onChange={handleChange}
              type="text"
              defaultValue={data.phone_number ?? ""}
              placeholder="+84"
              className="border p-2 rounded-lg focus:border-primary-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-bold text-gray-600">
              Địa chỉ
            </label>
            <input
              onChange={handleChange}
              name="address"
              type="text"
              defaultValue={data.address}
              placeholder="Aa.."
              className="border p-2 rounded-lg focus:border-primary-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-bold text-gray-600">
              Ngày sinh
            </label>
            <input
              onChange={handleChange}
              name="birthday"
              type="date"
              defaultValue={data.birthday}
              placeholder="Q12, Tp.HCM"
              className="border p-2 rounded-lg focus:border-primary-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-bold text-gray-600">
              Giới thiệu
            </label>
            <input
              onChange={handleChange}
              name="bio"
              type="text"
              defaultValue={data.bio}
              placeholder="Aa..."
              className="border p-2 rounded-lg focus:border-primary-500"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 normal-case">
        {loading ? (
          <Button disabled className="bg-primary-500 px-12">
            Cập nhật
          </Button>
        ) : (
          <Button onClick={handleSubmit} className="bg-primary-500 px-12">
            Cập nhật
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
