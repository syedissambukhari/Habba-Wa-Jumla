import React from "react";
import "../App.css";
import Accessories from "../homecomponents/Accessories";
import Categories from "../homecomponents/Categories";
import Deals from "../homecomponents/Deals";
import FeatureProducts from "../homecomponents/FeatureProducts";
import Footer from "../homecomponents/Footer";
import HeroSection from "../homecomponents/HeroSection";
import ItemCard from "../homecomponents/ItemCard";
import Items from "../homecomponents/Items";
import NewsCard from "../homecomponents/Newscard";
import Offer from "../homecomponents/Offer";
import TrackOrder from "../homecomponents/TrackOrder";
import OrderTracking from "../homecomponents/TrackOrderDetails";
const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* <TrackOrder /> */}
      {/* working on it and this will appear after clickin on button in track order page */}
      {/* <OrderTracking/> */}
      <HeroSection />
      <Deals />
      <Categories />
      <FeatureProducts />
      <Items />
      <Accessories />
      <Offer />
      <ItemCard />
      <NewsCard />
    </div>
  );
};

export default Home;
