import "./App.scss";

import { QueryClientProvider, QueryClient } from "react-query";

import AppRoutes from "./AppRoutes";
import { ClerkProvider } from "@clerk/clerk-react";

function App() {
  const client = new QueryClient();

  const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        elements: {
          footer: {
            display: "none",
            visibility: "hidden",
          },
        },
      }}
    >
      <QueryClientProvider client={client}>
        <AppRoutes />
      </QueryClientProvider>
    </ClerkProvider>
  );
}

export default App;
