import { Volunteer, Badge, ActivityLog, KanbanCandidate } from "@/types";

export const INITIAL_BADGES: Badge[] = [
  {
    id: "badge-1",
    name: "beginner",
    titleAr: "متطوع مبتدئ",
    description: "انضمام رسمي إلى أسرة صناع الحياة وإكمال الملف الشخصي.",
    icon: "🌱",
    tier: "bronze",
    unlocked: true,
    unlockedAt: "2026-09-01"
  },
  {
    id: "badge-2",
    name: "change-maker",
    titleAr: "صانع التغيير",
    description: "الحفاظ على استريك نشاط متواصل لمدة 7 أيام متتالية والمشاركة الميدانية.",
    icon: "⚡",
    tier: "silver",
    unlocked: true,
    unlockedAt: "2026-09-20"
  },
  {
    id: "badge-3",
    name: "field-hero",
    titleAr: "بطل الميدان",
    description: "إتمام أكثر من 30 ساعة تطوع ميداني معتمدة في قوافل الخير.",
    icon: "🏆",
    tier: "gold",
    unlocked: true,
    unlockedAt: "2026-10-15"
  },
  {
    id: "badge-4",
    name: "ambassador",
    titleAr: "سفير صناع الحياة",
    description: "استريك 90 يوماً وقيادة مبادرة مجتمعية بالتعاون مع التحالف الوطني.",
    icon: "👑",
    tier: "diamond",
    unlocked: false
  }
];

export const INITIAL_VOLUNTEER: Volunteer = {
  id: "vol-2026-01",
  name: "أحمد كشاوي",
  nationalId: "29901011902345",
  email: "adham.volunteer@lifemakers.org",
  phone: "+201012345678",
  center: "الإسماعيلية (الرئيسي)",
  committee: "الجذب والتطوع",
  personal_photo: "", // Empty to demonstrate Blobatar!
  streakCount: 14,
  longestStreak: 21,
  lastActivityDate: "2026-10-25",
  totalPoints: 1680,
  totalHours: 42,
  level: "قائد ميداني (Level 4)",
  badges: INITIAL_BADGES
};

export const RECENT_ACTIVITIES: ActivityLog[] = [
  {
    id: "act-1",
    title: "تنظيم قافلة عيش وملح بالتل الكبير",
    committee: "الإغاثة والرعاية الصحية",
    date: "2026-10-24",
    hours: 6,
    points: 120,
    status: "verified"
  },
  {
    id: "act-2",
    title: "ورشة تدريبية لمتطوعي الجذب الجدد",
    committee: "الجذب والتطوع",
    date: "2026-10-21",
    hours: 4,
    points: 80,
    status: "verified"
  },
  {
    id: "act-3",
    title: "يوم ترفيهي مع أبطال مبادرة أحسن صاحب",
    committee: "أحسن صاحب",
    date: "2026-10-18",
    hours: 5,
    points: 100,
    status: "verified"
  },
  {
    id: "act-4",
    title: "طرق أبواب حملة هنوصلك بقرية الأبطال",
    committee: "حملة هنوصلك",
    date: "2026-10-12",
    hours: 7,
    points: 140,
    status: "verified"
  }
];

export const INITIAL_CANDIDATES: KanbanCandidate[] = [
  {
    id: "cand-1",
    name: "سارة محمود إبراهيم",
    phone: "01099238471",
    email: "sara.m@gmail.com",
    center: "الإسماعيلية (الرئيسي)",
    committee: "الميديا والإعلام",
    stage: "new",
    appliedAt: "منذ ساعتين",
    notes: "خريجة إعلام ومتخصصة في المونتاج والتصوير الفوتوغرافي"
  },
  {
    id: "cand-2",
    name: "كريم عبد الرحمن",
    phone: "01123487612",
    email: "kareem.a@gmail.com",
    center: "أبو صوير",
    committee: "الإغاثة والرعاية الصحية",
    stage: "interview",
    appliedAt: "منذ يومين",
    notes: "طالب طب بشري - جاهز للمشاركة في القوافل الطبية"
  },
  {
    id: "cand-3",
    name: "مريم خالد حسن",
    phone: "01287654321",
    email: "mariam.k@gmail.com",
    center: "فايد",
    committee: "أحسن صاحب",
    stage: "training",
    appliedAt: "منذ 4 أيام",
    notes: "اجتازت المقابلة، تحضر الورشة التأسيسية للتعامل مع ذوي الإعاقة"
  },
  {
    id: "cand-4",
    name: "يوسف حسام الدين",
    phone: "01065432198",
    email: "youssef.h@gmail.com",
    center: "القنطرة",
    committee: "قدوة وبناء القادة",
    stage: "assigned",
    appliedAt: "منذ أسبوع",
    notes: "تم تسكينه كمنسق مساعد بلجنة التدريب"
  },
  {
    id: "cand-5",
    name: "نوران طارق أحمد",
    phone: "01587612345",
    email: "nouran.t@gmail.com",
    center: "التل الكبير",
    committee: "أنشطة الأطفال والتعليم",
    stage: "active",
    appliedAt: "منذ 3 أسابيع",
    notes: "متطوعة نشطة شاركت في معرضين لتوزيع الشنط المدرسية"
  }
];
