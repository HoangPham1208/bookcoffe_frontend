import React from 'react';

export default function NewBlog() {
  // Array of blog entries
  const blogEntries = [
    {
      imageSrc: '/blog-1.png',
      title: 'Tuyển tập những đầu sách bạn nên đọc',
      date: '27/10/2023',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor facilisis ornare...',
    },
    {
      imageSrc: '/blog-2.png',
      title: 'Top 10 sách bán chạy trong tháng - 12/2023',
      date: '27/10/2023',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor facilisis ornare...',
    },
    {
      imageSrc: '/blog-3.png',
      title: 'Hôm nay đọc gì? - Số 08',
      date: '27/10/2023',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor facilisis ornare...',
    },
    // Add more entries as needed
  ];

  return (
    <>
      <h2 className="text-black text-2xl not-italic font-bold mb-5">
        Blog mới nhất
      </h2>
      <div className="flex flex-col w-full pb-2 space-y-5" id="blog-content-grid">
        {blogEntries.map((entry, index) => (
          <button
            key={index}
            className="flex flex-row rounded-lg transition-all ease-m3-standard-accelerate text-left space-x-5"
          >
            <img src={entry.imageSrc} className="rounded-xl" alt={`blog-${index + 1}`} />
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
