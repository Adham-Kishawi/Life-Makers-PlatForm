# 🛠️ خطة الإصلاح الشاملة — Life Makers Platform

> تاريخ الفحص: 2026-10-25
> نطاق الفحص: Backend (Laravel 12 + Filament 3) + فرونت Inertia (`resources/js`) + فرونت Next.js 16 (`frontend/`) + الأصول + الريبو
> الحالة: ⏳ في انتظار الموافقة على بدء التنفيذ — يتم التنفيذ Phase على حدة

---

## 📋 ملخص المشاكل المكتشفة

### 🔴 حرجة (Critical)

| # | المشكلة | الموقع |
|---|---|---|
| C1 | تسجيل دخول وهمي بالكامل: `login()` يتجاهل الباسورد + الزائر يختار دوره (فيه super_admin) من الواجهة | `frontend/src/context/AuthContext.tsx:40-52`, `frontend/src/app/login/page.tsx:158-195` |
| C2 | صفحة `/crm` الإدارية بدون أي حماية (لا guard ولا middleware.ts) — الحماية الوحيدة إخفاء اللينك | `frontend/src/app/crm/page.tsx` |
| C3 | تصعيد صلاحيات: `canAccessPanel()` = `count($this->roles)` → أي role يدخل الفيلامينت بالكامل، ولا توجد Policies للموديلات، وإمكانية منح super_admin من الفورم | `app/Models/User.php:89-92`, `app/Policies/` |
| C4 | التسجيل العام يرمي 500: أعمدة `NOT NULL` في DB لكن `nullable` في validation (phone/address/qualification/birthday) | `routes/web.php:17-22` ضد `database/migrations/0001_01_01_000000:18-23` |
| C5 | الريبو سينفجر: `frontend/` كله untracked + `.gitignore` لا يغطي `frontend/.next` (302MB) و `frontend/node_modules` (583MB) — أول `git add .` يضيف ~900MB | `.gitignore` |
| C6 | PII في localStorage: الرقم القومي والتليفون يخزنان في المتصفح ويعرضان نصاً صريحاً | `AuthContext.tsx:29,49,66`, `StreakTracker.tsx:58,261` |

### 🟠 عالية الخطورة (High)

| # | المشكلة | الموقع |
|---|---|---|
| H1 | Session fixation: لا `session()->regenerate()` بعد login/register (الـ logout صحيح) | `routes/web.php:39,54-56` |
| H2 | صور المتطوعين على الـ public disk — قابلة للتعداد في `/storage/users/...` | `routes/web.php:29-31` |
| H3 | Env Editor يعرض `.env` (APP_KEY + كلمات سر DB) داخل الـ admin | `app/Providers/Filament/AdminPanelProvider.php:43-49` |
| H4 | XSS مخزن: `description` يعرض `->html()` بدون sanitizer | `app/Filament/Resources/CommitteeResource.php:70` |
| H5 | لا يوجد reset password ولا email verification رغم وجود الجداول | — |
| H6 | `getFilamentAvatarUrl()` يعيد مساراً خاماً بدل `Storage::url()` = أفاتار مكسور | `app/Models/User.php:84-87` |
| H7 | فورم admin يقبل Gmail فقط (`endsWith('@gmail.com')`) | `UserResource.php:85-89` |
| H8 | لا `->unique()` على email/الرقم القومي في فورم admin → QueryException/500 | `UserResource.php:85-104` |
| H9 | `getActions()` (v2) بدل `getHeaderActions()` (v3) → أزرار Create/Delete قد لا تظهر | `ListUsers.php:18-23`, `EditUser.php:31-37` |
| H10 | `order` ليس في `$fillable` لـ Committee/Center/Slider رغم `reorderable` | `Committee.php:9`, `Center.php:9`, `Slider.php:9-12` |
| H11 | فلتر Verified معكوس المنطق (unverified لا يفلتر شيئاً) | `UserResource/Table/Filters/Verified.php:18-24` |
| H12 | علاقات belongsTo مسماة جمع (`committees()`/`centers()`) | `User.php:74-82` |
| H13 | HIBP يُفحص مرتين لكل حفظ (password + confirmation) | `UserResource.php:131,139` |
| H14 | Bulk delete يعمل count لكل سجل (N+1) | `UserResource/Table/BulkActions/DeleteAction.php:16-18` |
| H15 | Dashboard المتطوع hardcoded على mock واحد لكل المستخدمين + check-in يتصفر بالـ reload | `StreakTracker.tsx:10-24`, `src/data/mockVolunteer.ts` |
| H16 | فورم التسجيل: لا مطابقة كلمة سر، لا pattern للرقم القومي، الصورة الشخصية تُرمى ولا تُرسل | `login/page.tsx:440-462`, `AuthContext.tsx:41-46` |
| H17 | فورم contact لا يرسل شيئاً (يقلب flag وخلاص) + alert() مكان الـ actions في CRM | `contact/page.tsx:10-13`, `crm/page.tsx:81,161` |
| H18 | Shield: generator = policies_and_permissions لكن لا policies وُلدت للـ resources | `database/seeders/ShieldSeeder.php:15` |

