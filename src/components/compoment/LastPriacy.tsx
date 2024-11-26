
import i_voucher from "../../assets/icons/last/icon-voucher.png";
import i_help from "../../assets/icons/last/icon-help.png";
import i_money from "../../assets/icons/last/icon-money.png";
import i_delivery from "../../assets/icons/last/icon-delivery.png";
function LastPriacy() {
  return (
    <div className=" grid grid-cols-4 gap-5 py-5">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="border p-3 rounded-xl">
              <img src={i_delivery} alt="" />
            </div>
            <div className="font-bold">Giao hàng miễn phí</div>
            <div>Miễn phí vận chuyển các tỉnh</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="border p-3 rounded-xl">
              <img src={i_money} alt="" />
            </div>
            <div className="font-bold">Chi tiêu tiết kiệm</div>
            <div>Chương trình flash sale mỗi ngày</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="border p-3 rounded-xl">
              <img src={i_help} alt="" />
            </div>
            <div className="font-bold">Hỗ trợ 24/7</div>
            <div>Hỗ trợ giải đáp thắc mắc 24/7</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="border p-3 rounded-xl">
              <img src={i_voucher} alt="" />
            </div>
            <div className="font-bold">Ưu đãi hấp dẫn từ Voucher</div>
            <div>Nhiều Voucher giảm giá cực sốc</div>
          </div>
        </div>
  )
}

export default LastPriacy