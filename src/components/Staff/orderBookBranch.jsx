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

export default function OrderBookBranchManager() {
  const Navigate = useNavigate();
  const cookie = new Cookies();
  const [items, setItems] = React.useState([]);
  const [refresh, setRefresh] = useState(false);
  const handleBorrowAtBranch = async () => {
    try {
      await RefreshTokenAPI();
      await axios
        .get("http://localhost:4000/api/staff/showBorrowBookAtBranch", {
          headers: {
            Authorization: `Bearer ${cookie.get("accessToken")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleBorrowAtBranch();
  }, [refresh]);
  const handleReturnBook = async (borrowingId) => {
    try {
      await RefreshTokenAPI();
      await axios
        .post(
          "http://localhost:4000/api/staff/returnBookAtBranch",
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
      <main className="mx-auto flex flex-col max-w-screen-xl py-20">
        <div className="text-3xl font-semibold my-5 mx-36">
          Đơn đặt tại quán
        </div>

        <div className="flex place-content-start gap-10 mx-36 my-5">
          <Button
            onClick={() => Navigate("/staff/order/books")}
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
            placeholder="Tìm kiếm"
            className="bg-[#ECE6F0] rounded-full text-sm focus:outline-none w-full px-5 h-12"
          />
        </div>
        <hr className="border-black mx-36 my-5" />
        <div className="overflow-x-auto mx-36">
          <Table hoverable>
            <Table.Head className="text-center">
              <Table.HeadCell>Id</Table.HeadCell>
              <Table.HeadCell>Tên sách</Table.HeadCell>
              <Table.HeadCell>Tên</Table.HeadCell>
              <Table.HeadCell>CCCD</Table.HeadCell>
              <Table.HeadCell>Số điện thoại</Table.HeadCell>
              <Table.HeadCell>Ngày mượn</Table.HeadCell>
              <Table.HeadCell>Ngày trả</Table.HeadCell>
              <Table.HeadCell>Trạng thái</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-center">
              {items.map((item, index) => (
                <>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>{item.borrowingId}</Table.Cell>
                    <Table.Cell>{item.title}</Table.Cell>
                    <Table.Cell>{item.customerName}</Table.Cell>
                    <Table.Cell>{item.citizenId}</Table.Cell>
                    <Table.Cell>{item.phoneNumber}</Table.Cell>
                    <Table.Cell>
                      {(() => {
                        let date = new Date(item.borrowDate);
                        return (
                          date.getDate() +
                          "/" +
                          (date.getMonth() + 1) +
                          "/" +
                          date.getFullYear() +
                          " " +
                          date.getHours() +
                          ":" +
                          date.getMinutes()
                        );
                      })()}
                    </Table.Cell>
                    <Table.Cell>
                      {(() => {
                        let date = new Date(item.returnDate);
                        return (
                          date.getDate() +
                          "/" +
                          (date.getMonth() + 1) +
                          "/" +
                          date.getFullYear() +
                          " " +
                          date.getHours() +
                          ":" +
                          date.getMinutes()
                        );
                      })()}
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex justify-center">
                        {item.isReturn === 0 ? (
                          <Button
                            onClick={() => {
                              handleReturnBook(item.borrowingId);
                            }}
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
    </>
  );
}
