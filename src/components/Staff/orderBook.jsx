import React, { useEffect, useState } from "react";
import { Navbar } from "../navbar";
import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import { Radio } from "flowbite-react";
import axios from "axios";
import Cookies from "universal-cookie";
import RefreshTokenAPI from "../Utils/token";
import { useNavigate } from "react-router-dom";
import { customTheme } from "../Utils/myButton";

export default function OrderBook() {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const [items, setItems] = React.useState([]);
  return (
    <>
      <Navbar />

      <section className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="text-3xl font-semibold my-5 mx-36">Đơn đặt sách</div>

          <div className="flex place-content-start gap-10 mx-36 my-5">
            <Button
              onClick={() => navigate("/staff/order/books/add")}
              theme={customTheme}
              color="primary"
              pill
            >
              Thêm đơn
            </Button>
            <Button
              onClick={async () => {
                navigate("/staff/order/books/branch");
              }}
              theme={customTheme}
              color="secondary"
              pill
            >
              Đơn tại quán
            </Button>
            <Button
              onClick={async () => {
                navigate("/staff/order/books/home");
              }}
              theme={customTheme}
              color="secondary"
              pill
            >
              Đơn mượn về
            </Button>
          </div>
          <hr className="border-black mx-36 my-5" />
        </main>
      </section>
    </>
  );
}
