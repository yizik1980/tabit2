import { Component, Input, OnInit } from '@angular/core';
import { Current } from 'src/app/model/request';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  @Input()
  currentForcast:Current;
  constructor() { }

  ngOnInit(): void {
  }

}
