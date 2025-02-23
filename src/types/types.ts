export type DayData = {
  day: string;
  schedule: { time: string; subject: string }[];
};

export type TimeTableData = DayData[];

export type ItemType = {
  id: string;
  name: string;
  description?: string;
  lastSeenPlace?: string;
  contactInfo?: string;
  images: string[];
  found: boolean;
  createdAt: Date;
};
