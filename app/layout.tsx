import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taskly Dashboard",
  description: "Next.js Task Management Platform Layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F9F9FF] text-[#041B3C] antialiased">
        {children}
      </body>
    </html>
  );
}
