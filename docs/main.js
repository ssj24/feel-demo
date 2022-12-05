(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/media/ngx */ 1168);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _tab2_mine_create_journal_create_journal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2/mine/create-journal/create-journal.component */ 2493);
/* harmony import */ var _tab2_mine_create_journal_setFeeling_set_feeling_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab2/mine/create-journal/setFeeling/set-feeling.component */ 1975);
/* harmony import */ var _tab2_mine_create_journal_recording_recording_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2/mine/create-journal/recording/recording.component */ 2164);
/* harmony import */ var _tab2_mine_create_journal_add_keyword_add_keyword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2/mine/create-journal/add-keyword/add-keyword.component */ 4733);
/* harmony import */ var _tab2_mine_create_journal_journal_dismissed_journal_dismissed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2/mine/create-journal/journal-dismissed/journal-dismissed.component */ 8156);
/* harmony import */ var _tab2_mine_create_journal_writing_writing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab2/mine/create-journal/writing/writing.component */ 7705);

/* eslint-disable max-len */















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _tab2_mine_create_journal_create_journal_component__WEBPACK_IMPORTED_MODULE_3__.CreateJournalComponent, _tab2_mine_create_journal_setFeeling_set_feeling_component__WEBPACK_IMPORTED_MODULE_4__.SetFeelingComponent, _tab2_mine_create_journal_recording_recording_component__WEBPACK_IMPORTED_MODULE_5__.RecordingComponent, _tab2_mine_create_journal_add_keyword_add_keyword_component__WEBPACK_IMPORTED_MODULE_6__.AddKeywordComponent, _tab2_mine_create_journal_journal_dismissed_journal_dismissed_component__WEBPACK_IMPORTED_MODULE_7__.JournalDismissedComponent, _tab2_mine_create_journal_writing_writing_component__WEBPACK_IMPORTED_MODULE_8__.WritingComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientXsrfModule.withOptions({
                cookieName: 'feel-Xsrf-Cookie',
                headerName: 'feel-Xsrf-Header',
            }), _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicRouteStrategy }, _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_0__.Media],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        entryComponents: [_tab2_mine_create_journal_create_journal_component__WEBPACK_IMPORTED_MODULE_3__.CreateJournalComponent]
    })
], AppModule);



/***/ }),

/***/ 821:
/*!********************************************!*\
  !*** ./src/app/calendarCreator.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarCreatorService": () => (/* binding */ CalendarCreatorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _day_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day.model */ 9694);

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */



