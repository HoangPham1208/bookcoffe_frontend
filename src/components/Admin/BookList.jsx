import React from "react";
import { Navbar } from "../navbar";
import { Button } from "flowbite-react";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import RefreshTokenAPI from "../Utils/token";
import { useNavigate } from "react-router-dom";
import { Table } from "flowbite-react";
import { Checkbox } from "flowbite-react";

export default function BookList() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      await RefreshTokenAPI();
      axios
        .get("http://localhost:4000/api/customer/search?title=&address=")
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [refresh]);
  return (
    <>
      <Navbar />
      <main className="mx-autoflex flex-col max-w-screen-xl py-20 mx-36">
        <div className="my-5 font-semibold text-3xl">
          <button>Sách</button>
        </div>
        <div className="flex place-content-start gap-10 my-5">
          <Button
            onClick={() => navigate("/admin/bookList/addBook")}
            className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] "
          >
            Thêm sách
          </Button>
          <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
            Xóa
          </Button>
        </div>
        <div className="relative text-gray-600 my-7">
          <input
            type="search"
            name="serch"
            placeholder="Tìm kiếm"
            className="bg-[#ECE6F0] rounded-full text-sm focus:outline-none w-full px-5 h-12"
          />
        </div>
        <div className="overflow-x-auto mx-36">
          <Table hoverable>
            <Table.Head className="text-center">
              <Table.HeadCell></Table.HeadCell>
              <Table.HeadCell>Tên tác giả</Table.HeadCell>
              <Table.HeadCell>Tiêu đề</Table.HeadCell>
              <Table.HeadCell>Giá</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-center">
              {items.map((item1, index1) => (
                <>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>ThisIsImage</Table.Cell>
                    <Table.Cell>{item1.authorName}</Table.Cell>
                    <Table.Cell>{item1.title}</Table.Cell>
                    <Table.Cell>{item1.salePrice}</Table.Cell>
                    <Table.Cell>
                      <Button
                        onClick={() => navigate("/admin/bookList/:id")}
                        className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white"
                      >
                        Chi tiết
                      </Button>
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox
                        className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white"
                        label="Chọn"
                      />
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