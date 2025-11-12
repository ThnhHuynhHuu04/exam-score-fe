"use client";
import React from "react";
import { useTranslations } from "next-intl";
import {LanguageSwitcher} from '@/components/LanguageSwitcher';

export default function Header() {
  const t = useTranslations("app");

  return (
    <nav className="bg-white flex justify-between items-center p-4 shadow-md">
      <div className="justify-start text-slate-800 text-3xl font-semibold font-['Inter'] leading-7">
        {t("title")}
      </div>
      <div className="flex items-center gap-4">
        <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-tight">
          {t("subtitle")}
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
