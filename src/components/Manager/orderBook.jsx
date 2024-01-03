import React, { useEffect, useState } from "react";
import { Navbar } from "../navbar";
import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import { Radio } from "flowbite-react";
import axios from "axios";
import Cookies from "universal-cookie";
import RefreshTokenAPI from "../Utils/token";
import { useNavigate } from "react-router-dom";
import { customTheme } from "../Utils/myButton"
import ListFunc from "../Utils/listFunc";


export default function OrderBookManager() {
  const navigate = useNavigate();
  const cookie = new Cookies();
  return (
    <>
      <Navbar />
      <main className="mx-auto flex flex-col max-w-screen-xl py-20">
        <ListFunc/>
        <div className="text-3xl font-semibold mx-36">Đơn đặt sách</div>

        <div className="flex place-content-start gap-10 mx-36 my-5">
          <Button
            onClick={() => navigate("/manager/order/books/add")}
            theme={customTheme}
            color="primary"
            pill
          >
            Thêm đơn
          </Button>
          <Button
            onClick={async () => {
              navigate("/manager/order/books/branch")
            }}
            theme={customTheme}
            color="secondary"
            pill
          >
            Đơn tại quán
          </Button>
          <Button
            onClick={async () => {
              navigate("/manager/order/books/home")
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
    </>
  );
}
