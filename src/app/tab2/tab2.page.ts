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
export class Tab2Page implements OnInit, AfterViewInit {
  @ViewChild('mainCalendar') mainCalendar: ElementRef;
  @ViewChildren('eachDays') eachDays: QueryList<ElementRef>;
  @Input() monthNumber: number;
  public monthDays: Day[];
  public month: string;
  public year: number;
  public weekDaysName = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  public today = new Date();
  public date = this.today.getDate();
  public daysArray: ElementRef[];
  public monthData: Day[] = [
    {
      date: null,
      dayNumber: 1,
      year: 2022,
      monthIndex: 10,
      weekDayNumber: 2,
      feelings: [
          'happy',
          'soso',
          'good'
      ],
      summary: 'hihihihi',
      diary: [
          {
              time: 0,
              sentence: ''
          }
      ],
      keywords: [
          'a'
      ],
      recording: {}
    },
    {
      date: null,
      dayNumber: 2,
      year: 2022,
      monthIndex: 10,
      weekDayNumber: 3,
      feelings: [
          'upset',
          'depressed',
          'none'
      ],
      summary: 'hihihihi',
      diary: [
          {
              time: 0,
              sentence: ''
          }
      ],
      keywords: [
          'a'
      ],
      recording: {}
    },
    {
      date: null,
      dayNumber: 9,
      year: 2022,
      monthIndex: 10,
      weekDayNumber: 3,
      feelings: [
          'happy',
          'none',
          'none'
      ],
      summary: 'hihihihi',
      diary: [
          {
              time: 0,
              sentence: ''
          }
      ],
      keywords: [
          'a'
      ],
      recording: {}
    },
    {
      date: null,
      dayNumber: 10,
      year: 2022,
      monthIndex: 10,
      weekDayNumber: 4,
      feelings: [
          'lonely',
          'soso',
          'sad'
      ],
      summary: 'hihihihi',
      diary: [
          {
              time: 0,
              sentence: ''
          }
      ],
      keywords: [
          'a'
      ],
      recording: {}
    },
    {
      date: null,
      dayNumber: 13,
      year: 2022,
      monthIndex: 10,
      weekDayNumber: 7,
      feelings: [
          'surprise',
          'not_good',
          'uneasy'
      ],
      summary: 'hihihihi',
      diary: [
          {
              time: 0,
              sentence: ''
          }
      ],
      keywords: [
          'a'
      ],
      recording: {}
    },
  ];
  public isPickerOpen = false;
  constructor(public calendarCreator: CalendarCreatorService,
              public feeling: FeelingService,
              private renderer: Renderer2,
              private gestureCtrl: GestureController,
              private domCtrl: DomController,
              private journalService: JournalCreatorService) {
                journalService.getJournalData$.subscribe(data => {
                  const newDay: Day = data as Day;
                  console.log('tab2.constructor',newDay.feelings);
                  const target = this.monthDays.findIndex(x => x.year === newDay.year && x.monthIndex === newDay.monthIndex && x.dayNumber === newDay.dayNumber);
                  if (target) {
                    this.monthDays[target] = newDay;
                  } else {
                    console.log('journalService got error');
                  };
                  // console.log(this.monthData[target]);
                  const targetData = this.monthDays.findIndex(x => x.year === newDay.year && x.monthIndex === newDay.monthIndex && x.dayNumber === newDay.dayNumber);
                  if (targetData) {
                    this.monthDays[targetData] = newDay;
                  } else {
                    this.monthDays.push(newDay);
                  }
                  const targetDay = this.daysArray[newDay.dayNumber].nativeElement;
                  this.setData(targetDay);
                  this.setStreak();
                });
              }
  ngOnInit(): void {
    this.setMonthDays(this.calendarCreator.getCurrentMonth());
    // this.dataToDays();

  }

  ionViewDidEnter(){
    // month data 받아온 걸  monthdays에 엎어씌워야 함


  }

  ngAfterViewInit(): void { // viewchild data binding
    this.daysArray = this.eachDays.toArray();
    this.eachDaysSet();
    this.eachDays.changes.subscribe((r) => {
      console.log('afterviewinit, subscribe');
      setTimeout(() => {
        this.daysArray = this.eachDays.toArray();
        this.eachDaysSet();
      }, 0);
    });
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
    // swipeGesture.enable(true);
  }

  dataToDays(): void {
    for (const day of this.monthDays) {
      const targetData = this.monthData.find(x => x.year === day.year && x.monthIndex === day.monthIndex && x.dayNumber === day.dayNumber);
      if (targetData) {
        day.feelings = targetData.feelings;
      }
    }
  }

  onNextMonth(): void {
    this.monthNumber++;
    if (this.monthNumber > 11) {
      this.monthNumber = 0;
      this.year++;
    }

    this.setMonthDays(this.calendarCreator.getCurrentMonth(this.monthNumber, this.year));
    // this.dataToDays();

  }

  onPreviousMonth(): void{
    this.monthNumber--;

    if (this.monthNumber < 0) {
      this.monthNumber = 11;
      this.year--;
    }

    this.setMonthDays(this.calendarCreator.getCurrentMonth(this.monthNumber, this.year));
    // this.dataToDays();

  }
  monthChanged(e: CustomEvent) {
    const newDate = new Date(e.detail.value);
    this.setMonthDays(this.calendarCreator.getCurrentMonth(newDate.getMonth(), newDate.getFullYear()));
  }
  dayClicked(e: Event, clickedDay: Day) {
    this.journalService.createJournal(clickedDay);
  }

  eachDaysSet() {
    for (const i of this.daysArray) {
      this.setData(i.nativeElement);
    }
    this.setToday();
    // this.setStreak();
  }

  setToday(): void {
    if (this.year === this.today.getFullYear() && this.monthNumber === this.today.getMonth()) {
      document.getElementById(`date${this.date}`).classList.add('today');
    }
  }

  setStreak(): void {
    const filteredDays = [...this.monthDays].filter(x => {
      let noneCount = 0;
      for (const i of x.feelings) {
        if (i === 'none') {
          noneCount++;
        }
      }
      if (noneCount === 3) {return false;}
      if (x.monthIndex !== this.monthNumber) {return false;}
      return true;});
    const data = filteredDays.sort((a, b) => b.dayNumber - a.dayNumber);
    console.log(data);
    if(this.year === data[0].year && this.monthNumber === data[0].monthIndex) {
      let minNumber = data[0].dayNumber;
      for (let i=1; i<data.length; i++) {
        minNumber--;
        if (data[i].dayNumber !== minNumber) {break;}
      }
      const maxNumber = data[0].dayNumber;
      for (let i = minNumber+1; i<=maxNumber; i++) {
        if (i === minNumber+1) {
          document.getElementById(`date${i}`).classList.add('first');
        }
        if (i === maxNumber) {
          document.getElementById(`date${i}`).classList.add('last');
        }
        document.getElementById(`date${i}`).classList.add('selectedDate');
    }
    }
  }
  setData(dayDiv: HTMLElement, monthData = this.monthDays): void {
    const targetDiv = dayDiv.children[0] as HTMLElement;
    const targetData = monthData.find(x => x.year === this.year && x.monthIndex === this.monthNumber && String(x.dayNumber) === dayDiv.children[1].textContent );
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

  }
  onYearClicked() {
    this.isPickerOpen = true;
  }
  private setMonthDays(days: Day[]): void {
    console.log(days);
    this.monthDays = days;
    this.monthNumber = days[10].monthIndex;
    this.month = this.calendarCreator.getMonthName(days[10].monthIndex);
    this.year = days[10].year;
  }
}
