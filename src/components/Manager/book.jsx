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
import { customTheme } from "../Utils/myButton";

export default function BookManager() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState([]); // result of search
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/customer/search?title=&address=")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
  return (
    <div>
      <Navbar />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <ListFunc />
          <div className="flex ml-36 gap-4">
            <Button
              onClick={() => {
                if (localStorage.getItem("title") === null) {
                  alert("Vui lòng chọn sách");
                  return;
                }
                navigate(
                  "/manager/books/" + localStorage.getItem("title") + "/addcopy"
                );
              }}
              theme={customTheme}
              color="primary"
              pill
            >
              Thêm copy
            </Button>
            {/* <Button theme={customTheme} color="secondary" pill>
            Xóa sách
          </Button> */}
          </div>
          <div className="relative text-gray-600 mx-36 my-7">
            <input
              type="search"
              name="search"
              placeholder="Tìm kiếm với tên tác giả hoặc tiêu đề"
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
          <hr className="border-black mx-36 my-10" />
          <div className="overflow-x-auto mx-36">
            <Table hoverable>
              <Table.Head className="text-center">
                <Table.HeadCell></Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>
                <Table.HeadCell>Tên tác giả</Table.HeadCell>
                <Table.HeadCell>Tiêu đề</Table.HeadCell>
                <Table.HeadCell>Số lượng</Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>
                {/* <Table.HeadCell>Thể loại</Table.HeadCell> */}
                {/* <Table.HeadCell>Năm xuất bản</Table.HeadCell> */}
                {/* <Table.HeadCell>Giá</Table.HeadCell> */}
              </Table.Head>
              <Table.Body className="divide-y text-center">
                {result &&
                  result.map((item1, index) => (
                    <>
                      <Table.Row
                        onClick={() => {
                          setSelected(index);
                          localStorage.setItem("title", item1.title);
                        }}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      >
                        <Table.Cell className="p-4">
                          <Checkbox
                            checked={selected === index}
                            className="text-[#916239] bg-white border-[#916239] rounded-full enabled:hover:bg-[#916239] enabled:hover:text-white"
                          />
                        </Table.Cell>
                        <Table.Cell>
                          {
                            <img
                              src={
                                "http://localhost:4000/api/customer/getBookImage/" +
                                item1.bookId
                              }
                              alt="book"
                            />
                          }
                        </Table.Cell>
                        <Table.Cell>{item1.authorName}</Table.Cell>
                        <Table.Cell>{item1.title}</Table.Cell>
                        <Table.Cell>
                          {(() => {
                            let count = 0;
                            for (let i = 0; i < item1.branch.length; i++) {
                              if (
                                item1.branch[i] ===
                                new Cookies().get("branchAddress")
                              ) {
                                count++;
                              }
                            }
                            return count;
                          })()}
                        </Table.Cell>
                        <Table.Cell>
                          <div className="flex justify-center">
                            <Button
                              onClick={() => {
                                localStorage.setItem(
                                  "bookInfo",
                                  JSON.stringify(item1)
                                );
                                navigate("/manager/books/" + item1.title);
                              }}
                              theme={customTheme}
                              color="secondary"
                              pill
                            >
                              Chi tiết
                            </Button>
                          </div>
                        </Table.Cell>
                        {/* <Table.Cell>{item1.genre}</Table.Cell> */}
                        {/* <Table.Cell>{item1.publicationYear}</Table.Cell> */}
                        {/* <Table.Cell>{item1.salePrice}</Table.Cell> */}
                      </Table.Row>
                    </>
                  ))}
              </Table.Body>
            </Table>
          </div>
        </main>
      </section>
    </div>
  );
}