### 🟡 متوسطة (Medium) — مختارة

| # | المشكلة | الموقع |
|---|---|---|
| M1 | Route الـ committee: LIKE مع wildcards من المستخدم + fallback صامت لـ `Committee::first()` + 500 لو الجدول فاضٍ | `routes/web.php:84-114` |
| M2 | كل منطق الأعمال في closures → `route:cache` مستحيل | `routes/web.php` |
| M3 | 3+ queries كاملة غير cached لكل زيارة homepage + نفس النمط في shared props | `routes/web.php:74-78`, `HandleInertiaRequests.php:40` |
| M4 | MainWidget مسجل مرتين (discover + يدوي) | `AdminPanelProvider.php:61-65` |
| M5 | GSAP cleanup يقتل ScrollTriggers الخاصة بكل الصفحة (استخدم `gsap.context()`) | `HeroScrollVideo.tsx:65-67` |
| M6 | `onloadedmetadata` handler لا يُنظف عند unmount | `HeroScrollVideo.tsx:59-63` |
| M7 | autoplay الـ Slider لا يُعاد ضبطه بعد التنقل اليدوي ولا يتوقف عند الـ hover | `BannerSlider.tsx:40-48` |
| M8 | ViewAction بلا صفحة view ولا `infolist()` — modal فارغ غالباً | `UserResource.php:151-158` |
| M9 | `mutateFormDataBeforeSave` في EditUser عملياً dead code | `EditUser.php:15-24` |
| M10 | Empty `FilamentShieldPlugin::register()` override | `CustomPlugins/FilamentShieldPlugin.php:11-14` |

### 🟢 خفيفة (Low) — مختارة

- `strict: false` في `frontend/tsconfig.json:10`
- لا `error.tsx` / `not-found.tsx` / `loading.tsx` في أي مسار Next.js
- Metadata على 3 صفحات فقط؛ لا sitemap/robots/OG
- Dead code: `HomeVideoSection.tsx` (244 سطر) غير مستخدم، imports ميتة متعددة، `lucide-react` معتمد بلا استخدام، flip animation لا يفعل شيئاً
- مسارات بحروف كبيرة `/Images/` بينما git يتتبع `public/images/` → 404 على Linux
- i18n مبعثر (عربي hardcoded + APP_LOCALE=en)
- لا index على عمود `order` في أي جدول
- `.env.example` فيه `APP_DEBUG=true`
- `dangerouslySetInnerHTML` لأيقونات اللجان (آمن حالياً — مصدر ثابت — لكنه XSS sink مستقبلي)
- Navbar dropdown بدون Escape/outside-click وبدون ARIA

### ⚡ مشاكل الأداء (تفصيل كامل)

**Next.js:**
- `page.tsx` الرئيسية كلها `"use client"` → three+gsap+framer+البيانات في أول JS، لا SSG/SEO (`page.tsx:1`)
- three.js static import في hero → ~150KB gz في first-load (`Hero3DCanvas.tsx:4`)
- فيديو 7.8MB بـ `preload="auto"` بدون poster (`HeroScrollVideo.tsx:73-79`)
- `next/image` غير مستخدم + `unoptimized: true` → لا lazy/responsive/WebP، وLCP خلفية CSS بلا preload (`next.config.mjs:4-6`)
- Google Fonts بـ `<link>` حاجز بدل `next/font` (`layout.tsx:22-29`)
- ~27MB أصول ميتة في `public/` (12MB خلفيات swisnl + صور غير مرجعة) + فيديو 7.5MB مكرر ببايت-ببايت
- render loop للـ three لا يتوقف off-screen + geometries/materials لا تُdispose (`Hero3DCanvas.tsx:120-148`)
- `committees/page.tsx` client component بلا داعٍ + state ميت (`committees/page.tsx:1,10`)
- `TiltCard`: `getBoundingClientRect` + setState في كل mousemove على 13 كارت (`TiltCard.tsx:20-33`)
- Timeline: framer scroll transform + CSS transition يتصارعان (`CommitteeTimeline.tsx:14-19`, `globals.css:78`)
- QR من API خارجي (`StreakTracker.tsx:275`)

