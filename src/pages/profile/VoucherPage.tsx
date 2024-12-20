import { Select } from "@material-tailwind/react";
import { IoIosSearch } from "react-icons/io";
import VoucherItem from "../../components/items/VoucherItem";
import { useEffect, useState } from "react";
import { IPagination, IUserVoucher } from "../../interfaces/common";
import { SGetMyVoucher } from "../../services/AppService";
import NotifySke from "../../components/skeleton/NotifySke";
import Pagination from "../../components/compoment/Pagination";

type typeNav = {
  id: number;
  title: string;
  type: string;
};
const navs: typeNav[] = [
  { id: 1, title: "Tất cả ", type: "all" },
  { id: 2, title: "Chưa dùng", type: "not_use" },
  { id: 3, title: "Đã dùng", type: "used" },
];
function VoucherPage() {
  const [vouchers, setVouchers] = useState<IUserVoucher[]>([]);
  const [navActive, setNavActive] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pagination,setPagination] = useState<IPagination|null>(null)
  const [page,setPage] = useState(1)
  useEffect(() => {
    setPagination(null)
    setLoading(true);
    let params = "?limit=20";
    params += "&page=" + page;
    params += "&type=" + navs[navActive - 1].type;
    SGetMyVoucher(params).then((res) => {
      setLoading(false);
      if (res.status) {
        setVouchers(res.data);
        setPagination(res.meta.pagination)
      }
    });
  }, [navActive,page]);
  const handleActive = (item: typeNav) => {
    setNavActive(item.id);
  };
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
          {navs.map((item) => (
            <div
              key={item.id}
              className={`py-1 px-8 font-bold text-${
                item.id === navActive ? "primary-500" : "gray-500"
              } border-b-2 border-${
                item.id === navActive ? "primary-500" : "transparent"
              } cursor-pointer hover:text-${
                item.id === navActive ? "primary-500" : "gray-500"
              }`}
              onClick={() => handleActive(item)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div>
        {loading ? (
          <div className=" grid grid-cols-2 gap-4">
            <NotifySke />
            <NotifySke />
          </div>
        ) : vouchers.length > 0 ? (
          <div className=" grid grid-cols-2 gap-4">
            {vouchers.map((voucher) => (
              <VoucherItem key={voucher.id} voucher={voucher.voucher} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-8 text-danger-500">
            Không tìm thấy dữ liệu nào!
          </div>
        )}
        <div className="flex justify-end mt-8">
          {pagination && <Pagination pagination={pagination} page={page} setPage={setPage} />}
          </div>
      </div>
    </div>
  );
}

export default VoucherPage;
