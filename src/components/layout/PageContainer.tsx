import React from "react";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start justify-start p-10 min-h-screen bg-[#F8FAFC] ">
      {children}
    </div>
  );
}
