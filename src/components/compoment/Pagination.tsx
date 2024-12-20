import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { IPagination } from "../../interfaces/common";
import { Button } from "@material-tailwind/react";
type props = {
  pagination: IPagination;
  setPage: (i: number) => void;
  page: number;
};
function Pagination({ pagination, page, setPage }: props) {
  const totalPage = Math.ceil(pagination.total / pagination.per_page);
  if(totalPage <=1){
    return null;
  }
  return (
    <div className="flex gap-1 font-bold text-gray-600">
      <Button
        disabled={page == 1}
        onClick={() => setPage(page - 1)}
        className="bg-gray-300 p-1 rounded-lg hover:bg-primary-300 w-[42px] h-[42px] text-center flex justify-center items-center text-2xl"
      >
        <MdOutlineChevronLeft />
      </Button>
      <div className="flex gap-1 ">
        {Array.from(
          { length: Math.ceil(pagination.total / pagination.per_page) },
          (_, index) => (
            <Button
              disabled={page == index + 1}
              onClick={() => setPage(index + 1)}
              className={
                " p-1 rounded-lg bg-gray-300 text-gray-600 hover:bg-primary-600 hover:text-white w-[42px] h-[42px] text-center  " +
                (page == index + 1 ? "  text-white bg-primary-500 border-primary-500" : "")
              }
            >
              {index + 1}
            </Button>
          )
        )}
      </div>
      <Button
        disabled={page == totalPage}
        onClick={() => setPage(page + 1)}
        className="bg-gray-300 p-1 rounded-lg hover:bg-primary-300 w-[42px] h-[42px]  flex justify-center items-center text-2xl"
      >
        <MdOutlineChevronRight />
      </Button>
    </div>
  );
}

export default Pagination;
