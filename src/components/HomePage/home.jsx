import React from "react";

import Navbar from "../navbar";
import Wrapper from "./wrapper";
import BestBook from "./bestbook";
import Category from "./category";
import NewBlog from "./newblog";

export default function Home() {
  return (
    <>
      <Navbar />
      <main class="mx-auto px-10 py-10 space-y-6 flex flex-col max-w-screen-xl">
        <Wrapper />
        <BestBook />
        <Category />
        <NewBlog />
      </main>
    </>
  );
}
