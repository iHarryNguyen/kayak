import {Component, Input, OnInit} from '@angular/core';
import {AirlineServiceService} from "../services/airline/airline-service.service";
import {take} from "rxjs";

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.scss']
})
export class AirlineListComponent implements OnInit {
  @Input() filterString: string;

  airlines: Object[] = [];
  paginationSize = 6;

  constructor(
    private airlineService: AirlineServiceService
  ) { }

  ngOnInit(): void {
    this.airlineService.getAirlineInfo().pipe(take(1)).subscribe((airline: any) => {
      for(let i = 0; i < this.paginationSize; i++) {
        this.airlines.push(airline[i]);
      }
      //If we want all the data but for now we only will do logic for 6
      // for(let airlineInfo of airline) {
      //   this.airlines.push(airlineInfo);
      // }
    });
  }

  filterList() {

  }
}
