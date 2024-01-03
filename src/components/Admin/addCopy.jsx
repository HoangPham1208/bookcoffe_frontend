import React from "react";
import { Navbar } from "../navbar";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import ListFunc from "../Utils/listFunc";
import { customTheme } from "../Utils/myButton";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

export default function AddCopyAdmin() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [numCopies, setNumCopies] = useState(0);
  const handleAdd = async () => {
    if (numCopies <= 0) {
      alert("Số lượng phải lớn hơn 0");
      return;
    }
    const data = {
      branchId: localStorage.getItem("branchId"),
      numCopies: parseInt(numCopies),
      title: localStorage.getItem("title"),
    };
    try {
      // await RefreshTokenAPI();
      await axios
        .post("http://localhost:4000/api/manager/addBookCopy", data, {
          headers: {
            Authorization: "Bearer " + cookies.get("accessToken"),
          },
        })
        .then((res) => {
          alert("Thêm thành công");
          console.log(res.data);
          navigate(
            `/admin/branch/${localStorage.getItem("branchAddress")}/books`
          );
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
      <main className="mx-auto flex flex-col max-w-screen-xl mx-36 py-32">
        <div className="flex">
          <div className="w-2/12  font-semibold text-lg">Thêm copy</div>
          <div className="w-full ">
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
                onChange={(e) => {
                  setNumCopies(e.target.value);
                }}
              />
            </div>
            <div className="flex place-content-end gap-10">
              <Button
                onClick={() => {
                  navigate(
                    `/admin/branch/${localStorage.getItem(
                      "branchAddress"
                    )}/books`
                  );
                  localStorage.removeItem("title");
                }}
                theme={customTheme}
                color="secondary"
                pill
              >
                Hủy
              </Button>
              <Button
                theme={customTheme}
                color="primary"
                pill
                onClick={handleAdd}
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
