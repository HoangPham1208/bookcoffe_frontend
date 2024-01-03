import React from "react";
import { Navbar } from "../navbar";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { Checkbox, Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import ListFunc from "../Utils/listFunc";
import RefreshTokenAPI from "../Utils/token";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { FloatingLabel } from "flowbite-react";
import { customTheme } from "../Utils/myButton";

function SignUpDialog({ visible, onClose, refresh, setRefresh }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const handleOnClose = () => {
    onClose();
  };
  if (!visible) return null;
  const handleRegister = () => {
    if (!email.includes("@")) {
      alert("Email không hợp lệ, vui lòng nhập lại!");
      return;
    }
    const userData = {
      staffName: userName,
      email: email,
      address: address,
      password: password,
    };
    const fetchData = async () => {
      // await RefreshTokenAPI();
      axios
        .post("http://localhost:4000/api/manager/addStaff", userData, {
          headers: {
            Authorization: `Bearer ${new Cookies().get("accessToken")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          // show success dialog
          setRefresh(!refresh);
          onClose();
          alert("Đăng ký thành công!");
        })
        .catch((err) => {
          console.log(err);
          alert("Tên tài khoản đã tồn tại!");
        });
    };
    fetchData();
  };
  return (
    <>
      <div className="fixed my-auto box-content flex w-80  flex-col items-center space-y-5 rounded-lg  bg-white p-6 shadow-3 transition-all duration-[250ms] ease-m3-standard-decelerate dark:bg-card-background-dark max-sm:right-2 max-sm:w-10/12 z-10 select-none ">
        <p className="text-left font-bold w-full">Thêm nhân viên</p>
        <button
          onClick={handleOnClose}
          className="absolute right-5 top-0 cursor-pointer rounded-full transition-all hover:bg-[#d7e1e9] active:bg-[#b9cad8] dark:hover:bg-button-hover-dark dark:active:bg-button-active-dark"
        >
          <svg
            className="dark:fill-dark-surface"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
        <FloatingLabel
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          variant="standard"
          label="Tài khoản"
          className="w-80 select-none"
        />
        <FloatingLabel
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          variant="standard"
          label="Email"
          className="w-80 select-none"
        />
        <FloatingLabel
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          variant="standard"
          label="Địa chỉ"
          className="w-80 select-none"
        />
        <FloatingLabel
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          variant="standard"
          label="Mật khẩu"
          className="w-80 select-none"
        />
        <div className="flex w-full flex-row justify-center px-2">
          <Button
            onClick={handleRegister}
            id="edit-account"
            type="button"
            theme={customTheme}
            color="primary"
            pill
          >
            Tạo tài khoản
          </Button>
        </div>
      </div>
    </>
  );
}

export default function Staff() {
  const [showDialog, setShowDialog] = useState(false); // [false, true
  const navigate = useNavigate();
  const [items2, setItems2] = useState([]);
  const cookie = new Cookies();
  const [refresh, setRefresh] = useState(false);
  // need sync the RefreshTokenAPI first then excute the axios
  useEffect(() => {
    const fetchData = async () => {
      // await RefreshTokenAPI();
      axios
        .get("http://localhost:4000/api/manager/showStaff", {
          headers: {
            Authorization: `Bearer ${cookie.get("accessToken")}`,
          },
        })
        .then((res) => {
          setItems2(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [refresh]);
  const [selected, setSelected] = useState(null); // [1, 2, 3]
  const [staffData, setStaffData] = useState([]); // [1, 2, 3
  const handleUpdateStats = () => {
    const fetchData = async () => {
      // await RefreshTokenAPI();
      axios
        .put(
          "http://localhost:4000/api/manager/updateStaff",
          {
            staffId: staffData.staffId,
          },
          {
            headers: {
              Authorization: `Bearer ${cookie.get("accessToken")}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setRefresh(!refresh);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  };
  return (
    <div>
      <Navbar />
      <main className="mx-auto flex flex-col max-w-screen-xl pt-20">
        <ListFunc />
        <div className="flex ml-36 gap-4">
          <Button
            onClick={() => setShowDialog(true)}
            theme={customTheme}
            color="primary"
            pill
          >
            Thêm nhân viên
          </Button>
          <SignUpDialog
            visible={showDialog}
            onClose={() => setShowDialog(false)}
            refresh={refresh}
            setRefresh={setRefresh}
          />
          <Button
            onClick={handleUpdateStats}
            theme={customTheme}
            color="secondary"
            pill
          >
            Cập nhật trạng thái
          </Button>
        </div>
        <div className="relative text-gray-600 mx-36 my-7">
          <input
            type="search"
            name="serch"
            placeholder="Tìm kiếm"
            className="bg-gray-100 rounded-full text-sm focus:outline-none w-full px-5 h-12"
          />
        </div>
        <hr className="mt-10 mx-36 border-black" />
        <div className="overflow-x-auto mx-36 py-10">
          <Table hoverable>
            <Table.Head className="text-center">
              <Table.HeadCell className="p-4"></Table.HeadCell>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Địa chỉ</Table.HeadCell>
              <Table.HeadCell>Ngày bắt đầu làm việc</Table.HeadCell>
              <Table.HeadCell>Trạng Thái</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-center">
              {items2.map((item, index) => (
                <>
                  <Table.Row
                    onClick={() => {
                      setSelected(index);
                      setStaffData(item);
                    }}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="p-4">
                      <Checkbox 
                      className="text-[#916239] bg-white border-[#916239] rounded-full enabled:hover:bg-[#916239] enabled:hover:text-white"
                      checked={selected === index} />
                    </Table.Cell>
                    <Table.Cell>{item.staffName}</Table.Cell>
                    <Table.Cell>{item.email}</Table.Cell>
                    <Table.Cell>{item.address}</Table.Cell>
                    <Table.Cell>
                      {new Date(item.workingDate).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Table.Cell>
                    <Table.Cell>
                      {item.disable === 0 ? (
                        <Label className="text-green-500 font-semibold">
                          Active
                        </Label>
                      ) : (
                        <Label className="text-red-500 font-semibold">
                          Inactive
                        </Label>
                      )}
                    </Table.Cell>
                  </Table.Row>
                </>
              ))}
            </Table.Body>
          </Table>
        </div>
      </main>
    </div>
  );
}
