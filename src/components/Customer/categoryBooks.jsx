import { Navbar } from "../navbar";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Button } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useState, useEffect } from "react";
import { customTheme } from "../Utils/myButton";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";

export default function CategoryBook() {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const { id: genre } = useParams();
  return (
    <>
      {cookie.get("role") !== "customer" ? <Navbar mode="login" /> : <Navbar />}
      <section className="mx-auto px-6 md:px-10 py-10 space-y-5 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="w-full font-bold text-2xl">
            Thể loại: <span className="font-medium">{genre}</span>
          </div>
          <Button
            theme={customTheme}
            pill
            color="secondary"
            withIcon
            onClick={() => {
              localStorage.getItem("page") === "home"
                ? navigate("/homeUser")
                : navigate("/booksCustomer");
            }}
          >
            <HiOutlineArrowLeft className="h-5 w-5 mr-3" />
            Quay lại
          </Button>
          <AllBook />
        </main>
      </section>
    </>
  );
}

function AllBook() {
  const cookie = new Cookies();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id: genre } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/customer/searchBookByGenre?genre=" + genre
        );
        // console.log(res);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  // console.log(data);
  return (
    <>
      <div className="">
        <p className="text-black text-lg not-italic ">
          Tất cả sách được xếp theo thể loại {genre}
        </p>
        <div
          className="flex flex-wrap py-5 gap-5 overflow-auto px-2"
          id="list-all-books"
        >
          {data.map((entry, index) => (
            <button
              key={index}
              className="flex flex-col shadow-2 hover:shadow-4 h-[300px] sm:h-96 w-40 sm:w-44 rounded-lg transition-all ease-m3-standard-accelerate text-left shrink-0"
              id="book-card"
              onClick={() => {
                cookie.get("role") === "customer"
                  ? navigate("/booksCustomer/" + entry.bookId, {
                      state: { id: entry.bookId, name: entry.title },
                    })
                  : navigate("/books/" + entry.bookId, {
                      state: { id: entry.bookId, name: entry.title },
                    });
              }}
            >
              <img
                src={
                  "http://localhost:4000/api/customer/getBookImage/" +
                  entry.bookId
                }
                className="object-cover h-64 shrink-0 border-b overflow-hidden w-full"
                alt={`book-${index + 1}`}
              />
              <div
                className="flex flex-col space-y-1 p-2"
                id="book-card-details"
              >
                <p className="font-bookTitle text-lg font-bold line-clamp-2">
                  {entry.title}
                </p>
                <p className="font-bookTitle line-clamp-2">
                  {entry.authorName}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
