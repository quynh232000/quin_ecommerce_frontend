
import CoinItem from "../../components/items/CoinItem";
import Pagination from "../../components/compoment/Pagination";
import { useEffect, useState } from "react";
import { ICoin, IPagination } from "../../interfaces/common";
import { SGetCoin } from "../../services/AppService";
import NotifySke from "../../components/skeleton/NotifySke";
type typeNav = {
  id: number;
  title: string;
  type: string;
};
const navs: typeNav[] = [
  { id: 1, title: "Tất cả lịch sử", type: "all" },
  { id: 2, title: "Đã nhận", type: "received" },
  { id: 3, title: "Đã dùng", type: "used" },
];
function CoinPage() {
  useEffect(() => {
    document.title = "Quin Xu";
  }, []);
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeNav, setActiveNav] = useState(1);
  const [pagination,setPagination] = useState<IPagination|null>()
  const [page,setPage] = useState(1)

  useEffect(() => {
    let query = "?page="+page;

    query += `&type=${navs[activeNav-1].type}`;

    SGetCoin(query).then((res) => {
      if (res.status) {
        setLoading(false);
        setCoins(res.data);
        setPagination(res.meta.pagination)
      }
    });
  }, [activeNav]);
  const handleActive = (item: typeNav) => {
    setActiveNav(item.id);
  };
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="text-2xl text-primary-500">Quản lý xu của bạn</div>
      {/* <div className="flex justify-between gap-8">
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
      </div> */}
      <div className="border-b flex justify-between mt-5">
        <div className="flex">
          {navs.map((item) => {
            return (
              <div
                onClick={() => handleActive(item)}
                className={
                  "py-1 px-8 font-bold text-gray-500 border-b-2 cursor-pointer hover:text-primary-500 " +
                  (item.id == activeNav
                    ? "text-primary-500 border-b-2 border-primary-500"
                    : "")
                }
              >
                {item.title}
              </div>
            );
          })}
        
        </div>
        {/* <div className="text-sm text-warning-500">Đã đọc tất cả</div> */}
      </div>
      <div className="flex flex-col gap-2 py-3">
        {loading ? (
          <div>
            <NotifySke />
            <NotifySke />
          </div>
        ) : coins.length > 0 ? (
          coins.map((item) => {
            return <CoinItem key={item.id} coin={item} />;
          })
        ) : (
          <div className="text-center text-danger-500 mt-8">
            Không tìm thấy dữ liệu nào
          </div>
        )}
      </div>
      <div className="flex justify-end mt-5">
        {pagination &&
        <Pagination pagination={pagination} setPage={setPage} page={page}/>}
      </div>
    </div>
  );
}

export default CoinPage;
