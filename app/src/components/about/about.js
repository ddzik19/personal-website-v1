const About = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-[200px] mb-[200px] bg-[#EDF6FF]">
      <div className="w-[450px] mg:w-[700px] lg:w-[850px] text-left py-[100px]">
        <div className="text-[24px] text-left w-[650px]">
          <p className="pb-5">
            With our comprehensive suite of services, including{" "}
            <strong>web design</strong>, <strong>web redesign</strong>,{" "}
            <strong>web development</strong>, <strong>e-commerce</strong>, and
            <strong> SEO</strong>, we offer a holistic approach to meet your
            digital needs.Our skilled team combines creativity, technical
            expertise, and industry insights to deliver outstanding results.
            Experience the d2 difference and unlock the full potential of your
            online presence.{" "}
            <a
              href="#contact-us"
              className="underline text-damo-primary font-semibold"
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
