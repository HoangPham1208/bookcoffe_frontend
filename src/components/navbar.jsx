export default function Navbar() {
    return (
    <nav className="flex bg-[#A9C7F4] w-full h-[60px] px-[50px] justify-between items-center shrink-0">
      <a className="flex flex-row items-center h-1/2 space-x-2" href="/">
        <p className="font-bold">Book Cafe</p>
      </a>
      <ul className="flex justify-between items-center gap-[30px]">
        <li>
          <a className="hover:underline font-bold transition" href="/">
            Trang chủ
          </a>
        </li>
        <li>
          <a className="hover:underline transition" href="/dish">
            Món
          </a>
        </li>
        <li>
          <a className="hover:underline transition" href="/table">
            Bàn
          </a>
        </li>
        <li>
          <a className="hover:underline transition" href="/cart/invoice">
            Hoá đơn
          </a>
        </li>
        <li>
          <a className="hover:underline transition" href="/admin">
            Quản lý
          </a>
        </li>
      </ul>
      <button
        id="user-card"
        className="my-auto flex flex-row items-center space-x-5 rounded-xl transition-all ease-out hover:bg-button-hover active:bg-button-active dark:hover:bg-button-hover-dark dark:active:bg-button-active-dark max-sm:p-0 sm:basis-96"
        >
          <button className="text-black font-bold flex flex-row space-x-3" id="cartButton">
            <a href="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={24}
            viewBox="0 -960 960 960"
            width={24}
          >
            <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
          </svg>
        </a>
        <a>3</a></button>
        <div
          id="user-avatar"
          className="h-[48px] w-[48px] flex-none overflow-clip rounded-full bg-gray-300 transition-all max-sm:scale-90"
        >
          <img src="/avatar.png" className="h-[48px] w-[48px]" />
        </div>
        <div className="grow flex-col text-left transition-all">
          <div
            className="flex flex-row space-x-2 transition-all max-sm:hidden font-bold"
            id="user-info"
          >
            <p id="user-name">Lê Nguyên Chương</p>
          </div>
          <p id="user-role" className="font-bold text-sm">
            Nhân viên
          </p>
        </div>
        <div className="flex-none">
          <svg
            className="fill-black dark:fill-dark-surface"
            xmlns="http://www.w3.org/2000/svg"
            height={24}
            viewBox="0 -960 960 960"
            width={24}
          >
            <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </div>
      </button>
      <div id="login" className="text-black font-bold">
        <a href="/login">Đăng nhập/Đăng ký</a>
      </div>
    </nav>
    )
}