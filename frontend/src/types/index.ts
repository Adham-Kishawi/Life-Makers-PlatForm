export interface Badge {
  id: string;
  name: string;
  titleAr: string;
  description: string;
  icon: string;
  tier: "bronze" | "silver" | "gold" | "diamond";
  unlocked: boolean;
  unlockedAt?: string;
}

export interface Volunteer {
  id: string;
  name: string;
  nationalId: string;
  email: string;
  phone: string;
  center: string;
  committee: string;
  personal_photo?: string;
  streakCount: number;
  longestStreak: number;
  lastActivityDate: string;
  totalPoints: number;
  totalHours: number;
  level: string;
  badges: Badge[];
}

export interface ActivityLog {
  id: string;
  title: string;
  committee: string;
  date: string;
  hours: number;
  points: number;
  status: "verified" | "pending";
}

export interface CommitteeActivity {
  title: string;
  image: string;
  description: string;
}

export interface Committee {
  id: number;
  slug: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  activities: CommitteeActivity[];
}

export interface Campaign {
  id: string;
  title: string;
  badge: string;
  description: string;
  targetFamilies: number;
  currentFamilies: number;
  volunteersNeeded: number;
  volunteersRegistered: number;
  image: string;
  status: "active" | "completed" | "upcoming";
}

export interface KanbanCandidate {
  id: string;
  name: string;
  phone: string;
  email: string;
  center: string;
  committee: string;
  stage: "new" | "interview" | "training" | "assigned" | "active";
  appliedAt: string;
  notes?: string;
}
