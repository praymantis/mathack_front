import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  latitude: number;
  longitude: number;

  constructor() { }

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    // console.log(here);
    const geoService = new GeoService();
    setTimeout(geoService.getPosition(), 1000);
    const position = geoService.position;
    this.latitude = position.coords.latitude;
    this.latitude = position.coords.longitude;
  }

}

class GeoService {
  public position: any;

  public getPosition() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.position = position;
      }
    );
  }
}
