import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaPhoneAlt,
  FaGraduationCap,
  FaHospital,
  FaHeart,
  FaExternalLinkAlt,
  FaDirections
} from "react-icons/fa";

export default function AboutIsmailiaBranch() {
  const localActivities = [
    {
      icon: <FaGraduationCap size={22} style={{ color: "#3b82f6" }} />,
      title: "دعم التعليم وتجهيز الشنط المدرسية",
      desc: "توزيع آلاف الحقائب المدرسية المتكاملة والزي للطلاب الأيتام والأولى بالرعاية بقرى ومراكز الإسماعيلية مع انطلاق كل فصل دراسي."
    },
    {
      icon: <FaHospital size={22} style={{ color: "#ef4444" }} />,
      title: "التواجد الميداني بمستشفيات القناة",
      desc: "تمركز فرق المتطوعين بمستشفى جامعة قناة السويس والمجمع الطبي لتقديم المساعدة للمرضى المصابين وتيسير إجراءات العلاج."
    },
    {
      icon: <FaHeart size={22} style={{ color: "#FBAE42" }} />,
      title: "قوافل الإغاثة وكسوة الشتاء",
      desc: "تسيير قوافل الإغاثة الدورية لمراكز (فايد، التل الكبير، القنطرة، أبو صوير) لتوزيع بطاطين الشتاء وكراتين المواد الغذائية."
    }
  ];

  return (
    <section id="ismailia-branch" className="about-ismailia-section py-12 relative">
      <div className="container py-4">
        <div
          className="p-6 md:p-12 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #013758 0%, #014976 100%)",
            borderRadius: "2.5rem", // 40px organic rounded corners
            color: "#ffffff",
            boxShadow: "0 20px 50px -10px rgba(1, 55, 88, 0.4)"
          }}
        >
          {/* Ambient Glow */}
          <div
            className="absolute"
            style={{
              top: "-20%",
              left: "-10%",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(251, 174, 66, 0.2) 0%, transparent 70%)",
              pointerEvents: "none"
            }}
          />

          <div className="row align-items-center position-relative" style={{ zIndex: 2 }}>
            <div className="col-12 col-lg-7 mb-4 mb-lg-0">
              <span
                className="badge px-4 py-2 rounded-full font-bold mb-4 inline-flex items-center"
                style={{
                  background: "rgba(251, 174, 66, 0.2)",
                  color: "#FBAE42",
                  border: "1px solid rgba(251, 174, 66, 0.4)",
                  fontSize: "0.88rem",
                  gap: "0.4rem"
                }}
              >
                <FaMapMarkerAlt />
                <span>نبض العمل التطوعي في مدن القناة</span>
              </span>

              <h2 className="display-5 font-bold mb-4" style={{ lineHeight: 1.3 }}>
                صناع الحياة - فرع الإسماعيلية
              </h2>

              <p className="text-xl font-light mb-6" style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "1.1rem", lineHeight: 1.85 }}>
                يمثل فرع الإسماعيلية الذراع الميداني النشط لمؤسسة صناع الحياة مصر في إقليم القناة. نقود شبكة واسعة من المتطوعين من طلبة وخريجي جامعة قناة السويس وشباب المحافظة، ونعمل على سد الاحتياجات الإنسانية العاجلة والمستدامة عبر كافة مراكز وقرى المحافظة.
              </p>

              {/* Local Key Activities */}
              <div className="row g-3 mb-4">
                {localActivities.map((act, aIdx) => (
                  <div key={aIdx} className="col-12">
                    <div
                      className="p-4 flex items-start rounded-4"
                      style={{
                        background: "rgba(255, 255, 255, 0.07)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "1.25rem",
                        gap: "0.85rem"
                      }}
                    >
                      <div
                        className="flex items-center justify-center shrink-0 mt-1"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: "rgba(255, 255, 255, 0.15)"
                        }}
                      >
                        {act.icon}
                      </div>
                      <div>
                        <h4 className="text-[1rem] font-medium leading-[1.2] mb-2 font-bold mb-1" style={{ color: "#FBAE42" }}>
                          {act.title}
                        </h4>
                        <p className="text-[80%] mb-0 text-light" style={{ opacity: 0.9, lineHeight: 1.65 }}>
                          {act.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Branch Contact & Exact Location Card with Interactive Map */}
            <div className="col-12 col-lg-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 relative"
                style={{
                  background: "var(--card-color, #ffffff)",
                  borderRadius: "2rem", // 32px rounded corners
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center" style={{ gap: "0.5rem" }}>
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "1rem",
                        background: "rgba(1, 73, 118, 0.08)",
                        color: "var(--main-color)"
                      }}
                    >
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h3 className="text-[1.25rem] font-medium leading-[1.2] mb-2 font-bold mb-0" style={{ color: "var(--main-color)" }}>
                        مقر صناع الحياة بالإسماعيلية
                      </h3>
                      <span className="text-[80%] text-muted">مقرنا مفتوح دائماً لزيارتكم</span>
                    </div>
                  </div>
                </div>

                {/* Embedded Responsive Interactive Google Map (Exact coordinates as in Contact page) */}
                <div
                  className="mb-4 relative overflow-hidden"
                  style={{
                    borderRadius: "1.25rem", // 20px
                    border: "1.5px solid rgba(1, 73, 118, 0.12)",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                    height: "220px"
                  }}
                >
                  <iframe
                    title="life-makers-ismailia-exact-location"
                    src="https://www.google.com/maps?q=30.612942440173153,32.2684368165654&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col">
                  <a
                    href="https://www.google.com/maps?q=30.612942440173153,32.2684368165654"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-glow-amber w-full py-2 md:py-4 rounded-full font-bold flex items-center justify-center no-underline"
                    style={{
                      background: "linear-gradient(135deg, #FBAE42 0%, #f59e0b 100%)",
                      color: "#000000",
                      gap: "0.5rem",
                      border: "none",
                      fontSize: "0.95rem"
                    }}
                  >
                    <FaDirections size={18} />
                    <span>فتح الموقع على Google Maps</span>
                  </a>

                  <div className="flex gap-2 mt-1">
                    <a
                      href="https://wa.me/201017092613"
                      target="_blank"
                      rel="noreferrer"
                      className="btn grow py-2 rounded-full font-bold flex items-center justify-center no-underline"
                      style={{
                        background: "rgba(37, 211, 102, 0.12)",
                        color: "#16a34a",
                        border: "1.5px solid rgba(37, 211, 102, 0.3)",
                        gap: "0.4rem",
                        fontSize: "0.9rem"
                      }}
                    >
                      <span>واتساب الفرع</span>
                    </a>

                    <a
                      href="https://www.facebook.com/share/1Yc9JA2JEw/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn grow py-2 rounded-full font-bold flex items-center justify-center no-underline"
                      style={{
                        background: "rgba(24, 119, 242, 0.1)",
                        color: "#1877f2",
                        border: "1.5px solid rgba(24, 119, 242, 0.25)",
                        gap: "0.4rem",
                        fontSize: "0.9rem"
                      }}
                    >
                      <FaFacebookF size={14} />
                      <span>فيسبوك</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
