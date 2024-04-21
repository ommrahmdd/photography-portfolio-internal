import { Link } from "@tanstack/react-router";

import { UserButton, useUser } from "@clerk/clerk-react";

import { Header } from "antd/es/layout/layout";

import PrimaryBtn from "../../components/custom-buttons/PrimaryBtn";

import logo from "./../../assets/images/logo.png";

import "./style.scss";
import TextLogo from "../../components/TextLogo";

export default function HeaderLayout() {
  const { isSignedIn, user } = useUser();

  return (
    <Header className="flex justify-between items-center py-14 bg-dark-08 border-b-2 border-dark-25">
      <TextLogo />
      {isSignedIn ? (
        <div className="flex justify-center items-center gap-2">
          <p className="text-cGrey-15 hidden md:block">
            <span className="font-light">Welcome</span>{" "}
            <span className="font-bold">{user.fullName}</span>
          </p>
          <UserButton
            appearance={{
              elements: {
                profileSection__danger: {
                  display: "none",
                  visibility: "hidden",
                },
              },
            }}
            afterSignOutUrl="/"
          />
        </div>
      ) : (
        <PrimaryBtn label="SignIn" asLink to={"/signIn"} />
      )}
    </Header>
  );
}
