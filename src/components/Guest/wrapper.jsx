import { Carousel } from "flowbite-react";

export default function Wrapper() {
  // Array of items for the carousel
  const carouselItems = [
    {
      imageSrc: "/image1.png",
      title: "Nơi làm việc và thư giãn hiệu quả",
      description:
        "Tận hưởng không gian yên tĩnh, đầy hứng khởi với không gian rộng rãi của quán. Phù hợp cho nhiều đối tượng từ khách hàng đơn lẻ tới nhóm nhỏ từ 2-4 người, quán gồm nhiều không gian khác nhau cho các mục đích như học tập, làm việc, trò chuyện thân mật.",
    },
    {
      imageSrc: "/image2.jpg",
      title: "Lựa chọn thức uống đa dạng",
      description:
        "Lựa chọn thức uống yêu thích của bạn bao gồm các loại trà, cà phê, nước ép và đá xay. Vào những ngày se lạnh, bạn có thể thưởng thức menu thức uống nóng bao gồm các loại trà và cà phê.",
    },
    {
      imageSrc: "/image3.jpg",
      title: "Tủ sách yêu thích",
      description:
        "Được lựa chọn từ những cuốn sách bán chạy nhất, tủ sách của quán là nơi lý tưởng để khám phá cuốn sách yêu thích tiếp theo của bạn. Ngoài ra đây cũng là nơi để các tín đồ yêu sách gặp gỡ và trò chuyện về cuốn sách yêu thích của mình.",
    },
    {
      imageSrc: "/image4.jpg",
      title: "Không gian thoải mái",
      description:
        "Không gian bố trí thuận tiện cho việc đi lại, trong khi đó vẫn đảm bảo được không gian riêng tư cho mỗi bàn. Khu đọc sách được bố trí riêng nhằm đảm bảo yên tĩnh để bạn có thể thoải mái thư giãn với tách trà của mình.",
    },
    {
      imageSrc: "/image5.jpg",
      title: "Nơi hoàn hảo để thưởng thức cà phê",
      description:
        "Quán có những loại cà phê truyền thống với hương vị đặc sắc của cà phê Việt Nam, cùng với các loại cà phê pha máy đem lại hương vị cà phê đậm đà nhất, hoàn hảo để bắt đầu một ngày mới tràn đầy năng lượng.",
    },
    // Add more items as needed
  ];

  return (
    <div className="h-[500px] sm:h-[600px] md:h-80 2xl:h-96">
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
              <div className="text-white text-sm leading-5">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
