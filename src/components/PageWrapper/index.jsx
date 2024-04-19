import { useRouterState } from "@tanstack/react-router";
import React from "react";
import { Cirecles } from "../../assets/images";
import { useUser } from "@clerk/clerk-react";
import CustomSignIn from "../CustomSignIn";

export default function PageWrapper({ children }) {
  const router = useRouterState();
  const { user } = useUser();
  return router.location.pathname.split("/")[1] === "" ? (
    <Template>{children}</Template>
  ) : user ? (
    <Template>{children}</Template>
  ) : (
    <CustomSignIn />
  );
}

const Template = ({ children }) => {
  const router = useRouterState();
  return (
    <div className="relative p-6 bg-dark-08 min-h-screen text-cGrey-12">
      {/* Page Title */}
      <div className="mb-10 ">
        <h2 className="text-6xl text-cGrey-30  uppercase md:text-9xl">
          {router.location.pathname.split("/")[1] || "Home"}
        </h2>
        <div className="h-1 w-20 rounded-3xl bg-cGrey-06 mt-4"></div>
      </div>

      {children}

      {/* Page background */}
      <div className="absolute bottom-0 right-0 opacity-15 ">
        <Cirecles />
      </div>
    </div>
  );
};
