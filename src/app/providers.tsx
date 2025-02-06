"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

const Providers = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
          <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </NextThemesProvider>
        </QueryClientProvider>
  )
}

export default Providers