let CalendarCreatorService = class CalendarCreatorService {
    constructor(http) {
        this.http = http;
        const date = new Date();
        this.currentYear = date.getFullYear();
        this.currentMonthIndex = date.getMonth(); // January == 0
    }
    getHttpData(month, year) {
        console.log('calSvc-gethttpdata entered');
        const nextYear = month === 11 ? year + 1 : year;
        const nextMonth = month === 11 ? 0 : month + 1;
        const data = {
            message: 'MonthDiary',
            id_mail: 'test@test.com',
            // StartDate: new Date(year, month, 1).toLocaleDateString(),
            // EndDate: new Date(nextYear, nextMonth, 0).toLocaleDateString(),
            // StartDate: '2022-10-01',
            // EndDate: '2022-10-31',
            StartDate: this.getDateFormatted(new Date(year, month, 1)),
            EndDate: this.getDateFormatted(new Date(nextYear, nextMonth, 0))
        };
        return this.http.post(`http://118.67.132.111:8000/MonthDiary/`, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
                .set('Content-Type', 'application/json')
        });
        // .pipe(
        //   map(res => {
        //     console.log(res);
        //     return res;
        //   }),
        //   tap(res => {
        //     // this.recipeService.setRecipes(res);
        //   })
        // );
        // .toPromise();
        // .then((res) => {
        //   console.log(res);
        //   for (const i of res) {
        //     const newDate = new Date(i.date);
        //     const newDay = {
        //       date: newDate,
        //       year: newDate.getFullYear(),
        //       monthIndex: newDate.getMonth(),
        //       weekDayNumber: newDate.getDay(),
        //       dayNumber: newDate.getDate(),
        //       feelings: i.feelings,
        //     };
        //     days.push(newDay);
        //   }
        //   return days;
        // })
        // .catch(err => {
        //   console.log(err);
        // });
    }
    getData(month = this.currentMonthIndex, year = this.currentYear) {
        console.log('getdata entered');
        const monthData = [];
        this.getHttpData(month, year).subscribe(res => {
            console.log('getdata', month, year, res);
            for (const i of res) {
                const newDate = new Date(i.date);
                const newDay = {
                    date: newDate,
                    year: newDate.getFullYear(),
                    monthIndex: newDate.getMonth(),
                    weekDayNumber: newDate.getDay(),
                    dayNumber: newDate.getDate(),
                    feelings: JSON.parse(i.feelings.replace(/'/g, '"')),
                };
                monthData.push(newDay);
            }
            console.log('getDatabottom', monthData);
        });
        return monthData;
    }
    getCurrentMonth(month = this.currentMonthIndex, year = this.currentYear) {
        const data = this.getMonth(month, year);
        const sampleRes = [
            {
                id_mail: 'test@test.com',
                date: '2022-10-31T07:06:13.029000Z',
                feelings: ['happy', 'soso', 'good']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-01T07:06:13.029000Z',
                feelings: ['happy', 'soso', 'good']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-02T07:06:13.029000Z',
                feelings: ['happy', 'soso', 'good']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-03T07:06:13.029000Z',
                feelings: ['happy', 'soso', 'good']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-04T07:06:13.029000Z',
                feelings: ['happy', 'soso', 'good']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-05T07:06:13.029000Z',
                feelings: ['happy', 'soso', 'good']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-06T07:06:13.029000Z',
                feelings: ['happy', 'soso', 'good']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-07T07:06:13.029000Z',
                feelings: ['happy', 'soso', 'good']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-08T07:06:13.029000Z',
                feelings: ['happy', 'soso', 'good']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-09T07:06:13.029000Z',
                feelings: ['happy', 'soso', 'good']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-10T07:06:13.029000Z',
                feelings: ['happy', 'soso', 'good']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-11T07:06:13.029000Z',
                feelings: ['happy', 'soso', 'good']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-12T07:06:13.029000Z',
                feelings: ['happy', 'soso', 'good']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-13T07:06:13.029000Z',
                feelings: ['happy', 'soso', 'good']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-14T07:06:13.029000Z',
                feelings: ['none', 'none', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-15T07:06:13.029000Z',
                feelings: ['not_good', 'none', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-16T07:06:13.029000Z',
                feelings: ['none', 'surprise', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-17T07:06:13.029000Z',
                feelings: ['none', 'none', 'upset']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-18T07:06:13.029000Z',
                feelings: ['none', 'none', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-19T07:06:13.029000Z',
                feelings: ['none', 'soso', 'uneasy']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-20T07:06:13.029000Z',
                feelings: ['none', 'none', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-21T07:06:13.029000Z',
                feelings: ['none', 'none', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-22T07:06:13.029000Z',
                feelings: ['none', 'none', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-23T07:06:13.029000Z',
                feelings: ['none', 'none', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-24T07:06:13.029000Z',
                feelings: ['none', 'none', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-25T07:06:13.029000Z',
                feelings: ['none', 'none', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-26T07:06:13.029000Z',
                feelings: ['none', 'none', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-27T07:06:13.029000Z',
                feelings: ['none', 'none', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-28T07:06:13.029000Z',
                feelings: ['none', 'none', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-29T07:06:13.029000Z',
                feelings: ['none', 'none', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-11-30T07:06:13.029000Z',
                feelings: ['none', 'none', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-12-01T07:06:13.029000Z',
                feelings: ['none', 'none', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-12-02T07:06:13.029000Z',
                feelings: ['none', 'none', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-12-03T07:06:13.029000Z',
                feelings: ['none', 'none', 'none']
            },
            {
                id_mail: 'test@test.com',
                date: '2022-12-04T07:06:13.029000Z',
                feelings: ['none', 'none', 'none']
            }
        ];
        // console.log(days);
        return data;
    }
    getMonth(monthIndex, year) {
        const days = [];
        const firstday = this.createDay(year, monthIndex, 1);
        const prevYear = monthIndex === 0 ? year - 1 : year;
        const prevMonth = monthIndex === 0 ? 11 : monthIndex - 1;
        const nextYear = monthIndex === 11 ? year + 1 : year;
        const nextMonth = monthIndex === 11 ? 0 : monthIndex + 1;
        let prevLastday = new Date(year, monthIndex, 0).getDate();
        const countDaysInMonth = new Date(year, monthIndex + 1, 0).getDate(); // if it's monthIndex, we can get days of prvious month
        for (let i = 1; i < firstday.weekDayNumber; i++) { // i start from 1 because week's first day is monday(0 => start from sunday)
            const newDay = new _day_model__WEBPACK_IMPORTED_MODULE_0__.Day();
            newDay.date = new Date(prevYear, prevMonth, prevLastday);
            newDay.year = prevYear;
            newDay.monthIndex = prevMonth;
            newDay.weekDayNumber = i;
            newDay.dayNumber = prevLastday;
            newDay.feelings = ['none', 'none', 'none'];
            days.unshift(newDay);
            prevLastday--;
        }
        days.push(firstday);
        for (let i = 2; i <= countDaysInMonth; i++) { // since firstday is occupied, it starts from 2
            days.push(this.createDay(year, monthIndex, i));
        }
        let curDay = 1;
        for (let i = days[days.length - 1].weekDayNumber + 1; i <= 7; i++) {
            const newDay = new _day_model__WEBPACK_IMPORTED_MODULE_0__.Day();
            if (i === 7) {
                newDay.date = new Date(nextYear, nextMonth, days[days.length - 1].dayNumber + 1);
                newDay.year = nextYear;
                newDay.monthIndex = nextMonth;
                newDay.weekDayNumber = 0;
                newDay.dayNumber = curDay;
                newDay.feelings = ['none', 'none', 'none'];
            }
            else {
                newDay.date = new Date(nextYear, nextMonth, curDay);
                newDay.year = nextYear;
                newDay.monthIndex = nextMonth;
                newDay.weekDayNumber = i;
                newDay.dayNumber = curDay;
                newDay.feelings = ['none', 'none', 'none'];
                curDay++;
            }
            days.push(newDay);
        }
        console.log('getmonth', days);
        return days;
    }
    getMonthName(monthIndex) {
        switch (monthIndex + 1) {
            case 1:
                return '1';
            case 2:
                return '2';
            case 3:
                return '3';
            case 4:
                return '4';
            case 5:
                return '5';
            case 6:
                return '6';
            case 7:
                return '7';
            case 8:
                return '8';
            case 9:
                return '9';
            case 10:
                return '10';
            case 11:
                return '11';
            case 12:
                return '12';
            default:
                return '|' + monthIndex;
        }
    }
    getWeekDayName(weekDay) {
        switch (weekDay) {
            case 0:
                return 'Sun'; // Sunday
            case 1:
                return 'Mon'; // Monday
            case 2:
                return 'Tue'; // Tuesday
            case 3:
                return 'Wed'; // Wednesday
            case 4:
                return 'Thu'; // Thursday
            case 5:
                return 'Fri'; // Friday
            case 6:
                return 'Sat'; // Saturday
            default:
                return '';
        }
    }
    setData(target, data) {
        if (target) { // target이랑 data랑 맞는지 검증
            target.feelings = data;
        }
    }
    getDateFormatted(date) {
        const year = date.getFullYear();
        const month = ('0' + (1 + date.getMonth())).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
    }
    createDay(year, monthIndex, dayNumber) {
        const day = new _day_model__WEBPACK_IMPORTED_MODULE_0__.Day();
        day.date = new Date(year, monthIndex, dayNumber);
        day.year = year;
        day.monthIndex = monthIndex;
        day.weekDayNumber = (day.date.getDay() === 0 ? 7 : day.date.getDay());
        day.dayNumber = dayNumber;
        day.feelings = ['none', 'none', 'none'];
        day.summary = '';
        day.diary = [];
        day.keywords = [];
        day.recording = {};
        return day;
    }
};
CalendarCreatorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
CalendarCreatorService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CalendarCreatorService);



/***/ }),

/***/ 9694:
/*!******************************!*\
  !*** ./src/app/day.model.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Day": () => (/* binding */ Day)
/* harmony export */ });
class Day {
}


/***/ }),

/***/ 1697:
/*!********************************************!*\
  !*** ./src/app/journal-creator.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JournalCreatorService": () => (/* binding */ JournalCreatorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _calendarCreator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendarCreator.service */ 821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab2_mine_create_journal_create_journal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2/mine/create-journal/create-journal.component */ 2493);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);


/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */





let JournalCreatorService = class JournalCreatorService {
    constructor(modalCtrl, toastCtrl, calService, http) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.calService = calService;
        this.http = http;
        this._imgList = ['happy', 'soso', 'good', 'excite', 'great', 'uneasy', 'sad', 'not_good', 'lonely', 'depressed', 'surprise', 'upset', 'unpleasant', 'idk', 'empty'];
        this._feelings = ['즐거워', '그냥 그래', '좋아!', '설레', '행복해', '불안해', '슬퍼', '별로야', '외로워', '우울해', '놀랐어', '화났어', '불쾌해', '모르겠어', '비워둘래'];
        this._today = new Date();
        this.journalData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.getJournalData$ = this.journalData.asObservable();
    }
    get getImgList() {
        return this._imgList;
    }
    get getFeelings() {
        return this._feelings;
    }
    get getToday() {
        return {
            date: this._today,
            year: this._today.getFullYear(),
            monthIndex: this._today.getMonth(),
            weekDayNumber: 0,
            dayNumber: this._today.getDate(),
            // 이미 오늘 일기가 있으면 그걸 가져와야 되지 않을까?
            feelings: ['none', 'none', 'none'],
            summary: '',
            diary: [
                {
                    time: 0,
                    sentence: 'aaa'
                }
            ],
            keywords: [],
            recording: {},
        };
    }
    // public createJournal(day: Day = this.getToday) {
    //   this.modalCtrl.create({
    //               component: CreateJournalComponent,
    //               componentProps: {day},
    //               cssClass: 'diaryModal',
    //             }).then (modalEl => {
    //               modalEl.present();
    //               return modalEl.onDidDismiss();
    //             }).then(result => {
    //               if (result.role === 'confirm') {
    //                 this.journalData.next(result.data);
    //                 const finalData = {
    //                   message: 'DiarySave',
    //                   id_mail: 'test@test.com',
    //                   feelings: result.data.feelings,
    //                   summary: result.data.summary,
    //                   diary: result.data.diary,
    //                   keywords: result.data.keywords
    //                 };
    //                 console.log('finalData feelings', finalData.feelings);
    // }});
    // }
    getFeelingName(img) {
        if (img === 'none') {
            return '비워둘래';
        }
        for (let i = 0; i < this._imgList.length; i++) {
            if (this._imgList[i] === img) {
                return this._feelings[i];
            }
        }
    }
    createJournal(day = this.getToday) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const data = {
                message: 'DayDiary',
                id_mail: 'test@test.com',
                date: this.calService.getDateFormatted(day.date),
                // date: `${day.year}-${day.monthIndex < 9 ? '0'+String(day.monthIndex+1) : day.monthIndex+1}-${day.dayNumber < 10 ? '0'+String(day.dayNumber) : day.dayNumber}`
            };
            yield this.http.post(`http://118.67.132.111:8000/DayDiary/`, data, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders()
                    .set('Content-Type', 'application/json')
            })
                .toPromise()
                .then((res) => {
                console.log('createJournal-1', res);
                if (res !== 'DataNotExist') {
                    day.feelings = JSON.parse(res.feelings.replace(/'/g, '"'));
                    day.summary = res.summary;
                    day.diary = JSON.parse(res.diary.replace(/'/g, '"'));
                    day.keywords = JSON.parse(res.keywords.replace(/'/g, '"'));
                }
                else {
                    day.summary = '';
                    day.diary = [];
                    day.keywords = [];
                }
                this.modalCtrl.create({
                    component: _tab2_mine_create_journal_create_journal_component__WEBPACK_IMPORTED_MODULE_1__.CreateJournalComponent,
                    componentProps: { day },
                    cssClass: 'diaryModal',
                }).then(modalEl => {
                    modalEl.present();
                    return modalEl.onDidDismiss();
                }).then(result => {
                    if (result.role === 'confirm') {
                        this.journalData.next(result.data);
                        const finalData = {
                            message: 'DiarySave',
                            id_mail: 'test@test.com',
                            date: this.calService.getDateFormatted(result.data.date),
                            feelings: result.data.feelings,
                            summary: result.data.summary,
                            diary: result.data.diary,
                            keywords: result.data.keywords
                        };
                        console.log(finalData);
                        console.log('finalData feelings', finalData.feelings);
                        this.http.post(`http://118.67.132.111:8000/DiarySave/`, finalData, {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders()
                                .set('Content-Type', 'application/json')
                        })
                            .toPromise()
                            .then((response) => {
                            console.log('createJournal-2', response);
                            this.presentToast('감정 적립', day);
                        })
                            .catch(err => {
                            this.presentToast('감정 적립 실패');
                            console.log(err);
                        });
                    }
                    else {
                        console.log(result);
                    }
                });
            })
                .catch(err => {
                console.log(err);
                this.modalCtrl.create({
                    component: _tab2_mine_create_journal_create_journal_component__WEBPACK_IMPORTED_MODULE_1__.CreateJournalComponent,
                    componentProps: { day },
                    cssClass: 'diaryModal',
                }).then(modalEl => {
                    modalEl.present();
                    return modalEl.onDidDismiss();
                }).then(result => {
                    console.log(result);
                });
            });
        });
    }
    presentToast(msg, day) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const dayStr = day ? `${day.year}년 ${day.monthIndex + 1}월 ${day.dayNumber}일의` : '';
            const toast = yield this.toastCtrl.create({
                message: `
      <p class="ion-text-center">
      ${dayStr}
      ${msg}
      </p>
      `,
                duration: 2000,
                cssClass: 'journalToast'
            });
            yield toast.present();
            const { role } = yield toast.onDidDismiss();
            // this.roleMessage = `Dismissed with role: ${role}`;
        });
    }
};
JournalCreatorService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _calendarCreator_service__WEBPACK_IMPORTED_MODULE_0__.CalendarCreatorService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
JournalCreatorService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], JournalCreatorService);



/***/ }),

/***/ 4733:
/*!*******************************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/add-keyword/add-keyword.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddKeywordComponent": () => (/* binding */ AddKeywordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_keyword_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-keyword.component.html?ngResource */ 3129);
/* harmony import */ var _add_keyword_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-keyword.component.scss?ngResource */ 4110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let AddKeywordComponent = class AddKeywordComponent {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.show = false;
        this.keywordVal = '';
    }
    ngOnInit() {
        console.log(document.activeElement);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.inputEl.setFocus();
        }, 100);
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
    onKeyPress(e) {
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
            this.popoverCtrl.dismiss(this.keywordVal, 'confirm');
        }
    }
};
AddKeywordComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController }
];
AddKeywordComponent.propDecorators = {
    inputEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['inputEl',] }],
    keywords: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
AddKeywordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-add-keyword',
        template: _add_keyword_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_keyword_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddKeywordComponent);



/***/ }),

/***/ 2493:
/*!**********************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/create-journal.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateJournalComponent": () => (/* binding */ CreateJournalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _create_journal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-journal.component.html?ngResource */ 6005);
/* harmony import */ var _create_journal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-journal.component.scss?ngResource */ 1496);
/* harmony import */ var _journal_creator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../journal-creator.service */ 1697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _calendarCreator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calendarCreator.service */ 821);
/* harmony import */ var _setFeeling_set_feeling_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setFeeling/set-feeling.component */ 1975);
/* harmony import */ var _recording_recording_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recording/recording.component */ 2164);
/* harmony import */ var _add_keyword_add_keyword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-keyword/add-keyword.component */ 4733);
/* harmony import */ var _writing_writing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./writing/writing.component */ 7705);




/* eslint-disable @typescript-eslint/naming-convention */







let CreateJournalComponent = class CreateJournalComponent {
    constructor(journalCreator, modalCtrl, calendarService, popoverCtrl, actionSheetCtrl) {
        this.journalCreator = journalCreator;
        this.modalCtrl = modalCtrl;
        this.calendarService = calendarService;
        this.popoverCtrl = popoverCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.year = 0;
        this.month = '';
        this.dayNumber = 1;
        this.feelings = ['none', 'none', 'none'];
        this.feelNames = ['선택해주세요', '선택해주세요', '선택해주세요'];
        this.summary = '';
        this.diary = [];
        this.keywords = [];
        this.isShare = false;
        this.feelingList = this.journalCreator.getFeelings;
    }
    ngOnInit() {
        this.feelings = this.day.feelings.slice(); // copy not reference
        for (let i = 0; i < this.feelings.length; i++) {
            this.feelNames[i] = this.journalCreator.getFeelingName(this.feelings[i]);
        }
        this.month = this.calendarService.getMonthName(this.day.monthIndex);
        this.summary = this.day.summary || '';
        this.diary = this.day.diary || null;
        this.keywords = this.day.keywords || [];
    }
    ngAfterViewInit() {
    }
    onCancel() {
        this.modalCtrl.dismiss(null, 'cancel');
    }
    onJournalConfirm() {
        this.modalCtrl.dismiss({
            date: this.day.date,
            dayNumber: this.day.dayNumber,
            year: this.day.year,
            monthIndex: this.day.monthIndex,
            weekDayNumber: this.day.weekDayNumber,
            feelings: this.feelings,
            summary: this.summary,
            diary: this.diary,
            keywords: this.keywords,
            recording: this.day.recording
        }, 'confirm');
    }
    onRecording() {
        this.modalCtrl.create({
            component: _recording_recording_component__WEBPACK_IMPORTED_MODULE_5__.RecordingComponent,
            cssClass: 'recordingModal dFlex',
            breakpoints: [0, 0.5, 0.7],
            initialBreakpoint: 0.5,
        }).then(modalEl => {
            modalEl.present();
            return modalEl.onDidDismiss();
        }).then(result => {
            console.log(result);
            const res = result.data;
            for (const i of res.sentence) {
                this.diary.push({ time: i.start, sentence: i.sentence });
            }
            ;
            this.keywords.push(res.sentimental[0].senti);
            this.keywords = [...new Set(this.keywords)];
            if (this.keywords.length > 10) {
                this.journalCreator.presentToast('키워드는 최대 10개까지 설정할 수 있습니다.');
                this.keywords = [...this.keywords].slice(0, 10);
                console.log(this.keywords);
            }
        });
    }
    onSentDelete(sent) {
        this.diary = this.diary.filter(x => x !== sent);
    }
    writeDiary() {
        this.modalCtrl.create({
            component: _writing_writing_component__WEBPACK_IMPORTED_MODULE_7__.WritingComponent,
            componentProps: { diary: this.diary },
            cssClass: 'writingModal dFlex',
            breakpoints: [0, 0.5, 0.9],
            initialBreakpoint: 0.5,
        }).then(modalEl => {
            modalEl.present();
            return modalEl.onDidDismiss();
        }).then(result => {
            if (result.role === 'confirm') {
                this.diary.push({
                    time: 0,
                    sentence: result.data
                });
            }
        });
    }
    onSummaryFocus(e) {
        //   (e.target as HTMLElement).style.border='#E2DEFF';
        //   (e.target as HTMLElement).style.borderRadius='10px';
    }
    onSetFeeling(e, i) {
        let realTarget = e.target;
        if (!e.target.classList.contains('timeCard')) {
            realTarget = e.target.closest('.timeCard');
        }
        ;
        this.popoverCtrl.create({
            component: _setFeeling_set_feeling_component__WEBPACK_IMPORTED_MODULE_4__.SetFeelingComponent,
            componentProps: { time: i },
            cssClass: 'set-feeling-popover',
            event: e,
            translucent: true,
            trigger: `timeCard${i}`,
            reference: 'trigger',
            alignment: 'center',
            mode: 'md',
        }).then(popoverEl => {
            popoverEl.present();
            return popoverEl.onDidDismiss();
        }).then(result => {
            if (result.role === 'confirm') {
                this.feelings[result.data.time] = result.data.feeling;
                this.feelNames[result.data.time] = result.data.name;
            }
            else {
                // 이모지가 아닌 바깥 쪽 클릭으로 닫으면 이모지 사라짐
                // this.feelings[i] = 'none';
            }
        });
        // const { role } = await popover.onDidDismiss();
        // console.log('onDidDismiss resolved with role', role);
    }
    onKeywordCreate(e) {
        this.popoverCtrl.create({
            component: _add_keyword_add_keyword_component__WEBPACK_IMPORTED_MODULE_6__.AddKeywordComponent,
            componentProps: { keywords: this.keywords },
            cssClass: 'add-keyword-popover',
            event: e,
            translucent: true,
            mode: 'md',
        }).then(popoverEl => {
            popoverEl.present();
            return popoverEl.onDidDismiss();
        }).then(result => {
            if (result.role === 'confirm') {
                console.log(this.keywords);
                this.keywords.push(result.data);
                console.log(this.keywords);
            }
            console.log(result);
        });
    }
    onBadgeClicked(keyword) {
        this.keywords = this.keywords.filter(x => x !== keyword);
    }
    onShare(e) {
        this.isShare = !this.isShare;
        this.journalCreator.presentToast('오늘의 일기는 공유되지 않습니다');
    }
    presentActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: `${this.day.year}/${this.month}/${this.day.dayNumber}의 일기를 삭제하시겠습니까?`,
                // subHeader: 'Example subheader',
                buttons: [
                    {
                        text: 'Delete',
                        role: 'destructive',
                        data: {
                            action: 'delete',
                        },
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        data: {
                            action: 'cancel',
                        },
                    },
                ],
                mode: 'ios'
            });
            yield actionSheet.present();
            const result = yield actionSheet.onDidDismiss();
            if (result.role === 'destructive') {
                this.deleteDiary();
            }
        });
    }
    deleteDiary() {
        this.feelings = ['none', 'none', 'none'];
        this.diary = [];
        this.keywords = [];
        this.summary = '';
        this.day.feelings = ['none', 'none', 'none'];
        this.day.summary = '';
        this.day.diary = [];
        this.day.keywords = [];
        this.day.recording = {};
        this.onJournalConfirm();
    }
};
CreateJournalComponent.ctorParameters = () => [
    { type: _journal_creator_service__WEBPACK_IMPORTED_MODULE_2__.JournalCreatorService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _calendarCreator_service__WEBPACK_IMPORTED_MODULE_3__.CalendarCreatorService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController }
];
CreateJournalComponent.propDecorators = {
    day: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
CreateJournalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-create-journal',
        template: _create_journal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_journal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateJournalComponent);



