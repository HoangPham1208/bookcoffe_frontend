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
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function BookAdmin() {
  const branchAddress = localStorage.getItem("branchAddress");
  const navigate = useNavigate();
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
  const [selected, setSelected] = useState(null);
  return (
    <div>
      <Navbar />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="flex place-content-start fixed mt-8">
            <Button
              onClick={() => {
                localStorage.clear();
                navigate("/admin");
              }}
              theme={customTheme}
              color="secondary"
              pill
            >
              <HiOutlineArrowLeft className="h-5 w-5 mr-3" />
              Trở về
            </Button>
          </div>
          <div>
            <ul className="flex gap-4 ml-36 my-10 text-xl font-semibold">
              <li>
                <button className="hover:underline">
                  {localStorage.getItem("type") === "book" ||
                  localStorage.getItem("type") === null ? (
                    <p className="underline"> Sách </p>
                  ) : (
                    <p> Sách </p>
                  )}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    localStorage.setItem("type", "staff");
                    navigate(
                      `/admin/branch/${localStorage.getItem(
                        "branchAddress"
                      )}/staff`
                    );
                  }}
                  className="hover:underline"
                >
                  {/* staff */}
                  {localStorage.getItem("type") === "staff" ? (
                    <p className="underline"> Nhân viên </p>
                  ) : (
                    <p> Nhân viên </p>
                  )}
                </button>
              </li>
            </ul>
          </div>
          <div className="flex ml-36 gap-4">
            <Button
              onClick={() => {
                if (selected === null) {
                  alert("Vui lòng chọn sách");
                  return;
                }
                navigate(
                  `/admin/branch/${localStorage.getItem(
                    "branchAddress"
                  )}/books/${localStorage.getItem("title")}/addcopy`
                );
              }}
              theme={customTheme}
              color="primary"
              pill
            >
              Thêm copy
            </Button>
            <Button theme={customTheme} color="secondary" pill>
              Xóa sách
            </Button>
          </div>
          <div className="relative text-gray-600 mx-36 my-7">
            <input
              type="search"
              name="serch"
              placeholder="Tìm kiếm"
              className="bg-gray-100 rounded-full text-sm focus:outline-none w-full px-5 h-12"
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
                <Table.HeadCell>Chi tiết</Table.HeadCell>
                {/* <Table.HeadCell>Thể loại</Table.HeadCell> */}
                {/* <Table.HeadCell>Năm xuất bản</Table.HeadCell> */}
                {/* <Table.HeadCell>Giá</Table.HeadCell> */}
              </Table.Head>
              <Table.Body className="divide-y text-center">
                {items.map((item1, index) => (
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
                      <Table.Cell className="w-32 h-20 object-cover">
                        {
                          <img
                            src={
                              "http://localhost:4000/api/customer/getBookImage/" +
                              item1.bookId
                            }
                            alt="mybook"
                          />
                        }
                      </Table.Cell>
                      <Table.Cell>{item1.authorName}</Table.Cell>
                      <Table.Cell>{item1.title}</Table.Cell>
                      <Table.Cell>
                        {(() => {
                          let count = 0;
                          for (let i = 0; i < item1.branch.length; i++) {
                            if (item1.branch[i] === branchAddress) {
                              count++;
                            }
                          }
                          return count;
                        })()}
                      </Table.Cell>
                      <Table.Cell>
                        <div className="flex justify-center">
                          <Button
                            onClick={() =>
                              navigate(
                                "/admin/branch/" +
                                  localStorage.getItem("branchAddress") +
                                  "/books/" +
                                  item1.title
                              )
                            }
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
