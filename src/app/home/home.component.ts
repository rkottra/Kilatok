import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { Location } from '../location';
import { ViewPoint } from '../view-point';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public locations:Location[] = [];
  public viewpoints:ViewPoint[] = [];

  constructor (private backend:BackendService) {
    this.backend.getLocation().subscribe(
      (data) => {
        this.locations = data;
      }
    );
    this.backend.getViewpointsByLocationName("")
    .subscribe(
      (data) => {
        this.viewpoints = data;
      }
    );
  }

  onLocationChange(locationName:string) {
    this.backend.getViewpointsByLocationName(locationName)
    .subscribe(
      (data) => {
        this.viewpoints = data;
      }
    );
  }

}
