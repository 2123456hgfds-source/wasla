import { PageHeader } from "@/components/layout/page-header";
import { supabase } from "@/lib/supabase";

export default async function ProfilePage() {
  // جلب بيانات أول مستخدم تجريبي كمثال للملف الشخصي الحالي
  const { data: user, error } = await supabase
    .from("users")
    .select("full_name, email")
    .single(); // جلب سطر واحد فقط لبيانات الحساب

  return (
    <div className="space-y-6">
      <PageHeader 
        title="الملف الشخصي" 
        description="إدارة معلوماتك الشخصية، نبذتك، ومتابعة إنجازاتك" 
      />

      {error && (
        <p className="text-red-500 text-sm bg-red-500/10 p-3 rounded-lg max-w-2xl">
          حدث خطأ أثناء تحميل بيانات الملف الشخصي.
        </p>
      )}

      <div className="max-w-2xl rounded-2xl border border-border bg-card shadow-sm overflow-hidden text-right">
        {/* الخلفية العلوية للملف الشخصي */}
        <div className="h-32 bg-gradient-to-l from-primary/20 to-primary/5 border-b border-border" />
        
        <div className="p-6 relative pt-0">
          {/* الصورة الشخصية الافتراضية */}
          <div className="h-20 w-20 rounded-2xl bg-primary border-4 border-card shadow-md flex items-center justify-center font-bold text-primary-foreground text-3xl -mt-10 mb-4 antialiased">
            {user?.full_name ? user.full_name.charAt(0).toUpperCase() : "W"}
          </div>

          {/* تفاصيل المستخدم الحية من قاعدة البيانات */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-foreground">
                {user?.full_name || "جاري التحميل..."}
              </h2>
              <p className="text-sm text-muted-foreground">
                {user?.email || "لا يوجد بريد إلكتروني مرتبط"}
              </p>
            </div>

            <hr className="border-border" />

            {/* إحصائيات وهمية لتبدو الصفحة غنية وتفاعلية أمام العميل */}
            <div className="grid grid-cols-3 gap-4 text-center pt-2">
              <div className="bg-muted/50 p-3 rounded-xl border border-border">
                <span className="block text-xl font-black text-primary">0</span>
                <span className="text-xs text-muted-foreground">الكورسات المكتملة</span>
              </div>
              <div className="bg-muted/50 p-3 rounded-xl border border-border">
                <span className="block text-xl font-black text-primary">0</span>
                <span className="text-xs text-muted-foreground">المنشورات</span>
              </div>
              <div className="bg-muted/50 p-3 rounded-xl border border-border">
                <span className="block text-xl font-black text-primary">١٠٠</span>
                <span className="text-xs text-muted-foreground">النقاط</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}