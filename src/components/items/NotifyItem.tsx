

function NotifyItem() {
  return (
    <div className='bg-primary-50 p-2 flex gap-3 border-b border-dashed border-gray-500 hover:bg-gray-50 cursor-pointer'>
        <div className='w-[108px] h-[108px] border'>
            <img className='w-full h-full rounded-md object-cover' src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg" alt="" />
        </div>
        <div className='flex-1 flex flex-col justify-between'>
            <div>
                <div className='font-bold'>Chúc mừng sinh nhật bạn Võ Thị Hồng Nhung</div>
                <div className='text-gray-700'>Chúc mừng sinh nhật bạn Võ Thị Hồng Nhung 2024-12-21, sinh nhật hạnh phúc 
                không lo về giá cùng hàng ngàn mã khuyến mãi và nhiều qùa tặng hấp dẫn</div>
            </div>
            <div className='flex items-center gap-5 text-sm text-gray-600'>
                <span>2024-01-28</span>
                <span>16:31:45</span>
            </div>
        </div>
        <div className='px-2'>
            <button className='border border-gray-300 text-sm px-4 py-1 rounded-lg bg-white hover:bg-primary-50'>Xem chi tiết</button>
        </div>
    </div>
  )
}

export default NotifyItem