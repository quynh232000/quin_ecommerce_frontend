import Pagination from "../../components/compoment/Pagination"
import ProductItem from "../../components/items/ProductItem"


function FavouritePage() {
  return (
    <div className="p-5">
      <div className="text-2xl text-primary-500">Sản phẩm đã yêu thích</div>

      <div className="flex flex-col gap-5 py-5">
        <div className="grid gap-4 grid-cols-4">
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
        </div>
        <div className="flex justify-end mt-5">
          <Pagination/>
        </div>
      </div>
    </div>
  )
}

export default FavouritePage