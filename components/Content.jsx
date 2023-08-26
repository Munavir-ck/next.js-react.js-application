

import React from "react";
import Boxes from "./Boxes";
import CustomButton from "./CustomButton";
import Image from "next/image";

function Content() {
  return (
    <>
      <div className="bg-black p-10 md:h-height-500 p-20">
        <h1 className="text-slate-200 text-5xl text-center font-bold">
          Elevate Your Craft
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 h-2/4">
          <Boxes
          
            title={"Unlock Your ABC Potential"}
            imageUrl={"/Assets/phone.webp"}
            description={
              "A sample paragraph text refers to a piece of text used as an example or demonstration of writing style, structure, or content. "
            }
          />
          <Boxes
           
            title={"Boost Your Sales With Build in Commerce"}
            imageUrl={"/Assets/list.png"}
            description={
              "It is often used in educational settings or for testing purposes. Here is an example of a sample paragraph text:"
            }
          />
        </div>

        <div className="grid grid-cols-1 h-auto overflow-hidden md:grid-cols-3 gap-6 md:gap-8 px-6 md:px-20  ">
          <Boxes
            style={"small"}
            title={"Save Time with Autaomation"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec urna vitae justo rutrum lacinia."
            }
            imageUrl={"/Assets/automation.png"}
          />
          <Boxes
            style={"small"}
            title={"Join Supportive Community"}
            description={
              " Curabitur varius, justo vel ultrices consequat, tortor tell"
            }
            imageUrl={"/Assets/community.png"}
          />
          <Boxes
            style={"small"}
            title={"Unlock Exclusive Pize and Oppertunities"}
            description={
              "Regarding links, I'm sorry, but as a text-based AI model,"
            }
            imageUrl={"/Assets/rewards.png"}
          />
        </div>
      </div>

     
   
      <div className="bg-content-bg bg-cover bg-center relative ">
  <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
  <div className="container mx-auto flex flex-col justify-center items-center px-4 py-56 md:px-8 lg:px-12 xl:px-16">
    <div className="text-center">
      <h1 className="text-3xl text-white font-semibold md:text-4xl lg:text-5xl mb-6 md:mb-8 lg:mb-10 ">
        Join us today and unleash your creativity!
      </h1>
      <CustomButton
        style={"mt-4 md:mt-6 py-3 px-6 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold"}
        title={"Join Now"}
      />
    </div>
  </div>
</div>

<div className="bg-list-bg bg-center bg-cover h-60 sm:h-96 md:h-height-300 bg-no-repeat opacity-40"></div>




    </>
  );
}

export default Content;


