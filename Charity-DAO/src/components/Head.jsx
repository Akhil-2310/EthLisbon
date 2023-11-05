import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { truncate, useGlobalState } from "../store";
import { connectWallet } from "../Blockchain.services";

const Head = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
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
                {connectedAccount ? (
                  <button
                    className="px-4 py-2.5 bg-blue-600 text-white
                  font-medium text-xs leading-tight uppercase
                  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none
                  focus:ring-0 active:bg-blue-800 active:shadow-lg
                  transition duration-150 ease-in-out dark:text-blue-500
                  dark:border dark:border-blue-500 dark:bg-transparent"
                  >
                    {truncate(connectedAccount, 4, 4, 11)}
                  </button>
                ) : (
                  <button
                    className="px-4 py-2.5 bg-blue-600 text-white
                  font-medium text-xs leading-tight uppercase
                  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none
                  focus:ring-0 active:bg-blue-800 active:shadow-lg
                  transition duration-150 ease-in-out dark:text-blue-500
                  dark:border dark:border-blue-500 dark:bg-transparent"
                    onClick={connectWallet}
                  >
                    <w3m-button />
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Head;
