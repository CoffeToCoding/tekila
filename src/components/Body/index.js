import React from "react";

const Body = () => {
  return (
    <div className="container flex items-center justify-between">
      <div className="mt-52 ml-16">
        <h1 className="font-sans font-extrabold text-6xl"> Vive la vida </h1>
        <h1 className="font-sans font-extrabold text-6xl">
          Disfruta tu bebida
        </h1>
        <div className='w-[600px] mt-7'>
        <p className='font-serif font-light text-[21px] mr-10'>
          Disfruta de cada uno de nuestros destilados para cada ocasión, que
          tenemos para ti.
        </p>
        </div>
        <button className='h-20 w-[311px] bg-gray-900 rounded-3xl text-white'> Ver productos </button>
      </div>
      <div className="mt-52 ml-16">
        <h1 className="font-sans font-extrabold text-6xl"> Vive la vida </h1>
        <h1 className="font-sans font-extrabold text-6xl">
          Disfruta tu bebida
        </h1>
      </div>
      
    </div>
  );
};

export default Body;
