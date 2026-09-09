import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaPhoneAlt,
  FaGlobe,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaExternalLinkAlt,
  FaMoneyBillWave,
  FaMobileAlt,
  FaBuilding
} from "react-icons/fa";

export default function AboutOfficialHub() {
  const donationChannels = [
    { name: "كود فوري (Fawry)", code: "950", note: "عبر أي ماكينة فوري بالجمهورية" },
    { name: "فودافون كاش (Vodafone Cash)", code: "*9*40#", note: "كود الاتصال السريع المباشر" },
    { name: "حسابات البنك الأهلي وبنك CIB", code: "صناع الحياة مصر", note: "التحويلات البنكية الرسمية المعتمدة" }
  ];

  const socialLinks = [
    {
      name: "فيسبوك - صناع الحياة مصر (الصفحة الرسمية)",
      url: "https://www.facebook.com/LifeMakersEgypt",
      icon: <FaFacebookF size={18} />,
      color: "#1877f2",
      badge: "المركز الرئيسي"
    },
    {
      name: "فيسبوك - صناع الحياة الإسماعيلية",
      url: "https://www.facebook.com/LifeMakersIsmailia",
      icon: <FaFacebookF size={18} />,
      color: "#0284c7",
      badge: "فرع الإسماعيلية"
    },
    {
      name: "إنستغرام (Instagram)",
      url: "https://www.instagram.com/lifemakersegypt/",
      icon: <FaInstagram size={18} />,
      color: "#e1306c",
      badge: "تغطيات الميدان"
    },
    {
      name: "يوتيوب (YouTube)",
      url: "https://www.youtube.com/@LifeMakersEgypt",
      icon: <FaYoutube size={18} />,
      color: "#ff0000",
      badge: "أفلام وقصص نجاح"
    },
    {
      name: "لينكد إن (LinkedIn)",
      url: "https://www.linkedin.com/company/life-makers-foundation/",
      icon: <FaLinkedinIn size={18} />,
      color: "#0a66c2",
      badge: "شبكة الشراكات"
    }
  ];

  return (
    <section id="official-hub" className="about-official-hub-section py-12 relative">
      <div className="container py-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="badge px-4 py-2 rounded-full font-bold mb-4 inline-flex items-center"
            style={{
              background: "rgba(251, 174, 66, 0.15)",
              color: "var(--secondary-color)",
              border: "1px solid rgba(251, 174, 66, 0.3)",
              fontSize: "0.9rem",
              gap: "0.4rem"
            }}
          >
            <FaGlobe className="text-warning" />
            <span>المنظومة الرقمية المعتمدة</span>
          </span>
          <h2 className="display-5 font-bold mb-4" style={{ color: "var(--main-color)" }}>
            المنصات والروابط الرسمية لمؤسسة صناع الحياة
          </h2>
          <p className="text-xl font-light text-muted mx-auto" style={{ maxWidth: "760px", fontSize: "1.1rem", lineHeight: 1.8 }}>
            جميع قنوات التواصل المعتمدة، بوابات التبرع الإلكتروني الآمن، والمنصات الرقمية التابعة للمؤسسة ككل في مصر والإسماعيلية.
          </p>
        </motion.div>

        <div className="row g-4">
          {/* Donation & Hotline Big Card */}
          <div className="col-12 col-lg-6 mb-4">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full p-6 md:p-12 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, var(--card-color) 0%, rgba(251, 174, 66, 0.05) 100%)",
                borderRadius: "1.75rem", // 28px
                border: "1.5px solid var(--card-border)",
                boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.05)"
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "1.25rem",
                    background: "rgba(251, 174, 66, 0.18)",
                    color: "var(--secondary-color)"
                  }}
                >
                  <FaHeart size={26} />
                </div>
                <span className="badge rounded-full px-4 py-2 bg-warning text-dark font-bold">
                  تبرع آمن ومعتمد
                </span>
              </div>

              <h3 className="text-[1.5rem] font-medium leading-[1.2] mb-2 font-bold mb-4" style={{ color: "var(--main-color)" }}>
                بوابة التبرع الرسمي لدعم المشروعات
              </h3>
              <p className="text-muted mb-6" style={{ lineHeight: 1.75 }}>
                يمكنك المساهمة في مشروعات صناع الحياة (شنطة المدرسة، قوافل الإسماعيلية، رزق حلال، ستر وعافية) من خلال القنوات الإلكترونية المعتمدة:
              </p>

              {/* Donation channels pill list */}
              <div className="flex flex-col gap-2 mb-6">
                {donationChannels.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-4 flex items-center justify-between"
                    style={{
                      background: "rgba(1, 73, 118, 0.03)",
                      border: "1px solid rgba(1, 73, 118, 0.08)",
                      borderRadius: "1.25rem"
                    }}
                  >
                    <div>
                      <strong style={{ color: "var(--main-color)", fontSize: "0.95rem" }}>{item.name}</strong>
                      <div className="text-[80%] text-muted">{item.note}</div>
                    </div>
                    <span
                      className="px-4 py-1 rounded-full font-bold whitespace-nowrap"
                      style={{
                        background: "var(--card-color)",
                        border: "1px solid #FBAE42",
                        color: "var(--secondary-color)",
                        fontSize: "0.9rem"
                      }}
                    >
                      {item.code}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://donate.lifemakers.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-glow-amber px-6 py-4 rounded-full font-bold no-underline inline-flex items-center grow justify-center"
                  style={{
                    background: "linear-gradient(135deg, #FBAE42 0%, #f59e0b 100%)",
                    color: "#000000",
                    border: "none",
                    gap: "0.5rem"
                  }}
                >
                  <FaExternalLinkAlt size={14} />
                  <span>بوابة التبرع الإلكتروني (donate.lifemakers.org)</span>
                </a>

                <a
                  href="tel:16563"
                  className="btn px-6 py-4 rounded-full font-bold no-underline inline-flex items-center justify-center"
                  style={{
                    background: "rgba(1, 73, 118, 0.08)",
                    color: "var(--main-color)",
                    border: "1.5px solid rgba(1, 73, 118, 0.2)",
                    gap: "0.5rem"
                  }}
                >
                  <FaPhoneAlt size={15} />
                  <span>الخط الساخن: 16563</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Social Platforms & Portals Big Card */}
          <div className="col-12 col-lg-6 mb-4">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="h-full p-6 md:p-12 relative overflow-hidden"
              style={{
                background: "var(--card-color)",
                borderRadius: "1.75rem", // 28px
                border: "1.5px solid var(--card-border)",
                boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.05)"
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "1.25rem",
                    background: "rgba(1, 73, 118, 0.08)",
                    color: "var(--main-color)"
                  }}
                >
                  <FaGlobe size={26} />
                </div>
                <a
                  href="https://lifemakers.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="badge rounded-full px-4 py-2 no-underline font-bold"
                  style={{
                    background: "rgba(1, 73, 118, 0.08)",
                    color: "var(--main-color)",
                    fontSize: "0.85rem",
                    border: "1px solid rgba(1, 73, 118, 0.15)"
                  }}
                >
                  <span>الموقع القومي الرئيسي: lifemakers.org ↗</span>
                </a>
              </div>

              <h3 className="text-[1.5rem] font-medium leading-[1.2] mb-2 font-bold mb-4" style={{ color: "var(--main-color)" }}>
                المنصات وحسابات التواصل الاجتماعي
              </h3>
              <p className="text-muted mb-6" style={{ lineHeight: 1.75 }}>
                تابع أحدث أخبار المبادرات الميدانية، قوافل الإسماعيلية، ومواعيد فتح باب التطوع عبر حساباتنا الموثقة:
              </p>

              {/* Social items list with 20px rounded pill cards */}
              <div className="flex flex-col gap-2 mb-6">
                {socialLinks.map((social, sIdx) => (
                  <a
                    key={sIdx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-4 flex items-center justify-between no-underline"
                    style={{
                      background: "rgba(1, 73, 118, 0.02)",
                      border: "1px solid var(--card-border)",
                      borderRadius: "1.25rem",
                      transition: "all 0.25s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(-4px)";
                      e.currentTarget.style.borderColor = social.color;
                      e.currentTarget.style.background = "rgba(1, 73, 118, 0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.borderColor = "var(--card-border)";
                      e.currentTarget.style.background = "rgba(1, 73, 118, 0.02)";
                    }}
                  >
                    <div className="flex items-center" style={{ gap: "0.75rem" }}>
                      <span
                        className="flex items-center justify-center rounded-full shrink-0"
                        style={{
                          width: "36px",
                          height: "36px",
                          background: `${social.color}15`,
                          color: social.color
                        }}
                      >
                        {social.icon}
                      </span>
                      <span className="font-bold" style={{ color: "var(--main-color)", fontSize: "0.95rem" }}>
                        {social.name}
                      </span>
                    </div>

                    <div className="flex items-center" style={{ gap: "0.5rem" }}>
                      <span className="badge rounded-full px-2 py-1 text-[80%]" style={{ background: "rgba(1, 73, 118, 0.06)", color: "var(--text-muted)" }}>
                        {social.badge}
                      </span>
                      <FaExternalLinkAlt size={12} className="text-muted" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Sister Organizations Links */}
              <div
                className="p-4 rounded-4 mt-auto"
                style={{
                  background: "rgba(1, 73, 118, 0.03)",
                  border: "1px dashed rgba(1, 73, 118, 0.2)",
                  borderRadius: "1.25rem"
                }}
              >
                <span className="text-[80%] text-muted block mb-2 font-bold">
                  🔗 مواقع شقيقة تابعة للشبكة:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.lifemakers-ngo.org"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[80%] no-underline font-bold"
                    style={{ color: "var(--main-color)" }}
                  >
                    • جمعية صناع الحياة للأعمال الخيرية ↗
                  </a>
                  <a
                    href="https://lifemakersalex.org"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[80%] no-underline font-bold"
                    style={{ color: "var(--main-color)" }}
                  >
                    • مؤسسة صناع الحياة إسكندرية ↗
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
