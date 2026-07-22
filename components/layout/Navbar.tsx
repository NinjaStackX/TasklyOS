"use client";

import React from "react";

const MenuIcon = () => (
  <svg
    className="w-6 h-6 text-[#041B3C]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

interface NavbarProps {
  onMobileMenuOpen: () => void;
}

export default function Navbar({ onMobileMenuOpen }: NavbarProps) {
  return (
    <header className="h-20 w-full bg-white md:bg-[#F9F9FF] border-b border-[#C3C6D6]/30 px-6 md:px-10 flex items-center justify-between z-10 sticky top-0">
      {/* Mobile Menu Toggle & Brand */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMobileMenuOpen}
          className="md:hidden p-2 -ml-2 rounded-xl hover:bg-slate-100 transition-colors"
        >
          <MenuIcon />
        </button>
        <span className="md:hidden font-black tracking-wider text-[#041B3C] text-lg">
          TASKLY
        </span>
      </div>

      {/* User Avatar & Info Status */}
      <div className="flex items-center gap-3">
        <div className="text-right hidden md:block">
          <p className="text-sm font-bold text-[#041B3C]">Bashar Maaz</p>
          <p className="text-[11px] font-bold text-[#0052CC] uppercase tracking-wider">
            Project Manager
          </p>
        </div>
        <div className="w-10 h-10 bg-[#0052CC] rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm select-none">
          MT
        </div>
      </div>
    </header>
  );
}
