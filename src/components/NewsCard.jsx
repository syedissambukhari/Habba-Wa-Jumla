import userCircle from "../assets/UserCircle.png";
import chatCircle from "../assets/ChatCircleDots.png";
import calendar from "../assets/CalendarBlank.png";
import arrow from "../assets/ArrowRight.png";

function NewsCard({ image }) {
  return (
    <div className="p-9">
      <img className="rounded mb-2" src={image} />
      <div className="flex justify-between mb-1">
        <span className="flex gap-1 font-sans text-sm text-[#475156]">
          <img src={userCircle} />
          Kristin
        </span>
        <span className="flex gap-1 font-sans text-sm text-[#475156]">
          <img src={calendar} />
          19Dec, 2013
        </span>
        <span className="flex gap-1 font-sans text-sm text-[#475156]">
          <img src={chatCircle} />
          453
        </span>
      </div>
      <p className="font-sans te xt-lg font-bold text-[#191C1F] mb-1">
        Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum
        dolor.
      </p>
      <p className="font-sans text-sm text-[#475156]">
        Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie
        lectus, tincidunt malesuada arcu metus posuere metus.
      </p>

      <div className="flex gap-2 align-middle pr-6 pl-6 pb-3 pt-3 border-2 border-[#0B5D51] w-1/2 mt-6">
        <p className="text-sm text-[#0B5D51] font-bold">READ MORE</p>
        <img src={arrow} />
      </div>
    </div>
  );
}

export default NewsCard;
