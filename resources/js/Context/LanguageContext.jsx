import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  ar: {
    // Navigation
    nav_home: 'الرئيسية',
    nav_about: 'عن المؤسسة',
    nav_committees: 'ملفاتنا',
    nav_contact: 'تواصل معنا',
    nav_volunteer: 'خليك صنعاوي',
    nav_login: 'دخول',
    nav_logout: 'تسجيل الخروج',
    nav_lang: 'اللغة',
    nav_theme_dark: 'الوضع الليلي',
    nav_theme_light: 'الوضع النهاري',
    nav_all_committees: 'استعراض كافة الملفات والأنشطة',

    // Hero / Banner
    hero_badge: 'مؤسسة صناع الحياة - الإسماعيلية',
    hero_title: 'صُنّاع الحياة.. نبني أثراً، نصنع مستقبلاً',
    hero_subtitle: 'حركة شبابية تطوعية رائدة تعمل منذ عام 2004 على تمكين الشباب وتنمية المجتمعات الأكثر احتياجاً بروح الإيجابية والعطاء.',
    hero_cta_volunteer: 'خليك صنعاوي (انضم الآن)',
    hero_cta_explore: 'تعرف على مشروعاتنا',
    stat_volunteers: '+5,000',
    stat_volunteers_label: 'متطوع صنعاوي نشط',
    stat_convoys: '+150',
    stat_convoys_label: 'قافلة تنموية وطبية',
    stat_beneficiaries: '+25,000',
    stat_beneficiaries_label: 'أسرة مستفيدة بإسماعيلية',
    stat_years: '+20',
    stat_years_label: 'عاماً من الأثر والتنمية',

    // Home About Section
    home_about_badge: 'إحنا مين؟',
    home_about_title: 'شباب.. أمل.. نماء',
    home_about_desc: 'مؤسسة صناع الحياة مصر هي مؤسسة أهلية وطنية غير ربحية تأسست عام 2004 كحركة شبابية تطوعية، ومسجلة مركزيًا برقم 839 لسنة 2018. نهدف في فرع الإسماعيلية إلى حشد طاقات الشباب وتوجيهها نحو المبادرات الإنسانية والمشروعات التنموية المستدامة.',
    home_about_feat1_title: 'تأهيل القيادات الشابة',
    home_about_feat1_desc: 'تدريب وصقل مهارات المتطوعين ليصبحوا قادة فاعلين في المجتمع.',
    home_about_feat2_title: 'قوافل وإغاثة ميدانية',
    home_about_feat2_desc: 'الوصول المباشر للأسر الأولى بالرعاية في كافة مراكز وقرى المحافظة.',
    home_about_feat3_title: 'دمج وتمكين ذوي الإعاقة',
    home_about_feat3_desc: 'مبادرة "أحسن صاحب" الوطنية لدمج وتمكين أصحاب الهمم في المجتمع.',
    home_about_experience: 'أكثر من 20 عاماً في خدمة المجتمع المصري',
    home_about_more: 'اقرأ المزيد عن تاريخنا ورسالتنا',

    // Home Video Section
    video_badge: 'شاهد صناع الحياة في الميدان',
    video_title: 'نبض الشباب وصناعة الأمل في الإسماعيلية',
    video_subtitle: 'رحلة حقيقية تنبض بالحياة، من قوافل الإغاثة ودمج أصحاب الهمم، إلى تأهيل قادة المستقبل وتنمية القرى الأكثر احتياجاً.',
    video_play_prompt: 'شاهد الفيديو التفاعلي',

    // Home Committees Section
    home_files_badge: 'مجالات العمل والتطوع',
    home_files_title: 'ملفات ولجان صناع الحياة الإسماعيلية',
    home_files_subtitle: 'تتعدد لجان وملفات صناع الحياة لتغطي كافة الاحتياجات التنموية والمجتمعية، وتتيح لكل متطوع اختيار المجال الأقرب لمهاراته وشغفه.',
    home_files_explore_all: 'استعراض كافة الأنشطة',
    file_explore: 'استعراض الأنشطة والفعاليات',
    zoom_image: 'اضغط لتكبير الصورة',

    // Committee Details Page
    committee_specialized: 'ملف تخصصي معتمد',
    committee_join_btn: 'انضم كمتطوع في هذا الملف',
    committee_activities: 'الأنشطة والفعاليات الميدانية',
    committee_registered: 'فعالية مسجلة بالصور',
    committee_empty_title: 'لا توجد فعاليات معروضة حالياً',
    committee_empty_desc: 'يتم تحديث أنشطة هذا الملف باستمرار من خلال الفريق الميداني. يمكنك الانضمام والمشاركة في الأنشطة القادمة!',
    committee_empty_btn: 'كن أول المشاركين في الفعالية القادمة',

    // Gallery Section
    gallery_badge: 'معرض الصور والفعاليات الميدانية',
    gallery_title: 'من قلب الميدان وقوافل الخير',
    gallery_subtitle: 'لقطات حية توثق جهود وبسمات متطوعي صناع الحياة وأهالينا في ربوع محافظة الإسماعيلية.',

    // Join Us Section
    join_badge: 'لماذا تتطوع معنا؟',
    join_title: 'ليه تنضم لأسرة صناع الحياة؟',
    join_subtitle: 'التطوع في صناع الحياة مش مجرد عمل خيري، ده رحلة بناء لشخصيتك وصناعة أثر حقيقي في بلدك.',
    join_feat1_title: 'تسيب بصمة حقيقية',
    join_feat1_desc: 'كل دقيقة وجهد بتقدمه بيغير حياة أسرة ومحتاج للأفضل في قرى ومراكز الإسماعيلية.',
    join_feat2_title: 'تكتسب مهارات قيادية',
    join_feat2_desc: 'تدريبات وورش عمل في إدارة المشاريع، القيادة، والعمل الجماعي وصناعة المبادرات.',
    join_feat3_title: 'تكون جزء من عيلة',
    join_feat3_desc: 'صحبة صالحة وشباب إيجابي يجمعهم حب الخير ودعم بعضهم البعض في كل خطوة.',
    join_feat4_title: 'ذكريات وتجارب ملهمة',
    join_feat4_desc: 'مواقف وقصص إنسانية حقيقية في القوافل والميدان هتفضل محفورة في ذاكرتك طول العمر.',
    join_feat5_title: 'تشارك في مشاريع قومية',
    join_feat5_desc: 'تنفيذ على أرض الواقع لمبادرات كبرى بالشراكة مع وزارة التضامن والتحالف الوطني.',
    join_feat6_title: 'تفتح لنفسك أبواباً جديدة',
    join_feat6_desc: 'علاقات وشبكة معارف واسعة وخبرات عملية تؤهلك لسوق العمل بثقة واقتدار.',
    join_cta_title: 'جاهز تبدأ رحلتك وتكون صنعاوي؟',
    join_cta_subtitle: 'مكانك مستنيك وسط آلاف الشباب اللي قرروا ميكونوش متفرجين، ويكونوا صناع للأمل في الإسماعيلية.',
    join_cta_btn: 'سجل الآن كمتطوع جديد',

    // AUTH / LOGIN & REGISTER FLIP CARD
    auth_portal_badge: 'بوابة المتطوعين وصناع الأمل',
    auth_title_be: 'كن',
    auth_title_maker: 'صانعاً للحياة',
    auth_subtitle: 'انضم لآلاف المتطوعين وشارك في صناعة الأثر والتغيير الإيجابي بمحافظة الإسماعيلية.',
    auth_tab_signup: 'استمارة تطوع جديدة',
    auth_tab_login: 'تسجيل الدخول للمتطوعين',
    auth_login_id: 'الرقم القومي أو البريد الإلكتروني',
    auth_login_id_placeholder: 'أدخل رقمك القومي (14 رقم) أو بريدك الإلكتروني',
    auth_login_password: 'كلمة المرور',
    auth_login_password_placeholder: 'أدخل كلمة المرور الخاصة بك',
    auth_login_btn: 'تسجيل الدخول للمنصة',
    auth_login_loading: 'جاري التحقق وتسجيل الدخول...',
    auth_flip_to_register: 'ليس لديك حساب بعد؟ اضغط هنا للتسجيل والانضمام كمتطوع ↻',
    auth_flip_to_login: 'لديك حساب بالفعل؟ اضغط هنا للعودة لتسجيل الدخول ↺',
    auth_step1_tab: 'البيانات الشخصية',
    auth_step2_tab: 'مجالات التطوع',
    auth_step3_tab: 'تأكيد الحساب',
    auth_step1_title: 'البيانات الشخصية ومعلومات الاتصال',
    auth_full_name: 'الاسم رباعياً بالكامل *',
    auth_full_name_ph: 'أدخل اسمك رباعياً كما هو بالبطاقة',
    auth_nid: 'الرقم القومي (14 رقماً) *',
    auth_nid_ph: 'أدخل الـ 14 رقماً القومية بدقة',
    auth_phone: 'رقم الهاتف / واتساب *',
    auth_phone_ph: '01XXXXXXXXX',
    auth_email: 'البريد الإلكتروني *',
    auth_email_ph: 'name@example.com',
    auth_dob: 'تاريخ الميلاد *',
    auth_next_step2: 'المتابعة لاختيار لجان التطوع',
    auth_step2_title: 'تحديد مركز ولجنة التطوع المفضلة',
    auth_center: 'مركز / مدينة التطوع *',
    auth_center_ph: '-- اختر المركز الأقرب إليك بمحافظة الإسماعيلية --',
    auth_committee: 'اللجنة أو الملف التطوعي المفضل *',
    auth_committee_ph: '-- اختر الملف الأقرب لشغفك ومهاراتك --',
    auth_qualification: 'المؤهل الدراسي أو الكلية *',
    auth_qualification_ph: 'مثال: كلية هندسة / خريج تجارة / طالب ثانوي',
    auth_job: 'المهنة أو الوظيفة الحالية (إن وجد)',
    auth_job_ph: 'اتركه فارغاً إذا كنت طالباً أو غير عامل',
    auth_address: 'العنوان بالتفصيل *',
    auth_address_ph: 'المدينة / الحي / الشارع الرئيسي',
    auth_prev: 'الرجوع للخطوة السابقة',
    auth_next_step3: 'المتابعة لتأكيد الحساب وكلمة المرور',
    auth_step3_title: 'تعيين كلمة المرور والصورة الشخصية',
    auth_photo_btn: 'رفع صورة شخصية',
    auth_photo_change: 'تغيير الصورة المرفوعة',
    auth_photo_hint: 'اختياري: يفضل صورة شخصية واضحة لبطاقة المتطوع',
    auth_pass: 'كلمة المرور (8 أحرف وأرقام على الأقل) *',
    auth_pass_confirm: 'تأكيد كلمة المرور *',
    auth_submit: 'إرسال استمارة التطوع والانضمام',
    auth_submitting: 'جاري إرسال استمارة التطوع...',

    // Contact Page
    contact_hero_badge: 'تواصل مع صناع الحياة الإسماعيلية',
    contact_hero_subtitle: 'سواء كنت تريد التطوع، التبرع، أو الاستفسار عن أنشطة صناع الحياة في محافظة الإسماعيلية، فريقنا جاهز للرد على مدار الساعة.',
    contact_form_title: 'أرسل لنا رسالة مباشرة',
    contact_form_subtitle: 'لديك استفسار، رغبة في التطوع، أو اقتراح لمبادرة مجتمعية؟ يسعدنا دائماً تواصلك معنا.',
    contact_name: 'الاسم بالكامل *',
    contact_name_ph: 'أدخل اسمك الكريم',
    contact_phone: 'رقم الهاتف / واتساب',
    contact_email: 'البريد الإلكتروني *',
    contact_msg: 'نص الرسالة أو الاستفسار *',
    contact_msg_ph: 'اكتب رسالتك أو استفسارك هنا...',
    contact_send_btn: 'إرسال الرسالة الآن',
    contact_success_title: 'تم إرسال رسالتك بنجاح!',
    contact_success_desc: 'شكراً لاهتمامك وتواصلك مع أسرة صناع الحياة الإسماعيلية.',
    contact_send_another: 'إرسال رسالة أخرى',
    contact_address_box: 'مقرنا مفتوح دائماً… زورنا في مقر صناع الحياة بالإسماعيلية',
    contact_hotline: 'الخط الساخن: 16563',

    // Footer
    footer_about_title: 'صناع الحياة مصر - الإسماعيلية',
    footer_about_desc: 'مؤسسة أهلية وطنية مشهرة برقم 839 لسنة 2018. نهدف لتمكين الشباب وتنمية المجتمعات الأكثر احتياجاً عبر العمل التطوعي المنظم والمستدام.',
    footer_quick_links: 'روابط سريعة',
    footer_donation_title: 'طرق التبرع المباشر',
    footer_donation_online: 'التبرع الإلكتروني عبر الموقع',
    footer_donation_bank: 'حسابات بنكية (البنك الأهلي وبنك مصر)',
    footer_donation_kind: 'تبرع عيني / قوافل كبرى (تواصل واتساب)',
    footer_donation_hotline: 'الخط الساخن الموحد 16563',
    footer_contact_title: 'المقر وبيانات التواصل',
    footer_address: 'الإسماعيلية: شارع العشريني بجوار كشري صبحي وميدان الممر',
    footer_rights: 'جميع الحقوق محفوظة © مؤسسة صناع الحياة مصر - فرع الإسماعيلية 2026',
    footer_motto: 'شباب.. أمل.. نماء'
  },
  en: {
    // Navigation
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_committees: 'Committees',
    nav_contact: 'Contact Us',
    nav_volunteer: 'Be a Maker',
    nav_login: 'Sign In',
    nav_logout: 'Sign Out',
    nav_lang: 'Language',
    nav_theme_dark: 'Dark Mode',
    nav_theme_light: 'Light Mode',
    nav_all_committees: 'Explore All Committees & Activities',

    // Hero / Banner
    hero_badge: 'Life Makers Foundation - Ismailia Branch',
    hero_title: 'Life Makers.. Inspiring Hope, Building the Future',
    hero_subtitle: 'A leading youth-driven volunteer organization working since 2004 to empower youth and develop underprivileged communities with enthusiasm and generosity.',
    hero_cta_volunteer: 'Be a Maker (Join Now)',
    hero_cta_explore: 'Explore Our Initiatives',
    stat_volunteers: '+5,000',
    stat_volunteers_label: 'Active Youth Volunteers',
    stat_convoys: '+150',
    stat_convoys_label: 'Medical & Relief Convoys',
    stat_beneficiaries: '+25,000',
    stat_beneficiaries_label: 'Beneficiary Families in Ismailia',
    stat_years: '+20',
    stat_years_label: 'Years of Sustainable Impact',

    // Home About Section
    home_about_badge: 'Who We Are',
    home_about_title: 'Youth.. Hope.. Growth',
    home_about_desc: 'Life Makers Egypt Foundation is a national non-profit NGO founded in 2004 as a youth volunteer movement, centrally registered under license #839 of 2018. In Ismailia, we mobilize youth potential toward high-impact humanitarian and developmental projects.',
    home_about_feat1_title: 'Youth Leadership Empowerment',
    home_about_feat1_desc: 'Training and mentoring volunteers to become proactive community leaders.',
    home_about_feat2_title: 'Field Relief & Medical Convoys',
    home_about_feat2_desc: 'Direct outreach to families in greatest need across all centers and villages of Ismailia.',
    home_about_feat3_title: 'Disability Inclusion & Support',
    home_about_feat3_desc: 'National "Ahsan Saheb" initiative in partnership with the Ministry of Social Solidarity.',
    home_about_experience: 'Over 20 Years Serving the Egyptian Community',
    home_about_more: 'Read More About Our Mission & History',

    // Home Video Section
    video_badge: 'Watch Life Makers in Action',
    video_title: 'The Pulse of Youth and Hope in Ismailia',
    video_subtitle: 'A vivid journey through our field interventions: from relief convoys and disability inclusion, to youth leadership camps and sustainable village development.',
    video_play_prompt: 'Experience the Interactive Video',

    // Home Committees Section
    home_files_badge: 'Volunteering Domains',
    home_files_title: 'Life Makers Ismailia Specialized Committees',
    home_files_subtitle: 'Our specialized committees cover all community developmental needs, giving every volunteer the chance to contribute within their unique skills and passion.',
    home_files_explore_all: 'Explore All Activities',
    file_explore: 'Explore Activities & Media',
    zoom_image: 'Click to Enlarge Photo',

    // Committee Details Page
    committee_specialized: 'Official Specialized Committee',
    committee_join_btn: 'Volunteer in this Committee',
    committee_activities: 'Field Activities & Interventions',
    committee_registered: 'Registered Events with Photos',
    committee_empty_title: 'No events currently listed',
    committee_empty_desc: 'Activities are continually updated by the field coordination team. You can join and participate in upcoming events!',
    committee_empty_btn: 'Be the First to Join Next Event',

    // Gallery Section
    gallery_badge: 'Field Photo & Activity Gallery',
    gallery_title: 'Heart of the Field & Relief Convoys',
    gallery_subtitle: 'Candid moments documenting the smiles and impact of Life Makers volunteers with families across Ismailia governorate.',

    // Join Us Section
    join_badge: 'Why Volunteer with Us?',
    join_title: 'Why Join the Life Makers Family?',
    join_subtitle: 'Volunteering with Life Makers is not just community work; it is a transformational journey for your leadership and future career.',
    join_feat1_title: 'Leave a Lasting Mark',
    join_feat1_desc: 'Every hour you dedicate transforms a family’s life for the better across Ismailia.',
    join_feat2_title: 'Acquire Leadership Skills',
    join_feat2_desc: 'Hands-on training in project management, public speaking, teamwork, and community leadership.',
    join_feat3_title: 'Be Part of a Caring Family',
    join_feat3_desc: 'A positive and supportive community of youth united by shared purpose and mutual uplift.',
    join_feat4_title: 'Inspiring Memories & Stories',
    join_feat4_desc: 'Unforgettable humanitarian moments on convoys that will remain etched in your heart.',
    join_feat5_title: 'Lead National Initiatives',
    join_feat5_desc: 'Execute prominent nationwide initiatives in partnership with national alliances and ministries.',
    join_feat6_title: 'Unlock Career Opportunities',
    join_feat6_desc: 'Build wide professional networks and practical skills that prepare you for the job market.',
    join_cta_title: 'Ready to Begin Your Journey as a Maker?',
    join_cta_subtitle: 'Your spot is waiting among thousands of youth who chose not to be spectators, but active makers of hope.',
    join_cta_btn: 'Register as a New Volunteer Now',

    // AUTH / LOGIN & REGISTER FLIP CARD
    auth_portal_badge: 'Volunteer & Maker Portal',
    auth_title_be: 'Be a',
    auth_title_maker: 'Life Maker',
    auth_subtitle: 'Join thousands of volunteers and create lasting social change in Ismailia.',
    auth_tab_signup: 'New Volunteer Application',
    auth_tab_login: 'Volunteer Sign In',
    auth_login_id: 'National ID or Email Address',
    auth_login_id_placeholder: 'Enter 14-digit National ID or Email',
    auth_login_password: 'Password',
    auth_login_password_placeholder: 'Enter your account password',
    auth_login_btn: 'Sign In to Portal',
    auth_login_loading: 'Verifying credentials...',
    auth_flip_to_register: "Don't have an account? Click here to register as a volunteer ↻",
    auth_flip_to_login: 'Already registered? Click here to return to Sign In ↺',
    auth_step1_tab: 'Personal Info',
    auth_step2_tab: 'Interests',
    auth_step3_tab: 'Security',
    auth_step1_title: 'Personal Details & Contact Info',
    auth_full_name: 'Full Name (Quadruple) *',
    auth_full_name_ph: 'Enter your full quadruple legal name',
    auth_nid: 'National ID (14 digits) *',
    auth_nid_ph: 'Enter your 14-digit National ID',
    auth_phone: 'Phone / WhatsApp Number *',
    auth_phone_ph: '01XXXXXXXXX',
    auth_email: 'Email Address *',
    auth_email_ph: 'name@example.com',
    auth_dob: 'Date of Birth *',
    auth_next_step2: 'Continue to Volunteering Committees',
    auth_step2_title: 'Preferred Volunteering Center & Committee',
    auth_center: 'Volunteering Center / City *',
    auth_center_ph: '-- Select nearest Ismailia center --',
    auth_committee: 'Preferred Committee / Domain *',
    auth_committee_ph: '-- Select domain matching your passion --',
    auth_qualification: 'Educational Qualification / Faculty *',
    auth_qualification_ph: 'e.g., Engineering student / Graduate',
    auth_job: 'Current Occupation (if applicable)',
    auth_job_ph: 'Leave blank if student',
    auth_address: 'Detailed Address *',
    auth_address_ph: 'City / Neighborhood / Street',
    auth_prev: 'Back to Previous Step',
    auth_next_step3: 'Continue to Account Security',
    auth_step3_title: 'Account Password & Profile Photo',
    auth_photo_btn: 'Upload Profile Photo',
    auth_photo_change: 'Change Uploaded Photo',
    auth_photo_hint: 'Optional: Recommended for official volunteer ID card',
    auth_pass: 'Password (min. 8 characters) *',
    auth_pass_confirm: 'Confirm Password *',
    auth_submit: 'Submit Volunteer Application',
    auth_submitting: 'Submitting Application...',

    // Contact Page
    contact_hero_badge: 'Contact Life Makers Ismailia',
    contact_hero_subtitle: 'Whether you want to volunteer, donate, or inquire about Life Makers initiatives across Ismailia, our team is ready around the clock.',
    contact_form_title: 'Send Us a Direct Message',
    contact_form_subtitle: 'Have a question, wish to volunteer, or propose a community initiative? We are always glad to hear from you.',
    contact_name: 'Full Name *',
    contact_name_ph: 'Enter your full name',
    contact_phone: 'Phone / WhatsApp Number',
    contact_email: 'Email Address *',
    contact_msg: 'Message / Inquiry Details *',
    contact_msg_ph: 'Type your message or inquiry here...',
    contact_send_btn: 'Send Message Now',
    contact_success_title: 'Message Sent Successfully!',
    contact_success_desc: 'Thank you for reaching out to Life Makers Ismailia. Our team will contact you shortly.',
    contact_send_another: 'Send Another Message',
    contact_address_box: 'Our Doors Are Always Open… Visit Us at Life Makers Ismailia HQ',
    contact_hotline: 'Hotline: 16563',

    // Footer
    footer_about_title: 'Life Makers Egypt - Ismailia Branch',
    footer_about_desc: 'A national NGO registered under #839 of 2018, empowering youth and developing underprivileged communities through structured and sustainable volunteering.',
    footer_quick_links: 'Quick Links',
    footer_donation_title: 'Direct Donation Channels',
    footer_donation_online: 'Online Donation via Portal',
    footer_donation_bank: 'Bank Accounts (NBE & Banque Misr)',
    footer_donation_kind: 'In-Kind / Major Convoys (WhatsApp)',
    footer_donation_hotline: 'Unified Hotline 16563',
    footer_contact_title: 'Headquarters & Info',
    footer_address: 'Ismailia: El-Eshreeny St, next to Koshary Sobhy & El-Mamar Square',
    footer_rights: 'All Rights Reserved © Life Makers Egypt - Ismailia Branch 2026',
    footer_motto: 'Youth.. Hope.. Growth'
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('life_makers_lang') || 'ar';
    }
    return 'ar';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('life_makers_lang', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const t = (key, fallback = null) => {
    const dict = translations[lang] || translations.ar;
    if (dict && dict[key] !== undefined) {
      return dict[key];
    }
    if (translations.ar && translations.ar[key] !== undefined) {
      return translations.ar[key];
    }
    return fallback !== null ? fallback : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t, isRtl: lang === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      lang: 'ar',
      setLang: () => {},
      toggleLanguage: () => {},
      t: (k, fb = null) => {
        if (translations.ar && translations.ar[k]) return translations.ar[k];
        return fb !== null ? fb : k;
      },
      isRtl: true
    };
  }
  return context;
}
