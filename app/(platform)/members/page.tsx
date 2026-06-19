import { PageHeader } from "@/components/layout/page-header";
import { supabase } from "@/lib/supabase";

export default async function MembersPage() {
  // جلب الأعضاء من جدول users
  const { data: members, error } = await supabase
    .from("users")
    .select("id, full_name, email, avatar");

  return (
    <div className="space-y-6">
      <PageHeader 
        title="الأعضاء" 
        description="تعرّف على أعضاء مجتمع وصلة المتميزين" 
      />

      {error && (
        <p className="text-red-500 text-sm bg-red-500/10 p-3 rounded-lg max-w-4xl">
          حدث خطأ أثناء تحميل قائمة الأعضاء.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
        {!members || members.length === 0 ? (
          <div className="col-span-full rounded-xl border border-dashed p-8 text-center text-muted-foreground">
            لا يوجد أعضاء مسجلين حالياً.
          </div>
        ) : (
          members.map((member) => (
            <div 
              key={member.id} 
              className="rounded-xl border border-border bg-card p-5 shadow-sm hover:border-primary/50 transition flex items-center gap-4 text-right"
            >
              {/* الصورة الشخصية العشوائية كرمز تعبيري إذا لم تتوفر صورة */}
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl shrink-0">
                {member.full_name ? member.full_name.charAt(0).toUpperCase() : "U"}
              </div>

              <div className="space-y-0.5 overflow-hidden">
                <h3 className="font-bold text-foreground truncate">
                  {member.full_name || "عضو مجهول"}
                </h3>
                <p className="text-xs text-muted-foreground truncate">
                  {member.email || "لا يوجد بريد إلكتروني"}
                </p>
                <span className="inline-block mt-1 text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                  عضو مجتمع
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}