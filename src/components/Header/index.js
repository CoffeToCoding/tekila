import React from "react";
import {
  ShoppingBagIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
const Header = () => {
  return (
    <nav className="md:flex items-center justify-between flex-wrap  p-6">
      <h1 className="font-body text-3xl text-black mr-12"> Tekila </h1>

      <div className="flex items-center justify-items-center space-x-10">
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
        <ShoppingBagIcon className="h-5 w-5 text-black" />
        <SearchIcon className="h-5 w-5 text-black" />
        <UserIcon className="h-5 w-5 text-black" />
      </div>
    </nav>
  );
};

export default Header;
