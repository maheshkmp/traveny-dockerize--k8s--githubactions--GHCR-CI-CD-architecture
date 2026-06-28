"use client";

import { authClient } from "@/lib/auth-client";
import { ShieldCheck, User, LogOut } from "lucide-react";

export default function Dashboard() {
  const { data: session, isPending } = authClient.useSession();

  const role = (session?.user as { role?: string | null } | undefined)?.role;
  const isAdmin = role === "admin";

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

  if (isPending) {
    return (
      <div className="container mx-auto p-6 max-w-7xl flex items-center justify-center min-h-[40vh]">
        <div className="size-8 rounded-full border-4 border-brand-navy/20 border-t-brand-navy animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Welcome banner */}
      <div
        className={`rounded-2xl p-8 mb-8 flex items-center gap-5 shadow-sm ${
          isAdmin
            ? "bg-gradient-to-r from-brand-navy to-brand-navyMid text-white"
            : "bg-gradient-to-r from-gold/10 to-gold-pale border border-gold/30"
        }`}
      >
        <div
          className={`size-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
            isAdmin ? "bg-white/15" : "bg-gold/20"
          }`}
        >
          {isAdmin ? (
            <ShieldCheck className="size-7 text-white" />
          ) : (
            <User className="size-7 text-gold-dark" />
          )}
        </div>

        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-widest mb-1 ${
              isAdmin ? "text-white/60" : "text-gold-dark/70"
            }`}
          >
            {isAdmin ? "Admin" : "User"} · {session?.user?.email}
          </p>
          <h1
            className={`text-2xl font-bold ${
              isAdmin ? "text-white" : "text-brand-navy"
            }`}
          >
            {isAdmin
              ? "Welcome to the Admin Dashboard"
              : "Welcome to the Dashboard"}
          </h1>
          <p
            className={`text-sm mt-1 ${
              isAdmin ? "text-white/70" : "text-brand-muted"
            }`}
          >
            {isAdmin
              ? "You have full administrative access. Manage users, roles, and platform settings."
              : "Hello, " + (session?.user?.name ?? "there") + "! You're logged in as a standard user."}
          </p>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {isAdmin && (
          <a
            href="/admin/users"
            className="flex items-center gap-4 p-5 rounded-xl border border-white/10 bg-gradient-to-r from-brand-navy to-brand-navyMid text-white hover:shadow-lg hover:scale-[1.01] transition-all duration-200"
          >
            <div className="size-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <p className="font-semibold text-sm">Admin Panel</p>
              <p className="text-xs text-white/60">Manage users, roles & access</p>
            </div>
          </a>
        )}
        <button
          onClick={handleSignOut}
          className="flex items-center gap-4 p-5 rounded-xl border border-red-200/30 bg-red-50/50 text-red-600 hover:bg-red-100/60 hover:shadow-lg hover:scale-[1.01] transition-all duration-200 text-left"
        >
          <div className="size-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
            <LogOut className="size-5" />
          </div>
          <div>
            <p className="font-semibold text-sm">Sign Out</p>
            <p className="text-xs text-red-400">End your current session</p>
          </div>
        </button>
      </div>

      {/* Placeholder content area */}
      <div className="rounded-xl border border-brand-warm bg-brand-cream/50 p-10 text-center text-brand-muted text-sm">
        Your dashboard content goes here.
      </div>
    </div>
  );
}

