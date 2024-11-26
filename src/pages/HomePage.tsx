import { Carousel } from "@material-tailwind/react";
import i_banner1 from "../assets/banner/banner1.png";
import i_banner2 from "../assets/banner/banner2.png";
import i_banner3 from "../assets/banner/banner3.png";
import CateItem from "../components/items/CateItem";
import i_flash from "../assets/images/bg_flashsale.png";
import i_flash_top from "../assets/images/flash_top.png";
import ProductItem from "../components/items/ProductItem";
import VoucherItem from "../components/items/VoucherItem";
import { MdOutlineSecurity } from "react-icons/md";
import BtnSeeMore from "../components/botton/BtnSeeMore";
import i_banner_mall from "../assets/banner/banner_mall.png";
import ProductFind from "../components/items/ProductFind";
import NewsItem from "../components/items/NewsItem";
import LastPriacy from "../components/compoment/LastPriacy";


const HomePage = () => {
  return (
    <div className="flex flex-col gap-[40px] py-[40px]">
      {/* banner cate */}
      <div className="w-content m-auto flex flex-col gap-[40px]">
        <div className="grid grid-cols-12 gap-4">
          <div className=" col-span-8">
            <Carousel className="bg-primary-500">
              <div className="w-full max-h-[312px] overflow-hidden">
                <img
                  src={i_banner1}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-full max-h-[312px] overflow-hidden">
                <img
                  src={i_banner1}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </Carousel>
          </div>
          <div className="col-span-4 flex flex-col justify-between">
            <div>
              <img
                className="w-full h-full object-cover"
                src={i_banner2}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full object-cover"
                src={i_banner3}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* cate */}
        <div className=" grid grid-cols-12 gap-4">
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
        </div>
      </div>
      <div className=" relative ">
        <div className="w-full h-full">
          <img src={i_flash} className="w-full h-[620px] object-cover" alt="" />
        </div>
        <div className=" absolute top-0 left-0 right-0 bottom-0 w-content m-auto flex flex-col gap-[20px] py-[20px]">
          <div className="flex items-center justify-between">
            <div>
              <img src={i_flash_top} alt="" />
            </div>
            <div className="bg-white rounded-xl flex items-center">
              <div className="bg-secondary-500 flex items-center justify-center py-2 min-w-[240px] gap-4 rounded-xl px-8">
                <div className="text-white">Chỉ còn</div>
                <div className="flex gap-1 items-center">
                  <span className="bg-white text-secondary-500 h-fit font-bold p-2 py-1 rounded-lg">
                    06
                  </span>
                  <span>:</span>
                  <span className="bg-white text-secondary-500 h-fit font-bold p-2 py-1 rounded-lg">
                    06
                  </span>
                  <span>:</span>
                  <span className="bg-white text-secondary-500 h-fit font-bold p-2 py-1 rounded-lg">
                    06
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center px-8 gap-2">
                <div>Sắp diễn ra:</div>
                <div className="flex gap-2">
                  <div>21:00</div>
                  <div>-</div>
                  <div>23:00</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Carousel transition={{ duration: 2 }} className="rounded-xl">
              <div className="w-full">
                <div className="grid grid-cols-5 gap-4 ">
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </div>
              </div>
              <div>
                <div className="grid grid-cols-5 gap-4">
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="w-content m-auto flex flex-col gap-[40px]">
        {/* voucher */}
        <div className="">
          <Carousel className="rounded-xl">
            <div className=" grid grid-cols-3 gap-4">
              <VoucherItem />
              <VoucherItem />
              <VoucherItem />
            </div>
            <div className=" grid grid-cols-3 gap-4">
              <VoucherItem />
              <VoucherItem />
              <VoucherItem />
            </div>
          </Carousel>
        </div>
        {/* shop mall */}
        <div>
          <div className="flex justify-between items-center border-b-2 border-primary-500 pb-3 mb-5">
            <div className="flex items-center gap-8">
              <div className="text-3xl font-bold text-primary-500">
                QUIN MALL
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineSecurity className="text-primary-500" />
                <div>Hàng chính hãng 100%</div>
              </div>
            </div>
            <div>
              <BtnSeeMore />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className=" col-span-4">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={i_banner_mall}
                alt=""
              />
            </div>
            <div className=" col-span-8">
              <div className="grid grid-cols-4 gap-2">
                <div className=" relative ">
                  <img
                    className="w-full h-full object-cover max-h-[210px]"
                    src="https://down-vn.img.susercontent.com/file/vn-50009109-38bd1887c97742c1ccadde3fb952c75f@resize_w201_nl.webp"
                    alt=""
                  />
                  <div className=" absolute bottom-0 text-center left-0 right-0 font-bold text-danger-700">
                    Mua 1 tặng 1
                  </div>
                </div>
                <div className=" relative ">
                  <img
                    className="w-full h-full object-cover max-h-[210px]"
                    src="https://down-vn.img.susercontent.com/file/vn-50009109-38bd1887c97742c1ccadde3fb952c75f@resize_w201_nl.webp"
                    alt=""
                  />
                  <div className=" absolute bottom-0 text-center left-0 right-0 font-bold text-danger-700">
                    Mua 1 tặng 1
                  </div>
                </div>
                <div className=" relative ">
                  <img
                    className="w-full h-full object-cover max-h-[210px]"
                    src="https://down-vn.img.susercontent.com/file/vn-50009109-38bd1887c97742c1ccadde3fb952c75f@resize_w201_nl.webp"
                    alt=""
                  />
                  <div className=" absolute bottom-0 text-center left-0 right-0 font-bold text-danger-700">
                    Mua 1 tặng 1
                  </div>
                </div>
                <div className=" relative ">
                  <img
                    className="w-full h-full object-cover max-h-[210px]"
                    src="https://down-vn.img.susercontent.com/file/vn-50009109-38bd1887c97742c1ccadde3fb952c75f@resize_w201_nl.webp"
                    alt=""
                  />
                  <div className=" absolute bottom-0 text-center left-0 right-0 font-bold text-danger-700">
                    Mua 1 tặng 1
                  </div>
                </div>
                <div className=" relative ">
                  <img
                    className="w-full h-full object-cover max-h-[210px]"
                    src="https://down-vn.img.susercontent.com/file/vn-50009109-38bd1887c97742c1ccadde3fb952c75f@resize_w201_nl.webp"
                    alt=""
                  />
                  <div className=" absolute bottom-0 text-center left-0 right-0 font-bold text-danger-700">
                    Mua 1 tặng 1
                  </div>
                </div>
                <div className=" relative ">
                  <img
                    className="w-full h-full object-cover max-h-[210px]"
                    src="https://down-vn.img.susercontent.com/file/vn-50009109-38bd1887c97742c1ccadde3fb952c75f@resize_w201_nl.webp"
                    alt=""
                  />
                  <div className=" absolute bottom-0 text-center left-0 right-0 font-bold text-danger-700">
                    Mua 1 tặng 1
                  </div>
                </div>
                <div className=" relative ">
                  <img
                    className="w-full h-full object-cover max-h-[210px]"
                    src="https://down-vn.img.susercontent.com/file/vn-50009109-38bd1887c97742c1ccadde3fb952c75f@resize_w201_nl.webp"
                    alt=""
                  />
                  <div className=" absolute bottom-0 text-center left-0 right-0 font-bold text-danger-700">
                    Mua 1 tặng 1
                  </div>
                </div>
                <div className=" relative ">
                  <img
                    className="w-full h-full object-cover max-h-[210px]"
                    src="https://down-vn.img.susercontent.com/file/vn-50009109-38bd1887c97742c1ccadde3fb952c75f@resize_w201_nl.webp"
                    alt=""
                  />
                  <div className=" absolute bottom-0 text-center left-0 right-0 font-bold text-danger-700">
                    Mua 1 tặng 1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tim hang dau */}
        <div>
          <div className="flex justify-between items-center border-b-2 border-primary-500 pb-3 mb-5">
            <div className="flex items-center gap-8">
              <div className="text-2xl  text-primary-500">
                Tìm kiếm hàng đầu
              </div>
            </div>
            <div>
              <BtnSeeMore />
            </div>
          </div>
          <div>
            <Carousel className="">
              <div className=" grid grid-cols-6 gap-4">
                <ProductFind />
                <ProductFind />
                <ProductFind />
                <ProductFind />
                <ProductFind />
                <ProductFind />
              </div>
            </Carousel>
          </div>
        </div>
        {/* gioi y */}
        <div>
          <div className="flex justify-between items-center border-b-2 border-primary-500 pb-3 mb-5">
            <div className="flex items-center gap-8">
              <div className="text-2xl  text-primary-500">Gợi ý cho bạn</div>
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
        </div>
        {/* tin tuc */}
        <div>
          <div className="flex justify-between items-center border-b-2 border-primary-500 pb-3 mb-5">
            <div className="flex items-center gap-8">
              <div className="text-2xl  text-primary-500">Bảng tin</div>
            </div>
            <div>
              <BtnSeeMore />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </div>
        </div>

        {/* last */}
        <LastPriacy/>
      </div>
    </div>
  );
};

export default HomePage;
