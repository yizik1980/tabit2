import { Component, Input, OnInit } from '@angular/core';
import { LocationSite } from 'src/app/model/request';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  locationSite:LocationSite;
  constructor() { }

  ngOnInit(): void {
  }

}
