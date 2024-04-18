import { useRouterState } from "@tanstack/react-router";
import React from "react";
import { Cirecles } from "../assets/images";

export default function PageWrapper({ children }) {
  const router = useRouterState();

  console.log("qqqqqqq", router);
  return (
    <div className="p-6 bg-dark-08 min-h-screen text-cGrey-12">
      {/* Page Title */}
      <div className="mb-10 ">
        <h2 className="text-6xl text-cGrey-30  uppercase md:text-9xl">
          {router.location.pathname.split("/")[1] || "Home"}
        </h2>
        <div className="h-1 w-20 rounded-3xl bg-cGrey-06 mt-4"></div>
      </div>
      {children}
      {/* Page background */}
      {/* <img src={<Cirecles />} alt="" /> */}
    </div>
  );
}
