import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {

  private latitude: number;
  private longitude: number;

  constructor() {
    this.updateLocation();
  }

  public getLatitude(): number {
    return this.latitude;
  }

  public getLongitude(): number {
    return this.longitude;
  }

  updateLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log(this.latitude);
        console.log(this.longitude);
      }
    );
  }
}
