import { Campaign } from "@/types";

export const CAMPAIGNS: Campaign[] = [
  {
    id: "eish-w-melh",
    title: "قوافل عيش وملح 2026",
    badge: "الإغاثة الغذائية",
    description: "توفير وتوزيع كراتين المواد الغذائية الأساسية والوجبات الساخنة للأسر الأولى بالرعاية في أطراف ومراكز الإسماعيلية.",
    targetFamilies: 5000,
    currentFamilies: 3850,
    volunteersNeeded: 120,
    volunteersRegistered: 98,
    image: "/images/Banner/عيش وملح كبير.jpg",
    status: "active"
  },
  {
    id: "nakheel-endowment",
    title: "واحة وقف النخيل الخيري",
    badge: "تمكين وتنمية مستدامة",
    description: "مشروع استثماري وقفي لزراعة نخيل المجدول والسيوي، يخصص ريعه لتمويل مشاريع الأسر المعيلة وتعليم الأيتام.",
    targetFamilies: 1200,
    currentFamilies: 940,
    volunteersNeeded: 60,
    volunteersRegistered: 65,
    image: "/images/Banner/نخيل كبير.jpg",
    status: "active"
  },
  {
    id: "ahsan-saheb-campaign",
    title: "مبادرة أحسن صاحب (كرنفال الدمج)",
    badge: "ذوي الإعاقة",
    description: "يوم ترفيهي وتأهيلي يجمع 200 بطل من ذوي الهمم مع أصدقائهم المتطوعين، يتضمن مسابقات رياضية وفنية وتكريم المواهب.",
    targetFamilies: 300,
    currentFamilies: 280,
    volunteersNeeded: 80,
    volunteersRegistered: 84,
    image: "/images/Banner/تطوع كبير.jpg",
    status: "active"
  }
];
