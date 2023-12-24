import React from "react";
import { Navbar } from "../navbar";
import { Button, Label, List, TextInput, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import ListFunc from "../Utils/listFunc";

export default function BookDetails() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <main>
        <ListFunc />
        <div className="flex">
          <div className="w-2/12 ml-36 font-semibold text-lg">Chi tiết</div>
          <div className="w-full mr-36">
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
              <TextInput id="tacgia" placeholder="Tác giả" className="w-full" />
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
            {/* Kho */}
            <div className="mb-5">
              <Label for="kho">Kho</Label>
              <TextInput id="kho" placeholder="Kho" className="w-full" />
            </div>
            <div className="flex place-content-end gap-10">
              <Button className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
                Quay lại
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
