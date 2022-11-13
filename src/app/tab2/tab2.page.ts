import { Component, OnChanges, OnInit, SimpleChanges, Input, DoCheck, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { CalendarCreatorService } from '../calendarCreator.service';
import { Day } from '../day.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnChanges, AfterViewChecked {
  @Input() monthNumber: number;
  public isAdded = false;
  public datadates: Day[] = [];
  public monthDays: Day[];
  public month: string;
  public year: number;

  public weekDaysName = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  public today = new Date();
  public date = this.today.getDate();
  constructor(public calendarCreator: CalendarCreatorService) {}

  ngOnInit(): void {
    this.setMonthDays(this.calendarCreator.getCurrentMonth());
  }

  ionViewDidEnter(){
    this.isAdded = true;
    this.setToday();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  // ngDoCheck() {
  //   console.log('doCheck');
  // }

  ngAfterViewChecked() {
    console.log('afterviewchecked');
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

  dayClicked(e: Event, clickedDay: Day) {
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
      this.datadates.push(clickedDay);
      console.log(this.datadates);
    }
    else {return;}
  }
  setToday(): void {
    if (this.year === this.today.getFullYear() && this.monthNumber === this.today.getMonth()) {
      document.getElementById(`date${this.date}`).classList.add('selectedDate');
      console.log('this month!!', document.getElementById(`date${this.date}`));
    }
    console.log('setTOday');
  }
  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.month = this.calendarCreator.getMonthName(this.monthNumber);
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
    if(this.isAdded) {this.setToday();}
  }
}
