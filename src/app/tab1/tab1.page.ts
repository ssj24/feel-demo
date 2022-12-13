/* eslint-disable max-len */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit{
  startRecordButton: HTMLElement;
  stopRecordButton: HTMLElement;
  soundClips: HTMLElement;
  constraints = {audio:true, video:false};
  stream: any;
  recorder: any;
  chunks = [];
  blob: Blob;
  mRec: MediaRecorder;

  constructor(public http: HttpClient) {
  }
  ngAfterViewInit(): void {
    this.startRecordButton = document.getElementById('startRecordButton') as HTMLElement;
    this.stopRecordButton = document.getElementById('stopRecordButton') as HTMLElement;
    this.soundClips = document.getElementById('soundClipContainer') as HTMLElement;
    this.startRecordButton.addEventListener('click', async () => {
      if (navigator.mediaDevices) {
        this.stream = await navigator.mediaDevices.getUserMedia(this.constraints);
        const mediaOptions = {
          mimeType:'audio/mpeg'
        };
        this.mRec = new MediaRecorder(this.stream);
        // visualize(stream);
        this.onStartRecord();
      }
    });
    this.stopRecordButton.addEventListener('click', () => {
        this.mRec.stop();
        console.log(this.mRec.state);
        console.log('recorder stopped');
        this.stopRecordButton.setAttribute('disabled', '');
        this.startRecordButton.removeAttribute('disabled');

        const clipContainer = document.createElement('article');
        const clipLabel = document.createElement('p');
        const audio = document.createElement('audio');
        const deleteButton = document.createElement('button');
        const saveButton = document.createElement('button');
        clipContainer.classList.add('clip');
        audio.setAttribute('controls', '');
        deleteButton.textContent = 'Delete';
        saveButton.textContent = 'Save';
        clipLabel.textContent = new Date().toTimeString();

        clipContainer.appendChild(audio);
        clipContainer.appendChild(clipLabel);
        clipContainer.appendChild(deleteButton);
        clipContainer.appendChild(saveButton);
        this.soundClips.appendChild(clipContainer);

        audio.controls = true;
        this.blob = new Blob(this.chunks, { type: 'audio/ogg; codecs=opus' });
        this.chunks = [];
        const audioURL = URL.createObjectURL(this.blob);
        audio.src = audioURL;
        console.log('recorder stopped');
        deleteButton.onclick = (e) => {
          const evtTgt = e.target as HTMLElement;
          evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
        };
        this.mRec.ondataavailable = (e) => {
          this.chunks.push(e.data);
        };
        saveButton.addEventListener('click', () => this.onSave(this.blob));
      });

    }

  async onStartRecord() {
    this.mRec.start();
    console.log(this.mRec.state);
    console.log('recorder started');
    this.startRecordButton.setAttribute('disabled', '');
    this.stopRecordButton.removeAttribute('disabled');

  }
  onTest() {
    const data = {
      data: 'none'
    };
    this.http.post(`https://192.168.31.35/SttAnalysis/`, data, {
      headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
    })
    .toPromise()
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log(err);
    });

  }
  async onSave(blob: Blob) {


    const recordedFile = new File([blob], 'audiorecord_cur.ogg');
    console.log(recordedFile);
    const form = new FormData();
    form.append('file', recordedFile);
    const container = new DataTransfer();
    container.items.add(recordedFile);
    console.log(container);
    const data = {
      data: 'none'
    };
    // multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
    // application/json
    this.http.post(`https://192.168.31.35/SttAnalysis/`, data, {
      headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
    })
    .toPromise()
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log(err);
    });

  }


}
