import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function AddressModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button
        onClick={handleOpen}
        className="flex items-center gap-2 bg-primary-500 normal-case"
      >
        <FaPlus />
        Thêm địa chỉ mới
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="text-primary-500 ">
          Thêm địa chỉ mới
        </DialogHeader>
        <DialogBody className="px-5">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Họ và tên</label>
                <input
                  placeholder="Aa.."
                  type="text"
                  className="border w-full p-2 rounded-lg focus:border-primary-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Số điện thoại</label>
                <input
                  placeholder="Aa.."
                  type="text"
                  className="border w-full p-2 rounded-lg focus:border-primary-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Địa chỉ cụ thể</label>
                <textarea
                  name=""
                  placeholder="Aa.."
                  id=""
                  className="border w-full p-2 rounded-lg focus:border-primary-500"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Ghi chú địa chỉ</label>
                <textarea
                  name=""
                  placeholder="Aa.."
                  id=""
                  className="border w-full p-2 rounded-lg focus:border-primary-500"
                ></textarea>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Tỉnh/ Thành phố</label>
                <select
                  name=""
                  className="border w-full p-2 rounded-lg focus:border-primary-500"
                  id=""
                >
                  <option value="">Tỉnh/ Thành phố</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Quận/ Huyện</label>
                <select
                  name=""
                  className="border w-full p-2 rounded-lg focus:border-primary-500"
                  id=""
                >
                  <option value="">Quận/ Huyện</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Phường/ Xã</label>
                <select
                  name=""
                  className="border w-full p-2 rounded-lg focus:border-primary-500"
                  id=""
                >
                  <option value="">Phường/ Xã</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end items-center gap-2 text-sm">
                <input type="checkbox" />
                <label htmlFor="">Đặt làm mặc định</label>
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
          <Button  className=" normal-case bg-primary-500 hover:bg-primary-600" onClick={handleOpen}>
            <span>Hoàn thành</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default AddressModal;
