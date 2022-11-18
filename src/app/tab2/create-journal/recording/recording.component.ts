import { Component, OnInit } from '@angular/core';
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
import { fileURLToPath } from 'url';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { RecordingData, VoiceRecorder } from 'capacitor-voice-recorder';
import { RecordingService } from '../../recording.service';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.scss'],
})
export class RecordingComponent implements OnInit {
  public imgList = ['happy','soso','good','excite','great','uneasy','sad','not_good','lonely','depressed','surprise','upset','unpleasant'];
  public feelings: string[] = [];
  public numbers: number[] = [];
  public isRecording = false;
  public isPaused = false;
  public storedFileNames = [];
  public startTime = 0;
  public endTime = 0;
  public curTime = 0;
  public interval = null;
  constructor(private media: Media, public recordService: RecordingService) { }

  ngOnInit() {
    for (let i=0; i<3; i++) {
      let num = this.getRandomInt(this.imgList.length);
      while (this.numbers.includes(num)) {
        num = this.getRandomInt(this.imgList.length);
      }
      this.feelings.push(this.imgList[num]);
      this.numbers.push(num);
    }
    this.loadFiles();
    VoiceRecorder.requestAudioRecordingPermission(); // 거절하면 어떡할 지는 로직을 따로 짜야함
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  timeCalc(time = 0) {
    if (this.isRecording) {
      this.curTime = Math.ceil((performance.now() - this.startTime)/1000) / 10 + time;
    }
  }
  onPlayClicked() {
    if (this.isRecording) { return;}
    if (this.isPaused) {
      VoiceRecorder.resumeRecording();
      this.startTime = this.curTime ? this.curTime : performance.now();
      this.isRecording = true;
      this.interval = setInterval(() => {
        this.timeCalc(this.endTime);
      }, 100);
    }
    VoiceRecorder.startRecording();
    this.startTime = this.curTime ? this.curTime : performance.now();
    this.isRecording = true;
      this.interval = setInterval(() => {
        this.timeCalc();
      }, 100);
  }
  onPauseClicked() {
    if (this.isPaused) { return; }
    clearInterval(this.interval);
    this.isRecording = false;
    this.isPaused = true;
    VoiceRecorder.pauseRecording();
    this.endTime = this.curTime;
  }
  onStopClicked() {
    if (!this.isRecording) { return; }
    clearInterval(this.interval);
    this.isRecording = false;
    VoiceRecorder.stopRecording()
      .then(async (record: RecordingData) => {
        if (record.value && record.value.recordDataBase64) {
          const recordData = record.value.recordDataBase64;
          const fileName = new Date().getTime() + '.wav';
          await Filesystem.writeFile({
            path: fileName,
            directory: Directory.Data,
            data: recordData,
          });
          this.loadFiles();
        }
      });
  }
  async playFile(fileNames) {
    const audioFile = await Filesystem.readFile({
      path: fileNames.name,
      directory: Directory.Data
    });
    console.log(audioFile);
    const base64Sound = audioFile.data;
    const audioRef = new Audio(`data:audio/aac;base64, ${base64Sound}`);
    audioRef.oncanplaythrough = () => audioRef.play();
    audioRef.load();
  }
  async loadFiles() {
    Filesystem.readdir({
      path: '',
      directory: Directory.Data
    }).then(result => {
      console.log(result);
      this.storedFileNames = result.files;
    });
  }
  sendRecord() {
    this.recordService.addRecording(this.storedFileNames[0]);
  }
}