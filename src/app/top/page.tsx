import { Suspense } from "react";
import TopPageClient from "./TopPageClient";

export default function TopPage() {
  return (
    <Suspense fallback={<div>Đang tải trang...</div>}>
      <TopPageClient />
    </Suspense>
  );
}
