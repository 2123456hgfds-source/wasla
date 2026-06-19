import { PageHeader } from "@/components/layout/page-header";

export default function SettingsPage() {
  return (
    <div className="space-y-6 p-6">
      <PageHeader 
        title="الإعدادات" 
        description="تحكم بإعدادات حسابك، تفضيلات الإشعارات، والمظهر العام للمنصة" 
      />

      <div className="max-w-3xl space-y-4 text-right">
        {/* قسم الحساب */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">إعدادات الحساب</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">اسم المستخدم</label>
              <input type="text" placeholder="خالد المطيري" disabled className="w-full rounded-lg border border-border bg-muted/40 p-2.5 text-sm text-body cursor-not-allowed" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">البريد الإلكتروني</label>
              <input type="email" placeholder="user@example.com" disabled className="w-full rounded-lg border border-border bg-muted/40 p-2.5 text-sm text-body cursor-not-allowed" />
            </div>
          </div>
        </div>

        {/* قسم المظهر والتفضيلات */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">التفضيلات والمظهر</h3>
          <div className="flex items-center justify-between p-2 rounded-xl hover:bg-muted/20 transition">
            <div className="space-y-0.5">
              <h4 className="text-sm font-semibold text-foreground">الوضع الداكن (Dark Mode)</h4>
              <p className="text-xs text-muted-foreground">تفعيل المظهر الليلي المريح للعين</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-2 rounded-xl hover:bg-muted/20 transition border-t border-border pt-4">
            <div className="space-y-0.5">
              <h4 className="text-sm font-semibold text-foreground">إشعارات البريد</h4>
              <p className="text-xs text-muted-foreground">استقبال تنبيهات المنشورات والفعاليات عبر البريد</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>

        {/* زر حفظ التغييرات الجمالي */}
        <div className="flex justify-start">
          <button type="button" className="rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90 transition">
            حفظ التعديلات
          </button>
        </div>
      </div>
    </div>
  );
}