/* eslint-disable max-len */
import { Component, OnChanges, OnInit, SimpleChanges, Input, ViewChildren, QueryList, ElementRef, Renderer2, AfterViewInit, ViewChild } from '@angular/core';
import { DomController, Gesture, GestureController } from '@ionic/angular';
import { maxHeaderSize } from 'http';
import { CalendarCreatorService } from '../calendarCreator.service';
import { Day } from '../day.model';
import { FeelingService } from '../feeling.service';
import { JournalCreatorService } from '../journal-creator.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('mainCalendar') mainCalendar: ElementRef;
  @ViewChildren('eachDays') eachDays: QueryList<ElementRef>;
  @Input() monthNumber: number;
  public receivedData: {data: any; day: Day};
  public datadates: Day[] = [];
  public monthDays: Day[];
  public month: string;
  public year: number;
  public weekDaysName = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  public today = new Date();
  public date = this.today.getDate();
  public daysArray: ElementRef[];
  public monthData: Day[] = [
    {
      monthIndex: 11,
      dayNumber: 8,
      year: 2022,
      weekDayNumber: 4,
      feelings: ['unpleasant', 'none', 'none'],
    },
    {
      monthIndex: 11,
      dayNumber: 9,
      year: 2022,
      weekDayNumber: 5,
      feelings: ['unpleasant', 'none', 'none'],
    },
    {
      monthIndex: 11,
      dayNumber: 10,
      year: 2022,
      weekDayNumber: 6,
      feelings: ['unpleasant', 'none', 'none'],
    },
    {
      monthIndex: 11,
      dayNumber: 11,
      year: 2022,
      weekDayNumber: 7,
      feelings: ['none', 'unpleasant', 'none'],
    },
    {
      monthIndex: 10,
      dayNumber: 8,
      year: 2022,
      weekDayNumber: 2,
      feelings: ['none', 'none', 'unpleasant'],
    },
    // {
    //     monthIndex: 10,
    //     dayNumber: 14,
    //     year: 2022,
    //     weekDayNumber: 1,
    //     feelings: ['uneasy', 'sad', 'excite'],
    // },
    {
        monthIndex: 10,
        dayNumber: 15,
        year: 2022,
        weekDayNumber: 2,
        feelings: ['uneasy', 'sad', 'excite'],
    },
    // {
    //     monthIndex: 10,
    //     dayNumber: 16,
    //     year: 2022,
    //     weekDayNumber: 3,
    //     feelings: ['uneasy', 'sad', 'excite'],
    // },
    // {
    //     monthIndex: 10,
    //     dayNumber: 1,
    //     year: 2022,
    //     weekDayNumber: 2,
    //     feelings: ['uneasy', 'sad', 'excite'],
    // },
    // {
    //     monthIndex: 10,
    //     dayNumber: 10,
    //     year: 2022,
    //     weekDayNumber: 4,
    //     feelings: ['uneasy', 'sad', 'excite'],
    // },
    {
        monthIndex: 10,
        dayNumber: 17,
        year: 2022,
        weekDayNumber: 4,
        feelings: ['happy', 'lonely', 'depressed'],
    },
    {
        monthIndex: 10,
        dayNumber: 2,
        year: 2022,
        weekDayNumber: 3,
        feelings: ['happy', 'lonely', 'depressed'],
    },
    {
        monthIndex: 10,
        dayNumber: 9,
        year: 2022,
        weekDayNumber: 3,
        feelings: ['happy', 'lonely', 'depressed'],
    },
    {
        monthIndex: 10,
        dayNumber: 11,
        year: 2022,
        weekDayNumber: 5,
        feelings: ['happy', 'lonely', 'depressed'],
    },
    {
        monthIndex: 10,
        dayNumber: 18,
        year: 2022,
        weekDayNumber: 5,
        feelings: ['happy', 'lonely', 'depressed'],
    },
    {
        monthIndex: 10,
        dayNumber: 25,
        year: 2022,
        weekDayNumber: 5,
        feelings: ['surprise', 'upset', 'none'],
    },
    {
        monthIndex: 10,
        dayNumber: 24,
        year: 2022,
        weekDayNumber: 4,
        feelings: ['happy', 'lonely', 'depressed'],
    },
    {
        monthIndex: 10,
        dayNumber: 23,
        year: 2022,
        weekDayNumber: 3,
        feelings: ['happy', 'lonely', 'depressed'],
    },
    {
        monthIndex: 10,
        dayNumber: 22,
        year: 2022,
        weekDayNumber: 2,
        feelings: ['happy', 'lonely', 'depressed'],
    },
    {
        monthIndex: 10,
        dayNumber: 21,
        year: 2022,
        weekDayNumber: 1,
        feelings: ['happy', 'lonely', 'depressed'],
    },
    {
        monthIndex: 10,
        dayNumber: 28,
        year: 2022,
        weekDayNumber: 1,
        feelings: ['happy', 'lonely', 'depressed'],
    },
    {
        monthIndex: 10,
        dayNumber: 29,
        year: 2022,
        weekDayNumber: 2,
        feelings: ['happy', 'lonely', 'depressed'],
    },
    {
        monthIndex: 10,
        dayNumber: 30,
        year: 2022,
        weekDayNumber: 3,
        feelings: ['happy', 'lonely', 'depressed'],
    },
    {
        monthIndex: 10,
        dayNumber: 3,
        year: 2022,
        weekDayNumber: 4,
        feelings: ['happy', 'lonely', 'depressed'],
    },
    {
        monthIndex: 10,
        dayNumber: 4,
        year: 2022,
        weekDayNumber: 5,
        feelings: ['none', 'good', 'none'],
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
        feelings: ['lonely', 'sad', 'none'],
    },
    {
        monthIndex: 10,
        dayNumber: 13,
        year: 2022,
        weekDayNumber: 7,
        feelings: ['happy', 'lonely', 'depressed'],
    },
    {
        monthIndex: 10,
        dayNumber: 12,
        year: 2022,
        weekDayNumber: 6,
        feelings: ['happy', 'lonely', 'depressed'],
    },
    {
        monthIndex: 10,
        dayNumber: 7,
        year: 2022,
        weekDayNumber: 1,
        feelings: ['not_good', 'none', 'none'],
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
        feelings: ['depressed', 'none', 'none'],
    },
    {
        monthIndex: 10,
        dayNumber: 27,
        year: 2022,
        weekDayNumber: 7,
        feelings: ['happy', 'lonely', 'depressed'],
    },
    {
        monthIndex: 10,
        dayNumber: 20,
        year: 2022,
        weekDayNumber: 7,
        feelings: ['happy', 'lonely', 'depressed'],
    }
];
  constructor(public calendarCreator: CalendarCreatorService,
              public feeling: FeelingService,
              private renderer: Renderer2,
              private gestureCtrl: GestureController,
              private domCtrl: DomController,
              private journalService: JournalCreatorService) {
                journalService.getJournalData$.subscribe(data => {
                  console.log('tab2.constructor',data);
                  this.receivedData = data as {data: any; day: Day};
                  const newDay: Day = {
                    year: this.receivedData.day.year,
                    monthIndex: this.receivedData.day.monthIndex,
                    dayNumber: this.receivedData.day.dayNumber,
                    weekDayNumber: this.receivedData.day.weekDayNumber,
                    feelings: this.receivedData.data.feelings,

                  };
                  const targetData = this.monthDays.find(x => x.year === newDay.year && x.monthIndex === newDay.monthIndex && x.dayNumber === newDay.dayNumber);
                  if (targetData) {
                    // 나중에는 일기까지 통으로 덮어씌울 것
                    targetData.feelings = newDay.feelings;
                  } else {
                    console.log('journalService got error');
                  }
                  // const targetDay = this.daysArray[this.receivedData.day.dayNumber].nativeElement;
                  // this.setData(targetDay);
                  this.eachDaysSet();
                });
              }
  ngOnInit(): void {
    this.setMonthDays(this.calendarCreator.getCurrentMonth());
  }

  ionViewDidEnter(){
    // this.setToday();
    this.eachDaysSet();
    this.setStreak();

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngAfterViewInit(): void { // viewchild data binding

    this.daysArray = this.eachDays.toArray();

    const swipeGesture = this.gestureCtrl.create({
      el: document.querySelector('.mainCalendar'),
      threshold: 15,
      direction: 'x',
      gestureName: 'swipe-delete',
      onMove: ev => {
        // this.domCtrl.write(() => {
        //   // Make sure the item is above the other elements
        //   document.body.style.zIndex = '2';
        //   Reposition the item
        //   document.body.style.fontSize = `30px`;
        // });
      },
      onEnd: ev => {
        // document.body.style.transition = '0.2s ease-out';
        if (ev.deltaX < 0) {
          return this.onNextMonth();
        } else {
          return this.onPreviousMonth();
        }

        // Fly out the element if we cross the threshold of 150px
        // if (ev.deltaX < -150) {
        //   this.domCtrl.write(() => {
        //     itemElement.style.transform = `translate3d(-${windowWidth}px, 0, 0)`;
        //   });
        //   deleteAnimation.play();

        //   deleteAnimation.onFinish(async () => {
        //     this.myArray = this.myArray.filter(number => number != i + 1);

        //     const toast = await this.toastCtrl.create({
        //       message: `Item ${i + 1} removed.`,
        //       duration: 2000
        //     });
        //     toast.present();
        //   });
        // } else {
        //   // Fly the item back into the original position
        //   this.domCtrl.write(() => {
        //     itemElement.style.transform = '';
        //   });
        // }
      }
    }, true);

    // Don't forget to enable!
    swipeGesture.enable(true);
  }



  onNextMonth(): void {
    this.monthNumber++;
    if (this.monthNumber > 11) {
      this.monthNumber = 0;
      this.year++;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
    this.eachDaysSet();
  }

  onPreviousMonth(): void{
    this.monthNumber--;

    if (this.monthNumber < 0) {
      this.monthNumber = 11;
      this.year--;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
    this.eachDaysSet();
  }

  dayClicked(e: Event, clickedDay: Day) {
    this.journalService.createJournal(clickedDay);
  }

  eachDaysSet() {
    console.log('eachdaysset', this.year, this.monthNumber, this.today);
    for (const i of this.daysArray) {
      this.setData(i.nativeElement);
    }
    this.setToday();
  }

  setToday(): void {
    if (this.year === this.today.getFullYear() && this.monthNumber === this.today.getMonth()) {
      document.getElementById(`date${this.date}`).classList.add('today');
      console.log('this month!!', document.getElementById(`date${this.date}`));
    }
  }

  setStreak(): void {
    const data = this.monthData.sort((a, b) => b.dayNumber - a.dayNumber); // 30~17
    let minNumber = data[0].dayNumber;
    for (let i=1; i<data.length; i++) {
      minNumber--;
      if (data[i].dayNumber !== minNumber) {break;}
    }
    const maxNumber = data[0].dayNumber;
    for (let i = minNumber + 1; i<=maxNumber; i++) {
      document.getElementById(`date${i}`).classList.add('selectedDate');
    }
    // const lastFeeling = this.datadates.reduce((prev, cur) =>  max(prev, cur);)
    // dayDiv.classList.add('selectedDate');
    //   if (!dayDiv.previousElementSibling || !dayDiv.previousElementSibling.classList.contains('selectedDate')) {
    //     dayDiv.classList.add('first');
    //   } else if (dayDiv.previousElementSibling && dayDiv.previousElementSibling.classList.contains('selectedDate')) {
    //     dayDiv.previousElementSibling.classList.remove('last');
    //   }
    //   if (!dayDiv.nextElementSibling || !dayDiv.nextElementSibling.classList.contains('selectedDate')) {
    //     dayDiv.classList.add('last');
    //   } else if (dayDiv.nextElementSibling && dayDiv.nextElementSibling.classList.contains('selectedDate')) {
    //     dayDiv.nextElementSibling.classList.remove('first');
    //   }
  }
  setData(dayDiv: HTMLElement): void {
    const targetDiv = dayDiv.children[0] as HTMLElement;
    const targetData = this.monthDays.find(x => x.year === this.year && x.monthIndex === this.monthNumber && String(x.dayNumber) === dayDiv.children[1].textContent );
    if (targetData) {
      let noneCount = 0;
      for (const feeling of targetData.feelings) {
        if (feeling === 'none') { noneCount++; }
      }
      if (noneCount === 2) { targetDiv.classList.add('singleContainer'); targetDiv.classList.remove('doubleContainer'); targetDiv.classList.remove('tripleContainer');}
      else if (noneCount === 1) {targetDiv.classList.add('doubleContainer'); targetDiv.classList.remove('singleContainer'); targetDiv.classList.remove('tripleContainer');}
      else if (noneCount === 0) {targetDiv.classList.add('tripleContainer'); targetDiv.classList.remove('doubleContainer'); targetDiv.classList.remove('singleContainer');}
      else if (noneCount === 3) { targetDiv.classList.remove('singleContainer'); targetDiv.classList.remove('doubleContainer'); targetDiv.classList.remove('tripleContainer');}
      targetDiv.style.backgroundImage = targetData.feelings.filter(i => i !== 'none').map(i => `url('/assets/feeling/${i}.svg')`).join();
    }
    console.log('setData');

  }
  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.month = this.calendarCreator.getMonthName(this.monthNumber);
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
    console.log('setMonthDays');
  }
}
