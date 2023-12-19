import React, { useState } from "react";
import { FloatingLabel } from "flowbite-react";
import axios from "axios";
import Cookie from "universal-cookie";

function LoginDialog({ visible, onClose }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleOnClose = () => {
    onClose();
  };
  if (!visible) return null;
  const handleLogin = () => {
    const cookie = new Cookie();
    const userData = {
      userName: userName,
      password: password,
    }
    axios.post("http://localhost:5000/login", userData)
    .then(res => {
      console.log(res.data);
      // cookie setup
      cookie.set("accessToken", res.data.accessToken, {path: "/"});
      cookie.set("refreshToken", res.data.refreshToken, {path: "/"});
      cookie.set("userName", res.data.userName, {path: "/"});
      cookie.set("role", res.data.role, {path: "/"});
      
    })
    .catch(err => {
      console.log(err);
    })
  }
  const handleRegister = () => {
  }
  return (
    <>
      <div
        id="user-card-expanded"
        className="absolute top-0 right-12 my-auto box-content flex w-80  flex-col items-center space-y-5 rounded-lg  bg-white p-6 shadow-3 transition-all duration-[250ms] ease-m3-standard-decelerate dark:bg-card-background-dark max-sm:right-2 max-sm:w-10/12 z-10 select-none "
      >
        <p className="text-left font-bold w-full">Đăng nhập</p>
        <button
          onClick={handleOnClose}
          className="absolute right-5 top-0 cursor-pointer rounded-full transition-all hover:bg-[#d7e1e9] active:bg-[#b9cad8] dark:hover:bg-button-hover-dark dark:active:bg-button-active-dark"
          id="user-card-expanded-close"
        >
          <svg
            className="dark:fill-dark-surface"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
        <FloatingLabel onChange={(e)=>{setUserName(e.target.value)}} variant="standard" label="Tài khoản" className="w-80 select-none" />
        <FloatingLabel type="password" onChange={(e)=>{setPassword(e.target.value)}} variant="standard" label="Mật khẩu" className="w-80 select-none" />
        <div className="flex w-full flex-row justify-between px-2">
          <button
            onClick={handleLogin}
            id="edit-account"
            type="button"
            className="items inline-flex gap-x-3 rounded-full bg-button-primary px-6 py-2.5 text-center text-white shadow-1 transition ease-out hover:bg-button-primary-hover hover:shadow-3 active:bg-button-primary-active dark:bg-button-primary-dark dark:hover:bg-button-primary-hover-dark dark:active:bg-button-primary-active-dark"
          >
            Đăng nhập
          </button>
          <button
            id="logout"
            type="button"
            className="items inline-flex gap-x-3 rounded-full px-6 py-2.5 text-center text-black shadow-1 transition ease-out hover:bg-button-hover hover:shadow-3 active:bg-button-active dark:bg-button-dark dark:text-dark-surface dark:hover:bg-button-hover-dark dark:active:bg-button-active-dark"
          >
            Đăng ký
          </button>
        </div>
      </div>
    </>
  );
}

export function Navbar({ mode = "logout" }) {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const handleOnClose = () => setShowLoginDialog(false);
  return (
    <nav className="flex bg-[#A9C7F4] w-full h-[60px] px-[50px] justify-between items-center shrink-0 select-none">
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

      {(() => {
        if (mode === "login")
          return (
            <div id="login" className="text-black font-bold">
              <button onClick={() => setShowLoginDialog(true)}>
                Đăng nhập/Đăng ký
              </button>
            </div>
          );
        else {
          return (
            <div
              id="user-card"
              className="my-auto flex flex-row items-center space-x-5 rounded-xl transition-all ease-out  dark:hover:bg-button-hover-dark dark:active:bg-button-active-dark max-sm:p-0 sm:basis-96"
            >
              <button
                className="text-black font-bold flex flex-row space-x-3"
                id="cartButton"
              >
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
                <a>3</a>
              </button>
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
            </div>
          );
        }
      })()}

      <LoginDialog visible={showLoginDialog} onClose={handleOnClose} />
    </nav>
  );
}
