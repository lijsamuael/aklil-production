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
    <nav className=" bg-gray-dark3 font-semibold bg-transparent text-white py-8 h-20 px-[5%] font-mono">
      <div className="flex justify-between lg:justify-around items-start">
        <div className="text-primary-yellow">
          <Link to="/" className="flex items-center">
            {" "}
            <img src="/images/logoo.png" alt="" className="w-12 " />
            <img src="/images/logoon.png" alt="" className="w-32 " />
          </Link>
        </div>
        <div className="hidden lg:flex gap-x-8">
          <Link
            to="/"
            className="hover:border-b-2 border-primary-yellow primary-yellow active:border-b-2 active:text-yellow-300"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="hover:border-b-2 border-primary-yellow active:border-b-2 active:text-yellow-300"
          >
            ABOUT
          </Link>
          <Link
            to="/service"
            className="hover:border-b-2 border-primary-yellow active:border-b-2 active:text-yellow-300"
          >
            SERVICES
          </Link>
          <Link
            to="/portfolio"
            className="hover:border-b-2 border-primary-yellow active:border-b-2 active:text-yellow-300"
          >
            PORTFOLIO
          </Link>
          <Link
            to="/team"
            className="hover:border-b-2 border-primary-yellow active:border-b-2 active:text-yellow-300"
          >
            TEAM
          </Link>
          <Link
            to="/contact"
            className="hover:border-b-2 border-primary-yellow active:border-b-2 active:text-yellow-300"
          >
            CONTACT US
          </Link>
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
