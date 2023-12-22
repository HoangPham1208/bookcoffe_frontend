import React from "react";
import { Navbar } from "../navbar";
import { Button } from "flowbite-react";
import { FloatingLabel } from "flowbite-react";
import { Table } from "flowbite-react";
import { Checkbox } from "flowbite-react";

const items = [
  {
    name: "Cà phê đen",
    quantity: 1,
    price: 20000,
  },
  {
    name: "Cà phê đen",
    quantity: 1,
    price: 20000,
  },
];

export default function AddDrink() {
  return (
    <>
      <Navbar />
      <main>
        <div className="text-3xl font-semibold my-5 mx-36">Thêm đồ uống</div>
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
                      <img src="/the-fault-in-our-stars.png" className="h-28" />
                    </Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.quantity}</Table.Cell>
                    <Table.Cell>{item.price}</Table.Cell>
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
        <div className="mx-36 my-5">Đã chọn: Blabla</div>
        <div className="flex place-content-start gap-10 mx-36 my-5">
         
          <Button className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
            Hoàn tất
          </Button>
          <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
            Hủy
          </Button>
        </div>
      </main>
    </>
  );
}
