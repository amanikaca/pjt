export interface DayData {
  day: string;
  schedule: { time: string; subject: string }[];
}

export type TimeTableData = DayData[];

export interface ItemType {
  id: string;
  name: string;
  description?: string;
  lastSeenPlace?: string;
  contactInfo?: string;
  images: string[];
  found: boolean;
  createdAt: Date;
}
