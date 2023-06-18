import { Header } from "../header";
import { Subheader } from "../subheader";

const About = () => {
  return (

    <div className="flex justify-center items-center flex-col bg-damo-tint">
      <div className="w-[600px] md:w-[900px] lg:w-[1300px] text-left py-[200px] grid md:grid-cols-2">
        <div>
          <Header>About Me</Header>
          <Subheader>Fullstack Developer</Subheader>
          <div className="text-[18px] text-left">
            <p className="pb-5">
              With our comprehensive suite of services, including{" "}
              <strong>Web Design</strong>, <strong>Web Re-Design</strong>,{" "}
              <strong>Web Development</strong>, <strong>eCommerce Websites</strong>, and
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
        </div>
        <div className="text-[18px] text-left">
          <p className="pb-5">
            With our comprehensive suite of services, including{" "}
            <strong>Web Design</strong>, <strong>Web Re-Design</strong>,{" "}
            <strong>Web Development</strong>, <strong>eCommerce Websites</strong>, and
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
      </div>
    </div>

  );
};

export default About;
