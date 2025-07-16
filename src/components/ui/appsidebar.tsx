import { Home, Search, BarChart2, Award } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Trang chủ",
    url: "/",
    icon: Home,
  },
  // {
  //   title: "Tra cứu điểm",
  //   url: "#",
  //   icon: Search,
  // },
  {
    title: "Báo cáo",
    url: "/report",
    icon: BarChart2,
  },
  {
    title: "Top học sinh",
    url: "/top",
    icon: Award,
  },
];

export function AppSidebar() {
  return (
    <Sidebar >
      <SidebarHeader>
        <div className="justify-center text-black text-2xl font-semibold font-['Inter'] leading-normal">
          THPT 2024
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
