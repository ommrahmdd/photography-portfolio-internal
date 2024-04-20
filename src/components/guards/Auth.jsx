import { useUser } from "@clerk/clerk-react";

import { ROLES } from "../../constants/Roles";

import UnAuth from "../../pages/static/UnAuth";
import { redirect } from "@tanstack/react-router";

export default function Auth({ children }) {
  const { user } = useUser();

  const userRole = user?.organizationMemberships[0]?.role;

  if (!user) {
    console.log("222222");
    redirect({
      to: "/unAuth",
    });
  } else {
    console.log("2222224444");
    if (user && userRole === ROLES.admin) return <>{children}</>;
    else return <UnAuth />;
  }
}
