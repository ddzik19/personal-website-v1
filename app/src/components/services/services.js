import { Header } from "../header";
import { Subheader } from "../subheader";
import { Layout } from "../layout";
import ServiceBox from "./service-box";
import imgPlaceholder from "../../assets/img-placeholder.png";

const Services = () => {
  const array = [
    {
      title: "test",
      desc: "test test test test test test test test test test test test",
      image: imgPlaceholder,
    },
    {
      title: "test",
      desc: "test test test test test test test test test test test test",
      image: imgPlaceholder,
    },
    {
      title: "test",
      desc: "test test test test test test test test test test test test",
      image: imgPlaceholder,
    },
    {
      title: "test",
      desc: "test test test test test test test test test test test test",
      image: imgPlaceholder,
    },
    {
      title: "test",
      desc: "test test test test test test test test test test test test",
      image: imgPlaceholder,
    },
    {
      title: "test",
      desc: "test test test test test test test test test test test test",
      image: imgPlaceholder,
    },
  ];
  return (
    <Layout c1={"bg-damo-tint"}>
      <div className="w-[800px]">
        <Header>Services</Header>
        <Subheader>Everything you need</Subheader>
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
            Get in Touch
          </a>{" "}
          now to get started.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-10">
        {array.map((val, index) => (
          <ServiceBox
            title={val.title}
            desc={val.desc}
            key={index}
            image={val.image}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Services;
