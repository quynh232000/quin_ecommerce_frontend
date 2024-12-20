import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { ChangeEvent, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  SCreateAddress,
  SEditAddress,
  SGetDistricts,
  SGetProvinceAll,
  SGetWards,
} from "../../services/AppService";
import {
  IAddress,
  IDistrict,
  IProvince,
  IResponseMessage,
  IToastMessage,
  IWard,
} from "../../interfaces/common";
import ToastMessage from "../compoment/ToastMessage";
import { MFormAddress } from "../../models/AppModel";
type props = {
  setchangeAddresses: (z: number) => void;
  setAddressEdit: (z: IAddress | null) => void;
  addressEdit: IAddress | null;
};
function AddressModal({
  setchangeAddresses,
  addressEdit,
  setAddressEdit,
}: props) {
  const [open, setOpen] = useState(false);
  const [provinces, setProvinces] = useState<IProvince[]>([]);
  const [districts, setDistricts] = useState<IDistrict[]>([]);
  const [wards, setwards] = useState<IWard[]>([]);
  const [data, setData] = useState(new MFormAddress());
  const [result, setResult] = useState<IResponseMessage | null>(null);
  const [toastMessage, setToastMessage] = useState<IToastMessage | null>(null);

  useEffect(() => {
    if (addressEdit) {
      setOpen(true);
      SGetProvinceAll().then((res) => {
        if (res.status) setProvinces(res.data);
      });
      SGetDistricts(addressEdit.province_id).then((res) => {
        if (res.status) setDistricts(res.data);
      });
      SGetWards(addressEdit.district_id).then((res) => {
        if (res.status) setwards(res.data);
      });
      setData({...addressEdit});
    } else {
      SGetProvinceAll().then((res) => {
        if (res.status) setProvinces(res.data);
      });
    }
  }, [addressEdit]);
  const handleOpen = () => {
    setAddressEdit(null);
    if (open) {
      setProvinces([]);
      setDistricts([]);
      setwards([]);
      setData(new MFormAddress())
    }
    setOpen(!open);
  };

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name == "province_id") {
      SGetDistricts(+value).then((res) => {
        if (res.status) setDistricts(res.data);
      });
      setDistricts([]);
      setwards([]);
    }
    if (name == "district_id") {
      SGetWards(+value).then((res) => {
        if (res.status) setwards(res.data);
      });
      setwards([]);
    }
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    if (data) {
      if (addressEdit) {
        SEditAddress(addressEdit.id, data).then((res) => {
          console.log(res);
          setResult(res);
          if (res.status) {
            setchangeAddresses(Math.random());
            setToastMessage({ ...res });
            setOpen(!open);
          }
        });
      } else {
        SCreateAddress(data).then((res) => {
          console.log(res);
          setResult(res);
          if (res.status) {
            setchangeAddresses(Math.random());
            setToastMessage({ ...res });
            setOpen(!open);
          }
        });
      }
    }
  };
  return (
    <>
      {toastMessage && <ToastMessage {...toastMessage} />}
      <Button
        onClick={handleOpen}
        className="flex items-center gap-2 bg-primary-500 normal-case"
      >
        <FaPlus />
        Thêm địa chỉ mới
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="text-primary-500 ">
          {addressEdit ? "Cập nhật địa chỉ" : "Thêm địa chỉ mới"}
        </DialogHeader>
        <DialogBody className="px-5">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Họ và tên</label>
                <input
                  placeholder="Aa.."
                  type="text"
                  value={data.receiver_name}
                  name="receiver_name"
                  onChange={handleChange}
                  className="border w-full p-2 rounded-lg focus:border-primary-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Số điện thoại</label>
                <input
                  placeholder="Aa.."
                  name="phone_number"
                  value={data.phone_number}
                  onChange={handleChange}
                  type="text"
                  className="border w-full p-2 rounded-lg focus:border-primary-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Địa chỉ cụ thể</label>
              <textarea
                name="address_detail"
                onChange={handleChange}
                value={data.address_detail}
                placeholder="Aa.."
                id=""
                className="border w-full p-2 rounded-lg focus:border-primary-500"
              ></textarea>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Tỉnh/ Thành phố</label>
                <select
                  disabled={provinces.length == 0}
                  defaultValue={data.province_id}
                  name="province_id"
                  className="border w-full p-2 rounded-lg focus:border-primary-500"
                  onChange={handleChange}
                  id=""
                >
                  <option value="">Tỉnh/ Thành phố</option>
                  {provinces.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Quận/ Huyện</label>
                <select
                  disabled={districts.length == 0}
                  name="district_id"
                  onChange={handleChange}
                  // defaultValue={
                  //   data.district_id
                  //     ? addressEdit.district_id
                  //     : undefined
                  // }
                  className="border w-full p-2 rounded-lg focus:border-primary-500"
                  id=""
                >
                  <option value="">Quận/ Huyện</option>
                  {districts.map((item) => {
                    return (
                      <option
                        selected={data.district_id == item.id ? true : false}
                        key={item.id}
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Phường/ Xã</label>
                <select
                  disabled={wards.length == 0}
                  name="ward_id"
                  onChange={handleChange}
                  defaultValue={data.ward_id ? data.ward_id : undefined}
                  className="border w-full p-2 rounded-lg focus:border-primary-500"
                  id=""
                >
                  <option value="">Phường/ Xã</option>
                  {wards.map((item) => {
                    return (
                      <option
                        selected={data.ward_id == item.id ? true : false}
                        key={item.id}
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                {result?.status == false && (
                  <small className="text-danger-500">{result?.message}</small>
                )}
              </div>
              <div className="flex justify-end items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  id="setdefault"
                  checked={data.is_default ? true : false}
                  onChange={handleChange}
                  name="is_default"
                />
                <label htmlFor="setdefault" className=" cursor-pointer">Đặt làm mặc định</label>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1 normal-case"
          >
            <span>Hủy</span>
          </Button>
          <Button
            className=" normal-case bg-primary-500 hover:bg-primary-600"
            onClick={handleSubmit}
          >
            <span>Hoàn thành</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default AddressModal;
