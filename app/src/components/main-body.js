import Navbar from "./navbar";
import Intro from "./intro/intro";
import About from "./about/about";
import Services from "./services/services";

const MainBody = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Services />
    </>
  );
};

export default MainBody;
