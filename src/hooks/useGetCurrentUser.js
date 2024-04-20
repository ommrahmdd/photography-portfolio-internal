import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

export function useGetCurrentUser() {
  const { user } = useUser();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (user) {
      const userOrg = user?.organizationMemberships[0];
      setCurrentUser({
        role: userOrg?.role,
        permissions: userOrg?.permissions,
        user: user,
      });
    }
  }, [user]);

  return {
    role: currentUser?.role,
    permissions: currentUser?.permissions,
    user: currentUser?.user,
  };
}
