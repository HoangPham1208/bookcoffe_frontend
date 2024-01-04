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
  const [result, setResult] = useState([]); // result of search
  useEffect(() => {
    const fetchData = async () => {
      // await RefreshTokenAPI();
      await axios
        .get("http://localhost:4000/api/customer/search?title=&address=")
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
          setResult(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [refresh]);
  const handleSearch = (searchQuery) => {
    if (searchQuery === "") {
      setResult(items);
      return;
    }
    let temp = items.filter((item) => {
      if (item.authorName.includes(searchQuery)) return true;
      if (item.title.includes(searchQuery)) return true;
      return false;
    });
    setResult(temp);
  };

  const [selected, setSelected] = useState(null);
  return (
    <>
      <Navbar />
      <main className="mx-autoflex flex-col max-w-screen-xl py-20 mx-36">
        <div className="my-5 font-semibold text-3xl mx-36">
          <button>Sách</button>
        </div>
        <div className="flex place-content-start gap-10 my-5 mx-36">
          <Button
            onClick={() => navigate("/admin/bookList/addBook")}
            theme={customTheme}
            color="primary"
            pill
          >
            Thêm sách
          </Button>
          {/* <Button theme={customTheme} color="secondary" pill>
            Xóa
          </Button> */}
        </div>
        <div className="relative text-gray-600 my-7 mx-36">
          <input
            type="search"
            name="serch"
            placeholder="Tìm kiếm với tên sách hoặc tên tác giả"
            className="bg-gray-100 rounded-full text-sm focus:outline-none w-full px-5 h-12"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(e.target.value);
              }
            }}
            onChange={(e) => {
              if (e.target.value === "") setResult(items);
            }}
          />
        </div>
        <div className="overflow-x-auto mx-36">
          <Table hoverable>
            <Table.Head className="text-center">
              {/* <Table.HeadCell></Table.HeadCell> */}
              <Table.HeadCell></Table.HeadCell>
              <Table.HeadCell>Tên tác giả</Table.HeadCell>
              <Table.HeadCell>Tiêu đề</Table.HeadCell>
              <Table.HeadCell>Giá</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-center">
              {result && result.map((item1, index1) => (
                <>
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    onClick={() => setSelected(item1.bookId)}
                  >
                    {/* <Table.Cell>
                      <Checkbox
                        checked={selected === item1.bookId}
                        className="text-[#916239] bg-white border-[#916239] rounded-full enabled:hover:bg-[#916239] enabled:hover:text-white"
                        label="Chọn"
                      />
                    </Table.Cell> */}
                    <Table.Cell>{
                      <img
                      className="w-20 h-20"
                      src={
                        "http://localhost:4000/api/customer/getBookImage/" +
                        item1.bookId
                      }
                      alt="book"
                    />
                    }</Table.Cell>
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
                        onClick={async () =>
                          {
                            await localStorage.setItem("bookInfo", JSON.stringify(item1));
                            navigate("/admin/bookList/" + item1.title)
                          }
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
