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
import { useParams } from "react-router-dom";

export default function CategoryBook() {
    const {id: genre} = useParams();
  return (
    <>
      <Navbar />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-5 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="w-full font-bold text-3xl">Thể loại: <span className="font-medium">{genre}</span></div>
          <AllBook/>
        </main>
      </section>
    </>
  );
}

function AllBook() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const {id: genre} = useParams();
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
        <h2 className="text-black text-xl not-italic ">
          Tất cả sách được xếp theo thể loại {genre}
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
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
