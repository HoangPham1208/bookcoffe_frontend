import React from "react";
import { Navbar } from "../navbar";

export default function HomeAdmin() {
  return (
    <>
      <Navbar />
      <main className="mx-36 my-10">
        <div className="my-5 font-semibold text-xl">
          <button>Báo cáo</button>
        </div>
        <div className="my-5 font-semibold text-xl">
          <button>Món hiện tại</button>
        </div>
        <div className="my-5 font-semibold text-xl">
          <button>Sách hiện tại</button>
        </div>
      </main>
    </>
  );
}