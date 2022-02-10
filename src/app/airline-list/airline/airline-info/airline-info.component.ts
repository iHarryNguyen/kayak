import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../services/data-service/data.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-airline-info',
  templateUrl: './airline-info.component.html',
  styleUrls: ['./airline-info.component.scss']
})
export class AirlineInfoComponent implements OnInit {

  flightNumber = new FormControl('',[Validators.required]);
  airlineData: any;
  airlineCode: string;
  placeholder = "Enter flight number...";
  imageRoot = 'https://www.kayak.com';
  date = new Date().toISOString().split('T')[0];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.airlineData = this.dataService.serviceData;
    this.airlineCode = ' (' + this.airlineData.code + ')';
  }

  getErrorMessage() {
    if (this.flightNumber.hasError('required')) {
      return 'You must enter a value';
    }

    return this.flightNumber.hasError('flightNumber') ? 'Not a valid flight number' : '';
  }

  checkFlight() {
    window.location.href = "https://www.kayak.com/tracker/" + this.airlineData.code + '-' + this.flightNumber.value + '/' + this.date;
  }
}
