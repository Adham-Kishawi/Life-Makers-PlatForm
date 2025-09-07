import React, { useState } from "react";
import {
    FaUser,
    FaLock,
    FaIdCard,
    FaUserPlus,
    FaSignInAlt,
    FaPhone,
    FaMapMarkerAlt,
    FaMap,
    FaGraduationCap,
    FaCalendarAlt,
    FaBriefcase,
    FaCamera,
    FaUsers,
    FaBuilding,
    FaFolderOpen,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./authold.css";
import { router } from "@inertiajs/react";
import Select from "react-select";

function AuthCardold() {
    const options = [
        { value: "qudwa", label: "قدوة" },
        { value: "bestfriend", label: "أحسن صاحب" },
        { value: "attraction", label: "الجذب" },
        { value: "media", label: "الميديا" },
    ];
    const centerOptions = [
        { value: "abuSwair", label: "أبو صوير" },
        { value: "telKebir", label: "تل كبير" },
        { value: "ismailia", label: "الإسماعيلية" },
        { value: "kantara", label: "قنطرة" },
    ];

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
    const [committeeId, setCommitteeId] = useState([]);
    const [committeeError, setCommitteeError] = useState("");
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
            if (!name) return toast.error("يرجى إدخال الاسم بالكامل");

            const parts = name.trim().split(/\s+/);
            if (parts.length < 4)
                return toast.error("يرجى إدخال الاسم الرباعي كاملاً");

            if (parts.some((part) => part.length < 3))
                return toast.warning(
                    "كل اسم يجب ان يتكون من ثلاث حروف علي الاقل"
                );

            if (!birthday) return toast.error("يرجى إدخال تاريخ الميلاد");
            if (!qualification) return toast.error("يرجى إدخال المؤهل الدراسي");
            if (!job) return toast.error("يرجى إدخال الوظيفة");

            if (!phoneNumber || phoneNumber.length < 10)
                return toast.error("يرجى إدخال رقم هاتف صالح");

            if (!email.includes("@"))
                return toast.error("يرجى إدخال بريد إلكتروني صالح");

            if (!nationality) return toast.warning("يرجى اختيار الجنسية");

            if (nationality === "مصري" && (!id || id.trim().length !== 14))
                return toast.error(
                    "يرجى إدخال الرقم القومي المكون من 14 رقمًا"
                );

            if (nationality === "غير مصري" && !id)
                return toast.error("يرجى إدخال رقم الهوية");

            if (!photo) return toast.error("يرجى رفع صورة شخصية");
            if (!identityImage)
                return toast.error("يرجى رفع صورة الهوية/البطاقة");

            if (!address) return toast.error("يرجى إدخال العنوان");
            if (!detailedAddress)
                if (!committeeId || committeeId.length === 0)
                    return toast.error("يرجى اختيار ملف");

            if (committeeId.length > 2)
                return toast.error("لا يمكنك اختيار أكثر من ملفين");
            if (!centerId) return toast.error("يرجى اختيار المركز");

            if (Array.isArray(centerId))
                return toast.error("يرجى اختيار مركز واحد فقط");

            if (!password || password.length < 8)
                return toast.error("كلمة المرور يجب أن تكون 8 أحرف على الأقل");

            if (password !== confirmPassword)
                return toast.error("كلمة المرور غير متطابقة");

            router.post("/account/register", toggleForm);
            toast.success("تم إنشاء الحساب بنجاح!");
        } else {
            if (!name && !password)
                return toast.warning("يرجى إدخال الرقم القومي وكلمة المرور");

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
                                type="text"
                                placeholder="تاريخ الميلاد"
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => {
                                    if (!e.target.value) e.target.type = "text";
                                }}
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
                                onChange={(e) =>
                                    setQualification(e.target.value)
                                }
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
                        <select
                            value={nationality}
                            onChange={handleNationalityChange}
                        >
                            <option value="">اختر</option>
                            <option value="مصري">مصري</option>
                            <option value="غير مصري">غير مصري</option>
                        </select>

                        {(nationality === "مصري" ||
                            nationality === "غير مصري") && (
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
                                <div className="input-group">
                                    <FaCamera />
                                    <input
                                        type="text"
                                        placeholder={
                                            nationality === "مصري"
                                                ? "صورة البطاقة"
                                                : "صورة الهوية"
                                        }
                                        onFocus={(e) =>
                                            (e.target.type = "file")
                                        }
                                        onChange={(e) => {
                                            if (
                                                e.target.files &&
                                                e.target.files[0]
                                            ) {
                                                setIdentityImage(
                                                    e.target.files[0]
                                                );
                                                e.target.type = "text";
                                                e.target.value =
                                                    e.target.files[0].name;
                                            }
                                        }}
                                        onBlur={(e) => {
                                            if (!e.target.value)
                                                e.target.type = "text";
                                        }}
                                    />
                                </div>
                            </>
                        )}
                        <div className="input-group">
                            <FaCamera />
                            <input
                                type="text"
                                placeholder="صورة شخصية"
                                onFocus={(e) => (e.target.type = "file")}
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        setPhoto(e.target.files[0]);
                                        e.target.type = "text";
                                        e.target.value = e.target.files[0].name;
                                    }
                                }}
                                onBlur={(e) => {
                                    if (!e.target.value) e.target.type = "text";
                                }}
                            />
                        </div>
                        <div className="custom-select-group input-group">
                            <FaFolderOpen />
                            <Select
                                isMulti
                                options={options}
                                value={options.filter((opt) =>
                                    committeeId.includes(opt.value)
                                )}
                                onChange={(selected) =>
                                    setCommitteeId(
                                        selected.map((opt) => opt.value)
                                    )
                                }
                                placeholder="اختر الملف"
                                styles={{
                                    valueContainer: (base) => ({
                                        ...base,
                                        flexWrap: "wrap",
                                        maxHeight: "120px",
                                        overflowY: "auto",
                                    }),
                                    indicatorsContainer: (base) => ({
                                        ...base,
                                        alignItems: "start",
                                    }),
                                    control: (base) => ({
                                        ...base,
                                        minHeight: "48px",
                                    }),
                                    singleValue: (base) => ({
                                        ...base,
                                        color: "black",
                                    }),
                                    multiValueLabel: (base) => ({
                                        ...base,
                                        color: "black",
                                    }),
                                    option: (base) => ({
                                        ...base,
                                        color: "black",
                                    }),
                                }}
                            />
                        </div>

                        <div className="input-group custom-select-group">
                            <FaBuilding />
                            <Select
                                options={centerOptions}
                                value={
                                    centerOptions.find(
                                        (opt) => opt.value === centerId
                                    ) || null
                                }
                                onChange={(selected) =>
                                    setCenterId(selected ? selected.value : "")
                                }
                                placeholder="اختر المركز"
                                isClearable
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        minHeight: "48px",
                                    }),
                                    singleValue: (base) => ({
                                        ...base,
                                        color: "black",
                                    }),
                                    option: (base) => ({
                                        ...base,
                                        color: "black",
                                    }),
                                }}
                            />
                        </div>

                        {/*  */}
                        {isSignup && (
                            <button
                                className="submit-btn text-center"
                                onClick={handleSubmit}
                            >
                                إنشاء حساب
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthCardold;
