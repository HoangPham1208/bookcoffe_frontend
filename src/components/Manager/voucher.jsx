import React from "react";
import { Navbar } from "../navbar";
import { Button, Label, List, TextInput, Textarea } from "flowbite-react";
import { Checkbox, Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import ListFunc from "../Utils/listFunc";

const items2 = [
  {
    number: "1",
    name: "Bàn họp 1",
    condition: "10",
    discount: "10%",
  },
  {
    number: "1",
    name: "Bàn họp 1",
    condition: "10",
    discount: "10%",
  },
  {
    number: "1",
    name: "Bàn họp 1",
    condition: "10",
    discount: "10%",
  },
];

export default function Voucher() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <main className="mx-auto flex flex-col max-w-screen-xl pt-20">
        <ListFunc />
        <div className="flex ml-36 gap-4">
          <Button className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
            Thêm voucher
          </Button>
          <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
            Xóa voucher
          </Button>
          <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
            Chi tiết
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
        <hr className="mt-10 ml-36 border-black" />
        <div className="overflow-x-auto mx-36 py-10">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell className="p-4"></Table.HeadCell>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Tên</Table.HeadCell>
              <Table.HeadCell>Điều kiện</Table.HeadCell>
              <Table.HeadCell>Giảm giá</Table.HeadCell>
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
                    <Table.Cell>{item.condition}</Table.Cell>
                    <Table.Cell>{item.discount}</Table.Cell>
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
