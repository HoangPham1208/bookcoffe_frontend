import React from "react";

import { Navbar } from "../navbar";
import Wrapper from "../Guest/wrapper";
import BestBook from "../Guest/bestbook";
import Category from "../Guest/category";
import NewBlog from "../Guest/newblog";

export default function HomeUser() {
  return (
    <>
      <Navbar />
      <main className="mx-auto px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20 z-0">
        <Wrapper />
        <BestBook />
        <Category />
        <NewBlog />
      </main>
    </>
  );
}
