import { Navbar } from "../navbar";
import { Label, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
import { customTheme } from "../Utils/myButton";
import { FileInput } from "flowbite-react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function Locations() {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // await RefreshTokenAPI();
        const branchResponse = await axios.get(
          "http://localhost:4000/api/admin/showBranch"
        );
        console.log(branchResponse.data);
        setData(branchResponse.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [refresh]);
  return (
    <>
      <Navbar mode="login" />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="w-full font-bold text-3xl">Chi nhánh</div>
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
                        <span className="font-semibold">Quản lý: </span>
                        {item.managerName}
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold">Giờ hoạt động: </span>{" "}
                      {item.workingTime} <br />
                    </div>
                    <div>
                      <span className="font-semibold">Số điện thoại: </span>{" "}
                      {item.phoneNumber} <br />
                    </div>
                    <div className="flex place-content-end pt-2">
                      <Button
                        onClick={() => {
                          alert("Vui lòng đăng nhập để đặt chỗ!")
                          localStorage.setItem("page","home")
                          Navigate("/")}}
                        theme={customTheme}
                        color="primary"
                        pill
                      >
                        Đặt chỗ
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
