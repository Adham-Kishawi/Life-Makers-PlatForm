import React, { useState } from 'react';
import MainLayout from '../Layouts/MainLayout';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLanguage } from '../Context/LanguageContext';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaCommentAlt, FaCheckCircle } from 'react-icons/fa';

export default function ContactPage() {
  const { t, isRtl } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      return toast.warning(isRtl ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill in all required fields');
    }

    setIsSent(true);
    toast.success(t("contact_success_desc"));
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <MainLayout>
      <ToastContainer position="top-center" rtl={isRtl} theme="colored" autoClose={3500} />
      <ContactHero />

      {/* Interactive Contact Form & Details */}
      <section className="py-12" style={{ background: "transparent" }}>
        <div className="container py-4">
          <div className="row g-5 justify-content-center">
            {/* Form Column */}
            <div className="col-12 col-lg-8">
              <div className="bento-card-modern p-6 md:p-12 shadow-[0_1rem_3rem_rgba(0,0,0,0.175)]">
                <div className="mb-6">
                  <span className="badge px-4 py-1 rounded-full mb-2 font-bold" style={{ background: "rgba(251, 174, 66, 0.15)", color: "var(--secondary-color)" }}>
                    {t("contact_hero_badge", "تواصل مباشر")}
                  </span>
                  <h3 className="font-bold mb-2" style={{ color: "var(--text-color)" }}>
                    {t("contact_form_title", "أرسل لنا رسالة مباشرة")}
                  </h3>
                  <p className="text-muted text-[80%]">
                    {t("contact_form_subtitle", "لديك استفسار، رغبة في التطوع، أو اقتراح لمبادرة مجتمعية؟ يسعدنا دائماً تواصلك معنا.")}
                  </p>
                </div>

                {isSent ? (
                  <div className="text-center py-12 p-6 rounded-4 text-success" style={{ background: "rgba(34, 197, 94, 0.08)", border: "1px solid rgba(34, 197, 94, 0.2)" }}>
                    <FaCheckCircle size={48} className="mb-4 text-success" />
                    <h5 className="font-bold mb-2">{t("contact_success_title", "تم إرسال رسالتك بنجاح!")}</h5>
                    <p className="text-muted text-[80%] mb-4">{t("contact_success_desc", "شكراً لاهتمامك وتواصلك مع أسرة صناع الحياة الإسماعيلية.")}</p>
                    <button
                      type="button"
                      className="btn-glow-navy px-6 py-2 font-bold text-[80%]"
                      onClick={() => setIsSent(false)}
                    >
                      {t("contact_send_another", "إرسال رسالة أخرى")}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-12 col-md-6 mb-4">
                        <label className="form-label font-bold text-[80%] text-muted">{t("contact_name", "الاسم بالكامل *")}</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light text-muted"><FaUser /></span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={t("contact_name_ph", "أدخل اسمك الكريم")}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 mb-4">
                        <label className="form-label font-bold text-[80%] text-muted">{t("contact_phone", "رقم الهاتف / واتساب")}</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light text-muted"><FaPhone /></span>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="01XXXXXXXXX"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-12 mb-4">
                        <label className="form-label font-bold text-[80%] text-muted">{t("contact_email", "البريد الإلكتروني *")}</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light text-muted"><FaEnvelope /></span>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-12 mb-4">
                        <label className="form-label font-bold text-[80%] text-muted">{t("contact_msg", "نص الرسالة أو الاستفسار *")}</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light text-muted"><FaCommentAlt /></span>
                          <textarea
                            className="form-control"
                            rows={4}
                            placeholder={t("contact_msg_ph", "اكتب رسالتك أو استفسارك هنا...")}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn-glow-navy btn-shimmer w-full py-4 font-bold shadow-[0_1rem_3rem_rgba(0,0,0,0.175)] flex items-center justify-center"
                      style={{ gap: "0.6rem", fontSize: "1rem" }}
                    >
                      <FaPaperPlane />
                      <span>{t("contact_send_btn", "إرسال الرسالة الآن")}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social, Map & Address Section */}
      <ContactInfo />
    </MainLayout>
  );
}
