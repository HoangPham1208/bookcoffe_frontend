import React from "react";
import { Navbar } from "../navbar";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { Checkbox, Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import ListFunc from "../Utils/listFunc";

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

export default function BookAdmin() {
  const navigate = useNavigate();
  const role = new Cookies().get("role");
  return (
    <div>
      <Navbar />
      <main className="mx-auto flex flex-col max-w-screen-xl pt-20">
        <div className="flex place-content-start fixed mt-8 mx-5 ">
          <Button
            onClick={() => navigate("/admin")}
            className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white"
          >
            Trở về
          </Button>
        </div>
        <ListFunc />
        <div className="flex ml-36 gap-4">
          <Button
            onClick={() => {
              navigate("/admin/branch/:id/books/:id/addcopy");
            }}
            className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] "
          >
            Thêm copy
          </Button>
          <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
            Xóa sách
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
                      <img src="/the-fault-in-our-stars.png" className="h-28" />
                    </Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.quantity}</Table.Cell>
                    <Table.Cell>{item.price}</Table.Cell>
                    <Table.Cell>
                      <Button
                        onClick={() => {
                          navigate("/admin/branch/:id/books/:id");
                        }}
                        className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] "
                      >
                        Chi tiết
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