import { Link } from "@tanstack/react-router";

import logo from "./../../assets/images/logo.png";
import logoMd from "./../../assets/images/logo-md.png";

const sizeMapper = {
  lg: {
    text: "text-5xl",
    img: logoMd,
  },
  md: {
    text: "text-3xl",
    img: logoMd,
  },
  sm: {
    text: "text-xl",
    img: logo,
  },
};

export default function TextLogo({ size = "sm" }) {
  return (
    <Link
      to="/"
      className="text-cGrey-20 text-2xl uppercase flex space-x-1 justify-center items-center hover:text-cGrey-20 md:text-3xl lg:text-4xl"
    >
      <img src={sizeMapper[size].img} alt="logo" />
      <span className={`font-extralight ${sizeMapper[size].text}`}>Demian</span>
    </Link>
  );
}
