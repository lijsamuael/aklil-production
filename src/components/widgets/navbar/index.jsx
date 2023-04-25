import { Link } from "react-router-dom";
import { useState } from "react";

import YellowMenuIcon from "../../icons/menu";
import Sidebar from "../sidebar";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="fixed top-0 z-10000 w-full  bg-gradient-to-r from-primary-white to-primary-yellow   text-black  py-4 h-20 px-[%] font-mono shadow-xl  border-gray-light4">
      <div className="flex justify-between max-w-[1500px] mx-auto items-start">
        <div className="text-primary-yellow">
          <Link to="/" className="flex items-center gap-x-4">
            {" "}
            <img src="/images/logoblack.png" alt="" className="w-12  " />
            <img src="/images/logoon.png" alt="" className="w-48  " />
          </Link>
        </div>
        <div className="hidden lg:flex gap-x-8 items-center">
          <Link
            to="/"
            className="hover:border-b-2 border-primary-yellow primary-yellow active:border-b-2 active:text-yellow-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:border-b-2 border-primary-yellow active:border-b-2 active:text-yellow-300"
          >
            About
          </Link>
          <Link
            to="/service"
            className="hover:border-b-2 border-primary-yellow active:border-b-2 active:text-yellow-300"
          >
            Service
          </Link>
          <Link
            to="/portfolio"
            className="hover:border-b-2 border-primary-yellow active:border-b-2 active:text-yellow-300"
          >
            Portfolio
          </Link>
          <Link
            to="/team"
            className="hover:border-b-2 border-primary-yellow active:border-b-2 active:text-yellow-300"
          >
            Team
          </Link>
          <Link
            to="/contact"
            className="hover:border-b-2 border-primary-yellow active:border-b-2 active:text-yellow-300 whitespace-nowrap"
          >
            Contact
          </Link>
          <div className="w-1/4 flex justify-end">
            <div className="group relative">
              <div
                className="flex menu-overlay items-center gap-x-2 lg:gap-x-4 cursor-pointer"
                id="mouse-lover"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                <div className="relative w-11 md:w-12 h-11 md:h-14 border-secondary-700 bottom-1 rounded-full cursor-pointer select-none duration-500">
                  <div className="hover:animate-bounce icon-menu w-11 md:w-14 h-11 md:h-14 flex z-10 items-center justify-center rounded-full absolute text-secondary-700 group-hover:text-primary-700 group-active:text-primary-700 p-2 md:p-2.5 duration-500 border-secondary-700 border-2">
                    <svg
                      width="64px"
                      height="64px"
                      viewBox="0 0 24.00 24.00"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#000000"
                      stroke-width="0.00024000000000000003"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12.28 14.96C12.13 15.01 11.88 15.01 11.72 14.96C10.42 14.51 7.5 12.66 7.5 9.51C7.51 8.12 8.62 7 10 7C10.82 7 11.54 7.39 12 8C12.46 7.39 13.18 7 14 7C15.38 7 16.5 8.12 16.5 9.51C16.49 12.66 13.58 14.51 12.28 14.96Z"
                          fill="#000000"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <div className="bg-secondary-700 w-11 md:w-14 h-11 md:h-14 z-0 flex items-center justify-center rounded-full absolute group-hover:scale-100 group-active:scale-100 scale-0 duration-500 "></div>
                </div>
                <p className="text-xl hidden sm:flex select-none text-center">
                  Subscribe
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex lg:hidden">
          <button onClick={openModal}>
            <YellowMenuIcon className="text-white" />
          </button>
        </div>
      </div>
      {isModalOpen && <Sidebar onClose={closeModal} />}
    </nav>
  );
}
