import { Breadcrumbs, Carousel } from "@material-tailwind/react";
import Image from "../components/image/Image";
import {  FaStar } from "react-icons/fa";
import i_flash from "../assets/images/bg_flashsale.png";
import i_flash_text from "../assets/images/flash_sale_text.png";
import { CiClock2 } from "react-icons/ci";
import BtnAddToCart from "../components/botton/BtnAddToCart";
import BtnBuyNow from "../components/botton/BtnBuyNow";
import CardShop from "../components/shared/CardShop";
import BtnSeeMore from "../components/botton/BtnSeeMore";
import ProductItem from "../components/items/ProductItem";
import LastPriacy from "../components/compoment/LastPriacy";
import ProductReview from "../components/compoment/ProductReview";
import { LuMinus, LuPlus } from "react-icons/lu";
function DetailPage() {
  return (
    <div className="w-content m-auto flex flex-col gap-[40px] py-5">
      <div className="flex flex-col gap-5">
        <Breadcrumbs className="bg-white text-primary-500">
          <a href="#" className="opacity-60  text-primary-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>
          <a href="#" className="opacity-60  text-primary-500">
            <span>Điện thoại</span>
          </a>
          <a href="#" className="opacity-60  text-primary-500">
            Iphone
          </a>
          <a href="#">Điện thoại Apple iPhone 15 Pro Max 256GB</a>
        </Breadcrumbs>
        <div className="flex gap-5">
          <div className="w-40 flex flex-col gap-4">
            <div className="flex justify-center p-4">
              <div className="h-[330px]  bg-red-500">
                <Image
                  className="h-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvgwqs-rwDYOH3yT5CSj_euhGprQ39XwAkA&s"
                />
              </div>
            </div>
            <div>
              <Carousel className="rounded-xl">
                <div className="grid grid-cols-5 gap-2">
                  <div className="w-[84px] h-[84px] border rounded-xl p-2 hover:border-primary-500 cursor-pointer">
                    <Image
                      className="w-full h-full object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvgwqs-rwDYOH3yT5CSj_euhGprQ39XwAkA&s"
                    />
                  </div>
                  <div className="w-[84px] h-[84px] border rounded-xl p-2 hover:border-primary-500 cursor-pointer">
                    <Image
                      className="w-full h-full object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvgwqs-rwDYOH3yT5CSj_euhGprQ39XwAkA&s"
                    />
                  </div>
                  <div className="w-[84px] h-[84px] border rounded-xl p-2 hover:border-primary-500 cursor-pointer">
                    <Image
                      className="w-full h-full object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvgwqs-rwDYOH3yT5CSj_euhGprQ39XwAkA&s"
                    />
                  </div>
                  <div className="w-[84px] h-[84px] border rounded-xl p-2 hover:border-primary-500 cursor-pointer">
                    <Image
                      className="w-full h-full object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvgwqs-rwDYOH3yT5CSj_euhGprQ39XwAkA&s"
                    />
                  </div>
                  <div className="w-[84px] h-[84px] border rounded-xl p-2 hover:border-primary-500 cursor-pointer">
                    <Image
                      className="w-full h-full object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvgwqs-rwDYOH3yT5CSj_euhGprQ39XwAkA&s"
                    />
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <h2 className=" text-2xl">
                Điện thoại Iphone 15 Pro mới ra mắt với cam đa chiều sang trọng,
                hứa hẹn bùng nổ
              </h2>
              <div className="flex items-center gap-5">
                <div className="flex gap-3 items-center">
                  <span className="text-gray-900">5.0</span>
                  <div className="flex gap-1 text-warning-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <span className="text-gray-500 ">|</span>
                <div className="flex gap-2">
                  <span className="text-gray-900">502</span>
                  <span className="text-gray-500">đánh giá</span>
                </div>
              </div>
              <div>
                <div className=" relative">
                  <img
                    className="h-[36px] w-full object-cover"
                    src={i_flash}
                    alt=""
                  />
                  <div className=" absolute top-[6px] left-2">
                    <img className="h-[24px]" src={i_flash_text} alt="" />
                  </div>
                  <div className=" absolute top-0 right-0 bottom-0 left-0 flex justify-end items-center pr-5 gap-5">
                    <div className="flex items-center gap-2 text-white">
                      <CiClock2 />
                      <span className="text-white">Kết thúc trong</span>
                    </div>
                    <div className="flex items-center gap-1 text-white">
                      <span className="bg-white text-warning-500 font-bold px-1 rounded-sm">
                        06
                      </span>
                      <span>:</span>
                      <span className="bg-white text-warning-500 font-bold px-1 rounded-sm">
                        06
                      </span>
                      <span>:</span>
                      <span className="bg-white text-warning-500 font-bold px-1 rounded-sm">
                        06
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-50 flex gap-5 items-center p-5">
                  <div className="text-warning-500 text-4xl font-bold">
                    1.550.000đ
                  </div>
                  <del className="text-lg text-gray-600">1.750.000đ</del>
                  <div className="border bg-warning-100 py-1 px-3 text-sm border-gray-300 rounded-lg text-warning-500 font-bold">
                    -20%
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex items-center">
              <div className="w-25">Mã giảm giá của Shop</div>
              <div className="flex gap-4">
                <div className="border bg-warning-100 py-1 px-5 text-sm border-gray-300 rounded-lg text-warning-500 font-bold">
                  Giảm 10 %
                </div>
                <div className="border bg-warning-100 py-1 px-5 text-sm border-gray-300 rounded-lg text-warning-500 font-bold">
                  Giảm 10 %
                </div>
                <div className="border bg-warning-100 py-1 px-5 text-sm border-gray-300 rounded-lg text-warning-500 font-bold">
                  Giảm 10 %
                </div>
                <div className="border bg-warning-100 py-1 px-5 text-sm border-gray-300 rounded-lg text-warning-500 font-bold">
                  Giảm 10 %
                </div>
              </div>
            </div>
            <div className=" flex items-center">
              <div className="w-25">Số lượng</div>
              <div className="flex flex-1 items-center gap-8">
                <div className="flex items-center border border-gray-300">
                  <button className="p-3 hover:bg-primary-100 border-r border-gray-300">
                    <LuMinus />
                  </button>
                  <div className="w-[74px] h-full ">
                    <input
                      type="text"
                      className="w-full text-center  font-bold h-full "
                      value={1}
                      min={1}
                    />
                  </div>
                  <button className="p-3 hover:bg-primary-100 border-l border-gray-300">
                    <LuPlus />
                  </button>
                </div>
                <div className="text-gray-600">134 sản phẩm sãn có</div>
              </div>
            </div>
            <div className="flex items-center gap-8 mt-5">
              <BtnAddToCart />
              <BtnBuyNow />
            </div>
          </div>
        </div>
      </div>
      {/* card shop */}
      <CardShop />
      {/* detail */}
      <div className="border rounded-lg p-5 flex flex-col gap-5">
        <div className="bg-gray-50 p-2 px-3 font-bold text-primary-500 text-lg border-b border-primary-500">
          Chi tiết sản phẩm
        </div>
        <div className="flex flex-col gap-2 py-3">
          <div className="flex">
            <div className="w-15 font-bold text-gray-600">Danh mục</div>
            <div className="text-primary-500 flex gap-2 font-bold">
              <span>Quin Shop</span>
              <span> | </span>
              <span> Điện thoại </span>
              <span> | </span>
              <span> Iphone </span>
            </div>
          </div>
          <div className="flex">
            <div className="w-15  text-gray-600">Kho</div>
            <div className=" flex gap-2 ">
              <span>100</span>
            </div>
          </div>
          <div className="flex">
            <div className="w-15  text-gray-600">Hạn sử dụng</div>
            <div className=" flex gap-2 ">
              <span>12/12/2026</span>
            </div>
          </div>
          <div className="flex">
            <div className="w-15  text-gray-600">Chất liệu</div>
            <div className=" flex gap-2 ">
              <span>Bạc</span>
            </div>
          </div>
          <div className="flex">
            <div className="w-15  text-gray-600">Thương hiệu</div>
            <div className=" flex gap-2 ">
              <span>Apple</span>
            </div>
          </div>
          <div className="flex">
            <div className="w-15  text-gray-600">Xuất sứ</div>
            <div className=" flex gap-2 ">
              <span>Trung Quốc</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-50    font-bold border-b border-gray-300">
          <button className="text-primary-500 px-5 py-2 border-b-2 border-primary-500 hover:text-primary-500">
            MÔ TẢ SẢN PHẨM
          </button>
          <button className="text-gray-600 px-5 py-2 border-b border-transparent hover:text-primary-500">
            ĐÁNH GIÁ SẢN PHẨM
          </button>
          <button className="text-gray-600 px-5 py-2 border-b border-transparent hover:text-primary-500">
            SẢN PHẨM TƯƠNG TỰ
          </button>
        </div>
        {/* description */}
        <div className="py-3 max-h-[560px] overflow-hidden relative hidden">
          <p>
            Thông tin bảo hành: Bảo hành: 12 tháng kể từ ngày kích hoạt sản
            phẩm. Kích hoạt bảo hành tại: https://checkcoverage.apple.com/vn/en/
            Hướng dẫn kiểm tra địa điểm bảo hành gần nhất: Bước 1: Truy cập vào
            đường link https://getsupport.apple.com/?caller=grl&locale=en_VN
            Bước 2: Chọn sản phẩm. Bước 3: Điền Apple ID, nhập mật khẩu. Sau khi
            hoàn tất, hệ thống sẽ gợi ý những trung tâm bảo hành gần nhất. Tại
            Việt Nam, về chính sách bảo hành và đổi trả của Apple, "sẽ được áp
            dụng chung" theo các điều khoản được liệt kê dưới đây: 1 Chính sách
            chung:
            https://www.apple.com/legal/warranty/products/warranty-rest-of-apac-vietnamese.html
            2 Chính sách cho phụ kiện:
            https://www.apple.com/legal/warranty/products/accessory-warranty-vietnam.html
            3 Các trung tâm bảo hành Apple ủy quyền tại Việt Nam:
            https://getsupport.apple.com/repair-locations?locale=vi_VN Qúy khách
            vui lòng đọc kỹ hướng dẫn và quy định trên các trang được Apple công
            bố công khai, Shop chỉ có thể hỗ trợ theo đúng chính sách được đăng
            công khai của thương hiệu Apple tại Việt Nam, Bài viết tham khảo
            chính sách hỗ trợ của nhà phân phối tiêu biểu:
            https://synnexfpt.com/bao-hanh/chinh-sach-bao-hanh/?agency-group=1&agency-slug=san-pham-apple
            Để thuận tiện hơn trong việc xử lý khiếu nại, đơn hàng của Brand
            Apple thường có giá trị cao, Qúy khách mua hàng vui lòng quay lại
            Clip khui mở kiện hàng (khách quan nhất có thể, đủ 6 mặt) giúp
            Shopee có thêm căn cứ để làm việc với các bên và đẩy nhanh tiến độ
            xử lý giúp Qúy khách mua hàng.
          </p>
          <img
            className="mt-2 w-full object-contain"
            src="https://down-vn.img.susercontent.com/file/8ab6f0726e85615d09f59b205d62a9d7@resize_w450_nl.webp"
            alt=""
          />
          <div className=" absolute left-0 right-0 bottom-0 h-[60px] flex justify-center items-center bg-opacity-25  to-gray-50 bg-white bg-gradient-to-t ">
            <button className="bg-white py-2 px-5 rounded-xl hover:shadow-md text-primary-500">
              Xem thêm
            </button>
          </div>
        </div>
        {/* review product*/}
        <div className="py-3">
            <ProductReview/>
        </div>
      </div>

      {/* sp da xem */}
      <div>
        <div className="flex justify-between items-center border-b-2 border-primary-500 pb-3 mb-5">
          <div className="flex items-center gap-8">
            <div className="text-2xl  text-primary-500">Sản phẩm đã xem</div>
          </div>
          <div>
            <BtnSeeMore />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        <div className="flex justify-center mt-16 mb-10">
          <button className="bg-primary-50 py-2 px-24 rounded-sm text-primary-500 hover:bg-primary-100">
            Xem thêm
          </button>
        </div>
      </div>

      {/* last */}

      <LastPriacy />
    </div>
  );
}

export default DetailPage;
