import React from "react";
import { Navbar } from "../navbar";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { Checkbox, Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import ListFunc from "../Utils/listFunc";
import axios from "axios";
import { useState, useEffect } from "react";
import RefreshTokenAPI from "../Utils/token";

export default function BookManager() {
  const navigate = useNavigate();
  const role = new Cookies().get("role");
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/customer/search?title=&address=")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);
  return (
    <div>
      <Navbar />
      <main className="mx-auto flex flex-col max-w-screen-xl pt-20">
        <ListFunc />
        <div className="flex ml-36 gap-4">
          <Button
            onClick={() => {
              if (role === "manager") {
                navigate("/manager/books/1/addcopy");
              } else if (role === "admin") {
                navigate("/admin/books/1/addcopy");
              }
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
            <Table.Head className="text-center">
              <Table.HeadCell></Table.HeadCell>
              <Table.HeadCell>Tên tác giả</Table.HeadCell>
              <Table.HeadCell>Chi nhánh</Table.HeadCell>
              <Table.HeadCell>Tiêu đề</Table.HeadCell>
              <Table.HeadCell>Thể loại</Table.HeadCell>
              <Table.HeadCell>Năm xuất bản</Table.HeadCell>
              {/* <Table.HeadCell>Giá bán</Table.HeadCell> */}
              <Table.HeadCell className="p-4"></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-center">
              {items.map((item1, index1) => (
                <>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>//</Table.Cell>
                    <Table.Cell>{item1.authorName}</Table.Cell>
                    <Table.Cell>{item1.title}</Table.Cell>
                    <Table.Cell>{item1.genre}</Table.Cell>
                    <Table.Cell>{item1.publicationYear}</Table.Cell>
                    {/* <Table.Cell>{item1.salePrice}</Table.Cell> */}
                    <Table.Cell className="p-4">
                      <Checkbox 
                      className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white"
                      />
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
