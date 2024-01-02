import React from "react";
import { Navbar } from "../navbar";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import ListFunc from "../Utils/listFunc";

export default function AddCopyAdmin() {
  const navigate = useNavigate();
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
              <TextInput id="ten" placeholder="Tên" className="w-full" />
            </div>
            {/* Tên */}
            <div className="mb-5">
              <Label for="ten">Copies</Label>
              <TextInput type="number" id="copies" placeholder="Copies" className="w-full" />
            </div>
            <div className="flex place-content-end gap-10">
              <Button 
              onClick={
                () => navigate("/admin/branch/:id/books")
              }
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