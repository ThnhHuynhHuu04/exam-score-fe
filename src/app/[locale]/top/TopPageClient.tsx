"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CardContainer from "@/components/layout/CardContainer";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axiosInstance";
import { useTranslations } from "next-intl";

type TopStudentResult = {
  regNumber: string;
  scores: Record<string, number>;
  totalScore: number;
};

const groupMap: Record<string, string[]> = {
  A: ["math", "physics", "chemistry"],
  B: ["math", "biology", "chemistry"],
  C: ["literature", "history", "geography"],
  D: ["math", "literature", "foreignLanguage"],
};

export default function TopPageClient() {
  const t = useTranslations("page");
  const tCommon = useTranslations("app");
  const tSubjects = useTranslations("subjects");

  const searchParams = useSearchParams();
  const [limit, setLimit] = useState(searchParams.get("limit") || "10");
  const [group, setGroup] = useState(searchParams.get("group") || "A");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<TopStudentResult[]>([]);

  useEffect(() => {
    setResults([]);
  }, [group, limit]);

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    setResults([]);
    try {
      const res = await axiosInstance.get(`/top?group=${group}&limit=${limit}`);
      setResults(res.data || []);
    } catch {
      setError(tCommon("notFound"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <CardContainer>
        <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>
        <div className="flex items-center gap-4 mb-6">
          <label>
            {t("limit")}:
            <select
              className="ml-2 border rounded px-2 py-1 w-24"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
            >
              {[10, 20, 30, 50, 100, 200, 500, 1000].map((val) => (
                <option key={val} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </label>
          <label>
            {t("group")}:
            <select
              className="ml-2 border rounded px-2 py-1"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            >
              {["A", "B", "C", "D"].map((val) => (
                <option key={val} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </label>
          <Button
            className="whitespace-nowrap"
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? tCommon("searching") : tCommon("search")}
          </Button>
        </div>
      </CardContainer>
      <CardContainer>
        <h2 className="text-xl font-bold mb-4">{t("results")}</h2>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        {results.length === 0 && !loading && !error && <p>{t("noResults")}</p>}
        {results.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-center text-gray-800 border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-3 py-2 border">{t("regNumber")}</th>
                  {groupMap[group].map((subjectKey) => (
                    <th key={subjectKey} className="px-3 py-2 border">
                      {tSubjects(subjectKey)}
                    </th>
                  ))}
                  <th className="px-3 py-2 border">{t("totalScore")}</th>
                </tr>
              </thead>
              <tbody>
                {results.map((item, idx) => (
                  <tr key={item.regNumber || idx}>
                    <td className="px-3 py-2 border">{item.regNumber}</td>
                    {groupMap[group].map((subjectKey) => (
                      <td key={subjectKey} className="px-3 py-2 border">
                        {item.scores?.[subjectKey] ?? "--"}
                      </td>
                    ))}
                    <td className="px-3 py-2 border font-bold">
                      {item.totalScore ?? "--"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContainer>
    </PageContainer>
  );
}
