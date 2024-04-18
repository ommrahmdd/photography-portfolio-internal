import { Link } from "@tanstack/react-router";
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";

export default function HeaderLayout() {
  return (
    <Header className="flex justify-between items-center py-14 bg-dark-08 border-b-2 border-dark-25">
      <Link
        to="/"
        className="text-cGrey-20 text-2xl uppercase hover:text-cGrey-20 md:text-3xl lg:text-4xl"
      >
        Damien
      </Link>
      <Button className="bg-transparent  text-cGrey-08 border-cGrey-08 capitalize rounded-2xl px-16 transition-all duration-200 ease-in-out hover:!bg-dark-06 hover:!text-white hover:!border-dark-30">
        Login
      </Button>
    </Header>
  );
}
