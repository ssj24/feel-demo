import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { IonTextarea, ModalController } from '@ionic/angular';
import { Diary } from 'src/app/diary.model';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.scss'],
})
export class WritingComponent implements OnInit, AfterViewInit {
  @ViewChild('inputEl') inputEl: IonTextarea;
  @Input() diary: Diary[];
  public val = '';
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.inputEl.setFocus();
      for(const i of this.diary) {
        this.val += i.sentence + ' ';
      }
    },100);

  }
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  onSave() {
    this.modalCtrl.dismiss(this.val, 'confirm');
  }

}
