import { Navbar } from "../navbar";
import { Label, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
import { customTheme } from "../Utils/myButton";

export default function Account() {
  return (
    <>
      <Navbar />
      <section className="mx-auto px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="w-full font-bold text-3xl">Tài khoản</div>
          <hr className="border-black" />
          <div className="flex flex-col md:flex-row my-5 md:space-x-5 ">
            <div className="md:w-3/12 font-semibold text-xl max-md:pb-5">
              Ảnh đại diện
            </div>
            <div className="w-full">
              <div>
                <img
                  src="/avatar.png"
                  alt="avatar"
                  className="rounded-full h-40 pb-5"
                />
                <Button theme={customTheme} color="primary" pill>
                  Change avatar
                </Button>
                {/* <Label for="avatar" className="ml-40">Avatar</Label> */}
              </div>
            </div>
          </div>
          <hr className=" border-black" />
          <div className="flex flex-col md:flex-row my-5 md:space-x-5 ">
            <div className="md:w-3/12 font-semibold text-xl max-md:pb-5">
              Thông tin cá nhân
            </div>
            <div className="w-full">
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
          <hr className=" border-black" />
          <div className="flex flex-col md:flex-row my-5 md:space-x-5 ">
            <div className="md:w-3/12 font-semibold text-xl max-md:pb-5">
              Mật khẩu
            </div>
            <div className="w-full md:mr-36">
              <div className="mb-5">
                <Button theme={customTheme} color="primary" pill>
                  Change password
                </Button>
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
            <div className="flex flex-row  space-x-3">
              <Button theme={customTheme} color="primary" pill>
                Save
              </Button>
              <Button theme={customTheme} color="secondary" pill>
                Cancel
              </Button>
              <div className="w-full"></div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
