import { Header } from "../header";
import { Subheader } from "../subheader";
import { Layout } from "../layout";
import ProfilePic from "../../assets/profile-pic.png";

const Intro = () => {
  return (
    <Layout c2={"grid md:grid-cols-2"}>
      <img
        src={ProfilePic}
        alt="Picture of my bitmoji."
        className="-mt-[150px]"
      />
      <div className="text-[18px] text-left">
        <Header>About Me</Header>
        <Subheader>Frontend Developer</Subheader>
        <p className="pb-5">
          With our comprehensive suite of services, including{" "}
          <strong>Web Design</strong>, <strong>Web Re-Design</strong>,{" "}
          <strong>Web Development</strong>, <strong>eCommerce Websites</strong>,
          and
          <strong> SEO</strong>, we offer a holistic approach to meet your
          digital needs.Our skilled team combines creativity, technical
          expertise, and industry insights to deliver outstanding results.
          Experience the d2 difference and unlock the full potential of your
          online presence.{" "}
          <a
            href="#contact-us"
            className="underline text-damo-bright-orange font-semibold"
          >
            Contact us
          </a>{" "}
          now to get started.
        </p>
      </div>
    </Layout>
  );
};

export default Intro;
