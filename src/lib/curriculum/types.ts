export const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"] as const;
export type Weekday = (typeof WEEKDAYS)[number];

export type Link = { label: string; href: string };

export type DayPlan = {
  weekday: Weekday;
  learnMins: number;
  buildMins: number;
  learnTitle: string;
  learnLinks: Link[];
  buildTitle: string;
  tasks: string[];
};

export type WeekPlan = {
  id: number;
  month: number;
  phaseId: string;
  title: string;
  goal: string;
  projectHint?: string;
  days: DayPlan[];
};

export type Phase = {
  id: string;
  number: string;
  name: string;
  months: string;
  weekStart: number;
  weekEnd: number;
  summary: string;
  outcomes: string[];
};

export type PortfolioProject = {
  id: string;
  title: string;
  phaseId: string;
  afterWeek: number;
  stack: string[];
  brief: string;
  bar: string;
};

export type UniCourse = {
  year: string;
  course: string;
  semester: string;
  foundry: string;
};
