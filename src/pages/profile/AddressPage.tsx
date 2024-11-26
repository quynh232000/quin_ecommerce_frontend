import AddressItem from "../../components/items/AddressItem";
import AddressModal from "../../components/Modals/AddressModal";

function AddressPage() {
  return (
    <div className="">
      <div className="flex items-center justify-between border-b p-5">
        <div className="text-2xl text-primary-500">Địa chỉ của tôi</div>
        <div>
          <AddressModal />
        </div>
      </div>
      <div className="p-5">
        <AddressItem />
        <AddressItem />
        <AddressItem />
        <AddressItem />
        <AddressItem />
      </div>
    </div>
  );
}

export default AddressPage;
