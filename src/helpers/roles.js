export const filterRole = (user) => {
  return user?.organizationMemberships[0]?.role;
};
