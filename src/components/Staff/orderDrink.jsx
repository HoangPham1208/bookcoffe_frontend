import React, { useEffect } from "react";
import { Navbar } from "../navbar";
import { Button } from "flowbite-react";
import { FloatingLabel } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RefreshTokenAPI from "../Utils/token";
import axios from "axios";
import Cookies from "universal-cookie";
import { customTheme } from "../Utils/myButton";

function Success({ visible, setVisible }) {
  useEffect(() => {
    const timerId = setTimeout(() => {
      setVisible();
    }, 2000);
    return () => {
      clearTimeout(timerId);
    };
  }, [visible]);
  if (visible === false) return null;
  return (
    <>
      <div
        id="user-card-expanded"
        className="absolute top-20 right-36 my-auto box-content flex w-80  flex-col items-center space-y-5 rounded-lg  bg-white p-6 shadow-3 transition-all duration-[250ms] ease-m3-standard-decelerate dark:bg-card-background-dark max-sm:right-2 max-sm:w-10/12 z-10 select-none "
      >
        <div>Xác nhận đơn hàng thành công</div>
      </div>
    </>
  );
}

export default function OrderDrink() {
  const cookie = new Cookies();
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);
  // const items = localStorage.getItem("drinks") ? JSON.parse(localStorage.getItem("drinks")) : [];
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("drinks")) {
      setItems(JSON.parse(localStorage.getItem("drinks")));
    }
  }, [refresh]);
  const handleConfirm = async () => {
    if (items.length === 0) {
      alert("Đơn hàng rỗng");
      return;
    }
    try {
      // await RefreshTokenAPI();
      await axios
        .post("http://localhost:4000/api/staff/addBill", items, {
          headers: {
            Authorization: `Bearer ${cookie.get("accessToken")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("drinks", JSON.stringify([]));
          setRefresh(!refresh);
          setSuccess(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const [success, setSuccess] = React.useState(false);
  const handleSuccesCancle = () => {
    setSuccess(false);
  };
  return (
    <>
      <Navbar />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="mx-36 text-3xl font-semibold my-5">Tạo đơn</div>
          <div className="flex place-content-start gap-10 mx-36 my-5">
            <Button
              theme={customTheme}
              color="primary"
              pill
              onClick={() => navigate("/staff/order/drinks/add")}
            >
              Tạo đơn mới
            </Button>
            <Button
              onClick={() => {
                localStorage.setItem("drinks", JSON.stringify([]));
                setRefresh(!refresh);
              }}
              theme={customTheme}
              color="secondary"
              pill
            >
              Xóa đơn
            </Button>
          </div>
          <div className="grid grid-cols-2 my-5">
            <div>
              {items.map((item, index) => (
                <>
                  <div className="flex justify-between mx-36 my-5">
                    <div>
                      <img
                        src={`http://localhost:4000/api/staff/getDrinksImage/${item.drinksId}`}
                        alt={item.image}
                        className="w-16 h-16 rounded-full"
                      />
                    </div>
                    <div>
                      <div className="my-1">{item.drinksName}</div>
                      <div className="my-1">Số lượng: {item.quantity}</div>
                      <div className="my-1">Size: {item.size}</div>
                    </div>
                    <div className="grid justify-items-end">
                      <div>
                        Giá:{" "}
                        {
                          // item.price
                          new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(item.price)
                        }
                      </div>
                      <div>
                        Tổng:{" "}
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.price * item.quantity)}
                      </div>
                      <button
                        onClick={() => {
                          let temp = JSON.parse(localStorage.getItem("drinks"));
                          temp.splice(index, 1);
                          localStorage.setItem("drinks", JSON.stringify(temp));
                          setRefresh(!refresh);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="14"
                          viewBox="0 0 448 512"
                        >
                          <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <hr className="border-black mx-36" />
                </>
              ))}
            </div>
            <div className="bg-[#F2F2F2] mx-36 h-fit">
              <div className="flex m-5">
                <div className="w-full">Tạm tính</div>
                <div className="w-full text-end">
                  {(() => {
                    let total = 0;
                    for (let i = 0; i < items.length; i++) {
                      total += items[i].price * items[i].quantity;
                    }
                    return new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(total);
                  })()}
                </div>
              </div>
              <div className="flex m-5">
                <div className="w-full">Phụ thu</div>
                <div className="w-full text-end">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(0)}
                </div>
              </div>
              <hr className="border-black m-5" />
              <div className="flex m-5">
                <div className="w-full">Tổng cộng</div>
                <div className="w-full text-end">
                  {(() => {
                    let total = 0;
                    for (let i = 0; i < items.length; i++) {
                      total += items[i].price * items[i].quantity;
                    }
                    return new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(total);
                  })()}
                </div>
              </div>
              <div className="grid place-items-end m-5">
                <Button
                  onClick={handleConfirm}
                  theme={customTheme}
                  color="primary"
                  pill
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    viewBox="0 0 448 512"
                    className="inline-block mr-2 "
                  >
                    <path
                      fill="#ffffff"
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                  In hóa đơn
                </Button>
              </div>
              <hr className="border-black m-5" />
              <div className="m-5">
                <div className="my-5">Mã giảm giá</div>
                <div>
                  <div className="flex">
                    <div className="w-full">
                      <FloatingLabel
                        variant="filled"
                        label="Nhập mã giảm giá"
                        className="bg-[#F2F2F2]"
                      />
                    </div>
                    <div className="w-full grid place-items-end">
                      <Button theme={customTheme} color="secondary" pill>
                        Áp dụng
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Success visible={success} setVisible={handleSuccesCancle} />
        </main>
      </section>
    </>
  );
}
