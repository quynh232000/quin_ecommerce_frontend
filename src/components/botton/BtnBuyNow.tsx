import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function BtnBuyNow() {
  return (
    <Link to={"/cart"}>
      <Button className=" min-w-[292px] flex justify-center  items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold text-md border border-primary-500">
        <span>Mua ngay</span>
      </Button>
    </Link>
  );
}

export default BtnBuyNow;
