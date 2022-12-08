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

    // return console.log(blobUrl);
    const blobToFile = new File([recording], 'my-file.webm', { type: 'audio/webm' });
    // return console.log(blobToFile);
    const fileData = new DataTransfer();
    fileData.items.add(blobToFile);
    console.log(fileData.files[0]);
    // const data = {
    //   message: 'stt_analysis',
    //   client_id: 'client1@test.com',
    //   couns_id: '1234',
    //   file: fileData.files,
    // };

    const data = new FormData();
    data.append('message', 'stt_analysis');
    data.append('client_id', 'client1@test.com');
    data.append('couns_id', '1234');
    data.append('file', fileData.files[0]);
    // data.append('file', recording);
    console.log('click');

    const options  = {
      headers: new HttpHeaders({
        'MIME-Type': 'audio/webm'
      }),
    };

    this.http.post(`https://192.168.31.35/SttAnalysis/`, data)
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
