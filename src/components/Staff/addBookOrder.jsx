import React, { useEffect } from "react";
import { Navbar } from "../navbar";
import { Button } from "flowbite-react";
import { FloatingLabel } from "flowbite-react";
import { Table } from "flowbite-react";
import { Checkbox } from "flowbite-react";
import { useState } from "react";
import axios from "axios";

export default function AddBookOrder() {
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:4000/api/customer/search?title=&address=").then((res) => {
      console.log(res.data);
      setItems(res.data);
      
    }).catch((err) => {
      console.log(err);
    }
    );
  }, [refresh]);
  const [books, setBooks] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const handleCheckboxChange = (index1, index2) => {
    const updatedSelectedItems = [...selectedItems];
    if (!updatedSelectedItems[index1]) {
      // If the outer array at index1 is undefined, initialize it
      updatedSelectedItems[index1] = [];
    }
    if (updatedSelectedItems[index1][index2]?.isChecked) {
      updatedSelectedItems[index1][index2] = {
        ...updatedSelectedItems[index1][index2],
        isChecked: false,
      };
      const newBooks = books.filter(
        (item) => item.bookId !== items[index1].bookId
      );
      setBooks(newBooks);
    } else {
      // is undefined
      updatedSelectedItems[index1][index2] = {
        ...updatedSelectedItems[index1][index2],
        isChecked: true,
      };
      const temp = {
        bookImage: items[index1].image,
        bookId: items[index1].bookId,
        bookName: items[index1].title,
        price: items[index1].salePrice,
        quantity: selectedItems[index1]?.[index2]?.inputValue || 1,
      };
      setBooks([...books, temp]);
    }
    setSelectedItems(updatedSelectedItems);
  }

  const handleInputChange = (e, index1, index2) => {
    const updatedSelectedItems = [...selectedItems];
    if (!updatedSelectedItems[index1]) {
      // If the outer array at index1 is undefined, initialize it
      updatedSelectedItems[index1] = [];
    }
    updatedSelectedItems[index1][index2] = {
      ...updatedSelectedItems[index1][index2],
      inputValue: e.target.value,
    };
    setSelectedItems(updatedSelectedItems);
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto flex flex-col max-w-screen-xl pt-20">
        <div className="text-3xl font-semibold my-5 mx-36">Tạo phiếu mượn sách</div>
        <div className="relative text-gray-600 mx-36 my-7">
          <input
            type="search"
            name="serch"
            placeholder="Tìm kiếm"
            className="bg-[#ECE6F0] rounded-full text-sm focus:outline-none w-full px-5 h-12"
          />
        </div>
        <hr className="border-black mx-36 my-5" />
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
              {items.map((item1, index1) =>
                  items[index1].branch.map((item2, index2) => (
                <>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>//</Table.Cell>
                    <Table.Cell>{item1.authorName}</Table.Cell>
                    <Table.Cell>{item2}</Table.Cell>
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
              )))}
            </Table.Body>
          </Table>
        </div>
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
