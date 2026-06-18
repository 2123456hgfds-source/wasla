# وصلة Wasla

منصة عربية حديثة تجمع المجتمع، الكورسات، الفعاليات، ونظام النقاط — مبنية بـ **Next.js 15 (App Router)**، **TypeScript**، و **Tailwind CSS**، مع دعم **RTL كامل** ووضع ليلي اختياري.

هذا المستند يوصف ما تم بناؤه في **المرحلة 1: الأساس + Layout + Sidebar + Navbar**، وخارطة الطريق للمراحل القادمة.

## التشغيل محليًا

```bash
npm install
npm run dev
```

ثم افتح `http://localhost:3000` (سيتم تحويلك تلقائيًا إلى `/dashboard`).

أوامر إضافية:

```bash
npm run build      # بناء نسخة الإنتاج
npm run typecheck  # فحص أنواع TypeScript بدون بناء
npm run lint       # فحص ESLint
```

> الخطوط (Cairo + IBM Plex Sans Arabic) محمّلة عبر حزم **Fontsource** على npm، أي أنها تُجلب أثناء `npm install` ولا تحتاج اتصال بـ Google Fonts عند التشغيل أو البناء.

## التقنية المستخدمة

* Next.js 15 — App Router + React 19
* TypeScript (strict mode)
* Tailwind CSS 3.4 — مع متغيرات CSS للثيم (Light/Dark)
* next-themes — للتحكم بالوضع الليلي (اختياري، الافتراضي Light)
* lucide-react — الأيقونات
* Fontsource (Cairo / IBM Plex Sans Arabic) — الخطوط، بدون أي طلبات خارجية لـ Google Fonts

لا يوجد حاليًا أي ربط بقاعدة بيانات — **كل البيانات في `lib/mock/` هي Mock Data** بانتظار ربطها بـ Supabase لاحقًا.

## هيكلة المشروع

```
wasla/
├── app/
│   ├── layout.tsx              # Root layout: lang="ar" dir="rtl"، الخطوط، ThemeProvider
│   ├── globals.css             # متغيرات الألوان (Light/Dark) + أنماط عامة
│   ├── page.tsx                # توجيه تلقائي إلى /dashboard
│   └── (platform)/             # كل الصفحات الداخلية تشترك بنفس الـ Sidebar/Navbar
│       ├── layout.tsx          # يربط AppShell بكل صفحات المنصة
│       ├── loading.tsx         # Skeleton عام عند تنقل الصفحات
│       ├── dashboard/page.tsx
│       ├── community/page.tsx
│       ├── courses/page.tsx
│       ├── calendar/page.tsx
│       ├── members/page.tsx
│       ├── profile/page.tsx
│       ├── notifications/page.tsx
│       ├── settings/page.tsx
│       ├── admin/page.tsx
│       └── messages/page.tsx   # غير مطلوبة رسميًا، أُضيفت كعنصر Sidebar فقط (انظر الملاحظة أدناه)
│
├── components/
│   ├── layout/
│   │   ├── app-shell.tsx       # يجمع Sidebar + Navbar + منطقة المحتوى، ويتحكم بحالة الطيّ/الفتح
│   │   ├── sidebar.tsx         # Sidebar قابل للطيّ على الديسكتوب، Drawer على الموبايل
│   │   ├── navbar.tsx          # بحث، إشعارات، رسائل، Dark Mode، صورة المستخدم
│   │   └── page-header.tsx     # عنوان موحّد لكل صفحة (عنوان + وصف + أزرار إجراءات)
│   ├── providers/
│   │   └── theme-provider.tsx  # next-themes، الافتراضي Light
│   └── ui/
│       ├── avatar.tsx          # صورة المستخدم + مؤشر "متصل الآن"
│       ├── badge.tsx           # Badge + CounterPill (عداد الإشعارات)
│       ├── button.tsx          # زر بأشكال متعددة (primary/outline/ghost/danger)
│       ├── card.tsx            # بطاقة عامة (Card/CardHeader/CardTitle/CardContent)
│       ├── empty-state.tsx     # حالة "لا يوجد محتوى بعد" قابلة لإعادة الاستخدام
│       ├── icon.tsx             # غلاف موحّد حول أيقونات lucide-react
│       ├── level-progress.tsx  # LevelBadge + PointsProgress (نظام النقاط)
│       ├── logo.tsx            # الشعار: عقدتان متصلتان (= "وصلة")
│       └── theme-toggle.tsx    # زر تبديل الوضع الليلي
│
└── lib/
    ├── types.ts                # كل الأنواع: User, Post, Course, Lesson, CalendarEvent...
    ├── utils.ts                # cn()، تنسيق الأرقام والتواريخ النسبية، الأحرف الأولى للاسم
    └── mock/
        ├── users.ts             # 8 أعضاء تجريبيين + currentUser (المستخدم الحالي المُحاكى)
        ├── levels.ts             # تعريف 5 مستويات + قواعد النقاط
        ├── nav.ts                 # عناصر Sidebar (رئيسية/ثانوية/إدارة)
        └── index.ts               # تصدير مجمّع
```

