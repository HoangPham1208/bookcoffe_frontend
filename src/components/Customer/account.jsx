import { Navbar } from "../navbar";
import { Label, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
import { customTheme } from "../Utils/myButton";
import { FileInput } from "flowbite-react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

export default function Account() {
  const cookie = new Cookies();
  const [avatarUrl, setAvatarUrl] = useState("");
  const [fileAvatar, setFileAvatar] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/customer/getAvatar", {
        headers: {
          Authorization: `Bearer ${cookie.get("accessToken")}`,
        },
        responseType: "arraybuffer",
      })
      .then((res) => {
        // console.log(res.data);
        const blob = new Blob([res.data], { type: "image/*" });
        const imageUrl = URL.createObjectURL(blob);
        setAvatarUrl(imageUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleAvatar = (e) => {
    let formData = new FormData();
    formData.append("avatar", e);
    axios
      .post("http://localhost:4000/api/customer/uploadAvatar", formData, {
        headers: {
          Authorization: `Bearer ${cookie.get("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                {avatarUrl && (
                  <img
                    src={avatarUrl}
                    alt="avatar"
                    className="rounded-full h-52 w-52"
                  />
                )}
                <div className="mb-2 block">
                  <Label
                    htmlFor="file-upload"
                    value="Change avatar"
                    // set the file to fileAvatar
                  />
                </div>
                <FileInput
                  id="file-upload-helper-text"
                  helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                  onChange={(e) => {
                    handleAvatar(e.target.files[0]);
                  }}
                />
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
              <div className="flex justify-start">
                <div className="flex flex-row space-x-3 ">
                  <Button theme={customTheme} color="primary" pill>
                    Save
                  </Button>
                  <div className="w-full"></div>
                </div>
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
              <div className="mb-5">
                <Button theme={customTheme} color="primary" pill>
                  Change password
                </Button>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
