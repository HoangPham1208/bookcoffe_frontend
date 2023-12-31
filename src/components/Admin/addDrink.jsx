import React, { useEffect } from "react";
import { Navbar } from "../navbar";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { customTheme } from "../Utils/myButton";
import { useState } from "react";
import { Select } from "flowbite-react";
import axios from "axios";
import Cookies from "universal-cookie";
import { FileInput } from "flowbite-react";
import { FaCirclePlus } from "react-icons/fa6";
import { AiOutlineClear } from "react-icons/ai";

export default function AddDrinkMenu() {
  const cookie = new Cookies();
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);
  const [drinksImage, setDrinksImage] = useState(null);
  const [drinksName, setDrinksName] = useState("");
  const [sizes, setSizes] = useState([]);
  const [prices, setPrices] = useState([]);
  const [size, setSize] = useState([]);
  const [price, setPrice] = useState([]);
  const [checkSize, setCheckSize] = useState([
    { S: false },
    { M: false },
    { L: false },
  ]);

  const handleAddDrink = () => {
    const data = new FormData();
    data.append("drinksImage", drinksImage);
    data.append("drinksName", drinksName);
    data.append("size", sizes);
    data.append("price", prices);
    if (
      drinksImage === null ||
      drinksName === "" ||
      sizes.length === 0 ||
      prices.length === 0
    ) {
      alert("Vui lòng nhập đủ thông tin");
      return;
    }
    axios
      .post("http://localhost:4000/api/admin/addDrinks", data, {
        headers: {
          Authorization: `Bearer ${cookie.get("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("Thêm nước thành công");
        navigate("/admin/menuDrink");
      })
      .catch((err) => {
        if (err.response.status === 409) {
          alert("Gặp xung đột dữ liệu");
          return;
        } else alert("Lỗi kết nối");
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-2/12 font-semibold text-lg">Thêm nước</div>
            <div className="w-full gap-5">
              <div className="flex flex-row place-content-start mb-5 gap-5">
                <Button
                  theme={customTheme}
                  color="primary"
                  pill
                  onClick={handleAddDrink}
                >
                  Hoàn tất
                </Button>
                <Button
                  onClick={() => navigate("/admin/menuDrink")}
                  theme={customTheme}
                  color="secondary"
                  pill
                >
                  Hủy
                </Button>
              </div>
              <div className="w-full ">
                {/* Bìa  */}
                <div className="mb-5">
                  <Label
                    htmlFor="file-upload"
                    value="Ảnh nước "
                    // set the file to fileAvatar
                  />
                  <FileInput
                    id="file-upload-helper-text"
                    helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                    onChange={(e) => {
                      setDrinksImage(e.target.files[0]);
                    }}
                  />
                  {/* <Label for="avatar" className="ml-40">Avatar</Label> */}
                </div>
                {/* Tên */}
                <div className="mb-5">
                  <Label for="ten">Tên nước</Label>
                  <TextInput
                    id="ten"
                    placeholder="Tên"
                    className="w-full"
                    onChange={(e) => {
                      setDrinksName(e.target.value);
                    }}
                  />
                </div>
                {/* Size + Giá */}
                <div className="flex gap-5">
                  <div className="mb-5">
                    <Label for="size">Size</Label>
                    <Select
                      id="size"
                      onChange={(e) => {
                        setSize(e.target.value);
                      }}
                    >
                      <option value="Chọn size" disabled={true} selected={true}>
                        Chọn size
                      </option>
                      <option disabled={checkSize[0].S} value="S">
                        S
                      </option>
                      <option disabled={checkSize[1].M} value="M">
                        M
                      </option>
                      <option disabled={checkSize[2].L} value="L">
                        L
                      </option>
                    </Select>
                  </div>
                  <div className="mb-5">
                    <Label for="gia">Giá</Label>
                    <TextInput
                      type="number"
                      id="gia"
                      placeholder="Giá"
                      className="w-full"
                      min="0"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                  </div>
                  <button>
                    <FaCirclePlus
                      className="w-7 h-7"
                      onClick={() => {
                        if (size.length === 0 || price.length === 0) {
                          alert("Vui lòng nhập đủ thông tin");
                          return;
                        }
                        if (size === "S") {
                          setCheckSize([
                            { S: true },
                            { M: false },
                            { L: false },
                          ]);
                        }
                        if (size === "M") {
                          setCheckSize([
                            { S: false },
                            { M: true },
                            { L: false },
                          ]);
                        }
                        if (size === "L") {
                          setCheckSize([
                            { S: false },
                            { M: false },
                            { L: true },
                          ]);
                        }
                        for (let i = 0; i < sizes.length; i++) {
                          if (sizes[i] === size) {
                            alert("Size đã tồn tại");
                            return;
                          }
                        }
                        setSizes((sizes) => [...sizes, size]);
                        setPrices((prices) => [...prices, price]);
                      }}
                    />
                  </button>
                  <button>
                    <AiOutlineClear
                      className="w-7 h-7"
                      onClick={() => {
                        setSizes([]);
                        setPrices([]);
                        setCheckSize([
                          { S: false },
                          { M: false },
                          { L: false },
                        ]);
                      }}
                    />
                  </button>
                </div>
                <div className="flex gap-20">
                  <div>
                    {sizes &&
                      sizes.map((item, index) => (
                        <div>
                          <span className="font-semibold">Size: </span> {item}
                        </div>
                      ))}
                  </div>
                  <div>
                    {sizes &&
                      sizes.map((item, index) => (
                        <div>
                          <span className="font-semibold">Giá: </span>
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(prices[index])}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