## ما تم إنجازه في المرحلة 1

* بنية مشروع كاملة وقابلة للتوسّع (App Router + مجلدات منظمة).
* نظام تصميم كامل: الألوان المطلوبة بالضبط (خلفية `#F8FAFC`، كروت بيضاء، نص عناوين `#0F172A`... إلخ) كمتغيرات CSS، مع نسخة Dark Mode مشتقة منها.
* خطوط Cairo (للعناوين) + IBM Plex Sans Arabic (للنصوص) — ثنائي خطوط مقصود يعكس هوية SaaS عربية حديثة دون اللجوء لخط Tajawal الشائع جدًا.
* Sidebar كامل: قابل للطيّ على الشاشات الكبيرة، يتحول لـ Drawer منزلق على الموبايل، يعرض النقاط/المستوى الحالي للمستخدم، ويُخفي رابط «الإدارة» تلقائيًا إن لم يكن المستخدم Owner/Admin.
* Navbar كامل: بحث، إشعارات مع عداد، رسائل مع عداد، زر Dark Mode، وصورة المستخدم.
* صفحات placeholder منظمة لكل المسارات الـ 12 المطلوبة (لتفادي 404 أثناء التنقل) — سيتم استبدالها بالتفاصيل الكاملة في كل مرحلة.
* Loading skeleton عام + Empty State قابل لإعادة الاستخدام.
* تحقّق كامل من البناء: `tsc --noEmit` و `next build` بدون أي أخطاء.

> **ملاحظة عن صفحة «الرسائل»:** ظهرت في طلبك داخل قسم الـ Sidebar، لكنها لم تكن من ضمن قائمة الصفحات الـ 12 المطلوبة في "المطلوب الآن". أضفتها كرابط ونقطة placeholder فقط حتى لا ينكسر التنقل، وتركتها لمرحلة إضافية إن رغبت ببنائها بعد إنهاء الخطة الحالية.

## خارطة الطريق (المراحل القادمة)

| # | المرحلة | الحالة |
|---|---|---|
| 1 | الأساس + Layout + Sidebar + Navbar | ✅ مكتملة |
| 2 | Dashboard (إحصائيات، نشاط، منشورات، أحداث، أعضاء نشيطون) | ⏳ قادمة |
| 3 | Community — فيد المنشورات الكامل | ⏳ قادمة |
| 4 | Courses — Classroom والدروس وتتبع التقدم | ⏳ قادمة |
| 5 | Calendar — شهري/أسبوعي وجلسات مباشرة | ⏳ قادمة |
| 6 | Members + Profile | ⏳ قادمة |
| 7 | Notifications + Settings | ⏳ قادمة |
| 8 | Admin Panel + ربط نظام النقاط بكل الصفحات | ⏳ قادمة |
