import React from "react";
import { Navbar } from "../navbar";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import RefreshTokenAPI from "../Utils/token";
export default function HomeAdmin() {
  const cookie = new Cookies();
  const [data, setData] = useState([]);
  useEffect(() => {
    RefreshTokenAPI();
    axios
      .get("http://localhost:4000/api/admin/showBranch", {
        headers: {
          Authorization: `Bearer ${cookie.get("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <main className="mx-autoflex flex-col max-w-screen-xl pt-20 mx-36">
        <div className="my-5 font-semibold text-3xl">
          <button>Chi nhánh</button>
        </div>
        <div className="flex place-content-start gap-10 my-5">
          <Button className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
            Thêm chi nhánh
          </Button>
          <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
            Xóa chi nhánh
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {data.map((item) => (
            <div>
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/image1.png"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.address}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <div>
                    ID: {item.branchId} <br/>
                    Manager id: {item.managerId} <br/>
                    working time: {item.workingTime} <br/>
                    createDate: {item.createDate}
                  </div>
                </p>
              </Card>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
