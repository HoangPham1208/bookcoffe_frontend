import React, { useEffect } from "react";
import { Navbar } from "../navbar";
import { Button } from "flowbite-react";
import { FloatingLabel } from "flowbite-react";
import { Table } from "flowbite-react";
import { Checkbox } from "flowbite-react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddDrink() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/staff/showDrinks")
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  const [drinks, setDrinks] = useState([]);
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
      const newDrinks = drinks.filter(
        (item) => item.drinksId !== items[index1].drinksId
      );
      setDrinks(newDrinks);
    } else {
      // is undefined
      updatedSelectedItems[index1][index2] = {
        ...updatedSelectedItems[index1][index2],
        isChecked: true,
      };
      const temp = {
        drinksImage: items[index1].image,
        drinksId: items[index1].drinksId,
        drinksName: items[index1].drinksName,
        price: items[index1].price[index2],
        size: items[index1].size[index2],
        quantity: selectedItems[index1]?.[index2]?.inputValue || 1,
      };
      const newDrinks = [...drinks, temp];
      setDrinks(newDrinks);
    }
    setSelectedItems(updatedSelectedItems);
  };

  const handleInputChange = (index1, index2, value) => {
    const updatedSelectedItems = [...selectedItems];

    if (!updatedSelectedItems[index1]) {
      // If the outer array at index1 is undefined, initialize it
      updatedSelectedItems[index1] = [];
    }

    if (updatedSelectedItems[index1]?.[index2]?.isChecked) {
      updatedSelectedItems[index1][index2] = {
        ...updatedSelectedItems[index1][index2],
        inputValue: value,
      };
    } else {
      updatedSelectedItems[index1][index2] = {
        ...updatedSelectedItems[index1][index2],
        inputValue: value,
      };
    }
    setSelectedItems(updatedSelectedItems);
  };

  return (
    <>
      <Navbar />
      <main className="mx-auto flex flex-col max-w-screen-xl pt-20">
        <div className="text-3xl font-semibold my-5 mx-36">Chọn đồ uống</div>
        <div>
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
                {/* <Table.HeadCell>ID</Table.HeadCell> */}
                <Table.HeadCell>Tên</Table.HeadCell>
                <Table.HeadCell>Giá</Table.HeadCell>
                <Table.HeadCell>Size</Table.HeadCell>
                <Table.HeadCell>Số lượng</Table.HeadCell>
                <Table.HeadCell className="p-4"></Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y text-center">
                {items.map((item1, index1) =>
                  items[index1].price.map((item2, index2) => (
                    <>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>{item1.image}</Table.Cell>
                        {/* <Table.Cell>{item1.drinksId}</Table.Cell> */}
                        <Table.Cell>{item1.drinksName}</Table.Cell>
                        <Table.Cell>{item1.price[index2]}</Table.Cell>
                        <Table.Cell>{item1.size[index2]}</Table.Cell>
                        <Table.Cell>
                          <input
                            type="number"
                            className="w-16 h-8 rounded-md border-1"
                            min="1"
                            value={
                              selectedItems[index1]?.[index2]?.inputValue || 1
                            }
                            onChange={(e) =>
                              handleInputChange(index1, index2, e.target.value)
                            }
                            disabled={
                              selectedItems[index1]?.[index2]?.isChecked
                            }
                          />
                        </Table.Cell>
                        <Table.Cell className="p-4">
                          <Checkbox
                            checked={selectedItems[index1]?.[index2]?.isChecked}
                            onChange={() =>
                              handleCheckboxChange(index1, index2)
                            }
                          />
                        </Table.Cell>
                      </Table.Row>
                    </>
                  ))
                )}
              </Table.Body>
            </Table>
          </div>
          <div className="flex place-content-start gap-10 mx-36 my-5">
            <Button 
            onClick={()=>{
              localStorage.setItem("drinks", JSON.stringify(drinks));
              navigate("/staff/order/drinks");
            }}
            className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
              Hoàn tất
            </Button>
            <Button
              onClick={() => navigate("/staff/order/drinks")}
              className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white"
            >
              Hủy
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
