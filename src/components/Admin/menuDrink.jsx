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

export default function MenuDrink() {
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      await RefreshTokenAPI();
      axios
        .get("http://localhost:4000/api/staff/showDrinks")
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
          <button>Menu</button>
        </div>
        <div className="flex place-content-start gap-10 my-5">
          <Button className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
            Thêm nước
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
              {/* <Table.HeadCell>ID</Table.HeadCell> */}

              <Table.HeadCell>Tên</Table.HeadCell>
              <Table.HeadCell>Giá</Table.HeadCell>
              <Table.HeadCell>Size</Table.HeadCell>
              <Table.HeadCell className="p-4"></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-center">
              {items.map((item1, index1) =>
                items[index1].price.map((item2, index2) => (
                  <>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="grid justify-center">
                        {/* search by id like this :
                          http://localhost:4000/api/staff/getDrinksImage/item.drinksId
                           */}
                        <img
                          src={`http://localhost:4000/api/staff/getDrinksImage/${item1.drinksId}`}
                          alt={item1.image}
                          className="w-16 h-16 rounded-full"
                        />
                      </Table.Cell>
                      {/* <Table.Cell>{item1.drinksId}</Table.Cell> */}
                      <Table.Cell>{item1.drinksName}</Table.Cell>
                      <Table.Cell>{item1.price[index2]}</Table.Cell>
                      <Table.Cell>{item1.size[index2]}</Table.Cell>

                      <Table.Cell className="p-4">
                        <Checkbox 
                        className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white"
                        />
                      </Table.Cell>
                    </Table.Row>
                  </>
                ))
              )}
            </Table.Body>
          </Table>
        </div>
      </main>
    </>
  );
}