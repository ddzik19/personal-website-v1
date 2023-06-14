import { Header } from "../header";
import { Button } from "../button";

const Intro = () => {
  return (
    <div className="py-[100px]">
      <div className="flex justify-center items-center flex-col">
        <Header>Lorem Ipsum Dolor Sit Amet</Header>
        <p className="text-[24px] w-[850px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
          massa sed neque condimentum porta.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent sed massa sed neque condimentum
          porta.
        </p>
        <Button>yaya</Button>
      </div>
    </div>
  );
};

export default Intro;
