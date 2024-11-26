
import { FaStar } from "react-icons/fa"


function RatingStar() {
  return (
    <div className="flex text-sm">
        <FaStar className="text-warning-500"/>
        <FaStar className="text-warning-500"/>
        <FaStar className="text-warning-500"/>
        <FaStar className="text-warning-500"/>
        <FaStar className="text-gray-500"/>
    </div>
  )
}

export default RatingStar