"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Search,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Trash2,
  ShieldCheck,
  Briefcase,
  User,
  Ban,
  CheckCircle2,
  AlertTriangle,
  X,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

type UserRole = "admin" | "agent" | "user";

interface UserRow {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  role: string | null;
  banned: boolean | null;
  banReason: string | null;
  createdAt: string;
  updatedAt: string;
}

interface UsersResponse {
  users: UserRow[];
  total: number;
  page: number;
  limit: number;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

// The Next.js catch-all proxy at /api/[[...path]] forwards everything to the backend.
// This keeps cookies same-origin on the browser side.
const API_BASE = "/api";

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "accept-encoding": "identity",
      ...(init?.headers ?? {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json();
}

// ── Role Badge ───────────────────────────────────────────────────────────────

function RoleBadge({ role }: { role: string | null }) {
  if (role === "admin") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-violet-500/15 text-violet-300 border border-violet-500/30">
        <ShieldCheck className="size-3" />
        Admin
      </span>
    );
  }
  if (role === "agent") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
        <Briefcase className="size-3" />
        Agent
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-500/15 text-slate-300 border border-slate-500/30">
      <User className="size-3" />
      {role ?? "—"}
    </span>
  );
}

// ── Confirm Modal ─────────────────────────────────────────────────────────────

