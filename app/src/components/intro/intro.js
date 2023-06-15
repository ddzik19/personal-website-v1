import { Header } from "../header";
import { Button } from "../button";

const Intro = () => {
  return (
    <div className="pt-[100px] pb-[50px]">
      <div className="flex justify-center items-center flex-col">
        <Header>Lorem Ipsum Dolor Sit Amet</Header>
        <p className="text-[24px] w-[450px] md:w-[700px] lg:w-[850px] text-center pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
          massa sed neque condimentum porta.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent sed massa sed neque condimentum
          porta.
        </p>
        <div className="inline">
          <Button className={"mt-10 inline-block mr-10"}>portfolio</Button>
          <Button
            className={"mt-10 inline-block bg-damo-secondary border-none"}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