/***/ }),

/***/ 8156:
/*!*******************************************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/journal-dismissed/journal-dismissed.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JournalDismissedComponent": () => (/* binding */ JournalDismissedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _journal_dismissed_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./journal-dismissed.component.html?ngResource */ 7066);
/* harmony import */ var _journal_dismissed_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./journal-dismissed.component.scss?ngResource */ 8206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let JournalDismissedComponent = class JournalDismissedComponent {
    constructor() { }
    ngOnInit() { }
};
JournalDismissedComponent.ctorParameters = () => [];
JournalDismissedComponent.propDecorators = {
    day: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    response: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
JournalDismissedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-journal-dismissed',
        template: _journal_dismissed_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_journal_dismissed_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], JournalDismissedComponent);



/***/ }),

/***/ 2164:
/*!***************************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/recording/recording.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordingComponent": () => (/* binding */ RecordingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _recording_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recording.component.html?ngResource */ 9215);
/* harmony import */ var _recording_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recording.component.scss?ngResource */ 9449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/filesystem */ 1662);
/* harmony import */ var capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! capacitor-voice-recorder */ 8782);
/* harmony import */ var _recording_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../recording.service */ 9182);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);








let RecordingComponent = class RecordingComponent {
    constructor(modalCtrl, recordService) {
        this.modalCtrl = modalCtrl;
        this.recordService = recordService;
        this.imgList = ['happy', 'soso', 'good', 'excite', 'great', 'uneasy', 'sad', 'not_good', 'lonely', 'depressed', 'surprise', 'upset', 'unpleasant'];
        this.feelings = [];
        this.numbers = [];
        this.isRecording = false;
        this.isPaused = false;
        this.storedFileNames = [];
        this.duration = 0;
        this.durationDisplay = '0.00';
        this.interval = null;
        this.recordData = null;
    }
    ngOnInit() {
        for (let i = 0; i < 3; i++) {
            let num = this.getRandomInt(this.imgList.length);
            while (this.numbers.includes(num)) {
                num = this.getRandomInt(this.imgList.length);
            }
            this.feelings.push(this.imgList[num]);
            this.numbers.push(num);
        }
        this.loadFiles();
        capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_3__.VoiceRecorder.requestAudioRecordingPermission(); // 거절하면 어떡할 지는 로직을 따로 짜야함
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    timeCalc() {
        if (this.isPaused) {
            return;
        }
        else if (!this.isRecording) {
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
        if (this.isRecording) {
            return;
        }
        if (!this.isRecording && this.isPaused) {
            this.isRecording = true;
            this.isPaused = false;
            this.timeCalc();
            return capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_3__.VoiceRecorder.resumeRecording();
        }
        this.isRecording = true;
        capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_3__.VoiceRecorder.startRecording();
        this.timeCalc();
    }
    onPauseClicked() {
        if (this.isPaused) {
            return;
        }
        clearInterval(this.interval);
        this.isRecording = false;
        this.isPaused = true;
        capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_3__.VoiceRecorder.pauseRecording();
    }
    onStopClicked() {
        if (!this.isRecording) {
            return;
        }
        clearInterval(this.interval);
        this.isRecording = false;
        this.timeCalc();
        capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_3__.VoiceRecorder.stopRecording()
            .then((record) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (record.value && record.value.recordDataBase64) {
                const recordData = record.value.recordDataBase64;
                console.log(record.value.mimeType);
                this.recordData = recordData;
                const duration = record.value.msDuration;
                const fileName = new Date().getTime() + '.wav';
                yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.writeFile({
                    path: fileName,
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data,
                    data: recordData,
                });
                this.loadFiles();
                this.sendRecord();
            }
        }));
    }
    playFile(fileNames) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const audioFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                path: fileNames.name,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data
            });
            const base64Sound = audioFile.data;
            const audioRef = new Audio(`data:audio/webm;base64,${base64Sound}`);
            this.recordData = audioRef.src;
            console.log(this.recordData);
            audioRef.oncanplaythrough = () => audioRef.play();
            audioRef.load();
        });
    }
    loadFiles() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readdir({
                path: '',
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data
            }).then(result => {
                console.log('load', result.files[0]);
                this.storedFileNames = result.files;
            });
        });
    }
    sendRecord() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield this.recordService.addRecording(this.recordData);
            yield this.modalCtrl.dismiss(data, 'confirm');
        });
    }
    onFileUpload(e) {
        const element = e.currentTarget;
        const fileList = element.files;
        console.log(fileList);
        if (fileList) {
            this.recordService.addRecording(fileList[0]);
        }
    }
};
RecordingComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _recording_service__WEBPACK_IMPORTED_MODULE_4__.RecordingService }
];
RecordingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-recording',
        template: _recording_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_recording_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecordingComponent);



