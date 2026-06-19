import type { NavItem } from "@/lib/types";

export const mainNavItems: NavItem[] = [
  { id: "dashboard", label: "الرئيسية", href: "/dashboard", icon: "LayoutDashboard" },
  { id: "community", label: "المجتمع", href: "/community", icon: "Newspaper" },
  { id: "courses", label: "الكورسات", href: "/courses", icon: "GraduationCap" },
  { id: "calendar", label: "التقويم", href: "/calendar", icon: "CalendarDays" },
  { id: "members", label: "الأعضاء", href: "/members", icon: "Users" },
];

export const secondaryNavItems: NavItem[] = [
  { id: "notifications", label: "الإشعارات", href: "/notifications", icon: "Bell", badge: 4 },
  { id: "messages", label: "الرسائل", href: "/messages", icon: "MessageCircle", badge: 2 },
  { id: "profile", label: "الملف الشخصي", href: "/profile", icon: "UserCircle2" },
  { id: "settings", label: "الإعدادات", href: "/settings", icon: "Settings" },
];

export const adminNavItem: NavItem = {
  id: "admin",
  label: "الإدارة",
  href: "/admin",
  icon: "ShieldCheck",
};
