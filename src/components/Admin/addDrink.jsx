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

  const handleAddDrink = () => {
    const data = new FormData();
    data.append("drinksImage",drinksImage)
    data.append("drinksName", drinksName);
    data.append("size", sizes);
    data.append("price", prices);
    if (drinksImage === null || drinksName === "" || sizes.length === 0 || prices.length === 0) {
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
        if(err.response.status === 409){
          alert("Gặp xung đột dữ liệu");
          return;
        }
        else alert("Lỗi kết nối")
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar />
      <main className="mx-autoflex flex-col max-w-screen-xl py-32 mx-36">
        <div className="flex">
          <div className="w-2/12  font-semibold text-lg">Thêm nước</div>
          <div className="w-full ">
            <div className="flex place-content-start gap-10 mb-5">
              <Button
                theme={customTheme}
                color="primary"
                pill
                onClick = {handleAddDrink}
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
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
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
                      setSizes([...sizes, size]);
                      setPrices([...prices, price]);
                    }}
                  />
                </button>
                <button>
                  <AiOutlineClear
                    className="w-7 h-7"
                    onClick={() => {
                      setSizes([]);
                      setPrices([]);
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
    </div>
  );
}
