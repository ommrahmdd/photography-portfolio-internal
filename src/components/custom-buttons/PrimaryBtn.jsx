import { Link } from "@tanstack/react-router";
import { Button } from "antd";
import React from "react";

export default function PrimaryBtn({
  asLink,
  label,
  to,
  onClick,
  isDisabled = false,
  type = "button",
}) {
  return asLink ? (
    <Link
      to={to}
      className="h-auto px-12 py-2 font-semibold text-cGrey-12 border-none rounded-2xl !bg-cOrange transition-all ease-in-out duration-200 capitalize hover:!border-none hover:!text-cGrey-12  hover:opacity-65"
    >
      {label}
    </Link>
  ) : (
    <Button
      onClick={onClick}
      size="middle"
      disabled={isDisabled}
      htmlType={type}
      className="h-auto px-12 py-2 font-bold text-cGrey-12 border-none rounded-2xl !bg-cOrange transition-all ease-in-out duration-200 capitalize hover:!border-none hover:!text-cGrey-12  hover:opacity-65"
    >
      {label}
    </Button>
  );
}
