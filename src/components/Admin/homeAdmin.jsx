import React from "react";
import { Navbar } from "../navbar";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import RefreshTokenAPI from "../Utils/token";
import { useNavigate } from "react-router-dom";
import { customTheme } from "../Utils/myButton";

export default function HomeAdmin() {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const [data, setData] = useState([]);
  const [staff, setStaff] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // await RefreshTokenAPI();

        const branchResponse = await axios.get(
          "http://localhost:4000/api/admin/showBranch",
          {
            headers: {
              Authorization: `Bearer ${cookie.get("accessToken")}`,
            },
          }
        );
        console.log(branchResponse.data);
        setData(branchResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="w-full font-bold text-3xl">Chi nhánh</div>
          <div className="flex place-content-start gap-10 my-5">
            <Button
              theme={customTheme}
              color="primary"
              pill
              onClick={() => {
                navigate("/admin/addBranch");
              }}
            >
              Thêm chi nhánh
            </Button>
            {/* <Button theme={customTheme} color="secondary" pill>
            Xóa chi nhánh
          </Button> */}
          </div>
          <div className="flex max-sm:flex-col flex-wrap max-sm:gap-y-5 sm:gap-5">
            {data.map((item) => (
              <div>
                <Card
                  className="rounded-xl w-full sm:w-80 "
                  renderImage={() => (
                    <img
                      className="object-cover h-64 shrink-0 border-b overflow-hidden rounded-t-xl"
                      src={
                        "http://localhost:4000/api/customer/getBranchImage/" +
                        item.branchId
                      }
                      alt="branch number 1"
                    />
                  )}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.address}
                  </h5>
                  <div className="font-normal text-gray-700 dark:text-gray-400">
                    <div className="flex justify-between">
                      <div>
                        <span className="font-semibold">ID:</span>{" "}
                        {item.branchId}
                      </div>
                      <div>
                        <span className="font-semibold">Quản lý: </span>
                        {item.managerName}
                      </div>
                    </div>
                    <div>
                      <div>
                        <span className="font-semibold">
                          Thời gian làm việc:{" "}
                        </span>{" "}
                        {item.workingTime} <br />
                      </div>
                      <div>
                        <span className="font-semibold">Số điện thoại: </span>{" "}
                        {item.phoneNumber} <br />
                      </div>
                    </div>
                    <div className="flex place-content-end pt-2">
                      <Button
                        onClick={() => {
                          localStorage.setItem("branchId", item.branchId);
                          localStorage.setItem("branchAddress", item.address);
                          navigate(`/admin/branch/${item.address}/books`);
                        }}
                        theme={customTheme}
                        color="primary"
                        pill
                      >
                        Quản lý
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </main>
      </section>
    </>
  );
}
