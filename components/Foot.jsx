import React from "react";
import CustomButton from "./CustomButton";

function Foot() {
  return (
    <div className="h-auto flex flex-col md:h-screen">
  <div className="bg-perfooter-bg relative h-auto text-center p-8 md:p-20 lg:p-32 gap-5 bg-cover bg-no-repeat bg-center md:h-3/4">
    <h1 className="text-slate-200 text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 md:mb-6">
      Ready To Cash Your Connections?
      <br />
      Join Our Affiliate Program
    </h1>
    <p className="text-gray-400 text-sm ml-auto mr-auto md:text-base  lg:text-lg max-w-md text-center mb-4 md:mb-10">
      Join Now and get{" "}
      <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text text-4xl md:text-5xl font-bold">
        7.5%
      </span>{" "}
      commission on all creator referrals for the entire year
    </p>
    <CustomButton style="py-2 text-white w-52 mb-2 md:mb-4" title="Earn Now" />

    <div className="absolute inset-0">
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black"></div>
    </div>
  </div>

  <div className="bg-black h-60 md:h-2/4 flex items-center justify-center">
    <div className="w-3/4 h-full  flex  flex-col justify-center items-center bg-footer-bg rounded-lg bg-cover bg-center bg-no-repeat md:h-52">
    <h1 className="text-slate-200 text-2xl md:text-2xl lg:text-3xl font-semibold mb-2">
      Join ABC Community
     
     
    </h1>
    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a maximus ipsum. Vestibulum convallis ante vehicula sem rutrum, a auctor metus sodales. </p>
    <CustomButton
        style={"mt-4 md:mt-6 py-3 px-6 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold"}
        title={"Learn More"}
      />
    </div>
  </div>
</div>

  
  
  
  );
}

export default Foot;

