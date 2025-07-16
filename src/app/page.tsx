"use client";
import CardContainer from "@/components/layout/CardContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axiosInstance from "@/lib/axiosInstance";
import { useState } from "react";

type ScoreResult = {
  regNumber: string;
  math: number | null;
  literature: number | null;
  foreignLanguage: number | null;
  physics: number | null;
  chemistry: number | null;
  biology: number | null;
  history: number | null;
  geography: number | null;
  civicEducation: number | null;
  foreignId: string;
};

export default function Home() {
  const [candidateId, setCandidateId] = useState("");
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await axiosInstance.get(`/score/${candidateId}`);
      setResult(res.data);
    } catch (err) {
      setError("Not found or error occurred.");
    } finally {
      setLoading(false);
    }
  };


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
          Số báo danh:
        </span>
        <div className="flex items-start gap-4 mt-2 mb-4 w-full max-w-md">
          <Input
            type="text"
            placeholder="Nhập số báo danh"
            className="flex-1"
            value={candidateId}
            onChange={(e) => setCandidateId(e.target.value)}
          />
          <Button
            className="whitespace-nowrap"
            onClick={handleSearch}
            disabled={loading || !candidateId}
          >
            {loading ? "Đang tìm kiếm..." : "Tra cứu điểm"}
          </Button>
        </div>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </CardContainer>
      {result && (
        <CardContainer>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            📄 Bảng điểm THPT
          </h2>

          <table className="min-w-full text-sm text-center text-gray-800 border">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2 border">SBD</th>
                <th className="px-3 py-2 border">Toán</th>
                <th className="px-3 py-2 border">Ngữ văn</th>
                <th className="px-3 py-2 border">Ngoại ngữ</th>
                <th className="px-3 py-2 border">Vật lý</th>
                <th className="px-3 py-2 border">Hóa học</th>
                <th className="px-3 py-2 border">Sinh học</th>
                <th className="px-3 py-2 border">Lịch sử</th>
                <th className="px-3 py-2 border">Địa lý</th>
                <th className="px-3 py-2 border">GDCD</th>
                <th className="px-3 py-2 border">Mã Ngoại Ngữ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 border">{result.regNumber}</td>
                <td className="px-3 py-2 border">{result.math}</td>
                <td className="px-3 py-2 border">{result.literature}</td>
                <td className="px-3 py-2 border">{result.foreignLanguage}</td>
                <td className="px-3 py-2 border">{result.physics}</td>
                <td className="px-3 py-2 border">{result.chemistry}</td>
                <td className="px-3 py-2 border">{result.biology}</td>
                <td className="px-3 py-2 border">{result.history}</td>
                <td className="px-3 py-2 border">{result.geography}</td>
                <td className="px-3 py-2 border">{result.civicEducation}</td>
                <td className="px-3 py-2 border">{result.foreignId}</td>
              </tr>
            </tbody>
          </table>
        </CardContainer>
      )}
    </div>
  );
}
