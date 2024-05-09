import React from "react";
import PrimaryBtn from "../components/custom-buttons/PrimaryBtn";

export default function PageHeader({ title, btn, btnHandler, btnLabel }) {
  return (
    <div className="flex justify-between items-center pb-5 border-b-2 border-opacity-35 border-cOrange">
      <h6 className="text-2xl font-light capitalize lg:text-5xl">{title}</h6>
      {btn && <PrimaryBtn label={btnLabel} onClick={btnHandler} />}
    </div>
  );
}
