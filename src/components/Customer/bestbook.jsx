import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function BestBook() {
  const navigate = useNavigate();
  const [bookEntries, setBookEntries] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/customer/search")
      .then((res) => {
        console.log(res.data);
        // random this res.data and got max 10
        let randomData = res.data
          .sort(() => Math.random() - Math.random())
          .slice(0, 10);
        setBookEntries(randomData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="">
        <h2 className="text-black text-2xl not-italic font-bold">
          Sách nổi bật trong tuần
        </h2>
        <div
          className="flex flex-wrap py-5 gap-5 overflow-auto px-2"
          id="top-books-content-grid"
        >
          {bookEntries.map((entry, index) => (
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
