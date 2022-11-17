import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-set-feeling',
  templateUrl: './set-feeling.component.html',
  styleUrls: ['./set-feeling.component.scss'],
})
export class SetFeelingComponent implements OnInit {
  @Input() time: number;
  public timeStr: string;
  public imgList = ['happy','soso','good','excite','great','uneasy','sad','not_good','lonely','depressed','surprise','upset','unpleasant'];
  public feelings = ['즐거워', '그냥 그래', '좋아!', '설레', '행복해', '불안해', '슬퍼', '별로야', '외로워', '우울해', '놀랐어', '화났어', '불쾌해'];
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
    if (this.time === 0) { this.timeStr = '아침';}
    else if (this.time === 1) { this.timeStr = '점심';}
    else if (this.time === 2) { this.timeStr = '저녁';}

  }
  selectFeeling(e: Event) {
    const target = e.target as Element;
    if (target.closest('div')) {
      const targetImg = target.closest('div').children[0] as HTMLImageElement;
      const targetFeeling = targetImg.src.slice(16, -4);
      console.log(targetFeeling);
      this.popoverCtrl.dismiss({feeling: targetFeeling, time: this.time}, 'confirm');
    }
  }
}
