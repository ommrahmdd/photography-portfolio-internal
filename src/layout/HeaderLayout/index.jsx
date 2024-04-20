import { Link } from "@tanstack/react-router";

import { UserButton, useUser } from "@clerk/clerk-react";

import { Header } from "antd/es/layout/layout";

import PrimaryBtn from "../../components/custom-buttons/PrimaryBtn";

import "./style.scss";

export default function HeaderLayout() {
  const { isSignedIn, user } = useUser();

  return (
    <Header className="flex justify-between items-center py-14 bg-dark-08 border-b-2 border-dark-25">
      <Link
        to="/"
        className="text-cGrey-20 text-2xl uppercase hover:text-cGrey-20 md:text-3xl lg:text-4xl"
      >
        Damien
      </Link>
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
