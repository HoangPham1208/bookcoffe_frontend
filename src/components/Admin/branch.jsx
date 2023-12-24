import React from "react";
import { Navbar } from "../navbar";
import axios from "axios";
import { useEffect } from "react";
import { Table, Button, Radio } from "flowbite-react";

export default function Branch() {
    const [items, setItems] = React.useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/api/admin/showBranch").then((res) => {
            console.log(res.data);
            setItems(res.data);
        })
        .catch((err) => {
            console.log(err);
        }
        )}, [])
    return (
    <>
      <Navbar />
      <main className="mx-36 my-5">
        <div className="text-center my-5 text-2xl font-semibold">Your branch</div>
        <div className="overflow-x-auto mx-36">
          <Table hoverable>
            <Table.Head className="text-center">
              <Table.HeadCell >ID</Table.HeadCell>
              <Table.HeadCell>Địa điểm</Table.HeadCell>
              <Table.HeadCell>Giờ làm việc</Table.HeadCell>
              <Table.HeadCell>Quản lý</Table.HeadCell>
              <Table.HeadCell>Ngày tạo</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Chỉnh sửa </span>
              </Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Quản lý </span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-center">
              {items.map((item) => (
                <>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>{item.branchId}</Table.Cell>
                    <Table.Cell>{item.address}</Table.Cell>
                    <Table.Cell>{item.workingTime}</Table.Cell>
                    <Table.Cell>{item.managerId}</Table.Cell>
                    <Table.Cell>{item.createDate}</Table.Cell>
                    <Table.Cell>
                      <Button className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
                        Chỉnh sửa
                      </Button>
                    </Table.Cell>
                    <Table.Cell>
                      <Button className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
                        Quản lý
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
