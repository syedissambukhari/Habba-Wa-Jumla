import "./App.css";
import Accessories from "./components/Accessories";
import Categories from "./components/Categories";
import Deals from "./components/Deals";
import FeatureProducts from "./components/FeatureProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ItemCard from "./components/ItemCard";
import Items from "./components/Items";
import NewsCard from "./components/Newscard";
import Offer from "./components/Offer";

function App() {
  return (
    <>
      <div>
        <Header />
        <HeroSection />
        <Deals />
        <Categories />
        <FeatureProducts />
        <Items />
        <Accessories />
        <Offer />
        <ItemCard />
        <NewsCard />
        <Footer />
      </div>
    </>
  );
}

export default App;
