import Navbar from "../navbar";
import { Label, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";

export default function Account() {
  return (
    <>
      <Navbar />
      <section>
        <div className="flex">
          <div className="w-2/12 ml-36 mb-5 mt-10 font-bold text-4xl">
            Account
          </div>
          <div className="w-full"></div>
        </div>
        <main>
          <hr className="mx-36 border-black" />
          <div className="flex my-5">
            <div className="w-2/12 ml-36 font-semibold text-xl">
              Ảnh đại diện
            </div>
            <div className="w-full">
              <div>
                <img
                  src="/avatar.png"
                  alt="avatar"
                  className="rounded-full h-96"
                />
                <Button className="mt-5 ml-28 bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">Change avatar</Button>
                {/* <Label for="avatar" className="ml-40">Avatar</Label> */}
              </div>
            </div>
          </div>
          <hr className="mx-36 border-black" />
          <div className="flex my-5">
            <div className="w-2/12 ml-36 font-semibold text-xl">
              Thông tin cá nhân
            </div>
            <div className="w-full mr-36">
              {/* Email  */}
              <div className="mb-5">
                <Label for="email">Email</Label>
                <TextInput id="email" placeholder="Email" className="w-full" />
              </div>
              {/* Name */}
              <div className="mb-5">
                <Label for="name">Name</Label>
                <TextInput id="name" placeholder="Name" className="w-full" />
              </div>
              {/* Country */}
              <div className="mb-5">
                <Label for="country">Country</Label>
                <TextInput
                  id="country"
                  placeholder="Country"
                  className="w-full"
                />
              </div>
              {/* State/Province */}
              <div className="mb-5">
                <Label for="state">State/Province</Label>
                <TextInput
                  id="state"
                  placeholder="State/Province"
                  className="w-full"
                />
              </div>
              {/* City */}
              <div className="mb-5">
                <Label for="city">City</Label>
                <TextInput id="city" placeholder="City" className="w-full" />
              </div>
              {/* Zip code */}
              <div className="mb-5">
                <Label for="zip">Zip code</Label>
                <TextInput id="zip" placeholder="Zip code" className="w-full" />
              </div>
              {/* Address */}
              <div className="mb-5">
                <Label for="address">Address</Label>
                <TextInput
                  id="address"
                  placeholder="Address"
                  className="w-full"
                />
              </div>
              {/* Phone number */}
              <div className="mb-5">
                <Label for="phone">Phone number</Label>
                <TextInput
                  id="phone"
                  placeholder="Phone number"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <hr className="mx-36 border-black" />
          <div className="flex my-5">
            <div className="w-2/12 ml-36 font-semibold text-xl">Mật khẩu</div>
            <div className="w-full mr-36">
              <div className="mb-5">
                <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">Change password</Button>
              </div>
              <div className="mb-5">
                <Label for="old password">Old password</Label>
                <TextInput
                  id="old password"
                  placeholder="Old password"
                  className="w-full"
                />
              </div>
              <div className="mb-5">
                <Label for="new password">New password</Label>
                <TextInput
                  id="new password"
                  placeholder="New password"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="ml-36 grid grid-cols-2 gap-10">
                <div className="place-self-center">
                  <Button className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] ">Save</Button>
                </div>
                <div className="place-self-center ">
                  <Button className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white">Cancel</Button>
                </div>
              </div>
              <div className="w-full"></div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
