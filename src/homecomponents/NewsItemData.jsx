import ItemCard from "./components/ItemCard";
import NewsCard from "./components/NewsCard";

import news1 from "./assets/news1.png";
import news2 from "./assets/news2.png";
import news3 from "./assets/news3.png";

import {
  freshSales,
  topRated,
  newArrivals,
  bestSellers,
} from "../helpers/dummyData";

export default function NewsItemData() {
  return (
    <>
      <div className="flex mb-4">
        <div className="flex flex-col">
          <h3 className="text-base font-semibold fBlack">FLASH SALE TODAY</h3>
          {freshSales.map((item) => (
            <ItemCard
              key={item.id}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-semibold fBlack">BEST SELLERS</h3>
          {bestSellers.map((item) => (
            <ItemCard
              key={item.id}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-semibold fBlack">TOP RATED</h3>
          {topRated.map((item) => (
            <ItemCard
              key={item.id}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-semibold fBlack">NEW ARRIVALS</h3>
          {newArrivals.map((item) => (
            <ItemCard
              key={item.id}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <h3 className="font-sans text-3xl font-semibold text-center">
        Latest News
      </h3>
      <div className="flex justify-center">
        <NewsCard image={news1} />
        <NewsCard image={news2} />
        <NewsCard image={news3} />
      </div>
    </>
  );
}
