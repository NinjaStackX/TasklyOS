"use client";

import React, { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import BottomNav from "@/components/layout/BottomNav";
import { menuItems } from "@/components/layout/navigationItems";

export default function DashboardPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* Desktop Sidebar wrapper layout */}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        menuItems={menuItems}
      />

      {/* Main viewport flow view wrapper */}
      <div className="flex-1 flex flex-col min-w-0 pb-16 md:pb-0">
        <Navbar onMobileMenuOpen={() => setIsMobileOpen(true)} />

        <main className="flex-1 p-6 md:p-10 max-w-7xl w-full mx-auto">
          {/* Replace this container with actual page route code views */}
          <div className="w-full h-[60vh] border-2 border-dashed border-[#C3C6D6]/60 rounded-2xl flex flex-col items-center justify-center text-[#4F5F7B]">
            <p className="font-bold text-base">Welcome back, Mahmoud!</p>
            <p className="text-sm text-slate-400 mt-1">
              Select a module to interact with your dashboard parameters.
            </p>
          </div>
        </main>
      </div>

      {/* Mobile-only interactive component instances */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        menuItems={menuItems}
      />
      <BottomNav menuItems={menuItems} />
    </div>
  );
}
