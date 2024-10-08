import React from "react";
import { VscAccount } from "react-icons/vsc";
import { FaRegCalendar } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import news1 from "../assets/news.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";

const NewsCard = () => {
  const newsData = [
    {
      id: 1,
      img: news1,
      headline:
        "Cras nisl dolor, et metus sit amet, vulputate condimentum dolor.",
      description:
        "Maecenas scelerisque, tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.",
      author: "John Doe",
      date: "Oct 07, 2024",
      messages: 453,
    },
    {
      id: 2,
      img: news2,
      headline:
        "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
      description:
        "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem.",
      author: "Jane Smith",
      date: "Oct 06, 2024",
      messages: 738,
    },
    {
      id: 3,
      img: news3,
      headline:
        "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
      description:
        "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
      author: "Alex Brown",
      date: "Oct 05, 2024",
      messages: 826,
    },
  ];

  return (
    <div className="bg-[#F2F4F5] flex flex-col mt-[50px]">
      <h1 className="text-[32px] font-[600] text-center mb-[30px]">
        Latest News
      </h1>

      {/* News sections row */}
      <div className="flex justify-between px-4 gap-4">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white p-4 flex flex-col  shadow-md w-1/3"
          >
            {/* News image */}
            <img
              src={news.img}
              alt={news.headline}
              className="w-full h-48 object-cover mb-4"
            />

            {/* Extra info: Account, Date, Messages */}
            <div className="flex gap-4 items-center mb-4">
              {/* Account */}
              <div className="flex items-center space-x-1">
                <VscAccount size={20} color="#0B5D51" />
                <span
                  className="text-[#475156]
text-[14px]"
                >
                  {news.author}
                </span>
              </div>

              {/* Date */}
              <div className="flex items-center space-x-1">
                <FaRegCalendar size={20} color="#0B5D51" />
                <span
                  className="text-[#475156]
text-[14px]"
                >
                  {news.date}
                </span>
              </div>

              {/* Messages */}
              <div className="flex  items-center space-x-1">
                <AiOutlineMessage size={20} color="#0B5D51" />
                <span
                  className="text-[#475156]
text-[14px]"
                >
                  {news.messages}
                </span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-[24px] font-semibold mb-2">{news.headline}</h2>

            {/* Description */}
            <p className="text-gray-600 mb-4">{news.description}</p>

            {/* Read More button */}
            <button className=" w-[162px] h-[48px] flex  items-center gap-3 border border-[#0B5D51] text-[#0B5D51] px-2 py-2 rounded">
              Read More
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
