import { Navbar } from "../navbar";
import { Label, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";

export default function Account() {
  return (
    <>
      <Navbar />
      <section className="mx-auto px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <div className="flex">
          <div className="w-full md:ml-36 font-bold text-3xl">Tài khoản</div>
          <div className="w-full"></div>
        </div>
        <main className="my-5">
          <hr className="md:mx-36 border-black" />
          <div className="flex flex-col md:flex-row my-5 md:space-x-5 md:mx-36">
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
                <Button pill className="hover:shadow-3 transition ">
                  Change avatar
                </Button>
                {/* <Label for="avatar" className="ml-40">Avatar</Label> */}
              </div>
            </div>
          </div>
          <hr className="md:mx-36 border-black" />
          <div className="flex flex-col md:flex-row my-5 md:space-x-5 md:mx-36">
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
          <hr className="md:mx-36 border-black" />
          <div className="flex flex-col md:flex-row my-5 md:space-x-5 md:mx-36">
            <div className="md:w-3/12 font-semibold text-xl max-md:pb-5">
              Mật khẩu
            </div>
            <div className="w-full md:mr-36">
              <div className="mb-5">
                <Button pill className="hover:shadow-3 transition ">
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
            <div className="flex flex-row md:mx-36 space-x-3">
              <Button pill className="hover:shadow-3 transition ">
                Save
              </Button>
              <Button pill color="light" className="hover:shadow-3 transition">
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
