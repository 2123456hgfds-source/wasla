import { LogoMark } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function EmptyState({ title, description, action, className, icon }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-card/50 px-6 py-16 text-center",
        className
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft">
        {icon ?? <LogoMark size={26} />}
      </div>
      <h3 className="font-display text-base font-semibold text-heading">{title}</h3>
      {description && <p className="max-w-sm text-sm leading-6 text-body">{description}</p>}
      {action}
    </div>
  );
}
