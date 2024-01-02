import React from "react";
import { Navbar } from "../navbar";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import ListFunc from "../Utils/listFunc";
import { customTheme } from "../Utils/myButton";
import axios from "axios";
import RefreshTokenAPI from "../Utils/token";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

export default function AddCopy() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [numCopies, setNumCopies] = useState(0);
  const handleAdd = async () => {
    if (numCopies <= 0) {
      alert("Số lượng phải lớn hơn 0");
      return;
    }
    const data = {
      numCopies: parseInt(numCopies),
      title: localStorage.getItem("title"),
    };
    try {
      await RefreshTokenAPI();
      await axios
        .post("http://localhost:4000/api/manager/addBookCopy", data, {
          headers: {
            Authorization: "Bearer " + cookies.get("accessToken"),
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar />
      <main className="mx-auto flex flex-col max-w-screen-xl pt-20">
        <ListFunc />
        <div className="flex">
          <div className="w-2/12 ml-36 font-semibold text-lg">Thêm copy</div>
          <div className="w-full mr-36">
            {/* Bìa  */}
            <div className="mb-5">
              <Label for="bia">Tên</Label>
              <TextInput
                id="ten"
                placeholder="Tên"
                className="w-full"
                value={localStorage.getItem("title")}
              />
            </div>
            {/* Tên */}
            <div className="mb-5">
              <Label for="ten">Copies</Label>
              <TextInput
                type="number"
                id="copies"
                placeholder="Copies"
                className="w-full"
                value={numCopies}
                onChange={(e) => setNumCopies(e.target.value)}
              />
            </div>
            <div className="flex place-content-end gap-10">
              <Button
                onClick={() => {
                  navigate("/manager/books");
                  localStorage.removeItem("title");
                }}
                theme={customTheme}
                color="secondary"
                pill
              >
                Hủy
              </Button>
              <Button
                onClick={handleAdd}
                theme={customTheme}
                color="primary"
                pill
              >
                Hoàn tất
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
