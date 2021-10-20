import { ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";
import botella from '../../assets/images/botella.png'
import bebida from '../../assets/images/bebida.png'
const Body = () => {
  return (
    <div className="container flex items-center justify-between fixed">
      <div className="mt-48 ml-16">
        <h1 className="font-sans font-extrabold text-6xl"> Vive la vida </h1>
        <h1 className="font-sans font-extrabold text-6xl">
          Disfruta tu bebida
        </h1>
        <div className="w-[600px] mt-7">
          <p className="font-serif font-light text-[21px] mr-10">
            Disfruta de cada uno de nuestros destilados para cada ocasión, que
            tenemos para ti.
          </p>
        </div>
      
        <button class="bg-gray-900 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-full inline-flex items-center h-20 w-[300px] mt-10 ">
          <span className='text-white font-serif text-xl mr-14 ml-5'>Ver productos </span>
          <ChevronRightIcon className="h-5 w-5 text-white" />
        </button>
      </div>
      <div className='flex justify-center'>
       <img src={botella} alt='botella' className='hover:animate-pulse '/>
       <img src={bebida} alt='bebida' className='hover:animate-pulse  w-[214px] h-[263px] self-end mb-5'/>

      </div>
    </div>
  );
};

export default Body;
