import React, { useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import { router } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLanguage } from "../Context/LanguageContext";
import {
  FaUser,
  FaLock,
  FaIdCard,
  FaUserPlus,
  FaSignInAlt,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCalendarAlt,
  FaBriefcase,
  FaCamera,
  FaBuilding,
  FaFolderOpen,
  FaCheck,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaArrowLeft,
  FaEnvelope,
  FaSyncAlt
} from "react-icons/fa";

export default function Login() {
  const { t, isRtl } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false); // false = Login (Front), true = Signup (Back)
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Login states
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup states
  const [name, setName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [centerId, setCenterId] = useState("");
  const [committeeId, setCommitteeId] = useState("");
  const [qualification, setQualification] = useState("");
  const [job, setJob] = useState("");
  const [address, setAddress] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const centers = [
    { value: "الإسماعيلية", label: isRtl ? "مركز الإسماعيلية (الرئيسي)" : "Ismailia Center (HQ)" },
    { value: "التل الكبير", label: isRtl ? "مركز التل الكبير" : "El-Tal El-Kabeer" },
    { value: "أبو صوير", label: isRtl ? "مركز أبو صوير" : "Abu Sweir" },
    { value: "القنطرة", label: isRtl ? "مركز القنطرة" : "El-Qantara" },
    { value: "فايد", label: isRtl ? "مركز فايد" : "Fayed" },
  ];

  const committees = [
    { value: "الجذب والتطوع", label: isRtl ? "الجذب والتطوع" : "Attraction & Onboarding" },
    { value: "أحسن صاحب", label: isRtl ? "أحسن صاحب (ذوي الإعاقة)" : "Ahsan Saheb (Inclusion)" },
    { value: "قدوة وبناء القادة", label: isRtl ? "قدوة وبناء القادة" : "Qodwa & Leadership" },
    { value: "الميديا والإعلام", label: isRtl ? "الميديا والإعلام" : "Media & Production" },
    { value: "حملة هنوصلك", label: isRtl ? "حملة هنوصلك" : "Hnwslak Campaign" },
    { value: "أنشطة الأطفال والتعليم", label: isRtl ? "أنشطة الأطفال والتعليم" : "Kids & Education" },
    { value: "المعارض والكساء", label: isRtl ? "المعارض والكساء" : "Clothing & Welfare" },
    { value: "التنمية والمشروعات", label: isRtl ? "التنمية والمشروعات (وقف النخيل)" : "Development & Projects" },
    { value: "الإغاثة والرعاية الصحية", label: isRtl ? "الإغاثة والرعاية الصحية" : "Relief & Healthcare" },
  ];

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        return toast.error(isRtl ? "حجم الصورة يجب ألا يتعدى 5 ميجابايت" : "Photo size cannot exceed 5MB");
      }
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginId || !loginPassword) {
      return toast.warning(isRtl ? "يرجى إدخال الرقم القومي / البريد وكلمة المرور" : "Please enter your National ID/Email and password");
    }

    setIsLoading(true);
    router.post(
      "/account/login",
      { national_identity: loginId, password: loginPassword },
      {
        onSuccess: () => {
          setIsLoading(false);
          toast.success(isRtl ? "تم تسجيل الدخول بنجاح!" : "Logged in successfully!");
        },
        onError: (errors) => {
          setIsLoading(false);
          const firstErr = Object.values(errors)[0];
          toast.error(firstErr || (isRtl ? "الرقم القومي أو كلمة المرور غير صحيحة" : "Invalid credentials"));
        },
      }
    );
  };

  const validateStep1 = () => {
    if (!name.trim()) return toast.error(isRtl ? "يرجى إدخال الاسم الرباعي" : "Please enter full quadruple name");
    if (!nationalId.trim()) return toast.error(isRtl ? "يرجى إدخال الرقم القومي" : "Please enter National ID");
    if (nationalId.trim().length !== 14) return toast.warning(isRtl ? "الرقم القومي يجب أن يتكون من 14 رقماً" : "National ID must be 14 digits");
    if (!phoneNumber.trim()) return toast.error(isRtl ? "يرجى إدخال رقم الهاتف" : "Please enter phone number");
    if (!email.trim() || !email.includes("@")) return toast.error(isRtl ? "يرجى إدخال بريد إلكتروني صالح" : "Please enter a valid email address");
    if (!birthday) return toast.error(isRtl ? "يرجى إدخال تاريخ الميلاد" : "Please enter birth date");
    setStep(2);
  };

  const validateStep2 = () => {
    if (!centerId) return toast.error(isRtl ? "يرجى اختيار مركز التطوع" : "Please select volunteer center");
    if (!committeeId) return toast.error(isRtl ? "يرجى اختيار ملف التطوع المفضل" : "Please select preferred committee");
    if (!qualification.trim()) return toast.error(isRtl ? "يرجى إدخال المؤهل الدراسي" : "Please enter qualification");
    if (!address.trim()) return toast.error(isRtl ? "يرجى إدخال العنوان" : "Please enter address");
    setStep(3);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!password || password.length < 8) {
      return toast.error(isRtl ? "كلمة المرور يجب أن تكون 8 أحرف على الأقل" : "Password must be at least 8 characters");
    }
    if (password !== confirmPassword) {
      return toast.error(isRtl ? "كلمة المرور غير متطابقة" : "Passwords do not match");
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("national_identity", nationalId);
    formData.append("phone_number", phoneNumber);
    formData.append("email", email);
    formData.append("birthday", birthday);
    formData.append("address", address);
    formData.append("detailed_address", detailedAddress);
    formData.append("job", job);
    formData.append("qualification", qualification);
    formData.append("password", password);
    formData.append("password_confirmation", confirmPassword);
    if (photo) formData.append("personal_photo", photo);

    router.post("/account/register", formData, {
      onSuccess: () => {
        setIsLoading(false);
        toast.success(isRtl ? "أهلاً بك في أسرة صناع الحياة! تم إنشاء حسابك بنجاح." : "Welcome to Life Makers! Registration successful.");
      },
      onError: (errors) => {
        setIsLoading(false);
        const firstErr = Object.values(errors)[0];
        toast.error(firstErr || (isRtl ? "حدث خطأ أثناء إرسال استمارة التطوع" : "Error submitting application"));
      },
    });
  };

  return (
    <MainLayout>
      <ToastContainer position="top-center" rtl={isRtl} theme="colored" autoClose={3500} />

      <section className="py-12" style={{ background: "transparent", minHeight: "85vh" }}>
        <div className="container py-4">
          <div className="text-center mb-6">
            <span
              className="inline-flex items-center px-4 py-1 rounded-full mb-2 font-bold"
              style={{
                background: "rgba(1, 73, 118, 0.08)",
                color: "var(--main-color)",
                border: "1px solid rgba(1, 73, 118, 0.2)",
                fontSize: "0.85rem"
              }}
            >
              <FaShieldAlt className="me-2" />
              <span>{t("auth_badge", "البوابة الرسمية لمتطوعي الإسماعيلية")}</span>
            </span>

            <h2 className="display-5 font-bold mb-2" style={{ color: "var(--main-color)" }}>
              {isFlipped ? t("auth_signup_heading", "انضم إلى صناع الأثر") : t("auth_login_heading", "مرحباً بك مجدداً")}
            </h2>
            <p className="text-muted text-[80%] mx-auto" style={{ maxWidth: "520px" }}>
              {isFlipped
                ? t("auth_signup_sub", "سجل بياناتك وانضم لعائلة صناع الحياة لنصنع معاً الفارق في مجتمعنا")
                : t("auth_login_sub", "سجل دخولك لمتابعة ملفك التطوعي ومهام لجانك وفعالياتك القادمة")}
            </p>

            {/* Quick Switch Buttons */}
            <div className="inline-flex items-center p-1 rounded-full mt-4 shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]" style={{ background: "rgba(1, 73, 118, 0.08)", border: "1px solid var(--card-border)" }}>
              <button
                type="button"
                onClick={() => setIsFlipped(false)}
                className={`btn btn-sm rounded-full font-bold px-6 py-2 border-0 ${!isFlipped ? "btn-glow-navy text-white shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]" : "text-muted"}`}
                style={{ transition: "all 0.3s ease" }}
              >
                <FaSignInAlt className="me-1" />
                <span>{t("auth_tab_login", "تسجيل الدخول")}</span>
              </button>
              <button
                type="button"
                onClick={() => setIsFlipped(true)}
                className={`btn btn-sm rounded-full font-bold px-6 py-2 border-0 ${isFlipped ? "btn-glow-amber text-dark shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]" : "text-muted"}`}
                style={{ fontSize: "0.9rem", transition: "all 0.3s ease" }}
              >
                <FaUserPlus className="me-1" />
                <span>{t("auth_tab_signup", "استمارة تطوع جديدة")}</span>
              </button>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7">
              <div
                className="flip-card-perspective-wrapper relative w-full"
                style={{
                  perspective: "1600px",
                  minHeight: isFlipped ? "640px" : "490px",
                  transition: "min-height 0.45s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
              >
                <motion.div
                  className="flip-card-inner relative w-full h-full"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* ====== FRONT FACE: LOGIN ====== */}
                  <div
                    className="bento-card-modern w-full p-6 md:p-12"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      position: isFlipped ? "absolute" : "relative",
                      top: 0,
                      left: 0,
                      zIndex: isFlipped ? 1 : 2,
                      pointerEvents: isFlipped ? "none" : "auto"
                    }}
                  >
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#dee2e6]" style={{ borderColor: "var(--card-border)" }}>
                      <h4 className="font-bold mb-0 flex items-center" style={{ color: "var(--main-color)", gap: "0.5rem" }}>
                        <FaSignInAlt />
                        <span>{t("auth_tab_login", "تسجيل الدخول للمتطوعين")}</span>
                      </h4>
                      <span className="badge bg-warning text-dark font-bold px-4 py-1 rounded-full">
                        Life Makers
                      </span>
                    </div>

                    <form onSubmit={handleLogin}>
                      <div className="mb-6">
                        <label className="form-label font-bold text-[80%] text-muted">
                          {t("auth_login_id", "الرقم القومي أو البريد الإلكتروني")}
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-light text-muted border-e-0">
                            <FaIdCard />
                          </span>
                          <input
                            type="text"
                            className="form-control py-2"
                            placeholder={t("auth_login_id_placeholder", "أدخل رقمك القومي (14 رقم) أو بريدك الإلكتروني")}
                            value={loginId}
                            onChange={(e) => setLoginId(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="form-label font-bold text-[80%] text-muted">
                          {t("auth_login_password", "كلمة المرور")}
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-light text-muted border-e-0">
                            <FaLock />
                          </span>
                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control py-2"
                            placeholder={t("auth_login_password_placeholder", "أدخل كلمة المرور")}
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                          />
                          <button
                            type="button"
                            className="btn btn-outline-secondary border-s-0"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label="Toggle password visibility"
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="btn-glow-navy btn-shimmer w-full py-4 font-bold shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)] flex items-center justify-center mb-6"
                        style={{ gap: "0.5rem" }}
                      >
                        <FaSignInAlt />
                        <span>{isLoading ? t("auth_login_loading", "جاري التحقق...") : t("auth_login_btn", "تسجيل الدخول للمنصة")}</span>
                      </button>

                      {/* 3D Flip Trigger to Register */}
                      <div className="text-center pt-4 border-t border-[#dee2e6]" style={{ borderColor: "var(--card-border)" }}>
                        <button
                          type="button"
                          onClick={() => { setIsFlipped(true); setStep(1); }}
                          className="btn-glow-amber btn-shimmer px-6 py-2 font-bold inline-flex items-center"
                          style={{ gap: "0.5rem" }}
                        >
                          <FaSyncAlt />
                          <span>{t("auth_flip_to_register", "ليس لديك حساب بعد؟ اضغط هنا للتسجيل كمتطوع جديد ↻")}</span>
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* ====== BACK FACE: REGISTRATION WIZARD ====== */}
                  <div
                    className="bento-card-modern w-full p-6 md:p-12"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      position: isFlipped ? "relative" : "absolute",
                      top: 0,
                      left: 0,
                      zIndex: isFlipped ? 2 : 1,
                      pointerEvents: isFlipped ? "auto" : "none"
                    }}
                  >
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#dee2e6]" style={{ borderColor: "var(--card-border)" }}>
                      <h4 className="font-bold mb-0 flex items-center" style={{ color: "var(--main-color)", gap: "0.5rem" }}>
                        <FaUserPlus />
                        <span>{t("auth_tab_signup", "استمارة تطوع جديدة")}</span>
                      </h4>
                      <button
                        type="button"
                        onClick={() => setIsFlipped(false)}
                        className="btn btn-sm btn-outline-secondary rounded-full px-4 flex items-center"
                        style={{ gap: "0.35rem" }}
                      >
                        <FaSyncAlt size={11} />
                        <span className="text-[80%]">{t("auth_tab_login", "دخول")}</span>
                      </button>
                    </div>

                    {/* Stepper Indicator */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#dee2e6] relative">
                      {[
                        { num: 1, label: t("auth_step1_tab", "البيانات الشخصية") },
                        { num: 2, label: t("auth_step2_tab", "مجالات التطوع") },
                        { num: 3, label: t("auth_step3_tab", "تأكيد الحساب") },
                      ].map((s) => (
                        <div
                          key={s.num}
                          className="flex flex-col items-center text-center cursor-pointer"
                          onClick={() => { if (s.num < step) setStep(s.num); }}
                        >
                          <div
                            className={`auth-stepper-circle rounded-full flex items-center justify-center font-bold mb-1 shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)] ${step >= s.num ? "active" : ""}`}
                            style={{
                              width: "36px",
                              height: "36px",
                              background: step >= s.num ? "var(--main-color)" : "var(--card-border)",
                              color: step >= s.num ? "#ffffff" : "var(--text-muted)",
                              transition: "all 0.3s ease",
                            }}
                          >
                            {step > s.num ? <FaCheck size={14} /> : s.num}
                          </div>
                          <span
                            className="text-[80%] font-bold hidden sm:inline"
                            style={{
                              color: step >= s.num ? "var(--main-color)" : "var(--text-muted)",
                              fontSize: "0.8rem",
                            }}
                          >
                            {s.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* STEP 1: PERSONAL DATA */}
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 15 }}
                      >
                        <h5 className="font-bold mb-4" style={{ color: "var(--main-color)" }}>
                          {t("auth_step1_title", "البيانات الشخصية ومعلومات الاتصال")}
                        </h5>

                        <div className="row g-3">
                          <div className="col-12 mb-3">
                            <label className="form-label text-[80%] font-bold">{t("auth_full_name", "الاسم رباعياً بالكامل *")}</label>
                            <div className="input-group">
                              <span className="input-group-text bg-light text-muted"><FaUser /></span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder={t("auth_full_name_ph", "أدخل اسمك رباعياً")}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-6 mb-3">
                            <label className="form-label text-[80%] font-bold">{t("auth_nid", "الرقم القومي (14 رقم) *")}</label>
                            <div className="input-group">
                              <span className="input-group-text bg-light text-muted"><FaIdCard /></span>
                              <input
                                type="text"
                                maxLength="14"
                                className="form-control"
                                placeholder={t("auth_nid_ph", "الرقم القومي 14 رقماً")}
                                value={nationalId}
                                onChange={(e) => setNationalId(e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-6 mb-3">
                            <label className="form-label text-[80%] font-bold">{t("auth_phone", "رقم الهاتف / واتساب *")}</label>
                            <div className="input-group">
                              <span className="input-group-text bg-light text-muted"><FaPhone /></span>
                              <input
                                type="tel"
                                className="form-control"
                                placeholder={t("auth_phone_ph", "01XXXXXXXXX")}
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-6 mb-3">
                            <label className="form-label text-[80%] font-bold">{t("auth_email", "البريد الإلكتروني *")}</label>
                            <div className="input-group">
                              <span className="input-group-text bg-light text-muted"><FaEnvelope /></span>
                              <input
                                type="email"
                                className="form-control"
                                placeholder={t("auth_email_ph", "name@example.com")}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-6 mb-3">
                            <label className="form-label text-[80%] font-bold">{t("auth_dob", "تاريخ الميلاد *")}</label>
                            <div className="input-group">
                              <span className="input-group-text bg-light text-muted"><FaCalendarAlt /></span>
                              <input
                                type="date"
                                className="form-control"
                                value={birthday}
                                onChange={(e) => setBirthday(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={validateStep1}
                          className="btn-glow-navy btn-shimmer w-full py-4 font-bold mt-4 flex items-center justify-center"
                          style={{ gap: "0.5rem" }}
                        >
                          <span>{t("auth_next_step2", "المتابعة لمجالات التطوع")}</span>
                          {isRtl ? <FaArrowLeft /> : <FaArrowRight />}
                        </button>
                      </motion.div>
                    )}

                    {/* STEP 2: VOLUNTEERING INTERESTS */}
                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 15 }}
                      >
                        <h5 className="font-bold mb-4" style={{ color: "var(--main-color)" }}>
                          {t("auth_step2_title", "مجال ولجنة التطوع المفضلة")}
                        </h5>

                        <div className="row g-3">
                          <div className="col-12 col-md-6 mb-3">
                            <label className="form-label text-[80%] font-bold">{t("auth_center", "مركز / مدينة التطوع *")}</label>
                            <div className="input-group">
                              <span className="input-group-text bg-light text-muted"><FaBuilding /></span>
                              <select
                                className="form-select form-control"
                                value={centerId}
                                onChange={(e) => setCenterId(e.target.value)}
                                required
                              >
                                <option value="">{t("auth_center_ph", "-- اختر المركز --")}</option>
                                {centers.map((c, i) => (
                                  <option key={i} value={c.value}>{c.label}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="col-12 col-md-6 mb-3">
                            <label className="form-label text-[80%] font-bold">{t("auth_committee", "اللجنة أو الملف التطوعي *")}</label>
                            <div className="input-group">
                              <span className="input-group-text bg-light text-muted"><FaFolderOpen /></span>
                              <select
                                className="form-select form-control"
                                value={committeeId}
                                onChange={(e) => setCommitteeId(e.target.value)}
                                required
                              >
                                <option value="">{t("auth_committee_ph", "-- اختر اللجنة الأنسب لك --")}</option>
                                {committees.map((com, i) => (
                                  <option key={i} value={com.value}>{com.label}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="col-12 col-md-6 mb-3">
                            <label className="form-label text-[80%] font-bold">{t("auth_qualification", "المؤهل الدراسي *")}</label>
                            <div className="input-group">
                              <span className="input-group-text bg-light text-muted"><FaGraduationCap /></span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder={t("auth_qualification_ph", "مثال: كلية هندسة / طالب")}
                                value={qualification}
                                onChange={(e) => setQualification(e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-6 mb-3">
                            <label className="form-label text-[80%] font-bold">{t("auth_job", "الوظيفة الحالية")}</label>
                            <div className="input-group">
                              <span className="input-group-text bg-light text-muted"><FaBriefcase /></span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder={t("auth_job_ph", "اتركه فارغاً إذا كنت طالباً")}
                                value={job}
                                onChange={(e) => setJob(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="col-12 mb-3">
                            <label className="form-label text-[80%] font-bold">{t("auth_address", "العنوان بالتفصيل *")}</label>
                            <div className="input-group">
                              <span className="input-group-text bg-light text-muted"><FaMapMarkerAlt /></span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder={t("auth_address_ph", "المدينة / الحي / الشارع")}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3 mt-4">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="btn-glow-ghost px-6 py-4 font-bold flex items-center"
                            style={{ gap: "0.5rem" }}
                          >
                            {isRtl ? <FaArrowRight /> : <FaArrowLeft />}
                            <span>{t("auth_prev", "السابق")}</span>
                          </button>

                          <button
                            type="button"
                            onClick={validateStep2}
                            className="btn-glow-navy btn-shimmer grow py-4 font-bold flex items-center justify-center"
                            style={{ gap: "0.5rem" }}
                          >
                            <span>{t("auth_next_step3", "المتابعة لتأكيد الحساب")}</span>
                            {isRtl ? <FaArrowLeft /> : <FaArrowRight />}
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3: SECURITY & PHOTO */}
                    {step === 3 && (
                      <motion.form
                        key="step3"
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 15 }}
                        onSubmit={handleSignupSubmit}
                      >
                        <h5 className="font-bold mb-4" style={{ color: "var(--main-color)" }}>
                          {t("auth_step3_title", "كلمة المرور والصورة الشخصية")}
                        </h5>

                        {/* Photo Upload with Preview */}
                        <div className="text-center mb-6">
                          <div className="relative inline-block">
                            <div
                              className="rounded-full shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)] overflow-hidden flex items-center justify-center mx-auto"
                              style={{
                                width: "110px",
                                height: "110px",
                                background: "rgba(1,73,118,0.08)",
                                border: "2px dashed var(--main-color)",
                              }}
                            >
                              {photoPreview ? (
                                <img
                                  src={photoPreview}
                                  alt="Preview"
                                  className="w-full h-full"
                                  style={{ objectFit: "cover" }}
                                />
                              ) : (
                                <FaCamera size={32} className="text-muted" />
                              )}
                            </div>
                            <label
                              htmlFor="personal-photo-input-wizard"
                              className="btn-glow-navy px-4 py-1 rounded-full mt-2 cursor-pointer text-[80%] font-bold"
                            >
                              <span>{photoPreview ? t("auth_photo_change", "تغيير الصورة") : t("auth_photo_btn", "رفع صورة شخصية")}</span>
                              <input
                                id="personal-photo-input-wizard"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handlePhotoChange}
                              />
                            </label>
                          </div>
                          <div className="text-[80%] text-muted mt-1">{t("auth_photo_hint", "اختياري: يفضل صورة واضحة")}</div>
                        </div>

                        <div className="row g-3 mb-4">
                          <div className="col-12 col-md-6 mb-3">
                            <label className="form-label text-[80%] font-bold">{t("auth_pass", "كلمة المرور *")}</label>
                            <div className="input-group">
                              <span className="input-group-text bg-light text-muted"><FaLock /></span>
                              <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-6 mb-3">
                            <label className="form-label text-[80%] font-bold">{t("auth_pass_confirm", "تأكيد كلمة المرور *")}</label>
                            <div className="input-group">
                              <span className="input-group-text bg-light text-muted"><FaLock /></span>
                              <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3 mb-6">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="btn-glow-ghost px-6 py-4 font-bold flex items-center"
                            style={{ gap: "0.5rem" }}
                          >
                            {isRtl ? <FaArrowRight /> : <FaArrowLeft />}
                            <span>{t("auth_prev", "السابق")}</span>
                          </button>

                          <button
                            type="submit"
                            disabled={isLoading}
                            className="btn-glow-amber btn-shimmer grow py-4 font-bold shadow-[0_1rem_3rem_rgba(0,0,0,0.175)] flex items-center justify-center"
                          >
                            <FaCheck className="me-2" />
                            <span>{isLoading ? t("auth_submitting", "جاري الإرسال...") : t("auth_submit", "إرسال استمارة التطوع")}</span>
                          </button>
                        </div>
                      </motion.form>
                    )}

                    {/* 3D Flip Trigger to Login */}
                    <div className="text-center pt-4 border-t border-[#dee2e6]" style={{ borderColor: "var(--card-border)" }}>
                      <button
                        type="button"
                        onClick={() => setIsFlipped(false)}
                        className="btn-glow-navy btn-shimmer px-6 py-2 font-bold inline-flex items-center"
                        style={{ gap: "0.5rem", fontSize: "0.88rem" }}
                      >
                        <FaSyncAlt />
                        <span>{t("auth_flip_to_login", "لديك حساب بالفعل؟ اضغط هنا للعودة لتسجيل الدخول ↺")}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
