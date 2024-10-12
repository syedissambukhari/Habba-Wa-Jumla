import "./App.css";
import Header from "./homecomponents/Header";
import {Outlet} from "react-router-dom";
import Footer from "./homecomponents/Footer";


function App() {
  return (
    <>
      <div>
        <Header />
          <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
