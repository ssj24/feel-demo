import { Component, OnInit } from '@angular/core';
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
import { fileURLToPath } from 'url';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { RecordingData, VoiceRecorder } from 'capacitor-voice-recorder';
import { RecordingService } from '../../../recording.service';
import { ModalController } from '@ionic/angular';

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
  public duration = 0;
  public durationDisplay = '0.00';
  public interval = null;
  public recordData = null;
  constructor(private media: Media,
              private modalCtrl: ModalController,
              public recordService: RecordingService) { }

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
  timeCalc() {
    if (this.isPaused) {
      return;
    } else if (!this.isRecording) {
      this.duration = 0;
      this.durationDisplay = '0.00';
      return;
    }
    this.duration += 1;
    const minutes = Math.floor(this.duration / 60);
    const seconds = (this.duration % 60).toString().padStart(2, '0');
    this.durationDisplay = minutes + ':' + seconds;
    setTimeout(() => {
      this.timeCalc();
    }, 1000);
  }
  onPlayClicked() {
    if (this.isRecording) { return;}
    if (!this.isRecording && this.isPaused){
      this.isRecording = true;
      this.isPaused = false;
      this.timeCalc();
      return VoiceRecorder.resumeRecording();
    }
    this.isRecording = true;
    VoiceRecorder.startRecording();
    this.timeCalc();
  }
  onPauseClicked() {
    if (this.isPaused) { return; }
    clearInterval(this.interval);
    this.isRecording = false;
    this.isPaused = true;
    VoiceRecorder.pauseRecording();
  }
  onStopClicked() {
    if (!this.isRecording) { return; }
    clearInterval(this.interval);
    this.isRecording = false;
    this.timeCalc();
    VoiceRecorder.stopRecording()
      .then(async (record: RecordingData) => {
        if (record.value && record.value.recordDataBase64) {
          const recordData = record.value.recordDataBase64;
          console.log(record.value.mimeType);
          this.recordData = recordData;
          const duration = record.value.msDuration;
          const fileName = new Date().getTime() + '.wav';
          await Filesystem.writeFile({
            path: fileName,
            directory: Directory.Data,
            data: recordData,
          });
          this.loadFiles();
          this.sendRecord();
        }
      });
  }

  async playFile(fileNames) {
    const audioFile = await Filesystem.readFile({
      path: fileNames.name,
      directory: Directory.Data
    });

    const base64Sound = audioFile.data;
    const audioRef = new Audio(`data:audio/webm;base64,${base64Sound}`);
    this.recordData = audioRef.src;
    console.log(this.recordData);
    audioRef.oncanplaythrough = () => audioRef.play();
    audioRef.load();
  }
  async loadFiles() {
    Filesystem.readdir({
      path: '',
      directory: Directory.Data
    }).then(result => {
      console.log('load', result.files[0]);
      this.storedFileNames = result.files;
    });
  }
  async sendRecord() {
    const data = await this.recordService.addRecording(this.recordData);
    await this.modalCtrl.dismiss(data, 'confirm');
  }
  onFileUpload(e: Event) {
    const element = e.currentTarget as HTMLInputElement;
    const fileList: FileList | null = element.files;
    console.log(fileList);
    if (fileList) {
      this.recordService.addRecording(fileList[0]);
    }
  }
}
