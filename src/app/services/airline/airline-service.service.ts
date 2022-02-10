import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AirlineServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getAirlineInfo() {
    return this.http.jsonp('https://www.kayak.com/h/mobileapis/directory/airlines/homework?', 'jsonp');
  }
}
