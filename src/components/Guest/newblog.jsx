import { Navbar } from "../navbar";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["button"] = {
  color: {
    primary:
      "bg-[#916239] hover:bg-[#7a5330] text-white p-1 hover:shadow-3 transition",
    secondary:
      "bg-gray-200 hover:bg-gray-100 text-dark p-1 hover:shadow-3 transition",
  },
  pill: {
    off: "rounded-lg",
    on: "rounded-full",
  },
  disabled: "cursor-not-allowed opacity-50 hover:shadow-0",
  isProcessing: "cursor-wait",
  spinnerSlot: "absolute h-full top-0 flex items-center animate-fade-in",
};

export default function Blogs() {
  const navigate = useNavigate();
  // Array of blog entries
  const blogEntries = [
    {
      imageSrc: "/blog-1.png",
      title: "Tuyển tập những đầu sách bạn nên đọc",
      date: "27/10/2023",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        auctor facilisis ornare. Duis ut diam efficitur, sodales tortor
        eu, porttitor leo. Donec vitae posuere ligula. Vestibulum ut nulla
        facilisis, eleifend dolor eu, ornare augue. Maecenas vel tristique
        orci, sit amet tincidunt orci. Sed varius diam sapien, auctor
        auctor urna condimentum a. Donec nec mollis mi, ut ullamcorper
        eros. Suspendisse potenti. Vestibulum placerat tincidunt
        hendrerit. Quisque fermentum, elit nec suscipit semper, est urna
        luctus mi, et congue felis ex sed orci. Etiam at libero vitae
        sapien laoreet placerat. Duis tristique lacinia mattis. Praesent
        tristique, elit et malesuada faucibus, odio odio pellentesque
        lorem, ut ornare arcu risus sed nisl. Curabitur ut dapibus ipsum,
        sit amet sodales justo. Ut imperdiet metus velit, ut cursus libero
        tincidunt vel. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Quisque vel ex nisi. Mauris mollis tincidunt mauris
        vitae convallis. Suspendisse sit amet blandit est. Sed semper
        justo venenatis placerat eleifend. Vivamus condimentum nisi quis
        rutrum fringilla. Curabitur scelerisque sem nec enim consectetur,
        vel interdum risus tempor. Maecenas in sem non nisl feugiat
        lobortis id mollis dolor.`,
    },
    {
      imageSrc: "/blog-2.png",
      title: "Top 10 sách bán chạy trong tháng - 12/2023",
      date: "27/10/2023",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      auctor facilisis ornare. Duis ut diam efficitur, sodales tortor
      eu, porttitor leo. Donec vitae posuere ligula. Vestibulum ut nulla
      facilisis, eleifend dolor eu, ornare augue. Maecenas vel tristique
      orci, sit amet tincidunt orci. Sed varius diam sapien, auctor
      auctor urna condimentum a. Donec nec mollis mi, ut ullamcorper
      eros. Suspendisse potenti. Vestibulum placerat tincidunt
      hendrerit. Quisque fermentum, elit nec suscipit semper, est urna
      luctus mi, et congue felis ex sed orci. Etiam at libero vitae
      sapien laoreet placerat. Duis tristique lacinia mattis. Praesent
      tristique, elit et malesuada faucibus, odio odio pellentesque
      lorem, ut ornare arcu risus sed nisl. Curabitur ut dapibus ipsum,
      sit amet sodales justo. Ut imperdiet metus velit, ut cursus libero
      tincidunt vel. Interdum et malesuada fames ac ante ipsum primis in
      faucibus. Quisque vel ex nisi. Mauris mollis tincidunt mauris
      vitae convallis. Suspendisse sit amet blandit est. Sed semper
      justo venenatis placerat eleifend. Vivamus condimentum nisi quis
      rutrum fringilla. Curabitur scelerisque sem nec enim consectetur,
      vel interdum risus tempor. Maecenas in sem non nisl feugiat
      lobortis id mollis dolor.`,
    },
    {
      imageSrc: "/blog-3.png",
      title: "Hôm nay đọc gì? - Số 08",
      date: "27/10/2023",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      auctor facilisis ornare. Duis ut diam efficitur, sodales tortor
      eu, porttitor leo. Donec vitae posuere ligula. Vestibulum ut nulla
      facilisis, eleifend dolor eu, ornare augue. Maecenas vel tristique
      orci, sit amet tincidunt orci. Sed varius diam sapien, auctor
      auctor urna condimentum a. Donec nec mollis mi, ut ullamcorper
      eros. Suspendisse potenti. Vestibulum placerat tincidunt
      hendrerit. Quisque fermentum, elit nec suscipit semper, est urna
      luctus mi, et congue felis ex sed orci. Etiam at libero vitae
      sapien laoreet placerat. Duis tristique lacinia mattis. Praesent
      tristique, elit et malesuada faucibus, odio odio pellentesque
      lorem, ut ornare arcu risus sed nisl. Curabitur ut dapibus ipsum,
      sit amet sodales justo. Ut imperdiet metus velit, ut cursus libero
      tincidunt vel. Interdum et malesuada fames ac ante ipsum primis in
      faucibus. Quisque vel ex nisi. Mauris mollis tincidunt mauris
      vitae convallis. Suspendisse sit amet blandit est. Sed semper
      justo venenatis placerat eleifend. Vivamus condimentum nisi quis
      rutrum fringilla. Curabitur scelerisque sem nec enim consectetur,
      vel interdum risus tempor. Maecenas in sem non nisl feugiat
      lobortis id mollis dolor.`,
    },
    // Add more entries as needed
  ];

  return (
    <>
      <h2 className="text-black text-2xl not-italic font-bold mb-5">
        Blog mới nhất
      </h2>
      <div
        className="flex flex-col w-full pb-2 space-y-2 sm:space-y-5"
        id="blog-content-grid"
      >
        {blogEntries.map((entry, index) => (
          <button
            key={index}
            className="flex flex-col sm:flex-row rounded-lg transition-all ease-m3-standard-accelerate text-left sm:space-x-5 max-sm:p-2"
            onClick={() => {
              navigate("/blogs/"+index);
            }}
          >
            <img
              src={entry.imageSrc}
              className="rounded-xl"
              alt={`blog-${index + 1}`}
            />
            <div className="flex flex-col space-y-5">
              <p className="font-bold text-lg">{entry.title}</p>
              <p>{entry.date}</p>
              <p className="line-clamp-5">{entry.content}</p>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}

export function BlogPage() {
  return (
    <>
      <Navbar />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="w-full font-bold text-3xl">Blog</div>
          <Blogs />
        </main>
      </section>
    </>
  );
}

export function BlogDetails() {
  const navigate = useNavigate();
  const blogDetail = {
    imageSrc: "/blog-1.png",
    title: "Tuyển tập những đầu sách bạn nên đọc",
    date: "27/10/2023",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    auctor facilisis ornare. Duis ut diam efficitur, sodales tortor
    eu, porttitor leo. Donec vitae posuere ligula. Vestibulum ut nulla
    facilisis, eleifend dolor eu, ornare augue. Maecenas vel tristique
    orci, sit amet tincidunt orci. Sed varius diam sapien, auctor
    auctor urna condimentum a. Donec nec mollis mi, ut ullamcorper
    eros. Suspendisse potenti. Vestibulum placerat tincidunt
    hendrerit. Quisque fermentum, elit nec suscipit semper, est urna
    luctus mi, et congue felis ex sed orci. Etiam at libero vitae
    sapien laoreet placerat. Duis tristique lacinia mattis. Praesent
    tristique, elit et malesuada faucibus, odio odio pellentesque
    lorem, ut ornare arcu risus sed nisl. Curabitur ut dapibus ipsum,
    sit amet sodales justo. Ut imperdiet metus velit, ut cursus libero
    tincidunt vel. Interdum et malesuada fames ac ante ipsum primis in
    faucibus. Quisque vel ex nisi. Mauris mollis tincidunt mauris
    vitae convallis. Suspendisse sit amet blandit est. Sed semper
    justo venenatis placerat eleifend. Vivamus condimentum nisi quis
    rutrum fringilla. Curabitur scelerisque sem nec enim consectetur,
    vel interdum risus tempor. Maecenas in sem non nisl feugiat
    lobortis id mollis dolor.`,
  };
  return (
    <>
      <Navbar />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-5 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <Button
            theme={customTheme}
            pill
            color="secondary"
            withIcon
            onClick={() => {
              navigate("/blogs");
            }}
          >
            <HiOutlineArrowLeft className="h-5 w-5 mr-3" />
            Quay lại
          </Button>
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col space-y-3">
              <p className="text-2xl font-bold">{blogDetail.title}</p>
              <p className="pb-5">{blogDetail.date}</p>
              <img src={blogDetail.imageSrc} alt="blog cover" className="w-full"></img>
              <p>{blogDetail.content}</p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
