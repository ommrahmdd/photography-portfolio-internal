import { useUser } from "@clerk/clerk-react";
import NotFound from "../../pages/static/NotFound";

export default function ValidateUnAuth({ children }) {
  const { user } = useUser();

  if (user) return <NotFound />;

  return children;
}
