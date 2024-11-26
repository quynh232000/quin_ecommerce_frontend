import { FaAngleRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function BtnSeeMore() {
  return (
    <Link to={"#"} className="flex justify-center items-center gap-2 text-primary-500 hover:text-primary-600">
        Xem tất cả
        <FaAngleRight />
    </Link>
  )
}

export default BtnSeeMore