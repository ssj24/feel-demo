import { Component, OnInit } from '@angular/core';
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  record: MediaObject;
  video = document.querySelector('video');
  constraints = {
    audio: true,
    video: false
  };

  constructor(private media: Media) { }
  ngOnInit() {
    this.record = this.media.create('file.mp3');
    this.record.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes
    this.record.onSuccess.subscribe(() => console.log('Action is successful'));
    this.record.onError.subscribe(error => console.log('Error!', error));
  }
  onStartRecord() {

    // play the file
    // record.play();

    // pause the file
    // record.pause();

    // get current playback position
    // record.getCurrentPosition().then((position) => {
    //   console.log(position);
    // });

    // get file duration
    // const duration = record.getDuration();
    // console.log(duration);

    // skip to 10 seconds (expects int value in ms)
    // record.seekTo(10000);

    // stop playing the file
    // record.stop();

    // release the native audio resource
    // Platform Quirks:
    // iOS simply create a new instance and the old one will be overwritten
    // Android you must call release() to destroy instances of media when you are done
    // record.release();



    // Recording to a file

    // this.record.startRecord();

    // record.stopRecord();




    navigator.mediaDevices.getUserMedia(this.constraints)
    .then((stream) => {
      console.log('getusermedia', stream);
      const audioTracks = stream.getAudioTracks();
      console.log('Got stream with constraints:', this.constraints);
      console.log(audioTracks);
      stream.onremovetrack = () => {
        console.log('Stream ended');
        console.log(stream);
      };
      // video.srcObject = stream;
    })
    .catch((error) => {
      if (error.name === 'ConstraintNotSatisfiedError') {
        console.error(
          `The resolution is not supported by your device.`
        );
      } else if (error.name === 'PermissionDeniedError') {
        console.error(
          'Permissions have not been granted to use your camera and ' +
            'microphone, you need to allow the page access to your devices in ' +
            'order for the demo to work.'
        );
      } else {
        console.error(`getUserMedia error: ${error.name}`, error);
      }
    });
  }
  onStopRecord() {
    // this.record.stopRecord();
    // console.log(this.record);
  }
  onPlayRecord() {
    // this.record.play();
  }
}
