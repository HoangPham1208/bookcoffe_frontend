import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
export default function ListFunc() {
  const navigate = useNavigate();
  const role = new Cookies().get("role");
  return (
    <>
      <div>
        <ul className="flex gap-4 ml-36 my-10 text-xl font-semibold">
          {(() => {
            if (role === "admin")
              return (
                <>
                </>
              );
          })()}
          <li>
            <button
              onClick={() => {
                localStorage.setItem("type", "book");
                if (role === "manager") {
                  navigate("/manager/books");
                }
              }}
              className="hover:underline"
            >
              {localStorage.getItem("type") === "book" ||
              localStorage.getItem("type") === null ? (
                <p className="underline"> Sách </p>
              ) : (
                <p> Sách </p>
              )}
            </button>
          </li>
          {(() => {
            if (role === "manager") {
              return (
                <>
                  <li>
                    <button
                      onClick={() => {
                        localStorage.setItem("type", "drink");
                        navigate("/manager/order/drinks");
                      }}
                      className="hover:underline"
                    >
                      {localStorage.getItem("type") === "drink" ? (
                        <p className="underline"> Đơn nước </p>
                      ) : (
                        <p> Đơn nước </p>
                      )}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        localStorage.setItem("type", "orders");
                        navigate("/manager/order/books");
                      }}
                      className="hover:underline"
                    >
                      {localStorage.getItem("type") === "orders" ? (
                        <p className="underline"> Đơn đặt sách </p>
                      ) : (
                        <p> Đơn đặt sách </p>
                      )}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        localStorage.setItem("type", "reservation");
                        navigate("/manager/order/locations");
                      }}
                      className="hover:underline"
                    >
                      {localStorage.getItem("type") === "reservation" ? (
                        <p className="underline"> Đơn đặt chỗ </p>
                      ) : (
                        <p> Đơn đặt chỗ </p>
                      )}
                    </button>
                  </li>
                </>
              );
            }
          })()}
          {/* <li>
            <button
              onClick={() => {
                localStorage.setItem("type", "vouchers");
                if (role === "manager") {
                  navigate("/manager/vouchers");
                }
              }}
              disabled="true"
              className="hover:underline"
            >
              {localStorage.getItem("type") === "vouchers" ? (
                <p className="underline"> Voucher </p>
              ) : (
                <p> Voucher </p>
              )}
            </button>
          </li> */}
          <li>
            <button
              onClick={() => {
                if (role === "manager") {
                  localStorage.setItem("type", "staff");
                  navigate("/manager/staff");
                }
              }}
              className="hover:underline"
            >
              {localStorage.getItem("type") === "staff" ? (
                <p className="underline"> Nhân viên </p>
              ) : (
                <p> Nhân viên </p>
              )}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
