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

export default function MenuDrink() {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [result, setResult] = useState([]); // result of search
  useEffect(() => {
    const fetchData = async () => {
      // await RefreshTokenAPI();
      axios
        .get("http://localhost:4000/api/staff/showDrinks")
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
      if (item.drinksName.includes(searchQuery)) return true;
      return false;
    });
    setResult(temp);
  };
  const [selected, setSelected] = useState(null);
  return (
    <>
      <Navbar />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="font-semibold text-3xl">
            <button>Menu</button>
          </div>
          <div className="flex place-content-start gap-10 my-5">
            <Button
              theme={customTheme}
              color="primary"
              pill
              onClick={() => {
                navigate("/admin/menuDrink/addDrink");
              }}
            >
              Thêm nước
            </Button>
          </div>
          <div className="relative text-gray-600 my-7">
            <input
              type="search"
              name="serch"
              placeholder="Tìm kiếm với tên nước"
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
          <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Head className="text-center">
                <Table.HeadCell></Table.HeadCell>
                {/* <Table.HeadCell>ID</Table.HeadCell> */}

                <Table.HeadCell>Tên</Table.HeadCell>
                <Table.HeadCell>Size</Table.HeadCell>
                <Table.HeadCell>Giá</Table.HeadCell>
                <Table.HeadCell className="p-4"></Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y text-center">
                {result &&
                  result.map((item1, index1) =>
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
                          <Table.Cell>{item1.size[index2]}</Table.Cell>
                          <Table.Cell>
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(item1.price[index2])}
                          </Table.Cell>
                        </Table.Row>
                      </>
                    ))
                  )}
              </Table.Body>
            </Table>
          </div>
        </main>
      </section>
    </>
  );
}
