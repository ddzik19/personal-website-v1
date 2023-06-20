import { Subheader } from "../subheader";

const ServiceBox = ({ image, title, desc }) => {
  return (
    <div className="w-[300px] h-[300px] rounded-md border-[1px] shadow-md flex justify-center items-center flex-col p-5">
      <img src={image} alt={title} className="w-[50px] h-[50px]" />
      <Subheader>{title}</Subheader>
      <p className="text-center">{desc}</p>
    </div>
  );
};

export default ServiceBox;
