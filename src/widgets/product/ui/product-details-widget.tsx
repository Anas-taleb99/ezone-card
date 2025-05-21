import React from "react";
import { Card } from "@/shared/ui";
import {
  ArrowRight,
  Banknote,
  ChevronRight,
  ShoppingCart,
  Star,
} from "lucide-react";
import { ProductCarousel, SelectProductOption } from "@/features/product";
import { ProductDescription } from "@/entities/product";
import { priceLYDFormatter } from "@/shared/utils";

export function ProductDetailsWidget({ data }: { data: TProduct }) {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex gap-4">
        <button className="rounded-md border border-gray-300 bg-[#f3f4f6] py-1.5 px-2.5 font-bold">
          <ArrowRight color="#4b5563" strokeWidth={1} />
        </button>

        <h1 className="text-2xl font-bold text-[#6b7280]">{data.Name}</h1>
      </div>
      <Card className="w-full">
        <div className="flex lg:flex-row flex-col gap-4">
          {/* carousel */}
          <div className="w-full overflow-hidden lg:w-[377px] h-[377px] shrink-0 bg-gray-200 rounded-lg">
            {/* img be placed here */}
            <ProductCarousel images={data.ProductImages} />
          </div>

          {/* content  */}
          <div className="w-full flex flex-col gap-2">
            <div>
              <span
                className={`me-2 text-2xl font-bold ${
                  data.Caprice ? "line-through" : ""
                }`}
              >
                {/* originalPrice */}
                {priceLYDFormatter(data.SPrice)}
              </span>
              {data.Caprice ? (
                <span className="text-3xl font-bold text-red-600">
                  {priceLYDFormatter(data.Caprice)}
                </span>
              ) : null}
            </div>
            <div className="flex flex-col items-start gap-2 mb-5 text-sm text-gray-700">
              {/* reviews section */}
              <span className="text-gray-800 flex gap-2">
                <Star className="w-[18px] h-[18px]" />
                <Star className="w-[18px] h-[18px]" />
                <Star className="w-[18px] h-[18px]" />
                <Star className="w-[18px] h-[18px]" />
                <Star className="w-[18px] h-[18px]" />
              </span>

              <span>التقييمات (0) | كتابة تعليق</span>
            </div>
            <hr className="w-full border-gray-200" />

            {data.ProductOptions.map((option) => (
              <SelectProductOption key={option.OptId} option={option} />
            ))}
            <div className="flex flex-col gap-4">
              <button className="flex justify-center items-center gap-2 bg-gray-100 hover:bg-gray-200 border border-gray-400 py-2 px-4  rounded-sm shadow-sm font-semibold cursor-pointer">
                <span>أضف للسلة</span>
                <ShoppingCart />
              </button>
              <button className="flex justify-center items-center gap-2 bg-[#d44f41] border border-[#dc2626] py-2 px-4 text-white rounded-sm shadow-sm font-semibold hover:bg-[#b22923] cursor-pointer">
                <span>إشتري الآن</span>
                <Banknote />
              </button>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col gap-6">
          <h1 className="text-lg font-semibold">تفاصيل المنتج</h1>

          <ProductDescription description={data.Description} />
        </div>
      </Card>
    </div>
  );
}
