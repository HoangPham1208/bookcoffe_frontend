import React from "react";
import { Navbar } from "../navbar";
import { Button, Label, List, TextInput, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import ListFunc from "../Utils/listFunc";
import { customTheme } from "../Utils/myButton";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RefreshTokenAPI from "../Utils/token";
import axios from "axios";

export default function BookDetails() {
  const { id: title } = useParams();
  const navigate = useNavigate();
  const items = JSON.parse(localStorage.getItem("bookInfo"));
  return (
    <div>
      <Navbar />
      <main className="mx-auto flex flex-col max-w-screen-xl pt-20">
        <div className="flex mx-36 gap-10">
          <Button
            theme={customTheme}
            color="secondary"
            pill
            onClick={() => navigate("/manager/books")}
          >
            Trở về
          </Button>
        </div>
        <div className="flex my-7">
          <div className="w-2/12 ml-36 font-semibold text-lg">Chi tiết</div>
          <div className="w-full mr-36">
            {/* Bìa  */}
            <div className="mb-5">
              <Label for="bia">Bìa</Label>
              <img src = {"http://localhost:4000/api/customer/getBookImage/" + items.bookId} alt = "mybook"
                className="h-44"
              />
            </div>
            {/* Tên */}
            <div className="mb-5">
              <Label for="ten">Tên</Label>
              <TextInput
                id="ten"
                placeholder="Tên"
                className="w-full"
                value={items.title}
              />
            </div>
            {/* Thể loại */}
            <div className="mb-5">
              <Label for="theloai">Thể loại</Label>
              <TextInput
                id="theloai"
                placeholder="Thể loại"
                className="w-full"
                value={items.genre}
              />
            </div>
            {/* Tác giả */}
            <div className="mb-5">
              <Label for="tacgia">Tác giả</Label>
              <TextInput
                id="tacgia"
                placeholder="Tác giả"
                className="w-full"
                value={items.authorName}
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
              />
            </div>
            {/* Giá */}
            <div className="mb-5">
              <Label for="gia">Giá</Label>
              <TextInput
                id="gia"
                placeholder="Giá"
                className="w-full"
                value={new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(items.salePrice)}
              />
            </div>
            {/* Kho */}
          </div>
        </div>
      </main>
    </div>
  );
}
