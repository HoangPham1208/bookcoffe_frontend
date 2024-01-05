import React from "react";
import { Navbar } from "../navbar";
import Cookies from "universal-cookie";

export default function HomeManager() {
  const cookies = new Cookies();
  return (
    <>
      <Navbar />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="text-3xl my-10 mx-36 font-semibold font-serif">
            Xin chào {cookies.get("userName")} !{" "}
          </div>
          <div className="text-3xl my-10 mx-36 font-medium font-serif">
            Quản lý chi nhánh {cookies.get("branchAddress")}
          </div>
        </main>
      </section>
    </>
  );
}
