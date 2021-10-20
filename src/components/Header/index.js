import React from "react";
const Header = () => {
  return (
    <nav className="md:flex items-center justify-between flex-wrap  p-6">
      <h1 className="font-body text-3xl text-black mr-12"> Tekila </h1>

      <div className="flex md:hidden">
        <button className="flex items-center px-3 py-2 border rounded  cursor-pointer">
          <svg
            class="fill-current h-4 w-4"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="hidden lg:flex items-center justify-items-center space-x-10">
        <a href="google.com" class="py-4 px-2  text-black  font-serif ">
          Acerca de
        </a>
        <a
          href="google.com"
          class="py-4 px-2 text-black font-serif hover:text-green-500 transition duration-300"
        >
          Productos
        </a>
        <a
          href="google.com"
          class="py-4 px-2 text-black font-serif hover:text-green-500 transition duration-300"
        >
          Promociones

        </a>
        <a
          href="google.com"
          class="py-4 px-2 text-black font-serif hover:text-green-500 transition duration-300"
        >
          marcas internacionales
        </a>
        <a
          href="google.com"
          class="py-4 px-2 text-gray-500 font-serif hover:text-green-500 transition duration-300"
        >
          artesanales
        </a>
      </div>
      <div className="hidden lg:flex  items-center justify-center space-x-8 mr-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Header;
