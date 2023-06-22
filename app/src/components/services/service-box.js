import { Subheader } from "../subheader";

const ServiceBox = ({ href, image, title, desc }) => {
  return (
    <a
      href={href}
      className="box px-20 mx-auto rounded-md border-[1px] shadow-md flex justify-center items-center flex-col p-5 bg-[#ffffff] hover:bg-damo-secondary transition-all transition-1"
    >
      <img src={image} alt={title} className="w-[150px] h-[150px]" />
      <Subheader className="hover-heading">{title}</Subheader>
      <p className="text-center">{desc}</p>
    </a>
  );
};

export default ServiceBox;
