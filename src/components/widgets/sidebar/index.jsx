import { Link } from "react-router-dom";

import CancelIcon from "../../icons/cancel";

export default function Sidebar({ onClose }) {
  return (
    <section className="fixed top-0 right-0 h-screen bg-primary-yellow ">
      <div className=" bg-gradient-to-l from-gray-dark1 to-gray-dark3 w-64 h-[100vh] items-end">
        <div className="flex flex-col gap-y-8 text-primary-white font-mono font-bold mx-auto ">
          <button onClick={onClose} className="py-4 self-end px-[5%]">
            <CancelIcon />
          </button>
          <Link className="self-center  hover:border-b-2 border-primary-yellow active:border-b-2 active:text-yellow-300">
            HOME
          </Link>
          <Link className="self-center  hover:border-b-2 border-primary-yellow active:border-b-2 active:text-yellow-300">
            ABOUT
          </Link>
          <Link className="self-center  hover:border-b-2 border-primary-yellow active:border-b-2 active:text-yellow-300">
            SERVICE
          </Link>
          <Link className="self-center  hover:border-b-2 border-primary-yellow active:border-b-2 active:text-yellow-300">
            PORTFOLIO
          </Link>
          <Link className="self-center  hover:border-b-2 border-primary-yellow active:border-b-2 active:text-yellow-300">
            TEAM
          </Link>
          <Link className="self-center  hover:border-b-2 border-primary-yellow active:border-b-2 active:text-yellow-300">
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
}
