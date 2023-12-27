import React from "react";
import { Navbar } from "../navbar";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { Checkbox, Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import ListFunc from "../Utils/listFunc";
import RefreshTokenAPI from "../Utils/token";
import {useState, useEffect} from "react";
import axios from "axios";
import Cookies from "universal-cookie";


export default function Staff() {
  const navigate = useNavigate();
  const [items2, setItems2] = useState([]);
  const cookie = new Cookies();
  useEffect(() => {
    axios.get("http://localhost:4000/api/manager/showStaff", {
      headers: {
        Authorization: `Bearer ${cookie.get("accessToken")}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setItems2(res.data);
    }
    )
    .catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <main>
       <ListFunc />
        <div className="flex ml-36 gap-4">
          <Button className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
            Thêm nhân viên
          </Button>
          <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
            Xóa nhân viên
          </Button>
          <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
            Chi tiết
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
        <hr className="mt-10 mx-36 border-black" />
        <div className="overflow-x-auto mx-36 py-10">
          <Table hoverable>
            <Table.Head className="text-center">
              <Table.HeadCell className="p-4"></Table.HeadCell>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Địa chỉ</Table.HeadCell>
              <Table.HeadCell>Ngày bắt đầu làm việc</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-center">
              {items2.map((item) => (
                <>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>{item.staffName}</Table.Cell>
                    <Table.Cell>{item.email}</Table.Cell>
                    <Table.Cell>{item.address}</Table.Cell>
                    <Table.Cell>{
                      new Date(item.workingDate).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    }</Table.Cell>
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
