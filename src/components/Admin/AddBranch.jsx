import React from "react";
import { Navbar } from "../navbar";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { customTheme } from "../Utils/myButton";

export default function AddBranch() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <main className="mx-autoflex flex-col max-w-screen-xl py-32 mx-36">
        <div className="flex">
          <div className="w-2/12  font-semibold text-lg">Thêm chi nhánh</div>
          <div className="w-full ">
            {/* Tên manager */}
            <div className="mb-5">
              <Label for="ten">Tài khoản quản lý</Label>
              <TextInput id="ten" placeholder="Tài khoản quản lý" className="w-full" />
            </div>
            {/* pass */}
            <div className="mb-5">
              <Label for="pass">Mật khẩu</Label>
              <TextInput id="pass" placeholder="Mật khẩu" className="w-full"
              type="password"
              />
            </div>
            {/* Tên chi nhanh */}
            <div className="mb-5">
              <Label for="ten">Tên chi nhánh</Label>
              <TextInput id="ten" placeholder="Tên" className="w-full" />
            </div>
            {/* Thời gian làm việc */}
            <div className="mb-5">
              <Label for="time">Thời gian làm việc</Label>
              <TextInput id="time" placeholder="Thời gian làm việc" className="w-full" />
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
              />
            </div>
            {/* Giá */}

            <div className="flex place-content-end gap-10">
              <Button 
              onClick={() => navigate("/admin")}
              theme={customTheme} color="secondary" pill>
                Hủy
              </Button>
              <Button theme={customTheme} color="primary" pill>
                Hoàn tất
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
