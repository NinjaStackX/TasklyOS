/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: Array<{
    name: string;
    href: string;
    icon: React.ComponentType<any>;
  }>;
}

export default function MobileMenu({
  isOpen,
  onClose,
  menuItems,
}: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Transparent Dark Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900 z-40 md:hidden"
          />

          {/* Sliding Menu Panel Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 left-0 w-[280px] bg-[#F1F3FF] z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden"
          >
            <div>
              <div className="h-14 flex items-center gap-3 border-b border-[#C3C6D6]/20 mb-6">
                <LogoIcon />
                <span className="text-lg font-black tracking-wider text-[#0B3D9B]">
                  TASKLY
                </span>
              </div>

              <nav className="space-y-1">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;

                  return (
                    <Link key={item.name} href={item.href} onClick={onClose}>
                      <div
                        className={`flex items-center h-12 px-4 gap-4 rounded-xl transition-colors ${
                          isActive
                            ? "bg-white text-[#0052CC] font-bold shadow-sm"
                            : "text-[#4F5F7B]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm">{item.name}</span>
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-4 border-t border-[#C3C6D6]/30">
              <button className="w-full flex items-center h-12 px-4 gap-4 rounded-xl hover:bg-red-50 text-red-600 font-semibold transition-colors">
                <LogoutIcon />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
