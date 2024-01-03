import React, { useEffect } from "react";
import { Navbar } from "../navbar";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { customTheme } from "../Utils/myButton";
import { useState } from "react";
import { Select } from "flowbite-react";

export default function AddBook() {
  const navigate = useNavigate();
  const author = JSON.parse(localStorage.getItem("bookList")).map((item) => {
    return item.authorName;
  });
  return (
    <div>
      <Navbar />
      <main className="mx-autoflex flex-col max-w-screen-xl py-32 mx-36">
        <div className="flex">
          <div className="w-2/12  font-semibold text-lg">Thêm tác giả</div>
          <div className="w-full ">
            {/* ten  */}
            <div className="mb-5">
              <Label for="ten">Tên tác giả</Label>
              <TextInput id="teb" placeholder="Tên tác giả" className="w-full" />
            </div>
            <div className="mb-5">
              <Label for="bd">Ngày sinh</Label>
              <TextInput id="bd" placeholder="Ngày sinh" className="w-full" 
              type="date"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-2/12  font-semibold text-lg">Thêm sách</div>
          <div className="w-full ">
            {/* Bìa  */}
            <div className="mb-5">
              <Label for="bia">Bìa</Label>
              <TextInput id="bia" placeholder="Bìa" className="w-full" />
            </div>
            {/* Tên */}
            <div className="mb-5">
              <Label for="ten">Tên</Label>
              <TextInput id="ten" placeholder="Tên" className="w-full" />
            </div>
            {/* Thể loại */}
            <div className="mb-5">
              <Label for="theloai">Thể loại</Label>
              <TextInput
                id="theloai"
                placeholder="Thể loại"
                className="w-full"
              />
            </div>
            {/* Tác giả */}
            <div className="mb-5">
              <Label for="tacgia">Tác giả</Label>
              <Select id="tacgia" placeholder="Tác giả" className="w-full">
                <option value="" disabled="true">
                  Tác giả
                </option>
                {author.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </Select>
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
            <div className="mb-5">
              <Label for="gia">Giá</Label>
              <TextInput id="gia" placeholder="Giá" className="w-full" />
            </div>

            <div className="flex place-content-end gap-10">
              <Button
                onClick={() => navigate("/admin/bookList")}
                theme={customTheme}
                color="secondary"
                pill
              >
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
