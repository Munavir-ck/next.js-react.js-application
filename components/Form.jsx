import React from "react";
import { FcGoogle } from "react-icons/fc";
import CustomButton from "./CustomButton";

function Form() {
  return (
    <div className="flex w-3/4 justify-center py-8 items-center md:w-1/2  ">
      <form className=" border-2 border-violet-900  bg-transparent p-5  rounded-lg lg:w-2/4 md:w-3/4 ">

      {/* <div className="flex flex-col md:flex-row md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto md:justify-center md:items-center md:h-screen py-10">
//       <form className="bg-violet-800 border-2 border-violet-950 opacity-70 p-5 rounded-lg md:w-3/4"> */}
      <button
          type="submit"
          className="flex  w-full bg-indigo-600  py-2 rounded-2xl text-white font-semibold mb-2 justify-center gap-5"
        >
          <div className="bg-white rounded-md mt-1 ">
            <FcGoogle size={25} />{" "}
          </div>{" "}
          <span className="mt-1">Continue with Google</span>
        </button>
        <div className="flex gap-2 w-full mt-6">
          <div className="flex items-center border-2 border-gray-600  rounded-2xl mb-4  w-2/4">
            <input
              className="inputform"
              type="text"
              name=""
              id=""
              placeholder="First name"
            />
          </div>
          <div className=" border-2 py-2 px-3 rounded-2xl border-gray-600 mb-4 w-2/4">
            <input
              className="inputform"
              type="text"
              name=""
              id=""
              placeholder="Last name"
            />
          </div>
        </div>

        <div className="flex items-center border-2 py-2 px-3 border-gray-600 rounded-2xl mb-4">
          <input
            className="inputform "
            type="text"
            name=""
            id=""
            placeholder="Email Address"
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3  border-gray-600 rounded-2xl ">
          <input
            className="inputform"
            type="text"
            name=""
            id=""
            placeholder="Password"
          />
        </div>
        <span className="text-sm m-2 hover:text-blue-500 cursor-pointer">
          Forgot Password ?
        </span>
        <CustomButton style={"w-full mt-4 py-2 text-white font-semibold mb-2"} title={"Signup as User"}/>
        <span className="text-sm m-2 hover:text-blue-500 cursor-pointer">
          Forgot Password ? event compiled client and server successfully
        </span>

        <CustomButton style={"w-full mt-4 py-2 text-white font-semibold mb-2"} title={"Signup as Creator"}/>
        
        <span className="text-sm m-2 hover:text-blue-500 cursor-pointer">
          event compiled client and server
        </span>
      </form>
    </div>
  );
}

export default Form;

// function Form() {
//   return (
//     <div className="flex flex-col md:flex-row md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto md:justify-center md:items-center md:h-screen py-10">
//       <form className="bg-violet-800 border-2 border-violet-950 opacity-70 p-5 rounded-lg md:w-3/4">
//         {/* ... (rest of your form content) */}
//       </form>
//     </div>
//   );
// }

// export default Form;



