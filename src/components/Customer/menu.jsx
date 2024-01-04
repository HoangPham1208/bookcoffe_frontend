import { Navbar } from "../navbar";
import { Label, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
import { customTheme } from "../Utils/myButton";
import { FileInput } from "flowbite-react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // await RefreshTokenAPI();
        const menu = await axios.get(
          "http://localhost:4000/api/staff/showDrinks"
        );
        console.log(menu.data);
        setData(menu.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [refresh]);
  return (
    <>
      <Navbar />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5">
          <div className="w-full font-bold text-3xl my-5">Menu</div>
          <div className="flex flex-wrap gap-5">
            {data.map((item, index) => (
              <div>
                <Card
                  className="w-48 md:w-56 shrink-0"
                  imgAlt={"This is a photo of a " + item.drinkName}
                  imgSrc={
                    "http://localhost:4000/api/staff/getDrinksImage/" +
                    item.drinksId
                  }
                >
                  <p className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 h-14">
                    {item.drinksName}
                  </p>
                  <div className="font-normal text-gray-700 dark:text-gray-400">
                    {item.size.map((item2, index2) => (
                      <div className="flex justify-between">
                        <div>
                          <span className="font-semibold">Size:</span> {item2}
                        </div>
                        <div>
                          <span className="font-semibold">Giá:</span>{" "}
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(item.price[index2])}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </main>
      </section>
    </>
  );
}
