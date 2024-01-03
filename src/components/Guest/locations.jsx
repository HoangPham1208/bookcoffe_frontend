import { Navbar } from "../navbar";
import { Label, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
// import type { CustomFlowbiteTheme } from "flowbite-react";

// const customTheme: CustomFlowbiteTheme["button"] = {
//   color: {
//     primary:
//       "bg-[#916239] hover:bg-[#7a5330] text-white p-1 hover:shadow-3 transition",
//     secondary: "bg-white text-dark p-1 hover:shadow-3 transition",
//   },
//   pill: {
//     off: "rounded-lg",
//     on: "rounded-full",
//   },
//   disabled: "cursor-not-allowed opacity-50 hover:shadow-0",
//   isProcessing: "cursor-wait",
//   spinnerSlot: "absolute h-full top-0 flex items-center animate-fade-in",
// };

export default function Locations() {
    return (
        <>
          <Navbar mode="login" />
          <section className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
            <main className="my-5">
              <div className="w-full font-bold text-3xl">Chi nhánh</div>
            </main>
          </section>
        </>
      );
}
