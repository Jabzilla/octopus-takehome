import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";
import { BasketProvider } from "../context/BasketContext";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BasketProvider>
        <Component {...pageProps} />
      </BasketProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
