import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { IonInput, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-add-keyword',
  templateUrl: './add-keyword.component.html',
  styleUrls: ['./add-keyword.component.scss'],
})
export class AddKeywordComponent implements OnInit, AfterViewInit {
  @ViewChild('inputEl') inputEl: IonInput;
  public show = false;
  public keywordVal = '';
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
    console.log(document.activeElement);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.inputEl.setFocus();
    },100);
  }

  onCancel() {
    this.popoverCtrl.dismiss(null, 'cancel');
  }
  onAdd() {
    this.popoverCtrl.dismiss(this.keywordVal, 'confirm');
  }
}
