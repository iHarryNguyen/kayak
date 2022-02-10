import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  filteredAirline: string;

  constructor() { }

  ngOnInit(): void {

  }

  createFilter(filter: string) {
    this.filteredAirline = filter;
    console.log(this.filteredAirline);
  }
}
