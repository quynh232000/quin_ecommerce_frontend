import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

function Pagination() {
  return (
    <div className="flex gap-1 font-bold text-gray-600">
      <button className="bg-gray-100 p-1 rounded-lg hover:bg-primary-100 w-[42px] h-[42px] text-center flex justify-center items-center text-2xl">
        <MdOutlineChevronLeft />
      </button>
      <div className="flex gap-1 ">
        <button className=" p-1 rounded-lg hover:bg-primary-100 w-[42px] h-[42px] text-center bg-primary-500 text-white">
          1
        </button>
        <button className="bg-gray-100 p-1 rounded-lg hover:bg-primary-100 w-[42px] h-[42px] text-center">
          2
        </button>
        <button className="bg-gray-100 p-1 rounded-lg hover:bg-primary-100 w-[42px] h-[42px] text-center">
          3
        </button>
        <button className="bg-gray-100 p-1 rounded-lg hover:bg-primary-100 w-[42px] h-[42px] text-center">
          ..
        </button>
      </div>
      <button className="bg-gray-100 p-1 rounded-lg hover:bg-primary-100 w-[42px] h-[42px]  flex justify-center items-center text-2xl">
        <MdOutlineChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
