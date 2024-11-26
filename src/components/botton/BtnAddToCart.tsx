import { Button } from "@material-tailwind/react"
import { FaCartShopping } from "react-icons/fa6"

function BtnAddToCart() {
  return (
    <Button className="flex min-w-[292px] justify-center items-center gap-2 bg-primary-50 hover:bg-primary-100 text-primary-500 font-bold text-md border border-primary-500">
        <FaCartShopping />
        <span>Thêm vào giỏ hàng</span>
    </Button>
  )
}

export default BtnAddToCart