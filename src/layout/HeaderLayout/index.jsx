import { Link, redirect } from "@tanstack/react-router";

import {
  SignInButton,
  SignOutButton,
  useAuth,
  useUser,
} from "@clerk/clerk-react";

import { Header } from "antd/es/layout/layout";

import PrimaryBtn from "../../components/custom-buttons/PrimaryBtn";

export default function HeaderLayout() {
  const { isSignedIn } = useUser();

  return (
    <Header className="flex justify-between items-center py-14 bg-dark-08 border-b-2 border-dark-25">
      <Link
        to="/"
        className="text-cGrey-20 text-2xl uppercase hover:text-cGrey-20 md:text-3xl lg:text-4xl"
      >
        Damien
      </Link>
      {isSignedIn ? (
        <PrimaryBtn label={<SignOutButton />} />
      ) : (
        <PrimaryBtn label="SignIn" asLink to={"/signIn"} />
      )}
    </Header>
  );
}
