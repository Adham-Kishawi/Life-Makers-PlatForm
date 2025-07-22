import React, { useState } from "react";
import {
  FaUser, FaLock, FaIdCard,
  FaUserPlus, FaSignInAlt
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./auth.css";

function AuthCard() {
  const [isSignup, setIsSignup] = useState(false);
  const [nationality, setNationality] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [id, setId] = useState("");

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setNationality("");
    setName("");
    setPassword("");
    setConfirmPassword("");
    setId("");
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
     
      if (!name || name.trim().length < 3) {
        return toast.error("الاسم يجب أن يكون على الأقل 3 حروف");
      }

      if (!password || password.length < 8) {
        return toast.error("كلمة المرور يجب أن تكون 8 أحرف على الأقل");
      }

      if (password !== confirmPassword) {
        return toast.error("كلمة المرور غير متطابقة");
      }

      if (!nationality) {
        return toast.warning("يرجى اختيار الجنسية");
      }

      if (nationality === "مصري" && (!id || id.trim().length !== 14)) {
        return toast.error("يرجى إدخال الرقم القومي المكون من 14 رقمًا");
      }

      if (nationality === "غير مصري" && !id) {
        return toast.error("يرجى إدخال رقم الهوية");
      }

      toast.success("تم إنشاء الحساب بنجاح!");
    } else {
      
      if (!name && !password) {
        return toast.warning("يرجى إدخال الاسم وكلمة المرور");
      }
      if (!name) {
        return toast.warning("يرجى إدخال الاسم أو الرقم القومي");
      }
      if (!password) {
        return toast.warning("يرجى إدخال كلمة المرور");
      }

   
      if (name !== "12345678901234" || password !== "mypassword123") {
        return toast.error("الرقم القومي أو كلمة المرور غير صحيحة");
      }

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
              <FaLock />
              <input
                type="password"
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input-group">
              <FaLock />
              <input
                type="password"
                placeholder="تأكيد كلمة المرور"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <label className="label">الجنسية</label>
            <select value={nationality} onChange={handleNationalityChange}>
              <option value="">اختر</option>
              <option value="مصري">مصري</option>
              <option value="غير مصري">غير مصري</option>
            </select>

            {(nationality === "مصري" || nationality === "غير مصري") && (
              <div className="input-group">
                <FaIdCard />
                <input
                  type="text"
                  placeholder={
                    nationality === "مصري" ? "الرقم القومي (14 رقم)" : "رقم الهوية"
                  }
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
            )}

            <button className="submit-btn" onClick={handleSubmit}>
              تسجيل
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthCard;
