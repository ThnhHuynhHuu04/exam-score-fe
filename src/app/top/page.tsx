import React from "react";
import PageContainer from "@/components/layout/PageContainer";
import CardContainer from "@/components/layout/CardContainer";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <PageContainer>
      <CardContainer>
        <h1 className="text-2xl font-bold mb-4">
          Danh sách những học sinh xuất sắc nhất
        </h1>
        <div className="flex items-center gap-4 mb-6">
            <label>
                Số lượng:
                <select className="ml-2 border rounded px-2 py-1 w-24" defaultValue={10}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                    <option value={200}>200</option>
                    <option value={500}>500</option>
                    <option value={1000}>1000</option>
                </select>
            </label>
            <label>
                Khối:
                <select className="ml-2 border rounded px-2 py-1">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
            </label>
            <Button className="whitespace-nowrap">
                Tìm kiếm
            </Button>
        </div>
      </CardContainer>
      <CardContainer>
        <h2 className="text-xl font-bold mb-4">Kết quả tìm kiếm</h2>
        {/* Hiển thị kết quả tìm kiếm ở đây */}
        <p>Không tìm thấy kết quả nào.</p>
      </CardContainer>
    </PageContainer>
  );
}