/***/ }),

/***/ 1975:
/*!******************************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/setFeeling/set-feeling.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetFeelingComponent": () => (/* binding */ SetFeelingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _set_feeling_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-feeling.component.html?ngResource */ 4624);
/* harmony import */ var _set_feeling_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-feeling.component.scss?ngResource */ 9983);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _journal_creator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../journal-creator.service */ 1697);



/* eslint-disable max-len */



let SetFeelingComponent = class SetFeelingComponent {
    constructor(popoverCtrl, journalCreator) {
        this.popoverCtrl = popoverCtrl;
        this.journalCreator = journalCreator;
        this.imgList = this.journalCreator.getImgList;
        this.feelings = this.journalCreator.getFeelings;
    }
    ngOnInit() {
        if (this.time === 0) {
            this.timeStr = '아침';
        }
        else if (this.time === 1) {
            this.timeStr = '점심';
        }
        else if (this.time === 2) {
            this.timeStr = '저녁';
        }
    }
    deleteFeeling() {
        this.popoverCtrl.dismiss({ feeling: 'none', time: this.time }, 'confirm');
    }
    selectFeeling(e) {
        const target = e.target;
        if (target.closest('div')) {
            const targetImg = target.closest('div').children[0];
            const targetFeeling = targetImg.src.slice(16, -4);
            const name = this.journalCreator.getFeelingName(targetFeeling);
            this.popoverCtrl.dismiss({ feeling: targetFeeling, time: this.time, name }, 'confirm');
        }
    }
};
SetFeelingComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController },
    { type: _journal_creator_service__WEBPACK_IMPORTED_MODULE_2__.JournalCreatorService }
];
SetFeelingComponent.propDecorators = {
    time: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
SetFeelingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-set-feeling',
        template: _set_feeling_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_set_feeling_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SetFeelingComponent);



/***/ }),

/***/ 7705:
/*!***********************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/writing/writing.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WritingComponent": () => (/* binding */ WritingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _writing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./writing.component.html?ngResource */ 7551);
/* harmony import */ var _writing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./writing.component.scss?ngResource */ 8456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let WritingComponent = class WritingComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.val = '';
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.inputEl.setFocus();
            for (const i of this.diary) {
                this.val += i.sentence + ' ';
            }
        }, 100);
    }
    onCancel() {
        this.modalCtrl.dismiss(null, 'cancel');
    }
    onSave() {
        this.modalCtrl.dismiss(this.val, 'confirm');
    }
};
WritingComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
WritingComponent.propDecorators = {
    inputEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['inputEl',] }],
    diary: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
WritingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-writing',
        template: _writing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_writing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WritingComponent);



/***/ }),

/***/ 9182:
/*!*******************************************!*\
  !*** ./src/app/tab2/recording.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordingService": () => (/* binding */ RecordingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);

/* eslint-disable @typescript-eslint/naming-convention */


let RecordingService = class RecordingService {
    constructor(http) {
        this.http = http;
    }
    addRecording(recording) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
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
            const options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
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
        });
    }
};
RecordingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
RecordingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], RecordingService);

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


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_data-64bc531e_js-node_modules_ionic_core_dist_esm_th-f0213e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_data-64bc531e_js-node_modules_ionic_core_dist_esm_th-f0213e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 4110:
/*!********************************************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/add-keyword/add-keyword.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\ndiv .customBtn:nth-child(1):hover {\n  color: var(--red-color);\n}\ndiv .customBtn:nth-child(2):hover {\n  color: var(--active-color);\n}\nion-input {\n  border: 1px solid transparent;\n  border-radius: 15px;\n}\nion-input:focus-within {\n  border-color: var(--middle-purple-color);\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1rZXl3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsdUJBQUE7QUFFSjtBQUFFO0VBQ0UsMEJBQUE7QUFFSjtBQUNBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQUE7RUFDRSx3Q0FBQTtFQUNBLFlBQUE7QUFHRiIsImZpbGUiOiJhZGQta2V5d29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmN1c3RvbUJ0bjpudGgtY2hpbGQoMSk6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xuICB9XG4gIC5jdXN0b21CdG46bnRoLWNoaWxkKDIpOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgfVxufVxuaW9uLWlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5pb24taW5wdXQ6Zm9jdXMtd2l0aGluIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1taWRkbGUtcHVycGxlLWNvbG9yKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuIl19 */";

/***/ }),

