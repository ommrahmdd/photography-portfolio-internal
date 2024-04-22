import { useUser } from "@clerk/clerk-react";

const PERMISSINOS = {
  read: "org:crud:read",
  create: "org:crud:create",
  update: "org:crud:update",
  delete: "org:crud:delete",
  manage: "org:sys_domains:manage",
};

export function usePermissions() {
  const { user } = useUser();

  const isManager = !!user?.organizationMemberships[0]?.permissions?.find(
    (el) => el.includes(PERMISSINOS.manage)
  );

  const canRead =
    !!user?.organizationMemberships[0]?.permissions?.find((el) =>
      el.includes(PERMISSINOS.read)
    ) || isManager;

  const canCreate =
    !!user?.organizationMemberships[0]?.permissions?.find((el) =>
      el.includes(PERMISSINOS.create)
    ) || isManager;

  const canUpdate =
    !!user?.organizationMemberships[0]?.permissions?.find((el) =>
      el.includes(PERMISSINOS.update)
    ) || isManager;

  return { isManager, canRead, canCreate, canUpdate };
}
