import "./App.scss";

import { QueryClientProvider, QueryClient } from "react-query";

import AppLayout from "./layout/AppLayout";
import AppRoutes from "./AppRoutes";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
