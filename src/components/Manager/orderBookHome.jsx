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

export default function OrderBookHomeManager() {
  const Navigate = useNavigate();
  const cookie = new Cookies();
  const [items, setItems] = React.useState([]);
  const [refresh, setRefresh] = React.useState(false);
  const [result, setResult] = React.useState([]); // result of search
  const handleBorrowAtHome = async () => {
    try {
      // await RefreshTokenAPI();
      await axios
        .get("http://localhost:4000/api/staff/showBorrowBookToGo?userName=", {
          headers: {
            Authorization: `Bearer ${cookie.get("accessToken")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
          setResult(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handleSearch = (searchQuery) => {
    if (searchQuery === "") {
      setResult(items);
      return;
    }
    let temp = items.filter((item) => {
      if (item.title.includes(searchQuery)) return true;
      if (item.userName.includes(searchQuery)) return true;
      return false;
    });
    setResult(temp);
  };
  useEffect(() => {
    handleBorrowAtHome();
  }, [refresh]);
  const handleReturnBook = async (borrowingId) => {
    try {
      // await RefreshTokenAPI();
      await axios
        .post(
          "http://localhost:4000/api/staff/returnBookToGo",
          {
            borrowingId: borrowingId,
          },
          {
            headers: {
              Authorization: `Bearer ${cookie.get("accessToken")}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setRefresh(!refresh);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="text-3xl font-semibold my-5 mx-36">
            Đơn mượn về nhà
          </div>

          <div className="flex place-content-start gap-10 mx-36 my-5">
            <Button
              onClick={() => Navigate("/manager/order/books")}
              theme={customTheme}
              color="secondary"
              pill
            >
              Trở về
            </Button>
          </div>
          <div className="relative text-gray-600 mx-36 my-7">
            <input
              type="search"
              name="serch"
              placeholder="Tìm kiếm với tên sách hoặc tên khách hàng"
              className="bg-gray-100 rounded-full text-sm focus:outline-none w-full px-5 h-12"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(e.target.value);
                }
              }}
              onChange={(e) => {
                if (e.target.value === "") setResult(items);
              }}
            />
          </div>
          <hr className="border-black mx-36 my-5" />
          <div className="overflow-x-auto mx-36">
            <Table hoverable>
              <Table.Head className="text-center">
                <Table.HeadCell>Id</Table.HeadCell>
                <Table.HeadCell>Tên sách</Table.HeadCell>
                <Table.HeadCell>Tên</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell>Số điện thoại</Table.HeadCell>
                <Table.HeadCell>Ngày mượn</Table.HeadCell>
                <Table.HeadCell>Tiền cọc</Table.HeadCell>
                <Table.HeadCell>Trạng thái</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y text-center">
                {result &&
                  result.map((item, index) => (
                    <>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>{item.borrowingId}</Table.Cell>
                        <Table.Cell>{item.title}</Table.Cell>
                        <Table.Cell>{item.userName}</Table.Cell>
                        <Table.Cell>{item.email}</Table.Cell>
                        <Table.Cell>{item.phoneNumber}</Table.Cell>
                        <Table.Cell>
                          {(() => {
                            let date = new Date(item.borrowDate);
                            // Fri Jan 05 2024 11:41:22 GMT+0700 (Indochina Time)
                            // Take only "Fri Jan 05 2024 11:41:22", we need add 2 hours to get return date
                            let temp = date.toString().split(" ");
                            temp = temp.slice(0, 5);
                            return temp.join(" ");
                          })()}
                        </Table.Cell>
                        <Table.Cell>
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(item.deposit)}
                        </Table.Cell>
                        <Table.Cell>
                          <div className="flex justify-center">
                            {item.isReturn === 0 ? (
                              <Button
                                onClick={() =>
                                  handleReturnBook(item.borrowingId)
                                }
                                className="text-white bg-red-500 hover:bg-red-600"
                                color="primary"
                                pill
                              >
                                Chưa trả
                              </Button>
                            ) : (
                              <Button
                                className="text-white bg-green-500"
                                theme={customTheme}
                                color="primary"
                                disabled={true}
                                pill
                              >
                                Đã trả
                              </Button>
                            )}
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    </>
                  ))}
              </Table.Body>
            </Table>
          </div>
        </main>
      </section>
    </>
  );
}
