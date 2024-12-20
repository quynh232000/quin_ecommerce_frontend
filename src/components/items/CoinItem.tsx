import i_xu from "../../assets/images/xu.png"
import { ICoin } from "../../interfaces/common"
import { FormatDate } from "../functions/tool"
type props={
    coin:ICoin
}
function CoinItem({coin}:props) {
  return (
    <div className='bg-primary-50 p-2 flex gap-3 border-b border-dashed border-gray-500 hover:bg-gray-50 cursor-pointer'>
        <div className='w-[108px] h-[108px] border'>
            <img className='w-full h-full rounded-md object-cover' src={i_xu} alt="" />
        </div>
        <div className='flex-1 flex flex-col justify-between'>
            <div>
                <div className='font-bold'>{coin.name}</div>
                <div className='text-gray-700'>{coin.description}</div>
            </div>
            <div className='flex items-center gap-5 text-sm text-gray-600'>
                <span>{FormatDate(coin.created_at)}</span>
            </div>
        </div>
        <div className='px-2 flex items-center'>
            <button className='border text-3xl text-warning-500   px-4 py-1'>+50</button>
        </div>
    </div>
  )
}

export default CoinItem