**Blade/Inertia:**
- 11 ملف CSS منفصلة كلها بـ `?v={{ time() }}` → الكاش معطل نهائياً + render blocking (`app.blade.php:11-21`)
- خط Cairo 6 أوزان + unicons خارجيين حاجزين
- `import.meta.glob(..., { eager: true })` يحمّل كل الصفحات فوراً (`resources/js/index.jsx:9`)
- `<img>` بلا `loading="lazy"` في معظم الأقسام
- `/js/main.js` script منفصل غير مؤجل

**Laravel:**
- Homepage + shared props بلا cache
- 10 COUNT queries لكل رندر صفحة admin (badges) (`HasNavigationBadge.php:9,14`)
- لا indexes على `order`
- `php artisan serve` كخادم إنتاج + لا `artisan optimize`

---

## 🗺️ الخطة التنفيذية

## Phase 0 — إسعافات فورية (~ساعة) `الحالة: ✅ منجزة ومعتمدة 2026-10-25`

- [x] **P0.1** إنشاء `frontend/.gitignore` (`.next/`, `node_modules/`, `.env*`, `*.tsbuildinfo`) — قبل أي commit ✅ 2026-10-25
- [x] **P0.2** حذف الفيديو المكرر (تم التحقق `cmp` ببايت-ببايت): حذف النسختين في جذر `public/` و `frontend/public/` (−15MB) + إعادة تسمية النسخة الكنسية إلى `public/videos/life-makers.mp4` ✅ 2026-10-25
- [x] **P0.3** إضافة `$request->session()->regenerate()` بعد login وregister (`routes/web.php:39-41,55-57`) ✅ 2026-10-25
- [x] **P0.4** Migration جديدة `2026_10_25_000000_make_optional_user_fields_nullable.php` تجعل `phone_number/address/qualification/birthday` → `nullable()` — تم تشغيلها فعلياً `DONE 40.92ms` + اختبارا regression جديدان في `tests/Feature/AuthRegisterOptionalFieldsTest.php` ✅ 2026-10-25
- [x] **P0.5** إصلاح الفيديو 404: مسار المصدر في `HomeVideoSection.jsx:230` أصبح `/videos/life-makers.mp4` ✅ 2026-10-25
- [x] **P0.6** إزالة `?v={{ time() }}` من كل روابط CSS/favicon في `app.blade.php` (14 موضعاً) ✅ 2026-10-25
- [x] **P0.7** توحيد حالة المسارات: `/Images/` → `/images/` في 5 ملفات (9 مواضع + favicons الـ blade) — تم التحقق أن كل المسارات الفرعية متطابقة الحالة مع git ✅ 2026-10-25

**معيار القبول:** تسجيل مستخدم جديد بحقول فارغة اختيارية ينجح 200، والفيديو يعمل، والـ CSS يُخزَّن كاش (شبكة تظهر 304/from cache).
> ✅ **معتمد 2026-10-25:** PHP 8.4.27 + Composer 2.10.3 اتثبتوا على مستوى النظام (winget + php.ini بالـ extensions المطلوبة). `composer install` + `artisan migrate` نجحوا (11 migrations). الاختبارات: **11/11 ناجحة (28 assertions)**. تشغيل فعلي: الصفحة الرئيسية 200، الفيديو `/videos/life-makers.mp4` يعمل (200, video/mp4, 7.8MB)، وروابط CSS بدون `?v=` (الكاش بقت ممكنة — عناوين ثابتة). ملاحظة للنشر: 304/from-cache النهائية على Nginx في deploy.

## Phase 1 — الأمن (يوم–يومين) `الحالة: ⏳`

