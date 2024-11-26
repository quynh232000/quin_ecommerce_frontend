import { FaPhone, FaRegCheckCircle } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

function PaymentPage() {
  return (
    <div className="w-content m-auto py-[40px]">
      <div className="border rounded-lg p-5 flex gap-8 shadow-lg ">
        <div className="w-30 flex flex-col gap-5 relative">
          <div className="flex gap-2  absolute">
            <span className="sr-only">Loading...</span>
            <div className="h-2 w-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.3s] "></div>
            <div className="h-2 w-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-2 w-2 bg-primary-500 rounded-full animate-bounce"></div>
          </div>
          <div className="text-center font-bold border-b py-5 text-xl">
            01:45
          </div>
          <div className="flex gap-2 items-center">
            <div>Mã đơn hàng:</div>
            <div className="font-bold text-primary-500 text-lg">ORD-234723</div>
          </div>
          <div className="bg-primary-50 p-5 rounded-xl">
            <div className="font-bold pb-3 text-lg border-b border-gray-600">
              Chi tiết thanh toán
            </div>
            <div className="flex justify-between mt-3 items-center">
              <div className="font-bold">Tổng tiền:</div>
              <div className="text-primary-500 text-2xl font-bold">
                1.67.900 đ
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 border-l pl-8 flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <div className="w-[142px]">
              <img
                className="w-full object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <FaRegCheckCircle className="text-success-500" />
                <div className="font-bold">Bước 1:</div>
                <div>Mở app ngân hàng và quét mã QR</div>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCheckCircle className="text-success-500" />
                <div className="font-bold">Bước 2:</div>
                <div>Đảm bảo nội dung chuyển khoản là QUINC256</div>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCheckCircle className="text-success-500" />
                <div className="font-bold">Bước 3:</div>
                <div>Thực hiện thanh toán</div>
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold text-lg mb-3">Chuyển khoản thủ công</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="border rounded-xl p-4 flex flex-col gap-3">
                <div>Số tài khoản</div>
                <div className="flex items-center justify-between">
                  <div className="font-bold text-2xl">1298371237</div>
                  <div>
                    <IoCopyOutline className="text-primary-500 text-xl" />
                  </div>
                </div>
              </div>
              <div className="border rounded-xl p-4 flex flex-col gap-3">
                <div>Tên tài khoản</div>
                <div className="flex items-center justify-between">
                  <div className="font-bold text-2xl">NGUYEN VAN QUYNH</div>
                  <div>
                    <IoCopyOutline className="text-primary-500 text-xl" />
                  </div>
                </div>
              </div>
              <div className="border rounded-xl p-4 flex flex-col gap-3">
                <div>Nội dung chuyển khoản</div>
                <div className="flex items-center justify-between">
                  <div className="font-bold text-2xl text-primary-500">
                    1298371237
                  </div>
                  <div>
                    <IoCopyOutline className="text-primary-500 text-xl" />
                  </div>
                </div>
              </div>
              <div className="border rounded-xl p-4 flex flex-col gap-3">
                <div>Chi nhánh ngân hàng</div>
                <div className="flex items-center justify-between">
                  <div className="font-bold text-2xl">Vietinbank Thủ Đức</div>
                  <div>
                    <IoCopyOutline className="text-primary-500 text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="font-bold text-lg mb-3">Lưu ý</div>
            <div className="flex flex-col gap-2 mt-3">
              <div className="text-warning-500 my-2">
                Tối đa 5 phút sau thời gian chuyển khoản, nếu hệ thống không
                phản hồi. Vui lòng liên hệ ngay bộ phận hỗ trợ của Quitn Course
              </div>

              <div className="flex items-center gap-3 text-gray-900">
                <FaPhone />
                <div>0358723520</div>
              </div>
              <div className="flex items-center gap-3 text-gray-900">
                <MdAlternateEmail />
                <div>quynh232000@gmaiil.com</div>
              </div>
              <div className="flex items-center gap-3 text-gray-900">
                <FaEarthAmericas />
                <div>https://mr-quynh.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
