import Image from "next/image";
import { Subheader } from "../subheader";

const ServiceBox = ({ image, title, desc }) => {
  return (
    <div className="w-[300px] h-[300px] rounded-md border-[1px] shadow-md flex justify-center items-center flex-col">
      <Image src={image} width={50} height={50} alt={title} />
      <Subheader>{title}</Subheader>
      <p>{desc}</p>
    </div>
  );
};

export default ServiceBox;
