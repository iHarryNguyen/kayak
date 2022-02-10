import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../services/data-service/data.service";

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.scss']
})
export class AirlineComponent implements OnInit {
  @Input() airlineInfo: any;

  imageRoot = 'https://www.kayak.com';
  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  redirect() {
    this.dataService.serviceData = this.airlineInfo;
    this.router.navigate(['details']);
  }
}
