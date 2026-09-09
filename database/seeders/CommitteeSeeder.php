<?php

namespace Database\Seeders;

use App\Models\Committee;
use Illuminate\Database\Seeder;

class CommitteeSeeder extends Seeder
{
    public function run(): void
    {
        $committees = [
            [
                'order' => 1,
                'name' => 'الجذب والتطوع',
                'icon' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
                'description' => 'ملف مسؤول عن استقطاب، استقبال، وتوجيه المتطوعين الجدد، وتعريفهم برؤية ورسالة صناع الحياة وتسكينهم في اللجان التخصصية المناسبة لشغفهم ومهاراتهم.',
                'data' => [
                    ['title' => 'عيلة الجذب والاستقبال', 'image' => '/Images/Attraction/Family.jpg', 'description' => 'الأسرة والبيئة الحاضنة لكل متطوع جديد في صناع الحياة'],
                    ['title' => 'ملتقى المتطوعين الجدد', 'image' => '/Images/Attraction/family (2).jpg', 'description' => 'لقاءات دورية لتبادل الخبرات وتوطيد روح الفريق'],
                    ['title' => 'شرح وتوجيه للملفات التخصصية', 'image' => '/Images/Attraction/explain.jpg', 'description' => 'جلسات تعريفية مكثفة بكل لجان ومسارات التطوع'],
                    ['title' => 'ورش تأهيل المتطوعين', 'image' => '/Images/Attraction/explain (2).jpg', 'description' => 'تدريبات مبدئية لرفع الكفاءة والاستعداد الميداني'],
                    ['title' => 'نزول وجذب ميداني', 'image' => '/Images/Attraction/ground.jpg', 'description' => 'التواجد في الجامعات والأماكن العامة لضم طاقات شبابية جديدة'],
                    ['title' => 'حملات التوعية الميدانية', 'image' => '/Images/Attraction/ground (2).jpg', 'description' => 'نشر ثقافة التطوع بين شباب وأهالي الإسماعيلية'],
                    ['title' => 'جلسات الاستقبال والتسجيل', 'image' => '/Images/Attraction/write.jpg', 'description' => 'مساعدة الراغبين في التطوع على ملء الاستمارات وتحديد مجالاتهم'],
                ]
            ],
            [
                'order' => 2,
                'name' => 'أحسن صاحب',
                'icon' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>',
                'description' => 'مبادرة وطنية بالشراكة مع وزارة التضامن الاجتماعي تهدف لدمج وتمكين الأشخاص ذوي الإعاقة وتقليل العزلة الاجتماعية من خلال الصداقة الفردية، الأنشطة الترفيهية، والتمكين المهني.',
                'data' => [
                    ['title' => 'عيلة أحسن صاحب', 'image' => '/Images/Beast Friend/family.jpg', 'description' => 'صداقة حقيقية ودمج مجتمعي كامل لأبطال الهمم'],
                    ['title' => 'ملتقيات الدمج والصداقة', 'image' => '/Images/Beast Friend/Family (2).jpg', 'description' => 'فعاليات دورية تجمع المتطوعين وأصدقائهم من ذوي الإعاقة'],
                    ['title' => 'نزولات ميدانية تفاعلية', 'image' => '/Images/Beast Friend/Midany.jpg', 'description' => 'نزول للمدارس والمراكز لنشر ثقافة الدمج وقبول الآخر'],
                    ['title' => 'كرنفالات وأنشطة ترفيهية', 'image' => '/Images/Beast Friend/Midany (2).jpg', 'description' => 'أيام مفتوحة ومسابقات لاكتشاف وتنمية مواهب ذوي الإعاقة'],
                    ['title' => 'حملات التوعية المجتمعية', 'image' => '/Images/Beast Friend/street.jpg', 'description' => 'توعية المواطنين في شوارع الإسماعيلية بحقوق ذوي الإعاقة'],
                    ['title' => 'حملات التوعية الميدانية', 'image' => '/Images/Beast Friend/street (2).jpg', 'description' => 'توزيع بروشورات توعوية والتفاعل المباشر مع المجتمع'],
                    ['title' => 'أنشطة الشارع التفاعلية', 'image' => '/Images/Beast Friend/street (3).jpg', 'description' => 'تجارب محاكاة تفاعلية لفهم تحديات أصحاب الهمم'],
                    ['title' => 'لقاءات الشارع والتوعية', 'image' => '/Images/Beast Friend/street (4).jpg', 'description' => 'حوارات مباشرة مع الأسر والشباب لتغيير الصور النمطية'],
                    ['title' => 'احتفاليات تكريم ودعم الأبطال', 'image' => '/Images/Beast Friend/IMG-20250719-WA0053.jpg', 'description' => 'تكريم المتميزين في الفنون والرياضات من ذوي الإعاقة'],
                ]
            ],
            [
                'order' => 3,
                'name' => 'قدوة وبناء القادة',
                'icon' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
                'description' => 'ملف يركز على الاستثمار في رأس المال البشري وتدريب الكوادر الشبابية على القيادة، التفكير الإبداعي، وإدارة المشروعات والمبادرات التنموية لصناعة قادة الغد.',
                'data' => [
                    ['title' => 'عيلة قدوة وتأهيل القادة', 'image' => '/Images/leader/family.jpg', 'description' => 'مجتمع شبابي يتعلم، يطور ذاته، وينقل الأثر للآخرين'],
                    ['title' => 'ملتقى القادة والمدربين', 'image' => '/Images/leader/Family (2).jpg', 'description' => 'جلسات تدريب وتطوير مستمرة للمدربين والمنسقين'],
                    ['title' => 'شرح مبسط ومفاهيم القيادة', 'image' => '/Images/leader/learn.jpg', 'description' => 'ورش عمل تفاعلية في التفكير الاستراتيجي والذكاء العاطفي'],
                    ['title' => 'إدارة فرق العمل والمبادرات', 'image' => '/Images/leader/learn (2).jpg', 'description' => 'تطبيقات عملية على حل المشكلات والقيادة الرشيدة'],
                    ['title' => 'صناعة وتصميم المبادرات المجتمعية', 'image' => '/Images/leader/learn (3).jpg', 'description' => 'تحويل الأفكار الإيجابية إلى مشاريع ميدانية قابلة للتنفيذ'],
                    ['title' => 'مهارات العرض والتحدث الجماهيري', 'image' => '/Images/leader/learn (4).jpg', 'description' => 'تمكين الشباب من التعبير عن أفكارهم وإلهام محيطهم'],
                    ['title' => 'أنشطة ومحاكاة تفاعلية', 'image' => '/Images/leader/activity.jpg', 'description' => 'محاكاة واقعية لإدارة الأزمات واتخاذ القرارات'],
                    ['title' => 'تحديات بناء الفرق والتعاون', 'image' => '/Images/leader/activity (2).jpg', 'description' => 'ألعاب وتحديات لبناء الثقة والعمل التكاملي'],
                    ['title' => 'تطبيقات عملية وميدانية', 'image' => '/Images/leader/activity (3).jpg', 'description' => 'نزول لتطبيق ما تم تعلمه على أرض الواقع'],
                ]
            ],
            [
                'order' => 4,
                'name' => 'الميديا والإعلام',
                'icon' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>',
                'description' => 'الجناح الإعلامي والإبداعي لصناع الحياة، مسؤول عن التصوير الميداني، إنتاج الفيديو، التصميم الجرافيكي، وإدارة المنصات الرقمية وتغطية قوافل الخير.',
                'data' => [
                    ['title' => 'فريق الميديا والإبداع', 'image' => '/Images/Media/family (1).jpg', 'description' => 'عين صناع الحياة التي تنقل الحقيقة والبسمة للعالم'],
                    ['title' => 'جلسات العصف الذهني والتخطيط', 'image' => '/Images/Media/family (2).jpg', 'description' => 'ابتكار أفكار بصرية وحملات رقمية تعزز أثر العمل التطوعي'],
                    ['title' => 'تصاميم الهوية والحملات التوعوية', 'image' => '/Images/Media/design (1).jpg', 'description' => 'تصميم بوسترات ومطبوعات الحملات والمناسبات'],
                    ['title' => 'تغطيات فوتوغرافية ميدانية', 'image' => '/Images/Media/design (2).jpg', 'description' => 'توثيق قوافل الإغاثة وكرنفالات الأطفال لحظة بلحظة'],
                    ['title' => 'إنتاج وتوثيق المبادرات', 'image' => '/Images/Media/design (3).jpg', 'description' => 'فيديوهات ريلز وموشن جرافيكس تلخص إنجازات المؤسسة'],
                    ['title' => 'التغطيات الصحفية والرقمية', 'image' => '/Images/Media/design (4).jpg', 'description' => 'إعداد البيانات والتواصل مع الوسائل الإعلامية الوطنية'],
                ]
            ],
            [
                'order' => 5,
                'name' => 'حملة هنوصلك',
                'icon' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>',
                'description' => 'حملة وطنية كبرى بالتعاون مع وزارة التضامن الاجتماعي لطرق الأبواب في كافة قرى ومراكز الإسماعيلية لحصر وتيسير استخراج بطاقة الخدمات المتكاملة لذوي الإعاقة.',
                'data' => [
                    ['title' => 'طرق الأبواب وحصر المستحقين', 'image' => '/Images/Gallery/GalleryHome (1).jpg', 'description' => 'الوصول للبيوت في أبعد القرى لمساعدة أصحاب الهمم'],
                    ['title' => 'تنسيق قوافل التأهيل المتنقلة', 'image' => '/Images/Gallery/GalleryHome (2).jpg', 'description' => 'التعاون مع مكاتب التأهيل الاجتماعي لتقديم الخدمة بموقع المستفيد'],
                    ['title' => 'التوعية بحقوق ذوي الإعاقة', 'image' => '/Images/Gallery/GalleryHome (6).jpg', 'description' => 'شرح مزايا كارت الخدمات المتكاملة والرعاية الطبية والمعاشات'],
                ]
            ],
            [
                'order' => 6,
                'name' => 'أنشطة الأطفال والتعليم',
                'icon' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
                'description' => 'برامج تعليمية وترفيهية وبناء شخصية تستهدف أطفال القرى والأسر الأكثر استحقاقاً، وتوزيع الشنط والأدوات المدرسية وتنظيم الأنشطة الصيفية.',
                'data' => [
                    ['title' => 'ورش تنمية مهارات الأطفال', 'image' => '/Images/Gallery/GalleryHome (3).jpg', 'description' => 'رسم، فنون، وأنشطة تفاعلية لغرس القيم الإيجابية'],
                    ['title' => 'توزيع الشنط والأدوات المدرسية', 'image' => '/Images/leader/activity (4).jpg', 'description' => 'دعم الطلاب مع بداية كل عام دراسي في مختلف المراكز'],
                ]
            ],
            [
                'order' => 7,
                'name' => 'المعارض والكساء',
                'icon' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>',
                'description' => 'تنظيم معارض ملابس مجانية كريمة تتيح للأسر والأطفال اختيار ما يناسبهم من الملابس الجديدة، وتوزيع بطاطين وألحفة الشتاء.',
                'data' => [
                    ['title' => 'معارض كساء العيد المجانية', 'image' => '/Images/Gallery/GalleryHome (5).jpg', 'description' => 'إتاحة الفرصة للأسر لاختيار ملابس جديدة بفرحة وكرامة'],
                    ['title' => 'فرز وتجهيز ملابس الحملات', 'image' => '/Images/Gallery/GalleryHome (1).jpg', 'description' => 'جهود المتطوعين في كي وفرز الملابس وتغليفها باحترافية'],
                ]
            ],
            [
                'order' => 8,
                'name' => 'التنمية والمشروعات',
                'icon' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
                'description' => 'مشروعات التمكين الاقتصادي والمشروعات الصغيرة (مثل وقف النخيل الخيري وتأهيل الأسر المعيلة) لتحويل الاحتياج إلى إنتاج مستدام.',
                'data' => [
                    ['title' => 'مشروعات وقف النخيل التنموي', 'image' => '/images/Banner/نخيل كبير.jpg', 'description' => 'وقف خيري استثماري يضمن عائداً مستداماً للأسر المستحقة'],
                    ['title' => 'تمكين الأسر المعيلة', 'image' => '/Images/Gallery/GalleryHome (4).jpg', 'description' => 'دعم المشروعات متناهية الصغر وتسليم أدوات الإنتاج'],
                ]
            ],
            [
                'order' => 9,
                'name' => 'الإغاثة والرعاية الصحية',
                'icon' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
                'description' => 'تنظيم القوافل الطبية المتخصصة، الكشف وصرف العلاج المجاني، التدخل في حوادث الطوارئ، وتوزيع كراتين المواد الغذائية (حملة عيش وملح).',
                'data' => [
                    ['title' => 'قوافل عيش وملح الغذائية', 'image' => '/images/Banner/عيش وملح كبير.jpg', 'description' => 'توزيع آلاف كراتين المواد الغذائية الأساسية سنوياً'],
                    ['title' => 'القوافل الطبية التخصصية', 'image' => '/Images/Gallery/GalleryHome (1).jpg', 'description' => 'كشف طبي مجاني وصرف العلاج وتحويل الحالات للجراحة'],
                ]
            ],
            [
                'order' => 10,
                'name' => 'الدعم والتواصل',
                'icon' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',
                'description' => 'إدارة العلاقات والتواصل الفعال مع المتطوعين، تنظيم المؤتمرات السنوية، والاحتفاء بشركاء النجاح.',
                'data' => [
                    ['title' => 'ملتقيات التواصل السنوية', 'image' => '/Images/Gallery/GalleryHome (6).jpg', 'description' => 'تجمع دوري لتعزيز التواصل بين فرق العمل والقيادات'],
                ]
            ],
            [
                'order' => 11,
                'name' => 'IT وضبط العضوية',
                'icon' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
                'description' => 'التحول الرقمي، ميكنة تسجيل المتطوعين، إدارة منصة صناع الحياة، وتطوير الأنظمة التقنية الداخلية.',
                'data' => [
                    ['title' => 'منصة المتطوعين الرقمية', 'image' => '/Images/Gallery/GalleryHome (4).jpg', 'description' => 'إدارة البيانات وحساب ساعات التطوع والتقييمات'],
                ]
            ],
            [
                'order' => 12,
                'name' => 'المنح والشراكات',
                'icon' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>',
                'description' => 'بناء جسور التعاون مع الجامعات والشركات والتحالف الوطني للعمل الأهلي التنموي لتمويل وتنفيذ مشروعات كبرى.',
                'data' => [
                    ['title' => 'شراكات التحالف الوطني', 'image' => '/Images/Gallery/GalleryHome (2).jpg', 'description' => 'مشاريع تنموية بالشراكة مع كبرى الكيانات الوطنية'],
                ]
            ],
            [
                'order' => 13,
                'name' => 'التوعية المجتمعية',
                'icon' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
                'description' => 'حملات تثقيفية وتوعوية في المدارس والجامعات والشوارع لنشر الوعي الصحي والبيئي وثقافة العمل التطوعي.',
                'data' => [
                    ['title' => 'حملات التوعية الميدانية', 'image' => '/Images/Beast Friend/street (3).jpg', 'description' => 'تفاعل مباشر ونشر المفاهيم الصحيحة بين المواطنين'],
                ]
            ]
        ];

        foreach ($committees as $item) {
            Committee::updateOrCreate(
                ['name' => $item['name']],
                $item
            );
        }
    }
}
