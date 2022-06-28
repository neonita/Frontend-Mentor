import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Articles from "./components/Articles/Articles";

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
    </>
  );
}

export default App;
