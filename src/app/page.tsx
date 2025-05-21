import { ShopLink } from "@/stores/ShopProvider";

export default function Home() {
  return (
    <div className="grid place-items-center h-screen w-full">
      <h1 className="text-4xl">
        Welcom To You Shop, <ShopLink />
      </h1>
    </div>
  );
}
