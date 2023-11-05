import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 dark:text-blue-500">
        <nav className="navbar navbar-expand-lg shadow-md py-2 relative flex items-center w-full justify-between bg-white dark:bg-[-212936]">
          <div className="px-6 w-full flex flex-wrap items-center justify-between ">
            <div className="grow flex justify-between items-center p-2">
              <Link
                className="flex justify-start items-center space-x-3"
                href="#"
              >
                <FaUserSecret size={25} />
                <span className="invisible md:visible">Charity DAO</span>
              </Link>

              <div className="flex justify-center items-center space-x-5">
                <MdLightMode className="cursor-pointer" size={25} />
                <button className="px-4 py-2.5 bg-blue-600 uppercase rounded-full hover:bg-blue-900 text-white">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Head;
