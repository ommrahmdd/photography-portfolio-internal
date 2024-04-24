import { Link } from "@tanstack/react-router";
import { Button } from "antd";

export default function SecondaryBtn({ asLink, label, to, onClick }) {
  return asLink ? (
    <Link
      to={to}
      className="h-auto px-12 py-2 font-semibold text-cOrange border border-cOrange rounded-2xl !bg-transparent transition-all ease-in-out duration-200 capitalize hover:!border-none hover:!text-cGrey-15  hover:opacity-65"
    >
      {label}
    </Link>
  ) : (
    <Button
      onClick={onClick}
      size="middle"
      className="h-auto px-12 py-2 font-semibold text-cOrange border !border-cOrange rounded-2xl !bg-transparent transition-all ease-in-out duration-200 capitalize hover:bg-cOrange hover:!text-cGrey-15  hover:opacity-65"
    >
      {label}
    </Button>
  );
}
