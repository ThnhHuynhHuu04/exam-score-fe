import { AppSidebar } from "@/components/ui/appsidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";
import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
