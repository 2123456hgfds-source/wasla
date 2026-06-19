import { getLevelDefinition } from "@/lib/mock/levels";
import { cn, formatNumber } from "@/lib/utils";

export function LevelBadge({ level, size = "sm" }: { level: number; size?: "xs" | "sm" | "md" }) {
  const def = getLevelDefinition(level);
  const sizeClasses =
    size === "xs" ? "h-5 w-5 text-[10px]" : size === "md" ? "h-8 w-8 text-sm" : "h-6 w-6 text-xs";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-display font-bold text-white",
        sizeClasses
      )}
      style={{ backgroundColor: def.color }}
      title={`المستوى ${def.level} — ${def.title}`}
    >
      {def.level}
    </span>
  );
}

export function PointsProgress({
  points,
  level,
  compact,
}: {
  points: number;
  level: number;
  compact?: boolean;
}) {
  const def = getLevelDefinition(level);
  const isMaxLevel = !Number.isFinite(def.maxPoints);
  const percent = isMaxLevel
    ? 100
    : Math.min(100, Math.round(((points - def.minPoints) / (def.maxPoints - def.minPoints)) * 100));

  return (
    <div className="w-full">
      {!compact && (
        <div className="mb-1.5 flex items-center justify-between text-xs">
          <span className="font-medium text-heading">
            {def.title} · المستوى {def.level}
          </span>
          <span className="text-muted">{formatNumber(points)} نقطة</span>
        </div>
      )}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${percent}%`, backgroundColor: def.color }}
        />
      </div>
    </div>
  );
}
