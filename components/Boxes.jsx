import React from "react";
import Image from 'next/image';

function Boxes({ style, title, description, imageUrl }) {

  return (
    <div className={`relative rounded-lg text-slate-50 text-center overflow-hidden p-5 ${style} `}>
        {style&&<div className=" md:mt-1 mr-5 flex justify-center">
        <Image
          src={imageUrl}
          alt="Description of the image"
          width={150}
          height={150}
          className="z-10 object-cover"
        />
      </div>}
      <div className="absolute inset-0 opacity-40 bg-fuchsia-950"></div>
      <h1 className={`text-center text-2xl text-slate-300 font-semibold ${style&&"mt-5"}`}>{title}</h1>
      <p className="mt-3">{description}</p>
      {style?<div></div>: <div className="relative mt-6 md:mt-10 mr-5 flex justify-center">
        <Image
          src={imageUrl}
          alt="Description of the image"
          width={300}
          height={500}
          className="z-10 object-cover"
        />
      </div>}
    </div>
  );
}

export default Boxes;