- [ ] **P1.1** `canAccessPanel()`: التحقق من role محدد (`super_admin` / `committee_manager`) بدل `count($this->roles)`
- [ ] **P1.2** توليد Policies: `php artisan shield:generate --all` + ربطها بالـ resources + `->protected()` عند الضرورة
- [ ] **P1.3** نقل header actions من `getActions()` إلى `getHeaderActions()` (ListUsers, EditUser)
- [ ] **P1.4** تقييد حقل roles في فورم admin بحيث لا يمنح غير super_admin إلا لـ super_admin
- [ ] **P1.5** نقل صور المتطوعين لـ disk `private` + عرضها بـ signed URLs، وإضافة `maxSize()`/`acceptedFileTypes()` لكل FileUpload
- [ ] **P1.6** حماية `/crm`: `frontend/middleware.ts` يتحقق من session حقيقي + ربط login الفرونت بـ API اللارافل (auth حقيقي بـ `Auth::attempt` الموجود) بدل الـ mock
- [ ] **P1.7** إزالة PII من localStorage (خزّن id/role فقط أو token)
- [ ] **P1.8** sanitizer على عمود description (HTMLPurifier أو strip_tags مسموحة) قبل العرض بـ `->html()`
- [ ] **P1.9** قرار Env Editor: تعطيله في production (env gate)
- [ ] **P1.10** reset password + email verification (routes + Mailables — الجداول موجودة)

**معيار القبول:** مستخدم عادي بلا roles لا يصل للـ panel إطلاقاً، وغير المصرح له لا يفتح `/crm` حتى بـ URL مباشر.

## Phase 2 — إصلاح الـ Bugs (يوم) `الحالة: ⏳`

- [ ] **P2.1** نقل منطق الراوتات إلى Controllers + Form Requests (`AuthController`, `PageController`, `RegisterRequest`...)
- [ ] **P2.2** عمود `slug` للجان + route model binding + حذف الـ slugMap والـ LIKE + abort(404) بدل `Committee::first()`
- [ ] **P2.3** `getFilamentAvatarUrl()` → `Storage::disk('public')->url($this->personal_photo)`
- [ ] **P2.4** حذف شرط Gmail + إضافة `->unique()` على email/national_identity في فورم admin
- [ ] **P2.5** إصلاح فلتر Verified (منطق when() الصحيح)
- [ ] **P2.6** إعادة تسمية `committees()`/`centers()` → `committee()`/`center()` وتحديث الاستخدامات
- [ ] **P2.7** إضافة `order` لـ `$fillable` في Committee/Center/Slider
- [ ] **P2.8** HIBP مرة واحدة (على password فقط)
- [ ] **P2.9** Bulk delete: query واحد بدل N count + `success()` مشروط بالفعل
- [ ] **P2.10** إزالة تسجيل MainWidget المزدوج
- [ ] **P2.11** ViewAction: إما `infolist()` كامل أو حذف الـ action
- [ ] **P2.12** حذف override الفاضي في FilamentShieldPlugin
- [ ] **P2.13** فرونت: مطابقة كلمة السر + pattern الرقم القومي (14 رقم) في فورم التسجيل + رفع الصورة فعلياً

**معيار القبول:** كل صفحات admin تعمل بأزرارها (Create/Delete/Impersonate)، وreorder اللجان يعمل ويُحفظ.

## Phase 3 — الأداء ⚡ (2–3 أيام) `الحالة: ⏳` (الأولوية الخاصة)

**Next.js:**
- [ ] **P3.1** تحويل `page.tsx` و`committees/page.tsx` لـ server components + استخراج جزر client صغيرة (TiltCard, BannerSlider)
- [ ] **P3.2** `next/dynamic(() => import('...Hero3DCanvas'), { ssr: false })` + skeleton — إخراج three.js من first-load
- [ ] **P3.3** `next/image` في كل مكان + إزالة `unoptimized: true` + `priority` للـ hero (LCP)
- [ ] **P3.4** `next/font/google` (Cairo) self-hosted بدل `<link>`
- [ ] **P3.5** الفيديو: `preload="none"` + poster + تحميل عند الاقتراب (IntersectionObserver) + إعادة ترميز إلى ≤2.5MB (H.264, CRF أعلى، بدون صوت)
- [ ] **P3.6** Three.js: إيقاف rAF عند off-screen (IntersectionObserver) + dispose لكل geometries/materials + تخطي الرسم عند reduced-motion
- [ ] **P3.7** GSAP: `gsap.context()` في HeroScrollVideo بدل `ScrollTrigger.getAll().kill()`
- [ ] **P3.8** حذف الأصول الميتة (~27MB): `public/images/swisnl/` + الصور غير المرجعة (مراجعة قائمة قبل الحذف)
- [ ] **P3.9** TiltCard: throttle بـ rAF + CSS variables بدل setState لكل mousemove
- [ ] **P3.10** Timeline: إزالة CSS transition المتعارض أو تحويل لـ scaleY transform

