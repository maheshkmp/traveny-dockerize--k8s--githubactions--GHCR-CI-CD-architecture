"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { LogOut, SparklesIcon, ShieldCheck, LayoutDashboard, Menu, X, Briefcase, Settings2 } from "lucide-react";

type SessionUserWithRole = {
    role?: string;
};

export function Header() {
    const { data: session, isPending } = authClient.useSession();
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const mountedTimer = window.setTimeout(() => setMounted(true), 0);
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.clearTimeout(mountedTimer);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const handleSignOut = async () => {
        try {
            await authClient.signOut({
                fetchOptions: {
                    credentials: "include",
                    onSuccess: () => { window.location.href = "/"; },
                },
            });
        } catch {
            window.location.href = "/";
        }
    };

    const avatarLetter = session?.user?.email?.[0]?.toUpperCase() ?? "?";

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? "border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-sm"
                    : "border-b border-transparent bg-background/60 backdrop-blur-md"
                }`}
        >
            <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">

                {/* ── Logo ── */}
                <Link href="/" className="flex items-center gap-2 group select-none">
                    <span className="font-heading font-bold text-xl">
                        SaaS Boilerplate
                    </span>
                </Link>

                {/* ── Desktop nav ── */}
                <nav className="hidden md:flex items-center gap-1">
                    {[
                    ].map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className="px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-150"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* ── Right side ── */}
                <div className="flex items-center gap-2">
                    {!mounted || isPending ? (
                        <div className="size-8 animate-pulse rounded-full bg-muted" />
                    ) : session ? (
                        <div className="flex items-center gap-2">
                            {/* Admin badge */}
                            {(session.user as SessionUserWithRole).role === "admin" && (
                                <Button asChild variant="outline" size="sm" className="gap-2 border-violet-200 text-violet-700 hover:bg-violet-50 dark:hover:bg-violet-950/30 hidden sm:inline-flex">
                                    <Link href="/admin">
                                        <ShieldCheck className="size-4" />
                                        Admin
                                    </Link>
                                </Button>
                            )}

                            {/* Avatar with hover dropdown */}
                            <div className="relative group">
                                <button
                                    className="size-9 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold shadow-md ring-2 ring-transparent group-hover:ring-violet-400 group-hover:shadow-violet-400/30 transition-all duration-200 cursor-pointer select-none"
                                    aria-label="User menu"
                                >
                                    {avatarLetter}
                                </button>

                                {/* Dropdown panel */}
                                <div className="absolute right-0 top-full mt-2.5 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 ease-out translate-y-1 group-hover:translate-y-0 z-50">
                                    {/* Arrow tip */}
                                    <div className="absolute -top-1.5 right-3 size-3 rotate-45 bg-popover border-l border-t border-border rounded-sm" />

                                    <div className="rounded-xl border border-border bg-popover shadow-xl overflow-hidden py-1">
                                        {/* Email */}
                                        <div className="px-3 py-2.5 border-b border-border">
                                            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-0.5">Signed in as</p>
                                            <p className="text-xs text-muted-foreground truncate font-medium">{session.user.email}</p>
                                        </div>

                                        {/* My Account */}
                                        <Link
                                            href="/dashboard"
                                            className="flex items-center gap-2.5 px-3 py-2.5 text-sm hover:bg-accent transition-colors"
                                        >
                                            <LayoutDashboard className="size-4 text-violet-500" />
                                            My Account
                                        </Link>

                                        {/* My Projects */}
                                        <Link
                                            href="/dashboard/projects"
                                            className="flex items-center gap-2.5 px-3 py-2.5 text-sm hover:bg-accent transition-colors"
                                        >
                                            <Briefcase className="size-4 text-fuchsia-500" />
                                            My Projects
                                        </Link>

                                        {/* Settings */}
                                        <Link
                                            href="/dashboard/settings"
                                            className="flex items-center gap-2.5 px-3 py-2.5 text-sm hover:bg-accent transition-colors"
                                        >
                                            <Settings2 className="size-4 text-blue-500" />
                                            Settings
                                        </Link>

                                        {/* Sign Out */}
                                        <button
                                            onClick={handleSignOut}
                                            className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                                        >
                                            <LogOut className="size-4" />
                                            Sign Out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex text-muted-foreground hover:text-foreground">
                                <Link href="/signin">Sign In</Link>
                            </Button>
                            <Button
                                asChild
                                size="sm"
                                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white border-0 shadow-md shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300"
                            >
                                <Link href="/signin">Get Started</Link>
                            </Button>
                        </div>
                    )}

                    {/* Mobile menu toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden ml-1 p-2 rounded-lg hover:bg-accent transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </div>
            </div>

            {/* ── Mobile nav ── */}
            {mobileOpen && (
                <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl px-4 py-3 space-y-1">
                    {[
                    ].map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
