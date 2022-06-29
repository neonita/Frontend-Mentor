import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
