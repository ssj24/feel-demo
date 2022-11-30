/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RecordingData } from 'capacitor-voice-recorder';
// import * as AWS from '@aws-sdk/client-s3';
// import * as AWS from 'aws-sdk/global';
// import * as S3 from 'aws-sdk/clients/s3';
// import { S3Client, AbortMultipartUploadCommand } from "@aws-sdk/client-s3";

@Injectable({
  providedIn: 'root'
})
export class RecordingService {
  constructor(public http: HttpClient) {
  }

  async addRecording(recording: any) {
    const blobToFile = new File([recording], 'my-file.webm', { type: 'audio/webm' });
    console.log(blobToFile);
    const fileData = new DataTransfer();
    fileData.items.add(blobToFile);
    console.log(fileData.files[0]);
    // const data = {
    //   message: 'stt_analysis',
    //   client_id: 'client1@test.com',
    //   couns_id: '1234',
    //   file: fileData.files,
    // };
    // const blob = new Blob(recording, { type: 'audio/ogg' });
    // const file = new File([blob], 'recording.ogg');

    // const data = {
    //   message: 'stt_analysis',
    //   client_id: 'client1@test.com',
    //   couns_id: '1234',
    // };

    // const formData = new FormData();
    // formData.append('files.file', file);
    // formData.append('data', JSON.stringify(data));
    const data = new FormData();
    data.append('message', 'stt_analysis');
    data.append('client_id', 'client1@test.com');
    data.append('couns_id', '1234');
    data.append('file', fileData.files[0]);
    console.log('click');

    const options  = {
      headers: new HttpHeaders({
        'MIME-Type': 'audio/webm'
      }),
    };
    this.http.post(`/recording/SttAnalysis/`, data, options)
    .toPromise()
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
    // this.http.get('assets/test.MP3', {responseType: 'blob'})
    // .subscribe(mp3 => {
    //   console.log(mp3);
    //   data.append('file', mp3);
    //   console.log(data);
    //   setTimeout(() => {
    //     this.http.post(`/recording/SttAnalysis/`, data, options)
    //     .toPromise()
    //     .then(res => {
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    //   }, 100);
    // });



  }
}
// console.log('click');
//     const options  = {
//       headers: new HttpHeaders({
//         'Accept': 'text/html, application/xhtml+xml, */*',
//         'Content-Type': 'text/plain; charset=utf-8'
// 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
//       }),
//       responseType: 'text' as 'text'
//     };
// return this.http.post(`/recording/StorageSend/`, data, {
    //   headers: new HttpHeaders()
    //     .set('Content-Type', 'application/json')
    //     // .set('X-CSRFToken', $cookies.get('app-Xsrf-Cookie')),
    //   responseType: 'text'
    //   })
    // return this.http.post(`/api/StorageSend/`, data, options)
    //   .toPromise()
    //   .then((res: any) => {

    //       console.log(res);
    //       this.script_gen(res);
    //       // const blob = new Blob([res], { type: 'application/pdf' });
    //       // const fileURL = URL.createObjectURL(blob);
    //       // window.open(fileURL, '_blank');
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });


    // console.log('Storage Send Start');
    // const region = 'kr-standard';
    // // const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
    // const today = new Date();
    // const year = today.getFullYear();
    // const month = ('0' + (today.getMonth() + 1)).slice(-2);
    // const day = ('0' + today.getDate()).slice(-2);
    // const folder_name = 'data/FeelDiary/files/';
    // const fid =  document.getElementById('id_file_upload');
    // const object_name = recording.name;

    // const client = new S3Client({
    //     endpoint: 'https://kr.object.ncloudstorage.com',
    //     region,
    //     credentials: {
    //         accessKeyId : 'bDh7dxf72aJw2F66ayAn',
    //         secretAccessKey: 'YpxdN9V1KRaX1xmkCNj5kBu277IVGf9jzJKgtY1b'
    //     }
    // });
    //   const contentType = recording.type;


//   /*bucket.upload(params).on('httpUploadProgress', function (evt) {
//             console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
//         }).send(function (err, data) {
//             if (err) {
//                 console.log('There was an error uploading your file: ', err);
//                 return false;
//             }
//             console.log('Successfully uploaded file.', data);
//             return true;
//         });*/
    // const bucket_name = 'fingerai-dev';
    // const params = {
    //     Bucket: bucket_name,
    //     Key: folder_name,
    //     UploadId: 'bDh7dxf72aJw2F66ayAn',
    //     Body: recording.name,
    //     ACL: 'public-read',
    //     ContentType: contentType
    // };
    //   const command = new AbortMultipartUploadCommand(params);
    //   client.send(command).then(
    //     (res) => {
    //       console.log(res);
    //       // process data.
    //     },
    //     (error) => {
    //       console.log(error);
    //       // error handling.
    //     }
    //   );
//   bucket.upload(params, (err, data) => {
//       if (err) {
//           console.log('There was an error uploading your file: ', err);
//           return false;
//       }
//       console.log('Successfully uploaded file.', data);
//       return true;
//   });
//     console.log('File Transfer Completed !!!');
