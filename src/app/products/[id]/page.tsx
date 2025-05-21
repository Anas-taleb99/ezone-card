import { getProductDetail } from "@/shared/apis/product.api";
import { ProductDetailsWidget } from "@/widgets/product";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<Record<string, string>>;
}) {

  const { id } = await params;

  const res = await getProductDetail(id);

  if (res == null) return <div>Product Not Found</div>;
  return (
    <div className="flex justify-center container lg:w-6xl mx-auto mt-10 p-4">
      <ProductDetailsWidget data={res.Data.Product} />
    </div>
  );
}