/***/ 1496:
/*!***********************************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/create-journal.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.container ion-button {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n.container ion-button:hover {\n  color: var(--active-color);\n}\n.container ion-button.activateBtn {\n  background-color: var(--middle-purple-color);\n  color: var(--active-color);\n}\n.container ion-button.trashBtn:hover {\n  color: var(--red-color);\n}\n.timeCard:hover {\n  cursor: pointer;\n}\nion-card p {\n  margin-top: 0;\n}\n.marginVertical {\n  margin: 16px 0;\n}\n.imgContainer {\n  width: 60px;\n  height: 60px;\n  margin: auto;\n}\n.imgContainer ion-img {\n  width: 100%;\n  height: 100%;\n}\n.iconBack {\n  background-image: url(\"/assets/feeling/empty.svg\");\n  background-color: transparent;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n.feelingDiv:hover {\n  cursor: pointer;\n  transition: background-color 0.3s;\n  background-color: #f9f9f9;\n  border-radius: 50%;\n}\nion-input#summary {\n  border: 1px solid transparent;\n  border-radius: 15px;\n}\nion-input#summary:focus-within {\n  border-color: var(--middle-purple-color);\n  color: black;\n}\n.diaryTime {\n  display: block;\n  color: var(--gray-color);\n  margin-bottom: -10px;\n}\n.diaryBtns .diaryBtn {\n  margin: 8px;\n}\n.diaryBtns ion-img {\n  margin-right: 5px;\n}\n.customBtn {\n  color: var(--red-color);\n}\n.customBtn:hover {\n  background-color: var(--middle-red-color);\n}\n.keywordBadge {\n  margin: 8px 4px;\n  background-color: var(--keyword-color);\n  border-radius: 30px;\n  color: black;\n}\n.keywordBadge:nth-child(1) {\n  background-color: var(--keyword-first-color);\n}\n.keywordBadge:hover,\n.keywordIcon:hover {\n  cursor: pointer;\n}\n.keywordIcon {\n  margin: 8px 0 8px 16px;\n}\nion-footer ion-button {\n  margin: 0px 0px 10px 0px;\n  height: 50px;\n  width: 90%;\n}\n.footer-md::before {\n  width: 0;\n  height: 0;\n}\n@media only screen and (min-width: 319.98px) {\n  .imgContainer {\n    width: 50px;\n    height: 50px;\n    margin: auto;\n  }\n  .imgContainer ion-img {\n    width: 100%;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1qb3VybmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQURJO0VBQ0UsMEJBQUE7QUFHTjtBQURJO0VBQ0UsNENBQUE7RUFDQSwwQkFBQTtBQUdOO0FBREk7RUFDRSx1QkFBQTtBQUdOO0FBRUE7RUFDRSxlQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7QUFDRjtBQUNBO0VBQ0UsY0FBQTtBQUVGO0FBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFHRjtBQUZFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFJSjtBQURBO0VBQ0Usa0RBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQUlGO0FBSUE7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBREY7QUFJQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdBO0VBQ0Usd0NBQUE7RUFDQSxZQUFBO0FBQUY7QUFFQTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFFRTtFQUNFLFdBQUE7QUFDSjtBQUNFO0VBQ0UsaUJBQUE7QUFDSjtBQUdBO0VBQ0UsdUJBQUE7QUFBRjtBQUVBO0VBQ0kseUNBQUE7QUFDSjtBQUNBO0VBQ0UsZUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRUY7QUFERTtFQUNFLDRDQUFBO0FBR0o7QUFBQTs7RUFFRSxlQUFBO0FBR0Y7QUFEQTtFQUNFLHNCQUFBO0FBSUY7QUFGQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFLRjtBQUhBO0VBQ0UsUUFBQTtFQUNBLFNBQUE7QUFNRjtBQUhBO0VBRUU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUFLRjtFQUpFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFNSjtBQUNGIiwiZmlsZSI6ImNyZWF0ZS1qb3VybmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgICB9XG4gICAgJi5hY3RpdmF0ZUJ0biB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRkbGUtcHVycGxlLWNvbG9yKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xuICAgIH1cbiAgICAmLnRyYXNoQnRuOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG4udGltZUNhcmQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1jYXJkIHAge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLm1hcmdpblZlcnRpY2FsIHtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG4uaW1nQ29udGFpbmVyIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBpb24taW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbi5pY29uQmFjayB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9mZWVsaW5nL2VtcHR5LnN2ZycpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAvLyBpb24taWNvbiB7XG4gIC8vICAgZGlzcGxheTogbm9uZTtcbiAgLy8gfVxuICAvLyAmOmhvdmVyIGlvbi1pY29uIHtcbiAgLy8gICBkaXNwbGF5OiBibG9jaztcbiAgLy8gfVxufVxuLmZlZWxpbmdEaXY6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pb24taW5wdXQjc3VtbWFyeSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuaW9uLWlucHV0I3N1bW1hcnk6Zm9jdXMtd2l0aGluIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1taWRkbGUtcHVycGxlLWNvbG9yKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmRpYXJ5VGltZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tZ3JheS1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufVxuLmRpYXJ5QnRucyB7XG4gIC5kaWFyeUJ0biB7XG4gICAgbWFyZ2luOiA4cHg7XG4gIH1cbiAgaW9uLWltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbn1cblxuLmN1c3RvbUJ0biB7XG4gIGNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xufVxuLmN1c3RvbUJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkZGxlLXJlZC1jb2xvcik7XG59XG4ua2V5d29yZEJhZGdlIHtcbiAgbWFyZ2luOiA4cHggNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1rZXl3b3JkLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgY29sb3I6IGJsYWNrO1xuICAmOm50aC1jaGlsZCgxKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2V5d29yZC1maXJzdC1jb2xvcik7XG4gIH1cbn1cbi5rZXl3b3JkQmFkZ2U6aG92ZXIsXG4ua2V5d29yZEljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ua2V5d29yZEljb24ge1xuICBtYXJnaW46IDhweCAwIDhweCAxNnB4O1xufVxuaW9uLWZvb3RlciBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG59XG4uZm9vdGVyLW1kOjpiZWZvcmUge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMxOS45OHB4KSB7XG5cbiAgLmltZ0NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBpb24taW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 8206:
/*!********************************************************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/journal-dismissed/journal-dismissed.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb3VybmFsLWRpc21pc3NlZC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 9449:
/*!****************************************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/recording/recording.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".imgContainer {\n  margin: 20px auto;\n  width: 100px;\n  height: 70px;\n  position: relative;\n}\n.imgContainer ion-img {\n  position: absolute;\n  width: 30%;\n  height: 30%;\n}\n.imgContainer ion-img:nth-child(1) {\n  width: 60%;\n  height: 60%;\n  bottom: 0;\n  left: 18px;\n}\n.imgContainer ion-img:nth-child(2) {\n  top: 20px;\n  left: -10px;\n}\n.imgContainer ion-img:nth-child(3) {\n  top: 0px;\n  right: 35px;\n}\n.imgContainer ion-img:nth-child(4) {\n  bottom: 15px;\n  right: -10px;\n}\n.redDot {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background-color: red;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFHTjtBQURJO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUFHTjtBQURJO0VBQ0UsUUFBQTtFQUNBLFdBQUE7QUFHTjtBQURJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFHTjtBQVNBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFORiIsImZpbGUiOiJyZWNvcmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nQ29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGlvbi1pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMzAlO1xuICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDE4cHg7XG4gICAgfVxuICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgIHRvcDogMjBweDtcbiAgICAgIGxlZnQ6IC0xMHB4O1xuICAgIH1cbiAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIHJpZ2h0OiAzNXB4O1xuICAgIH1cbiAgICAmOm50aC1jaGlsZCg0KSB7XG4gICAgICBib3R0b206IDE1cHg7XG4gICAgICByaWdodDogLTEwcHg7XG4gICAgfVxuICB9XG59XG5cbmlvbi1idXR0b24ge1xuICAmLnN0b3BCdG4ge1xuICB9XG4gIGlvbi1pY29uIHtcbiAgfVxufVxuXG4ucmVkRG90IHtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 9983:
/*!*******************************************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/setFeeling/set-feeling.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".popoverHeader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.popoverHeader div {\n  display: flex;\n  align-items: center;\n}\n.popoverHeader .customBtn {\n  margin-right: 0;\n}\n.popoverHeader .customBtn:hover {\n  color: var(--red-color);\n}\n.popoverHeader + div {\n  width: 250px;\n  margin: auto;\n}\n.imgContainer {\n  width: 30px;\n  height: 30px;\n  margin-right: 10px;\n}\n.feelContainer {\n  width: 50px;\n  height: 60px;\n  display: inline-block;\n  margin: 5px;\n}\n.feelContainer:hover {\n  cursor: pointer;\n}\n.feelContainer ion-img {\n  margin: auto;\n  width: 40px;\n  height: 40px;\n}\n.feelContainer p {\n  margin: 0;\n  text-align: center;\n  font-size: 13px;\n  color: #7E7E7E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldC1mZWVsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFRTtFQUNFLGVBQUE7QUFBSjtBQUVFO0VBQ0UsdUJBQUE7QUFBSjtBQUlBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFERjtBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUFGO0FBQ0U7RUFDRSxlQUFBO0FBQ0o7QUFDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6InNldC1mZWVsaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucG9wb3ZlckhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuY3VzdG9tQnRuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgLmN1c3RvbUJ0bjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkZGxlLXJlZC1jb2xvcik7XG4gIH1cbn1cbi5wb3BvdmVySGVhZGVyICsgZGl2IHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uaW1nQ29udGFpbmVyIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZmVlbENvbnRhaW5lciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA1cHg7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBpb24taW1nIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjN0U3RTdFO1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 8456:
/*!************************************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/writing/writing.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-header {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyaXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDRiIsImZpbGUiOiJ3cml0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 3129:
/*!********************************************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/add-keyword/add-keyword.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"ion-padding\">\n  <ion-input #inputEl [(ngModel)]=\"keywordVal\" placeholder=\"키워드를 입력해주세요\" autofocus (keypress)=\"onKeyPress($event)\"></ion-input>\n  <p *ngIf=\"show\">{{show}}</p>\n  <div>\n    <button class=\"customBtn\" (click)=\"onCancel()\">\n      취소\n    </button>\n    <button class=\"customBtn\" (click)=\"onAdd()\">\n      더하기\n    </button>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 6005:
/*!***********************************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/create-journal.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab2\" (click)=\"onCancel()\" ></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{day.year}}년 {{month}}월 {{day.dayNumber}}일</ion-title>\n    <ion-buttons slot=\"end\" class=\"container\">\n      <ion-button (click)=\"onShare($event)\" shape=\"round\" [class.activateBtn]=\"isShare\">\n        <ion-icon name=\"share-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"presentActionSheet()\" shape=\"round\" class=\"trashBtn\">\n        <ion-icon name=\"trash-bin-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-margin\">\n      <ion-col class=\"w100 ion-no-margin\" *ngFor=\"let item of feelings; let i = index\">\n        <ion-card class=\"ion-padding ion-no-margin timeCard\" [id]=\"'timeCard'+i\" (click)=\"onSetFeeling($event, i)\">\n          <p class=\"ion-text-center textBlack\">{{i===0 ?'아침': i===1 ? '점심' : '저녁'}}</p>\n          <div class=\"imgContainer dFlex feelingDiv\" [class.iconBack]=\"item === 'none'\">\n            <ion-icon *ngIf=\"item === 'none'\" name=\"add-circle\" size=\"large\" color=\"medium\"></ion-icon>\n            <ion-img *ngIf=\"item !== 'none'\" src=\"./assets/feeling/{{item}}.svg\"></ion-img>\n          </div>\n          <p class=\"ion-text-center\" style=\"font-size: 13px;\">{{feelNames[i]}}</p>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-card class=\"ion-padding w100\">\n        <p class=\"textBlack\">한 줄 일기</p>\n        <ion-card-content class=\"ion-no-padding\">\n          <ion-input [disabled]=\"!summary\" id=\"summary\" placeholder=\"오늘의 일기를 녹음 후 편집할 수 있어요\" [(ngModel)]=\"summary\" value=\"summary\" (ionFocus)=\"onSummaryFocus($event)\">\n          </ion-input>\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n    <ion-row>\n      <ion-card class=\"ion-padding w100\">\n        <p class=\"textBlack\">오늘의 일기</p>\n        <ion-card-content class=\"ion-no-padding\">\n          <div *ngIf=\"diary\">\n            <ion-row id=\"diary\" *ngFor=\"let sent of diary; let i=index;\">\n              <div class=\"ion-padding-horizontal ion-margin-end w100 diaryTime\">\n                {{sent.time}}\n              </div>\n              <ion-col size=\"10\">\n\n                <ion-input [(ngModel)]=\"diary[i].sentence\" value=\"sent.diary\"></ion-input>\n              </ion-col>\n              <ion-col size=\"2\">\n                <button class=\"customBtn\" (click)=\"onSentDelete(sent)\">X</button>\n              </ion-col>\n            </ion-row>\n          </div>\n          <!-- <ion-list *ngIf=\"diary\">\n            <ion-item id=\"diary\" *ngFor=\"let sent of diary; let i=index;\">\n              <div class=\"ion-padding-horizontal ion-margin-end diaryTime\">\n                {{sent.time}}\n              </div>\n              <br>\n              <ion-input [(ngModel)]=\"diary[i].sentence\" value=\"sent.diary\"></ion-input>\n              <button class=\"customBtn\" (click)=\"onSentDelete(sent)\">X</button>\n            </ion-item>\n          </ion-list> -->\n          <ion-buttons class=\"ion-justify-content-center diaryBtns\">\n            <ion-button class=\"diaryBtn\" (click)=\"writeDiary()\" shape=\"round\" fill=\"solid\" color=\"medium\">\n              <ion-img src=\"./assets/write_w.svg\"></ion-img>\n              바로 작성하기\n            </ion-button>\n            <ion-button class=\"diaryBtn\" (click)=\"onRecording()\" shape=\"round\" fill=\"solid\" color=\"medium\">\n              <ion-img src=\"./assets/recording_w.svg\"></ion-img>\n              녹음하기\n            </ion-button>\n          </ion-buttons>\n\n\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n    <ion-row>\n      <ion-card class=\"ion-padding w100\">\n        <p class=\"textBlack\">키워드</p>\n        <span class=\"dFlex ion-wrap keywordBadges\">\n          <span *ngIf=\"keywords\" >\n            <ion-badge\n              *ngFor=\"let word of keywords\"\n              (click)=\"onBadgeClicked(word)\"\n              size=\"large\" class=\"keywordBadge\"\n              >\n              {{word}}\n            </ion-badge>\n          </span>\n          <ion-icon (click)=\"onKeywordCreate($event)\" class=\"keywordIcon\" name=\"add-circle\" size=\"large\" color=\"medium\"></ion-icon>\n        </span>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer class=\"dFlex\">\n  <ion-button (click)=\"onJournalConfirm()\" shape=\"round\" color=\"custom\">\n    저장하기\n  </ion-button>\n</ion-footer>\n";

/***/ }),

