import { Navbar } from "../navbar";
import { Label, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import axios from "axios";
import { useState, useEffect } from "react";
import { customTheme } from "../Utils/myButton";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { Card } from "flowbite-react";
import { FloatingLabel } from "flowbite-react";
import { Table } from "flowbite-react";

function Order({ data, visible, onClose, refresh, setRefresh }) {
  const cookie = new Cookies();
  // current day
  const [dateTime, setDateTime] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleOnClose = () => {
    onClose();
  };
  if (!visible) return null;
  const handleOrder = () => {
    const userData = {
      address: data,
      date: dateTime,
      quantity: quantity,
    };
    if (dateTime === "" || quantity === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    if (quantity < 1) {
      alert("Số lượng phải lớn hơn 0");
      return;
    }
    if (dateTime < new Date().toISOString().split(".")[0]) {
      alert("Ngày đặt phải lớn hơn ngày hiện tại");
      return;
    }
    // check hour future  
    let date = new Date();
    let hourNow = date.getHours();
    let minuteNow = date.getMinutes();
    let hourOrder = dateTime.split("T")[1].split(":")[0];
    let minuteOrder = dateTime.split("T")[1].split(":")[1];
    if (hourOrder - hourNow < 0) {
      alert("Vui lòng đặt vào tương lai");
      return;
    }
    // check hour - must be 8-22 and sooner than 2 hours
    let hour = dateTime.split("T")[1].split(":")[0];
    if (hour < 8 || hour > 22) {
      alert("Giờ đặt phải từ 8h đến 22h");
      return;
    }
    if (hourOrder - hourNow < 2) {
      alert("Vui lòng đặt trước ít nhất 2 tiếng");
      return;
    }
    if (hourOrder - hourNow === 2) {
      if (minuteOrder - minuteNow < 0) {
        alert("Vui lòng đặt trước ít nhất 2 tiếng");
        return;
      }
    }
    axios
      .post("http://localhost:4000/api/customer/reservation", userData, {
        headers: {
          Authorization: `Bearer ${cookie.get("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
        alert("Đặt chỗ thành công");
        setDateTime("");
        setQuantity("");
        onClose();
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err);
        alert("Đặt chỗ thất bại");
      });
  };
  return (
    <>
      <div class="w-[350px] h-[250px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 box-content flex flex-col items-center space-y-5 rounded-lg bg-white p-6 shadow-3 transition-all duration-250 ease-m3-standard-decelerate dark:bg-card-background-dark max-sm:right-2 max-sm:w-10/12 z-10 select-none">
        <p className="text-left font-bold w-full">Đặt chỗ</p>
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
        <div className="justify-start"></div>
        <FloatingLabel
          type="datetime-local"
          onChange={(e) => {
            setDateTime(e.target.value);
          }}
          variant="standard"
          label="Date"
          className="w-80 select-none"
          value={dateTime}
        />
        <FloatingLabel
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          variant="standard"
          type="number"
          min={1}
          label="Số lượng"
          className="w-80 select-none"
          value={quantity}
        />
        <div>
          <Button
            onClick={handleOrder}
            theme={customTheme}
            color="primary"
            pill
          >
            Đặt chỗ
          </Button>
        </div>
      </div>
    </>
  );
}
export default function Locations() {
  const [visible, setVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false); // [false, true
  const navigate = useNavigate();
  const cookie = new Cookies();
  const [data, setData] = useState([]);
  const [staff, setStaff] = useState([]);
  const [reservation, setReservation] = useState([]); // [false, true
  const [address, setAddress] = useState("");
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // await RefreshTokenAPI();

        const branchResponse = await axios.get(
          "http://localhost:4000/api/admin/showBranch",
          {
            headers: {
              Authorization: `Bearer ${cookie.get("accessToken")}`,
            },
          }
        );
        console.log(branchResponse.data);
        setData(branchResponse.data);

        const staffResponse = await axios.get(
          "http://localhost:4000/api/admin/showStaffandManager",
          {
            headers: {
              Authorization: `Bearer ${cookie.get("accessToken")}`,
            },
          }
        );
        console.log(staffResponse.data);
        setStaff(staffResponse.data);

        const showReservation = await axios.get(
          "http://localhost:4000/api/customer/showReservation",
          {
            headers: {
              Authorization: `Bearer ${cookie.get("accessToken")}`,
            },
          }
        );
        console.log(showReservation.data);
        setReservation(showReservation.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [refresh]);

  return (
    <>
      <Navbar />
      <main className="mx-autoflex flex-col max-w-screen-xl pt-20 mx-36">
        <div className="my-5 font-semibold text-3xl">
          <div>Chi nhánh</div>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {data.map((item) => (
            <div>
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/image1.png"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.address}
                </h5>
                <div className="font-normal text-gray-700 dark:text-gray-400">
                  <div className="flex justify-between">
                    <div>
                      <span className="font-semibold">Manager: </span>
                      {(() => {
                        for (let i = 0; i < staff.length; i++) {
                          if (
                            staff[i].staffId === item.managerId &&
                            staff[i].branchId === item.branchId
                          ) {
                            return staff[i].userName;
                          }
                        }
                      })()}
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold">Working Time: </span>{" "}
                    {item.workingTime} <br />
                  </div>
                  <div className="flex place-content-end gap-10 my-5">
                    <Button
                      onClick={() => {
                        setAddress(item.address);
                        setVisible(true);
                      }}
                      theme={customTheme}
                      color="primary"
                      pill
                    >
                      Đặt chỗ
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <Order
          data={address}
          visible={visible}
          onClose={() => setVisible(false)}
          refresh = {refresh}
          setRefresh = {setRefresh}
        />
        <div className="my-5 font-semibold text-3xl">
          <hr className="border-black mt-10 mb-5" />
          <div>Đơn đặt chỗ</div>
        </div>
        <div className="overflow-x-auto mx-36 mb-20">
          <Table hoverable>
            <Table.Head className="text-center">
              <Table.HeadCell>Địa điểm</Table.HeadCell>
              <Table.HeadCell>Ngày đặt</Table.HeadCell>
              <Table.HeadCell>Số lượng</Table.HeadCell>
              <Table.HeadCell>Trạng thái</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-center">
              {(() => {
                if (Array.isArray(reservation)) {
                  return reservation.map((item, index) => (
                    <Table.Row
                      key={index}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell>{item.address}</Table.Cell>
                      <Table.Cell>
                        {
                          // item.reservationDate 2023-12-20T05:12:12.000Z
                          (() => {
                            let date =
                              item.reservationDate.split("T")[0] +
                              " " +
                              item.reservationDate.split("T")[1].split(".")[0];
                            return date;
                          })()
                        }
                      </Table.Cell>
                      <Table.Cell>{item.quantity}</Table.Cell>
                      <Table.Cell>
                        {item.isConfirm === 0 ? (
                          <div className="text-red-500 font-semibold">Chưa xác nhận</div>
                        ) : (
                          <div className="text-green-500 font-semibold">Đã xác nhận</div>
                        )}
                      </Table.Cell>
                    </Table.Row>
                  ));
                } else {
                  // Handle the case where items is not an array (e.g., set a default value or render an error message)
                  return null;
                }
              })()}
            </Table.Body>
          </Table>
        </div>
      </main>
    </>
  );
}
