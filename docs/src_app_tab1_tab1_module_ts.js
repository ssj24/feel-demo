"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 8271:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1-routing.module */ 8271);







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);



/* eslint-disable max-len */


let Tab1Page = class Tab1Page {
    constructor(http) {
        this.http = http;
        this.constraints = { audio: true, video: false };
        this.chunks = [];
    }
    ngAfterViewInit() {
        this.startRecordButton = document.getElementById('startRecordButton');
        this.stopRecordButton = document.getElementById('stopRecordButton');
        this.soundClips = document.getElementById('soundClipContainer');
        this.startRecordButton.addEventListener('click', () => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (navigator.mediaDevices) {
                this.stream = yield navigator.mediaDevices.getUserMedia(this.constraints);
                const mediaOptions = {
                    mimeType: 'audio/mpeg'
                };
                this.mRec = new MediaRecorder(this.stream);
                // visualize(stream);
                this.onStartRecord();
            }
        }));
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
                const evtTgt = e.target;
                evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
            };
            this.mRec.ondataavailable = (e) => {
                this.chunks.push(e.data);
            };
            saveButton.addEventListener('click', () => this.onSave(this.blob));
        });
    }
    onStartRecord() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.mRec.start();
            console.log(this.mRec.state);
            console.log('recorder started');
            this.startRecordButton.setAttribute('disabled', '');
            this.stopRecordButton.removeAttribute('disabled');
        });
    }
    onTest() {
        const data = {
            data: 'none'
        };
        this.http.post(`https://192.168.31.35/SttAnalysis/`, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders()
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
    onSave(blob) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
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
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders()
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
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --ion-color-custom: #ffb800;\n  --ion-color-custom-rgb: 255,184,0;\n  --ion-color-custom-contrast: #000000;\n  --ion-color-custom-contrast-rgb: 0,0,0;\n  --ion-color-custom-shade: #e0a200;\n  --ion-color-custom-tint: #ffbf1a;\n}\n\n.ion-color-custom {\n  --ion-color-base: var(--ion-color-custom);\n  --ion-color-base-rgb: var(--ion-color-custom-rgb);\n  --ion-color-contrast: var(--ion-color-custom-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-custom-contrast-rgb);\n  --ion-color-shade: var(--ion-color-custom-shade);\n  --ion-color-tint: var(--ion-color-custom-tint);\n}\n\nion-datetime {\n  --ion-color-step-650: #ffb800;\n  --ion-color-step-500: #ffffff;\n}\n\n.tripleContainer {\n  background-position: center top, left bottom, right bottom !important;\n  background-repeat: no-repeat, no-repeat, no-repeat !important;\n  background-size: 55% 55%, 55% 55%, 55% 55% !important;\n  color: transparent;\n}\n\n.doubleContainer {\n  width: 200px;\n  height: 200px;\n  background-image: url(\"/assets/feeling/soso.svg\"), url(\"/assets/feeling/surprise.svg\");\n  background-position: left top, right bottom;\n  background-repeat: no-repeat, no-repeat;\n  background-size: 60% 60%, 60% 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0FBQ0Q7O0FBRUE7RUFDQyx5Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esc0RBQUE7RUFDQSw4REFBQTtFQUNBLGdEQUFBO0VBQ0EsOENBQUE7QUFDRDs7QUFFQTtFQUVFLDZCQUFBO0VBQ0EsNkJBQUE7QUFBRjs7QUFHQTtFQUNFLHFFQUFBO0VBQ0EsNkRBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNGQUFBO0VBQ0EsMkNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlDQUFBO0FBQ0YiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG5cdC0taW9uLWNvbG9yLWN1c3RvbTogI2ZmYjgwMDtcblx0LS1pb24tY29sb3ItY3VzdG9tLXJnYjogMjU1LDE4NCwwO1xuXHQtLWlvbi1jb2xvci1jdXN0b20tY29udHJhc3Q6ICMwMDAwMDA7XG5cdC0taW9uLWNvbG9yLWN1c3RvbS1jb250cmFzdC1yZ2I6IDAsMCwwO1xuXHQtLWlvbi1jb2xvci1jdXN0b20tc2hhZGU6ICNlMGEyMDA7XG5cdC0taW9uLWNvbG9yLWN1c3RvbS10aW50OiAjZmZiZjFhO1xufVxuXG4uaW9uLWNvbG9yLWN1c3RvbSB7XG5cdC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1jdXN0b20pO1xuXHQtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWN1c3RvbS1yZ2IpO1xuXHQtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWN1c3RvbS1jb250cmFzdCk7XG5cdC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWN1c3RvbS1jb250cmFzdC1yZ2IpO1xuXHQtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWN1c3RvbS1zaGFkZSk7XG5cdC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1jdXN0b20tdGludCk7XG59XG5cbmlvbi1kYXRldGltZSB7XG5cbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNmZmI4MDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjZmZmZmZmO1xufVxuXG4udHJpcGxlQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgdG9wLCBsZWZ0IGJvdHRvbSwgcmlnaHQgYm90dG9tICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdCwgbm8tcmVwZWF0LCBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiA1NSUgNTUlLCA1NSUgNTUlLCA1NSUgNTUlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5kb3VibGVDb250YWluZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9mZWVsaW5nL3Nvc28uc3ZnJyksIHVybCgnL2Fzc2V0cy9mZWVsaW5nL3N1cnByaXNlLnN2ZycpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQsIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA2MCUgNjAlLCA2MCUgNjAlO1xufVxuXG5cblxuIl19 */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"thisismine\">\n      감정일기\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n\n    <ion-toolbar>\n      <ion-title size=\"large\">감정일기</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-card>\n    <div>\n      <a href=\"https://web.dev/patterns/media/microphone-record/\">link</a>\n    </div>\n\n    <button id=\"startRecordButton\">Start recording</button>\n    <button id=\"stopRecordButton\" disabled>Stop recording</button>\n    <pre id=\"logs\"></pre>\n    <div id=\"soundClipContainer\"></div>\n    <button id=\"test\" (click)=\"onTest()\">test</button>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map