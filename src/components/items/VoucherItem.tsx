import i_voucher from "../../assets/images/voucher.png";
function VoucherItem() {
  return (
    <div className="flex bg-primary-50 items-center">
      <div className="w-[108px] h-[138px] relative">
        <img src={i_voucher} alt="" className="w-full h-full object-cover" />
        <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div className="bg-white rounded-sm ">
            <img
              width={64}
              height={64}
              className=" object-cover"
              src="https://cdn-icons-png.flaticon.com/512/3733/3733132.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-primary-50 px-3 flex-1 h-full flex items-center justify-between gap-2">
            <div className="flex flex-col gap-1 justify-center h-full flex-1">
                <div className="font-bold text-secondary-500">Giảm 10%</div>
                <div>Đơn tối thiểu: 289k</div>
                <div className="text-primary-500 text-sm">Mã: QUIN2KH</div>
                <div className="text-sm text-gray-500">HSD: 28/12/2024</div>
            </div>
            <div className="">
                <button className="bg-secondary-500 text-white text-sm  px-4 py-1 rounded-lg">Lưu</button>
            </div>
      </div>
    </div>
  );
}

export default VoucherItem;
