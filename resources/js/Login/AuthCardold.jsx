import React, { useState } from "react";
import {
  FaUser, FaLock, FaIdCard,
  FaUserPlus, FaSignInAlt,
  FaPhone, FaMapMarkerAlt, FaMap,
  FaGraduationCap, FaCalendarAlt, FaBriefcase,
  FaCamera, FaUsers, FaBuilding
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./authold.css";
import { router } from "@inertiajs/react";

function AuthCardold() {
  const [isSignup, setIsSignup] = useState(false);
  const [nationality, setNationality] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [id, setId] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [birthday, setBirthday] = useState("");
  const [job, setJob] = useState("");
  const [photo, setPhoto] = useState(null);
  const [identityImage, setIdentityImage] = useState(null);
  const [committeeId, setCommitteeId] = useState("");
  const [centerId, setCenterId] = useState("");

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setNationality("");
    setName("");
    setPassword("");
    setConfirmPassword("");
    setId("");
    setPhoneNumber("");
    setAddress("");
    setDetailedAddress("");
    setEmail("");
    setQualification("");
    setBirthday("");
    setJob("");
    setPhoto(null);
    setIdentityImage(null);
    setCommitteeId("");
    setCenterId("");
  };

  const handleNationalityChange = (e) => {
    const value = e.target.value;
    setNationality(value);

    if (value === "غير مصري") {
      toast.info("برجاء إدخال رقم الهوية");
    } else if (value === "مصري") {
      toast.info("برجاء إدخال الرقم القومي");
    }
  };

  const handleSubmit = () => {
    if (isSignup) {
      if (!name || name.trim().length < 3)
        return toast.error("الاسم يجب أن يكون على الأقل 3 حروف");

      if (!birthday) return toast.error("يرجى إدخال تاريخ الميلاد");
      if (!qualification) return toast.error("يرجى إدخال المؤهل الدراسي");
      if (!job) return toast.error("يرجى إدخال الوظيفة");

      if (!phoneNumber || phoneNumber.length < 10)
        return toast.error("يرجى إدخال رقم هاتف صالح");

      if (!email.includes("@"))
        return toast.error("يرجى إدخال بريد إلكتروني صالح");

      if (!nationality)
        return toast.warning("يرجى اختيار الجنسية");

      if (nationality === "مصري" && (!id || id.trim().length !== 14))
        return toast.error("يرجى إدخال الرقم القومي المكون من 14 رقمًا");

      if (nationality === "غير مصري" && !id)
        return toast.error("يرجى إدخال رقم الهوية");

      if (!photo) return toast.error("يرجى رفع صورة شخصية");
      if (!identityImage) return toast.error("يرجى رفع صورة الهوية/البطاقة");

      if (!address) return toast.error("يرجى إدخال العنوان");
      if (!detailedAddress) return toast.error("يرجى إدخال العنوان التفصيلي");

      if (!committeeId) return toast.error("يرجى إدخال رقم اللجنة");
      if (!centerId) return toast.error("يرجى إدخال رقم المركز");

      if (!password || password.length < 8)
        return toast.error("كلمة المرور يجب أن تكون 8 أحرف على الأقل");

      if (password !== confirmPassword)
        return toast.error("كلمة المرور غير متطابقة");


      router.post("/account/register", toggleForm)
      toast.success("تم إنشاء الحساب بنجاح!");
    } else {
      if (!name && !password)
        return toast.warning("يرجى إدخال الاسم وكلمة المرور");

      if (!name) return toast.warning("يرجى إدخال الاسم أو الرقم القومي");
      if (!password) return toast.warning("يرجى إدخال كلمة المرور");

      if (name !== "12345678901234" || password !== "mypassword123")
        return toast.error("الرقم القومي أو كلمة المرور غير صحيحة");

      toast.success("تم تسجيل الدخول بنجاح!");
    }
  };

  return (
    <div className="auth-container" dir="rtl">
      <ToastContainer />

      <img src="/Images/logo.png" alt="logo" className="logo" />

      <div className="toggle-btn">
        <button onClick={toggleForm}>
          {isSignup ? <FaSignInAlt /> : <FaUserPlus />}
          &nbsp;{isSignup ? "صنعاوي جديد" : "صنعاوي قديم"}
        </button>
      </div>

      <h2 className="form-title">
        {isSignup ? "إنشاء حساب جديد" : "تسجيل الدخول"}
      </h2>

      <div className={`card-container ${isSignup ? "flipped" : ""}`}>
        <div className="card">
          {/* Login */}
          <div className="front">
            <div className="input-group">
              <FaIdCard />
              <input
                type="text"
                placeholder="الرقم القومي"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <FaLock />
              <input
                type="password"
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="submit-btn" onClick={handleSubmit}>
              دخول
            </button>
          </div>

          {/* Signup */}
          <div className="back">
            <div className="input-group">
              <FaUser />
              <input
                type="text"
                placeholder="الاسم بالكامل"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-group">
              <FaCalendarAlt />
              <input
                type="date"
                placeholder="تاريخ الميلاد"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>

            <div className="input-group">
              <FaGraduationCap />
              <input
                type="text"
                placeholder="المؤهل الدراسي"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              />
            </div>

            <div className="input-group">
              <FaBriefcase />
              <input
                type="text"
                placeholder="الوظيفة"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </div>

            <div className="input-group">
              <FaPhone />
              <input
                type="text"
                placeholder="رقم الهاتف"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="input-group">
              <FaIdCard />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <label className="label">الجنسية</label>
            <select value={nationality} onChange={handleNationalityChange}>
              <option value="">اختر</option>
              <option value="مصري">مصري</option>
              <option value="غير مصري">غير مصري</option>
            </select>

            {(nationality === "مصري" || nationality === "غير مصري") && (
              <>
                <div className="input-group">
                  <FaIdCard />
                  <input
                    type="text"
                    placeholder={
                      nationality === "مصري"
                        ? "الرقم القومي (14 رقم)"
                        : "رقم الهوية"
                    }
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>

                <label className="label">
                  {nationality === "مصري" ? "صورة البطاقة" : "صورة الهوية"}
                </label>
                <div className="input-group">
                  <FaCamera />
                  <input
                    type="file"
                    onChange={(e) => setIdentityImage(e.target.files[0])}
                  />
                </div>
              </>
            )}

            <label className="label">صورة شخصية</label>
            <div className="input-group">
              <FaCamera />
              <input
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </div>

            <div className="input-group">
              <FaMapMarkerAlt />
              <input
                type="text"
                placeholder="العنوان"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="input-group">
              <FaMap />
              <input
                type="text"
                placeholder="العنوان التفصيلي"
                value={detailedAddress}
                onChange={(e) => setDetailedAddress(e.target.value)}
              />
            </div>

            <div className="input-group">
              <FaUsers />
              <input
                type="text"
                placeholder="رقم اللجنة"
                value={committeeId}
                onChange={(e) => setCommitteeId(e.target.value)}
              />
            </div>

            <div className="input-group">
              <FaBuilding />
              <input
                type="text"
                placeholder="رقم المركز"
                value={centerId}
                onChange={(e) => setCenterId(e.target.value)}
              />
            </div>
            {isSignup && (
              <button
                className="submit-btn text-center"

                onClick={handleSubmit}
              >
                إنشاء حساب
              </button>
            )}
            <div>

            </div>

          </div>
        </div>
      </div>



    </div>
  );
}

export default AuthCardold;
