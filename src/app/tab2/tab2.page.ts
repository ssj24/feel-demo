/* eslint-disable max-len */
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public isMine = true;
  constructor() {};
  ngOnInit(): void {
  }
  onExploreClick(e: Event) {
    // if ((e.target as HTMLElement).attributes.includes('disabled')) {

    // }
  }
}
