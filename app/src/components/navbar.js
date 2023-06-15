import React, { useState } from "react";
import useWindowDimensions from "../hooks/use-window-dimensions";
import { MdDesignServices } from "react-icons/md";

const Navbar = () => {
  const { width, height } = useWindowDimensions();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {width > 1280 && (
        <div className="flex justify-end h-2 py-2 pr-10">
          <span id="span" className="mr-4">
            <a href="#">info@d2.ie</a>
          </span>
        </div>
      )}
      <div className="flex items-start justify-between pr-10">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-8 w-auto mr-4" />
        </div>
        {width > 1280 && (
          <div className="flex items-center">
            <ul className="flex">
              <li className="px-10 py-5 capitalize">
                <a href="#" className="hover:text-damo-primary font-semibold">
                  About Us
                </a>
              </li>
              <li className="px-10 py-5 capitalize">
                <div className="relative">
                  <button
                    id="dropdownHoverButton"
                    data-dropdown-toggle="dropdownHover"
                    data-dropdown-trigger="hover"
                    className="hover:text-damo-primary font-semibold flex"
                    type="button"
                    onClick={toggleDropdown}
                  >
                    Services{" "}
                    <svg
                      className="w-4 h-4 ml-2 mt-1"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="dropdownHover"
                    className={`z-20 bg-[#ffffff] ${
                      isDropdownOpen ? "" : "hidden"
                    } absolute top-0 right-0 mt-12`}
                    style={{ right: "-60px" }} // Adjust the value as needed
                  >
                    <ul
                      className="py-2 bg-white rounded shadow"
                      aria-labelledby="dropdownHoverButton"
                      style={{ minWidth: "max-content" }}
                    >
                      <li className="py-2 px-4 capitalize">
                        <a
                          href="#"
                          className="hover:text-white hover:bg-black font-semibold flex items-center hover:text-damo-primary"
                        >
                          <MdDesignServices className="mr-2" /> Web Design
                        </a>
                      </li>
                      <li className="py-2 px-4 capitalize">
                        <a
                          href="#"
                          className="hover:text-white hover:bg-black font-semibold flex items-center hover:text-damo-primary"
                        >
                          <MdDesignServices className="mr-2" /> Web Re-Design
                        </a>
                      </li>
                      <li className="py-2 px-4 capitalize">
                        <a
                          href="#"
                          className="hover:text-white hover:bg-black font-semibold flex items-center hover:text-damo-primary"
                        >
                          <MdDesignServices className="mr-2" /> Web Development
                        </a>
                      </li>
                      <li className="py-2 px-4 capitalize">
                        <a
                          href="#"
                          className="hover:text-white hover:bg-black font-semibold flex items-center hover:text-damo-primary"
                        >
                          <MdDesignServices className="mr-2" /> Web Maintenance
                        </a>
                      </li>
                      <li className="py-2 px-4 capitalize">
                        <a
                          href="#"
                          className="hover:text-white hover:bg-black font-semibold flex items-center hover:text-damo-primary"
                        >
                          <MdDesignServices className="mr-2" /> SEO
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="px-10 py-5 capitalize">
                <a href="#" className="hover:text-damo-primary font-semibold">
                  Portfolio
                </a>
              </li>
              <li className="px-10 py-5 capitalize">
                <a href="#" className="hover:text-damo-primary font-semibold">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
        {width <= 1280 && (
          <ul className="flex">
            <li className="px-10 py-5 capitalize">
              <a href="#">Test</a>
            </li>
            <li className="px-10 py-5 capitalize">
              <a href="#">Test</a>
            </li>
            <li className="px-10 py-5 capitalize">
              <a href="#">Test</a>
            </li>
            <li className="px-10 py-5 capitalize">
              <a href="#">Test</a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
