"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-md text-body transition-colors hover:bg-surface hover:text-heading",
        className
      )}
    >
      {mounted ? <Icon name={isDark ? "Sun" : "Moon"} size={19} /> : <span className="h-[19px] w-[19px]" />}
    </button>
  );
}
