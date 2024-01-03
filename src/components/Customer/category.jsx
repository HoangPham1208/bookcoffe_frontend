export default function Category() {
  return (
    <>
      <h2 className="text-black text-2xl not-italic font-bold mb-5">
        Đọc theo thể loại
      </h2>
      <div
        className="flex flex-wrap gap-x-5 gap-y-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 w-full text-xl items-center align-middle font-bookTitle pb-2"
        id="book-type-content-grid"
      >
        <button className="shadow-2 hover:shadow-4 h-16 w-44 rounded-xl transition-all ease-m3-standard-accelerate">
          Tiểu sử
        </button>
        <button className="shadow-2 hover:shadow-4 h-16 w-44 rounded-xl transition-all ease-m3-standard-accelerate">
          Khoa học
        </button>
        <button className="shadow-2 hover:shadow-4 h-16 w-44 rounded-xl transition-all ease-m3-standard-accelerate">
          Văn học
        </button>
        <button className="shadow-2 hover:shadow-4 h-16 w-44 rounded-xl transition-all ease-m3-standard-accelerate">
          Lịch sử
        </button>
        <button className="shadow-2 hover:shadow-4 h-16 w-44 rounded-xl transition-all ease-m3-standard-accelerate">
          Lãng mạn
        </button>
        <button className="shadow-2 hover:shadow-4 h-16 w-44 rounded-xl transition-all ease-m3-standard-accelerate">
          Viễn tưởng
        </button>
      </div>
    </>
  );
}
