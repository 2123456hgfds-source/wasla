import { PageHeader } from "@/components/layout/page-header";
import { supabase } from "@/lib/supabase";

export const dynamic = 'force-dynamic';

export default async function CalendarPage() {
  const { data: events, error } = await supabase
    .from("events")
    .select("id, title, location, event_date")
    .order("event_date", { ascending: true });

  return (
    <div className="space-y-6">
      <PageHeader
        title="التقويم"
        description="تصفح الفعاليات والأحداث القادمة"
      />
      {error && (
        <p className="text-red-500 text-sm bg-red-500/10 p-3 rounded-lg max-w-4xl">
          حدث خطأ أثناء تحميل الفعاليات.
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
        {!events || events.length === 0 ? (
          <div className="col-span-full rounded-xl border border-dashed p-8 text-center text-muted-foreground">
            لا توجد فعاليات قادمة حالياً.
          </div>
        ) : (
          events.map((event) => (
            <div
              key={event.id}
              className="rounded-xl border border-border bg-card p-5 shadow-sm hover:border-primary/50 transition text-right"
            >
              <h3 className="font-bold text-foreground">{event.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{event.location}</p>
              <p className="text-xs text-primary mt-2">{event.event_date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}