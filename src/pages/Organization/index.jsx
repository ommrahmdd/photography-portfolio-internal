import { OrganizationProfile } from "@clerk/clerk-react";

import { dark } from "@clerk/themes";

import "./styles.scss";

export default function Organization() {
  return (
    <div className="p-4">
      <OrganizationProfile
        appearance={{
          baseTheme: dark,
          elements: {
            profilePage__organizationSettings: {
              visibility: "hidden",
              display: "none",
            },
          },
        }}
      />
    </div>
  );
}
