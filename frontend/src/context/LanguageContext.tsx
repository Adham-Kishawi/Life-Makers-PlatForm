"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "ar" | "en";

export interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
  isRtl: boolean;
}

export const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navigation
    nav_home: "الرئيسية",
    nav_about: "عن المؤسسة",
    nav_committees: "اللجان والملفات (13)",
    nav_contact: "تواصل معنا",
    nav_volunteer: "خليك صنعاوي",
    nav_login: "تسجيل الدخول",
    nav_logout: "تسجيل الخروج",
    nav_lang: "اللغة",
    nav_theme_dark: "الوضع الليلي",
    nav_theme_light: "الوضع النهاري",
    nav_all_committees: "استعراض كافة اللجان والملفات",
    nav_dashboard: "بوابة الحساب والأنشطة",
    nav_admin: "إدارة النظام والفرع",

    // Hero
    hero_badge: "مؤسسة صناع الحياة مصر • فرع الإسماعيلية",
    hero_title: "صُنّاع الحياة.. نبني أثراً، نصنع مستقبلاً",
    hero_subtitle: "حركة شبابية تطوعية رائدة تعمل منذ عام 2004 في كافة مراكز وقرى محافظة الإسماعيلية على تمكين الشباب وتنمية المجتمع بروح العطاء والإيجابية.",
    hero_cta_volunteer: "خليك صنعاوي (انضم الآن)",
    hero_cta_explore: "استكشف اللجان والملفات (13 لجنة)",
    stat_volunteers: "+5,000",
    stat_volunteers_label: "متطوع صنعاوي نشط",
    stat_convoys: "+150",
    stat_convoys_label: "قافلة تنموية وطبية",
    stat_beneficiaries: "+25,000",
    stat_beneficiaries_label: "أسرة مستفيدة بالإسماعيلية",
    stat_years: "+20",
    stat_years_label: "عاماً من الأثر والتنمية",

    // Committees Section
    committees_title: "لجان وملفات صناع الحياة (13 لجنة متخصصة)",
    committees_subtitle: "تتنوع لجاننا لتغطي مختلف مسارات التنمية والعمل الميداني، لتجد دائماً المجال الأقرب لشغفك ومهاراتك.",
    committees_view_all: "عرض تفاصيل وملفات اللجان الـ 13 كاملة",
    committees_explore_card: "استعراض الفعاليات والأنشطة",

    // Initiatives / Slider
    initiatives_kicker: "محطات ميدانية بارزة",
    initiatives_title: "أبرز مبادرات وقوافل الخير بالإسماعيلية",
    initiatives_join_btn: "انضم كمتطوع في هذه المبادرة",
    initiatives_details_btn: "تفاصيل المبادرة",

    // Campaigns Section
    campaigns_kicker: "مشاريع الخير المستدامة",
    campaigns_title: "أبرز حملات وقوافل المؤسسة بالإسماعيلية",
    campaigns_donate_link: "المشاركة أو التبرع للحملات",
    campaigns_families_label: "الأسر المستفيدة",
    campaigns_volunteers_registered: "متطوع مسجل",
    campaigns_join_btn: "انضم كمتطوع بالقافلة",

    // Join Us / Volunteer Community
    join_kicker: "عائلة صناع الحياة بالإسماعيلية",
    join_title: "مكانك مستنيك وسط آلاف الشباب اللي قرروا يصنعوا الأمل",
    join_subtitle: "التطوع في صناع الحياة رحلة حقيقية لبناء شخصيتك ومهاراتك القيادية. نوثق ساعاتك الميدانية في القوافل، ونحتفي بكل خطوة وبصمة تتركها بشارات تقدير وشهادات معتمدة.",
    join_cta_btn: "سجل الآن كمتطوع جديد",

    // Auth & Login
    auth_login_tab: "تسجيل دخول المتطوعين",
    auth_register_tab: "استمارة تطوع جديدة (خليك صنعاوي)",
    auth_id_label: "الرقم القومي (14 رقم) أو البريد الإلكتروني",
    auth_pass_label: "كلمة المرور",
    auth_role_label: "الدور والصلاحية",
    auth_role_volunteer: "متطوع نشط",
    auth_role_manager: "مسؤول ملف / لجنة",
    auth_role_admin: "مدير المنصة (Super Admin)",
    auth_submit_login: "تسجيل الدخول للمنصة",
    auth_next_step: "المتابعة للخطوة التالية",
    auth_prev_step: "الرجوع للخطوة السابقة",
    auth_submit_register: "إرسال استمارة التطوع والانضمام",

    // Footer
    footer_desc: "مؤسسة أهلية وطنية غير حكومية، عضو مؤسس بالتحالف الوطني للعمل الأهلي التنموي، نهدف لتمكين الشباب وتنمية القرى الأكثر احتياجاً بالإسماعيلية بروح الإيجابية والعطاء.",
    footer_rights: "© 2026 مؤسسة صناع الحياة مصر - فرع الإسماعيلية. جميع الحقوق محفوظة.",
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_committees: "Committees (13)",
    nav_contact: "Contact Us",
    nav_volunteer: "Be a Maker",
    nav_login: "Sign In",
    nav_logout: "Sign Out",
    nav_lang: "Language",
    nav_theme_dark: "Dark Mode",
    nav_theme_light: "Light Mode",
    nav_all_committees: "Explore All 13 Committees",
    nav_dashboard: "Volunteer Portal",
    nav_admin: "Admin & CRM Portal",

    // Hero
    hero_badge: "Life Makers Egypt • Ismailia Branch",
    hero_title: "Life Makers.. Building Impact, Shaping the Future",
    hero_subtitle: "A leading youth volunteering movement founded in 2004 across all centers and villages of Ismailia to empower youth and foster sustainable community growth.",
    hero_cta_volunteer: "Be a Maker (Join Now)",
    hero_cta_explore: "Explore Committees (13 Domains)",
    stat_volunteers: "+5,000",
    stat_volunteers_label: "Active Youth Volunteers",
    stat_convoys: "+150",
    stat_convoys_label: "Medical & Relief Convoys",
    stat_beneficiaries: "+25,000",
    stat_beneficiaries_label: "Beneficiary Families in Ismailia",
    stat_years: "+20",
    stat_years_label: "Years of Sustainable Impact",

    // Committees Section
    committees_title: "Specialized Committees & Portfolios (13 Domains)",
    committees_subtitle: "Our specialized committees cover diverse developmental tracks, matching your personal passion and career skills.",
    committees_view_all: "View All 13 Committee Details",
    committees_explore_card: "Explore Activities & Media",

    // Initiatives / Slider
    initiatives_kicker: "Field Highlights",
    initiatives_title: "Prominent Humanitarian Initiatives in Ismailia",
    initiatives_join_btn: "Volunteer in this Initiative",
    initiatives_details_btn: "Initiative Details",

    // Campaigns Section
    campaigns_kicker: "Sustainable Charity Projects",
    campaigns_title: "Major Convoys & Initiatives Across Ismailia",
    campaigns_donate_link: "Support or Donate to Campaigns",
    campaigns_families_label: "Beneficiary Families",
    campaigns_volunteers_registered: "Volunteers Registered",
    campaigns_join_btn: "Join as Convoy Volunteer",

    // Join Us / Volunteer Community
    join_kicker: "Life Makers Ismailia Family",
    join_title: "Your Place Awaits Among Thousands Making Real Hope",
    join_subtitle: "Volunteering at Life Makers is a transformative journey for your personal and leadership character. We certify your field hours with verified badges and QR certificates.",
    join_cta_btn: "Register as a New Volunteer",

    // Auth & Login
    auth_login_tab: "Volunteer Sign In",
    auth_register_tab: "New Volunteer Application (Be a Maker)",
    auth_id_label: "National ID (14 digits) or Email Address",
    auth_pass_label: "Password",
    auth_role_label: "Access Role",
    auth_role_volunteer: "Active Volunteer",
    auth_role_manager: "Committee Manager",
    auth_role_admin: "Super Admin",
    auth_submit_login: "Sign In to Portal",
    auth_next_step: "Continue to Next Step",
    auth_prev_step: "Back to Previous Step",
    auth_submit_register: "Submit Volunteer Application",

    // Footer
    footer_desc: "A national non-profit NGO, founding member of the National Alliance for Civil Development Work, dedicated to youth empowerment and sustainable community development.",
    footer_rights: "© 2026 Life Makers Egypt - Ismailia Branch. All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ar");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("life_makers_lang") as Language;
      if (stored === "ar" || stored === "en") {
        setLangState(stored);
        document.documentElement.lang = stored;
        document.documentElement.dir = stored === "ar" ? "rtl" : "ltr";
      }
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("life_makers_lang", newLang);
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    }
  };

  const toggleLanguage = () => {
    setLang(lang === "ar" ? "en" : "ar");
  };

  const t = (key: string, fallback?: string): string => {
    const dict = translations[lang] || translations.ar;
    if (dict && dict[key] !== undefined) {
      return dict[key];
    }
    if (translations.ar && translations.ar[key] !== undefined) {
      return translations.ar[key];
    }
    return fallback !== undefined ? fallback : key;
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLanguage,
        t,
        isRtl: lang === "ar",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      lang: "ar" as Language,
      setLang: () => {},
      toggleLanguage: () => {},
      t: (k: string, fb?: string) => fb || k,
      isRtl: true,
    };
  }
  return context;
}
