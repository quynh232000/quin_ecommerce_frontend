import { Select } from "@material-tailwind/react";
import { IoIosSearch } from "react-icons/io";
import VoucherItem from "../../components/items/VoucherItem";
import Pagination from "../../components/compoment/Pagination";

function VoucherPage() {
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="text-2xl text-primary-500">Kho Voucher </div>
      <div className="flex justify-between gap-8">
        <div className="flex-2 w-50 relative">
          <div className=" absolute top-0 left-0 bottom-0 flex items-center pl-4 text-xl">
            <IoIosSearch />
          </div>
          <input
            type="text"
            className="border focus:border-primary-500 rounded-lg p-2 px-3 pl-12 w-full"
            placeholder="Tìm kiếm.."
          />
        </div>
        <div>
          <Select className=" outline-none" label="Sắp xếp theo">
            <option value="">Sắp xếp theo</option>
          </Select>
        </div>
      </div>
      <div className="border-b flex justify-between mt-5">
        <div className="flex">
          <div className="py-1 px-8 font-bold text-primary-500 border-b-2 border-primary-500 cursor-pointer hover:text-primary-500">
            Tất cả (12)
          </div>
          <div className="py-1 px-8 font-bold text-gray-500 border-b-2 border-transparent cursor-pointer hover:text-primary-500">
            Chưa dùng
          </div>
          <div className="py-1 px-8 font-bold text-gray-500 border-b-2 border-transparent cursor-pointer hover:text-primary-500">
            Đã dùng
          </div>
          <div className="py-1 px-8 font-bold text-gray-500 border-b-2 border-transparent cursor-pointer hover:text-primary-500">
            Hết hạn
          </div>
        </div>
      </div>
      <div>
        <div className=" grid grid-cols-2 gap-4">
          <VoucherItem />
          <VoucherItem />
          <VoucherItem />
          <VoucherItem />
          <VoucherItem />
          <VoucherItem />
          <VoucherItem />
          <VoucherItem />
        </div>
        <div className="flex justify-end mt-8">
            <Pagination/>
        </div>
      </div>
    </div>
  );
}

export default VoucherPage;
