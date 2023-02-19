/* eslint-disable max-len */
import { Component, OnChanges, OnInit, SimpleChanges, Input, ViewChildren, QueryList, ElementRef, Renderer2, AfterViewInit, ViewChild } from '@angular/core';
import { DomController, Gesture, GestureController } from '@ionic/angular';
import { CalendarCreatorService } from '../../calendarCreator.service';
import { Day } from '../../day.model';
import { FeelingService } from '../../feeling.service';
import { JournalCreatorService } from '../../journal-creator.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss'],
})
export class MineComponent implements OnInit, AfterViewInit {
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
  public monthData: Day[] = [];
  public isPickerOpen = false;
  public isCal = true;
  constructor(public calendarCreator: CalendarCreatorService,
              public feeling: FeelingService,
              private renderer: Renderer2,
              private gestureCtrl: GestureController,
              private domCtrl: DomController,
              private journalService: JournalCreatorService) {
                journalService.getJournalData$.subscribe(data => {
                  const newDay: Day = data as Day;
                  console.log('tab2.constructor',newDay.feelings);
                  // console.log(this.monthData[target]);
                  const targetData = this.monthDays.findIndex(x => x.year === newDay.year && x.monthIndex === newDay.monthIndex && x.dayNumber === newDay.dayNumber);
                  if (targetData) {
                    this.monthDays[targetData] = newDay;
                  } else {
                    this.monthDays.push(newDay);
                  }
                  const targetDay = this.daysArray[newDay.dayNumber].nativeElement;
                  this.setData(newDay, targetDay);
                  // this.setStreak();
                });
              }
  ngOnInit(): void {
    console.log('oninit');
    this.setMonthDays(this.calendarCreator.getMonth());
    this.monthData = this.calendarCreator.getData();

  }

  ionViewDidEnter(){
    // month data 받아온 걸  monthdays에 엎어씌워야 함
    console.log('ionViewDidEnter');


  }

  ngAfterViewInit(): void { // viewchild data binding
    console.log('ngAfterViewInit');

    setTimeout(() => {
      console.log('afterviewinit, first');
      this.dataToDays();
      if (this.isCal) {
        this.daysArray = this.eachDays.toArray();
        this.eachDaysSet();
      }
    }, 100);
    this.eachDays.changes.subscribe(async (r) => {
      console.log('afterviewinit, subscribe');
      this.monthData = await this.calendarCreator.getData(this.monthNumber, this.year);
      setTimeout(() => {
        this.dataToDays();
        if (this.isCal) {
          this.daysArray = this.eachDays.toArray();
          this.eachDaysSet();
        }
      }, 50);
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
    swipeGesture.enable(true);
  }
  dataToDays(): void {
    // for (const day of this.monthDays) {
    //   const targetData = this.monthData.find(x =>  x.dayNumber === day.dayNumber && x.year === day.year && x.monthIndex === day.monthIndex);
    //   if (targetData) {
    //     console.log(day.year, targetData.year, day.monthIndex, targetData.monthIndex, day.dayNumber, targetData.dayNumber, targetData.feelings);
    //     day.feelings = targetData.feelings;
    //   }
    // }
    for (const data of this.monthData) {
      const targetDay = this.monthDays.findIndex(x =>  x.dayNumber === data.dayNumber && x.year === data.year && x.monthIndex === data.monthIndex);
      if (targetDay >= 0) {
        this.monthDays[targetDay].feelings = data.feelings;
      }
    }
    console.log('datatodays', this.monthDays);
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
  monthChanged(e: Event) {
    const ev = e as CustomEvent;
    const newDate = new Date(ev.detail.value);
    this.setMonthDays(this.calendarCreator.getMonth(newDate.getMonth(), newDate.getFullYear()));

  }
  dayClicked(e: Event, clickedDay: Day) {
    console.log(e, clickedDay);
    this.journalService.createJournal(clickedDay);
  }

  eachDaysSet() {
    for (let i=0; i<this.daysArray.length; i++) {
      this.setData(this.monthDays[i], this.daysArray[i].nativeElement);
    }
    this.setToday();
    // this.setStreak();
    this.monthData = [];
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
  setData(targetDay: Day, dayDiv: HTMLElement, monthData = this.monthDays): void {
    const targetDiv = dayDiv.children[0] as HTMLElement;
    const targetData = monthData.findIndex(x => x.year === targetDay.year && x.monthIndex === targetDay.monthIndex && String(x.dayNumber) === dayDiv.children[1].textContent );
    if (targetData >= 0) {
      let noneCount = 0;
      for (const feeling of monthData[targetData].feelings) {
        if (feeling === 'none') { noneCount++; }
      }
      if (noneCount === 2) { targetDiv.classList.add('singleContainer'); targetDiv.classList.remove('doubleContainer'); targetDiv.classList.remove('tripleContainer');}
      else if (noneCount === 1) {targetDiv.classList.add('doubleContainer'); targetDiv.classList.remove('singleContainer'); targetDiv.classList.remove('tripleContainer');}
      else if (noneCount === 0) {targetDiv.classList.add('tripleContainer'); targetDiv.classList.remove('doubleContainer'); targetDiv.classList.remove('singleContainer');}
      else if (noneCount === 3) { targetDiv.classList.remove('singleContainer'); targetDiv.classList.remove('doubleContainer'); targetDiv.classList.remove('tripleContainer');}
      targetDiv.style.backgroundImage = monthData[targetData].feelings.filter(i => i !== 'none').map(i => `url('/assets/feeling/${i}.svg')`).join();
    }

  }
  onYearClicked() {
    this.isPickerOpen = true;
  }
  toCal() {
    this.isCal = true;
  }
  toList() {
    this.isCal = false;
  }
  // 빈 달력을 만든다
  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = days[10].monthIndex;
    this.month = this.calendarCreator.getMonthName(days[10].monthIndex);
    this.year = days[10].year;
  }
}
