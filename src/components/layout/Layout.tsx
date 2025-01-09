"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/Sidebar";
const Layout = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <SidebarProvider className="p-4">
      <AppSidebar />
      <SidebarTrigger />
      <div
        className={cn(
          "w-screen min-h-screen font-sans flex flex-col items-center gap-12",
          className
        )}
      >
        {children}
      </div>
    </SidebarProvider>
  );
};

export default Layout;
