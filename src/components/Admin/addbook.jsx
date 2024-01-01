import React from "react";
import { Navbar } from "../navbar";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <main className="mx-autoflex flex-col max-w-screen-xl py-32 mx-36">
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

            <div className="flex place-content-end gap-10">
              <Button 
              onClick={() => navigate("/admin/bookList/:id")}
              className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
                Hủy
              </Button>
              <Button className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">
                Hoàn tất
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