/***/ 7066:
/*!********************************************************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/journal-dismissed/journal-dismissed.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\n  {{response | json}}\n</p>\n<p>\n  {{day | json}}\n</p>\n";

/***/ }),

/***/ 9215:
/*!****************************************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/recording/recording.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"ion-padding\">\n  <div class=\"imgContainer ion-padding\">\n    <ion-img src=\"./assets/feel_tab.svg\"></ion-img>\n    <ion-img *ngFor=\"let feel of feelings\"  src=\"./assets/feeling/{{feel}}.svg\"></ion-img>\n  </div>\n  <p class=\"ion-text-center\">오늘 하루를 기록 중이예요 :)</p>\n  <!-- <input type=\"file\" id=\"fileTest\" (change)=\"onFileUpload($event)\"> -->\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"dFlex\">\n        <ion-button class=\"stopBtn\" [disabled]=\"!isRecording\" (click)=\"onStopClicked()\" color=\"custom\" shape=\"circle\" >\n          <ion-icon slot=\"icon-only\" size=\"large\" name=\"stop\"></ion-icon>\n        </ion-button>\n        <!-- <ion-button (click)=\"sendRecord()\" color=\"custom\" >\n          <ion-icon name=\"save\"></ion-icon>\n        </ion-button> -->\n      </ion-col>\n      <ion-col class=\"dFlex\">\n        <ion-button class=\"playBtn\" *ngIf=\"!isRecording\" (click)=\"onPlayClicked()\" size=\"large\" color=\"custom\" shape=\"circle\" >\n          <ion-icon slot=\"icon-only\" name=\"play\" size=\"large\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"pauseBtn\" *ngIf=\"isRecording\" (click)=\"onPauseClicked()\" size=\"large\" color=\"custom\" shape=\"circle\" >\n          <ion-icon slot=\"icon-only\" name=\"pause\" size=\"large\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"dFlex\">\n        <div class=\"redDot\"></div>\n        <p>{{durationDisplay}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- <ion-list>\n    <ion-item button *ngFor=\"let f of storedFileNames\" [id]=\"f.name\" (click)=\"playFile(f)\">\n      {{ f.name }}\n    </ion-item>\n  </ion-list> -->\n</ion-content>\n";

/***/ }),

/***/ 4624:
/*!*******************************************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/setFeeling/set-feeling.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"popoverContainer ion-padding\">\n  <div class=\"popoverHeader\">\n    <div>\n      <ion-img class=\"imgContainer\" src=\"./assets/feel_tab.svg\"></ion-img>\n      <p> 오늘 {{timeStr}} 기분은 어떤가요? </p>\n    </div>\n    <button class=\"customBtn\" (click)=\"deleteFeeling()\">X</button>\n  </div>\n  <div>\n    <div class=\"feelContainer\" *ngFor=\"let item of imgList; let i=index;\" (click)=\"selectFeeling($event)\" >\n      <ion-img src=\"./assets/feeling/{{item}}.svg\"></ion-img>\n      <p>{{feelings[i]}}</p>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 7551:
/*!************************************************************************************!*\
  !*** ./src/app/tab2/mine/create-journal/writing/writing.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-padding\">\n  <p>\n    직접 작성하기\n  </p>\n  <ion-buttons>\n    <ion-button (click)=\"onCancel()\">취소</ion-button>\n    <ion-button (click)=\"onSave()\">저장</ion-button>\n  </ion-buttons>\n</ion-header>\n<ion-content>\n  <ion-textarea #inputEl autoGrow [(ngModel)]=\"val\" placeholder=\"오늘의 일기를 작성해주세요.\">\n  </ion-textarea>\n\n</ion-content>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map