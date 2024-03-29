import type { Metadata } from "next";
import { Inter, Oxygen } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "../components/layout/header";
import AppCartProvider from "@/components/shop/app-cart-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const oxygen = Oxygen({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(oxygen.className, "min-h-screen flex flex-col")}>
        <AppCartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Toaster />
        </AppCartProvider>
      </body>
    </html>
  );
}
