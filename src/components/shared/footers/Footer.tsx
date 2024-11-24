import { Link } from "react-router-dom";
import i_vnpay from "../../../assets/images/payment/vnpay.png";
import i_momo from "../../../assets/images/payment/momo.png";
import i_mb from "../../../assets/images/payment/mb.png";
import i_cod from "../../../assets/images/payment/cod.png";
import i_facebook from "../../../assets/icons/social/facebook.png"
import i_instagram from "../../../assets/icons/social/instagram.png"
import i_youtube from "../../../assets/icons/social/youtube.png"
import i_tiktok from "../../../assets/icons/social/tiktok.png"
import i_googleplay from "../../../assets/images/googleplay.png"
import i_appstore from "../../../assets/images/appstore.png"
function Footer() {
  return (
    <div className="w-full bg-gray-50">
      <div className="w-content m-auto">
        <div className="py-5">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <div className="font-bold mb-4">Về chúng tôi</div>
              <div className="flex flex-col gap-2">
                <Link to={"#"}>Sự ra đời của thương hiệu QUINSHOP</Link>
                <Link to={"#"}>Hệ thống của hàng trên toàn quốc</Link>
                <Link to={"#"}>Tin tức mới nhất của sản phẩm</Link>
                <Link to={"#"}>Thông tin tuyển dụng nhân sự</Link>
                <Link to={"#"}>Thông tin liên hệ hỗ trợ</Link>
              </div>
            </div>
            <div>
              <div className="font-bold mb-4">Hỗ trợ khách hàng</div>
              <div className="flex flex-col gap-2">
                <Link to={"#"}>Câu hỏi thường gặp</Link>
                <Link to={"#"}>Chính sách QuinShop Small</Link>
                <Link to={"#"}>Phương thức thanh toán</Link>
                <Link to={"#"}>Chính sách bảo hành</Link>
                <Link to={"#"}>Điều kiện để trở thành người bán hàng</Link>
              </div>
            </div>
            <div>
              <div className="font-bold mb-4">Phương thức thanh toán</div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="h-[40px] hover:border-gray-300 rounded-lg cursor-pointer border border-transparent max-w-[56px]">
                    <img className="w-full h-full object-contain" src={i_cod} alt="" />
                  </div>
                  <div className="h-[40px] hover:border-gray-300 rounded-lg cursor-pointer border border-transparent max-w-[61px]">
                    <img className="w-full h-full object-contain" src={i_vnpay} alt="" />
                  </div>
                  <div className="h-[40px] hover:border-gray-300 rounded-lg cursor-pointer border border-transparent max-w-[90px]">
                    <img className="w-full h-full object-contain" src={i_mb} alt="" />
                  </div>
                  <div className="h-[40px] hover:border-gray-300 rounded-lg cursor-pointer border border-transparent max-w-[40px]">
                    <img className="w-full h-full object-contain" src={i_momo} alt="" />
                  </div>
                </div>
              </div>
              <div className="font-bold my-4 mt-6">Theo dõi chúng tôi</div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="h-[40px] hover:border-gray-300 rounded-lg cursor-pointer border border-transparent w-[40px]">
                    <img className="w-full h-full object-contain" src={i_facebook} alt="" />
                  </div>
                  <div className="h-[40px] hover:border-gray-300 rounded-lg cursor-pointer border border-transparent w-[40px]">
                    <img className="w-full h-full object-contain" src={i_instagram} alt="" />
                  </div>
                  <div className="h-[40px] hover:border-gray-300 rounded-lg cursor-pointer border border-transparent w-[40px]">
                    <img className="w-full h-full object-contain" src={i_youtube} alt="" />
                  </div>
                  <div className="h-[40px] hover:border-gray-300 rounded-lg cursor-pointer border border-transparent w-[40px]">
                    <img className="w-full h-full object-contain" src={i_tiktok} alt="" />
                  </div>
                 
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-4">Tải App QuinShop</div>
              <div className="flex gap-3">
                <div>
                  <img className="w-[120px]" src="https://hexdocs.pm/qr_code/docs/qrcode.svg" alt="" />
                </div>
                <div className="flex flex-col justify-center gap-3">
                  <div className="">
                    <img className="w-full h-full object-cover"  src={i_googleplay} alt="" />
                  </div>
                  <div className="">
                    <img className="w-full h-full object-cover" src={i_appstore} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-4">
              <div className="grid-cols-3">
    oko
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
