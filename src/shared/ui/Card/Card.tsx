import React from "react";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white p-6 border border-gray-200 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
