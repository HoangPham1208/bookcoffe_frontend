export default function Category() {
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-black text-2xl not-italic font-bold">
          Đọc theo thể loại
        </h2>
        <div
          className="flex flex-row overflow-auto p-2 gap-x-5 w-full text-xl items-center align-middle font-bookTitle"
          id="book-type-content-grid"
        >
          <button className="shadow-2 hover:shadow-4 h-14 w-40 md:h-16 md:w-44 rounded-xl transition-all ease-m3-standard-accelerate shrink-0">
            Tiểu sử
          </button>
          <button className="shadow-2 hover:shadow-4 h-14 w-40 md:h-16 md:w-44 rounded-xl transition-all ease-m3-standard-accelerate shrink-0">
            Khoa học
          </button>
          <button className="shadow-2 hover:shadow-4 h-14 w-40 md:h-16 md:w-44 rounded-xl transition-all ease-m3-standard-accelerate shrink-0">
            Văn học
          </button>
          <button className="shadow-2 hover:shadow-4 h-14 w-40 md:h-16 md:w-44 rounded-xl transition-all ease-m3-standard-accelerate shrink-0">
            Lịch sử
          </button>
          <button className="shadow-2 hover:shadow-4 h-14 w-40 md:h-16 md:w-44 rounded-xl transition-all ease-m3-standard-accelerate shrink-0">
            Lãng mạn
          </button>
          <button className="shadow-2 hover:shadow-4 h-14 w-40 md:h-16 md:w-44 rounded-xl transition-all ease-m3-standard-accelerate shrink-0">
            Viễn tưởng
          </button>
        </div>
      </div>
    </>
  );
}
