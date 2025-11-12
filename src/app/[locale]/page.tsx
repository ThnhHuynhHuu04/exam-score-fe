"use client";
import CardContainer from "@/components/layout/CardContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axiosInstance from "@/lib/axiosInstance";
import { useState } from "react";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("page");
  const tCommon = useTranslations("app");
  const tSubjects = useTranslations("subjects");

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
      setError(tCommon("notFoundOrError") + err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start justify-start p-10 min-h-screen bg-[#F8FAFC] ">
      <div className="flex flex-col bg-[#3A81F5] text-white w-full p-6 rounded-lg shadow-lg">
        <div className="justify-start text-white text-2xl font-bold font-['Inter'] leading-loose">
          {tCommon("welcome")}
        </div>
        <div className="justify-start text-blue-200 text-lg font-normal font-['Inter'] leading-7">
          {tCommon("subtitle")}
        </div>
      </div>

      <CardContainer>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{t("title")}</h1>

        <span className="text-lg font-semibold text-gray-700">
          {t("candidateId")}:
        </span>
        <div className="flex items-start gap-4 mt-2 mb-4 w-full max-w-md">
          <Input
            type="text"
            placeholder={t("candidateIdPlaceholder")}
            className="flex-1"
            value={candidateId}
            onChange={(e) => setCandidateId(e.target.value)}
          />
          <Button
            className="whitespace-nowrap"
            onClick={handleSearch}
            disabled={loading || !candidateId}
          >
            {loading ? tCommon("searching") : t("searchButton")}
          </Button>
        </div>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </CardContainer>
      {result && (
        <CardContainer>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            {t("scoreTable")}
          </h2>

          <table className="min-w-full text-sm text-center text-gray-800 border">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2 border">{t("regNumber")}</th>
                <th className="px-3 py-2 border">{tSubjects("math")}</th>
                <th className="px-3 py-2 border">{tSubjects("literature")}</th>
                <th className="px-3 py-2 border">
                  {tSubjects("foreignLanguage")}
                </th>
                <th className="px-3 py-2 border">{tSubjects("physics")}</th>
                <th className="px-3 py-2 border">{tSubjects("chemistry")}</th>
                <th className="px-3 py-2 border">{tSubjects("biology")}</th>
                <th className="px-3 py-2 border">{tSubjects("history")}</th>
                <th className="px-3 py-2 border">{tSubjects("geography")}</th>
                <th className="px-3 py-2 border">
                  {tSubjects("civicEducation")}
                </th>
                <th className="px-3 py-2 border">{t("foreignId")}</th>
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
