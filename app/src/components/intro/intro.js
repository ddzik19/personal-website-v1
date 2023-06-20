import { Header } from "../header";
import { Button } from "../button";

const Intro = () => {
  return (
    <div className="flex justify-center items-center flex-col py-[200px]">
      <Header className={"text-center"}>Lorem Ipsum Dolor Sit Amet</Header>
      <p className="text-[24px] w-[450px] md:w-[700px] lg:w-[850px] text-center pt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
        massa sed neque condimentum porta.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Praesent sed massa sed neque condimentum
        porta.
      </p>
      <div className="inline">
        <Button href={"#"} className={"mt-10 inline-block mr-10"}>
          portfolio
        </Button>
        <Button
          href={"#"}
          className={"mt-10 inline-block bg-damo-bright-orange border-none"}
        >
          Get in Touch
        </Button>
      </div>
    </div>
  );
};

export default Intro;
