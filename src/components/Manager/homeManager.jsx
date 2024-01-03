import React from "react";
import { Navbar } from "../navbar";
import Cookies from "universal-cookie";

export default function HomeManager() {
    const cookies = new Cookies();
    return (
        <>
            <Navbar />
            <main className="mx-autoflex flex-col max-w-screen-xl pt-20">
                <div className="text-3xl my-10 mx-36 font-semibold font-serif">Xin chào {cookies.get("userName")} ! </div>
                <div className="text-3xl my-10 mx-36 font-medium font-serif">Quản lý chi nhánh  {cookies.get("branchAddress")}</div>
            </main>
        </>
    )
}