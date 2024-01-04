import React, { useEffect } from "react";
import { Navbar } from "../navbar";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { customTheme } from "../Utils/myButton";
import { useState } from "react";
import { Select } from "flowbite-react";
import axios from "axios";
import Cookies from "universal-cookie";
import { FileInput } from "flowbite-react";

export default function BooksDetailsModify() {
  const cookie = new Cookies();
  const navigate = useNavigate();
  const [author, setAuthor] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/admin/showAuthor", {
        headers: {
          Authorization: `Bearer ${cookie.get("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setAuthor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const handleAddAuthor = () => {
    if (name === "" || birth === "") {
      alert("Vui lòng nhập đủ thông tin");
      return;
    }
    axios
      .post(
        "http://localhost:4000/api/admin/addAuthor",
        {
          authorName: name,
          birth: birth,
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
        alert("Thêm tác giả thành công");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [bookImage, setBookImage] = useState(null);
  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [bookId, setBookId] = useState("");

  const handleEditBook = () => {
    const data = new FormData();
    if (bookImage !== null) {
      data.append("bookImage", bookImage);
    }
    data.append("authorName", authorName);
    data.append("title", title);
    data.append("publicationYear", publicationYear);
    data.append("salePrice", salePrice);
    data.append("genre", genre);
    data.append("description", description);
    data.append("bookId", bookId);

    const currentYear = new Date().getFullYear();
    if (publicationYear > currentYear || publicationYear < 0) {
      alert("Năm xuất bản không hợp lệ");
      return;
    }
    axios
      .post("http://localhost:4000/api/admin/updateBook", data, {
        headers: {
          Authorization: `Bearer ${cookie.get("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("chỉnh sửa sách thành công");
        navigate("/admin/bookList");
      })
      .catch((err) => {
        console.log(err);
        alert("chỉnh sửa sách thất bại")
      });
  };
  useEffect(() => {
    if (localStorage.getItem("bookInfo")) {
      const bookInfo = JSON.parse(localStorage.getItem("bookInfo"));
      setAuthorName(bookInfo.authorName);
      setTitle(bookInfo.title);
      setPublicationYear(bookInfo.publicationYear);
      setSalePrice(bookInfo.salePrice);
      setGenre(bookInfo.genre);
      setDescription(bookInfo.description);
      setBookId(bookInfo.bookId);
    }
  }, [refresh]);
  return (
    <div>
      <Navbar />
      {/* Ảnh */}

      <main className="mx-autoflex flex-col max-w-screen-xl py-32 mx-36">
        <div className="flex">
          <div className="w-2/12  font-semibold text-lg">Thêm tác giả</div>
          <div className="w-full ">
            {/* ten  */}
            <div className="mb-5">
              <Label for="ten">Tên tác giả</Label>
              <TextInput
                id="teb"
                placeholder="Tên tác giả"
                className="w-full"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-5">
              <Label for="bd">Ngày sinh</Label>
              <TextInput
                id="bd"
                placeholder="Ngày sinh"
                className="w-full"
                type="date"
                onChange={(e) => {
                  setBirth(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex place-content-end gap-10">
          <Button
            theme={customTheme}
            color="primary"
            pill
            onClick={() => {
              if (window.confirm("Bạn có chắc chắn muốn thêm tác giả này?")) {
                handleAddAuthor();
              }
            }}
          >
            Xác nhận
          </Button>
        </div>
        <div className="flex">
          <div className="w-2/12  font-semibold text-lg">
            Chỉnh sửa sách
            <div className="absolute my-5">
              <img
                src={
                  "http://localhost:4000/api/customer/getBookImage/" + bookId
                }
                alt="bookImage"
                className="h-40 w-20 shrink-0 border-b overflow-hidden rounded-t-xl"
              />
            </div>
          </div>
          <div className="w-full ">
            {/* Bìa  */}
            <div className="mb-5">
              <Label
                htmlFor="file-upload"
                value="Đổi ảnh sách"
                // set the file to fileAvatar
              />
              <FileInput
                id="file-upload-helper-text"
                helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                onChange={(e) => {
                  setBookImage(e.target.files[0]);
                }}
              />
              {/* <Label for="avatar" className="ml-40">Avatar</Label> */}
            </div>
            {/* Tên */}
            <div className="mb-5">
              <Label for="ten">Tên sách</Label>
              <TextInput
                id="ten"
                placeholder="Tên"
                className="w-full"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
              />
            </div>
            {/* Thể loại */}
            <div className="mb-5">
              <Label for="theloai">Thể loại</Label>
              <TextInput
                id="theloai"
                placeholder="Thể loại"
                className="w-full"
                onChange={(e) => {
                  setGenre(e.target.value);
                }}
                value={genre}
              />
            </div>
            {/* Tác giả */}
            <div className="mb-5">
              <Label for="tacgia">Tác giả</Label>
              <Select
                id="tacgia"
                placeholder="Tác giả"
                className="w-full"
                onChange={(e) => {
                  setAuthorName(e.target.value);
                }}
                value={authorName}
              >
                <option value="" disabled="true">
                  Tác giả
                </option>
                {author.map((item) => {
                  return (
                    <option value={item.authorName}>{item.authorName}</option>
                  );
                })}
              </Select>
            </div>
            {/* Năm xuất bản */}
            <div className="mb-5">
              <Label for="nam">Năm xuất bản</Label>
              <TextInput
                type="number"
                id="nam"
                placeholder="Năm xuất bản"
                className="w-full"
                onChange={(e) => {
                  setPublicationYear(e.target.value);
                }}
                max={new Date().getFullYear()}
                min="0"
                value={publicationYear}
              />
            </div>
            {/* Mô tả */}
            <div className="mb-5">
              <Label for="mota">Mô tả</Label>
              <Textarea
                id="mota"
                placeholder="Mô tả"
                className="w-full"
                required
                rows={5}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              />
            </div>
            {/* Giá */}
            <div className="mb-5">
              <Label for="gia">Giá</Label>
              <TextInput
                type="number"
                min="0"
                value={salePrice}
                id="gia"
                placeholder="Giá"
                className="w-full"
                onChange={(e) => {
                  setSalePrice(e.target.value);
                }}
              />
            </div>

            <div className="flex place-content-end gap-10">
              <Button
                onClick={() => navigate("/admin/bookList")}
                theme={customTheme}
                color="secondary"
                pill
              >
                Hủy
              </Button>
              <Button
                theme={customTheme}
                color="primary"
                pill
                onClick={handleEditBook}
              >
                Hoàn tất
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
