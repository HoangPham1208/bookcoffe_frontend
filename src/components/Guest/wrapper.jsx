import { Carousel } from "flowbite-react";

export default function Wrapper() {
  // Array of items for the carousel
  const carouselItems = [
    {
      imageSrc: "/image1.png",
      title: "Book",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      imageSrc: "/image1.png",
      title: "Book",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      imageSrc: "/image1.png",
      title: "Book",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      imageSrc: "/image1.png",
      title: "Book",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      imageSrc: "/image1.png",
      title: "Book",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    // Add more items as needed
  ];

  return (
    <div className="h-[400px] sm:h-[600px] md:h-80 2xl:h-96">
      <Carousel slide={true} className="">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="duration-700 ease-in-out w-full h-full justify-center items-center mb-5 flex flex-col md:flex-row"
            data-carousel-item
          >
            <img className="object-cover h-2/3 w-full md:w-2/3 md:h-full aspect-auto" src={item.imageSrc} alt="wrapper item" />
            <div className="h-1/3 w-full md:w-1/3 md:h-full bg-gray-600 p-4 md:p-10 space-y-5 flex flex-col text-left">
              <div className="text-white text-2xl font-bold leading-9">
                {item.title}
              </div>
              <div className="text-white text-sm font-bold leading-5">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
