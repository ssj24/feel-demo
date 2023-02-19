import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Input } from '@angular/core';
import { IonInput, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-add-keyword',
  templateUrl: './add-keyword.component.html',
  styleUrls: ['./add-keyword.component.scss'],
})
export class AddKeywordComponent implements OnInit, AfterViewInit {
  @ViewChild('inputEl') inputEl: IonInput;
  @Input() keywords: string[];
  show: any = false;
  keywordVal = '';
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
    console.log(document.activeElement);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.inputEl.setFocus();
    },100);
  }
  chkDuplication() {
    if (this.keywordVal.trim().length < 1) {
      this.show = '한 글자 이상의 키워드를 입력해주세요.';
      return false;
    }
    if (this.keywords.includes(this.keywordVal)) {
      this.show = '이미 존재하는 키워드입니다.';
      return false;
    }
    return true;
  }
  onKeyPress(e: KeyboardEvent) {
    this.show = false;
    if (e.key === 'Enter') {
      if (this.chkDuplication()) {
        return this.onAdd();
      }
    }
  }
  onCancel() {
    this.popoverCtrl.dismiss(null, 'cancel');
  }
  onAdd() {
    if (this.chkDuplication()) {
      this.inputEl.value = '';
      this.keywords.push(this.keywordVal);
    }
  }
}
