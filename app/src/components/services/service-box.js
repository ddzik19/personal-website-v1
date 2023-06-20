import { Subheader } from "../subheader";

const ServiceBox = ({ href, image, title, desc }) => {
  return (
    <a href={href} className="box w-[300px] h-[300px] rounded-md border-[1px] shadow-md flex justify-center items-center flex-col p-5 hover:bg-damo-secondary transition-all transition-1 hover:border-none">
      <img src={image} alt={title} className="w-[50px] h-[50px]" />
      <Subheader className={"hover-heading"}>{title}</Subheader>
      <p className="text-center">{desc}</p>
    </a>
  );
};

export default ServiceBox;
