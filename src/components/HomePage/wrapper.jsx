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
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={true}>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="duration-700 ease-in-out w-full h-full justify-center items-center mb-5 flex flex-row"
            data-carousel-item
          >
            <img className="w-[769px] h-[400px]" src={item.imageSrc} />
            <div className="w-[511px] h-[400px] bg-gray-600 p-10 space-y-5 flex flex-col text-left">
              <div className="text-[white] text-sm font-normal leading-[21px]">
                {item.title}
              </div>
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
