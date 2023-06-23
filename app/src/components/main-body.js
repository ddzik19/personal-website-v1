import Navbar from "./navbar";
import Intro from "./intro/intro";
import GetInTouch from "./contact form/get-in-touch";
import Services from "./services/services";

const MainBody = () => {
  return (
    <>
      <Intro />
      <Services />
      <GetInTouch />
    </>
  );
};

export default MainBody;
