/* eslint-disable max-len */
import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { JournalCreatorService } from '../../../../journal-creator.service';

@Component({
  selector: 'app-set-feeling',
  templateUrl: './set-feeling.component.html',
  styleUrls: ['./set-feeling.component.scss'],
})
export class SetFeelingComponent implements OnInit {
  @Input() time: number;
  public timeStr: string;
  public imgList: string[];
  public feelings: string[];
  constructor(private popoverCtrl: PopoverController,
              private journalCreator: JournalCreatorService) {
                this.imgList = this.journalCreator.getImgList;
                this.feelings = this.journalCreator.getFeelings;
              }

  ngOnInit() {
    if (this.time === 0) { this.timeStr = '첫번째';}
    else if (this.time === 1) { this.timeStr = '두번째';}
    else if (this.time === 2) { this.timeStr = '세번째';}

  }
  deleteFeeling() {
    this.popoverCtrl.dismiss({feeling: 'none', time: this.time}, 'confirm');
  }
  selectFeeling(e: Event) {
    const target = e.target as Element;
    if (target.closest('div')) {
      const targetImg = target.closest('div').children[0] as HTMLImageElement;
      const targetFeeling = targetImg.src.slice(16, -4);
      const name = this.journalCreator.getFeelingName(targetFeeling);
      this.popoverCtrl.dismiss({feeling: targetFeeling, time: this.time, name}, 'confirm');
    }
  }
}
