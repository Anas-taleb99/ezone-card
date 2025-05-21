"use client";
import React from "react";

export function SelectProductOption({ option }: { option: TProductOptions }) {
  const [selectedItemId, setSelectedItemId] = React.useState<number>();

  return (
    <div className="mb-2">
      <label className="block font-semibold mb-4 text-base">
        {option.CatName}
      </label>
      <div className="flex gap-2 flex-wrap">
        {option.Items.map((op) => (
          <div
            key={op.Id}
            className={`rounded-full ${
              selectedItemId === op.Id
                ? "p-0.5 flex justify-center items-center border-2 border-dashed border-red-800"
                : ""
            }`}
          >
            <button
              key={op.Id}
              className="border border-gray-600 rounded-full  cursor-pointer h-[40px] w-[40px] text-center hover:border-gray-500"
              style={{ backgroundColor: op.BcolorHex }} //
              onClick={() => setSelectedItemId(op.Id)}
            >
              {op.BcolorHex ? "" : op.ItemName}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
