import { Subheader } from "../subheader";
import Fade from "react-reveal/Fade";
const ServiceBox = ({ href, image, title, desc, index }) => {
  return (
    <Fade delay={150 * index}>
      <a
        href={href}
        className="box px-20 mx-auto rounded-md border-[1px] shadow-md flex justify-center items-center flex-col p-5 bg-[#ffffff] hover:bg-damo-secondary transition-all transition-1"
      >
        <img src={image} alt={title} className="w-[150px] h-[150px]" />
        <Subheader className="hover-heading">{title}</Subheader>
        <p className="text-center">{desc}</p>
      </a>
    </Fade>
  );
};

export default ServiceBox;
