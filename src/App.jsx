import "./App.css";
import Breadcrumb from "./components/BreadCrumbs";
import Header from "./components/MultiRangeSlider";
import HeroSection from "./components/HeroSection";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <>
      <div>
        <Header />
        <Breadcrumb/>
        {/* <HeroSection /> */}
        <ShopPage/>
      </div>
    </>
  );
}

export default App;
