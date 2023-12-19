import React from "react";
import NavBar from "../navbar";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { Checkbox, Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const items2 = [
    {
        number: "1",
        name: "Nguyễn Văn A",
        timeStart: "10/10/2021",
        salary: "1000000",
    }
    ,
    {
        number: "1",
        name: "Nguyễn Văn A",
        timeStart: "10/10/2021",
        salary: "1000000",
    }
];

export default function Staff() {
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
              <button className="hover:underline">Bàn</button>
            </li>
            <li>
              <button className="hover:underline">Đơn hàng</button>
            </li>
            <li>
              <button className="hover:underline">Voucher</button>
            </li>
            <li>
              <button className="underline">Nhân viên</button>
            </li>
          </ul>
        </div>
        <div className="flex ml-36 gap-4">
          <Button className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
            Thêm nhân viên
          </Button>
          <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
            Xóa nhân viên
          </Button>
          <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
            Chi tiết
          </Button>
        </div>
        <hr className="mt-10 ml-36" />
        <div className="overflow-x-auto mx-36 py-10">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell className="p-4"></Table.HeadCell>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Tên</Table.HeadCell>
              <Table.HeadCell>Bắt đầu làm</Table.HeadCell>
              <Table.HeadCell>Lương</Table.HeadCell>
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
                    <Table.Cell>{item.timeStart}</Table.Cell>
                    <Table.Cell>{item.salary}</Table.Cell>
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