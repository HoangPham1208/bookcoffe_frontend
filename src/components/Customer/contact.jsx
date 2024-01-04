import { Navbar } from "../navbar";
import Map from "./map";
import { Label, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiOutlinePhone, HiOutlineMail, HiClock } from "react-icons/hi";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="w-full font-bold text-3xl">Liên hệ</div>
          <Map />
          <div className="flex flex-row space-x-3">
            <HiOutlinePhone className="self-center"></HiOutlinePhone>
          <p>090 234 5678</p>
          </div>
          <div className="flex flex-row space-x-3">
            <HiOutlineMail className="self-center"></HiOutlineMail>
          <a href="mailto:contact@bookcafe.com" className="underline">contact@bookcafe.com</a>
          </div>
          <div className="flex flex-row space-x-3">
            <HiClock className="self-center"></HiClock>
          <p>T2-T7, 08h00-17h00</p>
          </div>
        </main>
      </section>
    </>
  );
}
