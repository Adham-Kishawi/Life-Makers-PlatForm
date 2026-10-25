import { Committee } from "@/types";

export const COMMITTEES: Committee[] = [
  {
    id: 1,
    slug: "attraction",
    name: "الجذب والتطوع",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    color: "#014976",
    description: "استقطاب، استقبال، وتوجيه المتطوعين الجدد، وتعريفهم برؤية ورسالة صناع الحياة وتسكينهم في اللجان التخصصية المناسبة لشغفهم ومهاراتهم.",
    activities: [
      { title: "عيلة الجذب والاستقبال", image: "/images/Attraction/Family.jpg", description: "الأسرة والبيئة الحاضنة لكل متطوع جديد في صناع الحياة" },
      { title: "ملتقى المتطوعين الجدد", image: "/images/Attraction/family (2).jpg", description: "لقاءات دورية لتبادل الخبرات وتوطيد روح الفريق" },
      { title: "شرح وتوجيه للملفات التخصصية", image: "/images/Attraction/explain.jpg", description: "جلسات تعريفية مكثفة بكل لجان ومسارات التطوع" },
      { title: "نزول وجذب ميداني بالجامعات", image: "/images/Attraction/ground.jpg", description: "التواجد في الجامعات والأماكن العامة لضم طاقات شبابية جديدة" }
    ]
  },
  {
    id: 2,
    slug: "ahsan-saheb",
    name: "أحسن صاحب (دمج ذوي الإعاقة)",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="15" x2="15.01" y2="15"></line></svg>`,
    color: "#FBAE42",
    description: "مبادرة وطنية بالشراكة مع وزارة التضامن الاجتماعي لدمج وتمكين الأشخاص ذوي الإعاقة من خلال الصداقة الفردية والأنشطة الترفيهية والتأهيل.",
    activities: [
      { title: "عيلة أحسن صاحب", image: "/images/Beast Friend/family.jpg", description: "صداقة حقيقية ودمج مجتمعي كامل لأبطال الهمم" },
      { title: "ملتقيات الدمج والصداقة", image: "/images/Beast Friend/Family (2).jpg", description: "فعاليات دورية تجمع المتطوعين وأصدقائهم من ذوي الإعاقة" },
      { title: "نزولات ميدانية تفاعلية", image: "/images/Beast Friend/Midany.jpg", description: "نزول للمدارس والمراكز لنشر ثقافة الدمج وقبول الآخر" },
      { title: "حملات التوعية في شوارع الإسماعيلية", image: "/images/Beast Friend/street.jpg", description: "توعية المواطنين بحقوق ذوي الإعاقة وكارت الخدمات" }
    ]
  },
  {
    id: 3,
    slug: "qodwa",
    name: "قدوة وبناء القادة",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    color: "#059669",
    description: "الاستثمار في رأس المال البشري وتدريب الكوادر الشبابية على القيادة، التفكير الإبداعي، وإدارة المشروعات والمبادرات التنموية لصناعة قادة الغد.",
    activities: [
      { title: "عيلة قدوة وتأهيل القادة", image: "/images/leader/family.jpg", description: "مجتمع شبابي يتعلم، يطور ذاته، وينقل الأثر للآخرين" },
      { title: "شرح مبسط ومفاهيم القيادة", image: "/images/leader/learn.jpg", description: "ورش عمل تفاعلية في التفكير الاستراتيجي والذكاء العاطفي" },
      { title: "أنشطة ومحاكاة تفاعلية", image: "/images/leader/activity.jpg", description: "محاكاة واقعية لإدارة الأزمات واتخاذ القرارات الجماعية" }
    ]
  },
  {
    id: 4,
    slug: "media",
    name: "الميديا والإعلام",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`,
    color: "#dc2626",
    description: "الجناح الإعلامي والإبداعي لصناع الحياة، مسؤول عن التصوير الميداني، إنتاج الفيديو، التصميم الجرافيكي، وإدارة المنصات وتغطية قوافل الخير.",
    activities: [
      { title: "فريق الميديا والإبداع", image: "/images/Media/family (1).jpg", description: "عين صناع الحياة التي تنقل الحقيقة والبسمة للعالم" },
      { title: "تصاميم الهوية والحملات التوعوية", image: "/images/Media/design (1).jpg", description: "تصميم بوسترات ومطبوعات الحملات والمناسبات الكبرى" },
      { title: "تغطيات فوتوغرافية ميدانية", image: "/images/Media/design (2).jpg", description: "توثيق قوافل الإغاثة وكرنفالات الأطفال لحظة بلحظة" }
    ]
  },
  {
    id: 5,
    slug: "hnwslak",
    name: "حملة هنوصلك",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>`,
    color: "#2563eb",
    description: "حملة وطنية كبرى بالتعاون مع وزارة التضامن الاجتماعي لطرق الأبواب في كافة قرى ومراكز الإسماعيلية لتيسير استخراج بطاقة الخدمات المتكاملة.",
    activities: [
      { title: "طرق الأبواب وحصر المستحقين", image: "/images/Gallery/GalleryHome (1).jpg", description: "الوصول للبيوت في أبعد القرى لمساعدة أصحاب الهمم" },
      { title: "تنسيق قوافل التأهيل المتنقلة", image: "/images/Gallery/GalleryHome (2).jpg", description: "التعاون مع مكاتب التأهيل الاجتماعي لتقديم الخدمة بموقع المستفيد" }
    ]
  },
  {
    id: 6,
    slug: "kids-education",
    name: "أنشطة الأطفال والتعليم",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    color: "#d97706",
    description: "برامج تعليمية وترفيهية وبناء شخصية تستهدف أطفال القرى والأسر الأكثر استحقاقاً، وتوزيع الشنط والأدوات المدرسية وتنظيم الأنشطة الصيفية.",
    activities: [
      { title: "ورش تنمية مهارات الأطفال", image: "/images/Gallery/GalleryHome (3).jpg", description: "رسم، فنون، وأنشطة تفاعلية لغرس القيم الإيجابية" },
      { title: "توزيع الشنط والأدوات المدرسية", image: "/images/leader/activity (4).jpg", description: "دعم الطلاب مع بداية كل عام دراسي في مختلف المراكز" }
    ]
  },
  {
    id: 7,
    slug: "clothing-welfare",
    name: "المعارض والكساء",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
    color: "#7c3aed",
    description: "تنظيم معارض ملابس مجانية كريمة تتيح للأسر والأطفال اختيار ما يناسبهم من الملابس الجديدة، وتوزيع بطاطين وألحفة الشتاء.",
    activities: [
      { title: "معارض كساء العيد المجانية", image: "/images/Gallery/GalleryHome (5).jpg", description: "إتاحة الفرصة للأسر لاختيار ملابس جديدة بفرحة وكرامة" },
      { title: "فرز وتجهيز ملابس الحملات", image: "/images/Gallery/GalleryHome (1).jpg", description: "جهود المتطوعين في كي وفرز الملابس وتغليفها باحترافية" }
    ]
  },
  {
    id: 8,
    slug: "development-projects",
    name: "التنمية والمشروعات (وقف النخيل)",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    color: "#16a34a",
    description: "مشروعات التمكين الاقتصادي والمشروعات الصغيرة (مثل وقف النخيل الخيري وتأهيل الأسر المعيلة) لتحويل الاحتياج إلى إنتاج مستدام.",
    activities: [
      { title: "مشروعات وقف النخيل التنموي", image: "/images/Banner/نخيل كبير.jpg", description: "وقف خيري استثماري يضمن عائداً مستداماً للأسر المستحقة" },
      { title: "تمكين الأسر المعيلة", image: "/images/Gallery/GalleryHome (4).jpg", description: "دعم المشروعات متناهية الصغر وتسليم أدوات الإنتاج" }
    ]
  },
  {
    id: 9,
    slug: "relief-health",
    name: "الإغاثة والرعاية الصحية (عيش وملح)",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`,
    color: "#e11d48",
    description: "تنظيم القوافل الطبية المتخصصة، الكشف وصرف العلاج المجاني، التدخل في حوادث الطوارئ، وتوزيع كراتين المواد الغذائية (حملة عيش وملح).",
    activities: [
      { title: "قوافل عيش وملح الغذائية", image: "/images/Banner/عيش وملح كبير.jpg", description: "توزيع آلاف كراتين المواد الغذائية الأساسية سنوياً" },
      { title: "القوافل الطبية التخصصية", image: "/images/Gallery/GalleryHome (1).jpg", description: "كشف طبي مجاني وصرف العلاج وتحويل الحالات للجراحة" }
    ]
  },
  {
    id: 10,
    slug: "support-relations",
    name: "الدعم والتواصل",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
    color: "#4f46e5",
    description: "إدارة العلاقات والتواصل الفعال مع المتطوعين، تنظيم المؤتمرات السنوية، والاحتفاء بشركاء النجاح.",
    activities: [
      { title: "ملتقيات التواصل السنوية", image: "/images/Gallery/GalleryHome (6).jpg", description: "تجمع دوري لتعزيز التواصل بين فرق العمل والقيادات" }
    ]
  },
  {
    id: 11,
    slug: "it-membership",
    name: "IT وضبط العضوية",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    color: "#0891b2",
    description: "التحول الرقمي، ميكنة تسجيل المتطوعين، إدارة منصة صناع الحياة، وتطوير الأنظمة التقنية الداخلية.",
    activities: [
      { title: "منصة المتطوعين الرقمية", image: "/images/Gallery/GalleryHome (4).jpg", description: "إدارة البيانات وحساب ساعات التطوع والتقييمات" }
    ]
  },
  {
    id: 12,
    slug: "grants-partnerships",
    name: "المنح والشراكات",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>`,
    color: "#ca8a04",
    description: "بناء جسور التعاون مع الجامعات والشركات والتحالف الوطني للعمل الأهلي التنموي لتمويل وتنفيذ مشروعات كبرى.",
    activities: [
      { title: "شراكات التحالف الوطني", image: "/images/Gallery/GalleryHome (2).jpg", description: "مشاريع تنموية بالشراكة مع كبرى الكيانات الوطنية" }
    ]
  },
  {
    id: 13,
    slug: "community-awareness",
    name: "التوعية المجتمعية",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    color: "#0284c7",
    description: "حملات تثقيفية وتوعوية في المدارس والجامعات والشوارع لنشر الوعي الصحي والبيئي وثقافة العمل التطوعي.",
    activities: [
      { title: "حملات التوعية الميدانية", image: "/images/Beast Friend/street (3).jpg", description: "تفاعل مباشر ونشر المفاهيم الصحيحة بين المواطنين" }
    ]
  }
];
