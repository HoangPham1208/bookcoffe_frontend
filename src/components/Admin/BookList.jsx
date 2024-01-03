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
import { customTheme } from "../Utils/myButton";

export default function BookList() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      // await RefreshTokenAPI();
      await axios
        .get("http://localhost:4000/api/customer/search?title=&address=")
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("bookList", JSON.stringify(res.data));
          setItems(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [refresh]);
  const [selected, setSelected] = useState(null);
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
            theme={customTheme}
            color="primary"
            pill
          >
            Thêm sách
          </Button>
          <Button theme={customTheme} color="secondary" pill>
            Xóa
          </Button>
        </div>
        <div className="relative text-gray-600 my-7">
          <input
            type="search"
            name="serch"
            placeholder="Tìm kiếm"
            className="bg-gray-100 rounded-full text-sm focus:outline-none w-full px-5 h-12"
          />
        </div>
        <div className="overflow-x-auto mx-36">
          <Table hoverable>
            <Table.Head className="text-center">
              <Table.HeadCell></Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
              <Table.HeadCell>Tên tác giả</Table.HeadCell>
              <Table.HeadCell>Tiêu đề</Table.HeadCell>
              <Table.HeadCell>Giá</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-center">
              {items.map((item1, index1) => (
                <>
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    onClick={() => setSelected(item1.bookId)}
                  >
                    <Table.Cell>
                      <Checkbox
                        checked={selected === item1.bookId}
                        className="text-[#916239] bg-white border-[#916239] rounded-full enabled:hover:bg-[#916239] enabled:hover:text-white"
                        label="Chọn"
                      />
                    </Table.Cell>
                    <Table.Cell>ThisIsImage</Table.Cell>
                    <Table.Cell>{item1.authorName}</Table.Cell>
                    <Table.Cell>{item1.title}</Table.Cell>
                    <Table.Cell>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item1.salePrice)}
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                        onClick={() =>
                          navigate("/admin/bookList/" + item1.title)
                        }
                        theme={customTheme}
                        color="secondary"
                        pill
                      >
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
    </>
  );
}
