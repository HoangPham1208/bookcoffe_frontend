import React, { useEffect, useState } from "react";
import { Navbar } from "../navbar";
import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import { Radio } from "flowbite-react";
import axios from "axios";
import Cookies from "universal-cookie";
import RefreshTokenAPI from "../Utils/token";
import { useNavigate } from "react-router-dom";
import { customTheme } from "../Utils/myButton";

const BookAtBranch = (visible, items) => {
  if (!items || !Array.isArray(items)) {
    console.log(items)
    console.error("Invalid 'items' prop:", items);
    return null;
  }
  if (!visible) return null;
  return (
    <Table hoverable>
      <Table.Head className="text-center">
        <Table.HeadCell className="p-4"></Table.HeadCell>
        <Table.HeadCell>ID</Table.HeadCell>
        <Table.HeadCell>Tên người đặt</Table.HeadCell>
        <Table.HeadCell>Địa điểm</Table.HeadCell>
        <Table.HeadCell>Ngày đặt</Table.HeadCell>
        <Table.HeadCell>Số lượng</Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y text-center">
        {items.map(
          (item, index) =>
            item.isConfirm === 0 && (
              <>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="p-4">
                    {/* checkbox only one choice */}
                  </Table.Cell>
                  <Table.Cell>{item.authorName}</Table.Cell>
                  <Table.Cell>{item.userName}</Table.Cell>
                  <Table.Cell>{item.address}</Table.Cell>
                  <Table.Cell>{item.quantity}</Table.Cell>
                  <Table.Cell className="grid justify-items-center"></Table.Cell>
                </Table.Row>
              </>
            )
        )}
      </Table.Body>
    </Table>
  );
};

const BookAtHome = (visible, items) => {
  if (!items || !Array.isArray(items)) {
    console.error("Invalid 'items' prop:", items);
    return null;
  }
  if (!visible) return null;
  return (
    <Table hoverable>
      <Table.Head className="text-center">
        <Table.HeadCell className="p-4"></Table.HeadCell>
        <Table.HeadCell>ID</Table.HeadCell>
        <Table.HeadCell>Tên người đặt</Table.HeadCell>
        <Table.HeadCell>Địa điểm</Table.HeadCell>
        <Table.HeadCell>Ngày đặt</Table.HeadCell>
        <Table.HeadCell>Số lượng</Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y text-center">
        {items.map(
          (item, index) =>
            item.isConfirm === 0 && (
              <>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="p-4">
                    {/* checkbox only one choice */}
                  </Table.Cell>
                  <Table.Cell>{item.authorName}</Table.Cell>
                  <Table.Cell>{item.userName}</Table.Cell>
                  <Table.Cell>{item.address}</Table.Cell>
                  <Table.Cell>{item.quantity}</Table.Cell>
                  <Table.Cell className="grid justify-items-center"></Table.Cell>
                </Table.Row>
              </>
            )
        )}
      </Table.Body>
    </Table>
  );
};

export default function OrderBook() {
  const Navigate = useNavigate();
  const cookie = new Cookies();
  const [items, setItems] = React.useState([]);
  const [visibleBranch, setVisibleBranch] = useState(false);
  const [visibleHome, setVisibleHome] = useState(false);
  const handleVisibleBranch = () => {
    setVisibleBranch(true);
    setVisibleHome(false);
  };
  const handleVisibleHome = () => {
    setVisibleBranch(false);
    setVisibleHome(true);
  };
  const handleBorrowAtBranch = async () => {
    try {
      await RefreshTokenAPI();
      await axios
        .get("http://localhost:4000/api/staff/showBorrowBookAtBranch", {
          headers: {
            Authorization: `Bearer ${cookie.get("accessToken")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handleBorrowAtHome = async () => {
    try {
      await RefreshTokenAPI();
      await axios
        .get("http://localhost:4000/api/staff/showBorrowBookToGo?userName=", {
          headers: {
            Authorization: `Bearer ${cookie.get("accessToken")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <main className="mx-auto flex flex-col max-w-screen-xl py-20">
        <div className="text-3xl font-semibold my-5 mx-36">Đơn đặt sách</div>

        <div className="flex place-content-start gap-10 mx-36 my-5">
          <Button
            onClick={() => Navigate("/staff/order/books/add")}
            theme={customTheme}
            color="primary"
            pill
          >
            Thêm đơn
          </Button>
          <Button
            onClick={async () => {
              await handleBorrowAtBranch();
              handleVisibleBranch(); // Remove await from this line
            }}
            theme={customTheme}
            color="secondary"
            pill
          >
            Đơn tại quán
          </Button>
          <Button
            onClick={async () => {
              await handleBorrowAtHome();
              handleVisibleHome(); // Remove await from this line
            }}
            theme={customTheme}
            color="secondary"
            pill
          >
            Đơn mượn về
          </Button>
        </div>
        <div className="relative text-gray-600 mx-36 my-7">
          <input
            type="search"
            name="serch"
            placeholder="Tìm kiếm"
            className="bg-[#ECE6F0] rounded-full text-sm focus:outline-none w-full px-5 h-12"
          />
        </div>
        <hr className="border-black mx-36 my-5" />
        <div className="overflow-x-auto mx-36">
          {visibleBranch && <BookAtBranch visible={visibleBranch} items={items} />}
          {visibleHome && <BookAtHome visible={visibleHome} items={items} />}
        </div>
      </main>
    </>
  );
}
