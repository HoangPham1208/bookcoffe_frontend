import React from "react";

import { Navbar } from "../navbar";
import Wrapper from "./wrapper";
import BestBook from "./bestbook";
import Category from "./category";
import NewBlog from "./newblog";

export default function Home() {
  return (
    <>
      <Navbar mode="login"/>
      <main className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <Wrapper />
        <BestBook />
        <Category />
        <NewBlog />
      </main>
    </>
  );
}
