import { Button } from "@material-tailwind/react";
import i_success from "../assets/images/checkout-success.png";
import { Link } from "react-router-dom";

function CheckoutSuccessPage() {
  return (
    <div className="flex flex-col items-center py-5">
      <div>
        <img className="max-w-[280px]" src={i_success} alt="" />
      </div>
      <div className="text-success-500 py-5 font-bold text-2xl">
        Đặt hàng thành công!
      </div>
      <div className="text-center">
        <p>Cảm ơn bạn đã tin tưởng và đặt hàng trên QUIN SHOP</p>
        <p>
          Sự ủng hộ và đồng hành của Quý Khách là niềm vui và tự hào của chúng
          tôi!
        </p>
      </div>
      <div className="my-8">
        <Link to={"/"}>
          <Button className="bg-primary-500 px-12 normal-case text-sm">Tiếp tục mua sắm</Button>
        </Link>
      </div>
    </div>
  );
}

export default CheckoutSuccessPage;
