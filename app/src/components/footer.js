import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="grid md:grid-cols-2 bg-damo-blue py-5">
      {/* socials */}
      <div className="p-4 float-right">
        <a href="" className="p-4">
          <BsGithub size={40} className="bg-damo-blue hover:text-black" />
        </a>
        <a href="" className="p-4">
          <BsLinkedin size={40} className="bg-damo-blue hover:text-black" />
        </a>
        <a href="" className="p-4">
          <BsInstagram size={40} className="bg-damo-blue hover:text-black" />
        </a>
      </div>
      {/* Sections */}
      <div className="p-4">
        <ul className="">
          <li>
            <a href="">Test</a>
          </li>
          <li>
            <a href="">Test</a>
          </li>
          <li>
            <a href="">Test</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
