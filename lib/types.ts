/**
 * Shared domain types for Wasla.
 * These mirror the future Supabase schema (users, posts, courses, events...)
 * so swapping Mock Data for real queries later requires no shape changes.
 */

export type MemberLevel = 1 | 2 | 3 | 4 | 5;

export type MemberRole = "owner" | "admin" | "moderator" | "member";

export interface User {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
  coverUrl?: string;
  bio?: string;
  role: MemberRole;
  level: MemberLevel;
  points: number;
  pointsToNextLevel: number;
  joinedAt: string;
  isOnline?: boolean;
  location?: string;
  badges?: string[];
}

export interface PostAttachment {
  id: string;
  type: "image" | "file";
  url: string;
  name: string;
  sizeLabel?: string;
}

export interface Comment {
  id: string;
  postId: string;
  author: User;
  content: string;
  createdAt: string;
  likes: number;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  category: string;
  attachments?: PostAttachment[];
  hashtags?: string[];
  mentions?: string[];
  likes: number;
  likedByMe?: boolean;
  isPinned?: boolean;
  commentsCount: number;
  comments?: Comment[];
  createdAt: string;
}

export type LessonType = "video" | "text" | "pdf" | "link";

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  type: LessonType;
  durationMinutes?: number;
  isCompleted?: boolean;
  isLocked?: boolean;
  resourceUrl?: string;
}

export interface CourseModule {
  id: string;
  courseId: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  category: string;
  level: "مبتدئ" | "متوسط" | "متقدم";
  instructor: User;
  modules: CourseModule[];
  studentsCount: number;
  lessonsCount: number;
  progress?: number; // 0-100, computed for the current member
  isFeatured?: boolean;
}

export type EventType = "live" | "workshop" | "meetup" | "deadline";

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  type: EventType;
  startsAt: string;
  endsAt: string;
  location?: string;
  isOnline?: boolean;
  host: User;
  attendeesCount: number;
  isAttending?: boolean;
  color?: string;
}

export type NotificationType =
  | "new_post"
  | "new_comment"
  | "new_message"
  | "new_event"
  | "lesson_completed"
  | "level_up"
  | "mention";

export interface AppNotification {
  id: string;
  type: NotificationType;
  actor?: User;
  title: string;
  description: string;
  createdAt: string;
  isRead: boolean;
  href?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  isUnlocked: boolean;
}

export interface LevelDefinition {
  level: MemberLevel;
  title: string;
  minPoints: number;
  maxPoints: number;
  color: string;
}

export interface ActivityItem {
  id: string;
  actor: User;
  action: string;
  target?: string;
  createdAt: string;
  icon?: string;
}

export interface DashboardStat {
  id: string;
  label: string;
  value: number;
  delta?: number;
  icon: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: string;
  badge?: number;
}
