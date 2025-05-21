import React from "react";
import { ShopProvider } from "./ShopProvider";
import { QueryProvider } from "./QueryProvider";
import { CookiesProvider } from "next-client-cookies/server";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <CookiesProvider>
        <ShopProvider>{children}</ShopProvider>
      </CookiesProvider>
    </QueryProvider>
  );
}

export default Providers;
