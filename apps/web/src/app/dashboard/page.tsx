"use client";

import { authClient } from "@/lib/auth-client";
import { ShieldCheck, User } from "lucide-react";

export default function Dashboard() {
  const { data: session, isPending } = authClient.useSession();

  const role = (session?.user as { role?: string | null } | undefined)?.role;
  const isAdmin = role === "admin";

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

      {/* Placeholder content area */}
      <div className="rounded-xl border border-brand-warm bg-brand-cream/50 p-10 text-center text-brand-muted text-sm">
        Your dashboard content goes here.
      </div>
    </div>
  );
}

