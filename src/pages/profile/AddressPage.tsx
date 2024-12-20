import { useEffect, useState } from "react";
import AddressItem from "../../components/items/AddressItem";
import AddressModal from "../../components/Modals/AddressModal";
import { IAddress } from "../../interfaces/common";
import { SGetMyAddresses } from "../../services/AppService";
import AddressSke from "../../components/skeleton/AddressSke";

function AddressPage() {
  const [addresses, setAddresses] = useState<IAddress[]>([]);
  const [addressEdit, setAddressEdit] = useState<IAddress | null>(null);
  const [changeGetAddress, setchangeAddresses] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(true);
    SGetMyAddresses().then((res) => {
      setLoading(false);
      if (res.status) setAddresses(res.data);
    });
  }, [changeGetAddress]);
  return (
    <div className="">
      <div className="flex items-center justify-between border-b p-5">
        <div className="text-2xl text-primary-500">Địa chỉ của tôi</div>
        <div>
          <AddressModal
            setchangeAddresses={setchangeAddresses}
            setAddressEdit={setAddressEdit}
            addressEdit={addressEdit}
          />
        </div>
      </div>
      <div className="p-5">
        {loading ? (
          <div className="flex flex-col gap-8">
            <AddressSke />
            <AddressSke />
          </div>
        ) : addresses.length > 0 ? (
          addresses.map((item) => {
            return (
              <AddressItem
                setAddressEdit={setAddressEdit}
                key={item.id}
                address={item}
                setchangeAddresses={setchangeAddresses}
              />
            );
          })
        ) : (
          <div className="text-center pt-8">
            Bạn chưa có địa chỉ nhận hàng nào!
          </div>
        )}
      </div>
    </div>
  );
}

export default AddressPage;
