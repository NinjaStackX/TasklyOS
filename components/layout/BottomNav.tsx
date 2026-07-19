/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BottomNavProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  menuItems: Array<{
    name: string;
    href: string;
    icon: React.ComponentType<any>;
  }>;
}

export default function BottomNav({ menuItems }: BottomNavProps) {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#F1F3FF] border-t border-[#C3C6D6]/40 px-2 flex items-center justify-between z-30 shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        const shortName = item.name.replace("Project ", "");

        return (
          <Link
            key={item.name}
            href={item.href}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 h-full"
          >
            <div
              className={`p-1 rounded-lg transition-colors ${isActive ? "text-[#0052CC]" : "text-[#4F5F7B]"}`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <span
              className={`text-[10px] tracking-tight font-semibold ${isActive ? "text-[#0052CC]" : "text-[#4F5F7B]/80"}`}
            >
              {shortName}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
