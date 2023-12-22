import React from "react";
import { Navbar } from "../navbar";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function AddCopy() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <main>
        <div>
          <ul className="flex gap-4 ml-36 my-10 text-xl font-semibold">
          <li>
              <button onClick={()=>navigate('/book')} className="underline">Sách</button>
            </li>
            <li>
              <button onClick={()=>navigate('/table')} className="hover:underline">Bàn</button>
            </li>
            <li>
              <button onClick={()=>navigate('/order')} className="hover:underline">Đơn hàng</button>
            </li>
            <li>
              <button onClick={()=>navigate('/voucher')} className="hover:underline">Voucher</button>
            </li>
            <li>
              <button onClick={()=>navigate('/staff')} className="hover:underline">Nhân viên</button>
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="w-2/12 ml-36 font-semibold text-lg">Thêm copy</div>
          <div className="w-full mr-36">
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
              <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">
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
