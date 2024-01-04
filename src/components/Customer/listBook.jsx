import { Navbar } from "../navbar";
import BestBook from "./bestbook";
import Category from "./category";
import { useNavigate, useLocation } from "react-router-dom";
import { Label, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import axios from "axios";
import { useState, useEffect } from "react";
import { customTheme } from "../Utils/myButton";

export default function ListBook() {
  return (
    <>
      <Navbar />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-5 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="w-full font-bold text-3xl">Sách</div>
          <BestBook />
          <Category />
          <AllBook />
        </main>
      </section>
    </>
  );
}

function AllBook() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/customer/search"
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
        <h2 className="text-black text-2xl not-italic font-bold">
          Tất cả sách
        </h2>
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
                navigate("/booksCustomer/" + entry.bookId, {
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
                {/* <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ms-2 text-xs text-gray-900 dark:text-white">
                    {entry.rating}
                  </p>
                </div> */}
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export function BookDetailCustomer() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.state.name);
  const id = location.state.id;
  const title = location.state.name;
  const [bookInfo, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/customer/search?title=" + title
        );
        // console.log(res);
        setData(res.data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(bookInfo);
  const bookInfo1 = {
    imageSrc: "/the-fault-in-our-stars.png",
    title: "The Fault in Our Stars",
    author: "John Green",
    rating: "4.95",
    genre: "Lãng mạn",
    description: `The beloved, #1 global bestseller by John Green, author of The Anthropocene Reviewed and Turtles All the Way Down

      “John Green is one of the best writers alive.” –E. Lockhart, #1 bestselling author of We Were Liars
      
      “The greatest romance story of this decade.″ –Entertainment Weekly
      
      #1 New York Times Bestseller • #1 Wall Street Journal Bestseller • #1 USA Today Bestseller • #1 International Bestseller
      
      Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel’s story is about to be completely rewritten.
      
      From John Green, #1 bestselling author of The Anthropocene Reviewed and Turtles All the Way Down, The Fault in Our Stars is insightful, bold, irreverent, and raw. It brilliantly explores the funny, thrilling, and tragic business of being alive and in love.`,
  };
  return (
    <>
      <Navbar />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-5 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="w-full font-bold text-3xl">Sách</div>
          <Button
            theme={customTheme}
            pill
            color="secondary"
            withIcon
            onClick={() => {
              navigate("/booksCustomer");
            }}
          >
            <HiOutlineArrowLeft className="h-5 w-5 mr-3" />
            Quay lại
          </Button>
          <div className="flex flex-col md:flex-row gap-x-8 max-md:gap-y-5">
            <div className="shrink-0 h-full w-1/2 sm:w-1/3" id="book-cover">
              <img
                src={"http://localhost:4000/api/customer/getBookImage/" + id}
                alt="book cover"
                className="w-full"
              ></img>
            </div>
            <div className="flex flex-col space-y-3">
              <p className="font-bookTitle text-2xl font-bold">
                {bookInfo.title}
              </p>
              <p className="font-bookTitle text-lg pb-5">
                {bookInfo.authorName}
              </p>
              <p className="font-bold text-lg">Thể loại</p>
              <p className="pb-5">{bookInfo.genre}</p>
              <p className="font-bold text-lg">Mô tả</p>
              <p className="whitespace-pre-line">{bookInfo.description}</p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
