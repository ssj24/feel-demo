import { Diary } from './diary.model';

export class Day {
  public date: Date;
  public year: number;
  public monthIndex: number;
  public weekDayNumber: number;
  public dayNumber: number;
  public feelings: string[];
  public aLine?: string;
  public diary?: Diary[];
  public keywords?: string[];
  public recording?: any;
}
