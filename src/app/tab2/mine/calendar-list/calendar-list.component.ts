/* eslint-disable max-len */
import { Component, Input, OnInit, AfterViewInit, SimpleChanges } from '@angular/core';
import { Day } from 'src/app/day.model';
import { OnChanges } from '@angular/core';
import { CalendarCreatorService } from '../../../calendarCreator.service';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss'],
})
export class CalendarListComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() data: Day[];
  @Input() year: number;
  @Input() monthNumber: number;
  monthData: Day[];
  constructor(private calendarCreator: CalendarCreatorService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
  //   this.monthData = [
  //     {
  //         date: new Date('2022-11-28T00:00:00.000Z'),
  //         year: 2022,
  //         monthIndex: 10,
  //         weekDayNumber: 1,
  //         dayNumber: 28,
  //         feelings: [
  //             'sad',
  //             'soso',
  //             'good'
  //         ],
  //         summary: 'sample',
  //         diary: [],
  //         keywords: [
  //             '회의실',
  //             '예약',
  //             '콜라비',
  //             '일정',
  //             '음성',
  //             '녹음',
  //             '모바일',
  //             'api'
  //         ]
  //     },
  //     {
  //         date: new Date('2022-11-29T00:00:00.000Z'),
  //         year: 2022,
  //         monthIndex: 10,
  //         weekDayNumber: 2,
  //         dayNumber: 29,
  //         feelings: [
  //             'happy',
  //             'soso',
  //             'good'
  //         ],
  //         summary: 'sample',
  //         diary: [
  //             {
  //                 time: 0,
  //                 sentence: 'diarysample'
  //             },
  //             {
  //                 time: 10,
  //                 sentence: 'diarysample2'
  //             },
  //             {
  //                 time: 63,
  //                 sentence: 'diarysample3how about long text?? what if it gets long like this let me try.'
  //             }
  //         ],
  //         keywords: []
  //     },
  //     {
  //         date: new Date('2022-11-30T00:00:00.000Z'),
  //         year: 2022,
  //         monthIndex: 10,
  //         weekDayNumber: 3,
  //         dayNumber: 30,
  //         feelings: [
  //             'depressed',
  //             'none',
  //             'none'
  //         ],
  //         summary: '',
  //         diary: [
  //             {
  //                 time: 0,
  //                 sentence: 'diarysample'
  //             },
  //             {
  //                 time: 10,
  //                 sentence: 'diarysample2'
  //             },
  //             {
  //                 time: 63,
  //                 sentence: 'diarysample3how about long text?? what if it gets long like this let me try.'
  //             }
  //         ],
  //         keywords: [
  //             '회의실',
  //             '예약',
  //             '콜라비',
  //             '일정',
  //             '음성',
  //             '녹음',
  //             '모바일',
  //             'api'
  //         ]
  //     },
  //     {
  //         date: new Date('2022-12-01T00:00:00.000Z'),
  //         year: 2022,
  //         monthIndex: 11,
  //         weekDayNumber: 4,
  //         dayNumber: 1,
  //         feelings: [
  //             'upset',
  //             'none',
  //             'unpleasant'
  //         ],
  //         summary: 'sample',
  //         diary: [],
  //         keywords: [
  //             '회의실',
  //             '예약',
  //             '콜라비'
  //         ]
  //     },
  //     {
  //         date: new Date('2022-12-02T00:00:00.000Z'),
  //         year: 2022,
  //         monthIndex: 11,
  //         weekDayNumber: 5,
  //         dayNumber: 2,
  //         feelings: [
  //             'none',
  //             'none',
  //             'none'
  //         ],
  //         summary: 'sample',
  //         diary: [
  //             {
  //                 time: 0,
  //                 sentence: 'diarysample'
  //             },
  //             {
  //                 time: 10,
  //                 sentence: 'diarysample2'
  //             },
  //             {
  //                 time: 63,
  //                 sentence: 'diarysample3how about long text?? what if it gets long like this let me try.'
  //             }
  //         ],
  //         keywords: []
  //     },
  //     {
  //         date: new Date('2022-12-03T00:00:00.000Z'),
  //         year: 2022,
  //         monthIndex: 11,
  //         weekDayNumber: 6,
  //         dayNumber: 3,
  //         feelings: [
  //             'none',
  //             'none',
  //             'none'
  //         ],
  //         summary: '',
  //         diary: [
  //             {
  //                 time: 0,
  //                 sentence: 'diarysample'
  //             },
  //             {
  //                 time: 10,
  //                 sentence: 'diarysample2'
  //             },
  //             {
  //                 time: 63,
  //                 sentence: 'diarysample3how about long text?? what if it gets long like this let me try.'
  //             }
  //         ],
  //         keywords: [
  //             '회의실'
  //         ]
  //     },
  //     {
  //         date: new Date('2022-12-04T00:00:00.000Z'),
  //         year: 2022,
  //         monthIndex: 11,
  //         weekDayNumber: 0,
  //         dayNumber: 4,
  //         feelings: [
  //             'happy',
  //             'soso',
  //             'good'
  //         ],
  //         summary: 'sample',
  //         diary: [
  //             {
  //                 time: 0,
  //                 sentence: 'diarysample'
  //             },
  //             {
  //                 time: 10,
  //                 sentence: 'diarysample2'
  //             },
  //             {
  //                 time: 63,
  //                 sentence: 'diarysample3how about long text?? what if it gets long like this let me try.'
  //             }
  //         ],
  //         keywords: [
  //             '회의실',
  //             '예약',
  //             '콜라비',
  //             '일정',
  //             '음성',
  //             '녹음',
  //             '모바일',
  //             'api'
  //         ]
  //     },
  //     {
  //         date: new Date('2022-12-05T00:00:00.000Z'),
  //         year: 2022,
  //         monthIndex: 11,
  //         weekDayNumber: 1,
  //         dayNumber: 5,
  //         feelings: [
  //             'happy',
  //             'none',
  //             'none'
  //         ],
  //         summary: 'sample',
  //         diary: [
  //             {
  //                 time: 0,
  //                 sentence: 'diarysample'
  //             },
  //             {
  //                 time: 10,
  //                 sentence: 'diarysample2'
  //             },
  //             {
  //                 time: 63,
  //                 sentence: 'diarysample3how about long text?? what if it gets long like this let me try.'
  //             }
  //         ],
  //         keywords: [
  //             '회의실',
  //             '예약',
  //         ]
  //     },
  //     {
  //         date: new Date('2022-12-06T00:00:00.000Z'),
  //         year: 2022,
  //         monthIndex: 11,
  //         weekDayNumber: 2,
  //         dayNumber: 6,
  //         feelings: [
  //             'happy',
  //             'soso',
  //             'good'
  //         ],
  //         summary: 'sample',
  //         diary: [
  //             {
  //                 time: 0,
  //                 sentence: 'diarysample'
  //             },
  //             {
  //                 time: 10,
  //                 sentence: 'diarysample2'
  //             },
  //             {
  //                 time: 63,
  //                 sentence: 'diarysample3how about long text?? what if it gets long like this let me try.'
  //             }
  //         ],
  //         keywords: [
  //             '회의실',
  //             '예약',
  //             '콜라비',
  //             '일정',
  //             '음성',
  //             '녹음',
  //             '모바일',
  //             'api'
  //         ]
  //     }
  // ];
    setTimeout(() => {
      this.monthDaysFiltering();
    }, 50);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.monthNumber) {
      this.monthData = this.calendarCreator.getData(this.monthNumber, this.year);
      this.monthDaysFiltering();
    }
  }

  monthDaysFiltering() {
    this.monthData = this.data.filter(x => x.year === this.year && x.monthIndex === this.monthNumber);

    // this.monthData = this.monthData.filter(x => x.year === this.year && x.monthIndex === this.monthNumber);
    for (const day of this.monthData) {
      day.summary = 'summarysample about long text?? what if it gets long like this let me try.';
      day.diary = [
        {
          time: 0,
          sentence: 'diarysample'
        },
        {
          time: 10,
          sentence: 'diarysample2'
        },
        {
          time: 63,
          sentence: 'diarysample3how about long text?? what if it gets long like this let me try.'
        },
      ];
      day.keywords = ['회의실', '예약', '콜라비', '일정', '음성', '녹음', '모바일', 'api'];
      let noneCount = 0;
      for (const feeling of day.feelings) {
        if (feeling === 'none') {noneCount++;}
      }
      day.feelingsClass = (noneCount === 0 ) ? 'tripleContainer' : (noneCount === 1) ? 'doubleContainer' : 'singleContainer';
      if (noneCount === 3) {
        day.src = `url('/assets/feeling/empty.svg')`;
      } else {
        day.src = day.feelings.filter(i => i !== 'none').map(i => `url('/assets/feeling/${i}.svg')`).join();

      }





      //   const targetDiv = document.getElementById(`date${day.dayNumber}`);
      //   const targetImageContainer = this.imgContainer.nativeElement;
      //   console.log(targetImageContainer);
      //   let noneCount = 0;
      //   for (const feeling of day.feelings) {
      //     if (feeling === 'none') {noneCount++;}
      //   }
      //   if (noneCount >= 2) { targetImageContainer.classList.add('singleContainer'); targetImageContainer.classList.remove('doubleContainer'); targetImageContainer.classList.remove('tripleContainer');}
      //   else if (noneCount === 1) {targetImageContainer.classList.add('doubleContainer'); targetImageContainer.classList.remove('singleContainer'); targetImageContainer.classList.remove('tripleContainer');}
      //   else if (noneCount === 0) {targetImageContainer.classList.add('tripleContainer'); targetImageContainer.classList.remove('doubleContainer'); targetImageContainer.classList.remove('singleContainer');}
      //   // else if (noneCount === 3) { targetImageContainer.classList.remove('singleContainer'); targetImageContainer.classList.remove('doubleContainer'); targetImageContainer.classList.remove('tripleContainer');}
      //   if (noneCount === 3) {
      //     targetImageContainer.style.backgroundImage = `url('/assets/feeling/empty.svg')`;
      //   } else if (noneCount <= 2) {
      //     targetImageContainer.style.backgroundImage = day.feelings.filter(i => i !== 'none').map(i => `url('/assets/feeling/${i}.svg')`).join();
        }
  }

}
