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
  addRecording(recording: any, today: string) {
    const blobToFile = new File([recording], 'my-file.wav', { type: 'audio/x-wav' });
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
    data.append('date', today);
    data.append('email', 'client1@test.com');
    data.append('file', fileData.files[0]);
    // data.append('file', recording);
    console.log('click', data.get('file'));

    const options  = {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'MIME-Type': 'audio/x-wav'
      }),
    };

    // const downloadUrl = window.URL.createObjectURL(fileData.files[0]); // 해당 file을 가리키는 url 생성

    // const anchorElement = document.createElement('a');
    // document.body.appendChild(anchorElement);
    // anchorElement.download = 'some file'; // a tag에 download 속성을 줘서 클릭할 때 다운로드가 일어날 수 있도록 하기
    // anchorElement.href = downloadUrl; // href에 url 달아주기

    // anchorElement.click(); // 코드 상으로 클릭을 해줘서 다운로드를 트리거

    // document.body.removeChild(anchorElement); // cleanup - 쓰임을 다한 a 태그 삭제
    // window.URL.revokeObjectURL(downloadUrl);

    return this.http.post(`/recording/DiaryStt/`, data, options);
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
