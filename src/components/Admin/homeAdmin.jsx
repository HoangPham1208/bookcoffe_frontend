import React from "react";
import { Navbar } from "../navbar";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import RefreshTokenAPI from "../Utils/token";
import { useNavigate } from "react-router-dom";
export default function HomeAdmin() {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const [data, setData] = useState([]);
  const [staff, setStaff] = useState([]);
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
    // localhost:3000/api/admin/showStaffandManager
    axios
      .get("http://localhost:4000/api/admin/showStaffandManager", {
        headers: {
          Authorization: `Bearer ${cookie.get("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setStaff(res.data);
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
                <div className="font-normal text-gray-700 dark:text-gray-400">
                  <div className="flex justify-between">
                    <div><span className="font-semibold">Branch ID:</span> {item.branchId}</div>
                    <div>
                    <span className="font-semibold">Manager: </span>
                      {(() => {
                        for (let i = 0; i < staff.length; i++) {
                          if (staff[i].staffId === item.managerId) {
                            return staff[i].userName;
                          }
                        }
                      })()}
                    </div>
                  </div>
                  <div>
                  <span className="font-semibold">Working Time: </span> {item.workingTime} <br />
                  <span className="font-semibold">Date created: </span> {item.createDate}
                  </div>
                  <div className="flex place-content-end gap-10 my-5">
                    <Button 
                    onClick={
                      () => {
                        navigate(`/admin/branch/${item.address}/books`);
                      }
                    }
                    className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
                      Xem chi tiết
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
