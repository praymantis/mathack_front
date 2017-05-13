import { GeolocationService } from './../services/geolocation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GeolocationService]
})
export class SearchComponent implements OnInit {

  private latitude: number;
  private longitude: number;

  constructor(private geolocationService: GeolocationService) { }

  ngOnInit() {
    console.log('JEL INITUJE OVO SMECE?');
    this.geolocationService.updateLocation();
    this.latitude = this.geolocationService.getLatitude();
    this.latitude = this.geolocationService.getLongitude();
  }
}
