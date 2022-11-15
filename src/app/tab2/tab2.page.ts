/* eslint-disable max-len */
import { Component, OnChanges, OnInit, SimpleChanges, Input, ViewChildren, QueryList, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { DomController, Gesture, GestureController } from '@ionic/angular';
import { maxHeaderSize } from 'http';
import { CalendarCreatorService } from '../calendarCreator.service';
import { Day } from '../day.model';
import { FeelingService } from '../feeling.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnChanges, AfterViewInit {
  @ViewChildren('eachDays') eachDays: QueryList<ElementRef>;
  @Input() monthNumber: number;
  public datadates: Day[] = [];
  public monthDays: Day[];
  public month: string;
  public year: number;

  public weekDaysName = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  public today = new Date();
  public date = this.today.getDate();
  public monthData: Day[] = [
    {
      monthIndex: 11,
      dayNumber: 8,
      year: 2022,
      weekDayNumber: 4,
      feelings: ['unpleasant'],
    },
    {
      monthIndex: 11,
      dayNumber: 9,
      year: 2022,
      weekDayNumber: 5,
      feelings: ['unpleasant'],
    },
    {
      monthIndex: 11,
      dayNumber: 10,
      year: 2022,
      weekDayNumber: 6,
      feelings: ['unpleasant'],
    },
    {
      monthIndex: 11,
      dayNumber: 11,
      year: 2022,
      weekDayNumber: 7,
      feelings: ['unpleasant'],
    },
    {
      monthIndex: 10,
      dayNumber: 8,
      year: 2022,
      weekDayNumber: 2,
      feelings: ['unpleasant'],
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
        feelings: ['surprise', 'upset'],
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
              private domCtrl: DomController) {}

  ngOnInit(): void {
    this.setMonthDays(this.calendarCreator.getCurrentMonth());
  }

  ionViewDidEnter(){
    // this.setToday();
    this.eachDaysSet();

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngAfterViewInit(): void { // viewchild data binding
    const swipeGesture = this.gestureCtrl.create({
      el: document.body,
      threshold: 15,
      direction: 'x',
      gestureName: 'swipe-delete',
      onMove: ev => {
        const currentX = ev.deltaX;

        this.domCtrl.write(() => {
          // Make sure the item is above the other elements
          document.body.style.zIndex = '2';
          // Reposition the item
          document.body.style.fontSize = `30px`;
        });
      },
      onEnd: ev => {
        document.body.style.transition = '0.2s ease-out';

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
    const target = e.target as HTMLDivElement;
    const targetDate = target.closest('.date') as HTMLElement;
    if (targetDate) {
      this.datadates.push(clickedDay);
      this.setData(targetDate);
    }
    else { return; }
  }

  eachDaysSet() {
    console.log(this.year, this.monthNumber, this.today);
    const daysArray = this.eachDays.toArray();
    for (const i of daysArray) {
      this.setData(i.nativeElement);
    }
    this.setToday();
  }

  setToday(): void {
    if (this.year === this.today.getFullYear() && this.monthNumber === this.today.getMonth()) {
      document.getElementById(`date${this.date}`).classList.add('today');
      console.log('this month!!', document.getElementById(`date${this.date}`));
    }
    document.getElementById('date15').style.backgroundColor='red';

  }

  setStreak(dayDiv: HTMLElement): void {
    // const lastFeeling = this.datadates.reduce((prev, cur) =>  max(prev, cur);)
  }
  setData(dayDiv: HTMLElement): void {
    const targetDiv = dayDiv.children[0] as HTMLElement;
    const targetData = this.monthData.find(x => x.year === this.year && x.monthIndex === this.monthNumber && String(x.dayNumber) === dayDiv.children[1].textContent );
    if (targetData) {
      if (targetData.feelings.length === 1) { targetDiv.classList.add('singleContainer');}
      else if (targetData.feelings.length === 2) {targetDiv.classList.add('doubleContainer');}
      else if (targetData.feelings.length === 3) {targetDiv.classList.add('tripleContainer');}
      targetDiv.style.backgroundImage = targetData.feelings.map(i => `url('/assets/feeling/${i}.svg')`).join();
      dayDiv.classList.add('selectedDate');
      if (!dayDiv.previousElementSibling || !dayDiv.previousElementSibling.classList.contains('selectedDate')) {
        dayDiv.classList.add('first');
      } else if (dayDiv.previousElementSibling && dayDiv.previousElementSibling.classList.contains('selectedDate')) {
        dayDiv.previousElementSibling.classList.remove('last');
      }
      if (!dayDiv.nextElementSibling || !dayDiv.nextElementSibling.classList.contains('selectedDate')) {
        dayDiv.classList.add('last');
      } else if (dayDiv.nextElementSibling && dayDiv.nextElementSibling.classList.contains('selectedDate')) {
        dayDiv.nextElementSibling.classList.remove('first');
      }
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
