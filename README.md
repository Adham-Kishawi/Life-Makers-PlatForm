# 🌟 منصة مؤسسة صناع الحياة مصر - فرع الإسماعيلية
### Life Makers Foundation Ismailia Platform

منصة رقمية متكاملة وحديثة تهدف إلى تعزيز العمل التطوعي، إدارة المبادرات والأنشطة، إبراز إنجازات لجان المؤسسة، وتيسير قنوات التبرع المباشر والمشاركة المجتمعية لفرع الإسماعيلية، تحت مظلة التحالف الوطني للعمل الأهلي التنموي.

---

## 📌 الفهرس
1. [نظرة عامة وهوية المشروع](#-نظرة-عامة-وهوية-المشروع)
2. [ملخص ما تم إنجازه حتى الآن](#-ملخص-ما-تم-إنجازه-حتى-الآن)
3. [نظام التصميم وواجهة المستخدم (UI/UX)](#-نظام-التصميم-وواجهة-المستخدم-uiux)
4. [صفحات ومكونات المنصة الأساسية](#-صفحات-ومكونات-المنصة-الأساسية)
5. [خطة فيديو الانيميشن ثلاثي الأبعاد (3D Scroll Animation & GSAP)](#-خطة-فيديو-الانيميشن-ثلاثي-الأبعاد-3d-scroll-animation--gsap)
6. [المكدس التقني (Tech Stack)](#-المكدس-التقني-tech-stack)
7. [دليل التشغيل والتطوير](#-دليل-التشغيل-والتطوير)
8. [خارطة الطريق لاستئناف العمل (Resume Roadmap)](#-خارطة-الطريق-لاستئناف-العمل-resume-roadmap)

---

## 🎯 نظرة عامة وهوية المشروع

- **الجهة**: مؤسسة صناع الحياة مصر - فرع الإسماعيلية.
- **تاريخ التأسيس العام**: 2011 كمنظمة أهلية وطنية غير حكومية لا تهدف للربح (انطلقت كمبادرة شبابية عام 2003 للأستاذ د. عمرو خالد).
- **الشراكات والتحالفات**: عضو مؤسس في **التحالف الوطني للعمل الأهلي التنموي** في مصر.
- **الهوية البصرية**:
  - **اللون الأساسي (Primary)**: الكحلي الداكن الفخم (`#0d2238` / `#0b1120`).
  - **اللون المضيء (Accent)**: الذهبي العنبري المشرق (`#FBAE42`).
  - **التباين والخطوط**: نظام فضي عالي الوضوح (`#f1f5f9` / `#ffffff`) ونصوص تدعم قراءة سريعة ومريحة للعين مع دعم كامل لاتجاه اليمين لليسار (RTL).

---

## ✅ ملخص ما تم إنجازه حتى الآن

### 1. تثبيت الهوية والعلامة التجارية (Brand & Metadata):
- **تحديث اسم المشروع في التبويبات**:
  - تم استبدال الاسم الافتراضي (Laravel) وتثبيت الاسم الرسمي: **`صناع الحياة - مصر | فرع الإسماعيلية`** عبر ملف الإعدادات البيئية `.env`، وملف تكوين التطبيق `config/app.php`، وملف القالب العام `resources/views/app.blade.php`.
  - ربط العنوان الديناميكي عبر Inertia في `resources/js/index.jsx` بحيث يظهر اسم الصفحة متبوعاً بالاسم الرسمي تلقائياً.
- **الأيقونة الرسمية (Favicon)**:
  - استخراج شعار المؤسسة وتعيينه كأيقونة مفضلة للموقع بصيغتي `favicon.ico` و `favicon.png`.
  - إضافة بارامتر كسر الكاش (`?v={{ time() }}`) لضمان ظهور الشعار الجديد فوراً في المتصفحات دون تداخل الملفات القديمة.

### 2. معالجة مشكلة التباين ونصوص الفوتر (Footer High-Contrast):
- **تشخيص المشكلة الجذرية**:
  - كان المتغير `--light-color` في الوضع الليلي (`.dark-mode`) معرّفاً بلون كحلي داكن (`#1e293b`). وكان الفوتر يجبر الروابط على استخدام هذا المتغير، مما تسبب في ظهور نصوص الفوتر بلون أسود على خلفية سوداء غير مقروءة إطلاقاً.
- **الحل الجذري**:
  - تصحيح قيمة `--light-color` إلى الأبيض الفضي الناصع `#f1f5f9`.
  - تثبيت ألوان نصوص الفوتر على `#f1f5f9 !important` في كافة الحالات.
  - تمييز عناوين الأعمدة باللون الذهبي `#FBAE42 !important`.
  - إضافة تأثير تحويم ناعم يتحول فيه الرابط إلى اللون الذهبي مع حركة ارتقاء خفيفة.
  - ضبط أيقونات التواصل الاجتماعي بخلفيات شبه شفافة وأيقونات بيضاء نقية تتوهج بالألوان الرسمية عند التمرير.

### 3. نظام التخلص الشامل من الحواف الحادة (Zero-Sharp-Edges System):
- **منع الزوايا القائمة (90 درجة) نهائياً عبر كامل المنصة**:
  - رفع انحناء كافة الكروت (`.card`, `.bento-card-modern`, `.about-mv-card`, `.home-file-card`, `.gallery-card`, `.join-card`) إلى انحناء انسيابي حديث بمقدار **28px (`1.75rem`)**.
  - حماية الزوايا بتطبيق `overflow: hidden` حتى لا تبرز زوايا الصور أو المحتويات الداخلية.
  - ترقية إطارات الصور التفاعلية في قسم "عن المؤسسة" وقسم الفيديوهات إلى انحناء **32px (`2rem`)** لإضفاء طابع عضوي ومريح للعين.
  - ترقية حقول الإدخال (`input`, `textarea`, `select`, `.form-control`) إلى انحناء **18px (`1.1rem`)** مع اتصال ناعم في مجموعات الإدخال (`.input-group`).
  - ترقية القوائم المنسدلة ومربعات العرض المنبثقة (Modals & Dropdowns) إلى انحناءات بين **20px و 28px**.

### 4. تطوير محتوى وصفحة "عن المؤسسة" (`/About`):
- إجراء بحث دقيق وتحديث البيانات بأحدث معلومات وتاريخ المؤسسة الواقعي:
  - تاريخ التأسيس والانطلاق، أرقام الإنجازات، مجالات العمل الستة (التكافل الاجتماعي، التعليم ومحو الأمية، التمكين الاقتصادي، الصحة والبيئة، الشباب والتطوع).
  - كروت الرؤية والرسالة والقيم (`.about-mv-card`) بتصميم عصري وخلفيات متدرجة ناعمة.
  - توحيد وتثبيت موقع فرع الإسماعيلية مع صفحة تواصل معنا (برج التحرير / حي الشرق - ميدان عرابي) مع تضمين الخريطة التفاعلية الدقيقة.

### 5. تطوير صفحة "تواصل معنا" (`/Contact`):
- نموذج تواصل متكامل مع التحقق من الحقول.
- أزرار مباشرة لقنوات التبرع السريع (فودافون كاش، إنستاباي، الحسابات البنكية، منافذ فوري).
- أزرار التواصل الحي الفوري (WhatsApp, الهاتف، البريد الإلكتروني، مواقع التواصل).

### 6. ضبط زر تبديل اللغة (Localization Switcher):
- إصلاح زر تغيير اللغة (عربي / إنجليزي) مع الحفاظ الكامل على الحركات والانتقالات وهيكل الصفحة دون فقدان أي أنيميشن سابق.

---

## 🎨 نظام التصميم وواجهة المستخدم (UI/UX)

```
┌─────────────────────────────────────────────────────────────┐
│                      Life Makers Design                     │
├─────────────────────────────────────────────────────────────┤
│  Primary Background:  #0d2238 (Dark Mode: #0b1120)          │
│  Accent Gold:         #FBAE42                               │
│  Surface Elements:    Glassmorphism rgba(255, 255, 255, 0.05)│
│  Text Standard:       #ffffff / #f1f5f9 (High-Contrast)     │
│  Card Border Radius:  1.75rem (28px)                        │
│  Frame Border Radius: 2.00rem (32px)                        │
│  Input Border Radius: 1.10rem (18px)                        │
│  Transitions:         cubic-bezier(0.16, 1, 0.3, 1)         │
└─────────────────────────────────────────────────────────────┘
```

---

## 📂 صفحات ومكونات المنصة الأساسية

| المسار | الصفحة / المكون | الوصف والحالة |
| :--- | :--- | :--- |
| `/` | **الصفحة الرئيسية (`Home`)** | تضم البانر التفاعلي، عدادات الإنجاز، كروت اللجان، نبذة عن المؤسسة، معرض الصور، ودعوة للانضمام. |
| `/About` | **عن المؤسسة (`About`)** | صفحة شاملة توثق تاريخ صناع الحياة، مجالات العمل، الرؤية والرسالة، والتحالف الوطني، ومقر الإسماعيلية. |
| `/Contact` | **تواصل معنا (`Contact`)** | نموذج المراسلة، موقع المقر على الخريطة، وسائل التواصل، وقنوات التبرع المباشر. |
| `/join` | **انضم إلينا (`Join Us`)** | نموذج تسجيل المتطوعين الجدد واختيار اللجنة المفضلة. |
| `/admin` | **لوحة التحكم (`Filament 3`)** | إدارة الفعاليات، اللجان، السلايدر، المقرات، والمستخدمين مع صلاحيات Shield. |

---

## 🎬 خطة فيديو الانيميشن ثلاثي الأبعاد (3D Scroll Animation & GSAP)

تمت صياغة البرومبت والمعمارية البرمجية لدمج فيديو انيميشن مجسم (Stylized 3D Isometric Animation) في الصفحة الرئيسية يتم التحكم فيه عبر التمرير (Scroll Scrubbing) باستخدام مكتبة **GSAP ScrollTrigger**:

### أ) سيناريو الـ 10 ثوانٍ (Second-by-Second Breakdown):
1. **الثواني (0 - 2s): الانبثاق والبداية**
   - جزيرة مجسمة ثلاثية الأبعاد بأسلوب الـ Diorama الكرتوني اللطيف (Claymation / Stylized 3D) تطفو وترتفع بنعومة من الماء، ممهدة لبيئة الإسماعيلية وقناة السويس.
2. **الثواني (2 - 5s): دخول المتطوعين (صناع الحياة)**
   - ظهور شخصيات كرتونية ثلاثية الأبعاد ترتدي سترات المؤسسة (البرتقالي والأزرق الداكن) يبتسمون ويتعاونون معاً في بناء وترميم منازل صغيرة ومراكز تعليمية.
3. **الثواني (5 - 7s): ازدهار الخير ومبادرات المؤسسة**
   - نمو أشجار ونخيل خضراء متناسقة، وظهور رمز عربة التمكين الاقتصادي "أحسن صاحب" مع تدفق حزم ومساعدات الخير.
4. **الثواني (7 - 10s): تدفق مياه القناة والاحتفال**
   - جريان مياه قناة السويس الزرقاء الكريستالية حول الجزيرة مع مركب إرشادي صغير، وانفجار ناعم لقصاصات ورقية ذهبية وبرتقالية تحت أشعة شمس دافئة تدعو للبهجة والتطوع.

### ب) البرومبت المعتمد لمولدات الذكاء الاصطناعي (AI Prompt):
```text
A breathtaking 10-second seamless 3D stylized miniature isometric diorama animation of "Life Makers Foundation" in Ismailia, Egypt. Rendered in ultra-clean Blender 3D / Pixar claymation aesthetic with soft studio lighting and rounded friendly edges. 

Timeline breakdown:
- 0 to 2s: A floating geometric green island with smooth rounded clay corners gently rises from tranquil crystal turquoise water, revealing miniature stylized landmarks of Ismailia.
- 2 to 5s: Cute stylized 3D miniature volunteers wearing orange and navy blue vests pop in happily, assembling miniature school desks and cozy village homes with heart-shaped sparkles.
- 5 to 7s: Lush low-poly palm trees and vibrant flower gardens sprout dynamically from the soil, as a cute stylized food package and development toolbox assemble in the center.
- 7 to 10s: Clear sparkling water flows smoothly through a miniature Suez canal curve around the island, culminating in a gentle explosion of golden and warm orange celebratory confetti and golden sunlight beaming down.

Camera: Locked orthographic 45-degree isometric camera angle, steady smooth motion with no abrupt cuts, perfect for continuous frame-by-frame scroll scrubbing, warm vibrant colors, high contrast, clean minimalist clay render, 60fps, 4K quality.
```

### ج) الربط البرمجي المقترح عند الاستئناف (GSAP Code Blueprint):
```jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroScrollVideo() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=4000',
        pin: true,
        scrub: 0.8,
      }
    });

    // ربط ثواني الفيديو (10 ثوانٍ) بنسبة السكرول
    video.onloadedmetadata = () => {
      tl.to(video, {
        currentTime: video.duration || 10,
        ease: 'none',
      });
    };

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="video-scroll-container">
      <video
        ref={videoRef}
        src="/videos/life_makers_ismailia_3d.mp4"
        playsInline
        muted
        preload="auto"
        className="video-scroll-canvas"
      />
    </div>
  );
}
```

---

## 🛠️ المكدس التقني (Tech Stack)

### الخلفية البرمجية (Backend):
- **Laravel 11.x** (PHP 8.2+)
- **Filament 3.x** (لوحة الإدارة الشاملة وإدارة الصلاحيات عبر Shield)
- **SQLite / MySQL** لقاعدة البيانات

### الواجهة الأمامية (Frontend):
- **React 19 / 18** مدمج عبر **Inertia.js v2**
- **Bootstrap 5.3** مخصص ومدمج مع نظام Vanilla CSS Design System حديث
- **GSAP 3.15 + ScrollTrigger** (جاهز لتحريك السكرول والفيديو)
- **Framer Motion & AOS** للانتقالات والحركات البصرية
- **Three.js** للمؤثرات التفاعلية ثلاثية الأبعاد
- **React Icons / FontAwesome** للأيقونات الفيكتورية

### أدوات البناء (Build Tools):
- **Vite 7** مع الإضافة الرسمية `laravel-vite-plugin`
- **PostCSS**

---

## 🚀 دليل التشغيل والتطوير

### 1. المتطلبات الأساسية:
- **PHP** >= 8.2 مع الامتدادات الأساسية (sqlite, pdo, curl, mbstring, gd).
- **Composer** لإدارة حزم PHP.
- **Node.js** (LTS) و **NPM**.

### 2. تثبيت الحزم:
```bash
# تثبيت حزم الـ Backend
composer install

# تثبيت حزم الـ Frontend
npm install
```

### 3. إعداد البيئة وقاعدة البيانات:
```bash
# نسخ ملف البيئة
copy .env.example .env

# توليد مفتاح التطبيق
php artisan key:generate

# تنفيذ التهجير وتعبئة البيانات
php artisan migrate --seed
```

### 4. تشغيل خوادم التطوير:
يمكنك تشغيل ملف الباتش التلقائي المرفق:
```bash
run.bat
```
أو تشغيل السيرفرين يدوياً في نافذتين منفصلتين:
```bash
# نافذة 1: خادم Laravel
php artisan serve --port=8000

# نافذة 2: خادم تجميع أصول React / Vite
npm run dev
```

### 5. بناء الأصول للإنتاج:
```bash
npm run build
php artisan optimize:clear
```

---

## 🧭 خارطة الطريق لاستئناف العمل (Resume Roadmap)

عند الرغبة في العودة واستكمال التطوير، يرجى اتباع الأولويات التالية:

1. **توليد فيديو الـ 3D وتصديره**:
   - استخدام البرومبت المذكور أعلاه عبر (Runway Gen-3 Alpha / Kling 1.5 / Luma Dream Machine) بدقة 1080p أو 4K، وتسميته `life_makers_ismailia_3d.mp4`.
   - وضع الملف في مسار `public/videos/`.
2. **دمج مكون الـ Scroll Video**:
   - استدعاء مكون `HeroScrollVideo` في `Home/index.jsx` لربط السكرول بمشاهد الفيديو.
3. **توسيع لوحة تحكم Filament**:
   - ربط إحصائيات التبرعات المباشرة وطلبات الانضمام مباشرة مع إشعارات البريد أو الواتساب لمسؤولي الفرع.
4. **اختبار التوافقية على شاشات الجوال بمختلف المقاسات**.

---
*تم توثيق هذا الملف وحفظ آخر حالة للمشروع بنجاح.*
