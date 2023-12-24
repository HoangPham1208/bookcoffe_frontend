import React, { useEffect } from "react";
import { Navbar } from "../navbar";
import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import { Checkbox } from "flowbite-react";
import { Radio } from "flowbite-react";
import axios from "axios";
import Cookies from "universal-cookie";
import RefreshTokenAPI from "../Utils/token";


function Check() {
  return (
    <>
      <div
        id="user-card-expanded"
        className="absolute top-16 right-36 my-auto box-content flex w-80  flex-col items-center space-y-5 rounded-lg  bg-white p-6 shadow-3 transition-all duration-[250ms] ease-m3-standard-decelerate dark:bg-card-background-dark max-sm:right-2 max-sm:w-10/12 z-10 select-none "
      >
        <div>Bạn muốn xác nhận đơn đặt sách #1 chứ?</div>
        <div className="flex place-content-start gap-10 my-5">
          <Button className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
            Hoàn tất
          </Button>
          <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
            Hủy
          </Button>
        </div>
      </div>
    </>
  );
}

function Success() {
  return (
    <>
      <div
        id="user-card-expanded"
        className="absolute top-16 right-36 my-auto box-content flex w-80  flex-col items-center space-y-5 rounded-lg  bg-white p-6 shadow-3 transition-all duration-[250ms] ease-m3-standard-decelerate dark:bg-card-background-dark max-sm:right-2 max-sm:w-10/12 z-10 select-none "
      >
        <div>Xác nhận đơn hàng #1 thành công</div>
      </div>
    </>
  );
}

export default function OrderBook() {
  const cookie = new Cookies();
  const [items, setItems] = React.useState([]);
  useEffect(() => {
    RefreshTokenAPI();
    axios
      .get("http://localhost:4000/api/staff/showReservation", {
        headers: {
          Authorization: `Bearer ${cookie.get("accessToken")}`,
        },
        params: {
          role: cookie.get("role"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <div className="text-3xl font-semibold my-5 mx-36">Đơn đặt sách</div>

        <div className="flex place-content-start gap-10 mx-36 my-5">
          <Button className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
            Xác nhận đơn
          </Button>
          <Button className="bg-[#7c61c6] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
            Thêm đơn
          </Button>
          <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
            Xóa đơn
          </Button>
        </div>
        <div class="relative text-gray-600 mx-36 my-7">
          <input
            type="search"
            name="serch"
            placeholder="Tìm kiếm"
            class="bg-[#ECE6F0] rounded-full text-sm focus:outline-none w-full px-5 h-12"
          />
        </div>
        <hr className="border-black mx-36 my-5" />
        <div className="overflow-x-auto mx-36">
          <Table hoverable>
            <Table.Head className="text-center">
              <Table.HeadCell className="p-4"></Table.HeadCell>
              <Table.HeadCell >ID</Table.HeadCell>
              <Table.HeadCell>Tên người đặt</Table.HeadCell>
              <Table.HeadCell>Địa điểm</Table.HeadCell>
              <Table.HeadCell>Ngày đặt</Table.HeadCell>
              <Table.HeadCell>Số lượng</Table.HeadCell>
              <Table.HeadCell>Xác nhận</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Chi tiết </span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-center">
              {items.map((item) => (
                <>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="p-4">
                      {/* checkbox only one choice */}
                      <Radio name="checkbox" className="text-[#6750A4]" />
                    </Table.Cell>
                    <Table.Cell>{item.reservationId}</Table.Cell>
                    <Table.Cell>{item.userName}</Table.Cell>
                    <Table.Cell>{item.address}</Table.Cell>
                    <Table.Cell>{
                    // item.reservationDate 2023-12-20T05:12:12.000Z
                    (() => {
                      let date = item.reservationDate.split("T")[0] + " - " + item.reservationDate.split("T")[1].split(".")[0];
                      return date
                    })()
                    }</Table.Cell>
                    <Table.Cell>{item.quantity}</Table.Cell>
                    <Table.Cell>{item.isConfirm}</Table.Cell>
                    <Table.Cell>
                      <Button className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
                        Chỉnh sửa
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                </>
              ))}
            </Table.Body>
          </Table>
        </div>
      </main>
      <Check />
      <Success />
    </>
  );
}
