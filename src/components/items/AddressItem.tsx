import { Button } from "@material-tailwind/react";
import { FaLocationDot } from "react-icons/fa6";
import { IAddress, IToastMessage } from "../../interfaces/common";
import { SDeleteAddress, SSetAddressDefault } from "../../services/AppService";
import { useState } from "react";
import ToastMessage from "../compoment/ToastMessage";
type props = {
  address: IAddress;
  setchangeAddresses: (i: number) => void;
  setAddressEdit: (address: IAddress) => void;
};
function AddressItem({ address, setchangeAddresses,setAddressEdit }: props) {
  const [toastMessage, setToastMessage] = useState<IToastMessage | null>(null);
  const setDefault = () => {
    SSetAddressDefault(address.id).then((res) => {
      if (res.status) {
        setchangeAddresses(Math.random());
      }
    });
  };
  const handleDelete = () => {
    SDeleteAddress(address.id).then((res) => {
      if (res.status) {
        setchangeAddresses(Math.random());
      }
      setToastMessage({ ...res });
    });
  };
  return (
    <div className="py-5 border-b flex justify-between ">
      {toastMessage && <ToastMessage {...toastMessage} />}
      <div className="flex flex-col gap-2">
        <div className="flex gap-5 items-center">
          <div className="font-bold">{address.receiver_name}</div>
          <span className="text-gray-500">|</span>
          <div className="text-gray-600">{address.phone_number}</div>
          {address.is_default ? (
            <div className="border-success-500 bg-success-50 border px-3 text-sm rounded-lg text-success-500 py-1">
              Mặc định
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center gap-5 text-gray-700">
          <div>
            <FaLocationDot />
          </div>
          <div>
            <div>{address.address_detail}</div>
            <div>{`${address.ward.name} - ${address.district.name} - ${address.province.name}`}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-around flex-col">
        <div className="flex gap-2 items-center text-gray-600 text-sm cursor-pointer">
          <button onClick={()=>setAddressEdit(address)} className="text-warning-500">Chỉnh sửa</button>
          <div>|</div>
          {address.is_default ? <button  className=" cursor-not-allowed" disabled>Xóa</button>: <button className="hover:text-danger-500"  onClick={handleDelete}>Xóa</button>}
         
        </div>
        <div>
          <Button
            disabled={address.is_default}
            onClick={setDefault}
            className=" normal-case border-primary-500 bg-primary-50 text-primary-500 py-2 px-4 border hover:bg-primary-100"
          >
            Đặt làm mặc định
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddressItem;
