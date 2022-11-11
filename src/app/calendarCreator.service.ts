import { Injectable } from '@angular/core';
import { Day } from './day.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarCreatorService {
  private currentYear: number;
  private currentMonthIndex: number;

  constructor() {
    const date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonthIndex = date.getMonth(); // January == 0
  }

  public getCurrentMonth(): Day[] {
    return this.getMonth(this.currentMonthIndex, this.currentYear);
  }

  public getMonth(monthIndex: number, year: number): Day[] {
    const days = [];

    const firstday = this.createDay(1, monthIndex, year);
    //create empty days
    for (let i = 1; i < firstday.weekDayNumber; i++) { // i start from 0 because week's first day is sunday
      days.push({
        weekDayNumber: i,
        monthIndex,
        year,
      } as Day);
    }
    days.push(firstday);
    //

    const countDaysInMonth = new Date(year, monthIndex + 1, 0).getDate(); // if it's monthIndex, we can get days of prvious month
    for (let i = 2; i <= countDaysInMonth; i++) { // since firstday is occupied, it starts from 2
      days.push(this.createDay(i, monthIndex, year));
    }

    return days;
  }

  public getMonthName(monthIndex: number): string {
    switch (monthIndex + 1) {
      case 1:
        return '1';
      case 2:
        return '2';
      case 3:
        return '3';
      case 4:
        return '4';
      case 5:
        return '5';
      case 6:
        return '6';
      case 7:
        return '7';
      case 8:
        return '8';
      case 9:
        return '9';
      case 10:
        return '10';
      case 11:
        return '11';
      case 12:
        return '12';

      default:
        return '|' + monthIndex;
    }
  }

  public getWeekDayName(weekDay: number): string {
    switch (weekDay) {
      case 0:
        return 'Sun'; // Sunday
      case 1:
        return 'Mon'; // Monday
      case 2:
        return 'Tue'; // Tuesday
      case 3:
        return 'Wed'; // Wednesday
      case 4:
        return 'Thu'; // Thursday
      case 5:
        return 'Fri'; // Friday
      case 6:
        return 'Sat'; // Saturday

      default:
        return '';
    }
  }

  private createDay(dayNumber: number, monthIndex: number, year: number) {
    const day = new Day();

    day.monthIndex = monthIndex;
    day.month = this.getMonthName(monthIndex);

    day.number = dayNumber;
    day.year = year;

    day.weekDayNumber = (new Date(year, monthIndex, dayNumber).getDay() === 0 ? 7 : new Date(year, monthIndex, dayNumber).getDay());

    day.weekDayName = this.getWeekDayName(day.weekDayNumber);

    return day;
  }
}
