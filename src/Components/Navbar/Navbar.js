import React from "react";
import Image from "../images/download.png";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-2xl  px-2 sm:px-4 py-4 ">
        <div className="container flex flex-wrap justify-around items-center mx-auto">
          <a href="Jungle" class="flex items-center">
            <img src={Image} class="mr-3 h-4 sm:h-16" alt="junglefood" />
            <span className="self-center text-xl  font-semibold whitespace-nowrap ">
              Kitchen Jungle
            </span>
          </a>
          <div className="flex items-center md:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="HOME"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="RECIPES"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  RECIPES
                </a>
              </li>
              <li>
                <a
                  href="SUBMIT"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-white  md:dark:hover:bg-transparent "
                >
                  SUBMIT RECIPE
                </a>
              </li>
              <li>
                <a
                  href="favorities"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-white   md:dark:hover:bg-transparent "
                >
                  FAVORITES
                </a>
              </li>
              <li>
                <a
                  //   href="contact"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-white  md:dark:hover:bg-transparent "
                >
                  CONTACT
                </a>
              </li>
              <a className="cursor-pointer hover:text-blue-400 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
