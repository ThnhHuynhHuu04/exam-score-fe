"use client";
import { Home, BarChart2, Award } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const t = useTranslations("menu");
  const locale = useLocale();

  // Menu items.
  const items = [
    {
      title: t("home"),
      url: `/${locale}`,
      icon: Home,
    },
    {
      title: t("report"),
      url: `/${locale}/report`,
      icon: BarChart2,
    },
    {
      title: t("topStudents"),
      url: `/${locale}/top`,
      icon: Award,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="justify-center text-black text-2xl font-semibold font-['Inter'] leading-normal">
          {t("header")}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
