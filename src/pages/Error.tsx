import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Header from "../components/shared/headers/Header";
import Footer from "../components/shared/footers/Footer";
// import Header from "../components/shared/headers/Header";
// import Footer from "../components/shared/footers/Footer";

function Error() {
  return (
    <div className="flex flex-col w-full  min-h-[100vh]">
      <Header />
      <div className="flex-1">
        <div className="w-full">
          {/* <Header/> */}
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                  404
                </h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white py-5">
                  Không tìm thấy nội dung 😓
                </p>
                <p className="mb-4 text-md font-light text-gray-500 dark:text-gray-400">
                  URL của nội dung này đã bị thay đổi hoặc không còn tồn tại.
                  Nếu bạn đang lưu URL này, hãy thử truy cập lại từ trang chủ
                  thay vì dùng URL đã lưu.
                </p>
                <div className="flex justify-center">
                  <Link
                    to={"/"}
                    className=" w-fit flex items-center gap-2 text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
                  >
                    <IoHomeOutline className="text-xl" /> Về trang chủ
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* <Footer/> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
