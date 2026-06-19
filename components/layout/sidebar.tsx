"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { Icon, type IconName } from "@/components/ui/icon";
import { CounterPill } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { LevelBadge, PointsProgress } from "@/components/ui/level-progress";
import { mainNavItems, secondaryNavItems, adminNavItem } from "@/lib/mock/nav";
import { currentUser } from "@/lib/mock/users";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/types";

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

function NavLink({ item, isCollapsed, onNavigate }: { item: NavItem; isCollapsed: boolean; onNavigate: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      title={isCollapsed ? item.label : undefined}
      className={cn(
        "group relative flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
        isActive ? "bg-primary-soft text-primary" : "text-body hover:bg-surface hover:text-heading",
        isCollapsed && "justify-center px-0"
      )}
    >
      <Icon name={item.icon as IconName} size={19} className="shrink-0" />
      {!isCollapsed && <span className="flex-1 truncate">{item.label}</span>}
      {!isCollapsed && item.badge ? <CounterPill count={item.badge} /> : null}
    </Link>
  );
}

// التأكد من وجود كلمة export للتخلص من خطأ الـ AppShell
export function Sidebar({ isCollapsed, onToggleCollapse, isMobileOpen, onMobileClose }: SidebarProps) {
  const isAdmin = currentUser.role === "owner" || currentUser.role === "admin";

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-[2px] md:hidden"
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 start-0 z-50 flex flex-col border-e border-border bg-card transition-all duration-200 md:translate-x-0",
          isCollapsed ? "w-[76px]" : "w-[264px]",
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className={cn("flex h-16 items-center border-b border-border px-4", isCollapsed && "justify-center px-0")}>
          <Logo collapsed={isCollapsed} />
          <button
            type="button"
            onClick={onMobileClose}
            className="ms-auto flex h-8 w-8 items-center justify-center rounded-md text-body hover:bg-surface md:hidden"
            aria-label="إغلاق القائمة"
          >
            <Icon name="X" size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-5">
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <NavLink key={item.id} item={item} isCollapsed={isCollapsed} onNavigate={onMobileClose} />
            ))}
          </div>

          <div className={cn("space-y-1 border-t border-border pt-4")}>
            {secondaryNavItems.map((item) => (
              <NavLink key={item.id} item={item} isCollapsed={isCollapsed} onNavigate={onMobileClose} />
            ))}
            {isAdmin && <NavLink item={adminNavItem} isCollapsed={isCollapsed} onNavigate={onMobileClose} />}
          </div>
        </nav>

        {/* Collapse toggle (desktop only) */}
        <button
          type="button"
          onClick={onToggleCollapse}
          className="mx-3 mb-2 hidden h-9 items-center justify-center gap-2 rounded-md text-muted hover:bg-surface hover:text-heading md:flex"
        >
          <Icon name={isCollapsed ? "ChevronLeft" : "ChevronRight"} size={16} className="rtl:rotate-180" />
          {!isCollapsed && <span className="text-xs font-medium">طيّ القائمة</span>}
        </button>

        {/* Footer: mini profile */}
        <Link
          href="/profile"
          className={cn(
            "m-3 flex items-center gap-3 rounded-md border border-border bg-surface/60 p-3 transition-colors hover:bg-surface",
            isCollapsed && "justify-center p-2"
          )}
        >
          <div className="relative">
            <Avatar src={currentUser.avatarUrl} name={currentUser.name} size="sm" isOnline={currentUser.isOnline} />
            <span className="absolute -bottom-1 -end-1">
              <LevelBadge level={currentUser.level} size="xs" />
            </span>
          </div>
          {!isCollapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-heading">{currentUser.name}</p>
              <div className="mt-1">
                <PointsProgress points={currentUser.points} level={currentUser.level} compact />
              </div>
            </div>
          )}
        </Link>
      </aside>
    </>
  );
}