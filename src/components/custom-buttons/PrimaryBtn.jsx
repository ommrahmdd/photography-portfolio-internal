import { Link } from "@tanstack/react-router";
import { Button } from "antd";
import React from "react";

export default function PrimaryBtn({ asLink, label, to, onClick }) {
  return asLink ? (
    <Link
      to={to}
      className="bg-transparent  !text-cGrey-08 !border-cGrey-08 capitalize !rounded-2xl px-16 transition-all duration-200 ease-in-out hover:!bg-dark-06 hover:!text-white hover:!border-dark-30"
    >
      {label}
    </Link>
  ) : (
    <Button
      onClick={onClick}
      className="bg-transparent  text-cGrey-08 border-cGrey-08 capitalize rounded-2xl px-16 transition-all duration-200 ease-in-out hover:!bg-dark-06 hover:!text-white hover:!border-dark-30"
    >
      {label}
    </Button>
  );
}
