import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Carousel,
  Slider,
} from "@material-tailwind/react";
import CardShop from "../components/shared/CardShop";
import VoucherItem from "../components/items/VoucherItem";
import ProductItem from "../components/items/ProductItem";
import i_banner from "../assets/banner/banner_shop.png";
import Pagination from "../components/compoment/Pagination";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { useState } from "react";
import LastPriacy from "../components/compoment/LastPriacy";
function ShopPage() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <div className="w-content m-auto flex flex-col gap-[40px] py-[40px]">
      <CardShop />
      <div>
        <Carousel>
          <div className="grid grid-cols-3 gap-4">
            <VoucherItem />
            <VoucherItem />
            <VoucherItem />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <VoucherItem />
            <VoucherItem />
            <VoucherItem />
          </div>
        </Carousel>
      </div>
      <div className="text-primary-500 text-3xl">Gợi ý cho bạn</div>
      <div className="">
        <Carousel>
          <div className="grid grid-cols-5 gap-4">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </Carousel>
      </div>
      <div>
        <Carousel>
          <div className="h-[460px]">
            <img className="w-full h-full object-cover" src={i_banner} alt="" />
          </div>
        </Carousel>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className=" col-span-2   ">
          <div className="flex gap-2 items-center text-2xl font-bold">
            <IoFilter />
            Danh mục
          </div>
          <div className="flex flex-col gap-4 py-2">
            <div>
              <Accordion open={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  <div className="flex items-center justify-between w-full text-primary-500">
                    <div className="font-normal text-[16px]">
                      Thời trang nam
                    </div>
                    <div>
                      <FaAngleUp className="font-thin" />
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <div className=" pl-3 flex flex-col gap-2">
                    <div className="hover:text-primary-500 cursor-pointer text-primary-500">
                      Áo thun nam
                    </div>
                    <div className="hover:text-primary-500 cursor-pointer ">
                      Áo thun nam
                    </div>
                    <div className="hover:text-primary-500 cursor-pointer">
                      Áo thun nam
                    </div>
                    <div className="hover:text-primary-500 cursor-pointer">
                      Áo thun nam
                    </div>
                    <div className="hover:text-primary-500 cursor-pointer">
                      Áo thun nam
                    </div>
                    <div className="hover:text-primary-500 cursor-pointer">
                      Áo thun nam
                    </div>
                    <div className="hover:text-primary-500 cursor-pointer">
                      Áo thun nam
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  <div className="flex items-center justify-between w-full">
                    <div className="font-normal text-[16px]">
                      Thời trang nam
                    </div>
                    <div>
                      <FaAngleDown className="font-thin" />
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <div className=" pl-3 flex flex-col gap-2">
                    <div className="hover:text-primary-500 cursor-pointer text-primary-500">
                      Áo thun nam
                    </div>
                    <div className="hover:text-primary-500 cursor-pointer ">
                      Áo thun nam
                    </div>
                    <div className="hover:text-primary-500 cursor-pointer">
                      Áo thun nam
                    </div>
                    <div className="hover:text-primary-500 cursor-pointer">
                      Áo thun nam
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  <div className="flex items-center justify-between w-full">
                    <div className="font-normal text-[16px]">
                      Thời trang nam
                    </div>
                    <div>
                      <FaAngleDown className="font-thin" />
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <div className=" pl-3 flex flex-col gap-2">
                    <div className="hover:text-primary-500 cursor-pointer text-primary-500">
                      Áo thun nam
                    </div>
                    <div className="hover:text-primary-500 cursor-pointer ">
                      Áo thun nam
                    </div>
                    <div className="hover:text-primary-500 cursor-pointer">
                      Áo thun nam
                    </div>
                    <div className="hover:text-primary-500 cursor-pointer">
                      Áo thun nam
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 4}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                  <div className="flex items-center justify-between w-full">
                    <div className="font-normal text-[16px]">
                      Thời trang nam
                    </div>
                    <div>
                      <FaAngleDown className="font-thin" />
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <div className=" pl-3 flex flex-col gap-2">
                    <div className="hover:text-primary-500 cursor-pointer text-primary-500">
                      Áo thun nam
                    </div>
                    <div className="hover:text-primary-500 cursor-pointer ">
                      Áo thun nam
                    </div>
                    <div className="hover:text-primary-500 cursor-pointer">
                      Áo thun nam
                    </div>
                    <div className="hover:text-primary-500 cursor-pointer">
                      Áo thun nam
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <div className="font-bold border-t pt-2 mt-2">
                Nhập giá sản phẩm
              </div>
              <div className="flex justify-between w-full items-center">
                <div className="w-40">
                  <input
                    className="flex-1 p-1 rounded-md text-end border w-full"
                    type="text"
                    placeholder="50.000đ"
                  />
                </div>
                <span>~</span>
                <div className="w-40">
                  <input
                    className="border w-full p-1 rounded-md"
                    type="text"
                    placeholder="12.000.000đ"
                  />
                </div>
              </div>
              <div className="my-2 w-full">
                <Slider defaultValue={50} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-10 pl-5">
          <div className="bg-gray-50 p-2 rounded-md flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="font-bold">Sắp xếp theo:</div>
              <div className="border rounded-lg">
                <select
                  name=""
                  id=""
                  className="p-2 px-3 rounded-lg min-w-[120px]"
                >
                  <option value="">Sắp xếp theo</option>
                  <option value="">Phổ biến nhất</option>
                  <option value="">Mới nhất</option>
                  <option value="">Giá: Từ thấp tới cao</option>
                  <option value="">Giá: Từ cao tới thấp</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-bold text-gray-600">2/9</div>
              <div className="text-2xl text-gray-600 flex gap-1">
                <button className="bg-gray-200 rounded-lg p-1 hover:bg-primary-100 hover:text-primary-500">
                  <MdOutlineChevronLeft />
                </button>
                <button className="bg-gray-200 rounded-lg p-1 hover:bg-primary-100 hover:text-primary-500">
                  <MdOutlineChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 py-5">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
          <div className="flex justify-end py-12">
            <Pagination />
          </div>
        </div>
      </div>
      <LastPriacy/>
    </div>
  );
}

export default ShopPage;
