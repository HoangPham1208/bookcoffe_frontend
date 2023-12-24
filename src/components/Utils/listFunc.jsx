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
          <li>
            <button className="hover:underline">Bàn</button>
          </li>
          <li>
            <button
              onClick={() => {
                localStorage.setItem("type", "orders");
                if (role === "manager") {
                  navigate("/manager/orders");
                }
              }}
              className="hover:underline"
            >
              {localStorage.getItem("type") === "orders" ? (
                <p className="underline"> Đơn hàng </p>
              ) : (
                <p> Đơn hàng </p>
              )}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                localStorage.setItem("type", "vouchers");
                if (role === "manager") {
                  navigate("/manager/vouchers");
                }
              }}
              className="hover:underline"
            >
              {localStorage.getItem("type") === "vouchers" ? (
                <p className="underline"> Voucher </p>
              ) : (
                <p> Voucher </p>
              )}
            </button>
          </li>
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