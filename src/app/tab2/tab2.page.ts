import { Component } from '@angular/core';
import { CalendarCreatorService } from '../calendarCreator.service';
import { Day } from "../day.model";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public monthDays: Day[];

  public monthNumber: number;
  public year: number;

  public weekDaysName = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  constructor(public calendarCreator: CalendarCreatorService) {}

  ngOnInit(): void {
    this.setMonthDays(this.calendarCreator.getCurrentMonth());
  }

  onNextMonth(): void {
    this.monthNumber++;

    if (this.monthNumber == 13) {
      this.monthNumber = 1;
      this.year++;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth() : void{
    this.monthNumber--;

    if (this.monthNumber < 1) {
      this.monthNumber = 12;
      this.year--;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  dayClicked(e: Event) {
    const target = e.target as HTMLSpanElement
    console.log(target.textContent);
  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
  }
}
