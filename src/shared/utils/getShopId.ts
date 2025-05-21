import Cookies from "js-cookie";

export async function getShopId(): Promise<string | undefined> {
  if (typeof window == "undefined") {
    const { cookies } = await import("next/headers");
    return (await cookies()).get("shopId")?.value;
  } else {
    return Cookies.get("shopId");
  }
}