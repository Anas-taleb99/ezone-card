"use client";

import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getrequestShopId } from "@/shared/apis/shop.api";
import { useCookies } from "next-client-cookies";
import Link from "next/link";

const ShopContext = React.createContext<TShop | undefined>(undefined);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const cookie = useCookies();

  const { data } = useQuery({
    queryKey: ["shop"],
    queryFn: () => getrequestShopId(window.location.origin),
  });

  useEffect(() => {
    if (!data?.data.Data.Id) return;
    cookie.set("shopId", data.data.Data.Id.toString());
  }, [data?.data.Data.Id]);

  return (
    <ShopContext.Provider value={data?.data.Data}>
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => React.useContext(ShopContext);

export const ShopLink = () => {
  const shop = useShop();

  if (!shop) return null;
  return (
    <Link href="/products/5516" className="underline">
      {shop.Name}
    </Link>
  );
};
