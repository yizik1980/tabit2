import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { weatherForcast } from '../model/weatherForcast';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  constructor(private http: HttpClient) { }

  getWeatherData(query: string): Observable<weatherForcast> {
    return this.http.get<weatherForcast>(environment.url + query);
  }
}
