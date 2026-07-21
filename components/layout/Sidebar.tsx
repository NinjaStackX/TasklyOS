"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

// أيقونات التحكم بالـ Sidebar
const LogoIcon = () => (
  <svg
    className="w-6 h-6 text-[#0052CC]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
);

const CollapseIcon = ({ isCollapsed }: { isCollapsed: boolean }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const LogoutIcon = () => (
  <svg
    className="w-5 h-5 text-red-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    />
  </svg>
);

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  menuItems: Array<{ name: string; href: string; icon: React.ComponentType }>;
}

export default function Sidebar({
  isCollapsed,
  setIsCollapsed,
  menuItems,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <motion.aside
      animate={{ width: isCollapsed ? 80 : 260 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="hidden md:flex flex-col h-full bg-[#F1F3FF] border-r border-[#C3C6D6] select-none justify-between z-20"
    >
      <div>
        {/* الهيدر الخاص بالشعار */}
        <div
          className={`h-20 flex items-center px-6 border-b border-[#C3C6D6]/30 ${isCollapsed ? "justify-center" : "gap-3"}`}
        >
          <LogoIcon />
          {!isCollapsed && (
            <span className="text-lg font-bold tracking-wider text-[#0B3D9B]">
              TASKLY
            </span>
          )}
        </div>

        {/* عناصر القائمة الجانبية */}
        <nav className="mt-6 px-3 space-y-1">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/projects" && pathname === "/");
            const Icon = item.icon;

            return (
              <Link key={item.name} href={item.href}>
                <div
                  className={`relative flex items-center h-12 rounded-lg transition-colors group ${
                    isCollapsed ? "justify-center" : "px-4 gap-4"
                  } ${isActive ? "bg-white text-[#0052CC] font-medium shadow-sm" : "text-[#4F5F7B] hover:bg-white/50 hover:text-[#041B3C]"}`}
                >
                  <Icon />
                  {!isCollapsed && <span className="text-sm">{item.name}</span>}

                  {/* التلميح العائم عند تصغير القائمة */}
                  {isCollapsed && (
                    <div className="absolute left-20 bg-[#041B3C] text-white text-xs px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
                      {item.name}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* أزرار التحكم والـ Logout */}
      <div className="p-3 border-t border-[#C3C6D6]/30 space-y-1">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`w-full flex items-center h-12 rounded-lg text-[#4F5F7B] hover:bg-white/50 hover:text-[#041B3C] transition-colors ${
            isCollapsed ? "justify-center" : "px-4 gap-4"
          }`}
        >
          <CollapseIcon isCollapsed={isCollapsed} />
          {!isCollapsed && <span className="text-sm">Collapse</span>}
        </button>

        <button
          className={`w-full flex items-center h-12 rounded-lg hover:bg-red-50 text-[#4F5F7B] hover:text-red-600 transition-colors ${
            isCollapsed ? "justify-center" : "px-4 gap-4"
          }`}
        >
          <LogoutIcon />
          {!isCollapsed && (
            <span className="text-sm font-medium text-red-600">Logout</span>
          )}
        </button>
      </div>
    </motion.aside>
  );
}
