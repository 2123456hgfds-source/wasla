import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  size?: number;
}

/**
 * Signature mark: two connected nodes — literally a "وصلة" (connection/link).
 * Reused at small sizes in the sidebar, and larger/animated in empty & loading states.
 */
export function LogoMark({ className, size = 28 }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={cn(className)}
      aria-hidden="true"
    >
      <circle cx="22.5" cy="9.5" r="6" fill="var(--wasla-primary)" opacity="0.35" />
      <path
        d="M11 20.5L20.5 11.5"
        stroke="var(--wasla-primary)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="9.5" cy="22.5" r="6" fill="var(--wasla-primary)" />
    </svg>
  );
}

export function Logo({ className, collapsed }: { className?: string; collapsed?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark size={30} />
      {!collapsed && (
        <span className="font-display text-xl font-bold text-heading">وصلة</span>
      )}
    </div>
  );
}
