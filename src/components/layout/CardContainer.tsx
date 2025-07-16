import React from "react";

export default function CardContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white w-full p-6 mt-6 rounded-lg shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
