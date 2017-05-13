import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() latitude: number = 64.766584;
  @Input() longitude: number = 20.410207;

  constructor() { }

  ngOnInit() {
  }

}
