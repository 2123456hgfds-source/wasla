"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { CounterPill } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { secondaryNavItems } from "@/lib/mock/nav";
import { currentUser } from "@/lib/mock/users";

function getBadge(id: string) {
  return secondaryNavItems.find((item) => item.id === id)?.badge ?? 0;
}

export function Navbar({ onOpenMobileMenu }: { onOpenMobileMenu: () => void }) {
  const notificationsCount = getBadge("notifications");
  const messagesCount = getBadge("messages");

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-card/90 px-4 backdrop-blur supports-[backdrop-filter]:bg-card/75 md:px-6">
      <button
        type="button"
        onClick={onOpenMobileMenu}
        className="flex h-9 w-9 items-center justify-center rounded-md text-body hover:bg-surface md:hidden"
        aria-label="فتح القائمة"
      >
        <Icon name="Menu" size={20} />
      </button>

      <div className="relative w-full max-w-md">
        <Icon
          name="Search"
          size={17}
          className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          type="search"
          placeholder="بحث في المنصة..."
          className="h-10 w-full rounded-md border border-border bg-surface/60 ps-9 pe-3 text-sm text-heading placeholder:text-muted outline-none transition-colors focus:border-primary focus:bg-card"
        />
      </div>

      <div className="ms-auto flex items-center gap-1.5">
        <Link
          href="/notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-md text-body hover:bg-surface hover:text-heading"
          aria-label="الإشعارات"
        >
          <Icon name="Bell" size={19} />
          {notificationsCount > 0 && (
            <CounterPill count={notificationsCount} className="absolute -top-0.5 end-1" />
          )}
        </Link>

        <Link
          href="/messages"
          className="relative flex h-10 w-10 items-center justify-center rounded-md text-body hover:bg-surface hover:text-heading"
          aria-label="الرسائل"
        >
          <Icon name="MessageCircle" size={19} />
          {messagesCount > 0 && (
            <CounterPill count={messagesCount} className="absolute -top-0.5 end-1" />
          )}
        </Link>

        <ThemeToggle />

        <div className="mx-1.5 h-6 w-px bg-border" />

        <Link href="/profile" className="flex items-center gap-2 rounded-md py-1.5 pe-1 ps-1.5 hover:bg-surface">
          <Avatar src={currentUser.avatarUrl} name={currentUser.name} size="sm" isOnline={currentUser.isOnline} />
          <span className="hidden text-sm font-medium text-heading md:inline">{currentUser.name}</span>
          <Icon name="ChevronDown" size={14} className="hidden text-muted md:inline" />
        </Link>
      </div>
    </header>
  );
}
