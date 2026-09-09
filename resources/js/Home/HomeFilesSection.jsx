import React from "react";
import FileCard from "../Components/FileCard";
import { FaFolderOpen } from "react-icons/fa";
import { useLanguage } from "../Context/LanguageContext";

export default function HomeFilesSection({ files = [] }) {
  const { t, isRtl } = useLanguage();

  // Comprehensive fallback for all 13 committees
  const defaultCommittees = [
    { name: isRtl ? "الجذب والتطوع" : "Volunteer Attraction & Onboarding", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>` },
    { name: isRtl ? "أحسن صاحب" : "Ahsan Saheb (Disability Inclusion)", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>` },
    { name: isRtl ? "قدوة وبناء القادة" : "Qodwa & Youth Leadership", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>` },
    { name: isRtl ? "الميديا والإعلام" : "Media & Creative Production", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>` },
    { name: isRtl ? "حملة هنوصلك" : "Hnwslak (Integrated Services Card)", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>` },
    { name: isRtl ? "أنشطة الأطفال والتعليم" : "Children's Education & Activities", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>` },
    { name: isRtl ? "المعارض والكساء" : "Clothing & Welfare Exhibitions", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>` },
    { name: isRtl ? "التنمية والمشروعات" : "Development & Micro-Projects", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>` },
    { name: isRtl ? "الإغاثة والرعاية الصحية" : "Medical Relief & Healthcare", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>` },
    { name: isRtl ? "الدعم والتواصل" : "Support & Volunteer Relations", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>` },
    { name: isRtl ? "IT وضبط العضوية" : "IT & Membership Quality", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>` },
    { name: isRtl ? "المنح والشراكات" : "Grants & Partnerships", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>` },
    { name: isRtl ? "التوعية المجتمعية" : "Community Awareness", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>` },
  ];

  const items = (files && files.length > 0) ? files : defaultCommittees;

  return (
    <section id="files-section" className="py-12" style={{ background: "rgba(1, 73, 118, 0.02)" }}>
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center px-4 py-1 rounded-full mb-4 font-bold"
            style={{
              background: "rgba(251, 174, 66, 0.15)",
              color: "var(--secondary-color)",
              fontSize: "0.9rem"
            }}
          >
            <FaFolderOpen className="me-2" />
            <span>{t("home_files_badge", "مجالات العمل والتطوع")}</span>
          </span>

          <h2 className="font-bold mb-4" style={{ color: "var(--text-color)", fontSize: "2.2rem" }}>
            {t("home_files_title", "ملفات ولجان صناع الحياة")}
          </h2>
          <p className="text-xl font-light text-muted mx-auto" style={{ maxWidth: "660px", fontSize: "1.05rem" }}>
            {t("home_files_subtitle", "تتعدد لجان وملفات صناع الحياة لتغطي كافة الاحتياجات التنموية والمجتمعية بالإسماعيلية.")}
          </p>
        </div>

        {/* Cards Grid with 3D Tilt */}
        <div className="row g-4 justify-content-center">
          {items.map((file, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <FileCard
                type="committee"
                title={file.name}
                icon={file.icon}
                path={file.name}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
