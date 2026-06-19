import { PageHeader } from "@/components/layout/page-header";
import { supabase } from "@/lib/supabase";

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const [usersRes, postsRes, eventsRes] = await Promise.all([
    supabase.from("users").select("*", { count: "exact", head: true }),
    supabase.from("posts").select("*", { count: "exact", head: true }),
    supabase.from("events").select("*", { count: "exact", head: true }),
  ]);

  const stats = [
    { label: "عدد الأعضاء", value: usersRes.count ?? 0 },
    { label: "عدد المنشورات", value: postsRes.count ?? 0 },
    { label: "عدد الفعاليات", value: eventsRes.count ?? 0 },
  ];

  return (
    <div>
      <PageHeader title="الرئيسية" description="نظرة سريعة على نشاط مجتمعك" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}