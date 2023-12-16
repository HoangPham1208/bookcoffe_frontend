export default function NewBlog() {
  return (
    <>
      <h2 className="text-black text-2xl not-italic font-bold mb-5">
        Blog mới nhất
      </h2>
      <div
        className="flex flex-col w-full pb-2 space-y-5"
        id="blog-content-grid"
      >
        <button className="flex flex-row rounded-lg transition-all ease-m3-standard-accelerate text-left space-x-5">
          <img src="/blog-1.png" className="rounded-xl" />
          <div className="flex flex-col space-y-5">
            <p className="font-bold text-lg">
              Tuyển tập những đầu sách bạn nên đọc
            </p>
            <p className="">27/10/2023</p>
            <p className="line-clamp-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
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
              lobortis id mollis dolor.
            </p>
          </div>
        </button>
        <button className="flex flex-row rounded-lg transition-all ease-m3-standard-accelerate text-left space-x-5">
          <img src=" /blog-2.png" className="rounded-xl" />
          <div className="flex flex-col space-y-5">
            <p className="font-bold text-lg">
              Top 10 sách bán chạy trong tháng - 12/2023
            </p>
            <p className="">27/10/2023</p>
            <p className="line-clamp-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
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
              lobortis id mollis dolor.
            </p>
          </div>
        </button>
        <button className="flex flex-row rounded-lg transition-all ease-m3-standard-accelerate text-left space-x-5">
          <img src=" /blog-3.png" className="rounded-xl" />
          <div className="flex flex-col space-y-5">
            <p className="font-bold text-lg">Hôm nay đọc gì? - Số 08</p>
            <p className="">27/10/2023</p>
            <p className="line-clamp-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
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
              lobortis id mollis dolor.
            </p>
          </div>
        </button>
      </div>
    </>
  );
}
