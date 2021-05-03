import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { weatherForcast } from './model/weatherForcast';
import { ApixuService } from './services/apixu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  forcast$:Observable<weatherForcast>;
  constructor(private apiux:ApixuService){
  }
  ngOnInit(): void {

    this.forcast$ = this.apiux.getWeatherData("tel aviv");
  }
  title = 'weather';
}
