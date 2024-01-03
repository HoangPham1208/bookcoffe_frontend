import React, { useEffect, useState } from "react";
import { Avatar, Dropdown, FloatingLabel } from "flowbite-react";
import { Navbar as FlowbiteNavbar } from "flowbite-react";
import axios from "axios";
import Cookie from "universal-cookie";
import RefreshTokenAPI from "./Utils/token";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { customTheme } from "./Utils/myButton";

function LoginDialog({ visible, onClose }) {
  const navigate = useNavigate();
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
    };
    axios
      .post("http://localhost:5000/login", userData)
      .then((res) => {
        console.log(res.data);
        // cookie setup
        // set new cookies
        cookie.set("accessToken", res.data.accessToken, { path: "/" });
        cookie.set("refreshToken", res.data.refreshToken, { path: "/" });
        cookie.set("userName", res.data.userName, { path: "/" });
        cookie.set("role", res.data.role, { path: "/" });
        cookie.set("branchId", res.data.branchId, { path: "/" });
        cookie.set("branchAddress", res.data.branchAddress, { path: "/" });
        // navigate("/homeUser");
        if (res.data.role === "customer") {
          localStorage.setItem("page", "home");
          navigate("/homeUser");
        } else if (res.data.role === "staff") {
          localStorage.setItem("page", "drink");
          navigate("/staff/order/drinks");
        } else if (res.data.role === "manager") {
          localStorage.setItem("page", "home");
          navigate("/manager");
        } else if (res.data.role === "admin") {
          localStorage.setItem("page", "home");
          navigate("/admin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div
        id="user-card-expanded"
        className="absolute top-0 right-5 my-auto box-content flex w-80  flex-col items-center space-y-5 rounded-lg  bg-white p-6 shadow-3 transition-all duration-[250ms] ease-m3-standard-decelerate dark:bg-card-background-dark max-sm:right-2 max-sm:w-10/12 z-10 select-none "
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
        <FloatingLabel
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          variant="standard"
          label="Tài khoản"
          className="w-80 select-none"
        />
        <FloatingLabel
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          variant="standard"
          label="Mật khẩu"
          className="w-80 select-none"
        />
        <div className="flex w-full flex-row justify-center px-2">
          <Button
            onClick={handleLogin}
            id="edit-account"
            type="button"
            theme={customTheme}
            color="primary"
            pill
          >
            Đăng nhập
          </Button>
        </div>
      </div>
    </>
  );
}

function SignUpDialog({ visible, onClose }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false); // [false, true]
  const handleOnClose = () => {
    onClose();
  };
  if (!visible) return null;
  const handleRegister = () => {
    if (!email.includes("@")) {
      alert("Email không hợp lệ, vui lòng nhập lại!");
      return;
    }
    if (password !== rePassword) {
      alert("Mật khẩu không khớp, vui lòng nhập lại!");
      return;
    }
    const userData = {
      userName: userName,
      email: email,
      address: address,
      password: password,
    };
    axios
      .post("http://localhost:5000/signup", userData)
      .then((res) => {
        console.log(res.data);
        // show success dialog
        alert("Đăng ký thành công!");
        handleOnClose();
      })
      .catch((err) => {
        console.log(err);
        alert("Đăng ký thất bại!");
      });
  };
  return (
    <>
      <div className="absolute top-0 right-5 my-auto box-content flex w-80  flex-col items-center space-y-5 rounded-lg  bg-white p-6 shadow-3 transition-all duration-[250ms] ease-m3-standard-decelerate dark:bg-card-background-dark max-sm:right-2 max-sm:w-10/12 z-10 select-none ">
        <p className="text-left font-bold w-full">Đăng ký</p>
        <button
          onClick={handleOnClose}
          className="absolute right-5 top-0 cursor-pointer rounded-full transition-all hover:bg-[#d7e1e9] active:bg-[#b9cad8] dark:hover:bg-button-hover-dark dark:active:bg-button-active-dark"
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
        <FloatingLabel
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          variant="standard"
          label="Tài khoản"
          className="w-80 select-none"
        />
        <FloatingLabel
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          variant="standard"
          label="Email"
          className="w-80 select-none"
        />
        <FloatingLabel
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          variant="standard"
          label="Địa chỉ"
          className="w-80 select-none"
        />
        <FloatingLabel
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          variant="standard"
          label="Mật khẩu"
          className="w-80 select-none"
        />
        <div>
          <div className="relative">
            <FloatingLabel
              type="password"
              onChange={(e) => {
                setRePassword(e.target.value);
                if (password === e.target.value) {
                  setWrongPassword(false);
                } else {
                  setWrongPassword(true);
                }
              }}
              variant="standard"
              label="Nhập lại mật khẩu"
              className="w-80 select-none"
            />
          </div>
          {wrongPassword && (
            <p
              id="filled_error_help"
              className="mt-2 text-xs text-red-600 dark:text-red-400"
            >
              <span className="font-medium"> Mật khẩu không khớp </span>
            </p>
          )}
        </div>
        <div className="flex w-full flex-row justify-center px-2">
          <Button
            onClick={handleRegister}
            id="edit-account"
            type="button"
            theme={customTheme}
            color="primary"
            pill
          >
            Đăng ký
          </Button>
        </div>
      </div>
    </>
  );
}

function Logout() {
  const navigate = useNavigate();
  const cookie = new Cookie();

  const handleLogOut = async () => {
    try {
      // Use Promise.all to ensure all asynchronous operations complete before moving on
      await Promise.all([
        localStorage.clear(),
        // await RefreshTokenAPI(),
        axios.post("http://localhost:5000/logout", null, {
          headers: {
            Authorization: `Bearer ${cookie.get("accessToken")}`,
          },
        }),
        // ... other asynchronous operations
      ]);

      // Remove cookies and clear localStorage
      await Promise.all([
        cookie.remove("userName"),
        cookie.remove("role"),
        cookie.remove("accessToken"),
        cookie.remove("refreshToken"),
        cookie.remove("branchId"),
        cookie.remove("branchAddress"),
      ]);

      console.log("Logout success");

      // Reload the page after successful logout
      localStorage.setItem("page", "home");
      window.location.reload();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <Dropdown.Item onClick={handleLogOut} className="flex-none">
      Đăng xuất
    </Dropdown.Item>
  );
}



export function Navbarlegacy({ mode = "logout" }) {
  const navigate = useNavigate();
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showSignUpDialog, setShowSignUpDialog] = useState(false);
  const handleLoginOnClose = () => setShowLoginDialog(false);
  const handleSignUpOnClose = () => setShowSignUpDialog(false);
  const role = new Cookie().get("role");
  const name = new Cookie().get("userName");
  return (
    <nav className="flex bg-[#A9C7F4] w-full h-[60px] px-[50px] justify-between items-center shrink-0 select-none">
      <a
        className="flex flex-row items-center h-1/2 space-x-2 select-none"
        href="#"
      >
        <p className="font-bold">Book Cafe</p>
      </a>
      <ul className="flex justify-between items-center gap-[30px]">
        {(() => {
          if (role === "staff") {
            return (
              <>
                <li>
                  <button
                    className="hover:underline transition"
                    onClick={() => {
                      localStorage.setItem("page", "drink");
                      navigate("/staff/order/drinks");
                    }}
                  >
                    {localStorage.getItem("page") === "drink" ||
                    localStorage.getItem("page") === null ? (
                      <p className="font-bold">Đơn nước</p>
                    ) : (
                      <p>Đơn nước</p>
                    )}
                  </button>
                </li>
                <li>
                  <button
                    className="hover:underline transition"
                    onClick={() => {
                      localStorage.setItem("page", "books");
                      navigate("/staff/order/books");
                    }}
                  >
                    {localStorage.getItem("page") === "books" ? (
                      <p className="font-bold">Đơn đặt sách</p>
                    ) : (
                      <p>Đơn đặt sách</p>
                    )}
                  </button>
                </li>
                <li>
                  <button
                    className="hover:underline transition"
                    onClick={() => {
                      localStorage.setItem("page", "location");
                      navigate("/staff/order/locations");
                    }}
                  >
                    {localStorage.getItem("page") === "location" ? (
                      <p className="font-bold">Đơn đặt chỗ</p>
                    ) : (
                      <p>Đơn đặt chỗ</p>
                    )}
                  </button>
                </li>
              </>
            );
          } else if (role === "admin" || role === "manager") {
            return (
              <>
                <li>
                  <button
                    className="hover:underline transition"
                    onClick={() => {
                      localStorage.setItem("page", "home");
                      localStorage.removeItem("type");
                      if (role === "admin") {
                        navigate("/admin");
                      } else {
                        navigate("/manager");
                      }
                    }}
                  >
                    {localStorage.getItem("page") === "home" ? (
                      <p className="font-bold">Trang chủ</p>
                    ) : (
                      <p>Trang chủ</p>
                    )}
                  </button>
                </li>
                <li>
                  <button
                    className="hover:underline transition"
                    onClick={() => {
                      localStorage.setItem("page", "manage");
                      localStorage.removeItem("type");
                      if (role === "admin") {
                        navigate("/admin/branch");
                      } else {
                        navigate("/manager/books");
                      }
                    }}
                  >
                    {localStorage.getItem("page") === "manage" ? (
                      <p className="font-bold">Quản lí</p>
                    ) : (
                      <p>Quản lí</p>
                    )}
                  </button>
                </li>
              </>
            );
          } else
            return (
              <>
                <li>
                  <button
                    className="hover:underline transition"
                    onClick={() => {
                      localStorage.setItem("page", "home");
                      if (role === "customer") {
                        navigate("/homeUser");
                      } else navigate("/");
                    }}
                  >
                    {localStorage.getItem("page") === "home" ||
                    localStorage.getItem("page") === null ? (
                      <p className="font-bold">Trang chủ</p>
                    ) : (
                      <p>Trang chủ</p>
                    )}
                  </button>
                </li>
                <li>
                  <button className="hover:underline transition">
                    {localStorage.getItem("page") === "book" ? (
                      <p className="font-bold">Sách</p>
                    ) : (
                      <p>Sách</p>
                    )}
                  </button>
                </li>
                <li>
                  <button className="hover:underline transition">
                    {localStorage.getItem("page") === "location" ? (
                      <p className="font-bold">Địa điểm</p>
                    ) : (
                      <p>Địa điểm</p>
                    )}
                  </button>
                </li>
                <li>
                  <button className="hover:underline transition">
                    {localStorage.getItem("page") === "blog" ? (
                      <p className="font-bold">Blog</p>
                    ) : (
                      <p>Blog</p>
                    )}
                  </button>
                </li>
                <li>
                  <button className="hover:underline transition">
                    {localStorage.getItem("page") === "help" ? (
                      <p className="font-bold">Trợ giúp</p>
                    ) : (
                      <p>Trợ giúp</p>
                    )}
                  </button>
                </li>
              </>
            );
        })()}
      </ul>
      {(() => {
        if (mode === "login")
          return (
            <div id="login" className="text-black font-bold ">
              <button className="mx-4" onClick={() => setShowLoginDialog(true)}>
                Đăng nhập
              </button>
              <button
                className="mx-4"
                onClick={() => setShowSignUpDialog(true)}
              >
                Đăng ký
              </button>
            </div>
          );
        else {
          return (
            <div
              id="user-card"
              className="my-auto flex flex-row items-center space-x-5 rounded-xl transition-all ease-out  dark:hover:bg-button-hover-dark dark:active:bg-button-active-dark max-sm:p-0 sm:basis-96"
            >
              {role === "customer" ? (
                <button
                  className="text-black font-bold flex flex-row space-x-3"
                  id="cartButton"
                >
                  <button
                    onClick={() => {
                      localStorage.setItem("page", "cart");
                      navigate("/cart");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      viewBox="0 -960 960 960"
                      width={24}
                    >
                      <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
                    </svg>
                  </button>
                  {/* <span>3</span> */}
                  {localStorage.getItem("page") === "cart" ? (
                    <p className="underline">3</p>
                  ) : (
                    <p>3</p>
                  )}
                </button>
              ) : null}
              <button
                onClick={() => {
                  localStorage.setItem("page", "account");
                  navigate("/account");
                }}
                id="user-avatar"
                className="h-[48px] w-[48px] flex-none overflow-clip rounded-full bg-gray-300 transition-all max-sm:scale-90"
              >
                <img src="/avatar.png" className="h-[48px] w-[48px]" />
              </button>
              <div className="grow flex-col text-left transition-all">
                <div
                  className="flex flex-row space-x-2 transition-all max-sm:hidden font-bold"
                  id="user-info"
                >
                  <p id="user-name">
                    {localStorage.getItem("page") === "account" ? (
                      <p className="underline">{name}</p>
                    ) : (
                      <p>{name}</p>
                    )}
                  </p>
                </div>
                <p id="user-role" className="font-bold text-sm">
                  {role}
                </p>
              </div>
              <Logout />
            </div>
          );
        }
      })()}
      <LoginDialog visible={showLoginDialog} onClose={handleLoginOnClose} />
      <SignUpDialog visible={showSignUpDialog} onClose={handleSignUpOnClose} />
    </nav>
  );
}

export function Navbar({ mode = "logout" }) {
  const navigate = useNavigate();
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showSignUpDialog, setShowSignUpDialog] = useState(false);
  const handleLoginOnClose = () => setShowLoginDialog(false);
  const handleSignUpOnClose = () => setShowSignUpDialog(false);
  const role = new Cookie().get("role");
  const name = new Cookie().get("userName");
  const [refresh, setRefresh] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // await RefreshTokenAPI();
      await axios
        .get("http://localhost:4000/api/customer/getAvatar", {
          headers: {
            Authorization: `Bearer ${new Cookie().get("accessToken")}`,
          },
          responseType: 'blob',
        })
        .then((res) => {
          // console.log(res.data);
          const imageUrl = URL.createObjectURL(res.data);
          setItems(imageUrl);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (mode === "logout") {
      fetchData();
    }
  }, [refresh]);
  return (
    <FlowbiteNavbar
      fluid
      className="bg-[#f1cbaa] w-full fixed z-50 min-w-[375px]"
    >
      <FlowbiteNavbar.Brand href="localhost:3000">
        <img src="/logo.png" className="mr-3 h-8 sm:h-10" alt="Logo" />
        <img src="/logo-text.png" className="mr-3 h-8 sm:h-10" alt="Logo" />
        {(() => {
          if (role === "staff" || role === "manager") {
            return (
              <div className="fixed ml-48">
                Chi nhánh:{" "}
                <span className="font-semibold">
                  {new Cookie().get("branchAddress")}
                </span>
              </div>
            );
          }
        })()}
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Book Cafe
        </span> */}
      </FlowbiteNavbar.Brand>
      <div className="flex md:order-2">
        {(() => {
          if (mode === "login")
            return (
              <div id="login" className="text-black font-bold ">
                <button
                  className="mx-4"
                  onClick={() => setShowLoginDialog(true)}
                >
                  Đăng nhập
                </button>
                <button
                  className="mx-4"
                  onClick={() => setShowSignUpDialog(true)}
                >
                  Đăng ký
                </button>
              </div>
            );
          else {
            return (
              <>
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar src={items} alt="User settings" rounded>
                      <div className="flex flex-row ">
                        <div className="dark:text-white text-left max-lg:hidden truncate w-[120px] font-bold">
                          {localStorage.getItem("page") === "account" ? (
                            <p className="underline">{name}</p>
                          ) : (
                            <p>{name}</p>
                          )}
                          <div className="text-sm text-gray-500 dark:text-gray-400 flex gap-3">
                            <div>{role}</div>
                          </div>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="10"
                          viewBox="0 0 320 512"
                          className="self-center"
                        >
                          <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                        </svg>
                      </div>
                    </Avatar>
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm font-bold">
                      {localStorage.getItem("page") === "account" ? (
                        <p className="underline">{name}</p>
                      ) : (
                        <p>{name}</p>
                      )}
                    </span>
                    <span className="block truncate text-sm font-medium">
                      {role}
                    </span>
                  </Dropdown.Header>

                  <Dropdown.Item>
                    <button
                      onClick={() => {
                        localStorage.setItem("page", "account");
                        navigate("/account");
                      }}
                    >
                      Trang cá nhân
                    </button>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Logout />
                </Dropdown>
                <FlowbiteNavbar.Toggle />
              </>
            );
          }
        })()}
      </div>
      <FlowbiteNavbar.Collapse>
        {(() => {
          if (role === "staff") {
            return (
              <>
                <FlowbiteNavbar.Link>
                  <button
                    onClick={() => {
                      localStorage.setItem("page", "drink");
                      navigate("/staff/order/drinks");
                    }}
                  >
                    {localStorage.getItem("page") === "drink" ||
                    localStorage.getItem("page") === null ? (
                      <p className="font-bold">Đơn nước</p>
                    ) : (
                      <p>Đơn nước</p>
                    )}
                  </button>
                </FlowbiteNavbar.Link>
                <FlowbiteNavbar.Link>
                  <button
                    onClick={() => {
                      localStorage.setItem("page", "books");
                      navigate("/staff/order/books");
                    }}
                  >
                    {localStorage.getItem("page") === "books" ? (
                      <p className="font-bold">Đơn đặt sách</p>
                    ) : (
                      <p>Đơn đặt sách</p>
                    )}{" "}
                  </button>
                </FlowbiteNavbar.Link>
                <FlowbiteNavbar.Link>
                  <button
                    onClick={() => {
                      localStorage.setItem("page", "location");
                      navigate("/staff/order/locations");
                    }}
                  >
                    {localStorage.getItem("page") === "location" ? (
                      <p className="font-bold">Đơn đặt chỗ</p>
                    ) : (
                      <p>Đơn đặt chỗ</p>
                    )}
                  </button>
                </FlowbiteNavbar.Link>
              </>
            );
          } else if (role === "manager") {
            return (
              <>
                <FlowbiteNavbar.Link>
                  <button
                    onClick={() => {
                      localStorage.setItem("page", "home");
                      navigate("/manager");
                    }}
                  >
                    {localStorage.getItem("page") === "home" ||
                    localStorage.getItem("page") === null ? (
                      <p className="font-bold">Trang chủ</p>
                    ) : (
                      <p>Trang chủ</p>
                    )}
                  </button>
                </FlowbiteNavbar.Link>
                <FlowbiteNavbar.Link>
                  <button
                    onClick={() => {
                      localStorage.setItem("page", "manage");
                      localStorage.removeItem("type");
                      navigate("/manager/books");
                    }}
                  >
                    {localStorage.getItem("page") === "manage" ? (
                      <p className="font-bold">Quản lí</p>
                    ) : (
                      <p>Quản lí</p>
                    )}
                  </button>
                </FlowbiteNavbar.Link>
              </>
            );
          } else if (role === "admin") {
            return (
              <>
                <FlowbiteNavbar.Link>
                  <button
                    onClick={() => {
                      localStorage.setItem("page", "home");
                      navigate("/admin");
                    }}
                  >
                    {localStorage.getItem("page") === "home" ||
                    localStorage.getItem("page") === null ? (
                      <p className="font-bold">Trang chủ</p>
                    ) : (
                      <p>Trang chủ</p>
                    )}
                  </button>
                </FlowbiteNavbar.Link>
                {/* Drink */}
                <FlowbiteNavbar.Link>
                  <button
                    onClick={() => {
                      localStorage.setItem("page", "menuDrink");
                      localStorage.removeItem("type");
                      navigate("/admin/menuDrink");
                    }}
                  >
                    {localStorage.getItem("page") === "menuDrink" ? (
                      <p className="font-bold">Menu nước</p>
                    ) : (
                      <p>Menu nước</p>
                    )}
                  </button>
                </FlowbiteNavbar.Link>
                {/* Book */}
                <FlowbiteNavbar.Link>
                  <button
                    onClick={() => {
                      localStorage.setItem("page", "bookList");
                      localStorage.removeItem("type");
                      navigate("/admin/bookList");
                    }}
                  >
                    {localStorage.getItem("page") === "bookList" ? (
                      <p className="font-bold">Sách</p>
                    ) : (
                      <p>Sách</p>
                    )}
                  </button>
                </FlowbiteNavbar.Link>
              </>
            );
          } else {
            return (
              <>
                <FlowbiteNavbar.Link>
                  <button
                    onClick={() => {
                      localStorage.setItem("page", "home");
                      navigate("/homeUser");
                    }}
                  >
                    {localStorage.getItem("page") === "home" ? (
                      <p className="font-bold">Trang chủ</p>
                    ) : (
                      <p>Trang chủ</p>
                    )}
                  </button>
                </FlowbiteNavbar.Link>
                <FlowbiteNavbar.Link>
                  <button>Sách</button>
                </FlowbiteNavbar.Link>
                <FlowbiteNavbar.Link>
                  <button>Chi nhánh</button>
                </FlowbiteNavbar.Link>
                <FlowbiteNavbar.Link>
                  <button>Blog</button>
                </FlowbiteNavbar.Link>
                <FlowbiteNavbar.Link>
                  <button>Liên hệ</button>
                </FlowbiteNavbar.Link>
              </>
            );
          }
        })()}
      </FlowbiteNavbar.Collapse>
      <LoginDialog visible={showLoginDialog} onClose={handleLoginOnClose} />
      <SignUpDialog visible={showSignUpDialog} onClose={handleSignUpOnClose} />
    </FlowbiteNavbar>
  );
}
