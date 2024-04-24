import { SignIn } from "@clerk/clerk-react";

import "./styles.scss";

export default function CustomSignIn() {
  return (
    <div className="w-full h-screen bg-dark-06 flex items-center justify-center">
      <SignIn afterSignInUrl="/" redirectUrl="/" />
    </div>
  );
}
