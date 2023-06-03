/* eslint-disable jsx-a11y/anchor-is-valid */
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-5 fixed bottom-0 w-full">
      <div className="grid md:grid-cols-2 h-full">
        {/* socials */}
        <div className="p-4 flex justify-end border-r-[1px]">
          <a href="" className="p-4">
            <BsGithub size={40} className="hover:text-damo-primary" />
          </a>
          <a href="" className="p-4">
            <BsLinkedin size={40} className="hover:text-damo-primary" />
          </a>
          <a href="" className="p-4">
            <BsInstagram size={40} className="hover:text-damo-primary" />
          </a>
        </div>
        {/* Sections */}
        <div className="p-4 flex my-auto">
          <ul className="flex">
            <li className="mx-4">
              <a href="" className="hover:text-damo-black hover:bg-damo-primary pr-3">Test</a>
            </li>
            <li className="mx-4">
              <a href="" className="hover:text-damo-black hover:bg-damo-primary pr-3">Test</a>
            </li>
            <li className="mx-4">
              <a href="" className="hover:text-damo-black hover:bg-damo-primary pr-3">Test</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center mx-auto pt-4">&copy; Damian Dzik 2023</p>
    </footer>

  );
};

export default Footer;
