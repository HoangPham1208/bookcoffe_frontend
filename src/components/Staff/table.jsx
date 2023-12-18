import React from "react";
import NavBar from "../navbar";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { Checkbox, Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const items = [
  {
    name: "Bàn họp 1",
    quantity: "10",
    price: "1000000",
  },
  {
    name: "Bàn họp 1",
    quantity: "10",
    price: "1000000",
  },
  {
    name: "Bàn họp 1",
    quantity: "10",
    price: "1000000",
  },
];

const items2 = [
  {
    number: "1",
    name: "Bàn họp 1",
    quantity: "10",
    voucher: "myvoucher123",
    totalPrice: "1000000",
  }
  ,
  {
    number: "1",
    name: "Bàn họp 1",
    quantity: "10",
    voucher: "myvoucher123",
    totalPrice: "1000000",
  }
  ,
  {
    number: "1",
    name: "Bàn họp 1",
    quantity: "10",
    voucher: "myvoucher123",
    totalPrice: "1000000",
  }
];

export default function MyTable() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <main>
        <div>
          <ul className="flex gap-4 ml-36 my-10 text-xl font-semibold">
            <li>
              <button className="hover:underline">Sách</button>
            </li>
            <li>
              <button className="underline">Bàn</button>
            </li>
            <li>
              <button className="hover:underline">Đơn hàng</button>
            </li>
            <li>
              <button className="hover:underline">Voucher</button>
            </li>
            <li>
              <button className="hover:underline">Nhân viên</button>
            </li>
          </ul>
        </div>

        {/* Đặt bàn */}

        <div className="flex ml-36 gap-4">
          <Button
            className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] "
          >
            Thêm bàn
          </Button>
          <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
            Xóa bàn
          </Button>
          <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
            Chi tiết
          </Button>
        </div>
        <hr className="border-black mx-36 my-10" />
        <div className="overflow-x-auto mx-36">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell className="p-4"></Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
              <Table.HeadCell>Tên</Table.HeadCell>
              <Table.HeadCell>Kho</Table.HeadCell>
              <Table.HeadCell>Giá</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {items.map((item) => (
                <>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>
                      <img src="/the-fault-in-our-stars.png" className="h-28" />
                    </Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.quantity}</Table.Cell>
                    <Table.Cell>{item.price}</Table.Cell>
                  </Table.Row>
                </>
              ))}
            </Table.Body>
          </Table>
        </div>
        <hr className="border-black mx-36 my-10" />
        
        {/* Lích sử đặt bàn */}

        <div className="ml-36 text-lg font-semibold">Lịch sử đặt bàn</div>
        <div className="flex ml-36 gap-4 pt-5">
          <Button
            onClick={() => navigate("/addbook")}
            className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] "
          >
            Đặt thêm
          </Button>
          <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
            Hủy đặt
          </Button>
          <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
            Chi tiết
          </Button>
        </div>
        <div className="overflow-x-auto mx-36 py-10">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell className="p-4"></Table.HeadCell>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Tên</Table.HeadCell>
              <Table.HeadCell>Số lượng món </Table.HeadCell>
              <Table.HeadCell>Voucher</Table.HeadCell>
              <Table.HeadCell>Tổng giá</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {items2.map((item) => (
                <>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>{item.number}</Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.quantity}</Table.Cell>
                    <Table.Cell>{item.voucher}</Table.Cell>
                    <Table.Cell>{item.totalPrice}</Table.Cell>
                  </Table.Row>
                </>
              ))}
            </Table.Body>
          </Table>
        </div>
      </main>
    </div>
  );
}
