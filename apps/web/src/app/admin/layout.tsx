"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import {
  Users,
  LayoutDashboard,
  LogOut,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard, exact: true },
  { label: "Users", href: "/admin/users", icon: Users },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        credentials: "include",
        onSuccess: () => {
          window.location.href = "/";
        },
      },
    });
  };

  return (
    <div className="min-h-screen flex bg-[#0F1117]">
      {/* ── Sidebar ── */}
      <aside className="w-64 flex-shrink-0 flex flex-col border-r border-white/10 bg-[#0F1117]">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <Link href="/admin" className="flex items-center gap-2.5">
            <div className="size-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg">
              <ShieldCheck className="size-4 text-white" />
            </div>
            <span className="font-bold text-white text-sm tracking-wide">
              Admin Panel
            </span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {navItems.map(({ label, href, icon: Icon, exact }) => {
            const isActive = exact
              ? pathname === href
              : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group ${
                  isActive
                    ? "bg-gold/15 text-gold border border-gold/30"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon
                  className={`size-4 flex-shrink-0 ${isActive ? "text-gold" : "text-white/40 group-hover:text-white/70"}`}
                />
                {label}
                {isActive && (
                  <ChevronRight className="size-3.5 ml-auto text-gold/70" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sign out */}
        <div className="p-3 border-t border-white/10">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-150"
          >
            <LogOut className="size-4 flex-shrink-0" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-white/10 bg-[#0F1117]/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-2 text-sm text-white/40">
            <span>Admin</span>
            <ChevronRight className="size-3.5" />
            <span className="text-white/80 capitalize">
              {pathname.split("/").pop() || "Overview"}
            </span>
          </div>
          <Link
            href="/"
            className="text-xs text-white/40 hover:text-white/70 transition-colors"
          >
            ← Back to site
          </Link>
        </header>

        {/* Page content */}
        <main className="flex-1 p-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