function ConfirmModal({
  title,
  description,
  confirmLabel,
  danger,
  onConfirm,
  onCancel,
}: {
  title: string;
  description: string;
  confirmLabel: string;
  danger?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#181C27] shadow-2xl p-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`size-10 rounded-xl flex items-center justify-center ${danger ? "bg-red-500/15" : "bg-gold/15"}`}
            >
              <AlertTriangle
                className={`size-5 ${danger ? "text-red-400" : "text-gold"}`}
              />
            </div>
            <h3 className="text-base font-semibold text-white">{title}</h3>
          </div>
          <button
            onClick={onCancel}
            className="text-white/40 hover:text-white/80 transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>
        <p className="text-sm text-white/60 mb-6 pl-[52px]">{description}</p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              danger
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-gold hover:bg-gold-dark text-brand-navy"
            }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Avatar ────────────────────────────────────────────────────────────────────

function UserAvatar({ user }: { user: UserRow }) {
  const letter = user.name?.[0]?.toUpperCase() ?? user.email[0].toUpperCase();
  const colours = [
    "from-violet-500 to-purple-600",
    "from-amber-500 to-orange-600",
    "from-emerald-500 to-teal-600",
    "from-sky-500 to-blue-600",
    "from-pink-500 to-rose-600",
  ];
  const colour = colours[user.email.charCodeAt(0) % colours.length];
  return (
    <div
      className={`size-8 rounded-full bg-gradient-to-br ${colour} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-md`}
    >
      {letter}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function AdminUsersPage() {
  const [data, setData] = useState<UsersResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [pendingAction, setPendingAction] = useState<{
    type: "delete" | "ban" | "unban";
    user: UserRow;
  } | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);

  const LIMIT = 10;

  const showToast = (msg: string, ok: boolean) => {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 3500);
  };

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiFetch<UsersResponse>(
        `/users?page=${page}&limit=${LIMIT}`
      );
      setData(result);
    } catch (e: any) {
      setError(e.message ?? "Failed to load users");
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    load();
  }, [load]);

  // ── Role change ──────────────────────────────────────────────────────────

  const changeRole = async (user: UserRow, role: UserRole) => {
    setActionLoading(user.id + "_role");
    try {
      await apiFetch(`/users/${user.id}`, {
        method: "PATCH",
        body: JSON.stringify({ role }),
      });
      showToast(`Role updated to "${role}" for ${user.name}`, true);
      load();
    } catch (e: any) {
      showToast(e.message ?? "Failed to update role", false);
    } finally {
      setActionLoading(null);
    }
  };

  // ── Ban / Unban ──────────────────────────────────────────────────────────

  const confirmBan = async () => {
    if (!pendingAction) return;
    const { user, type } = pendingAction;
    setPendingAction(null);
    setActionLoading(user.id + "_ban");
    try {
      await apiFetch(`/users/${user.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          banned: type === "ban",
          banReason: type === "ban" ? "Banned by admin" : null,
        }),
      });
      showToast(
        type === "ban"
          ? `${user.name} has been banned`
          : `${user.name} has been unbanned`,
        true
      );
      load();
    } catch (e: any) {
      showToast(e.message ?? "Action failed", false);
    } finally {
      setActionLoading(null);
    }
  };

  // ── Delete ───────────────────────────────────────────────────────────────

  const confirmDelete = async () => {
    if (!pendingAction) return;
    const { user } = pendingAction;
    setPendingAction(null);
    setActionLoading(user.id + "_delete");
    try {
      await apiFetch(`/users/${user.id}`, { method: "DELETE" });
      showToast(`${user.name} has been deleted`, true);
      load();
    } catch (e: any) {
      showToast(e.message ?? "Delete failed", false);
    } finally {
      setActionLoading(null);
    }
  };

  // ── Filter ───────────────────────────────────────────────────────────────

  const filtered = (data?.users ?? []).filter(
    (u) =>
      !search ||
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = data ? Math.ceil(data.total / LIMIT) : 1;

  return (
    <div className="max-w-7xl mx-auto">
      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border text-sm font-medium transition-all animate-in slide-in-from-top-2 fade-in duration-300 ${
            toast.ok
              ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-300"
              : "bg-red-500/15 border-red-500/30 text-red-300"
          }`}
        >
          {toast.ok ? (
            <CheckCircle2 className="size-4 flex-shrink-0" />
          ) : (
            <AlertTriangle className="size-4 flex-shrink-0" />
          )}
          {toast.msg}
        </div>
      )}

      {/* Confirm modal */}
      {pendingAction && (
        <ConfirmModal
          title={
            pendingAction.type === "delete"
              ? "Delete User"
              : pendingAction.type === "ban"
                ? "Ban User"
                : "Unban User"
          }
          description={
            pendingAction.type === "delete"
              ? `Are you sure you want to permanently delete "${pendingAction.user.name}"? This action cannot be undone.`
              : pendingAction.type === "ban"
                ? `Are you sure you want to ban "${pendingAction.user.name}"? They will no longer be able to access the platform.`
                : `Unban "${pendingAction.user.name}"? They will regain access to the platform.`
          }
          confirmLabel={
            pendingAction.type === "delete"
              ? "Delete"
              : pendingAction.type === "ban"
                ? "Ban User"
                : "Unban"
          }
          danger={
            pendingAction.type === "delete" || pendingAction.type === "ban"
          }
          onConfirm={
            pendingAction.type === "delete" ? confirmDelete : confirmBan
          }
          onCancel={() => setPendingAction(null)}
        />
      )}

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Users</h1>
        <p className="text-sm text-white/40">
          Manage all registered users, roles, and access.
        </p>
      </div>

      {/* Stats strip */}
      {data && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[
            {
              label: "Total Users",
              value: data.total,
              colour: "text-white",
            },
            {
              label: "Admins",
              value: data.users.filter((u) => u.role === "admin").length,
              colour: "text-violet-400",
            },
            {
              label: "Agents",
              value: data.users.filter((u) => u.role === "agent").length,
              colour: "text-amber-400",
            },
            {
              label: "Banned",
              value: data.users.filter((u) => u.banned).length,
              colour: "text-red-400",
            },
          ].map(({ label, value, colour }) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-4"
            >
              <p className="text-xs text-white/40 mb-1 font-medium uppercase tracking-wider">
                {label}
              </p>
              <p className={`text-2xl font-bold ${colour}`}>{value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Toolbar */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/30 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or email…"
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
          />
        </div>
        <button
          onClick={load}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 text-sm font-medium transition-all disabled:opacity-50"
        >
          <RefreshCw className={`size-4 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#181C27]">
        {/* Table header */}
        <div className="grid grid-cols-[2fr_2fr_1fr_1fr_1fr_auto] gap-4 px-5 py-3 border-b border-white/10 bg-white/5">
          {["User", "Email", "Role", "Status", "Joined", "Actions"].map(
            (col) => (
              <span
                key={col}
                className="text-xs font-semibold text-white/30 uppercase tracking-wider"
              >
                {col}
              </span>
            )
          )}
        </div>

        {/* Rows */}
        {loading ? (
          <div className="py-16 flex items-center justify-center">
            <RefreshCw className="size-6 text-gold animate-spin" />
          </div>
        ) : error ? (
          <div className="py-16 text-center">
            <AlertTriangle className="size-8 text-red-400 mx-auto mb-3" />
            <p className="text-sm text-red-400">{error}</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center text-white/30 text-sm">
            No users found.
          </div>
        ) : (
          <div className="divide-y divide-white/[0.06]">
            {filtered.map((user) => {
              const isBusy =
                actionLoading === user.id + "_role" ||
                actionLoading === user.id + "_ban" ||
                actionLoading === user.id + "_delete";
              return (
                <div
                  key={user.id}
                  className={`grid grid-cols-[2fr_2fr_1fr_1fr_1fr_auto] gap-4 items-center px-5 py-4 hover:bg-white/[0.03] transition-colors ${
                    isBusy ? "opacity-60 pointer-events-none" : ""
                  }`}
                >
                  {/* User */}
                  <div className="flex items-center gap-3 min-w-0">
                    <UserAvatar user={user} />
                    <span className="text-sm font-medium text-white truncate">
                      {user.name}
                    </span>
                  </div>

                  {/* Email */}
                  <span className="text-sm text-white/50 truncate">
                    {user.email}
                  </span>

                  {/* Role */}
                  <div>
                    <select
                      value={user.role ?? "user"}
                      onChange={(e) =>
                        changeRole(user, e.target.value as UserRole)
                      }
                      className="bg-transparent border-0 text-xs font-medium cursor-pointer focus:outline-none focus:ring-1 focus:ring-gold/40 rounded-md p-0"
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="admin">Admin</option>
                      <option value="agent">Agent</option>
                      <option value="user">User</option>
                    </select>
                    {/* Visual badge below select */}
                    <div className="mt-1">
                      <RoleBadge role={user.role} />
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex flex-col gap-1">
                    {user.emailVerified ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
                        <CheckCircle2 className="size-3" />
                        Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-yellow-400">
                        <AlertTriangle className="size-3" />
                        Unverified
                      </span>
                    )}
                    {user.banned && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-red-400">
                        <Ban className="size-3" />
                        Banned
                      </span>
                    )}
                  </div>

                  {/* Joined */}
                  <span className="text-xs text-white/30">
                    {new Date(user.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>

                  {/* Actions */}
                  <div className="flex items-center gap-1">
                    {user.banned ? (
                      <button
                        onClick={() =>
                          setPendingAction({ type: "unban", user })
                        }
                        title="Unban user"
                        className="size-8 flex items-center justify-center rounded-lg text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                      >
                        <CheckCircle2 className="size-4" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setPendingAction({ type: "ban", user })}
                        title="Ban user"
                        className="size-8 flex items-center justify-center rounded-lg text-amber-400 hover:bg-amber-500/10 transition-colors"
                      >
                        <Ban className="size-4" />
                      </button>
                    )}
                    <button
                      onClick={() =>
                        setPendingAction({ type: "delete", user })
                      }
                      title="Delete user"
                      className="size-8 flex items-center justify-center rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {!loading && data && data.total > LIMIT && (
          <div className="flex items-center justify-between px-5 py-4 border-t border-white/10 bg-white/5">
            <span className="text-xs text-white/30">
              Showing {(page - 1) * LIMIT + 1}–
              {Math.min(page * LIMIT, data.total)} of {data.total} users
            </span>
            <div className="flex items-center gap-2">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className="size-8 flex items-center justify-center rounded-lg border border-white/10 text-white/40 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="size-4" />
              </button>
              <span className="text-xs font-medium text-white/50 px-2">
                Page {page} / {totalPages}
              </span>
              <button
                disabled={page >= totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="size-8 flex items-center justify-center rounded-lg border border-white/10 text-white/40 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
