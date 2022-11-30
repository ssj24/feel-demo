import { Component, Input, OnInit } from '@angular/core';
import { Day } from 'src/app/day.model';

@Component({
  selector: 'app-journal-dismissed',
  templateUrl: './journal-dismissed.component.html',
  styleUrls: ['./journal-dismissed.component.scss'],
})
export class JournalDismissedComponent implements OnInit {
  @Input() day: Day;
  @Input() response: object;
  constructor() { }

  ngOnInit() {}

}
