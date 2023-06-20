// import { Header } from "../header";
// import { Subheader } from "../subheader";
import { Layout } from "../layout";
import ServiceBox from "./service-box";

const Services = () => {
  const array = [
    {
      title: "test",
      desc: "test test test test test test test test test test test test",
      image: "../../assets/img-placeholder.png",
    },
  ];
  return (
    <Layout>
      {array.map((val, index) => {
        return (
          <ServiceBox
            title={val.title}
            desc={val.desc}
            key={index}
            image={val.image}
          />
        );
      })}
    </Layout>
  );
};

export default Services;
