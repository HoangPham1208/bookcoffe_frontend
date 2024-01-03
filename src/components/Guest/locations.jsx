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
        <main className="my-5">
          <div className="w-full font-bold text-3xl">Chi nhánh</div>
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
                  <div className="flex place-content-end gap-10 my-5">
                    <Button
                      onClick={()=>Navigate("/")}
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
