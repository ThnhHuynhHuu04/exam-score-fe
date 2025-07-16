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
import { ChartBarStacked } from "lucide-react";

export default function page() {
  //   const [stat, setStat] = useState();
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState("");
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setLoading(true);
  //       try {
  //         const response = await axiosInstance.get("/score-stat");
  //         setStat(response.data);
  //       } catch (error) {
  //         setError("Không tìm thấy kết quả hoặc có lỗi khi tra cứu.");
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, []);
  //   console.log(stat);

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }
  const stat = [
    {
      subject: "math",
      levelAbove8: 198392,
      level6To8: 505836,
      level4To6: 258654,
      levelBelow4: 82731,
    },
    {
      subject: "literature",
      levelAbove8: 377879,
      level6To8: 513116,
      level4To6: 141056,
      levelBelow4: 18050,
    },
    {
      subject: "foreign_language",
      levelAbove8: 133483,
      level6To8: 219652,
      level4To6: 363532,
      levelBelow4: 196038,
    },
    {
      subject: "physics",
      levelAbove8: 94146,
      level6To8: 148641,
      level4To6: 79272,
      levelBelow4: 23556,
    },
    {
      subject: "chemistry",
      levelAbove8: 93333,
      level6To8: 144959,
      level4To6: 88447,
      levelBelow4: 19779,
    },
    {
      subject: "biology",
      levelAbove8: 34438,
      level6To8: 182049,
      level4To6: 116263,
      levelBelow4: 9628,
    },
    {
      subject: "history",
      levelAbove8: 138533,
      level6To8: 342577,
      level4To6: 200392,
      levelBelow4: 24712,
    },
    {
      subject: "geography",
      levelAbove8: 218515,
      level6To8: 382087,
      level4To6: 96226,
      levelBelow4: 7854,
    },
    {
      subject: "civic_education",
      levelAbove8: 384222,
      level6To8: 181440,
      level4To6: 16886,
      levelBelow4: 1061,
    },
  ];

  return (
    <PageContainer>
      <CardContainer className="flex-row">
        <h1 className="text-3xl font-bold mb-6"> Thống kê điểm thi</h1>
      </CardContainer>
      <CardContainer>
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
              name="Trên 8"
            />
            <Bar
              dataKey="level6To8"
              stackId="a"
              fill="#2196f3"
              name="Từ 6 đến 8"
            />
            <Bar
              dataKey="level4To6"
              stackId="a"
              fill="#ffc107"
              name="Từ 4 đến 6"
            />
            <Bar
              dataKey="levelBelow4"
              stackId="a"
              fill="#f44336"
              name="Dưới 4"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContainer>
    </PageContainer>
  );
}
