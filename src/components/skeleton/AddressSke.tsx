function AddressSke() {
  return (
    <div className="animate-pulse flex justify-between">
      <div>
        <div className="flex gap-5 mb-4">
          <div className="w-32 rounded-lg h-5 bg-gray-400"></div>
          <div className="w-32 rounded-lg h-5 bg-gray-300"></div>
        </div>
        <div className="">
          <div className="w-70 rounded-lg h-5 bg-gray-300 mb-2"></div>
          <div className="w-80 rounded-lg h-5 bg-gray-300"></div>

        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex gap-3">
            <div className="w-16 h-4 bg-gray-300 rounded-md"></div>
            <div className="w-12 h-4 bg-gray-300 rounded-md"></div>
        </div>
        <div className="w-32 h-5 rounded-lg bg-gray-200 mt-5">

        </div>
      </div>
    </div>
  );
}

export default AddressSke;
