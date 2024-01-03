import { Navbar } from "../navbar";
import { Label, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";

export default function Locations() {
    return (
        <>
          <Navbar />
          <section className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
            <main className="my-5">
              <div className="w-full font-bold text-3xl">Chi nhánh</div>
            </main>
          </section>
        </>
      );
}
