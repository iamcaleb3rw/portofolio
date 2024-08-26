import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import CardDemo from "@/components/CardDemo";
import Title from "@/components/Title";
import Navigation from "@/components/navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caleb Ganza",
  description: "Portofolio website for developer Caleb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex flex-col md:flex-row md:mt-7 p-5 gap-4">
            <CardDemo />
            <div className="flex flex-col w-full">
              <Title />
              <Navigation />
              <div className="">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
