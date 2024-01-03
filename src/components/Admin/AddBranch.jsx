import React from "react";
import { Navbar } from "../navbar";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { customTheme } from "../Utils/myButton";
import { FileInput } from "flowbite-react";
import axios from "axios";
import Cookies from "universal-cookie";

export default function AddBranch() {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const [name, setName] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [workingTime, setWorkingTime] = React.useState("");
  const [branchImage, setBranchImage] = React.useState("");
  const [description, setDescription] = React.useState("");
  const handleAddBranch = () => {
    if (
      name === "" ||
      pass === "" ||
      address === "" ||
      workingTime === "" ||
      branchImage === "" ||
      description === ""
    ) {
      alert("Vui lòng nhập đủ thông tin");
      return;
    }
    const data = new FormData();
    data.append("managerName", name);
    data.append("password", pass);
    data.append("address", address);
    data.append("workingTime", workingTime);
    data.append("branchImage", branchImage);
    data.append("description", description);
    axios
      .post("http://localhost:4000/api/admin/addBranch", data, {
        headers: {
          Authorization: `Bearer ${cookie.get("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("Thêm chi nhánh thành công");
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <main className="mx-autoflex flex-col max-w-screen-xl py-32 mx-36">
        <div className="flex">
          <div className="w-2/12  font-semibold text-lg">Thêm chi nhánh</div>
          <div className="w-full ">
            {/* File */}
            <div className="mb-5">
              <Label for="file">Ảnh chi nhánh</Label>
              <FileInput
                id="file"
                className="w-full"
                onChange={(e) => {
                  setBranchImage(e.target.value);
                }}
              />
            </div>
            {/* Tên manager */}
            <div className="mb-5">
              <Label for="ten">Tài khoản quản lý</Label>
              <TextInput
                id="ten"
                placeholder="Tài khoản quản lý"
                className="w-full"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            {/* pass */}
            <div className="mb-5">
              <Label for="pass">Mật khẩu</Label>
              <TextInput
                id="pass"
                placeholder="Mật khẩu"
                className="w-full"
                type="password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
            {/* Tên chi nhanh */}
            <div className="mb-5">
              <Label for="ten">Địa chỉ</Label>
              <TextInput
                id="ten"
                placeholder="Tên"
                className="w-full"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            {/* Thời gian làm việc */}
            <div className="mb-5">
              <Label for="time">Thời gian làm việc</Label>
              <TextInput
                id="time"
                placeholder="Thời gian làm việc"
                className="w-full"
                onChange={(e) => {
                  setWorkingTime(e.target.value);
                }}
              />
            </div>
            {/* Mô tả */}
            <div className="mb-5">
              <Label for="mota">Mô tả</Label>
              <Textarea
                id="mota"
                placeholder="Mô tả"
                className="w-full"
                required
                rows={5}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            {/* Giá */}

            <div className="flex place-content-end gap-10">
              <Button
                onClick={() => navigate("/admin")}
                theme={customTheme}
                color="secondary"
                pill
              >
                Hủy
              </Button>
              <Button theme={customTheme} color="primary" pill
              onClick={handleAddBranch}
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
