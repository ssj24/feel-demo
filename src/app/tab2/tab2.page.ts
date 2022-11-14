import { Component, OnChanges, OnInit, SimpleChanges, Input, DoCheck, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { CalendarCreatorService } from '../calendarCreator.service';
import { Day } from '../day.model';
import { FeelingService } from '../feeling.service';

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
  public monthData: Day[] = [
    {
        monthIndex: 10,
        dayNumber: 8,
        year: 2022,
        weekDayNumber: 2,
        feelings: ['happy'],
    },
    {
        monthIndex: 10,
        dayNumber: 14,
        year: 2022,
        weekDayNumber: 1,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 15,
        year: 2022,
        weekDayNumber: 2,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 16,
        year: 2022,
        weekDayNumber: 3,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 1,
        year: 2022,
        weekDayNumber: 2,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 10,
        year: 2022,
        weekDayNumber: 4,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 17,
        year: 2022,
        weekDayNumber: 4,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 2,
        year: 2022,
        weekDayNumber: 3,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 9,
        year: 2022,
        weekDayNumber: 3,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 11,
        year: 2022,
        weekDayNumber: 5,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 18,
        year: 2022,
        weekDayNumber: 5,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 25,
        year: 2022,
        weekDayNumber: 5,
        feelings: ['surprise', 'upset'],
    },
    {
        monthIndex: 10,
        dayNumber: 24,
        year: 2022,
        weekDayNumber: 4,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 23,
        year: 2022,
        weekDayNumber: 3,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 22,
        year: 2022,
        weekDayNumber: 2,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 21,
        year: 2022,
        weekDayNumber: 1,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 28,
        year: 2022,
        weekDayNumber: 1,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 29,
        year: 2022,
        weekDayNumber: 2,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 30,
        year: 2022,
        weekDayNumber: 3,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 3,
        year: 2022,
        weekDayNumber: 4,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 4,
        year: 2022,
        weekDayNumber: 5,
        feelings: ['good'],
    },
    {
        monthIndex: 10,
        dayNumber: 5,
        year: 2022,
        weekDayNumber: 6,
        feelings: ['good', 'great', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 6,
        year: 2022,
        weekDayNumber: 7,
        feelings: ['lonely', 'sad'],
    },
    {
        monthIndex: 10,
        dayNumber: 13,
        year: 2022,
        weekDayNumber: 7,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 12,
        year: 2022,
        weekDayNumber: 6,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 7,
        year: 2022,
        weekDayNumber: 1,
        feelings: ['not_good'],
    },
    {
        monthIndex: 10,
        dayNumber: 19,
        year: 2022,
        weekDayNumber: 6,
        feelings: ['soso', 'surprise', 'unpleasant'],
    },
    {
        monthIndex: 10,
        dayNumber: 26,
        year: 2022,
        weekDayNumber: 6,
        feelings: ['depressed'],
    },
    {
        monthIndex: 10,
        dayNumber: 27,
        year: 2022,
        weekDayNumber: 7,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    {
        monthIndex: 10,
        dayNumber: 20,
        year: 2022,
        weekDayNumber: 7,
        feelings: ['uneasy', 'sad', 'excite'],
    }
];
  constructor(public calendarCreator: CalendarCreatorService,
              public feeling: FeelingService) {}

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
    // console.log('afterviewchecked');
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
    const targetDiv = target.closest('.imgContainer') as HTMLElement;
    if (targetDate && targetDiv) {
      const targetData = this.monthData.find(x => String(x.dayNumber) === targetDate.children[1].textContent);
      console.log(targetDate.children[1].textContent, targetData);
      if (targetData.feelings.length === 1) { targetDiv.classList.add('singleContainer')}
      else if (targetData.feelings.length === 2) {targetDiv.classList.add('doubleContainer')}
      else if (targetData.feelings.length === 3) {targetDiv.classList.add('tripleContainer')}
      // eslint-disable-next-line max-len
      targetDiv.style.backgroundImage = targetData.feelings.map(i => `url('/assets/feeling/${i}.svg')`).join();
      console.log(targetDiv.style.backgroundImage);
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
  }
  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.month = this.calendarCreator.getMonthName(this.monthNumber);
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
    if(this.isAdded) {this.setToday();}
  }
}
