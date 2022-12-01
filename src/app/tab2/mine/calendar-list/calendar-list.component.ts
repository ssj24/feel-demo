import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Day } from 'src/app/day.model';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss'],
})
export class CalendarListComponent implements OnInit {
  @Input() monthDays: Day[];
  constructor() { }

  ngOnInit() {}
  monthDaysFiltering() {
    const existDays = this.monthDays;
  }

}
