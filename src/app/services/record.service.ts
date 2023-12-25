import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Record } from '../models/record.model';
import { WeatherData} from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  selectedRecord?: WeatherData ;
  records?: WeatherData[];
  readonly baseURL = "http://localhost:3000/records";

  constructor(private http: HttpClient) { }
  postRecord(rec: WeatherData){
    return this.http.post(this.baseURL, rec);
  }
}
