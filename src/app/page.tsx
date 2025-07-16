import CardContainer from "@/components/layout/CardContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-start p-10 min-h-screen bg-[#F8FAFC] ">
      <div className="flex flex-col bg-[#3A81F5] text-white w-full p-6 rounded-lg shadow-lg">
        <div className="justify-start text-white text-2xl font-bold font-['Inter'] leading-loose">
          Chào mừng đến với hệ thống quản lý điểm thi THPT
        </div>
        <div className="justify-start text-blue-200 text-lg font-normal font-['Inter'] leading-7">
          Kỳ thi Trung học phổ thông Quốc gia năm 2024
        </div>
      </div>

      <CardContainer>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Thông tin thí sinh
        </h1>

        <span className="text-lg font-semibold text-gray-700">
          Số báo danh :{" "}
        </span>
        <div className="flex items-start gap-4 mt-2 mb-4 w-full max-w-md">
          <Input
            type="text"
            placeholder="Nhập số báo danh"
            className="flex-1"
          />
          <Button className="whitespace-nowrap">Tra cứu điểm</Button>
        </div>
      </CardContainer>
    </div>
  );
}
