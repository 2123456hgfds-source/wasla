import type { LevelDefinition } from "@/lib/types";

export const LEVELS: LevelDefinition[] = [
  { level: 1, title: "مستجد", minPoints: 0, maxPoints: 99, color: "#94A3B8" },
  { level: 2, title: "مساهم", minPoints: 100, maxPoints: 499, color: "#2563EB" },
  { level: 3, title: "فاعل", minPoints: 500, maxPoints: 1499, color: "#16A34A" },
  { level: 4, title: "خبير", minPoints: 1500, maxPoints: 3999, color: "#D97706" },
  { level: 5, title: "سفير", minPoints: 4000, maxPoints: Infinity, color: "#7C3AED" },
];

export function getLevelDefinition(level: number): LevelDefinition {
  return LEVELS.find((item) => item.level === level) ?? LEVELS[0];
}

export const POINTS_RULES = [
  { action: "نشر منشور جديد", points: 5 },
  { action: "إضافة تعليق", points: 2 },
  { action: "الحصول على لايك", points: 1 },
  { action: "إكمال درس", points: 10 },
  { action: "إكمال كورس كامل", points: 30 },
  { action: "حضور جلسة مباشرة", points: 8 },
];
