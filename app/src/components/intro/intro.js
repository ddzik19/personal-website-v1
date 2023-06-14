import { Header } from "../header";
import { Button } from "../button";

const Intro = () => {
  return (
    <div className="py-[100px]">
      <div className="flex justify-center items-center flex-col">
        <Header>Lorem Ipsum Dolor Sit Amet</Header>
        <p className="text-[24px] w-[850px] text-center pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
          massa sed neque condimentum porta.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent sed massa sed neque condimentum
          porta.
        </p>
        <div className="inline">
          <Button className={"mt-10 inline-block mr-10"}>portfolio</Button>
          <Button className={"mt-10 inline-block"}>Contact Us</Button>
        </div>
        <div class="custom-shape-divider-bottom-1686777189">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 320" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Intro;
