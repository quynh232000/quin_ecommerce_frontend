import { Link } from "react-router-dom"


function ProductcartItem() {
  return (
    <div className="flex flex-1  items-center ">
    <div className="w-60">
      <div className=" flex items-center gap-1">
        <div className="flex items-center ">
          <div className="w-[90px] h-[90px] border rounded-lg p-1">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://lamia.com.vn/storage/vest/322701978-5343207062449814-8945956417939669422-n-1554088121696206.jpg"
              alt=""
            />
          </div>
          <Link to={"/detail"} className="flex-1 px-4">
            <h2 className="line-clamp-2 hover:text-primary-500">
              Điện thoại Iphone 15 Pro mới ra mắt với cam đa chiều
              sang trọng, hứa hẹn bùng nổ
            </h2>
          </Link>
        </div>
      </div>
    </div>
    <div className="flex-1 grid grid-cols-12 items-center">
      <div className="col-span-4 text-gray-600 font-bold text-center">
        100.000d
      </div>
      <div className="col-span-4 flex items-center justify-center">
        <div>
          <div className="flex items-center border border-gray-300 rounded-lg py-1 bg-white">
            <div className="w-[74px] h-full ">
              <input
                type="text"
                readOnly
                disabled
                className="w-full text-center   h-full rounded-lg"
                value={1}
                min={1}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 text-center text-primary-500 font-bold">
        100.000d
      </div>
    </div>
  </div>
  )
}

export default ProductcartItem