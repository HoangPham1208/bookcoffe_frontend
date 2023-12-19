import React from "react";

export default function NewBlog() {
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