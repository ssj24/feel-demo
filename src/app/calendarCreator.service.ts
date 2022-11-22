/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Day } from './day.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarCreatorService {
  private currentYear: number;
  private currentMonthIndex: number;

  constructor(public http: HttpClient) {
    const date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonthIndex = date.getMonth(); // January == 0
  }

  public getCurrentMonth(): Day[] {
    return this.getMonth(this.currentMonthIndex, this.currentYear);
  }

  public getMonth(monthIndex: number, year: number) {
    // const firstday = this.createDay(year, monthIndex, 1);

    // for (let i = 1; i < firstday.weekDayNumber; i++) { // i start from 1 because week's first day is monday(0 => start from sunday)
    //   days.push({
    //     year,
    //     monthIndex,
    //     weekDayNumber: i,
    //   } as Day);
    // }
    // days.push(firstday);

    // const countDaysInMonth = new Date(year, monthIndex + 1, 0).getDate(); // if it's monthIndex, we can get days of prvious month
    // for (let i = 2; i <= countDaysInMonth; i++) { // since firstday is occupied, it starts from 2
    //   days.push(this.createDay(year, monthIndex, i));
    // }
    const data = {
      message: 'MonthDiary',
      id_mail:'test@test.com',
      StartDate: this.getDateFormatted(new Date(year, monthIndex, 1)),
      EndDate: this.getDateFormatted(new Date(year, monthIndex + 1, 0))
    };
    const days: Day[] = [];
    this.http.post('http://192.168.31.35:8000/MonthDiary/', data, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      })
      .toPromise()
      .then((res: any) => {
        for (const i of res) {
          const newDate = new Date(i.date);
          const newDay = {
            date: newDate,
            year: newDate.getFullYear(),
            monthIndex: newDate.getMonth(),
            weekDayNumber: newDate.getDay(),
            dayNumber: newDate.getDate(),
            feelings: i.feelings,
          };
          days.push(newDay);
        }
      })
      .catch(err => {
        console.log(err);
      });
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
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-11-15T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-11-16T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-11-17T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-11-18T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-11-19T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-11-20T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-11-21T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-11-22T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-11-23T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-11-24T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-11-25T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-11-26T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-11-27T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-11-28T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-11-29T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-11-30T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-12-01T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-12-02T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-12-03T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        },
        {
            id_mail: 'test@test.com',
            date: '2022-12-04T07:06:13.029000Z',
            feelings: ['happy', 'soso', 'good']
        }
      ];
      return days;
    }

  public getMonthName(monthIndex: number): string {
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

  public getWeekDayName(weekDay: number): string {
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

  public setData(target: Day, data: string[]) {
    if (target) { // target이랑 data랑 맞는지 검증
      target.feelings = data;
    }
  }

  private createDay(year: number, monthIndex: number, dayNumber: number) {
    const day = new Day();
    day.date = new Date(year, monthIndex, dayNumber);
    day.year = year;
    day.monthIndex = monthIndex;
    day.weekDayNumber = (day.date.getDay() === 0 ? 7 : day.date.getDay());
    day.dayNumber = dayNumber;
    day.feelings = ['none', 'none', 'none'];
    day.aLine = '';
    day.diary = [
        {
            time: 0,
            sentence: ''
        }
    ];
    day.keywords = [];
    day.recording = {};
    return day;
  }
  private getDateFormatted(date: Date){
    const year = date.getFullYear();
    const month = ('0' + (1 + date.getMonth())).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return year + '-' + month + '-' + day;
}
}
