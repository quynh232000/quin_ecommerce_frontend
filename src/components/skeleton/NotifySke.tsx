function NotifySke() {
  return (
    <div className="animate-pulse flex  gap-4 bg-gray-50 p-3">
      <div className="w-[108px] h-[108px] bg-gray-200 rounded-lg"></div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-2">
          <div className="w-30 rounded-full h-5 bg-gray-200"></div>
          <div className="w-50 rounded-full h-5 bg-gray-200"></div>
        </div>
        <div className="flex gap-4">
          <div className="w-10 rounded-full h-4 bg-gray-200"></div>
          <div className="w-10 rounded-full h-4 bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}

export default NotifySke;
