// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

// أصبح بإمكانك الآن تصدير الـ Metadata بدون مشاكل!
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
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
