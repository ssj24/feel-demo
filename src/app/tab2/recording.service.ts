/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RecordingData } from 'capacitor-voice-recorder';
import * as AWS from '@aws-sdk/client-s3';

@Injectable({
  providedIn: 'root'
})
export class RecordingService {

  constructor(public http: HttpClient) { }

  async addRecording(recording: any) {
    // const region = 'kr-standard';
    // const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
    // const today = new Date();
    // const year = today.getFullYear();
    // const month = ('0' + (today.getMonth() + 1)).slice(-2);
    // const day = ('0' + today.getDate()).slice(-2);
    // const folderName = 'data/FeelDiary/files/'+ year + '/' + month + '/' + day + '/';
    // const objectName = folderName + recording.name;

    // const S3 = new AWS.S3({
    //   endpoint,
    //   region,
    //   credentials: {
    //       accessKeyId : 'bDh7dxf72aJw2F66ayAn',
    //       secretAccessKey: 'YpxdN9V1KRaX1xmkCNj5kBu277IVGf9jzJKgtY1b'
    //   }
    // });

    // const bucketName = 'fingerai-dev';

    // // create folder
    // await S3.putObject({
    //     Bucket: bucketName,
    //     Key: folderName
    // }).promise();

    // // upload file
    // await S3.putObject({
    //     Bucket: bucketName,
    //     Key: objectName,
    //     ACL: 'public-read',
    //     // ACL을 지우면 전체공개가 되지 않습니다.
    //     Body: recording
    // }).promise();

    // return true;

    console.log('click');
    return this.http.post('http://192.168.31.35:8000/test/', {recording}, {
      headers: new HttpHeaders()
        .set('Content-Type', 'multipart/form-data')
      , responseType: 'blob'})
      .toPromise()
      .then((res: any) => {

          console.log(res);
          const blob = new Blob([res], { type: 'application/pdf' });
          const fileURL = URL.createObjectURL(blob);
          window.open(fileURL, '_blank');
      })
      .catch(err => {
        console.log(err);
      });
  }
}
