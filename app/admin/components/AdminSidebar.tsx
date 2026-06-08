"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { logout, getUsuarioAtual } from "../../../lib/auth";
import type { User } from "@supabase/supabase-js";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUsuarioAtual().then((u) => setUser(u));
  }, []);

  async function handleLogout() {
    await logout();
    router.replace("/admin/login");
  }

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-brand">
        <h2>ResGatas</h2>
        <span>Painel Admin</span>
      </div>

      <div className="admin-sidebar-user">
        <div className="admin-sidebar-avatar">
          {user?.user_metadata?.avatar_url ? (
            <img src={user.user_metadata.avatar_url} alt="Avatar" />
          ) : (
            "👤"
          )}
        </div>
        <div className="admin-sidebar-user-info">
          <div className="admin-sidebar-user-name">
            {user?.user_metadata?.full_name || "Administrador"}
          </div>
          <div className="admin-sidebar-user-email">
            {user?.email || "Carregando..."}
          </div>
        </div>
      </div>

      <nav className="admin-sidebar-nav">
        <Link
          href="/admin"
          className={`admin-sidebar-link ${pathname === "/admin" ? "active" : ""}`}
        >
          <span className="sidebar-icon">📊</span>
          <span>Dashboard</span>
        </Link>
        <Link
          href="/admin/gatos/novo"
          className={`admin-sidebar-link ${pathname.includes("/admin/gatos") ? "active" : ""}`}
        >
          <span className="sidebar-icon">🐱</span>
          <span>Gatinhos</span>
        </Link>
      </nav>

      <div className="admin-sidebar-footer">
        <button onClick={handleLogout} className="admin-sidebar-link" style={{ color: "#ef4444" }}>
          <span className="sidebar-icon">🚪</span>
          <span>Sair do sistema</span>
        </button>
      </div>
    </aside>
  );
}
