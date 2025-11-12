"use client";
import React, { useEffect, useState } from "react";
import PageContainer from "@/components/layout/PageContainer";
import axiosInstance from "@/lib/axiosInstance";
import {
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CardContainer from "@/components/layout/CardContainer";
import { useTranslations } from "next-intl";

export default function ReportPage() {
  const t = useTranslations("page");
  const tChart = useTranslations("page.chart");
  const tCommon = useTranslations("app");

  const [stat, setStat] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/score-stat");
        setStat(response.data);
      } catch {
        setError(tCommon("notFound"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tCommon]);
  console.log(stat);

  if (loading) {
    return <div>{tCommon("loading")}</div>;
  }

  return (
    <PageContainer>
      <CardContainer className="flex-row">
        <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      </CardContainer>
      <CardContainer>
        {error && <div className="text-red-500">{error}</div>}
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={stat}
            margin={{ top: 20, right: 30, left: 10, bottom: 50 }}
          >
            <XAxis
              dataKey="subject"
              angle={-30}
              textAnchor="end"
              interval={0}
            />
            <YAxis />
            <Tooltip />
            <Legend
              layout="horizontal"
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{ paddingTop: 20 }}
            />
            <Bar
              dataKey="levelAbove8"
              stackId="a"
              fill="#4caf50"
              name={tChart("above8")}
            />
            <Bar
              dataKey="level6To8"
              stackId="a"
              fill="#2196f3"
              name={tChart("from6to8")}
            />
            <Bar
              dataKey="level4To6"
              stackId="a"
              fill="#ffc107"
              name={tChart("from4to6")}
            />
            <Bar
              dataKey="levelBelow4"
              stackId="a"
              fill="#f44336"
              name={tChart("below4")}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContainer>
    </PageContainer>
  );
}
