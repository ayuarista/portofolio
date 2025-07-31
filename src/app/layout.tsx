import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
const fontSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  // weight: "400",
});

const fontMono = Poppins({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Arista Portfolio",
  description: "Ayu Arista portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body suppressHydrationWarning
      >
        <ThemeProvider>
          <ScrollProgress />
          <SidebarProvider>
            <AppSidebar />
            <main>
              <SidebarTrigger />
              {children}
            </main>
            <Footer/>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}