import React from "react";
import NavBar from "../navbar";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { Checkbox, Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const items = [
  {
    name: "The Fault in Our Stars",
    quantity: 10,
    price: 100000,
  },
  {
    name: "The Fault in Our Stars",
    quantity: 10,
    price: 100000,
  },
];

export default function Book() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <main>
        <div>
          <ul className="flex gap-4 ml-36 my-10 text-xl font-semibold">
            <li>
              <button className="underline">Sách</button>
            </li>
            <li>
              <button  className="hover:underline">Bàn</button>
            </li>
            <li>
              <button  className="hover:underline">Đơn hàng</button>
            </li>
            <li>
              <button  className="hover:underline">Voucher</button>
            </li>
            <li>
              <button  className="hover:underline">Nhân viên</button>
            </li>
          </ul>
        </div>
        <div className="flex ml-36 gap-4">
          <Button onClick={()=>navigate('/addbook')} className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
            Thêm sách
          </Button>
          <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
            Xóa sách
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
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {items.map((item) => (
                <>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>
                        <img
                            src="/the-fault-in-our-stars.png"
                            className="h-28"
                        />
                    </Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.quantity}</Table.Cell>
                    <Table.Cell>{item.price}</Table.Cell>
                    <Table.Cell>
                      <Button className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
                        Edit
                      </Button>
                    </Table.Cell>
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
