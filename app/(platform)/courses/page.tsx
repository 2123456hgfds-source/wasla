import { PageHeader } from "@/components/layout/page-header";
import { supabase } from "@/lib/supabase";

export default async function CoursesPage() {
  // جلب الكورسات من جدول courses في Supabase
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-6">
      <PageHeader 
        title="الكورسات التعليمية" 
        description="تصفح الكورسات المتاحة وابدأ رحلة التعلم اليوم" 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {error && (
          <p className="text-red-500 text-sm">حدث خطأ أثناء جلب الكورسات.</p>
        )}

        {!courses || courses.length === 0 ? (
          <div className="col-span-full rounded-xl border border-dashed p-8 text-center text-muted-foreground">
            لا توجد كورسات متاحة حالياً بانتظار إضافتها في قاعدة البيانات.
          </div>
        ) : (
          courses.map((course) => (
            <div 
              key={course.id} 
              className="rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 space-y-4"
            >
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  كورس معتمد
                </div>
                <h3 className="text-lg font-bold text-foreground mt-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {course.description || "لا يوجد وصف متوفر لهذا الكورس حالياً."}
                </p>
              </div>

              <button className="w-full rounded-lg bg-primary py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition">
                ابدأ التعلم الآن
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}