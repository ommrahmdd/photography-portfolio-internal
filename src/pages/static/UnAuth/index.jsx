import React from "react";
import UnAuthIcon from "../../../assets/icons/UnAuthIcon";
import PrimaryBtn from "../../../components/custom-buttons/PrimaryBtn";

export default function UnAuth() {
  return (
    <div className="w-full h-screen flex flex-col bg-dark-08 justify-center items-center">
      <UnAuthIcon />
      <h4 className="text-cGrey-15 my-7 mb-10  capitalize font-light text-2xl md:text-5xl lg:text-7xl">
        Un authorized user
      </h4>
      <p className="text-lg text-cGrey-12 w-1/2 my-9 text-center lg:text-xl">
        Unauthorized access detected. Please refrain from attempting to access
        this resource. If you require access, please contact the appropriate
        administrator for assistance. Thank you for your cooperation.
      </p>
      <PrimaryBtn asLink label="Go To Home" to="/" />
    </div>
  );
}
