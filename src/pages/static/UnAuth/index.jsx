import React from "react";
import UnAuthIcon from "../../../assets/icons/UnAuthIcon";
import PrimaryBtn from "../../../components/custom-buttons/PrimaryBtn";

export default function UnAuth() {
  return (
    <div className="w-full h-full flex flex-col bg-dark-08 justify-center items-center">
      <UnAuthIcon />
      <h4 className="text-cGrey-15 my-10 capitalize font-light text-2xl md:text-5xl lg:text-7xl">
        Un authorized user
      </h4>
      <PrimaryBtn asLink label="Go To Home" to="/" />
    </div>
  );
}
