import { ReactNode } from 'react';import { AppSidebar } from "@/components/ui/appsidebar";

import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({import "./globals.css";

  children,import Header from "@/components/layout/Header";

}: {

  children: ReactNode;export default function RootLayout({

}) {  children,

  return children;}: Readonly<{

}  children: React.ReactNode;

}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="flex flex-col h-screen w-full">
           
            <Header />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
