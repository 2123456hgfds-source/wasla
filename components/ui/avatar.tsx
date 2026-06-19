import Image from "next/image";
import { cn, getInitials } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  name: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isOnline?: boolean;
  className?: string;
  ring?: boolean;
}

const sizeMap: Record<NonNullable<AvatarProps["size"]>, string> = {
  xs: "h-6 w-6 text-[10px]",
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-base",
  xl: "h-20 w-20 text-xl",
};

const dotSizeMap: Record<NonNullable<AvatarProps["size"]>, string> = {
  xs: "h-1.5 w-1.5",
  sm: "h-2 w-2",
  md: "h-2.5 w-2.5",
  lg: "h-3 w-3",
  xl: "h-4 w-4",
};

export function Avatar({ src, name, size = "md", isOnline, className, ring }: AvatarProps) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary-soft font-display font-semibold text-primary",
        ring && "ring-2 ring-card ring-offset-2 ring-offset-background",
        sizeMap[size],
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes="80px"
          className="object-cover"
        />
      ) : (
        <span>{getInitials(name)}</span>
      )}
      {isOnline !== undefined && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full ring-2 ring-card",
            dotSizeMap[size],
            isOnline ? "bg-success" : "bg-muted"
          )}
          aria-label={isOnline ? "متصل الآن" : "غير متصل"}
        />
      )}
    </span>
  );
}
