import { PageHeader } from "@/components/layout/page-header";

export default function NotificationsPage() {
  // بيانات تجريبية للإشعارات لتبدو الصفحة ممتلئة واحترافية أمام العميل
  const mockNotifications = [
    {
      id: 1,
      title: "منشور جديد في المجتمع",
      description: "قام قيس ربابعة بإضافة منشور جديد في مجتمع وصلة.",
      time: "قبل ٥ دقائق",
      isUnread: true,
    },
    {
      id: 2,
      title: "فعالية قادمة",
      description: "تذكير: لقاء مجتمع وصله الأول سيبدأ قريباً في الأردن.",
      time: "قبل ساعتين",
      isUnread: true,
    },
    {
      id: 3,
      title: "كورس جديد متاح",
      description: "تمت إضافة كورس جديد إلى قائمة الكورسات الخاصة بك.",
      time: "قبل يوم واحد",
      isUnread: false,
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader 
        title="الإشعارات" 
        description="كل ما يحدث في مجتمعك ومتابعته أولاً بأول" 
      />

      <div className="space-y-3 max-w-3xl">
        {mockNotifications.map((notif) => (
          <div 
            key={notif.id} 
            className={`rounded-xl border p-4 shadow-sm transition flex items-start justify-between gap-4 text-right ${
              notif.isUnread 
                ? "bg-primary/5 border-primary/30" 
                : "bg-card border-border"
            }`}
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                {notif.isUnread && (
                  <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                )}
                <h3 className={`font-bold ${notif.isUnread ? "text-primary" : "text-foreground"}`}>
                  {notif.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {notif.description}
              </p>
            </div>

            <span className="text-xs text-muted-foreground shrink-0 mt-0.5">
              {notif.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}