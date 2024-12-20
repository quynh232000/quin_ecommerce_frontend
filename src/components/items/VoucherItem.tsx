import { useSelector } from "react-redux";
import i_voucher from "../../assets/images/voucher.png";
import { IToastMessage, IVoucher } from "../../interfaces/common";
import { FormatDate, FormatPrice } from "../../utils/tool";
import { RootState } from "../../redux/reducers";
import { Button } from "@material-tailwind/react";
import Img from "../image/Img";
import { SSaveVoucher } from "../../services/AppService";
import { useState } from "react";
import ToastMessage from "../compoment/ToastMessage";
type props = {
  voucher: IVoucher;
};
function VoucherItem({ voucher }: props) {
  const { isLogin } = useSelector((state: RootState) => state.authReducer);
  const [toastMessage, setToastMessage] = useState<IToastMessage | null>(null);
  const [loading, setLoading] = useState(false);
  const [is_save, setIsSave] = useState(voucher.is_save);

  const handleSave = () => {
    setLoading(true);
    setToastMessage(null);
    SSaveVoucher(voucher.id).then((res) => {
      setLoading(false);
      setToastMessage({...res,type:res.status?'success':'error'})
      if(res.status) setIsSave(!is_save)
    });
  };
  return (
    <div className="flex bg-primary-50 items-center">
      {toastMessage &&<ToastMessage {...toastMessage}/>}
      <div className="w-[108px] h-[138px] relative">
        <img src={i_voucher} alt="" className="w-full h-full object-cover" />
        <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div className="bg-white rounded-sm ">
            <Img
              src={voucher?.shop?.logo}
              className="object-cover"
              width={64}
              height={64}
            />
          </div>
        </div>
      </div>
      <div className="bg-primary-50 px-3 flex-1 h-full flex items-center justify-between gap-2">
        <div className="flex flex-col gap-1 justify-center h-full flex-1">
          <div className="font-bold text-secondary-500">{voucher.name}</div>
          <div>Đơn tối thiểu: {FormatPrice(voucher.minimum_price)}</div>
          <div>Giảm: {FormatPrice(voucher.discount_amount)}</div>
          <div className="flex justify-between">
            <div className="text-primary-500 text-sm">Mã: QUIN2KH</div>
            <div className="text-sm text-gray-500">
              HSD: {FormatDate(voucher.created_at)}
            </div>
          </div>
        </div>
        <div className="">
          <Button
            disabled={!isLogin||loading}
            onClick={handleSave}
            className="bg-secondary-500 text-white text-[12px] min-w-[68px]  px-3 py-1 normal-case rounded-lg"
          >
            {is_save?'Bỏ lưu':'Lưu'}
            
          </Button>
        </div>
      </div>
    </div>
  );
}

export default VoucherItem;
