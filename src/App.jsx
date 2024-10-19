import "./App.css";
import Header from "./homecomponents/Header.jsx";
import Footer from "./homecomponents/Footer";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <>
     <Header />
          <Outlet />
      <Footer />
    </>
  );
}

export default App;
