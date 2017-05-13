import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ng2 maptest';
  lat: number = 55.678418;
  lng: number = 6.809007;
}
