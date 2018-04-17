import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Observable} from 'rxjs/Observable';

export class Parameters {
  barrageLvl = 0;
  waingungaLvl = 100;
  redirectUrl: string;
  redirectTimeout: string;
}

@Injectable()
export class GoogleSheetService {

  constructor(private http: HttpClient) {}

  getData(): Observable<Parameters> {
    const url = 'https://spreadsheets.google.com/feeds/list/1i5YKme8kLP2fegGgMLx-FJTxXLSYGSEx0W5sKHblXjw/od6/public/values?alt=json';
    return this.http.get<any>(url).map((res) => {
      console.log(res.feed.entry);
      const entry = res.feed.entry;
      const params: Parameters = {
        barrageLvl: entry[0].gsx$valeur.$t ? parseInt(entry[0].gsx$valeur.$t, 10) : 100 ,
        waingungaLvl: entry[1].gsx$valeur.$t ? parseInt(entry[1].gsx$valeur.$t, 10) : 100,
        redirectUrl: entry[2].gsx$valeur.$t,
        redirectTimeout: entry[3].gsx$valeur.$t,
      };
      console.log(params);
      return params;
    });
  }

}
