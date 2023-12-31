import React from "react";
import { Navbar } from "../navbar";

export default function HomeManager() {
    return (
        <>
            <Navbar />
            <main className="mx-autoflex flex-col max-w-screen-xl pt-20">
                <div className="text-3xl my-10 mx-36 font-semibold">Báo cáo</div>
            </main>
        </>
    )
}