import React, { useEffect, useState } from "react";
import { Navbar } from "../navbar";
import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import { Checkbox } from "flowbite-react";
import { Radio } from "flowbite-react";
import axios from "axios";
import Cookies from "universal-cookie";
import RefreshTokenAPI from "../Utils/token";
import { useNavigate } from "react-router-dom";

function Check({ visible, onAccept, onCancel }) {
  const handleSuccess = () => {
    onAccept();
  };
  const handleCancel = () => {
    onCancel();
  };
  if (visible === false) return null;
  return (
    <>
      <div
        id="user-card-expanded"
        className="absolute top-16 right-36 my-auto box-content flex w-80  flex-col items-center space-y-5 rounded-lg  bg-white p-6 shadow-3 transition-all duration-[250ms] ease-m3-standard-decelerate dark:bg-card-background-dark max-sm:right-2 max-sm:w-10/12 z-10 select-none "
      >
        <div>Bạn muốn xác nhận đơn đặt sách #1 chứ?</div>
        <div className="flex place-content-start gap-10 my-5">
          <Button
            onClick={handleSuccess}
            className="bg-[#6750A4] rounded-full border-[#6750A4] enabled:hover:bg-white enabled:hover:text-[#6750A4] "
          >
            Hoàn tất
          </Button>
          <Button
            onClick={handleCancel}
            className="text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white"
          >
            Hủy
          </Button>
        </div>
      </div>
    </>
  );
}

function Success({ visible, setVisible }) {
  useEffect(() => {
    const timerId = setTimeout(() => {
      setVisible();
    }, 2000);
    return () => {
      clearTimeout(timerId);
    };
  }, [visible]);
  if (visible === false) return null;
  return (
    <>
      <div
        id="user-card-expanded"
        className="absolute top-16 right-36 my-auto box-content flex w-80  flex-col items-center space-y-5 rounded-lg  bg-white p-6 shadow-3 transition-all duration-[250ms] ease-m3-standard-decelerate dark:bg-card-background-dark max-sm:right-2 max-sm:w-10/12 z-10 select-none "
      >
        <div>Xác nhận đơn hàng thành công</div>
      </div>
    </>
  );
}

export default function OrderLocationHistory() {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const [items, setItems] = React.useState([]);
  const [check, setCheck] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [refresh, setRefresh] = useState(false); // <-- declare state variable
  const handleCheck = () => {
    setCheck(true);
  };
  const handleCheckSuccess = () => {
    setSuccess(true);
    setCheck(false);
  };
  const handleCheckCancel = () => {
    setCheck(false);
  };
  const handleSuccesCancle = () => {
    setSuccess(false);
  };
  useEffect(() => {
    RefreshTokenAPI();
    axios
      .get("http://localhost:4000/api/staff/showReservation", {
        headers: {
          Authorization: `Bearer ${cookie.get("accessToken")}`,
        },
        params: {
          role: cookie.get("role"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);
  const handleConfirm = () => {
    RefreshTokenAPI();
    axios
      .post(
        "http://localhost:4000/api/staff/confirmReservation",
        {
          reservationId: data.reservationId,
        },
        {
          headers: {
            Authorization: `Bearer ${cookie.get("accessToken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
        handleCheckSuccess();
        setRefresh(!refresh); // <-- toggle value to force useEffect to run again
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <main>
        <div className="flex mx-36 gap-10">
          <Button className="mt-10 text-3xl font-semibold text-[#6750A4] bg-white border-[#6750A4] rounded-full enabled:hover:bg-[#6750A4] enabled:hover:text-white"
          onClick={() => navigate("/staff/order/locations")}
          >
            Trở về
          </Button>
        </div>

        <div class="relative text-gray-600 mx-36 my-7">
          <input
            type="search"
            name="serch"
            placeholder="Tìm kiếm"
            class="bg-[#ECE6F0] rounded-full text-sm focus:outline-none w-full px-5 h-12"
          />
        </div>
        <hr className="border-black mx-36 my-5" />
        <div className="overflow-x-auto mx-36">
          <Table hoverable>
            <Table.Head className="text-center">
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Tên người đặt</Table.HeadCell>
              <Table.HeadCell>Địa điểm</Table.HeadCell>
              <Table.HeadCell>Ngày đặt</Table.HeadCell>
              <Table.HeadCell>Số lượng</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-center">
              {(() => {
                if (Array.isArray(items)) {
                  return items.map(
                    (item, index) =>
                      item.isConfirm === 1 && (
                        <Table.Row
                          key={index}
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                          <Table.Cell>{item.reservationId}</Table.Cell>
                          <Table.Cell>{item.userName}</Table.Cell>
                          <Table.Cell>{item.address}</Table.Cell>
                          <Table.Cell>
                            {
                              // item.reservationDate 2023-12-20T05:12:12.000Z
                              (() => {
                                let date =
                                  item.reservationDate.split("T")[0] +
                                  " - " +
                                  item.reservationDate
                                    .split("T")[1]
                                    .split(".")[0];
                                return date;
                              })()
                            }
                          </Table.Cell>
                          <Table.Cell>{item.quantity}</Table.Cell>
                          
                        </Table.Row>
                      )
                  );
                } else {
                  // Handle the case where items is not an array (e.g., set a default value or render an error message)
                  return null;
                }
              })()}
            </Table.Body>
          </Table>
        </div>
      </main>
      <Check
        visible={check}
        onAccept={handleCheckSuccess}
        onCancel={handleCheckCancel}
      />
      <Success visible={success} setVisible={handleSuccesCancle} />
    </>
  );
}