**Blade/Inertia:**
- [ ] **P3.11** دمج `public/css/parts/*.css` الـ 11 داخل Vite (import في `resources/css/app.css`) — ملف واحد hashed قابل للكاش
- [ ] **P3.12** `eager: true` → lazy في `import.meta.glob` (`resources/js/index.jsx:9`)
- [ ] **P3.13** `loading="lazy"` + width/height لكل `<img>`

**Laravel:**
- [ ] **P3.14** `Cache::remember` للـ homepage (sliders/committees/events) + shared props، مع flush عند الحفظ من Filament
- [ ] **P3.15** Migration: indexes على `order` في committees/centers/sliders/events
- [ ] **P3.16** Badge count مرة واحدة (cache قصير أو إعادة هيكلة HasNavigationBadge)
- [ ] **P3.17** تحسين الصور: تحويل WebP/AVIF بعرض ≤1600px للمعروض (34MB → ~4-6MB)

**Deploy:**
- [ ] **P3.18** سكريبت deploy: `php artisan optimize` (config+route+view cache — يعمل بعد P2.1) + Nginx+FPM بدل `artisan serve` + `run.bat` للـ dev فقط

**معيار القبول:** Lighthouse للصفحة الرئيسية ≥85/90 (Perf/A11y)، first-load JS ينخفض ≥40%، وزيارات العودة لا تنزّل CSS/JS (from cache).

## Phase 4 — جودة الكود + ما قبل الإطلاق (2 أيام) `الحالة: ⏳`

- [ ] **P4.1** TypeScript `strict: true` + إصلاح الأخطاء الناتجة
- [ ] **P4.2** `error.tsx` + `not-found.tsx` + `loading.tsx` في Next.js
- [ ] **P4.3** metadata لكل route + `generateMetadata` للجان + `sitemap.ts` + `robots.ts` + OG/Twitter cards
- [ ] **P4.4** حذف الـ dead code (HomeVideoSection.tsx غير المستخدم في الفرونت، imports الميتة، lucide-react من dependencies، isLoaded، flip no-op)
- [ ] **P4.5** i18n موحد (lang files للحالة الحالية + APP_LOCALE=ar أو استخراج كل النصوص)
- [ ] **P4.6** فورم contact + actions الـ CRM: إما ربط حقيقي بـ API أو تعطيل مؤقت بوضوح
- [ ] **P4.7** `.env.example`: `APP_DEBUG=false` + إضافة `SESSION_SECURE_COOKIE` و`SEED_ADMIN_PASSWORD`
- [ ] **P4.8** تحديث README (بنية المشروع + أوامر التشغيل للفرونت الجديد)
- [ ] **P4.9** قرار معماري نهائي: استمرار على Next.js (ونقل اللازم) أو Inertia — وتوثيقه
- [ ] **P4.10** commit نظيف: إضافة `frontend/` (بعد .gitignore) + `public/videos/` للريبو

---

## ✅ حاجات معمولة صح — متلمسهاش أثناء الإصلاح

- Throttling على routes المصادقة (`throttle:5,10` / `throttle:10,1`)
- Logout يجدد session وCSRF بشكل صحيح
- رسالة login عامة (بدون user enumeration) + Hash::check سليم (لا SQL injection)
- Unique indexes على email/national_identity + FKs بـ nullOnDelete
- كلمة سر admin تُولد عشوائياً وتُطبع مرة واحدة (DatabaseSeeder)
- `deferLoading()` في كل جداول Filament + widgets lazy
- `gsap.context()` في HomeVideoSection.tsx (النمط الصحيح — انقل HeroScrollVideo إليه)
- `prefers-reduced-motion` + DPR cap ≤2 في three.js (النسختان)
- Tests حقيقية للتسجيل/الدخول (phpunit, sqlite :memory:)
- Committee seeder idempotent بـ `updateOrCreate`

---

## 📊 تتبع التقدم

| Phase | الحالة | ملاحظات |
|---|---|---|
| Phase 0 — إسعافات | ✅ معتمدة 2026-10-25 | 11/11 tests، تسجيل بحقول فاضية يعمل، الفيديو 200 |
| Phase 1 — أمن | ⏳ لم تبدأ | |
| Phase 2 — Bugs | ⏳ لم تبدأ | |
| Phase 3 — أداء ⚡ | ⏳ لم تبدأ | أولوية خاصة |
| Phase 4 — جودة + إطلاق | ⏳ لم تبدأ | |

> ⚠️ قاعدة التنفيذ: كل Phase تُنفَّذ وتُختبر على حدة، ولا نبدأ التالية إلا بعد اعتماد نتيجة الحالية.
