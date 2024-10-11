import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Signin from "./components/Signin";  
import Reset from "./components/reset/Reset";  
import Forget from "./components/Forget"; 
import EmailVerification from "./components/EmailVerification"; 
function App() {
  return (
    <>
      <div>
        <Header />
        <HeroSection />
        <Signin/>
        <Reset/>
        <Forget/>
        <EmailVerification/>
      </div>
    </>
  );
}

export default App;
