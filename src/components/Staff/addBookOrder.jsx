import React, { useEffect } from "react";
import { Navbar } from "../navbar";
import { Button } from "flowbite-react";
import { FloatingLabel } from "flowbite-react";
import { Table } from "flowbite-react";
import { Checkbox } from "flowbite-react";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import RefreshTokenAPI from "../Utils/token";
import { useNavigate } from "react-router-dom";
import { customTheme } from "../Utils/myButton";

function BookOrder({ data, visible }) {
  if (!visible) return null;
  return (
    <>
      <div className="w-[350px] h-[420px] fixed top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 box-content flex flex-col  space-y-5 rounded-lg bg-white p-6 shadow-3 transition-all duration-250 ease-m3-standard-decelerate dark:bg-card-background-dark max-sm:right-2 max-sm:w-10/12 z-10 select-none">
        <p className="text-left font-bold w-full">Thông tin sách</p>
        <div>
          Chi nhánh: <span className="font-bold">{data.branch}</span>
        </div>
        <div>
          Copy ID: <span className="font-bold">{data.copyId}</span>
        </div>
        <div>
          Tên tác giả: <span className="font-bold">{data.authorName}</span>
        </div>
        <div>
          Tiêu đề: <span className="font-bold">{data.title}</span>
        </div>
        <div>
          Năm xuất bản:{" "}
          <span className="font-bold">{data.publicationYear}</span>
        </div>
      </div>
    </>
  );
}
function Order({ data, visible, onClose, refresh, setRefresh }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [idCard, setIdCard] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [radio, setRadio] = useState(1);
  const handleOnClose = () => {
    onClose();
  };
  if (!visible) return null;
  const handleOrder = () => {
    const userData = {
      userName: userName,
      idCard: idCard,
      phoneNumber: phoneNumber,
      address: address,
      copyId: data.copyId,
    };
    if (userName === "") {
      alert("Vui lòng nhập tên khách hàng!");
      return;
    }
    const borrowBookAtBranch = async () => {
      // await RefreshTokenAPI();
      axios
        .post("http://localhost:4000/api/staff/borrowBookAtBranch", userData, {
          headers: {
            Authorization: `Bearer ${new Cookies().get("accessToken")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          // show success dialog
          setRefresh(!refresh);
          onClose();
          alert("Tạo phiếu thành công!");
        })
        .catch((err) => {
          console.log(err);
          alert(
            "Tạo phiếu mượn thất bại! Vui lòng nhập đầy đủ thông tin và thử lại!"
          );
        });
    };
    const borrowBookToGo = async () => {
      // await RefreshTokenAPI();
      await axios
        .post("http://localhost:4000/api/staff/borrowBookToGo", userData, {
          headers: {
            Authorization: `Bearer ${new Cookies().get("accessToken")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          // show success dialog
          setRefresh(!refresh);
          onClose();
          alert("Tạo phiếu thành công!");
        })
        .catch((err) => {
          console.log(err);
          alert(
            "Tạo phiếu mượn thất bại! Có thể đã sai thông tin tài khoản , vui lòng thử lại!"
          );
        });
    };
    if (radio === 1) {
      borrowBookAtBranch();
    }
    if (radio === 2) {
      borrowBookToGo();
    }
    setRadio(1);
    setUserName("");
    setIdCard("");
    setPhoneNumber("");
    setAddress("");
    // navigate("/staff/order/books");
  };
  return (
    <>
      <div class="w-[350px] h-[420px] fixed top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 box-content flex flex-col items-center space-y-5 rounded-lg bg-white p-6 shadow-3 transition-all duration-250 ease-m3-standard-decelerate dark:bg-card-background-dark max-sm:right-2 max-sm:w-10/12 z-10 select-none">
        <p className="text-left font-bold w-full">Tạo phiếu đặt sách</p>
        <div className="flex gap-10">
          <div>
            <input
              className="mx-3 text-[#916239] bg-white border-[#916239] rounded-full enabled:hover:bg-[#916239] enabled:hover:text-white"
              type="radio"
              id="radio1"
              name="radio"
              value="1"
              onClick={() => {
                setRadio(1);
              }}
              checked={radio === 1}
            />
            Mượn tại quán
          </div>
          <div>
            <input
              className="mx-3 text-[#916239] bg-white border-[#916239] rounded-full enabled:hover:bg-[#916239] enabled:hover:text-white"
              type="radio"
              id="radio2"
              name="radio"
              value="2"
              onClick={() => {
                setRadio(2);
              }}
              checked={radio === 2}
            />
            Mượn về nhà
          </div>
        </div>
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
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          variant="standard"
          label="Tên / Tài khoản"
          className="w-80 select-none"
        />
        <FloatingLabel
          onChange={(e) => {
            setIdCard(e.target.value);
          }}
          variant="standard"
          label="Căn cước công dân"
          className="w-80 select-none"
          disabled={radio === 2}
          value={radio === 2 ? "Không cần" : idCard}
        />
        <FloatingLabel
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          variant="standard"
          label="Số điện thoại"
          className="w-80 select-none"
          disabled={radio === 2}
          value={radio === 2 ? "Không cần" : phoneNumber}
        />
        <FloatingLabel
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          variant="standard"
          label="Địa chỉ"
          className="w-80 select-none"
          disabled={radio === 2}
          value={radio === 2 ? "Không cần" : address}
        />
        <div className="flex w-full flex-row justify-center px-2">
          <Button
            onClick={handleOrder}
            theme={customTheme}
            color="primary"
            pill
          >
            Tạo phiếu mượn
          </Button>
        </div>
      </div>
    </>
  );
}

export default function AddBookOrder() {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/api/customer/search?title=&address=" +
          cookie.get("branchAddress")
      )
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);
  const handleSearch = (searchQuery) => {
    if (searchQuery === "") {
      setResult(items);
      return;
    }
    let temp = items.filter((item) => {
      if (item.authorName.includes(searchQuery)) return true;
      if (item.title.includes(searchQuery)) return true;
      return false;
    });
    setResult(temp);
  };

  const [visible, setVisible] = useState(false);
  const [infoData, setInfoData] = useState({});
  const handleOrder = () => {
    setVisible(true);
    // console.log(infoData);
  };
  const handleClose = () => {
    setVisible(false);
  };
  const [select, setSelect] = useState(null);
  return (
    <>
      <Navbar />

      <section className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="text-3xl font-semibold my-5 mx-36">
            Tạo phiếu mượn sách
          </div>
          <div className="relative text-gray-600 mx-36 my-7">
            <input
              type="search"
              name="serch"
              placeholder="Tìm kiếm với tên sách hoặc tên tác giả"
              className="bg-gray-100 rounded-full text-sm focus:outline-none w-full px-5 h-12"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(e.target.value);
                }
              }}
              onChange={(e) => {
                if (e.target.value === "") setResult(items);
              }}
            />
          </div>
          <hr className="border-black mx-36 my-5" />
          <div className="overflow-x-auto mx-36">
            <Table hoverable>
              <Table.Head className="text-center">
                <Table.HeadCell></Table.HeadCell>
                <Table.HeadCell>Copy Id</Table.HeadCell>
                <Table.HeadCell>Chi nhánh</Table.HeadCell>
                <Table.HeadCell>Tên tác giả</Table.HeadCell>
                <Table.HeadCell>Tiêu đề</Table.HeadCell>
                <Table.HeadCell>Năm xuất bản</Table.HeadCell>
                <Table.HeadCell>Trạng thái</Table.HeadCell>
                <Table.HeadCell className="p-4"></Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y text-center">
                {result &&
                  result.map((item1, index1) =>
                    item1.branch.map((item2, index2) => (
                      <>
                        <Table.Row
                          onClick={() => {
                            setSelect(item1.copyId[index2]);
                            setInfoData({
                              copyId: item1.copyId[index2],
                              authorName: item1.authorName,
                              title: item1.title,
                              publicationYear: item1.publicationYear,
                              branch: item2,
                            });
                          }}
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                          <Table.Cell>
                            {
                              <img
                                className="h-28 w-36"
                                src={
                                  "http://localhost:4000/api/customer/getBookImage/" +
                                  item1.bookId
                                }
                              />
                            }
                          </Table.Cell>
                          <Table.Cell>{item1.copyId[index2]}</Table.Cell>
                          <Table.Cell>{item2}</Table.Cell>
                          <Table.Cell>{item1.authorName}</Table.Cell>
                          <Table.Cell>{item1.title}</Table.Cell>
                          <Table.Cell>{item1.publicationYear}</Table.Cell>
                          <Table.Cell>
                            {item1.isBorrowed[index2] === 1 ? (
                              <p className="text-red-500">Đã mượn</p>
                            ) : (
                              <p className="text-green-500">Có sẵn</p>
                            )}
                          </Table.Cell>
                          <Table.Cell className="p-4">
                            {(() => {
                              if (item1.isBorrowed[index2] === 0)
                                return (
                                  <Checkbox
                                    checked={select === item1.copyId[index2]}
                                    className="text-[#916239] bg-white border-[#916239] rounded-full enabled:hover:bg-[#916239] enabled:hover:text-white"
                                  />
                                );
                            })()}
                          </Table.Cell>
                        </Table.Row>
                      </>
                    ))
                  )}
              </Table.Body>
            </Table>
          </div>
          <div className="flex place-content-start gap-10 mx-36 my-5">
            <Button
              onClick={() => {
                if (select === null) {
                  alert("Vui lòng chọn sách!");
                } else {
                  handleOrder();
                }
              }}
              theme={customTheme}
              color="primary"
              pill
            >
              Hoàn tất
            </Button>
            <Button
              onClick={() => navigate("/staff/order/books")}
              theme={customTheme}
              color="secondary"
              pill
            >
              Hủy
            </Button>
          </div>
          <Order
            data={infoData}
            visible={visible}
            onClose={handleClose}
            refresh={refresh}
            setRefresh={setRefresh}
          />
          <BookOrder data={infoData} visible={visible} />
        </main>
      </section>
    </>
  );
}
