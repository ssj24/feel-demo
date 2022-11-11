import { Component, OnInit } from '@angular/core';
import { CalendarCreatorService } from '../calendarCreator.service';
import { Day } from '../day.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public monthDays: Day[];

  public monthNumber: number;
  public year: number;

  public weekDaysName = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  public today = new Date();
  public date = this.today.getDate();
  constructor(public calendarCreator: CalendarCreatorService) {}

  ngOnInit(): void {
    this.setMonthDays(this.calendarCreator.getCurrentMonth());
  }

  ionViewDidEnter(){
    if (this.year === this.today.getFullYear() && this.monthNumber === this.today.getMonth()) {
      document.getElementById(`date${this.date}`).classList.add('selectedDate');
    }
  }

  onNextMonth(): void {
    this.monthNumber++;
    if (this.monthNumber > 11) {
      this.monthNumber = 0;
      this.year++;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth(): void{
    this.monthNumber--;

    if (this.monthNumber < 0) {
      this.monthNumber = 11;
      this.year--;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  dayClicked(e: Event) {
    const target = e.target as HTMLDivElement;
    const targetDate = target.closest('.date');
    const targetDiv = target.closest('.imgContainer');
    if (targetDate && targetDiv) {
      // eslint-disable-next-line max-len
      if (targetDate.children[0].id === `date${this.date}` && this.year === this.today.getFullYear() && this.monthNumber === this.today.getMonth()) {
        targetDiv.classList.add('tripleContainer');
      } else {
        targetDiv.classList.add('doubleContainer');
      }
    }
    else {return;}
  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
  }
}
